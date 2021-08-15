
	/*
Julian Alurralde DIV-E*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let minimo=1;
	let maximo =10;
  
	nota= Math.round(Math.random()*(maximo-minimo)+ minimo);

	if(nota>=9)
	{
		alert(nota +" excelente");
	}
    else if (nota>=4)
    {
		alert(nota+ " aprobo");
	}
    else
	{
	    alert(nota +" vamos, la proxima se puede");	
	}	

	

	

}//FIN DE LA FUNCIÓN


