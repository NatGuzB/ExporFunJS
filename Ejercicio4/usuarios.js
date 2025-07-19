import { ROLES } from './usuariosConstantes.js';

//Funcion fecha actual
const obtenerFechaLocal = () => {
  const fecha = new Date();
  return fecha.toLocaleDateString('es-ES');
};

//Funcionque imprime nombre rol y fecha
export function crearUsuario(nombre, rol) {
  return {
    nombre,
    rol,
    fechaRegistro: obtenerFechaLocal()
  };
}

//Determina al admin
export function esAdmin(usuario) {
  return usuario.rol === ROLES.ADMIN;
}