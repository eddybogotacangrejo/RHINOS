<?php
 $con=mysqli_connect('localhost','root','Ehbc0147','nodejs') or die ('Error al conectar al servidor');
 $sql="SELECT * FROM CONTACTO";
  $resultado=mysqli_query($con,$sql) or die ('Error al insertador en la base de datos');
  mysqli_close($con);
?>