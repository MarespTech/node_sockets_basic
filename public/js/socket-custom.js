var socket = io();

socket.on('connect', function(){
    console.log("Conectado al servidor");
});

socket.on('disconnect', function(){
    console.log("Perdimos conexión con el servidor.")
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Martin',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta del server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(message){
    console.log(`${message.usuario}: ${message.mensaje}`);
});