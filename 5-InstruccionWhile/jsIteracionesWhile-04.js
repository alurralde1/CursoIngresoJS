/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	 
	 while (numeroIngresado>9 || numeroIngresado<0)
	 {
		 numeroIngresado =prompt("Error. ingrese un número entre 0 y 10 ");
		 
	 }

  document.getElementById("txtIdNumero").value =numeroIngresado;




}//FIN DE LA FUNCIÓN