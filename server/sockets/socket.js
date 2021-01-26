const { io } = require('../server');


io.on('connection', (client) => {
    console.log("Usuario conectado");

    // Enviar mensaje al cliente cuando se conecta
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log("Usuario desconectado");
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if( message.usuario ) {
        //     callback({
        //         respuesta: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio mal!!'
        //     });
        // }
    });
});