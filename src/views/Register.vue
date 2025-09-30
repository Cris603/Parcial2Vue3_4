<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
    <div class="max-w-md w-full">

      <!-- Título -->
      <h2 class="mt-6 text-center text-3xl font-extrabold text-white drop-shadow-lg">
        CREAR CUENTA NUEVA
      </h2>

      <!-- Caja -->
      <div class="mt-8 bg-white shadow-2xl rounded-2xl p-8 backdrop-blur-md bg-opacity-95">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Nombre -->
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">Nombre *</label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              class="form-input"
              :class="{ 'border-red-500': errors.firstName }"
              @blur="validateField('firstName')"
              placeholder="Ingresa tu nombre"
            />
            <p v-if="errors.firstName" class="mt-1 text-sm text-red-600">{{ errors.firstName }}</p>
          </div>

          <!-- Apellido -->
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Apellido *</label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="form-input"
              :class="{ 'border-red-500': errors.lastName }"
              @blur="validateField('lastName')"
              placeholder="Ingresa tu apellido"
            />
            <p v-if="errors.lastName" class="mt-1 text-sm text-red-600">{{ errors.lastName }}</p>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="form-input"
              :class="{ 'border-red-500': errors.email }"
              @blur="validateField('email')"
              placeholder="ejemplo@correo.com"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <!-- Contraseña -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Contraseña *</label>
            <div class="mt-1 relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                class="form-input pr-10"
                :class="{ 'border-red-500': errors.password }"
                @blur="validateField('password')"
                placeholder="Crea una contraseña segura"
              />
              <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg v-if="showPassword" class="h-5 w-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 
                           0 8.268 2.943 9.542 7-1.274 4.057-5.064 
                           7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 
                           19c-4.478 0-8.268-2.943-9.543-7a9.97 
                           9.97 0 011.563-3.029m5.858.908a3 3 
                           0 114.243 4.243M9.878 9.878l4.242 
                           4.242M9.878 9.878L3 3m6.878 
                           6.878L21 21"/>
                </svg>
              </button>
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>
          </div>

          <!-- Confirmar contraseña -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmar contraseña *</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              required
              class="form-input"
              :class="{ 'border-red-500': errors.confirmPassword }"
              @blur="validateField('confirmPassword')"
              placeholder="Repite tu contraseña"
            />
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
          </div>

          <!-- Términos -->
          <div class="flex items-center">
            <input id="acceptTerms" v-model="form.acceptTerms" type="checkbox"
                   class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"/>
            <label for="acceptTerms" class="ml-2 block text-sm text-gray-900">
              Acepto los <a href="#" class="text-pink-600 hover:underline">términos y condiciones</a>
            </label>
          </div>
          <p v-if="errors.acceptTerms" class="text-sm text-red-600">{{ errors.acceptTerms }}</p>

          <!-- Botón -->
          <div>
            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full flex justify-center items-center py-3 px-6 rounded-lg font-bold text-white
                     bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600
                     shadow-lg transform hover:scale-105 transition-transform duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10"
                        stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 
                         0 0 5.373 0 12h4zm2 5.291A7.962 
                         7.962 0 014 12H0c0 3.042 1.135 
                         5.824 3 7.938l3-2.647z"/>
              </svg>
              {{ isSubmitting ? 'Registrando...' : 'Crear cuenta' }}
            </button>
          </div>
        </form>

        <!-- Mensajes -->
        <div v-if="successMessage" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

const errors = reactive({})
const showPassword = ref(false)
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const validateField = (field) => {
  switch (field) {
    case 'firstName':
      if (!form.firstName.trim()) errors.firstName = 'El nombre es requerido'
      else delete errors.firstName
      break
    case 'lastName':
      if (!form.lastName.trim()) errors.lastName = 'El apellido es requerido'
      else delete errors.lastName
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim()) errors.email = 'El correo electrónico es requerido'
      else if (!emailRegex.test(form.email)) errors.email = 'Correo no válido'
      else delete errors.email
      break
    case 'password':
      if (!form.password) errors.password = 'La contraseña es requerida'
      else if (form.password.length < 6) errors.password = 'Debe tener al menos 6 caracteres'
      else delete errors.password
      break
    case 'confirmPassword':
      if (form.password !== form.confirmPassword) errors.confirmPassword = 'Las contraseñas no coinciden'
      else delete errors.confirmPassword
      break
    case 'acceptTerms':
      if (!form.acceptTerms) errors.acceptTerms = 'Debes aceptar los términos'
      else delete errors.acceptTerms
      break
  }
}

const isFormValid = computed(() => Object.keys(errors).length === 0 &&
  form.firstName && form.lastName && form.email &&
  form.password && form.confirmPassword && form.acceptTerms)

const handleSubmit = async () => {
  Object.keys(form).forEach(f => validateField(f))
  if (!isFormValid.value) {
    errorMessage.value = 'Corrige los errores antes de continuar'
    return
  }
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''
  setTimeout(() => {
    successMessage.value = '¡Registro exitoso!'
    isSubmitting.value = false
  }, 2000)
}
</script>

<style scoped>
.form-input {
  @apply block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm
         placeholder-gray-400 focus:outline-none focus:ring-2
         focus:ring-pink-500 focus:border-pink-500 transition;
}
</style>
