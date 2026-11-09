import * as  produtoController  from '../controllers/produtoController.js'
import { Router } from 'express'

const router = Router()

router.get('/', produtoController.listar)

router.get('/:id',produtoController.buscar_id)

router.post('/',produtoController.cadastrar)
 
router.delete('/:id',produtoController.remover)

router.put('/:id',produtoController.atualizar)

export default router