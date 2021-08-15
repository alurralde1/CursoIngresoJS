/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

   let sueldo;
 let descuento;
 
  sueldo = parseFloat(document.getElementById("txtIdImporte").value);

   descuento=sueldo-((sueldo*25)/100);

	document.getElementById("txtIdResultado").value= descuento;

}
