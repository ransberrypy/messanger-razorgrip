import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isOnline:{
        type:Boolean,
        default:true,
    },
    isBlacklisted:{
        type:Boolean,
        default:false,
    },
    messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Message'
            }
    ]
},{
    timestamps:true,
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.pre('save', async function (next){
    if (!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


const User = mongoose.model('User',userSchema)

export default User 