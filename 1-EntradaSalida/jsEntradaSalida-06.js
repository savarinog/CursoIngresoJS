/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()

{

	var numeroUnoIngresado;
	var numeroDosIngresado;
	// var suma;
	var mensaje;

	numeroUnoIngresado = document.getElementById("txtIdNumeroUno").value;
	numeroUnoIngresado = parseInt(numeroUnoIngresado);
	numeroDosIngresado = document.getElementById("txtIdNumeroDos").value;
	numeroDosIngresado = parseInt(numeroDosIngresado);

	//suma = numeroUnoIngresado + numeroDosIngresado;

	mensaje = ("La suma es ") + numeroUnoIngresado + numeroDosIngresado;

	alert(mensaje);


}

//txtIdNumeroUno
//txtIdNumeroDos
