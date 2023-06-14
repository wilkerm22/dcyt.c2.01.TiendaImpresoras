
/*Una Tienda recarga cartuchos y toner a impresoras a tinta y laser respectivamente. 
Si la impresora es a tinta se conocer el color (1. Negro, 2. Color), 
además se sabe que si el color es negro el precio es 20 Bs. Sino 25 Bs. 
Por otro lado, si la impresora es a laser se conece cant. de toner a recargar si es solo uno el precio es 50 Bs sino 30 Bs cada toner.
Se requiere de cada impresora recargada el cálculo del precio a pagar por la recarga y 
por la tienda se requiere el porcentaje de impresoras láser recargadas.


Imp 1 cartuchos 2 = 25
Imp 2 Laser 1 = 50
Imp 3 Cartuchos 1 = 20
Imp 4 Laser 5 = 150
Imp 5 Laser 10 = 300       

porc= 3/5*100= 60 */

class Cl_Impresoras
{
constructor(tImpresora)
{
    this.tImpresora=tImpresora;
}
}

class Cl_ImpCartuchos extends Cl_Impresoras
{
constructor(tImpresora, cCartucho)
{
super(tImpresora)
this.cCartucho = cCartucho
}

tpagar()
{
    return this.cCartucho == 1 ? 20 : 25;
}
}

class Cl_ImpLaser extends Cl_Impresoras
{
constructor (tImpresora, cantToner)
{
    super(tImpresora)
    this.cantToner = cantToner;
}

tpagar()
{
    return this.cantToner > 1  ? this.cantToner * 30 : 50;
}
}

class Cl_Tienda
{
constructor()
{
    this.contImpresoras=0;
    this.contImpLaser=0;
    this.acumtotal = 0;
}

procesarImpresoras (i)
{
    this.contImpresoras++;
    this.acumtotal+= i.tpagar();
    if (i.tImpresora === "Laser" || i.tImpresora ==="laser")
    {
    this.contImpLaser++;
    }
}
PorcImpLaser()
{
    return Number((this.contImpLaser / this.contImpresoras * 100).toFixed(2));
}
totalGanado()
{
    return this.acumtotal;
}
}

const salida = document.getElementById("app");
const tie = new Cl_Tienda()
const formulario = document.querySelector("#F1")
formulario.addEventListener("submit",recarga)

function recarga()
{
event.preventDefault();
const tImpresora=document.getElementById("tImpresora").value
const cCartucho=document.getElementById("cCartucho").value
const cantToner=document.getElementById("cantToner").value

let imp;

if (tImpresora === "") {
    alert("Ingrese los valores necesarios para procesar la impresora.");
    return;
}
if((tImpresora === "Cartucho" || tImpresora === "cartucho") && (cCartucho === "" || cantToner !==""))
{
    alert("Introduzca el color del cartucho y deje la cantidad de toner en blanco")
    return;
}
if(tImpresora === "Laser" || tImpresora === "laser" && (cantToner === "" || cCartucho !==""))
{
    alert("Introduzca la cantidad de toner y deje el color del cartucho en blanco:")
    return;
}

if(cCartucho !== "")
{
    imp = new Cl_ImpCartuchos(tImpresora,cCartucho)
}else{ imp= new Cl_ImpLaser(tImpresora,cantToner)}

tie.procesarImpresoras(imp)

salida.innerHTML = "<b>RESULTADOS"
salida.innerHTML += `<br>El precio a pagar por la impresora es: ${imp.tpagar()}`
salida.innerHTML += `<br>El Total de impresoras recargadas fue: ${tie.contImpresoras}`
salida.innerHTML += `<br>El Porcentaje de impresoras a laser es: ${tie.PorcImpLaser()}`
salida.innerHTML += `<br>El total ganado es: ${tie.totalGanado()}`;
formulario.reset();
}

