import * as produtoService from '../services/produtoService.js'

export async function listar(req,res){
  const produto = await produtoService.listarProduto()

  return res.status(200).json(produto)
}
 
export async function cadastrar(req,res){
 
 const produto = await produtoService.cadastrarProduto(req.body)

 return res.status(201).json(produto)
}
export  async function buscar_id(req,res){
  const produto= await produtoService.buscarProdutoPorId(req.params.id)
 
  if(!produto){
    return res.status(404).json({message:'O produto não foi encontrado.'})
  }

  return res.status(200).json(produto)
}

export async function remover(req,res) {
 const produto = await produtoService.removerProduto(req.params.id)
 if(!produto){
  return res.status(404).json({message:'Produto não encontrado'})
 }
 return res.status(200).json(produto)
}
export async function atualizar(req,res) {
  const produto = await produtoService.atualizarProduto(req.params.id, req.body)
 if(!produto){
  return res.status(404).json({message:'Produto não encontrado'})
 }
 return res.status(200).json(produto)
}


 

 
 