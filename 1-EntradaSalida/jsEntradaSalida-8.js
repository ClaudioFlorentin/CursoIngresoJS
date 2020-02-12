/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividendo;
    var divisor;
    var dividendoparseado;
    var divisorparseado;
    var resto;

    dividendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;

    dividendoparseado = parseInt(dividendo);
    divisorparseado = parseInt(divisor);
    
    resto = dividendoparseado % divisorparseado;

    alert("El Resto es " + resto);


	
}
