<template>
  <div class="card hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
    <!-- Imagen del Pokémon -->
    <div class="relative bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div class="flex justify-center">
        <img 
          :src="pokemonImage"
          :alt="pokemon.name"
          class="w-24 h-24 object-contain"
          @error="onImageError"
        />
      </div>
      <!-- ID del Pokémon -->
      <div class="absolute top-2 right-2">
        <span class="bg-white bg-opacity-80 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
          #{{ String(pokemon.id).padStart(3, '0') }}
        </span>
      </div>
    </div>

    <!-- Información del Pokémon -->
    <div class="p-4">
      <!-- Nombre -->
      <h3 class="text-lg font-semibold text-gray-900 mb-2 capitalize text-center">
        {{ pokemon.name }}
      </h3>

      <!-- Tipos -->
      <div class="flex justify-center space-x-2 mb-3">
        <span 
          v-for="type in pokemon.types"
          :key="type.type.name"
          :class="getTypeColor(type.type.name)"
          class="px-2 py-1 rounded-full text-xs font-medium text-white"
        >
          {{ type.type.name }}
        </span>
      </div>

      <!-- Estadísticas básicas -->
      <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
        <div class="text-center">
          <span class="block font-medium text-gray-900">{{ pokemon.height / 10 }}m</span>
          <span class="text-xs">Altura</span>
        </div>
        <div class="text-center">
          <span class="block font-medium text-gray-900">{{ pokemon.weight / 10 }}kg</span>
          <span class="text-xs">Peso</span>
        </div>
      </div>

      <!-- Estadísticas principales -->
      <div class="mt-4 space-y-2">
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">HP</span>
          <span class="font-medium">{{ getStatValue('hp') }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            class="bg-green-500 h-1.5 rounded-full transition-all duration-500"
            :style="{ width: `${(getStatValue('hp') / 255) * 100}%` }"
          ></div>
        </div>

        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Attack</span>
          <span class="font-medium">{{ getStatValue('attack') }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            class="bg-red-500 h-1.5 rounded-full transition-all duration-500"
            :style="{ width: `${(getStatValue('attack') / 255) * 100}%` }"
          ></div>
        </div>

        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-600">Defense</span>
          <span class="font-medium">{{ getStatValue('defense') }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            class="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
            :style="{ width: `${(getStatValue('defense') / 255) * 100}%` }"
          ></div>
        </div>
      </div>

      <!-- Habilidades -->
      <div class="mt-4">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Habilidades:</h4>
        <div class="flex flex-wrap gap-1">
          <span 
            v-for="ability in pokemon.abilities"
            :key="ability.ability.name"
            class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded capitalize"
          >
            {{ ability.ability.name.replace('-', ' ') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // Imagen del Pokémon con fallback
    const pokemonImage = computed(() => {
      return props.pokemon.sprites?.other?.['official-artwork']?.front_default ||
             props.pokemon.sprites?.front_default ||
             `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png` ||
             '/placeholder-pokemon.png'
    })

    // Obtener valor de estadística específica
    const getStatValue = (statName) => {
      const stat = props.pokemon.stats?.find(s => s.stat.name === statName)
      return stat ? stat.base_stat : 0
    }

    // Colores para tipos de Pokémon
    const getTypeColor = (typeName) => {
      const typeColors = {
        normal: 'bg-gray-500',
        fire: 'bg-red-500',
        water: 'bg-blue-500',
        electric: 'bg-yellow-500',
        grass: 'bg-green-500',
        ice: 'bg-blue-300',
        fighting: 'bg-red-700',
        poison: 'bg-purple-500',
        ground: 'bg-yellow-600',
        flying: 'bg-indigo-400',
        psychic: 'bg-pink-500',
        bug: 'bg-green-400',
        rock: 'bg-yellow-800',
        ghost: 'bg-purple-700',
        dragon: 'bg-indigo-700',
        dark: 'bg-gray-800',
        steel: 'bg-gray-600',
        fairy: 'bg-pink-300'
      }
      return typeColors[typeName] || 'bg-gray-500'
    }

    // Manejar error de imagen
    const onImageError = (event) => {
      event.target.src = '/placeholder-pokemon.png'
    }

    return {
      pokemonImage,
      getStatValue,
      getTypeColor,
      onImageError
    }
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s ease;
}
</style>