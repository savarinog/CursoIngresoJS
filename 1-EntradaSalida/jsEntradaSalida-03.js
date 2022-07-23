/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	
	mensaje = "Tu nombre es ";

	alert(mensaje + nombreIngresado);

}

//txtIdNombre
