function mostrar()
{
	let destinoIngresado;
	destinoIngresado =document.getElementById("txtIdDestino").value;
	switch (destinoIngresado)
	 {
		
	    case "Cataratas":
		case "Mar del plata":
			alert("Hace CALOR");
			break;
		case "Ushuaia":
		case "Bariloche":
			alert("Hace FRIO");
		    break;		
}//FIN DE LA FUNCIÓN