import clientes from '../models/cliente.js'


export async function listarClientes() {
  return await clientes.findAll({ order: [['id', 'ASC']] })
}
export async function buscarClientePorId(id) {
  const cliente2 = await clientes.findByPk(id)
  console.log(id)
  return cliente2
}

export async function cadastrarCliente(dados) {
  const { nome, cpf, telefone } = dados
  console.log(nome, cpf, telefone)
  return clientes.create({ nome, cpf, telefone })
}

export async function removerCliente(id) {
  const cliente3 = await buscarClientePorId(id)
  if (cliente3) {
    cliente3.destroy()
  }
  return cliente3
}

export async function atualizarCliente(id, dados) {
  const { nome, cpf, telefone } = dados
  const cliente4 = await buscarClientePorId(id)
  if (cliente4) {
    cliente4.update({ nome, cpf, telefone })
  }
  return cliente4
}



