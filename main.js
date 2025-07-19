import { PI, IVA, DIAS_SEMANA, DESCUENTO, DESCUENTO1 } from './consta.js';
import { 
    sumar, 
    restar, 
    multiplicar, 
    areaCirculo,   
    calcularTotal, 
    aplicarImpuestos, 
    aplicarDescuento,
    aplicarDescuentoPorRol
} from './operaciones-matematicas.js';
import {ROLES} from "./Ejercicio4/usuariosConstantes.js";
import {crearUsuario, esAdmin } from "./Ejercicio4/usuarios.js";


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

const usuario1 = crearUsuario('Pedro', ROLES.ADMIN);
const usuario2 = crearUsuario('Carlos', ROLES.CLIENTE);

console.log(usuario1);
console.log(usuario2);



///////////////////////////////Ejercicio5//////////////////////

// Crear usuarios
const usuarioAdmin = crearUsuario("Pedro", ROLES.ADMIN);
const usuarioCliente = crearUsuario("Carlos", ROLES.CLIENTE);

// Compra ADMIN
const subtotalAdmin = calcularTotal(25, 4); 
const totalImpuestoAdmin = aplicarImpuestos(subtotalAdmin); 
const totalFinalAdmin = aplicarDescuentoPorRol(totalImpuestoAdmin, usuarioAdmin); 

console.log("Compra ADMIN");
console.log("Usuario:", usuarioAdmin.nombre);
console.log("Rol:", usuarioAdmin.rol);
console.log("Fecha:", usuarioAdmin.fechaRegistro);
console.log("Subtotal:", subtotalAdmin);
console.log("Con impuesto:", totalImpuestoAdmin);
console.log("Con descuento:", totalFinalAdmin);
console.log("");

// Compra CLIENTE
const subtotalCliente = calcularTotal(50, 3); 
const totalImpuestoCliente = aplicarImpuestos(subtotalCliente); 
const totalFinalCliente = aplicarDescuentoPorRol(totalImpuestoCliente, usuarioCliente); 

console.log("Compra CLIENTE");
console.log("Usuario:", usuarioCliente.nombre);
console.log("Rol:", usuarioCliente.rol);
console.log("Fecha:", usuarioCliente.fechaRegistro);
console.log("Subtotal:", subtotalCliente);
console.log("Con impuesto:", totalImpuestoCliente);
console.log("Con descuento:", totalFinalCliente);