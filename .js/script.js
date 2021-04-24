 //Expresión para validar un correo electrónico
 var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; //ignorar si está rojo... NO está malo.


 $(document).ready(function() {
    
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var email = $("#itEmail").val();
        var celular = parseInt($("#itCelular").val());
        var mensaje = $("#itMensaje").val();

        
        
        if (nombre ==""){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if (email =="" || !expr.test(email)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if (celular == ""){
                    $("#mensaje3").fadeIn();
                    return false;
                }else{
                    $("#mensaje3").fadeOut();
                    
                }
            }
        }
    });













    
    
});



