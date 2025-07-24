<template>
  <footer
    class="fixed bottom-0 left-0 right-0 w-full max-w-[400px] mx-auto h-20 px-6 pb-3 bg-white flex justify-between items-end shadow-[0_-2px_16px_rgba(0,0,0,0.06)] z-50"
  >
    <!-- Tombol Beranda -->
    <NuxtLink
      to="/"
      class="flex flex-col items-center text-sm font-medium transition"
      :class="{
        'text-gray-900 font-bold': active === 'home',
        'text-gray-400': active !== 'home'
      }"
    >
      <House :size="28" />
      <span class="text-[0.95rem]">Beranda</span>
    </NuxtLink>

    <!-- Tombol Scan Tengah -->
    <button
      class="absolute left-1/2 -translate-x-1/2 translate-y-[-40%] bottom-[18px] w-[68px] h-[68px] rounded-full bg-neutral-900 flex items-center justify-center shadow-lg z-10"
    >
      <img src="/assets/scanning.svg" alt="Scan" class="w-9 h-9" />
    </button>

    <!-- Tombol Profil -->
    <NuxtLink
      to="/profil"
      class="flex flex-col items-center text-sm font-medium transition"
      :class="{
        'text-gray-900 font-bold': active === 'profile',
        'text-gray-400': active !== 'profile'
      }"
    >
      <CircleUser :size="28" />
      <span class="text-[0.95rem]">Profil</span>
    </NuxtLink>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { House, CircleUser } from 'lucide-vue-next'

const route = useRoute()

// Cek halaman aktif untuk highlight menu
const active = computed(() => {
  if (route.path === '/' || route.path.startsWith('/home')) return 'home'
  if (route.path.startsWith('/profil')) return 'profile'
  return ''
})
</script>
