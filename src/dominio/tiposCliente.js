
 // Polimorfismo (GRASP): todos los tipos de cliente comparten
 // la misma operacion, aplicarDescuento(monto).

class TipoCliente {
  aplicarDescuento(monto) {
    throw new Error("Cada tipo de cliente debe implementar aplicarDescuento");
  }
}

class TipoNormal extends TipoCliente {
  aplicarDescuento(monto) {
    return monto;
  }
}

class TipoFrecuente extends TipoCliente {
  aplicarDescuento(monto) {
    return monto * 0.9;
  }
}

class TipoEmpleado extends TipoCliente {
  aplicarDescuento(monto) {
    return monto * 0.75;
  }
}

// NUEVO TIPO DE CLIENTE: MAYORISTA
class TipoMayorista extends TipoCliente {
  aplicarDescuento(monto) {
    return monto * 0.85;
  }
}

const TIPOS = {
  normal: new TipoNormal(),
  frecuente: new TipoFrecuente(),
  empleado: new TipoEmpleado(),
  mayorista: new TipoMayorista(),
};

// Los tipos no registrados se cobran como clientes normales.
export function obtenerTipoCliente(clave) {
  return TIPOS[clave] ?? TIPOS.normal;
}
