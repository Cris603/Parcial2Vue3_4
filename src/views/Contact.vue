<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
    <div class="w-full max-w-6xl bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl p-10">
      <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-10 drop-shadow">
        Contáctanos
      </h2>

      <!-- Grid: Formulario + Mapa -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Formulario -->
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-700">📩 Envíanos un mensaje</h3>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="form-input"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="form-input"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="form-input"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-3 px-6 rounded-lg font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <!-- Mapa -->
        <div>
          <h3 class="text-2xl font-bold text-gray-700 mb-4">📍 Nuestra ubicación</h3>
          <div class="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              class="w-full h-full"
              style="border:0;"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.196258137268!2d-89.19250668516145!3d13.705504790378356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63301a1b79f7c3%3A0x2b6d34c3d0e6b3f1!2sUniversidad%20Luterana%20Salvadore%C3%B1a!5e0!3m2!1ses!2ssv!4v1695854021234!5m2!1ses!2ssv"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      alert("📨 Mensaje enviado correctamente.");
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped>
.form-input {
  @apply block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition;
}
</style>
