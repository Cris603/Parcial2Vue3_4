<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <!-- Header Section -->
    <section class="bg-gradient-to-r from-blue-500 via-pink-500 via-purple-500 to-orange-500 text-white py-16">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          PokéAPI
        </h1>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          Checa los Stats de los PokeAmigos
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Controles y filtros -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <!-- Barra de búsqueda -->
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar Pokémon..."
                class="form-input pl-10 pr-4"
                @input="handleSearch"
              />
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Filtro por tipo -->
          <div class="flex flex-col sm:flex-row gap-4">
            <select
              v-model="selectedType"
              @change="handleTypeFilter"
              class="form-input min-w-[150px]"
            >
              <option value="">Todos los tipos</option>
              <option v-for="type in pokemonTypes" :key="type.name" :value="type.name">
                {{ capitalizeFirst(type.name) }}
              </option>
            </select>

            <!-- Ordenar por -->
            <select
              v-model="sortBy"
              @change="handleSort"
              class="form-input min-w-[150px]"
            >
              <option value="id">Por ID</option>
              <option value="name">Por nombre</option>
              <option value="height">Por altura</option>
              <option value="weight">Por peso</option>
            </select>
          </div>
        </div>

        <!-- Estadísticas -->
        <div class="mt-4 pt-4 border-t border-gray-200">
          <div class="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Total encontrados: <strong>{{ filteredPokemon.length }}</strong></span>
            <span>Mostrando: <strong>{{ displayedPokemon.length }}</strong></span>
            <span v-if="selectedType">Tipo: <strong>{{ capitalizeFirst(selectedType) }}</strong></span>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-flex items-center">
          <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-lg text-gray-700">Cargando Pokémon...</span>
        </div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
          <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="font-medium">Error al cargar Pokémon</p>
              <p class="text-sm">{{ error }}</p>
            </div>
          </div>
          <button
            @click="loadPokemon"
            class="mt-3 btn-primary"
          >
            Intentar nuevamente
          </button>
        </div>
      </div>

      <!-- Grid de Pokémon -->
      <div v-else-if="displayedPokemon.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <PokemonCard
          v-for="pokemon in displayedPokemon"
          :key="pokemon.id"
          :pokemon="pokemon"
          class="transform hover:scale-105 transition-transform duration-200"
        />
      </div>

      <!-- No results -->
      <div v-else-if="!loading" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron Pokémon</h3>
        <p class="text-gray-600 mb-4">
          No hay Pokémon que coincidan con tus criterios de búsqueda.
        </p>
        <button
          @click="clearFilters"
          class="btn-primary"
        >
          Limpiar filtros
        </button>
      </div>

      <!-- Paginación -->
      <div v-if="totalPages > 1 && !loading" class="flex justify-center items-center space-x-4 mt-8">
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>

        <div class="flex space-x-2">
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              page === currentPage
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            ]"
          >
            {{ page }}
          </button>
        </div>

        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <!-- Botón cargar más (alternativa a paginación) -->
      <div v-if="hasMorePokemon && !loading && displayedPokemon.length > 0" class="text-center mt-8">
        <button
          @click="loadMorePokemon"
          :disabled="loadingMore"
          class="btn-secondary inline-flex items-center disabled:opacity-50"
        >
          <svg v-if="loadingMore" class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ loadingMore ? 'Cargando...' : 'Mas' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import PokemonService from '../services/pokemonService.js'

