/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
 let importe1;
 let importe2;
 let importe3;
 let importeTotal;

 importe1 = parseInt(document.getElementById("txtIdPrecioUno").value);
 importe2 = parseInt(document.getElementById("txtIdPrecioDos").value);
 importe3 = parseInt(document.getElementById("txtIdPrecioTres").value);

  importeTotal = importe1 + importe2 + importe3;

 alert("la suma total es " + importeTotal);

}
function Promedio () 
{
    let importe1;
    let importe2;
    let importe3;
    let suma;
    let promedio;

    importe1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    importe2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    importe3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = importe1 + importe2 + importe3;

    promedio = suma /3;
    
    alert("mi promedio es " +promedio);
	
}
function PrecioFinal () 
{
    let importe1;
    let importe2;
    let importe3;
    let suma;
    let iva;
    let PrecioFinal;
    importe1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    importe2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    importe3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = importe1 + importe2 + importe3;

    iva = suma * 21 /100;
 
    PrecioFinal = suma + iva;

    alert("el precio con iva es $ " + PrecioFinal);


}
