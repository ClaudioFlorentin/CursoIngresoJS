function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	


	iterador = prompt("¿Cuantos numeros desea ingresar?");

	while (true ){
		contador++;
		var numero = prompt("Ingrese un numero");

		//validar
		numero = parseInt(numero);


		while(isNaN(numero)){
			numero = prompt("Ingrese numero valido");
			numero = parseInt(numero);
		}
		//acumular
		acumulador += numero;

		respuesta = prompt("desea continuar?");


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN