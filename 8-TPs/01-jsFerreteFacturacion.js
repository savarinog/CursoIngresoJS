/*
Savarino, Gabriel DIV Z
8 - TPS 01

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var mensaje;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	suma = precioUno + precioDos + precioTres;
	mensaje = ("El total es " + suma);

	alert(mensaje)


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
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoPromedio;
	var mensaje;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultadoPromedio = (precioUno + precioDos + precioTres) / 3;

	//resultadoPromedio = resultadoPromedio.toFixed (2);




	mensaje = ("El promedio es " + resultadoPromedio.toFixed(2));

	alert(mensaje);

}

//parseInt numeros enteros
//parseFloat numeros decimales, altura, precios, etc
//.toFixed
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaDePrecios;
	var iva;
	var precioConIva;
	var mensaje;

	precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
	precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
	precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

	sumaDePrecios = precioUno + precioDos + precioTres;

	iva = sumaDePrecios * 0.21;

	precioConIva = sumaDePrecios + iva;

	mensaje = "El precio final es: " + precioConIva.toFixed(2);
:
	alert(mensaje);




}

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
