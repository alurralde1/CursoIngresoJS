/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

function FahrenheitCentigrados () 
{
    let temFahrenheit;
    let temcentígrados;
    
    temFahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);

    temcentígrados = (temFahrenheit-32) / 1.8;

    alert(temFahrenheit+ " temp. fahrenheit equivale a "+temcentígrados+" grados centigrados");
	
}

function CentigradosFahrenheit () 
{
	
    let temFahrenheit;
    let temcentígrados;
    
    temcentígrados=parseFloat(document.getElementById("txtIdTemperatura").value);

    temFahrenheit = temcentígrados * 1.8 + 32;

    alert(temcentígrados+ " grados centigrados equivale a "+temFahrenheit+" temp. fahrenheit");
}

