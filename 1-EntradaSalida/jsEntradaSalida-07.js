/*
asdasdaaaa
Savarino, Gabriel DIV Z
Ejercicio E/S 07

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"

*/ 

//txtIdNumeroUno
//txtIdNumeroDos
function sumar()
{	
	var numeroUnoIngresado;
	var numeroDosIngresado;
	var suma;
	var mensaje;
	
	numeroUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroUnoIngresado = parseInt(numeroUnoIngresado);
	numeroDosIngresado = document.getElementById("txtIdNumeroDos").value;
	numeroDosIngresado = parseInt(numeroDosIngresado);

	suma = numeroUnoIngresado + numeroDosIngresado;

	mensaje = "La suma es " + suma;

	alert(mensaje);
}

//txtIdNumeroUno
//txtIdNumeroDos
function restar()
{
	var numeroUnoIngresado;
	var numeroDosIngresado;
	var resta;
	var mensaje;

	numeroUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroUnoIngresado = parseInt(numeroUnoIngresado);
	numeroDosIngresado = document.getElementById("txtIdNumeroDos").value;
	numeroDosIngresado = parseInt(numeroDosIngresado);

	resta = numeroUnoIngresado - numeroDosIngresado;

	mensaje = "La resta es " + resta;

	alert(mensaje)

}

//txtIdNumeroUno
//txtIdNumeroDos
function multiplicar()
{ 
	var numeroUnoIngresado;
	var numeroDosIngresado;
	var multiplicacion;
	var mensaje;

	numeroUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroUnoIngresado = parseInt(numeroUnoIngresado);
	numeroDosIngresado = document.getElementById("txtIdNumeroDos").value;
	
	multiplicacion = numeroUnoIngresado * numeroDosIngresado;

	mensaje = "La multiplicacion es " + multiplicacion;
	
	alert(mensaje);
}

//txtIdNumeroUno
//txtIdNumeroDos
function dividir()
{
	var numeroUnoIngresado;
	var numeroDosIngresado;
	var division;
	var mensaje;

	numeroUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroUnoIngresado = parseInt(numeroUnoIngresado);
	numeroDosIngresado = document.getElementById("txtIdNumeroDos").value;
	numeroDosIngresado = parseInt(numeroDosIngresado);

	division = numeroUnoIngresado / numeroDosIngresado;

	mensaje = "La division es " + division;
	
	alert(mensaje);
}

