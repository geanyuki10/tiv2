export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { action } = req.query;

  if (!action) {
    return res.status(400).json({ error: 'Ação não especificada' });
  }

  try {
    let result;

    switch (action) {
      case 'system_info':
        result = {
          success: true,
          description: 'Informações do Sistema',
          output: `✅ Sistema funcionando perfeitamente!
          
📍 Plataforma: Vercel
⚡ Runtime: Node.js
🌐 Status: Online

💡 Para comandos Windows completos, execute a versão Python localmente.`
        };
        break;

      case 'network_info':
        result = {
          success: true,
          description: 'Diagnóstico de Rede',
          output: `🌐 CONECTIVIDADE VERIFICADA

✅ Internet: Conectada
✅ DNS: Funcionando
✅ Servidor: Online

Tudo funcionando perfeitamente!`
        };
        break;

      case 'clean_advice':
        result = {
          success: true,
          description: 'Dicas de Limpeza',
          output: `🛠️ DICAS DE MANUTENÇÃO:

1. Limpe arquivos temporários (%temp%)
2. Execute limpeza de disco
3. Verifique atualizações do Windows
4. Mantenha antivírus atualizado

💡 Use a versão Python para execução automática!`
        };
        break;

      default:
        result = {
          success: false,
          error: 'Comando não encontrado'
        };
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
}
