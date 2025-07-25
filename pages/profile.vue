<script setup>
import { ref } from 'vue'
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import ProfileMenuCard from '@/components/ProfileMenuCard.vue'
import Toggle from '@/components/Toggle.vue'
import Gallery from '@/components/Gallery.vue'
import Footer from '@/components/Footer.vue'

const activeTab = ref('profile')

// Dummy user
const user = {
  name: 'SIXTI User',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
}

// Data gambar galeri
const galleryImages = ref([
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-95305921/no_kain_tenun_motif_buna_hitam_kuning_full04_lwmcea74.jpg',
  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-51089468/no_brand_kain_songket_palembang_tenun_tangan_lepus_halus_full01_7f240c50.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUeRTKVButcBsw-Zv6RioSSNKD6VakvhLkg&s',
  'https://upload.wikimedia.org/wikipedia/commons/e/e7/Batik_Indonesia.jpg'
])

// 🔥 Ref untuk input file
const fileInput = ref(null)

// ✅ Fungsi untuk membuka file picker
const uploadKarya = () => {
  fileInput.value.click() // trigger file input
}

// ✅ Saat file dipilih
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      // Tambahkan file yang dipilih ke galleryImages
      galleryImages.value.push(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-4 flex flex-col items-center">
    <!-- Header -->
    <div class="w-full relative flex items-center justify-between mb-4">
      <h1 class="text-base font-bold text-center absolute left-0 right-0 mx-auto w-max">Profile</h1>
      <ButtonShare />
    </div>

    <!-- Foto & Nama -->
    <div class="flex flex-col items-center mt-2">
      <img
        :src="user.avatar"
        alt="Avatar"
        class="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
      />
      <h2 class="mt-3 text-lg font-semibold text-gray-900">{{ user.name }}</h2>
    </div>

    <!-- Toggle Profile / Gallery -->
    <div class="mt-4 w-full flex justify-center">
      <Toggle v-model="activeTab" />
    </div>

    <!-- Konten Berdasarkan Tab -->
    <div class="mt-6 w-full">
      <ProfileMenuCard v-if="activeTab === 'profile'" />
      <Gallery
        v-else
        :images="galleryImages"
        :onUpload="uploadKarya"
      />
    </div>

    <!-- ✅ Input file tersembunyi -->
    <input
      type="file"
      ref="fileInput"
      accept="image/*"
      class="hidden"
      @change="handleFileChange"
    />
  </section>
  <Footer />
</template>
