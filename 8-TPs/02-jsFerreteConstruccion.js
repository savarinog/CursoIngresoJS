/*

Savarino, Gabriel DIV Z
8 - TPS 02

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var perimetro;
	var alambreRequerido;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtAncho").value);

	perimetro = largo * 2 + ancho * 2;

	alambreRequerido = perimetro * 3;

	mensaje = "La cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " Mts";

	alert(mensaje);





}
//txtIdLargo
//txtIdAncho
//txtIdRadio
//permisos :
//mostrar  la cantidad de alambre  a comprar si  se ingresara el largo
// y el ancho de un terreno rectangular y se debe alambra con 3 hilos alambre
//entrada:
//largo
//ancho

// proceso:
//calcular perimetro de un rectangulo
//multiplicar el alambre x3

//salida: alert 

// salida:
//

function Circulo () 

{

	var radioIngresado;
	var perimetro;
	var alambreRequerido;
	var mensaje;
	//const PI = 3.14


	radioIngresado = parseFloat(txtIdRadio.value);
	//perimetro = radioIngresado * 2 * PI;
	// perimetro = radioIngresado * 2 * 3.14;
	// alert (Math.PI)
	perimetro = radioIngresado * 2 * Math.PI;
	alambreRequerido = perimetro * 3;
	mensaje = "la cantidad de alambre requerido es de " + alambreRequerido.toFixed(2) + " Mts";
	alert = (mensaje);
}


/*
Math.PI


*/
//txtIdLargo
//txtIdAncho
//txtIdRadio

//entrada:
//radio

//proceso:
//calcular perimetro  2*pi*radio
//resultado = perimetro * 3

//salida:
//alert 



function Materiales () 
/*
entrada: 
largo
ancho
proceso:
calcular area, multiplicadar area x bolsa de cemento y cal


salida: alert de cantidad  de bolsas
txtIdLargo
txtIdAncho
txtIdRadio
*/
{
	var largo;
	var ancho;
	var area;
	var bolsaCemento;
	var bolsaCal;
	var mensaje;

	ancho = parseFloat(document.getElementById("txtIdAncho").value);
	largo = parseFloat(document.getElementById("txtIdLargo").value);
	area = largo * ancho;
	bolsaCemento = area * 2;
	bolsaCal = area * 3;
	mensaje = "Se necesitan " + bolsaCemento; 
	mensaje = mensaje + " bolsa de cemento y " + bolsaCal + " bolsa de cal";
	alert(mensaje);





}