<?php
$NOMBRES=$_POST["nombres"];
$APELLIDOS=$_POST["apellidos"];
$CELULAR=$_POST["celular"];
$EMAIL=$_POST["email"];
$COMENTARIO=$_POST["comentario"];
//$con=mysqli_connect('localhost','u367620873_CONSULTA_RHINO','Ehbc0147','u367620873_RHINOSSOACHA') or die ('Error al conectar al servidor');
$con=mysqli_connect('localhost','root','Ehbc0147','rhinos_soacha') or die ('Error al conectar al servidor');
$sql="INSERT INTO CONTACTO (NOMBRES, APELLIDOS, TELEFONO, EMAIL, COMENTARIO)
      VALUES('$NOMBRES', '$APELLIDOS', '$CELULAR', '$EMAIL', '$COMENTARIO')";
$resultado=mysqli_query($con,$sql) or die ('Error al insertador en la base de datos');
mysqli_close($con);
if(!$resultado){
   echo 'Error al insertador contacto';
};
?>