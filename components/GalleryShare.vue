<script setup>
import { toBlob } from 'html-to-image'
import { ref, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  show: Boolean,
  item: {
    type: Object,
    default: () => ({})
  },
  onClose: Function
})

const cardRef = ref(null)

const downloadImage = async () => {
  if (!cardRef.value) return
  const blob = await toBlob(cardRef.value)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${props.item.title || 'galeri'}.png`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

watch(() => props.show, async (val) => {
  if (val) await nextTick()
})
</script>

<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
    <!-- Dialog Box -->
    <div ref="cardRef" class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm w-full">
      <div class="p-4">
        <!-- Logo -->
        <img src="/" alt="Logo" class="w-20 mb-2" />

        <!-- Gambar -->
        <img
          :src="item.image"
          alt="Gambar Batik"
          class="w-full h-64 object-cover rounded-lg mb-4"
        />

        <!-- Judul -->
        <h2 class="text-lg font-semibold text-gray-900 mb-1">{{ item.title }}</h2>

        <!-- Deskripsi -->
        <p class="text-sm text-gray-700 leading-relaxed">
          {{ item.description }}
        </p>

        <!-- Tombol Aksi -->
        <div class="flex justify-between gap-2 mt-4">
          <button class="flex-1 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
            Membatik Tulis
          </button>
          <button
            @click="downloadImage"
            class="flex-1 py-2 bg-black text-white text-sm font-medium rounded-full flex items-center justify-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Unduh
          </button>
        </div>
      </div>
    </div>

    <!-- Overlay clickable area -->
    <div class="absolute inset-0" @click="onClose"></div>
  </div>
</template>

<style scoped>
/* Optional styling */
</style>
