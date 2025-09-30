import { useState } from 'react';

export default function SuperTI() {
  const [results, setResults] = useState('');

  const handleDownload = () => {
    setResults(`📥 DOWNLOAD DA VERSÃO LOCAL - SUPERTI COMPLETO

🚀 PARA BAIXAR A VERSÃO COMPLETA:

1. 📧 Entre em contato com: gean@email.com
2. 💬 Solicite o arquivo: SuperTI_Completo.zip
3. 🛠️ Receba o download direto

🔧 FUNCIONALIDADES DA VERSÃO LOCAL:

✅ ATIVAÇÃO WINDOWS - Completa e funcional
✅ COMANDOS SISTEMA - systeminfo, ipconfig, etc.
✅ FERRAMENTAS TI - 20+ opções profissionais
✅ SEGURANÇA - Execução como administrador

📋 O QUE INCLUI:

💻 Sistema Completo:
   • Informações detalhadas do sistema
   • Processos e serviços em tempo real
   • Gerenciamento de drivers
   • Monitoramento de desempenho

🌐 Rede Avançada:
   • Diagnóstico completo de rede
   • Reset de TCP/IP e Winsock
   • Testes de conectividade
   • Configurações avançadas

🛠️ Ferramentas:
   • Limpeza automática de temporários
   • Reparo do sistema Windows
   • Gerenciamento de usuários
   • Backup e restore

🪟 Ativação Windows:
   • Métodos seguros e confiáveis
   • Ativação digital
   • KMS para empresas
   • Verificação de status

📞 CONTATO PARA DOWNLOAD:
Email: gean@email.com
WhatsApp: (11) 99999-9999

💡 Versão web serve como demonstração.
A versão local tem TODAS as funcionalidades!`);
  };

  const showFeatures = () => {
    setResults(`🚀 TODAS AS FUNCIONALIDADES DO SUPERTI

🎯 VERSÃO LOCAL COMPLETA - BY GEAN

💻 MÓDULO SISTEMA:
1. Informações completas do sistema
2. Modelo e serial do computador
3. Detalhes da placa-mãe e BIOS
4. Memória RAM e processador
5. Drivers instalados
6. Variáveis de ambiente
7. Verificação de integridade (sfc /scannow)
8. Reparo da imagem Windows (DISM)

🌐 MÓDULO REDE:
9. Configuração completa de rede
10. Teste de ping e conectividade
11. Rastreamento de rota
12. Resolução DNS
13. Conexões de rede ativas
14. Endereço MAC e tabela ARP
15. Reset TCP/IP e Winsock
16. Tabela de rotas

💾 MÓDULO DISCOS:
17. Espaço em disco e partições
18. Verificação de discos (chkdsk)
19. Gerenciamento de discos
20. Estrutura de pastas
21. Limpeza segura de espaço

👥 MÓDULO USUÁRIOS:
22. Usuários logados e locais
23. Detalhes de usuários específicos
24. Sessões ativas (RDP/console)
25. Administradores locais
26. Políticas de senha

⚙️ MÓDULO PROCESSOS:
27. Lista completa de processos
28. Finalização de processos
29. Serviços ativos
30. Lista resumida de processos

🔧 MÓDULO FERRAMENTAS:
31. Ativação do Windows ★
32. Reinício do spooler de impressão
33. Limpeza de arquivos temporários
34. Download de programas (Zabbix, GLPI)

🛡️ SEGURANÇA:
• Execução como administrador
• Logs detalhados de todas as ações
• Verificação de segurança
• Backup automático de configurações

📥 CONTATE PARA RECEBER O DOWNLOAD!`);
  };

  const showInstructions = () => {
    setResults(`📋 COMO USAR O SUPERTI - GUIA COMPLETO

🎯 APÓS RECEBER O DOWNLOAD:

1. 📁 EXTRAIR ARQUIVO
   • Baixe o arquivo SuperTI_Completo.zip
   • Extraia em uma pasta de sua preferência
   • Exemplo: C:\\SuperTI\\

2. 🛡️ EXECUTAR COMO ADMINISTRADOR
   • Clique com botão direito em "SuperTI.bat"
   • Selecione "Executar como administrador"
   • Confirme a solicitação de UAC

3. 🎮 USAR O MENU PRINCIPAL
   • Interface colorida e organizada
   • 34 opções numeradas
   • Logs automáticos em C:\\SuporteTI\\

4. 🪟 ATIVAR WINDOWS
   • Selecione opção "8" no menu
   • Siga as instruções na tela
   • Ativação automática e segura

🔧 FUNCIONALIDADES ESPECIAIS:

✅ LOGS AUTOMÁTICOS
   • Todas as ações são registradas
   • Arquivo: C:\\SuporteTI\\logs.txt
   • Timestamp e detalhes completos

✅ INTERFACE PROFISSIONAL
   • Cores organizadas por categoria
   • Menu intuitivo e fácil navegação
   • Feedback visual de todas as ações

✅ SEM INSTALAÇÃO
   • Apenas extrair e executar
   • Não modifica registro
   • Não deixa resíduos

⚠️  RECOMENDAÇÕES:

• Sempre execute como administrador
• Mantenha antivírus atualizado
• Faça backup regularmente
• Use em ambiente autorizado

📞 SUPORTE:
gean@email.com - Para dúvidas e download`);
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
              Portal Oficial - Download da Versão Local
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
                🚀 Vercel
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
            ⚠️ Site Informativo - Download Sob Demanda
          </h3>
          <p style={{ color: '#92400e', marginBottom: '1rem' }}>
            Esta versão web mostra todas as funcionalidades disponíveis.
            <strong> Entre em contato para receber o download da versão local completa.</strong>
          </p>
        </div>

        {/* Grid de Ações */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          
          {/* Download */}
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
              onClick={handleDownload}
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
              📧 SOLICITAR DOWNLOAD
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Entre em contato para receber o arquivo
            </p>
          </div>

          {/* Funcionalidades */}
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
              color: '#2563eb',
              marginBottom: '1rem'
            }}>
              🚀 Funcionalidades
            </h3>
            <button 
              onClick={showFeatures}
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
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
              📋 VER TODAS
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              34 ferramentas profissionais
            </p>
          </div>

          {/* Instruções */}
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
              color: '#059669',
              marginBottom: '1rem'
            }}>
              💡 Instruções
            </h3>
            <button 
              onClick={showInstructions}
              style={{
                width: '100%',
                backgroundColor: '#10b981',
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
              🛠️ COMO USAR
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Guia completo de utilização
            </p>
          </div>
        </div>

        {/* Área de Informações */}
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
            minHeight: '300px',
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
              By Gean • 📧 Contato para download • 🪟 Ativação Windows Disponível
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
