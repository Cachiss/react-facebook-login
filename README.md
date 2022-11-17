# REACT LOGIN FACEBOOK

 Uno de los problemas que encontré al tratar de logear con facebook es que las librerias de npm estaban desactualizadas, además de que insertar el script en el index del proyecto React era poco práctico, pues se cargaría el script en cada página, sin mencionar que no podriamos manejar el id de la app como variable de entorno (.env). 


 Entonces con al crear el servicio para cargar el init facebook, podemos únicamente cargar el script en la página donde se importe la funcion.

 Incluso se puede optimizar aún más encapusalndo el init en un boton.