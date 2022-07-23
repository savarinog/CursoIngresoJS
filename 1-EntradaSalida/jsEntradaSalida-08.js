/*

Savarino, Gabriel DIV Z
Ejercicio E/S 08

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."

*/

function SacarResto()

//txtIdNumeroDividendo
//txtIdNumeroDivisor

{
    var numeroDividendoIngresado;
    var numeroDivisorIngresado;
    var resto;
    var mensaje;

    numeroDividendoIngresado = document.getElementById("txtIdNumeroDividendo").value;
    numeroDividendoIngresado = parseInt(numeroDividendoIngresado);
    numeroDivisorIngresado = document.getElementById("txtIdNumeroDivisor").value;
    numeroDivisorIngresado = parseInt(numeroDivisorIngresado);
    
    resto = numeroDividendoIngresado / numeroDivisorIngresado;

    mensaje = "El resto es " + resto;

    alert(mensaje);
    
}