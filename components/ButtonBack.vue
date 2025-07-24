<template>
  <button
    class="flex items-center gap-1 text-white font-medium text-base px-3 py-1 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 shadow hover:brightness-110 transition"
    @click="goBack"
  >
    <!-- Ikon panah kiri -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Kembali
  </button>
</template>

<script setup>
const goBack = () => {
  window.history.back()
}
</script>
