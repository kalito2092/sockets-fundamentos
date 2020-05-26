        var socket = io();

        //on: escuchar
        socket.on('connect', function() {
            console.log('Conectado con el servidor');

        });

        socket.on('disconnect', function() {
            console.log('Perdimos conexión con el servidor');

        });

        //emit: emitir    
        socket.emit('enviarMensaje', {
            usuario: 'Carlos',
            mensaje: 'Hola Mundo'
        }, function(res) {
            console.log('respuesta server: ', res);

        });

        //escuchar informacion
        socket.on('enviarMensaje', function(msj) {
            console.log(msj);

        });