import { Categoria } from "./entidades/categoria";

export interface EstrategiaObtenerCategoria {
  obtenerCategoria(): Categoria;
}

// en realidad el new Categoria() no iria porque lo buscariamos desde una base de datos directamente
export class EstrategiaTC implements EstrategiaObtenerCategoria {
  obtenerCategoria() {
    // ALGORITMO ............
    return new Categoria();
  }
}

export class EstrategiaPorDist implements EstrategiaObtenerCategoria {
  obtenerCategoria() {
    // ALGORITMO ............
    return new Categoria();
  }
}
export class EstrategiaPorKm implements EstrategiaObtenerCategoria {
  obtenerCategoria() {
    // ALGORITMO ............
    return new Categoria();
  }
}
export class EstrategiaDefault implements EstrategiaObtenerCategoria {
  obtenerCategoria() {
    // ALGORITMO ............
    return new Categoria();
  }
}
