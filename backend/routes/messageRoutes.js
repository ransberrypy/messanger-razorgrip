import express from 'express'
const router = express.Router()
import {getMessageById, getMessages} from '../controllers/messageControllers.js'

// Fetch all contacts 
router.route('/').get(getMessages)
router.route('/:id').get(getMessageById)

export default router 