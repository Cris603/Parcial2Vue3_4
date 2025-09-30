import axios from 'axios'

const API_BASE_URL = 'https://pokeapi.co/api/v2'

class PokemonService {
  // Obtener lista de pokémon con paginación
  async getPokemonList(limit = 20, offset = 0) {
    try {
      const response = await axios.get(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
      return response.data
    } catch (error) {
      console.error('Error al obtener la lista de pokémon:', error)
      throw error
    }
  }

  // Obtener detalles de un pokémon específico
  async getPokemonDetails(pokemonName) {
    try {
      const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonName}`)
      return response.data
    } catch (error) {
      console.error(`Error al obtener detalles del pokémon ${pokemonName}:`, error)
      throw error
    }
  }

  // Obtener pokémon por ID
  async getPokemonById(id) {
    try {
      const response = await axios.get(`${API_BASE_URL}/pokemon/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error al obtener pokémon con ID ${id}:`, error)
      throw error
    }
  }

  // Buscar pokémon por nombre
  async searchPokemon(query) {
    try {
      // Primero intentamos buscar por nombre exacto
      const response = await axios.get(`${API_BASE_URL}/pokemon/${query.toLowerCase()}`)
      return [response.data]
    } catch (error) {
      // Si no encuentra por nombre exacto, devolvemos array vacío
      return []
    }
  }

  // Obtener tipos de pokémon
  async getPokemonTypes() {
    try {
      const response = await axios.get(`${API_BASE_URL}/type`)
      return response.data.results
    } catch (error) {
      console.error('Error al obtener tipos de pokémon:', error)
      throw error
    }
  }

  // Obtener pokémon por tipo
  async getPokemonByType(type) {
    try {
      const response = await axios.get(`${API_BASE_URL}/type/${type}`)
      return response.data.pokemon
    } catch (error) {
      console.error(`Error al obtener pokémon del tipo ${type}:`, error)
      throw error
    }
  }
}

export default new PokemonService()