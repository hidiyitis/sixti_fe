<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ButtonBack from '@/components/ButtonBack.vue'
import TutorialCard from '@/components/TutorialCard.vue'

const title = 'Tutorial'
const tutorialList = ref([])

const generateRandomDuration = () => {
  const minutes = Math.floor(Math.random() * 5) + 2
  return `${minutes} Menit`
}

const fetchTutorials = async () => {
  try {
    const res = await axios.get('https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/products?limit=5')
    const data = res.data.data

    tutorialList.value = data.map((item) => ({
      id: item.id,
      image: item.photos?.[0]?.url || 'https://via.placeholder.com/150',
      durasi: generateRandomDuration(),
      judul: item.title,
      deskripsi: item.description,
      videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(item.title)}+tutorial` // fallback
    }))
  } catch (err) {
    console.error('Gagal fetch data tutorial:', err)
  }
}

// Aksi tombol
const lihatDetail = (id) => {
  console.log('Navigasi ke detail tutorial dengan id:', id)
}

const tontonRekaman = (url) => {
  if (url) {
    window.open(url, '_blank')
  } else {
    alert('Video tidak tersedia')
  }
}

onMounted(() => {
  fetchTutorials()
})
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Header -->
    <div class="relative h-[10vh] w-full bg-white flex items-center justify-center px-4 z-20">
      <ButtonBack class="absolute left-4 bg-black text-white px-4 py-2 rounded-full shadow" />
      <span class="text-black font-medium text-base text-center">{{ title }}</span>
    </div>

    <!-- Loop semua tutorial -->
    <div class="p-4 space-y-4">
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
