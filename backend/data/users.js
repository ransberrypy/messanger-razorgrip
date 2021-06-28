import bcrypt from 'bcryptjs'

const users = [
    {
        email:"Ransberrypy@gmail.com",
        password: bcrypt.hashSync('123456',10),
        isOnline:true,
        isBlacklisted:false,
        messages:[]
    },
    {
        email:"regiphipps@gmail.com",
        password: bcrypt.hashSync('123456',10),
        isOnline:true,
        isBlacklisted:false,
        messages:[]
    },
]

export default users