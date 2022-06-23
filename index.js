const express = require('express')

const app = express()

const http = require('http')

const {Server} = require('socket.io')

const server = http.createServer(app);
const io = new Server(server)

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
server.listen(3000,()=>{
    console.log("listening port 3000")
})

io.on("connection",(socket)=>{
    socket.on("on-chat",data=>{
        console.log({data});
        io.emit("user-chat",data)
    })
})