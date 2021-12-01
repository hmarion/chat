const socket = io();

let input = document.getElementById('info');
let user = document.getElementById('user');
input.addEventListener('keyup', (e)=>{
    if(e.key==="Enter"){
        socket.emit('message',{user: user.value, mensaje: e.target.value});
    }
})
socket.on('welcome', data=>{
    alert(data);
})
socket.on('log', data=>{
    let p = document.getElementById('log');
    let mensajes = data.reverse();
    mensajes = mensajes .map(mensaje=>{
        return `<div>${mensaje.user}: ${mensaje.mensaje}</div>`;
    }).join('');
    p.innerHTML = mensajes;
})