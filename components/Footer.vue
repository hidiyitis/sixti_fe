<template>
  <footer
    class="fixed bottom-0 left-0 right-0 w-full max-w-[400px] mx-auto h-20 bg-white flex items-end justify-between px-6 shadow-[0_-2px_16px_rgba(0,0,0,0.06)] z-50"
  >
    <!-- Tombol Beranda -->
    <NuxtLink
      to="/"
      class="flex flex-col items-center text-sm font-medium transition w-[80px] mb-3"
      :class="{
        'text-gray-900 font-bold': active === 'home',
        'text-gray-400': active !== 'home'
      }"
    >
      <House :size="26" />
      <span class="text-xs">Beranda</span>
    </NuxtLink>

    <!-- Spacer tengah -->
    <div class="w-[68px]"></div>

    <!-- Tombol Profil -->
    <NuxtLink
      to="/profile"
      class="flex flex-col items-center text-sm font-medium transition w-[80px] mb-3"
      :class="{
        'text-gray-900 font-bold': active === 'profile',
        'text-gray-400': active !== 'profile'
      }"
    >
      <CircleUser :size="26" />
      <span class="text-xs">Profil</span>
    </NuxtLink>

    <!-- Tombol Scan Tengah -->
    <NuxtLink
      to="/recogbatik"
      class="absolute left-1/2 -translate-x-1/2 bottom-[26px] w-[64px] h-[64px] rounded-full bg-neutral-900 flex items-center justify-center shadow-lg z-10"
    >
      <img src="/assets/scanning.svg" alt="Scan" class="w-20 h-20" />
    </NuxtLink>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { House, CircleUser } from 'lucide-vue-next'

const route = useRoute()

const active = computed(() => {
  if (route.path === '/' || route.path.startsWith('/home')) return 'home'
  if (route.path.startsWith('/profile')) return 'profile'
  return ''
})
</script>
