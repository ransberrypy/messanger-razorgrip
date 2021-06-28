import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import messages from './data/messages.js'
import User from './models/userModel.js'
import {Message} from './models/messageModel.js'
import connectDB from './config/db.js'



dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Message.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        
        const adminUser = createdUsers[0]._id

        const sampleMessages = messages.map(message => {
            return {...message, user:adminUser}
        })

        await Message.insertMany(sampleMessages)

        console.log("Data imported!")
        process.exit()
    } catch (error){
        console.error(`${error}`)
        process.exit(1)

    }
}

const destroyData = async () => {
    try{
        await Message.deleteMany()
        await User.deleteMany()

        console.log("Data deleted!")
        process.exit()
    } catch (error){
        console.error(`${error}`)
        process.exit(1)

    }
}
if (process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}