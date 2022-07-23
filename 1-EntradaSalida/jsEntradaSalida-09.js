/*

Savarino, Gabriel DIV Z
Ejercicio E/S 09

Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un aumento del 10 %. 
en el cuadro de texto "txtIdResultado"

*/

function mostrarAumento()
{
	var sueldoIngresado;
	var resultado;
	var aumento;

	sueldoIngresado = document.getElementById("txtIdSueldo").value;
	sueldoIngresado = parseInt(sueldoIngresado);

	aumento = sueldoIngresado * 10 /100;

	resultado = sueldoIngresado + aumento;

	document.getElementById("txtIdResultado").value = resultado;


}


// 
//txtIdSueldo
//txtIdResultado