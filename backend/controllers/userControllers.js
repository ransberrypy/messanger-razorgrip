import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//authneticate a user
const authUser = asyncHandler (async(req,res)=>{
   const {email, password} = req.body
   const user = await User.findOne({email})
    // res.send({email,password})
    if (user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            email:user.email,
            token:generateToken(user._id) 
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
})



//REGISTER a user
const registerUser = asyncHandler (async(req,res)=>{
    const {email, password} = req.body
    const userExits = await User.findOne({email})
    
    if(userExits){
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        email,
        password
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            email:user.email,
        })
    }else {
        res.status(404)
        throw new Error("user not found")
    }
})

 
// GET USER PROFILE
const getUserProfile = asyncHandler(async(req,res) => {
    const user = await User.findById(req.user._id)

    if(user){
        res.json({
            _id:user._id,
            email:user.email,
        })
    }else {
        res.status(404)
        throw new Error("User not found")
    }
})


// GET USERS
const getUsers = asyncHandler(async(req,res) => {
    const users = await User.find({})

    res.json(users)
  
})



const getUserById = asyncHandler(async(req,res) => {
    const user = await User.findById(req.params._id)

    if(user){
        res.json({
            _id:user._id,
            email:user.email,
        })
    }else {
        res.status(404)
        throw new Error("User not found")
    }
})

export {authUser, getUserProfile,registerUser,getUsers,getUserById}