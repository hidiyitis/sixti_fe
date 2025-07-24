<script setup>
import { useRouter } from 'vue-router'

// Props untuk menerima data dinamis
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      origin: '',
      sejarah: '',
      filosofi: '',
      ciriKhas: '',
      funFact: '',
    }),
  },
})

const router = useRouter()

// Fungsi untuk navigasi ke halaman tutorial
const goToTutorial = () => {
  router.push('/tutorial')
}
</script>

<template>
  <section class="relative z-10 -mt-16 px-4">
    <div class="bg-white p-4 rounded-2xl shadow-lg max-w-md mx-auto space-y-6">
      <!-- Judul dan asal -->
      <div>
        <h1 class="text-xl font-bold text-gray-900">{{ data.title }}</h1>
        <p class="text-sm text-gray-600 mt-1">Asal: {{ data.origin }}</p>
      </div>

      <!-- Tombol Sejarah -->
      <button
        class="flex items-center justify-center gap-2 w-full py-2.5 text-white font-semibold text-base rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-md hover:brightness-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Sejarah
      </button>

      <!-- Konten dinamis -->
      <div>
        <h2 class="text-lg font-semibold text-gray-800 mb-1">Sejarah</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ data.sejarah }}</p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-800 mb-1">Filosofi</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ data.filosofi }}</p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-800 mb-1">Ciri Khas</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ data.ciriKhas }}</p>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-gray-800 mb-1">Fun Fact</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ data.funFact }}</p>
      </div>

      <!-- Tombol Tutorial Pembuatan -->
      <button
        @click="goToTutorial"
        class="flex items-center justify-center gap-2 w-full py-2.5 text-white font-semibold text-base rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-md hover:brightness-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Tutorial Pembuatan
      </button>
    </div>
  </section>
</template>