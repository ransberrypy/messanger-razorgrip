import express from 'express'
const router = express.Router()
import {authUser, getUserProfile, registerUser,getUsers,getUserById} from '../controllers/userControllers.js'
import {protect} from '../middleware/authMiddleware.js'

// Fetch all contacts 
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/users').get(getUsers)
router.route('/:id').get(getUserById)


export default router  