import { Router } from 'express'
import {
  createComment,
  deleteComment,
  getCommentById,
} from '../controllers/commentController'

const commentRouter = Router()

commentRouter.get('/:id/comments', getCommentById)
commentRouter.post('/:id/comments', createComment)
commentRouter.delete('/:id/comments', deleteComment)

export default commentRouter
