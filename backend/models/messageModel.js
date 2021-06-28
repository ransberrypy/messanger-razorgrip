import mongoose from 'mongoose'


const messageSchema = mongoose.Schema({
    // id:{type:mongoose.Schema.Types.ObjectId},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    text:{type:String,required:true},
    time:{type:String, required:false}
    
},{
    timestamps:true,
})

const Message = mongoose.model('Message',messageSchema)

export  {Message} 
