/*
Savarino, Gabriel

Div Z
IF = 05

Enunciado:
Al ingresar una edad solo debemos informar
 si la persona NO es adolescente.
*/

function mostrar()
{
	//tomo la edad  
	var edad;

//edad = txtIdEdad.value;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 12 || edad > 17)
	{
		alert("Usted no es adolescente");
	}


}

// txtIdEdad
//FIN DE LA FUNCIÓN
// || -> con que UNA condicion se cumpla entra al IF
// && -> Se deben cumplir todas las condiciones para entrar al IF 