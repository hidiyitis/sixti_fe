<template>
    <div
      class="flex items-center justify-between bg-white rounded-xl shadow-sm p-3 pr-4 w-full max-w-md ml-2"
    >
      <!-- Gambar Produk -->
      <div class="flex items-center gap-3">
        <img
          :src="image"
          alt="Produk"
          class="w-20 h-20 object-contain rounded-lg"
        />
        <div>
          <h2 class="text-base font-semibold text-gray-800 leading-snug">
            {{ title }}
          </h2>
          <p class="text-sm text-gray-500 mt-1">
            Rp{{ formatPrice(minPrice) }} – Rp{{ formatPrice(maxPrice) }}
          </p>
        </div>
      </div>
  
      <!-- Tombol Arah -->
      <button
        class="bg-gray-100 hover:bg-gray-200 transition rounded-lg p-2 text-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    image: String,
    minPrice: Number,
    maxPrice: Number,
  })
  
  function formatPrice(value) {
    return value.toLocaleString('id-ID')
  }
  </script>
  