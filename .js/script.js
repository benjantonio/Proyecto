 //Expresión para validar un correo electrónico
 var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; //ignorar si está rojo... NO está malo.

$(document).ready(function(){
    $("#benviar").click(function(){
        var nombre = $("#itNombre").val();
        var email = $("#itEmail").val();
        var celular = $("#itCelular").val();
        var mensaje = $("#itMensaje").val();

        if (nombre ==""){
            $("#mensaje1").fadeIn();
            return false;
        }
    });
});
