import { useState } from 'react';
import Head from 'next/head';

export default function SuperTI() {
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const runCommand = async (action) => {
    setLoading(true);
    setResults('Executando comando...');
    
    try {
      const response = await fetch(`/api/command?action=${action}`);
      const data = await response.json();
      
      if (data.success) {
        setResults(`✅ ${data.description}\n\n${data.output || 'Comando executado com sucesso!'}`);
      } else {
        setResults(`❌ Erro: ${data.error}`);
      }
    } catch (error) {
      setResults(`❌ Erro de conexão: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const activateWindows = () => {
    if (confirm('⚠️ ATENÇÃO: Deseja executar o ativador do Windows?\n\nEsta ação requer acesso a um computador Windows.')) {
      setResults('🔒 Esta funcionalidade requer execução local em ambiente Windows.\n\nPara usar esta função, execute o sistema localmente.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Head>
        <title>SuperTI Web - By Gean</title>
        <meta name="description" content="Ferramenta de Suporte de TI" />
      </Head>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            🛠️ SuperTI Web
          </h1>
          <p className="text-gray-600">Ferramenta de Suporte de TI - By Gean</p>
          <p className="text-sm text-gray-500">Versão Web - Hospedado na Vercel</p>
        </header>

        {/* Aviso */}
        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            ⚠️ <strong>Atenção:</strong> Esta versão web tem funcionalidades limitadas. 
            Para acesso completo aos comandos do Windows, execute a versão Python localmente.
          </p>
        </div>

        {/* Cards de Ações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Sistema */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              💻 Sistema
            </h3>
            <button 
              onClick={() => runCommand('system_info')}
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded mb-2 hover:bg-blue-600 disabled:opacity-50"
            >
              Informações do Sistema
            </button>
            <button 
              onClick={() => runCommand('network_info')}
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 disabled:opacity-50"
            >
              Informações de Rede
            </button>
          </div>

          {/* Rede */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">
              🌐 Rede
            </h3>
            <button 
              onClick={() => runCommand('ping_test')}
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded mb-2 hover:bg-blue-600 disabled:opacity-50"
            >
              Testar Conexão Internet
            </button>
            <button 
              onClick={() => runCommand('dns_test')}
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 px-4 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              Testar DNS
            </button>
          </div>

          {/* Ferramentas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              🛠️ Ferramentas
            </h3>
            <button 
              onClick={() => runCommand('clean_advice')}
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded mb-2 hover:bg-orange-600 disabled:opacity-50"
            >
              Dicas Limpeza
            </button>
            <button 
              onClick={activateWindows}
              disabled={loading}
              className="w-full bg-purple-500 text-white py-3 px-4 rounded hover:bg-purple-600 disabled:opacity-50"
            >
              Ativar Windows
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            📊 Resultados
          </h3>
          <div className="bg-gray-900 text-green-400 p-4 rounded font-mono whitespace-pre-wrap min-h-[200px] max-h-[400px] overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-2">Executando comando...</span>
              </div>
            ) : (
              results || 'Clique em algum botão acima para executar um comando...'
            )}
          </div>
        </div>

        {/* Informações */}
        <div className="text-center mt-6 text-gray-600">
          <p>🚀 Hospedado na Vercel | 📧 Suporte: By Gean</p>
        </div>
      </div>
    </div>
  );
}
