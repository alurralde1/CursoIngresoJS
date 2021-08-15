function mostrar()
{
	//tomo la edad  
	let edad;
	let estadoCivil;
	edad =parseInt(document.getElementById("txtIdEdad").value);
   estadoCivil=document.getElementById("estadoCivil").value;



   if (edad>=18 && estadoCivil =="Soltero")
    {
    	alert("Es Soltero y no es menor");
    }
	
	


}//FIN DE LA FUNCIÓN