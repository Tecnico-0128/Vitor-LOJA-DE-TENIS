import * as  clientesController  from '../controllers/clientesController.js' 
import { Router } from 'express'

const router = Router()

router.get('/', clientesController.listar)

router.get('/:id',clientesController.buscar_id)

router.post('/', clientesController.cadastrar)
 
router.delete('/:id',clientesController.remover)

router.put('/:id',clientesController.atualizar)

export default router