<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4"
    >
      <div class="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-lg">
        <!-- Gambar -->
        <img
          src="@/assets/DalamPengembangan.svg"
          alt="Sedang Dalam Pengembangan"
          class="w-16 h-16 mx-auto mb-4"
        />

        <!-- Judul -->
        <h2 class="text-xl font-bold text-gray-800 mb-2">Sedang Dalam Pengembangan</h2>

        <!-- Deskripsi -->
        <p class="text-gray-600 text-sm leading-relaxed">
          Fitur untuk eksplorasi Tenun / Songket sedang kami siapkan agar pengalamanmu makin lengkap.
          Tunggu sebentar lagi, ya!
        </p>

        <!-- Tombol -->
        <button
          @click="$emit('close')"
          class="mt-6 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold rounded-full px-6 py-3 transition"
        >
          Kembali
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
