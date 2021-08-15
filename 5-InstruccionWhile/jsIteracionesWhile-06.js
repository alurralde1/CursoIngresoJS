function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
    contador=0;
	acumulador=0;
	while (contador<5)
	{
		contador=contador +1;
		//lo mismo es decir contador++;
		numeroIngresado =parseInt(prompt("ingrese un numero:"));
		acumulador=acumulador+numeroIngresado;
		//lo mismo es decir acumulador+=numeroIngresado
	}

	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN