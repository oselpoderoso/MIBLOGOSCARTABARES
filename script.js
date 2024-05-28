// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('El DOM ha sido cargado');
    document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
        
        event.preventDefault();

        
        var nombre = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('phone').value;
        var mensaje = document.getElementById('message').value;

        
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Teléfono:', telefono);
        console.log('Mensaje:', mensaje);
    });
});
