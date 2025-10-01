import { useState } from 'react';

export default function SuperTI() {
  const [results, setResults] = useState('');

  // DOWNLOAD DIRETO - Link do OneDrive
  const handleDownload = () => {
    // Seu link do OneDrive (convertido para link direto de download)
    const downloadUrl = 'https://1drv.ms/u/s!ETW_sjWqKf9CmCoiv3eFbPIBOWGEQIK8reGGN-41avDUEA?e=8mYRDr';
    
    // Converter link do OneDrive para link direto (se necessário)
    const directDownloadUrl = downloadUrl.replace('https://1drv.ms/u/', 'https://onedrive.live.com/download?resid=');
    
    // Abrir download em nova aba
    window.open(directDownloadUrl, '_blank');
    
    setResults(`📥 DOWNLOAD INICIADO - SUPERTI COMPLETO

✅ Download iniciado em nova aba!

🔗 LINK DO ARQUIVO: 
${downloadUrl}

📦 DETALHES DO DOWNLOAD:

• 🛠️ SuperTI Completo - Versão Local
• 📁 Arquivo executável pronto para usar
• 🪟 Ativador do Windows incluído
• 🔧 36 ferramentas de suporte TI
• 💻 Interface gráfica profissional

🚀 COMO USAR APÓS BAIXAR:

1. 📁 Baixe o arquivo do link acima
2. 🛡️ Clique direito no executável
3. ⚡ Selecione "Executar como administrador"
4. 🎯 Use todas as 36 funcionalidades

✨ FUNCIONALIDADES INCLUÍDAS:

💻 SISTEMA COMPLETO:
   • Informações detalhadas do sistema
   • Processos e serviços em tempo real
   • Gerenciamento de drivers
   • Monitoramento de desempenho

🌐 REDE AVANÇADA:
   • Diagnóstico completo de rede
   • Reset de TCP/IP e Winsock
   • Testes de conectividade
   • Configurações avançadas

🛠️ FERRAMENTAS:
   • Ativação do Windows ★
   • Limpeza automática de temporários
   • Reparo do sistema Windows
   • Gerenciamento de usuários
   • Downloads de programas (Zabbix, GLPI)

📊 LOGS DETALHADOS:
   • Todas as ações registradas
   • Timestamp em todas as operações
   • Arquivo: C:\\SuporteTI\\super_ti_gui.log

🔒 SEGURO E CONFIÁVEL!
By Gean - Ferramenta profissional de TI

💡 DICA: Sempre execute como Administrador
para acesso total às funcionalidades!`);
  };

  const showFeatures = () => {
    setResults(`🚀 TODAS AS FUNCIONALIDADES DO SUPERTI

🎯 VERSÃO LOCAL COMPLETA - BY GEAN

💻 MÓDULO SISTEMA (6 funções):
1. Informações completas do sistema
2. Modelo e serial do computador
3. Detalhes da placa-mãe e BIOS
4. Memória RAM e processador
5. Drivers instalados
6. Variáveis de ambiente

🌐 MÓDULO REDE (6 funções):
7. Configuração completa de rede
8. Teste de ping e conectividade
9. Rastreamento de rota
10. Resolução DNS
11. Conexões de rede ativas
12. Endereço MAC e tabela ARP

💾 MÓDULO DISCOS (6 funções):
13. Espaço em disco e partições
14. Verificação de discos (chkdsk)
15. Gerenciamento de discos
16. Estrutura de pastas
17. Limpeza segura de espaço
18. Listagem de unidades

👥 MÓDULO USUÁRIOS (6 funções):
19. Usuários logados e locais
20. Detalhes de usuários específicos
21. Sessões ativas (RDP/console)
22. Administradores locais
23. Políticas de senha
24. Informações de usuário

⚙️ MÓDULO PROCESSOS (6 funções):
25. Lista completa de processos
26. Finalização de processos
27. Serviços ativos
28. Lista resumida de processos
29. Uso da CPU
30. Memória livre

🔧 MÓDULO ADMINISTRATIVO (6 funções):
31. Ativação do Windows ★
32. Reinício do spooler de impressão
33. Limpeza de arquivos temporários
34. Reparo do sistema (sfc /scannow)
35. Reset de configurações de rede
36. Downloads de programas

📦 MÓDULO DOWNLOADS (5 funções):
37. Zabbix Agent - Monitoramento
38. GLPI Agent - Gerenciamento TI
39. Google Chrome
40. Mozilla Firefox
41. VLC Media Player

🛡️ RECURSOS AVANÇADOS:
• Interface gráfica moderna
• Logs automáticos detalhados
• Execução como administrador
• Threading para não travar
• Timeout inteligente

📥 BAIXE AGORA PARA ACESSO COMPLETO!`);
  };

  const showInstructions = () => {
    setResults(`📋 COMO USAR O SUPERTI - GUIA COMPLETO

🎯 APÓS BAIXAR O ARQUIVO:

1. 📥 BAIXAR ARQUIVO
   • Clique em "BAIXE AGORA" acima
   • Salve o arquivo em sua pasta preferida
   • Exemplo: Área de Trabalho ou Downloads

2. 🛡️ EXECUTAR COMO ADMINISTRADOR
   • Clique com botão direito no executável
   • Selecione "Executar como administrador"
   • Confirme a solicitação de UAC (Controle de Conta de Usuário)

3. 🎮 USAR A INTERFACE
   • 6 seções organizadas por categoria
   • 36 botões com funcionalidades específicas
   • Área de saída em tempo real
   • Logs automáticos

4. 🪟 ATIVAR WINDOWS
   • Selecione "🪟 Ativar Windows" no módulo Administrativo
   • Siga as instruções na tela
   • Ativação automática e segura

🔧 FUNCIONALIDADES ESPECIAIS:

✅ INTERFACE MODERNA
   • Design profissional e intuitivo
   • Cores organizadas por categoria
   • Navegação fácil e rápida

✅ LOGS AUTOMÁTICOS
   • Todas as ações são registradas
   • Arquivo: C:\\SuporteTI\\super_ti_gui.log
   • Timestamp e detalhes completos

✅ DOWNLOADS INTEGRADOS
   • Zabbix Agent - Monitoramento
   • GLPI Agent - Gerenciamento TI
   • Programas úteis diretamente

✅ SEGURANÇA
   • Execução como administrador
   • Comandos verificados
   • Sem modificações perigosas

⚠️  RECOMENDAÇÕES IMPORTANTES:

• 🔒 Sempre execute como administrador
• 🔄 Mantenha Windows Update ativo
• 🛡️ Use antivírus atualizado
• 💾 Faça backup regularmente
• ⚠️ Use em ambiente autorizado

📞 SUPORTE E CONTATO:
By Gean - Disponível para dúvidas e suporte

🎯 VERSÃO WEB vs VERSÃO LOCAL:

🌐 VERSÃO WEB (esta página):
   • Informações e demonstração
   • Portal de download
   • Guias e instruções

💻 VERSÃO LOCAL (download):
   • 36 funcionalidades completas
   • Comandos reais do Windows
   • Interface gráfica profissional
   • Acesso total ao sistema

📥 CLIQUE EM "BAIXE AGORA" PARA EXPERIÊNCIA COMPLETA!`);
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
                🚀 Download Direto
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
            ⚡ Download Direto Disponível!
          </h3>
          <p style={{ color: '#92400e', marginBottom: '1rem' }}>
            A versão completa do SuperTI está disponível para download imediato.
            <strong> Todas as 36 funcionalidades na versão local.</strong>
          </p>
          <button 
            onClick={handleDownload}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            🚀 BAIXE AGORA - SUPERTI COMPLETO
          </button>
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
              🚀 BAIXAR AGORA
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Versão local com 36 funcionalidades
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
              36 ferramentas profissionais
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
              By Gean • 📥 Download Direto • 🪟 Ativação Windows Disponível
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
