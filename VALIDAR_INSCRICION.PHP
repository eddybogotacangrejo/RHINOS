<?php
$NOMBRES=$_POST["nombres"];
$APELLIDOS=$_POST["apellidos"];
$CELULAR=$_POST["celular"];
$EMAIL=$_POST["email"];
$FECHA_INSCRIPCION='2020-11-05';
//$con=mysqli_connect('localhost','u367620873_CONSULTA_RHINO','Ehbc0147','u367620873_RHINOSSOACHA') or die ('Error al conectar al servidor');
$con=mysqli_connect('localhost','root','Ehbc0147','rhinos_soacha') or die ('Error al conectar al servidor');
$sql="INSERT INTO inscripciones (INSCRIPCION_NOMBRES, INSCRIPCION_APELLIDOS, INSCRIPCION_CELULAR, INSCRIPCION_EMAIL,INSCRIPCION_FECHA)
      VALUES('$NOMBRES', '$APELLIDOS', '$CELULAR', '$EMAIL', '$FECHA_INSCRIPCION')";
      echo 'valores '.$sql.' ';
$resultado=mysqli_query($con,$sql) or die ('Error al insertador en la base de datos');
mysqli_close($con);
if(!$resultado){
   echo 'Error al insertador inscripcion';
};
?>