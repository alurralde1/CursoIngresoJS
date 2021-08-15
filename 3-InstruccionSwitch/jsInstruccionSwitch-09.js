function mostrar()
{
	let estacionIngresada;
	let destinoIngresado; 
	const precioBase=15000;
	let precioTotal;
	let aumento=0;
	let descuento=0;
	estacionIngresada =document.getElementById("txtIdEstacion").value;
    destinoIngresado =document.getElementById("txtIdDestino").value;
	
   if (estacionIngresada =="Invierno")
   {
	   switch (destinoIngresado)
	    {
		   case "Bariloche":
			   aumento=20;
			   break;
            case "Mar del plata":
				descuento=20;
		   case "Cataratas":
			case "Cordoba" :   
               descuento=10;
			   break;
	   }
   }
   else if (estacionIngresada =="Verano")
   {
	   switch (destinoIngresado)
	    {
		    case "Bariloche":
			   descuento=20;
			   break;
	        case "Mar del plata":
				aumento=20;  
		   case "Cataratas":
			case "Cordoba" :  
			   aumento=10;
			   break;
	   }
   }
   else 
   {
	   if(destinoIngresado != "Cordoba")
	   {
             aumento=10;
	   }
	   }
    if (aumento !=0)
	{
		precioTotal = precioBase +(precioBase *aumento/100);	
	}
	else if (descuento !=0)
	{
	   precioTotal =precioBase -(precioBase *descuento /100);	
	}
	else 
	{
		precioTotal =precioBase;
	}
	alert("su destino final sale "+precioTotal);
}//fin de la funcion


