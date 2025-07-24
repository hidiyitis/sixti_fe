<script setup>
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import TutorialCard from '@/components/TutorialCard.vue'

const title = 'Tutorial'

// Dummy data tutorial
const tutorialList = [
  {
    id: 1,
    image: 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/06/028577700_1443707050-Batik-Mega-Mendung-1024x768.webp',
    durasi: '3 Menit',
    judul: 'Pengenalan Batik & Apa saja yang dibutuhkan',
    deskripsi: 'Apa Itu Batik Mega Mendung? dan apa saja yang perlu disiapkan'
  },
  {
    id: 2,
    image: 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/06/028577700_1443707050-Batik-Mega-Mendung-1024x768.webp',
    durasi: '5 Menit',
    judul: 'Tutorial Membatik Parang',
    deskripsi: 'Pelajari cara dasar membuat motif Parang dalam waktu singkat.'
  },
  {
    id: 3,
    image: 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/06/028577700_1443707050-Batik-Mega-Mendung-1024x768.webp',
    durasi: '4 Menit',
    judul: 'Cara Menyiapkan Alat Batik di Rumah',
    deskripsi: 'Apa saja alat yang perlu kamu siapkan sebelum membatik.'
  }
]

// Aksi tombol per tutorial
const lihatDetail = (id) => {
  console.log('Navigasi ke detail tutorial dengan id:', id)
}

const tontonRekaman = (id) => {
  console.log('Tonton rekaman tutorial dengan id:', id)
}
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Header -->
    <div class="relative h-[10vh] w-full bg-white flex items-center justify-center px-4 z-20">
      <ButtonBack class="absolute left-4 bg-black text-white px-4 py-2 rounded-full shadow" />
      <span class="text-black font-medium text-base text-center">{{ title }}</span>
      <!-- <ButtonShare class="absolute right-4 border border-gray-800 text-gray-800 px-4 py-2 rounded-full shadow" /> -->
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
        :onPlay="() => tontonRekaman(item.id)"
      />
    </div>
  </section>
</template>