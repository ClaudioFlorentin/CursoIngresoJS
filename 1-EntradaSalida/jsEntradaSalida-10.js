/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var importeparseado;
    
    resultado = document.getElementById("importe").value;
    importeparseado = parseInt(resultado);

    document.getElementById("resultado").value = importeparseado *25/100;


	
}
