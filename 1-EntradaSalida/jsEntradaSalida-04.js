/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	nombreIngresado = prompt("Ingrese su nombre");
	
	mensaje = "su nombre es ";

	alert(mensaje + nombreIngresado);
}

//txtIdNombre