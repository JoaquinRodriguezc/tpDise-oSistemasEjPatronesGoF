import { Premio } from "./entidades/premio";
import { Cliente } from "./entidades/cliente";
import { FactoriaEstrategiaObtenerCategoria } from "./factoria";

// Experto con patrón: Factoria y Estrategia.
// Si modificamos,añadimos o sacamos estrategias no tocamos el método obtenerPremios
class Experto {
  obtenerPremios(cliente: Cliente): Premio[] {
    const factoria = new FactoriaEstrategiaObtenerCategoria();
    const estrategia = factoria.obtenerEstrategia(cliente.sucursal);
    const categorias = estrategia.obtenerCategoria();
    return categorias.getPremios();
  }
}

// Experto sin aplicar patrones, todo junto acoplado
class Experto2 {
  obtenerPremios(cliente: Cliente) {
    const sucursal = cliente.sucursal;
    if (sucursal.getMetodo().getNombre() === "BUENOS AIRES") {
      // ALGORITMO ............
    }
    if (sucursal.getMetodo().getNombre() === "mendoza") {
      // ALGORITMO ............
    }
    if (sucursal.getMetodo().getNombre() === "JUJUY") {
      // ALGORITMO ............
    }
  }
}
