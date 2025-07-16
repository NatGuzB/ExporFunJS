import { PI, IVA, DIAS_SEMANA, DESCUENTO } from './consta.js';
import { 
    sumar, 
    restar, 
    multiplicar, 
    areaCirculo,   
    calcularTotal, 
    aplicarImpuestos, 
    aplicarDescuento 
} from './operaciones-matematicas.js';


/////////////////Ejercicio 1///////////////////////

//Area circulo
const radio = 5;
console.log("Área del círculo con radio", radio, "es:", areaCirculo(radio));

//IVA
const precioBase = 100;
const precioConIVA = precioBase * (1 + IVA);
console.log("Precio con IVA es:", precioConIVA);

//Dia semana
console.log("El tercer día de la semana es:", DIAS_SEMANA[2]);




///////////////////////Ejercicio2////////////////////
const a = 10;
const b = 3;
const radio1 = 7;

console.log("Suma:", a, "+", b, "=", sumar(a, b));
console.log("Resta:", a, "-", b, "=", restar(a, b));
console.log("Multiplicación:", a, "*", b, "=", multiplicar(a, b));
console.log("Área de círculo con radio", radio1, "=", areaCirculo(radio1));




///////////////////Ejercicio3//////////////////////
const precioUnitario = 50;
const cantidad = 3;

const totalSinImpuestos = calcularTotal(precioUnitario, cantidad);
console.log("Total sin impuestos (", cantidad, "x $", precioUnitario, "): $", totalSinImpuestos.toFixed(2));

const totalConIVA = aplicarImpuestos(totalSinImpuestos);
console.log("Total con IVA (IVA", IVA * 100, "%): $", totalConIVA.toFixed(2));

const totalConDescuento = aplicarDescuento(totalConIVA);
console.log("Total final con descuento (", DESCUENTO * 100, "%): $", totalConDescuento.toFixed(2));



///////////////////////////////Ejercicio4//////////////////////
// Crear usuarios
