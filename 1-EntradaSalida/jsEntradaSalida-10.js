/*

Savarino, Gabriel DIV Z
Ejercicio E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeIngresado;
	var descuento;
	var resultado;

	importeIngresado = document.getElementById("txtIdImporte").value;
	importeIngresado = parseInt(importeIngresado);
	descuento = importeIngresado * 25 / 100;
	resultado = importeIngresado - descuento;
    txtIdResultado.value = resultado;

}


//txtIdImporte
//txtIdResultado