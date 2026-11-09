import * as clienteService from '../services/clienteService.js'

export async function listar(req, res) {
  const clientes = await clienteService.listarClientes()

  return res.status(200).json(clientes)
}

export async function cadastrar(req, res) {  
      const clientes = await clienteService.cadastrarCliente(req.body)
      return res.status(201).json(clientes)
}
export async function buscar_id(req, res) {
  const clientes = await clienteService.buscarClientePorId(req.params.id)

  if (!clientes) {
    return res.status(404).json({ message: 'O cliente não foi encontrado.' })
  }
  return res.status(200).json(clientes)
}

export async function remover(req, res) {
  const clientes = await clienteService.removerCliente(req.params.id)
  if (!clientes) {
    return res.status(404).json({ message: 'Cliente não encontrado' })
  }
  return res.status(200).json(clientes)
}
export async function atualizar(req, res) {
  const clientes = await clienteService.atualizarCliente(req.params.id, req.body)
  if (!clientes) {
    return res.status(404).json({ message: 'Cliente não encontrado' })
  }
  return res.status(200).json(clientes)
}




