/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //declaracion de variables
     var numeroUnoIngresado;
     var numeroDosIngresado;
     var numeroUnoParseado;
     var numeroDosParseado;
     var resultado;
    //obtener los valores por ID

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //Parseo de datos

    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoParseado + numeroDosParseado;

    //mostrar resultado
    alert(" El resultado es " + resultado);



}


      function restar()
{  
    //declaracion de variables
     var numeroUnoIngresado;
     var numeroDosIngresado;
     var numeroUnoParseado;
     var numeroDosParseado;
     var resultado;
    //obtener los valores por ID

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //Parseo de datos

    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoParseado - numeroDosParseado;

    //mostrar resultado
    alert(" El resultado es " + resultado);



	
}

function multiplicar()
{ 
    //declaracion de variables
     var numeroUnoIngresado;
     var numeroDosIngresado;
     var numeroUnoParseado;
     var numeroDosParseado;
     var resultado;
    //obtener los valores por ID

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //Parseo de datos

    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoParseado * numeroDosParseado;

    //mostrar resultado
    alert(" El resultado es " + resultado);


	
}

function dividir()
{
	    //declaracion de variables
     var numeroUnoIngresado;
     var numeroDosIngresado;
     var numeroUnoParseado;
     var numeroDosParseado;
     var resultado;
    //obtener los valores por ID

    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //Parseo de datos

    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //operacion
    resultado = numeroUnoParseado / numeroDosParseado;

    //mostrar resultado
    alert(" El resultado es " + resultado);
}

