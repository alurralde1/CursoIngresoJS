function mostrar()
{
	//tomo la edad 
	let edad;
     edad=parseInt(document.getElementById("txtIdEdad").value);
    
    if (edad<13 || edad>17) 
    {
    	alert("la persona NO es adolescente");
    }


	

}//FIN DE LA FUNCIÓN