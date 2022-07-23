/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar 
el botón  'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;
	
	nombreIngresado = prompt("Ingrese su nombre");
	
	mensaje = "su nombre es ";

	alert(mensaje + nombreIngresado);
}

