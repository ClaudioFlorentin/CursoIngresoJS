/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioparseado1;
    var precioparseado2;
    var precioparseado3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    
    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    resultado = precioparseado1 + precioparseado2 + precioparseado3;

    alert("El precio es " + resultado);

}
function Promedio () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioparseado1;
    var precioparseado2;
    var precioparseado3;
    var resultado;

    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;


    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    resultado = (precioparseado1 + precioparseado2 + precioparseado3)/3;

    alert("El promedio de los productos es " + resultado); 
	
}
function PrecioFinal () 
{
    var precio1;
    var precio2;
    var precio3;
    var precioparseado1;
    var precioparseado2;
    var precioparseado3;
    var resultado;


    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    resultado = (precioparseado1 + precioparseado2 + precioparseado3)*1.21;
    
    alert("El precio final es " + resultado );










}