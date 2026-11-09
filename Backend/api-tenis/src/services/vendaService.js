import vendas from '../models/venda.js'

export async function listarVenda(){
 return  await vendas.findAll({order: [['id','ASC']]})
}

 export async function buscarVendaPorId(id){
  const venda = await vendas.findByPk(id)
  console.log(id)
 return venda
}
 
export async function cadastrarVenda(dados){
const {cpf,nome_produto,quantidade} =dados
return vendas.create({cpf,nome_produto,quantidade})
}
 

export async function atualizarVenda(id,dados) {
 const {cpf,nome_produto,quantidade}=dados
 const venda2 = await buscarVendaPorId(id)
 if(venda2){
  venda2.update({cpf,nome_produto,quantidade})
 }
 return venda2
 }  

  
export async function removerVenda(id) {
  const venda3= await buscarVendaPorId(id)
  if(venda3){
  venda3.destroy()
  }
  return venda3
}



 
 