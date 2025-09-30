<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <span class="font-bold text-xl text-gray-900">POKEAPI</span>
          </router-link>
        </div>

        <!-- Navigation Desktop -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              :class="[
                $route.path === item.href
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <span class="sr-only">Abrir menú principal</span>
            <svg 
              :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          :class="[
            $route.path === item.href
              ? 'bg-primary-500 text-white'
              : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
          ]"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Header',
  setup() {
    const mobileMenuOpen = ref(false)
    
    const navigation = [
      { name: 'Inicio', href: '/' },
      { name: 'Registro', href: '/registro' },
      { name: 'Login', href: '/login' },
      { name: 'Contacto', href: '/contacto' },
      { name: 'Acerca de', href: '/acerca' }
    ]

    return {
      mobileMenuOpen,
      navigation
    }
  }
}
</script>