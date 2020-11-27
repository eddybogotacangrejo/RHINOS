function VALIDAR_INSCRIPCION(formulario) {
//* validacion nombres   
    var errores = 0;
    if (formulario.nombres.value.trim().length == 0) {
      $("#error_nombres").html("Nombre obligatorio");
      errores = errores + 1;
    }
    tiene_minusculas_nombre(formulario.nombres.value);   
 //*validacion apellido   
    if (formulario.apellidos.value.trim().length == 0) {
      $("#error_apellidos").html("Apellido Obligatorio");
      errores = errores + 1;
    }
    tiene_minusculas_apellido(formulario.apellidos.value);  
//*validacion email    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      $("#error_email").html("Email Invalido");
      errores = errores +1;
    }
//*validacion celular    
    if (formulario.celular.value.trim().length < 10) {
      $("#error_celular").html("Numero celular no es correcto");
      errores = errores +1;
    }
    if (formulario.celular.value.trim().length > 10) {
      $("#error_celular").html("Numero celular no es correcto");
      errores = errores +1;
    }   
    valida_celular(formulario.celular.value);
//*Conectar con PHP PARA INSERTAR DATOS siempre y cuando no halla errores 
if (errores == 0){ 
   CONECTAR(formulario);
   alert("Inscripcion procesada correctamente, Bienvenido a nuestra Familia, nos veremos en el proximo entreno");
} 
  }
//*funcion validar caracteres nombre  
function tiene_minusculas_nombre(texto){
    var letrasminusculas="0123456789";  
    for(i=0; i<texto.length; i++){
       if (letrasminusculas.indexOf(texto.charAt(i),0)!=-1){
         $("#error_nombres").html("Campo nombres con caracteres invalidos");
         errores = errores +1;
       }
    }
 }
 //*funcion validar caracteres apellido 
 function tiene_minusculas_apellido(texto){
    var letrasminusculas="0123456789";  
    for(i=0; i<texto.length; i++){
       if (letrasminusculas.indexOf(texto.charAt(i),0)!=-1){
         $("#error_apellidos").html("Campo Apellidos con caracteres invalidos");
         errores = errores +1;
        i = texto.length;
       }
    }
 }
 //*funcion validar numero celular 
 function valida_celular(texto){
        if(texto[0] != '3'){
           $("#error_celular").html("El primer numero del celuar debe ser 3");
           errores = errores +1;
        }
        if(texto[1] != '0' && texto[1] != '1' && texto[1] != '2' && texto[1] != '5'){
         $("#error_celular").html("El segundo numero de celular debe ser 0 o 1 o 2 o 3 o 5");
         errores = errores +1;
        }
   } 
//*conectar a PHP
 function CONECTAR(formulario){
   var nombres=formulario.nombres.value;
   var apellidos=formulario.apellidos.value;
   var celular=formulario.celular.value;
   var email=formulario.email.value;
   $.ajax({
      type: "POST",
      url: "VALIDAR_INSCRICION.PHP",
      data: { "nombres" :  nombres,
              "apellidos" : apellidos,
              "celular" : celular,
              "email" : email},
      beforeSend: function () {
         $("#resultado").html("Procesando, espere por favor");
           },              
      success : function(response){
         $("#resultado").html("Inscripcion procesada correctamente");
      }
  });
 }  