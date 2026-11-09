import * as vendaService from '../services/vendaService.js'

export async function listar(req,res){
  const vendas = await vendaService.listarVenda()

  return res.status(200).json(vendas)
}
 
export async function cadastrar(req,res){
  console.log(req.body)
 const vendas = await vendaService.cadastrarVenda(req.body)

return res.status(201).json(vendas)
 
}
export  async function buscar_id(req,res){
  const vendas= await vendaService.buscarVendaPorId(req.params.id)
 
  if(!vendas){
    return res.status(404).json({message:'A venda não foi encontrado.'})
  }

  return res.status(200).json(vendas)
}

export async function remover(req,res) {
 const vendas = await vendaService.removerVenda(req.params.id)
 if(!vendas){
  return res.status(404).json({message:'Venda não encontrada'})
 }
 return res.status(200).json(vendas)
}
export async function atualizar(req,res) {
  const vendas = await vendaService.atualizarVenda(req.params.id, req.body)
 if(!vendas){
  return res.status(404).json({message:'Venda não encontrada'})
 }
 return res.status(200).json(vendas)
}


 

 
 