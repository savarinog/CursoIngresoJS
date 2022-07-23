/*

Savarino, Gabriel DIV Z
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.value,
transformarlo a entero "parseInt()", luego
mostrar el importe con un decuento del 25 %. 
en el cuadro de texto "txtIdResultado"

*/

function mostrarAumento()
{
	var importeIngresado;
	var resultado;
	var descuento;

	importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseInt(importeIngresado);
	
	descuento = 25 / 100 * importeIngresado;
	
	resultado = importeIngresado - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}

//txtIdImporte
//txtIdResultado