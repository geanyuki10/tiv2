import { useState } from 'react';

export default function SuperTI() {
  const [results, setResults] = useState('');

  // DOWNLOAD DIRETO - Link do MediaFire
  const handleDownload = () => {
    // Novo link do MediaFire
    const downloadUrl = 'https://www.mediafire.com/file/18t3v36rzig5my7/ti_guiv1.rar/file';
    
    // Abrir download em nova aba
    window.open(downloadUrl, '_blank');
    
    setResults(`📥 DOWNLOAD INICIADO - SUPERTI COMPLETO

✅ Download iniciado em nova aba!

🔗 LINK DIRETO: 
${downloadUrl}

📦 DETALHES DO ARQUIVO:

• 🛠️ SuperTI Completo - Versão v1.0
• 📁 Arquivo: ti_guiv1.rar (compactado)
• 💾 Tamanho: ~15 MB
• 🪟 Ativador do Windows incluído
• 🔧 36 ferramentas de suporte TI
• 💻 Interface gráfica profissional

🚀 COMO USAR APÓS BAIXAR:

1. 📥 BAIXAR ARQUIVO
   • O download iniciará automaticamente
   • Aguarde o arquivo baixar completamente

2. 📁 EXTRAIR ARQUIVO RAR
   • Você precisará do WinRAR ou 7-Zip
   • Clique direito no arquivo .rar
   • Selecione "Extrair aqui" ou "Extract here"

3. 🛡️ EXECUTAR COMO ADMINISTRADOR
   • Dentro da pasta extraída, encontre o executável
   • Clique direito no "SuperTI_By_Gean.exe"
   • Selecione "Executar como administrador"

4. 🎯 USAR TODAS AS FUNCIONALIDADES
   • 36 ferramentas organizadas em 6 categorias
   • Interface intuitiva e profissional
   • Logs automáticos em C:\\SuporteTI\\

✨ FUNCIONALIDADES INCLUÍDAS:

💻 SISTEMA COMPLETO (6 funções):
   • Informações detalhadas do sistema
   • Processos e serviços em tempo real
   • Gerenciamento de drivers
   • Monitoramento de desempenho

🌐 REDE AVANÇADA (6 funções):
   • Diagnóstico completo de rede
   • Reset de TCP/IP e Winsock
   • Testes de conectividade
   • Configurações avançadas

🛠️ FERRAMENTAS (24 funções restantes):
   • Ativação do Windows ★
   • Limpeza automática de temporários
   • Reparo do sistema Windows
   • Gerenciamento de usuários
   • Downloads de programas (Zabbix, GLPI)
   • E muito mais!

📊 LOGS DETALHADOS:
   • Todas as ações registradas
   • Timestamp em todas as operações
   • Arquivo: C:\\SuporteTI\\super_ti_gui.log

🔒 SEGURO E CONFIÁVEL!
By Gean - Ferramenta profissional de TI

💡 DICA: Sempre execute como Administrador
para acesso total às funcionalidades!

⚠️  EXTRACAO DO ARQUIVO:
Lembre-se de extrair o arquivo .rar antes de executar!
Use WinRAR, 7-Zip ou similar.`);
  };

  const showFeatures = () => {
    setResults(`🚀 TODAS AS FUNCIONALIDADES DO SUPERTI v1.0

🎯 VERSÃO LOCAL COMPLETA - BY GEAN

💻 MÓDULO SISTEMA (6 funções):
1. 💻 System Info - Informações completas
2. 🖥️ Modelo PC - Detalhes do hardware
3. 🧠 Memória RAM - Capacidade e velocidade
4. 🔧 Drivers - Lista de drivers instalados
5. ⚙️ Variáveis - Variáveis de ambiente
6. 🔄 Versão Windows - Versão do sistema

🌐 MÓDULO REDE (6 funções):
7. 🌐 IP Config - Configuração completa
8. 📡 Conexões - Conexões de rede ativas
9. 🏓 Ping Test - Teste de conectividade
10. 🔍 DNS Info - Resolução DNS
11. 🛣️ Tracert - Rastreamento de rota
12. 📊 Tabela ARP - Tabela ARP local

💾 MÓDULO DISCOS (6 funções):
13. 💾 Discos - Espaço em disco
14. 🔍 Verificar Disco - CHKDSK do disco C
15. 📁 Unidades - Unidades conectadas
16. 🌳 Tree - Estrutura de pastas
17. 🧹 Limpar Temp - Limpeza temporários
18. 📋 Listar Pastas - Listagem de diretórios

👥 MÓDULO USUÁRIOS (6 funções):
19. 👤 Usuário Logado - Usuário atual
20. 👥 Todos Usuários - Usuários do sistema
21. 🛡️ Administradores - Admins locais
22. 🔐 Políticas - Políticas de senha
23. 💻 Sessões - Sessões ativas
24. 📊 Info Usuário - Detalhes do usuário

⚙️ MÓDULO PROCESSOS (6 funções):
25. 📋 Lista Processos - Processos ativos
26. ⚡ Processos WMIC - Lista resumida
27. 🔧 Serviços - Serviços do Windows
28. 🛑 Finalizar Proc - Finalizar processos
29. 📊 CPU Info - Uso da CPU
30. 🧮 Memória Info - Memória livre

🔧 MÓDULO ADMINISTRATIVO (6 funções):
31. 🪟 Ativar Windows ★ - Ativação completa
32. 🖨️ Spooler - Reiniciar spooler impressão
33. 🔧 Reparar Sistema - SFC e DISM
34. 🔄 Reset Rede - Reset Winsock/TCPIP
35. 🧹 Limpeza Completa - Limpeza total
36. 📊 Info Sistema - Informações detalhadas

📦 MÓDULO DOWNLOADS (5 funções extras):
37. 📥 Zabbix Agent - Monitoramento
38. 📥 GLPI Agent - Gerenciamento TI
39. 🔧 Chrome - Navegador web
40. 🦊 Firefox - Navegador web
41. 📹 VLC Player - Reprodutor de mídia

🛡️ RECURSOS AVANÇADOS:
• Interface gráfica moderna
• Logs automáticos detalhados
• Execução como administrador
• Threading para não travar
• Timeout inteligente
• Design profissional

📥 BAIXE AGORA PARA ACESSO COMPLETO!`);
  };

  const showInstructions = () => {
    setResults(`📋 COMO USAR O SUPERTI v1.0 - GUIA COMPLETO

🎯 PASSO A PASSO APÓS BAIXAR:

1. 📥 BAIXAR ARQUIVO
   • Clique em "🚀 BAIXE AGORA" acima
   • Aguarde o download do "ti_guiv1.rar"
   • Salve em local de fácil acesso

2. 📁 EXTRAIR ARQUIVO RAR
   • Arquivo: ti_guiv1.rar (~15 MB)
   • Use WinRAR, 7-Zip ou similar
   • Clique direito → "Extrair aqui"
   • Uma pasta será criada com os arquivos

3. 🛡️ EXECUTAR COMO ADMINISTRADOR
   • Encontre o "SuperTI_By_Gean.exe"
   • Clique direito → "Executar como administrador"
   • Confirme a solicitação de UAC

4. 🎮 USAR A INTERFACE
   • 6 seções organizadas por categoria
   • 36+ botões com funcionalidades
   • Área de saída em tempo real
   • Logs automáticos

🔧 EXTRACAÇÃO DO RAR (IMPORTANTE):

💡 SE NÃO TEM PROGRAMA PARA EXTRAIR:
• Baixe o 7-Zip GRATUITO: https://www.7-zip.org/
• Ou WinRAR: https://www.win-rar.com/

📁 APÓS EXTRAIR, VOCÊ TERÁ:
• SuperTI_By_Gean.exe (executável principal)
• Outros arquivos de suporte (se houver)

🪟 ATIVAÇÃO DO WINDOWS:

1. Execute como Administrador
2. Clique em "🪟 Ativar Windows"
3. Confirme a execução
4. Siga as instruções na tela

⚠️  RECOMENDAÇÕES IMPORTANTES:

• 🔒 SEMPRE execute como administrador
• 🔄 Mantenha Windows Update ativo
• 🛡️ Use antivírus atualizado
• 💾 Faça backup regularmente
• ⚠️ Use em ambiente autorizado

🎯 DIFERENÇAS DAS VERSÕES:

🌐 VERSÃO WEB (esta página):
   • Portal informativo
   • Download da versão local
   • Guias e instruções

💻 VERSÃO LOCAL (download):
   • 36+ funcionalidades reais
   • Comandos Windows completos
   • Interface gráfica profissional
   • Acesso total ao sistema
   • Logs detalhados

📞 SUPORTE:
By Gean - Disponível para dúvidas

🚀 CLIQUE EM "BAIXE AGORA" E EXPERIMENTE
A VERSÃO COMPLETA DO SUPERTI!`);
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
              Download Direto - Versão v1.0 Completa
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
                🚀 MediaFire
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                margin: '0 0.5rem'
              }}>
                v1.0
              </span>
            </div>
          </div>
        </header>

        {/* Aviso Importante */}
        <div style={{
          backgroundColor: '#d1fae5',
          border: '2px solid #10b981',
          borderRadius: '1rem',
          padding: '1.5rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            color: '#065f46',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            ⚡ Download Direto via MediaFire!
          </h3>
          <p style={{ color: '#065f46', marginBottom: '1rem' }}>
            <strong>SuperTI v1.0</strong> - Versão completa com 36 funcionalidades.
            Download rápido e direto.
          </p>
          <button 
            onClick={handleDownload}
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            🚀 BAIXAR AGORA - SUPERTI v1.0
          </button>
          <p style={{ color: '#065f46', fontSize: '0.9rem', marginTop: '1rem' }}>
            📦 Arquivo: ti_guiv1.rar | 💾 ~15 MB | ⏱️ Download Rápido
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
              color: '#10b981',
              marginBottom: '1rem'
            }}>
              📥 Download
            </h3>
            <button 
              onClick={handleDownload}
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
              🚀 BAIXAR v1.0
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              MediaFire | RAR | 36 funções
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
              📋 36 FERRAMENTAS
            </button>
            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
              Versão completa v1.0
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
              color: '#7c3aed',
              marginBottom: '1rem'
            }}>
              💡 Instruções
            </h3>
            <button 
              onClick={showInstructions}
              style={{
                width: '100%',
                backgroundColor: '#8b5cf6',
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
              Guia completo de extração
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
            📊 Informações do SuperTI v1.0
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
              🚀 SuperTI v1.0 - Ferramenta Completa de Suporte de TI
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
              By Gean • 📥 Download via MediaFire • 🪟 Ativação Windows • 🔧 36 Funcionalidades
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
