from flask import Flask, render_template, request, jsonify, send_file
import subprocess
import os
import threading
from datetime import datetime
import json

app = Flask(__name__)

# Configurações
LOG_DIR = "logs"
if not os.path.exists(LOG_DIR):
    os.makedirs(LOG_DIR)

# Verificar se a pasta templates existe
TEMPLATES_DIR = "templates"
if not os.path.exists(TEMPLATES_DIR):
    os.makedirs(TEMPLATES_DIR)
    print(f"✅ Pasta '{TEMPLATES_DIR}' criada!")

class CommandRunner:
    def __init__(self):
        self.log_file = os.path.join(LOG_DIR, "super_ti_web.log")
    
    def run_command(self, command, description):
        try:
            # Log inicial
            log_entry = f"[{datetime.now()}] INICIADO: {description}\nComando: {command}\n"
            
            # Executa o comando
            result = subprocess.run(
                command, 
                shell=True, 
                capture_output=True, 
                text=True, 
                encoding='cp850',
                timeout=300
            )
            
            # Monta log completo
            log_entry += f"Saída:\n{result.stdout}\n"
            if result.stderr:
                log_entry += f"Erros:\n{result.stderr}\n"
            log_entry += f"Status: CONCLUÍDO\n{'='*50}\n"
            
            # Salva no arquivo de log
            with open(self.log_file, 'a', encoding='utf-8') as f:
                f.write(log_entry)
            
            return {
                'success': True,
                'description': description,
                'output': result.stdout,
                'error': result.stderr,
                'returncode': result.returncode
            }
            
        except Exception as e:
            error_msg = f"Erro em {description}: {str(e)}"
            with open(self.log_file, 'a', encoding='utf-8') as f:
                f.write(f"ERRO: {error_msg}\n")
            return {'success': False, 'error': error_msg}

command_runner = CommandRunner()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/quick-command/<action>')
def quick_command(action):
    """Comandos rápidos pré-definidos"""
    commands = {
        'systeminfo': ('systeminfo', 'Informações do Sistema'),
        'ipconfig': ('ipconfig /all', 'Configuração de Rede'),
        'disk_info': ('wmic logicaldisk get name,size,freespace', 'Informações de Discos'),
        'services': ('sc query', 'Serviços do Windows'),
        'processes': ('tasklist', 'Processos em Execução'),
        'users': ('net user', 'Usuários Locais'),
        'network_connections': ('netstat -ano', 'Conexões de Rede'),
        'spooler_restart': ('net stop spooler && net start spooler', 'Reiniciar Spooler'),
        'clean_temp': ('del /q /f /s %TEMP%\\*', 'Limpar Arquivos Temporários'),
        'activate_windows': ('powershell -Command "irm https://get.activated.win | iex"', 'Ativar Windows')
    }
    
    if action in commands:
        command, description = commands[action]
        result = command_runner.run_command(command, description)
        return jsonify(result)
    else:
        return jsonify({'success': False, 'error': 'Ação não encontrada'})

@app.route('/logs')
def view_logs():
    """Visualizar logs"""
    try:
        with open(command_runner.log_file, 'r', encoding='utf-8') as f:
            logs = f.read()
        return f"<pre>{logs}</pre>"
    except FileNotFoundError:
        return "Nenhum log encontrado"

if __name__ == '__main__':
    print("🚀 Iniciando SuperTI Web...")
    print("📁 Verificando estrutura de pastas...")
    
    # Verificar se templates existe
    if not os.path.exists('templates'):
        print("❌ ERRO: Pasta 'templates' não encontrada!")
        print("👉 Crie manualmente: mkdir templates")
    else:
        print("✅ Pasta 'templates' encontrada!")
    
    if not os.path.exists('logs'):
        os.makedirs('logs')
        print("✅ Pasta 'logs' criada!")
    
    print("🌐 Servidor rodando em: http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)