function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador = 0


    while (clave.toLowerCase () != "utn750" && contador < 3 ){
        contador++;
        clave = prompt("Error! Ingrese la clave.");
        if(contador == 3)
        break;

    }

        if(contador ==3){
            alert("intentos maximos ingresados");
        }

    alert("Bienvenido");







}//FIN DE LA FUNCIÓN
