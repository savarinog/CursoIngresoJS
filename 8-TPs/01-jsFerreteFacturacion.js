/*
Savarino, Gabriel DIV Z
8 - TPS 01

1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUnoIngresado;
	var precioDosIngresado;
	var precioTresIngresado;
	var suma;
	var mensaje;

	precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
	precioUnoIngresado = parseInt(precioUnoIngresado);
	precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
	precioDosIngresado = parseInt(precioDosIngresado);
	precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
	precioTresIngresado = parseInt(precioTresIngresado);

	suma = precioUnoIngresado + precioDosIngresado + precioTresIngresado;

	mensaje = "Suma total " + suma;

	alert(mensaje);



}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

/*

Entrada:
3 variables precios
Procesos:
sumar
sacar el promedio
salidas:
mostrar el resultado
*/



function Promedio () 
{
	//resultadoPromedio = resultadoPromedio.toFixed (2);
	var precioUnoIngresado;
	var precioDosIngresado;
	var precioTresIngresado;
	var promedio;
	var mensaje;

	precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
	precioUnoIngresado = parseFloat(precioUnoIngresado);
	precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
	precioDosIngresado = parseFloat(precioDosIngresado);
	precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
	precioTresIngresado = parseFloat(precioTresIngresado);
	
	promedio = (precioUnoIngresado + precioDosIngresado + precioTresIngresado) / 3;

	mensaje = "El promedio total es " + promedio.toFixed(2);

	alert(mensaje);
	
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres

//parseInt numeros enteros
//parseFloat numeros decimales, altura, precios, etc
//.toFixed (lo que hace es redondear)
function PrecioFinal () 
{
	
	var precioUnoIngresado;
	var precioDosIngresado;
	var precioTresIngresado;
	var sumaDePrecios;
	var iva;
	var precioConIva;
	var mensaje;

	precioUnoIngresado = document.getElementById("txtIdPrecioUno").value;
	precioUnoIngresado = parseFloat(precioUnoIngresado);
	precioDosIngresado = document.getElementById("txtIdPrecioDos").value;
	precioDosIngresado = parseFloat(precioDosIngresado);
	precioTresIngresado = document.getElementById("txtIdPrecioTres").value;
	precioTresIngresado = parseFloat(precioTresIngresado);

	sumaDePrecios = precioUnoIngresado + precioDosIngresado + precioTresIngresado;

	iva = sumaDePrecios * 0.21;

	precioConIva = sumaDePrecios + iva;

	//mensaje = "El precio final es " + precioConIva + " + iva"; //periodico
	mensaje = "El precio final es: " + precioConIva.toFixed(2) + " + iva";

	alert(mensaje);

	
}
//C. ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).
//entradas:
//var 3 precios
//valores de id precios 
//parsear por float los precios

//procesos:
//Suma 3 precios
//multiplicar resultado por 0.21
//sumarlo al total de la suma de los tres precio

//salida:
//mostrar a traves del alert el
