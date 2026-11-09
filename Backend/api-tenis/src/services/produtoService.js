import produtos from '../models/produto.js'

export async function listarProduto(){
 return  await produtos.findAll({order: [['id','ASC']]})
}
 export async function buscarProdutoPorId(id){
  const produto1 = await produtos.findByPk(id)
  console.log(id)
 return produto1
}
 
export async function cadastrarProduto(dados){
const {produto,preco,tamanho,quantidade} =dados
return produtos.create({produto,preco,tamanho,quantidade})
}
 export async function removerProduto(id) {
  const produto2= await buscarProdutoPorId(id)
  if(produto2){
  produto2.destroy()
  }
  return produto2
}

export async function atualizarProduto(id,dados) {
 const {produto,preco,tamanho,quantidade}=dados
 const produto3 = await buscarProdutoPorId(id)
 if(produto3){
  produto3.update({produto,preco,tamanho,quantidade})
 }
 return produto3
 }  

  




 