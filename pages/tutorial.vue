<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ButtonBack from '@/components/ButtonBack.vue'
import TutorialCard from '@/components/TutorialCard.vue'

const title = 'Tutorial'
const tutorialList = ref([])       // ✅ state data tutorial
const isLoading = ref(true)        // ✅ state loading
const isError = ref(false)         // ✅ state error

// ✅ fungsi generate durasi random
const generateRandomDuration = () => {
  const minutes = Math.floor(Math.random() * 5) + 2
  return `${minutes} Menit`
}

// ✅ fungsi fetch tutorial
const fetchTutorials = async () => {
  isLoading.value = true
  isError.value = false

  try {
    const res = await axios.get(
      'https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/tutorials?'
    )

    console.log('📥 Full API Response:', res)

    const data = res?.data?.data || []   // ✅ pastikan selalu array
    console.log('✅ Data tutorials:', data)

    tutorialList.value = data.map((item) => ({
      id: item.id,
      image: item.thumbnail?.[0]?.url || item.thumbnail || 'https://via.placeholder.com/150',
      durasi: generateRandomDuration(),
      judul: item.title,
      deskripsi: item.description,
      videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title)}+tutorial`
    }))

    console.log('🎯 TutorialList Final:', tutorialList.value)
  } catch (err) {
    console.error('❌ Gagal fetch data tutorial:', err)
    isError.value = true
  } finally {
    isLoading.value = false   // ✅ pastikan loading dimatikan setelah semua selesai
  }
}

// ✅ aksi tombol
const lihatDetail = (id) => {
  console.log('👉 Navigasi ke detail tutorial dengan id:', id)
}

const tontonRekaman = (url) => {
  if (url) {
    console.log('▶️ Membuka video tutorial:', url)
    window.open(url, '_blank')
  } else {
    alert('Video tidak tersedia')
  }
}

onMounted(() => {
  console.log('🚀 Komponen mounted, mulai fetch tutorial...')
  fetchTutorials()
})
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- ✅ HEADER -->
    <div class="relative h-[10vh] w-full bg-white flex items-center justify-center px-4 z-20">
      <ButtonBack class="absolute left-4 bg-black text-white px-4 py-2 rounded-full shadow" />
      <span class="text-black font-medium text-base text-center">{{ title }}</span>
    </div>

    <!-- ✅ LOADING STATE -->
    <div v-if="isLoading" class="flex justify-center items-center py-16">
      <div class="h-10 w-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>

    <!-- ✅ ERROR STATE -->
    <div v-else-if="isError" class="text-center text-red-500 font-medium py-12">
      Terjadi kesalahan saat memuat data tutorial.
    </div>

    <!-- ✅ DATA KOSONG -->
    <div v-else-if="tutorialList.length === 0" class="text-center text-gray-400 py-12">
      Tidak ada tutorial ditemukan.
    </div>

    <!-- ✅ LIST TUTORIAL -->
    <div v-else class="p-4 space-y-4">
      <TutorialCard
        v-for="item in tutorialList"
        :key="item.id"
        :image="item.image"
        :durasi="item.durasi"
        :judul="item.judul"
        :deskripsi="item.deskripsi"
        :onDetail="() => lihatDetail(item.id)"
        :onPlay="() => tontonRekaman(item.videoUrl)"
      />
    </div>
  </section>
</template>
