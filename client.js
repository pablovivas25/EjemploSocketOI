const mensajes=document.getElementById('mensajes');
const msgForm=document.getElementById('msgForm');

const socket=io('http://localhost:3000');

socket.on('message',(data)=>{
    console.log('cliente '+data);
    concatenarMensajes(data)
})

msgForm.addEventListener('submit',e=>{
    e.preventDefault();
    socket.emit('chatmsg',msgForm.msg.value);
    msgForm.msg.value='';
})
function concatenarMensajes(data){
    const html=`<div>${data}</div>`;
    mensajes.innerHTML+=html;
}