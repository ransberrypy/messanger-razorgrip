import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import http from 'http'
import {Server} from 'socket.io'


dotenv.config()

connectDB()

const app = express()
const server = http.createServer(app);
const io = new Server(server)


app.use(express.json())

const __dirname = path.resolve()

app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

// Run when there is a new connection
io.on("connection", socket => {
    console.log("Hew connection")
    socket.emit('message','Welcome to Umessanger')

    // Broadcast when a use connects
    socket.broadcast.emit('message','A user has joined');


    // When a client disconnects
    socket.on('disconnect', ()=>{
        io.emit("message",'A user has left the chat')
    })

    // Listen for ChatMessage
    socket.on("chatMessage", (msg)=>{
        io.emit('message',msg)
    })
})


if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, "frontend",'build', 'index.html')))
}else{
    app.get('/',(req, res)=>{
        res.send("API running")
    }) 
}

server.listen(5000, console.log("Serer running on port 5000"))