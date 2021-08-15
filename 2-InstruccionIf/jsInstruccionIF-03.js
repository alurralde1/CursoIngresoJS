function mostrar()
{
	//tomo la edad  
	let edad;
    edad =parseInt(document.getElementById("txtIdEdad").value);

    if (edad <18 ) 
    {
    	alert("la persona es menor");
    }
    else
    {
    	alert("la persona es mayor");
    }
	

}//FIN DE LA FUNCIÓN