// operaciones-matematicas.js
import { PI, IVA, DESCUENTO } from './consta.js';

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
