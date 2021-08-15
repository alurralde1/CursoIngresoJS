/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y letiables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	respuesta="si";

	do {
		
		numeroIngresado=parseInt(prompt("Ingresar numero"));
		
		if (numeroIngresado<0)
		{
			contadorNegativos++;
           sumaNegativos += numeroIngresado;
		}
		else if (numeroIngresado ==0)
		{
			contadorCeros++;
		}
		else 
		{
			contadorPositivos++;
			sumaPositivos += numeroIngresado;
		}
        if (numeroIngresado %2==0)
		{
			contadorPares++;
		}

      respuesta =prompt("desea ingresar otro numero?");
	} while (respuesta =="si");

   if (contadorPositivos>0)
   {
	   promedioPositivos = sumaPositivos /contadorPositivos;
   }
   if (contadorNegativos>0)
   {
	    promedioNegativos = sumaNegativos / contadorNegativos;  
   }
   
   diferencia = contadorPositivos - contadorNegativos;

	document.write("la suma de negativos es : "+sumaNegativos+"<br>");
	document.write("la suma de positivos es : "+sumaPositivos+"<br>");
	document.write("la cantidad de negativos es : "+contadorNegativos+"<br>");
	document.write("la cantidad de positivos es : "+contadorPositivos+"<br>");
	document.write("la cantidad de ceros es : "+contadorCeros+"<br>");
	document.write("la cantidad de numeros pares es : "+contadorPares+"<br>");
	document.write("el promedio de positivos es : "+promedioPositivos+"<br>");
	document.write("el promedio de negativos es : "+promedioNegativos+"<br>");
	document.write("la diferencia es : "+diferencia+"<br>");
}//FIN DE LA FUNCIÓN