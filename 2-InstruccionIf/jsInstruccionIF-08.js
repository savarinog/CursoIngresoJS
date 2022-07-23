/*
Savarino, Gabriel

Div Z
IF = 08

Enunciado:
Al ingresar una edad menor a 18 años 
y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivilIngresado;

	// edad = document.getElementById("txtIdEdad").value;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	// estadoCivilIngresado = documento.getElementById("estadoCivil").value;
	estadoCivilIngresado = estadoCivil.value;

    // no hace falta hacer un if vacio ya que dice que no hay q hacer nada o hacerlo
    // las 2 maneras son validas
	if(edad < 18 && estadoCivilIngresado != "Soltero")
	{

	}
	else
	{
		if(estadoCivilIngresado == "Soltero" && edad > 17)
		{
			alert("es soltero y no es menor");
		}
	}

	


}
//txtIdEdad
//Soltero
//FIN DE LA FUNCIÓN