function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
 {
    case "Enero":
        alert("felices vacaciones");
        break;
    case "Marzo":
        alert("Feliz cumple");
        break;
    case "Julio":   
        alert("felices vacaciones");
        break;
    case "Diciembre":
        alert("Felices fiestas");
        break;
    default:
        alert("este mes no hay evento");
        break;

 }




}//FIN DE LA FUNCIÓN