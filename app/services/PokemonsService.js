import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { PokeApi } from "./AxiosService.js"

class PokemonsService {
  async setActivePokemon(name) {
    const res = await PokeApi.get(`pokemon/${name}`)
    AppState.activePokemon = new Pokemon(res.data)
  }
  async getPokemons() {
    const res = await PokeApi.get('pokemon')
    AppState.pokemons = res.data.results
  }

}

export const pokemonsService = new PokemonsService()