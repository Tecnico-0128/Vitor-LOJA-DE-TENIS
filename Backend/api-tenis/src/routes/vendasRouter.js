import * as  vendasController  from '../controllers/vendasController.js'
import { Router } from 'express'

const router = Router()

router.get('/', vendasController.listar)

router.get('/:id',vendasController.buscar_id)

router.post('/', vendasController.cadastrar)
 
router.delete('/:id',vendasController.remover)

router.put('/:id',vendasController.atualizar)
export default router