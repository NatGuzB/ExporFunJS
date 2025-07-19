
import { PI, IVA, DESCUENTO, DESCUENTO1 } from './consta.js';
import {ROLES} from "./Ejercicio4/usuariosConstantes.js";

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function areaCirculo(radio) {
  return PI * Math.pow(radio, 2);
}

export function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

export function aplicarImpuestos(total) {
  return total * (1 + IVA);
}

export function aplicarDescuento(total) {
  return total * (1 - DESCUENTO);
}


/////////////Ejercicio5/////////

export function aplicarDescuentoPorRol(total, usuario) {
  let descuento = 0;

  if (usuario.ROLES === 'admin') {
    descuento = DESCUENTO1.ADMIN;
  } else {
    descuento = DESCUENTO1.CLIENTE;
  }

  return total * (1 - descuento);
}