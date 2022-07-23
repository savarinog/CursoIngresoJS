/*
Savarino, Gabriel

Div Z
IF = 06

Enunciado:
Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	//tomo la edad  
	var edad;

//edad = document.getElementById("txtIdEdad").value;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("usted es mayor de edad");
	}
	else
	{
		if(edad > 12)
		{	
			alert("usted es adolescente");
		}
		else
		{
			alert("usted es menor");
		}
		
	
	}

}
// txtIdEdad
// FIN DE LA FUNCIÓN