<script setup>
import { ref } from 'vue'
import GalleryShare from './GalleryShare.vue'

defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  onUpload: {
    type: Function,
    default: () => {}
  }
})

// State dialog & data yang dipilih
const showDialog = ref(false)
const selectedItem = ref(null)

// ✅ Saat gambar diklik, data dikirim ke dialog
const handleImageClick = (image) => {
  selectedItem.value = {
    title: 'Batik Mega Mendung', // 🔥 Bisa dynamic jika ada data title
    description: 'Batik Megamendung berasal dari Cirebon, Jawa Barat, dan dikenal sejak abad ke-17. Motif ini dipengaruhi budaya Tionghoa dan memiliki filosofi mendalam tentang ketenangan dalam menghadapi perubahan.',
    image: image
  }
  showDialog.value = true
}
</script>

<template>
  <div class="bg-white rounded-2xl p-4 space-y-4">
    <!-- ✅ Tombol Upload -->
    <button
      @click="onUpload"
      class="w-full border border-dashed border-gray-300 rounded-xl py-6 flex items-center justify-center gap-2 text-gray-700 hover:bg-gray-50 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
      <span class="font-semibold">Upload Karya</span>
    </button>

    <!-- ✅ Galeri Grid -->
    <div class="grid grid-cols-2 gap-3">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="rounded-xl overflow-hidden cursor-pointer"
        @click="handleImageClick(img)"
      >
        <img
          :src="img"
          alt="Karya"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>

  <!-- ✅ Dialog Share -->
  <GalleryShare
    v-if="showDialog"
    :show="showDialog"
    :data="selectedItem"
    @close="showDialog = false"
  />
</template>
