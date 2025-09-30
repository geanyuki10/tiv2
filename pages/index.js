import { useState } from 'react';

export default function SuperTI() {
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const downloadLocalVersion = () => {
    setResults(`📥 DOWNLOAD DA VERSÃO LOCAL - SUPERTI COMPLETO

🚀 POR QUE PRECISA DA VERSÃO LOCAL?

• ✅ ATIVAR WINDOWS - Funciona apenas localmente
• ✅ COMANDOS REAIS - systeminfo, ipconfig, tasklist, etc.
• ✅ ADMINISTRADOR - Acesso total ao sistema
• ✅ SEM LIMITAÇÕES - Todas as 20+ ferramentas funcionando

📦 COMO BAIXAR E USAR:

1️⃣ 📥 BAIXAR AGORA:
   • Clique no link abaixo para baixar
   • Salve o arquivo em qualquer pasta

2️⃣ 🛠️ INSTALAÇÃO:
   • Extraia o arquivo ZIP
   • Execute "SuperTI.bat" como Administrador
   • Pronto! Todas as funções liberadas

3️⃣ 🪟 ATIVAÇÃO DO WINDOWS:
   • Na versão local, selecione opção "8"
   • Sistema ativado automaticamente
   • 100% funcional

🔧 FUNCIONALIDADES DA VERSÃO LOCAL:

💻 SISTEMA COMPLETO:
   • Informações detalhadas do sistema
   • Processos e serviços
   • Drivers e hardware
   • Memória e desempenho

🌐 REDE AVANÇADA:
   • Configuração completa de rede
   • Testes de conectividade
   • Diagnóstico DNS
   • Reset de TCP/IP

🛠️ FERRAMENTAS REAIS:
   • Limpeza automática de temporários
   • Reparo do sistema Windows
   • Gerenciamento de usuários
   • Backup e restore

🎯 RECOMENDAÇÃO:
Baixe agora a versão local para acesso
COMPLETO a todas as ferramentas!`);
  };

  const showWebLimitations = () => {
    setResults(`⚠️  LIMITAÇÕES DA VERSÃO WEB

🔒 POR QUE ALGUMAS COISAS NÃO FUNCIONAM AQUI:

• 🚫 COMANDOS WINDOWS - Não temos acesso ao systeminfo, ipconfig, etc.
• 🚫 ADMINISTRADOR - Aplicação web não tem privilégios de admin
• 🚫 ACESSO AO SISTEMA - Segurança do navegador bloqueia
• 🚫 ATIVAÇÃO WINDOWS - Requer execução local

🌐 O QUE FUNCIONA NA WEB:
• ✅ Interface visual
• ✅ Guias e instruções
• ✅ Links para download
• ✅ Informações básicas

💡 SOLUÇÃO:
Use a VERSÃO LOCAL para todas as funcionalidades
completas do SuperTI!`);
  };

  const showSecurityInfo = () => {
    setResults(`🛡️ INFORMAÇÕES DE SEGURANÇA

✅ VERSÃO LOCAL - SUPERTI COMPLETO:

• 🔒 EXECUÇÃO SEGURA - Como Administrador
• 🔍 CÓDigo VERIFICADO - Scripts confiáveis
• 📊 LOGS DETALHADOS - Tudo é registrado
• 🚫 SEM VÍRUS - 100% limpo

⚠️  RECOMENDAÇÕES DE SEGURANÇA:

1. SEMPRE execute como Administrador
2. Mantenha o Windows Update ativo
3. Use antivírus atualizado
4. Faça backup regularmente

🔐 SEGURANÇA DA ATIVAÇÃO:
• Scripts de fontes confiáveis
• Verificação de integridade
• Logs detalhados de execução

📥 Baixe a versão local para segurança completa!`);
  };

  const showCleanupInfo = () => {
    setResults(`🧹 LIMPEZA DO SISTEMA - GUIA COMPLETO

🛠️ NA VERSÃO LOCAL DO SUPERTI:

✅ LIMPEZA AUTOMÁTICA:
   • Arquivos temporários (%temp%)
   • Cache do sistema
   • Logs antigos
   • Lixeira

✅ OTIMIZAÇÃO:
   • Limpeza de disco
   • Desfragmentação
   • Reparo do registro

✅ MANUTENÇÃO:
   • Verificação de arquivos do sistema
   • Reparo do Windows Update
   • Limpeza de atualizações antigas

📋 COMANDOS EXECUTADOS AUTOMATICAMENTE:

• del /q /f /s %temp%\\*
• cleanmgr /sagerun:1
• sfc /scannow
• dism /online /cleanup-image /restorehealth

🚀 FUNCIONALIDADES COMPLETAS APENAS NA VERSÃO LOCAL!
📥 Clique em "Download Versão Local" para baixar!`);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6',
      padding: '2rem 0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: '1.5rem',
            padding: '2rem',
            color: 'white',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}>
              🛠️ SuperTI Web
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
              Portal de Download - Versão Local Completa
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span style={{ 
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                margin: '0 0.5rem'
              }}>
                By Gean
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                margin: '0 0.5rem'
              }}>
                🚀 Download Local
              </span>
            </div>
          </div>
        </header>

        {/* Aviso Importante */}
        <div style={{
          backgroundColor: '#fef3c7',
          border: '2px solid #f59e0b',
          borderRadius: '1rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            color: '#92400e',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            ⚠️ Atenção: Versão Web Limitada
          </h3>
          <p style={{ color: '#92400e', marginBottom: '1rem' }}>
            Esta versão web serve apenas como portal de informações e download.
            <strong> Todas as funcionalidades reais funcionam apenas na versão local.</strong>
          </p>
          <button 
            onClick={downloadLocalVersion}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer'
            }}
          >
            📥 BAIXAR VERSÃO LOCAL COMPLETA
          </button>
        </div>

        {/* Grid de Informações */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          
          {/* Download Principal */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#dc2626',
              marginBottom: '1rem'
            }}>
              📥 Download
            </h3>
            <button 
              onClick={downloadLocalVersion}
              style={{
                width: '100%',
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
            >
              🛠️ BAIXAR SUPERTI COMPLETO
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Versão local com todas as 20+ ferramentas funcionando
            </p>
          </div>

          {/* Funcionalidades */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: '1rem'
            }}>
              🚀 Funcionalidades
            </h3>
            <button 
              onClick={showWebLimitations}
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontWeight: '600',
                marginBottom: '0.75rem',
                cursor: 'pointer'
              }}
            >
              📋 Ver Todas as Ferramentas
            </button>
            <button 
              onClick={showSecurityInfo}
              style={{
                width: '100%',
                backgroundColor: '#10b981',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontWeight: '600',
                marginBottom: '0.75rem',
                cursor: 'pointer'
              }}
            >
              🛡️ Segurança
            </button>
          </div>

          {/* Ajuda */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#8b5cf6',
              marginBottom: '1rem'
            }}>
              💡 Ajuda
            </h3>
            <button 
              onClick={showCleanupInfo}
              style={{
                width: '100%',
                backgroundColor: '#8b5cf6',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontWeight: '600',
                marginBottom: '0.75rem',
                cursor: 'pointer'
              }}
            >
              🧹 Limpeza do Sistema
            </button>
            <button 
              onClick={downloadLocalVersion}
              style={{
                width: '100%',
                backgroundColor: '#7c3aed',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              🪟 Ativar Windows
            </button>
          </div>
        </div>

        {/* Instruções de Download */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            📋 Como Usar a Versão Local
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>1️⃣</div>
              <h4 style={{ fontWeight: 'bold', color: '#3b82f6' }}>Baixar</h4>
              <p style={{ color: '#6b7280' }}>Clique no botão de download acima</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>2️⃣</div>
              <h4 style={{ fontWeight: 'bold', color: '#10b981' }}>Executar</h4>
              <p style={{ color: '#6b7280' }}>Como Administrador</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>3️⃣</div>
              <h4 style={{ fontWeight: 'bold', color: '#f59e0b' }}>Usar</h4>
              <p style={{ color: '#6b7280' }}>Todas as ferramentas liberadas</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>4️⃣</div>
              <h4 style={{ fontWeight: 'bold', color: '#8b5cf6' }}>Ativar</h4>
              <p style={{ color: '#6b7280' }}>Windows e outras funções</p>
            </div>
          </div>
        </div>

        {/* Área de Resultados */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '1rem'
          }}>
            📊 Informações
          </h3>
          <div style={{
            backgroundColor: '#1f2937',
            color: '#10b981',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            whiteSpace: 'pre-wrap',
            minHeight: '200px',
            maxHeight: '500px',
            overflowY: 'auto',
            border: '2px solid #374151'
          }}>
            {results || '👆 Clique em algum botão acima para ver informações detalhadas...'}
          </div>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
              🚀 SuperTI - Ferramenta Completa de Suporte de TI
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              By Gean • 📧 Suporte • 🪟 Ativação Windows Disponível na Versão Local
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
