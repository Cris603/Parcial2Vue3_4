<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Acerca de 
          <span class="text-orange-300">Nosotros</span>
        </h1>
        <p class="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
          Una aplicación web moderna construida con pasión, creatividad y el poder de Vue 3.
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Descripción + Tecnologías en columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <!-- Descripción -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Acerca de nosotros</h2>
          <p class="text-lg text-gray-600 mb-4">
            Somos un grupo de desarrolladores apasionados por la tecnología y el aprendizaje constante. 
            Este proyecto nació como una forma de aplicar nuestros conocimientos y demostrar que con 
            trabajo en equipo se pueden lograr grandes cosas.
          </p>
          <p class="text-lg text-gray-600 mb-4">
            Nos gusta experimentar con nuevas herramientas, enfrentar retos y crear soluciones que no 
            solo funcionen, sino que también sean atractivas y fáciles de usar. 
          </p>
          <p class="text-lg text-gray-600">
            Más que un simple proyecto académico, esto representa nuestro esfuerzo, creatividad y el deseo 
            de crecer como programadores.
          </p>
        </div>

        <!-- Tecnologías utilizadas -->
        <div class="grid grid-cols-1 gap-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Tecnologías utilizadas</h2>
          
          <!-- Vue 3 -->
          <div class="p-5 rounded-xl border-l-4 border-emerald-500 bg-white shadow hover:scale-105 transition">
            <h3 class="text-lg font-bold text-emerald-600 mb-1">Vue 3</h3>
            <p class="text-gray-600 text-sm">Framework progresivo para construir interfaces dinámicas y escalables.</p>
          </div>

          <!-- Tailwind CSS -->
          <div class="p-5 rounded-xl border-l-4 border-teal-500 bg-white shadow hover:scale-105 transition">
            <h3 class="text-lg font-bold text-teal-600 mb-1">Tailwind CSS</h3>
            <p class="text-gray-600 text-sm">Framework CSS basado en utilidades que acelera el desarrollo de interfaces.</p>
          </div>

          <!-- Axios -->
          <div class="p-5 rounded-xl border-l-4 border-orange-500 bg-white shadow hover:scale-105 transition">
            <h3 class="text-lg font-bold text-orange-600 mb-1">Axios</h3>
            <p class="text-gray-600 text-sm">Cliente HTTP simple y eficiente para consumir APIs REST.</p>
          </div>

          <!-- Google Maps -->
          <div class="p-5 rounded-xl border-l-4 border-cyan-500 bg-white shadow hover:scale-105 transition">
            <h3 class="text-lg font-bold text-cyan-600 mb-1">Google Maps</h3>
            <p class="text-gray-600 text-sm">API para integrar mapas interactivos, rutas y geolocalización.</p>
          </div>
        </div>
      </div>

      <!-- Quiénes somos -->
      <section class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg shadow-lg p-8 mb-20">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Grupo #4</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span class="text-4xl text-emerald-600">👨‍💻</span>
            <h3 class="mt-2 font-semibold">Cristian Anastacio<br/>Martínez Melara</h3>
          </div>
          <div>
            <span class="text-4xl text-teal-600">🧑‍💻</span>
            <h3 class="mt-2 font-semibold">Josue Daniel<br/>Sánchez Méndez</h3>
          </div>
          <div>
            <span class="text-4xl text-orange-600">👨‍💻</span>
            <h3 class="mt-2 font-semibold">Leonidas Antonio<br/>Márquez</h3>
          </div>
          <div>
            <span class="text-4xl text-cyan-600">🧑‍💻</span>
            <h3 class="mt-2 font-semibold">Marcos Antonio<br/>Beltrán Chávez</h3>
          </div>
        </div>
        <!-- Prom motivacional -->
        <div class="mt-10 text-center">
          <blockquote class="text-xl italic text-gray-700">
            “El trabajo en equipo divide las tareas y multiplica los éxitos.” 🚀
          </blockquote>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center">
        <div class="p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3">
            <!-- Pokéball SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12h4a6 6 0 0 1 12 0h4c0-5.52-4.48-10-10-10zm0 20c5.52 
                       0 10-4.48 10-10h-4a6 6 0 0 1-12 0H2c0 5.52 4.48 10 10 10zm0-8a2 2 0 1 0 
                       0-4 2 2 0 0 0 0 4z"/>
            </svg>
            ¡Atrévete a ser un Maestro Pokémon!
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/pokemon"
              class="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500 font-medium py-3 px-6 rounded-lg shadow transition inline-flex items-center justify-center"
            >
              Explorar Pokédex
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'About',
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
}
</script>
