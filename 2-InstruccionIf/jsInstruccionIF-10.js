/*
Savarino, Gabriel

Div Z
IF = 10

Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var randomN;
	
	randomN = Math.floor(Math.random() * 10 + 1);
	console.log(randomN);

	if(randomN > 8)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(randomN >3)
		{
			alert("APROBADO");
		}
		else
		{
			alert("vamos, la proxima se puede");
		}
	}

}//FIN DE LA FUNCIÓN