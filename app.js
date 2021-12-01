const express = require('express');
const {Server} = require('socket.io');

const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, ()=>{
    console.log('Servidor escuchando en Puerto: ' + PORT);
})

app.use(express.static('public'));
const io = new Server(server);
let messages = [];

io.on('connection', socket=>{
    console.log('Se conecto un cliente');
    socket.emit('welcome', 'Bienvenido al servidor')

    socket.on('message',data=>{
        messages.push(data)
        io.emit('log', messages);
    })
})