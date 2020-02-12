/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var sueldoparseado;
    

    sueldo = document.getElementById("sueldo").value;
    sueldoparseado = parseInt(sueldo);

    document.getElementById("resultado").value = sueldoparseado *1.10;

    

    
    
	
}
