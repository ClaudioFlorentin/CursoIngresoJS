/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un 
terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas
 bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    var largoparseado;
    var anchoparseado;
    var largoxancho;
    

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    alambre = 3;
    largoparseado = parseInt(largo);
    anchoparseado = parseInt(ancho);

    largoxancho = (largoparseado + anchoparseado)*2;

    alert("Se necesitan " + largoxancho + " metros de alambre");


}
function Circulo () 
{
    var radioterreno;
    var alambre;
    var circuloalambre;
	var resultado;

    radioterreno = document.getElementById("Radio").value;
    alambre = 3;
    circuloalambre = 2.39;
    resultado = radioterreno * circuloalambre * alambre;
    alert("Se necesitan " + resultado + " metros de cable");


}
function Materiales () 
{
	
}