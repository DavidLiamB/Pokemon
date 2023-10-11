import { generateId } from "../utils/GenerateId.js"

export class Pokemon {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    // this.nickname = this.nickname
    this.img = data.img || data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get activePokemonTemplate() {
    return `
    <div class="card w-100  d-flex align-items-center flex-column ">
      <div>
        <h1>${this.name}</h1>
      </div>
      <div>
        <img class="pokeImg" src="${this.img}" alt="${this.name}">
      </div>
      <div>
        <p>height:${this.height} weight:${this.weight}</p>
        <p>type:${this.types}</p>
        <button class="btn btn-info">cool</button>
      </div>
    </div>
    `
  }
}