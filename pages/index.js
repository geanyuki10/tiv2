import { useState } from 'react';

export default function SuperTI() {
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);

  const runCommand = async (action) => {
    setLoading(true);
    setResults('🔄 Executando comando...');
    
    try {
      const response = await fetch(`/api/command?action=${action}`);
      const data = await response.json();
      
      if (data.success) {
        setResults(`✅ ${data.description}\n\n${data.output}`);
      } else {
        setResults(`❌ Erro: ${data.error}`);
      }
    } catch (error) {
      setResults(`❌ Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <header className="text-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🛠️ SuperTI Web
            </h1>
            <p className="text-xl text-gray-600 mb-2">By Gean</p>
            <p className="text-sm text-gray-500">🚀 Hospedado na Vercel</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">💻 Sistema</h3>
            <button 
              onClick={() => runCommand('system_info')}
              disabled={loading}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded mb-2 hover:bg-blue-600 disabled:opacity-50"
            >
              Informações do Sistema
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-green-600">🌐 Rede</h3>
            <button 
              onClick={() => runCommand('network_info')}
              disabled={loading}
              className="w-full bg-green-500 text-white py-3 px-4 rounded mb-2 hover:bg-green-600 disabled:opacity-50"
            >
              Diagnóstico de Rede
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">🛠️ Ferramentas</h3>
            <button 
              onClick={() => runCommand('clean_advice')}
              disabled={loading}
              className="w-full bg-red-500 text-white py-3 px-4 rounded hover:bg-red-600 disabled:opacity-50"
            >
              Dicas de Limpeza
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">📊 Resultados</h3>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm whitespace-pre-wrap min-h-[200px] overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
                Executando comando...
              </div>
            ) : (
              results || '👆 Clique em algum botão acima...'
            )}
          </div>
        </div>

      </div>
    </div>
  );
}