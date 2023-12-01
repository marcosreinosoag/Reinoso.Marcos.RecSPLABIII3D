import { Personaje } from "./personaje.js";

export class Monstruo extends Personaje {
  constructor(id, nombre, miedo, alias, defensa, tipo) {
    super(id, nombre, tipo);
    this.alias = alias;
    this.defensa = defensa;
    this.miedo = miedo;
  }
}