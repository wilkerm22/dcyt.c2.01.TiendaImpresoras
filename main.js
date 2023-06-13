
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

porc= 
*/

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
    return this.cCartucho === 1 ? 20 : 25;
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
}

procesarImpresoras (i)
{
    this.contImpresoras++;
    if (i.tImpresora === "Laser")
    {
    this.contImpLaser++;
    }
}
PorcImpLaser()
{
    return Number((this.contImpLaser / this.contImpresoras * 100).toFixed(2));
}
}

let Imp1 = new Cl_ImpCartuchos("Cartuchos", 2)
let Imp2 = new Cl_ImpLaser ("Laser",1);
let Imp3 = new Cl_ImpLaser ("Cartuchos", 1);
let Imp4 = new Cl_ImpLaser ("Laser", 5);
let Imp5 = new Cl_ImpLaser ("Laser", 10);

let tie = new Cl_Tienda()
tie.procesarImpresoras(Imp1)
tie.procesarImpresoras(Imp2)
tie.procesarImpresoras(Imp3)
tie.procesarImpresoras(Imp4)
tie.procesarImpresoras(Imp5)

let salida = document.getElementById("app");
salida.innerHTML = "<b>RESULTADOS"
salida.innerHTML += `<br>El precio a pagar por la impresora 1 es: ${Imp1.tpagar()}`
salida.innerHTML += `<br>El precio a pagar por la impresora 2 es: ${Imp2.tpagar()}`
salida.innerHTML += `<br>El precio a pagar por la impresora 3 es: ${Imp3.tpagar()}`
salida.innerHTML += `<br>El precio a pagar por la impresora 4 es: ${Imp4.tpagar()}`
salida.innerHTML += `<br>El precio a pagar por la impresora 5 es: ${Imp5.tpagar()}`
salida.innerHTML += `<br>El Total de impresoras recargadas fue: ${tie.contImpresoras}`
salida.innerHTML += `<br>El Porcentaje de impresoras a laser es: ${tie.PorcImpLaser()}`

