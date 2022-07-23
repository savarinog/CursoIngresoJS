/*

Savarino, Gabriel

Div Z
IF = 03

*/

function mostrar()
{
	//tomo la edad  
	var edad;
// edad = document.getElementById("txtIdEdad").value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es mayor de edad");
	}
// else(edad =< 18) no reafirmar lo de if
	else
	{
		alert("usted no es mayor de edad");
	}
		
}		

//el else es: "si no" 
// el else niega el if

//FIN DE LA FUNCIÓN