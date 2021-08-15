/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let Largo;
	let Ancho;
	let perimetro;
	let alambre;

	Largo = parseFloat(document.getElementById("txtIdLargo").value);
	Ancho = parseFloat(document.getElementById("txtIdAncho").value);

	perimetro= (Largo + Ancho) * 2;

    alambre= perimetro * 3;

    alert ("la cantidad de alambre es "+ alambre+ " mts" );

}
function Circulo () 
{
	let perimetro;
	let radio;
	let alambre;
	const PI =3.14;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	perimetro = 2 * PI * radio;
	
	alambre =perimetro *3 ;

	alert ("la cantidad de alambre es "+ alambre+ " mts" );
}
function Materiales () 
{
	let Largo;
	let Ancho;
	let cemento;
	let cal;
	let area;

	Largo = parseFloat(document.getElementById("txtIdLargo").value);
	Ancho = parseFloat(document.getElementById("txtIdAncho").value);

	area = Largo * Ancho;
	cemento= area * 2;
	cal= area * 3;

    alert("para un contrapiso de "+ area +"mts2 se necesita "+ cemento +" bolsas de cemento y "+ cal +" bolsas de cal" );

}
