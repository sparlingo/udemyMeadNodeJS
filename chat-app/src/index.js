const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.port || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New websocket connection')
    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined'))

    socket.on('sendMessage', (message) => {
        io.emit('message', generateMessage(message))
    })
    
    socket.on('sendLocation', (coords, callback) => {
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback()
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage("a user has left the chat"))
    })
})

server.listen(port, () => {
    console.log("server is running on port ", port)
})