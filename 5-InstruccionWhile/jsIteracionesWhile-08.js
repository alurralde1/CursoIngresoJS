/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta="si";
	let sumaPositivos;
	let multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	
	while (respuesta =="si") 
	{
		contador=parseInt(prompt("ingrese un numero"));

		if (contador >=0)
		{
			sumaPositivos = sumaPositivos + contador;	
		}
		else
		{
			multiplicacionNegativos =multiplicacionNegativos* contador;
		}
		respuesta=(prompt("desea ingresar otro numero?"));
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;



}//FIN DE LA FUNCIÓN






