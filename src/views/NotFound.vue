<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div class="max-w-md w-full text-center">
      <!-- Ilustración 404 -->
      <div class="mb-8">
        <div class="relative">
          <!-- Círculo de fondo animado -->
          <div class="w-64 h-64 mx-auto bg-gradient-to-br from-primary-100 to-purple-100 rounded-full flex items-center justify-center relative overflow-hidden">
            <!-- Elementos decorativos animados -->
            <div class="absolute top-4 left-8 w-4 h-4 bg-primary-300 rounded-full animate-bounce" style="animation-delay: 0.5s;"></div>
            <div class="absolute top-12 right-12 w-3 h-3 bg-purple-300 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
            <div class="absolute bottom-8 left-12 w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style="animation-delay: 1.5s;"></div>
            <div class="absolute bottom-16 right-8 w-5 h-5 bg-green-300 rounded-full animate-bounce" style="animation-delay: 2s;"></div>
            
            <!-- Número 404 grande -->
            <div class="text-6xl sm:text-8xl font-bold text-primary-600 opacity-80">
              404
            </div>
          </div>
          
          <!-- Pokémon perdido (opcional) -->
          <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span class="text-2xl">🔍</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mensaje principal -->
      <div class="mb-8">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          ¡Oops!
        </h1>
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
          Página no encontrada
        </h2>
        <p class="text-gray-600 text-lg mb-2">
          La página que buscas no existe o ha sido movida.
        </p>
        <p class="text-gray-500">
          Es posible que hayas escrito mal la URL o que el enlace esté roto.
        </p>
      </div>

      <!-- Sugerencias y acciones -->
      <div class="space-y-4 mb-8">
        <p class="text-sm text-gray-600">¿Qué puedes hacer?</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2H3zm0 0V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2" />
              </svg>
              <div>
                <h3 class="text-sm font-medium text-gray-900 mb-1">Revisa la URL</h3>
                <p class="text-xs text-gray-600">Verifica que la dirección esté escrita correctamente</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <div>
                <h3 class="text-sm font-medium text-gray-900 mb-1">Usar navegación</h3>
                <p class="text-xs text-gray-600">Usa el menú para ir a una página válida</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          @click="goBack"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver atrás
        </button>

        <router-link
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Ir al inicio
        </router-link>
      </div>

      <!-- Enlaces rápidos -->
      <div class="border-t border-gray-200 pt-6">
        <p class="text-sm text-gray-600 mb-4">O visita alguna de estas páginas:</p>
        
        <div class="flex flex-wrap gap-3 justify-center">
          <router-link
            to="/pokemon"
            class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Pokédex
          </router-link>

          <span class="text-gray-300">•</span>

          <router-link
            to="/contacto"
            class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contacto
          </router-link>

          <span class="text-gray-300">•</span>

          <router-link
            to="/registro"
            class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Registro
          </router-link>

          <span class="text-gray-300">•</span>

          <router-link
            to="/acerca"
            class="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Acerca de
          </router-link>
        </div>
      </div>

      <!-- Información adicional -->
      <div class="mt-8 text-center">
        <p class="text-xs text-gray-500">
          Error 404 • Página no encontrada • POKEAPI
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NotFound',
  setup() {
    const router = useRouter()

    const goBack = () => {
      // Si hay historial, ir atrás, sino ir al inicio
      if (window.history.length > 1) {
        router.go(-1)
      } else {
        router.push('/')
      }
    }

    onMounted(() => {
      // Log para analytics (opcional)
      console.log('404 - Página no encontrada:', window.location.pathname)
    })

    return {
      goBack
    }
  }
}
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Efectos hover para los botones */
.hover-lift:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}

/* Animación de entrada para el contenido */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive para dispositivos muy pequeños */
@media (max-width: 320px) {
  .text-6xl {
    font-size: 3rem;
  }
  
  .text-8xl {
    font-size: 4rem;
  }
}
</style>