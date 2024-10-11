import { Sucursal } from "./entidades/sucursal";
import {
  EstrategiaDefault,
  EstrategiaPorDist,
  EstrategiaPorKm,
  EstrategiaTC,
} from "./estrategias";

export class FactoriaEstrategiaObtenerCategoria {
  obtenerEstrategia(sucursal: Sucursal) {
    if (sucursal.getMetodo().getNombre() === "BUENOS AIRES") {
      return new EstrategiaTC();
    }
    if (sucursal.getMetodo().getNombre() === "mendoza") {
      return new EstrategiaPorDist();
    }
    if (sucursal.getMetodo().getNombre() === "JUJUY") {
      return new EstrategiaPorKm();
    } else {
      return new EstrategiaDefault();
    }
  }
}
