// Este arquivo pode ser removido ou deixado vazio
// já que não usaremos mais APIs para comandos

export default async function handler(req, res) {
  res.status(200).json({ 
    success: true, 
    message: 'API funcionando - Use a versão local para comandos reais' 
  });
}
