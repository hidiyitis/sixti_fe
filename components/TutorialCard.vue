<template>
  <div class="bg-white rounded-2xl shadow-sm overflow-hidden max-w-md w-full">
    <!-- Gambar -->
    <img
      :src="image"
      alt="Tutorial Image"
      class="w-full h-48 object-cover"
    />

    <!-- Konten -->
    <div class="p-4 space-y-3">
      <!-- Durasi -->
      <div class="flex items-center text-sm text-gray-600 font-medium gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
        {{ durasi }}
      </div>

      <!-- Judul -->
      <h3 class="text-lg font-semibold text-gray-900 leading-snug">
        {{ judul }}
      </h3>

      <!-- Deskripsi -->
      <p class="text-sm text-gray-500">
        {{ deskripsi }}
      </p>

      <!-- Tombol -->
      <div class="flex gap-3 mt-2">
        <button
          @click="onDetail"
          class="flex-1 py-2 px-4 rounded-xl bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition"
        >
          Lihat Detail
        </button>

        <button
          @click="onPlay"
          class="flex-1 py-2 px-4 rounded-xl bg-neutral-900 text-white text-sm font-medium flex items-center justify-center gap-2 hover:brightness-110 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Tonton Rekaman
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  durasi: String,
  judul: String,
  deskripsi: String,
  onDetail: Function,
  onPlay: Function
})
</script>
