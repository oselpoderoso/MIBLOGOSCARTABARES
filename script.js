// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Este código se ejecutará cuando el DOM esté completamente cargado
    console.log('El DOM ha sido cargado');
    document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
        // Prevenimos el envío del formulario por defecto
        event.preventDefault();

        // Recopilamos los datos del formulario
        var nombre = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('phone').value;
        var mensaje = document.getElementById('message').value;

        // Aquí puedes realizar cualquier operación que desees con los datos del formulario
        // Por ejemplo, enviarlos a través de una petición AJAX al servidor
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);
        console.log('Mensaje:', mensaje);
    });
});
