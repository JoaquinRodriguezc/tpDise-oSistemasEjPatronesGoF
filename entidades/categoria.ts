import { Premio } from "./premio";

export class Categoria {
  private premios: Premio[];
  getPremios() {
    return this.premios;
  }
}
