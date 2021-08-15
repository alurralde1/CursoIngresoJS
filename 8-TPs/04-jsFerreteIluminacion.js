/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
Julian Alurralde DIV-E*/
function CalcularPrecio () 
{
let cantidad;
let marca;
const PRECIO=35;
let precioTotal;
let descuento;
let IIBB;

 marca = document.getElementById("Marca").value;
 cantidad=parseInt(document.getElementById("txtIdCantidad").value);
 
precioTotal =PRECIO * cantidad; 

if(cantidad>=6)
  {
   descuento= precioTotal-(precioTotal*50/100);
   document.getElementById("txtIdprecioDescuento").value =descuento;
  }
else if (cantidad ==5) 
  { if (marca =="ArgentinaLuz") 
      {
        descuento=precioTotal-(precioTotal*40/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
    else
      {
        descuento= precioTotal-(precioTotal*30/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
  }
else if (cantidad ==4)
  {
    if (marca =="ArgentinaLuz" || marca =="FelipeLamparas")
      {
        descuento= precioTotal-(precioTotal *25/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
    else
      {
        descuento= precioTotal-(precioTotal*20/100); 
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
  }
else if (cantidad ==3)
  {
    if (marca =="ArgentinaLuz")
      {
        descuento = precioTotal-(precioTotal*15/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
    else if (marca =="FelipeLamparas") 
      {
        descuento = precioTotal-(precioTotal*10/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      } 
    else
      {
        descuento = precioTotal-(precioTotal*5/100);
        document.getElementById("txtIdprecioDescuento").value =descuento;
      }
  }
if (descuento>=120)
 {
   IIBB =descuento+(descuento*10/100);
   alert("IIBB usted pago "+ IIBB);
 }
}

