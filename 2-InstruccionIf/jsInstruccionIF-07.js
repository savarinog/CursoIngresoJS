/*
Savarino, Gabriel

Div Z
IF = 07

Enunciado:
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje:
 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	//tomo la edad  
	
	var edad;
	var estadoCivilIngresado;
	
// edad = document.getElementById("txtIdEdad").value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

//estadoCivil = document.getElementById("estadoCivil").value;	
	estadoCivilIngresado = estadoCivil.value;

	if(edad < 18 || estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}



	


}
//txtIdEdad
//estadoCivil
//FIN DE LA FUNCIÓN