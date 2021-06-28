import asyncHandler from 'express-async-handler'
import {Message} from '../models/messageModel.js'

const getMessages = asyncHandler (async(req,res)=>{
    const messages = await  Message.find({})
    res.json(messages)
})

const getMessageById = asyncHandler(async(req,res)=>{
    const message = await Message.findById(req.params.id)
    if(message){
        res.json(message)
    }else{
        res.status(404).json({message:'Message not found'})
    }
})

export {getMessageById, getMessages} 