export default {
  name: 'Pokemon',
  components: {
    PokemonCard
  },
  setup() {
    // Estado reactivo
    const loading = ref(true)
    const loadingMore = ref(false)
    const error = ref('')
    const pokemonList = ref([])
    const pokemonDetails = ref([])
    const pokemonTypes = ref([])
    const searchQuery = ref('')
    const selectedType = ref('')
    const sortBy = ref('id')
    const currentPage = ref(1)
    const itemsPerPage = 20
    const totalCount = ref(0)

    // Estados derivados
    const filteredPokemon = computed(() => {
      let filtered = [...pokemonDetails.value]

      // Filtrar por búsqueda
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(pokemon =>
          pokemon.name.toLowerCase().includes(query) ||
          pokemon.id.toString().includes(query)
        )
      }

      // Filtrar por tipo
      if (selectedType.value) {
        filtered = filtered.filter(pokemon =>
          pokemon.types.some(type => type.type.name === selectedType.value)
        )
      }

      // Ordenar
      filtered.sort((a, b) => {
        switch (sortBy.value) {
          case 'name':
            return a.name.localeCompare(b.name)
          case 'height':
            return b.height - a.height
          case 'weight':
            return b.weight - a.weight
          default: // 'id'
            return a.id - b.id
        }
      })

      return filtered
    })

    const displayedPokemon = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      const end = start + itemsPerPage
      return filteredPokemon.value.slice(start, end)
    })

    const totalPages = computed(() => {
      return Math.ceil(filteredPokemon.value.length / itemsPerPage)
    })

    const visiblePages = computed(() => {
      const total = totalPages.value
      const current = currentPage.value
      const delta = 2
      const range = []
      const rangeWithDots = []

      for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i)
      }

      if (current - delta > 2) {
        rangeWithDots.push(1, '...')
      } else {
        rangeWithDots.push(1)
      }

      rangeWithDots.push(...range)

      if (current + delta < total - 1) {
        rangeWithDots.push('...', total)
      } else if (total > 1) {
        rangeWithDots.push(total)
      }

      return rangeWithDots.filter(page => page !== '...' || rangeWithDots.indexOf(page) === rangeWithDots.lastIndexOf(page))
    })

    const hasMorePokemon = computed(() => {
      return pokemonDetails.value.length < totalCount.value
    })

    // Métodos
    const capitalizeFirst = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const loadPokemonTypes = async () => {
      try {
        const types = await PokemonService.getPokemonTypes()
        pokemonTypes.value = types
      } catch (err) {
        console.error('Error loading pokemon types:', err)
      }
    }

    const loadPokemon = async (limit = 20, offset = 0) => {
      try {
        loading.value = offset === 0
        loadingMore.value = offset > 0
        error.value = ''

        const response = await PokemonService.getPokemonList(limit, offset)
        
        if (offset === 0) {
          pokemonList.value = response.results
          pokemonDetails.value = []
        } else {
          pokemonList.value = [...pokemonList.value, ...response.results]
        }

        totalCount.value = response.count

        // Cargar detalles de los nuevos Pokémon
        const newPokemon = response.results
        const detailPromises = newPokemon.map(pokemon => 
          PokemonService.getPokemonDetails(pokemon.name)
        )

        const details = await Promise.all(detailPromises)
        
        if (offset === 0) {
          pokemonDetails.value = details
        } else {
          pokemonDetails.value = [...pokemonDetails.value, ...details]
        }

      } catch (err) {
        error.value = 'No se pudo cargar la información de Pokémon. Verifica tu conexión.'
        console.error('Error loading pokemon:', err)
      } finally {
        loading.value = false
        loadingMore.value = false
      }
    }

    const loadMorePokemon = async () => {
      const currentOffset = pokemonDetails.value.length
      await loadPokemon(20, currentOffset)
    }

    const handleSearch = async () => {
      currentPage.value = 1

      if (searchQuery.value.trim() && searchQuery.value.trim().length > 2) {
        try {
          const results = await PokemonService.searchPokemon(searchQuery.value.trim())
          if (results.length > 0) {
            // Agregar resultados de búsqueda si no están ya cargados
            const existingIds = pokemonDetails.value.map(p => p.id)
            const newPokemon = results.filter(p => !existingIds.includes(p.id))
            
            if (newPokemon.length > 0) {
              pokemonDetails.value = [...pokemonDetails.value, ...newPokemon]
            }
          }
        } catch (err) {
          console.error('Error searching pokemon:', err)
        }
      }
    }

    const handleTypeFilter = async () => {
      currentPage.value = 1

      if (selectedType.value) {
        try {
          loading.value = true
          const typeData = await PokemonService.getPokemonByType(selectedType.value)
          
          // Obtener detalles solo de los primeros 50 Pokémon del tipo
          const pokemonOfType = typeData.slice(0, 50)
          const detailPromises = pokemonOfType.map(p => 
            PokemonService.getPokemonDetails(p.pokemon.name)
          )

          const details = await Promise.all(detailPromises)
          
          // Combinar con los Pokémon ya cargados, evitando duplicados
          const existingIds = pokemonDetails.value.map(p => p.id)
          const newPokemon = details.filter(p => !existingIds.includes(p.id))
          
          if (newPokemon.length > 0) {
            pokemonDetails.value = [...pokemonDetails.value, ...newPokemon]
          }

        } catch (err) {
          console.error('Error loading pokemon by type:', err)
        } finally {
          loading.value = false
        }
      }
    }

    const handleSort = () => {
      currentPage.value = 1
    }

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    const clearFilters = () => {
      searchQuery.value = ''
      selectedType.value = ''
      sortBy.value = 'id'
      currentPage.value = 1
    }

    // Watchers
    watch(searchQuery, () => {
      currentPage.value = 1
    })

    watch(selectedType, () => {
      currentPage.value = 1
    })

    // Lifecycle
    onMounted(async () => {
      await Promise.all([
        loadPokemon(),
        loadPokemonTypes()
      ])
    })

    return {
      // Estado
      loading,
      loadingMore,
      error,
      pokemonDetails,
      pokemonTypes,
      searchQuery,
      selectedType,
      sortBy,
      currentPage,
      
      // Computed
      filteredPokemon,
      displayedPokemon,
      totalPages,
      visiblePages,
      hasMorePokemon,
      
      // Métodos
      capitalizeFirst,
      loadPokemon,
      loadMorePokemon,
      handleSearch,
      handleTypeFilter,
      handleSort,
      goToPage,
      clearFilters
    }
  }
}
</script>

<style scoped>
.form-input:focus {
  border-color: #b079f8;
  box-shadow: 0 0 0 3px rgba(30, 185, 108, 0.1);
}

/* Animaciones para las tarjetas */
.pokemon-card-enter-active,
.pokemon-card-leave-active {
  transition: all 0.3s ease;
}

.pokemon-card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.pokemon-card-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>