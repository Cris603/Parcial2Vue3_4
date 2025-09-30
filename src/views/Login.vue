<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold text-white drop-shadow">
        Iniciar sesión
      </h2>
      <p class="mt-2 text-center text-sm text-gray-100">
        ¿No tienes cuenta?
        <router-link to="/registro" class="font-medium text-yellow-300 hover:text-yellow-200">
          Regístrate aquí
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white/95 backdrop-blur shadow-xl py-10 px-6 rounded-xl">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-800">
              Correo electrónico
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                required
                class="form-input bg-gray-50 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-lg"
                :class="{ 'border-red-500': errors.email }"
                @blur="validateField('email')"
                @input="clearError('email')"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                {{ errors.email }}
              </p>
            </div>
          </div>

          <!-- Contraseña -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-800">
              Contraseña
            </label>
            <div class="mt-1 relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                class="form-input bg-gray-50 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full rounded-lg pr-10"
                :class="{ 'border-red-500': errors.password }"
                @blur="validateField('password')"
                @input="clearError('password')"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <span v-if="showPassword">🙈</span>
                <span v-else>👁️</span>
              </button>
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">
                {{ errors.password }}
              </p>
            </div>
          </div>

          <!-- Recordar sesión y olvide contraseña -->
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="rememberMe"
                v-model="form.rememberMe"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="rememberMe" class="ml-2 block text-sm text-gray-800">
                Recordarme
              </label>
            </div>

            <div class="text-sm">
              <a href="#" @click.prevent="handleForgotPassword" class="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <!-- Botón de envío -->
          <div>
            <button
              type="submit"
              :disabled="isSubmitting || !isFormValid"
              class="w-full flex justify-center items-center px-4 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="animate-spin mr-2">🔄</span>
              {{ isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión' }}
            </button>
          </div>
        </form>

        <!-- Mensajes -->
        <div v-if="successMessage" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded text-center">
          {{ successMessage }}
          <!-- Botón Explorar Pokédex -->
          <div class="mt-4">
            <router-link
              to="/pokemon"
              class="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-500 hover:to-orange-500 font-medium py-3 px-6 rounded-lg shadow transition inline-flex items-center justify-center"
            >
              Explorar Pokédex
            </router-link>
          </div>
        </div>

        <div v-if="errorMessage" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false,
      },
      errors: {
        email: null,
        password: null,
      },
      showPassword: false,
      isSubmitting: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  computed: {
    isFormValid() {
      return this.form.email && this.form.password && !this.errors.email && !this.errors.password;
    },
  },
  methods: {
    validateField(field) {
      if (field === "email" && !this.form.email.includes("@")) {
        this.errors.email = "El correo no es válido.";
      }
      if (field === "password" && this.form.password.length < 6) {
        this.errors.password = "La contraseña debe tener al menos 6 caracteres.";
      }
    },
    clearError(field) {
      this.errors[field] = null;
    },
    handleSubmit() {
      this.isSubmitting = true;
      this.successMessage = "";
      this.errorMessage = "";

      setTimeout(() => {
        if (this.form.email === "cris@cris.com" && this.form.password === "123456") {
          this.successMessage = "Inicio de sesión exitoso 🎉";
          // Redirigir automáticamente
          this.$router.push("/pokemon");
        } else {
          this.errorMessage = "Credenciales incorrectas ❌";
        }
        this.isSubmitting = false;
      }, 1500);
    },
    handleForgotPassword() {
      alert("Redirigiendo a recuperación de contraseña...");
    },
  },
};
</script>
