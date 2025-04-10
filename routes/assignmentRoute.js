import { Router } from 'express'
import {
  createAssignment,
  deleteAssignment,
  getAllAssignments,
  getAssigmentById,
  updateAssignment,
} from '../controllers/assigmentController'

const assignmentRouter = Router()

assignmentRouter.get('/', getAllAssignments)
assignmentRouter.get('/:id', getAssigmentById)
assignmentRouter.post('/assignments', createAssignment)
assignmentRouter.put('/:id', updateAssignment)
assignmentRouter.delete('/:id', deleteAssignment)

export default assignmentRouter
