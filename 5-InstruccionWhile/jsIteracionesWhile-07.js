/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let numeroIngresado;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";
	while (respuesta =="si") 
	{
		contador++;
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
      respuesta =prompt("desea ingresar otro numero");
	}



	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN