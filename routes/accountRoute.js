import { Router } from 'express'
import {
  createAccount,
  deleteAccount,
  getAccountById,
  getAllAccounts,
  updateAccount,
} from '../controllers/accountController.js'

const accountRouter = Router()

accountRouter.get('/', getAllAccounts)
accountRouter.get('/:id', getAccountById)
accountRouter.post('/', createAccount)
accountRouter.put('/:id', updateAccount)
accountRouter.delete('/:id', deleteAccount)

export default accountRouter
