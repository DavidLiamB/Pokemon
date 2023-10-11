import { AppState } from "../AppState.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokemonsList() {
  let content = ''
  AppState.pokemons.forEach(pokemon => content += `
  <div class="p-2">
  <button onclick="app.PokemonsController.setActivePokemon('${pokemon.name}')" class="btn btn-danger w-100">${pokemon.name}</button>
</div>
`)
  setHTML('pokeList', content)
}

function _drawActivePokemon() {
  setHTML('activePokemon', AppState.activePokemon?.activePokemonTemplate)
}
export class PokemonsController {
  constructor() {
    console.log('loaded');
    this.getPokemons()
    AppState.on('pokemons', _drawPokemonsList)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemons() {
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async setActivePokemon(name) {
    try {
      await pokemonsService.setActivePokemon(name)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }

  }
}