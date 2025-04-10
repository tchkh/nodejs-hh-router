import { Router } from 'express'
import {
  createAssignment,
  deleteAssignment,
  getAllAssignments,
  getAssignmentById,
  updateAssignment,
} from '../controllers/assignmentController.js'

const assignmentRouter = Router()

assignmentRouter.get('/', getAllAssignments)
assignmentRouter.get('/:id', getAssignmentById)
assignmentRouter.post('/assignments', createAssignment)
assignmentRouter.put('/:id', updateAssignment)
assignmentRouter.delete('/:id', deleteAssignment)

export default assignmentRouter
