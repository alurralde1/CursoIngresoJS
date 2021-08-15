/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
    let flag =0;
	respuesta='si';
	//armo un bucle del tipo mientras el usuario quiera (do while)
	do {
		//dentro del bucle
		//pido un numero
		 numeroIngresado=parseInt(prompt("ingrese un numero"))
        //debo reconocer si estoy pidiendo pór primera vez
		if (flag ==0)
		{
			//si es asi inicializo max y min
			numeroMaximo =numeroIngresado;
			numeroMinimo =numeroIngresado;
			flag =1;
		}
		// caso contrario me fijo si tengo un nuevo maximo y un nuevo minimo
		//y los actualizo de ser necesarios
        if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo =numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo) 
		{
			numeroMinimo = numeroIngresado;
		}
		respuesta=prompt("desea ingresar otro numero?");
	} while (respuesta =='si');
	//muestro la informacion max y min
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN