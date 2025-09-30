<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center">
          <h1 class="text-5xl font-extrabold mb-6">
            Bienvenido a 
            <span class="text-yellow-400">POKEAPI</span>
          </h1>
          <p class="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto">
            APP DE POKEAMIGOS
          </p>
          <div class="flex justify-center">
            <router-link 
              to="/login" 
              class="bg-white text-primary-700 hover:bg-gray-200 inline-flex items-center px-10 py-4 text-lg font-semibold rounded-md transition duration-200"
            >
              Ver Pokémon
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
