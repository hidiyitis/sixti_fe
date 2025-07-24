<script setup>
// Import komponen kartu
import SearchBar from '@/components/SearchBar.vue'
import KategoriKain from '@/components/KategoriKain.vue'
import BannerMasuk from '@/components/BannerMasuk.vue'
import BatikCard from '@/components/BatikCard.vue'
import Footer from '@/components/Footer.vue'

const batikList = [
  {
    nama: 'Batik Sido Asih',
    lokasi: 'DIY Yogyakarta',
    image: '/images/batik-sido-asih.jpg',
  },
  {
    nama: 'Batik Parang Kusumo',
    lokasi: 'Solo',
    image: '/images/batik-parang.jpg',
  },
]

</script>
  

<template>
  <section class="min-h-screen bg-white px-4 py-6 max-w-md mx-auto pl-0">
    <!-- Heading -->
    <div class="mb-4 text-left">
      <h1 class="ml-2 mt-10">
        <span class="block text-2xl font-normal text-gray-700 leading-tight">Selamat Datang, </span>
        <span class="block text-2xl font-bold text-gray-800 mt-1 flex items-center">Kenali Kriya Indonesia!<span class="ml-1">👋</span></span>
      </h1>
    </div>
    <BannerMasuk />
    <SearchBar />
    <KategoriKain />
    <div class="mb-4 text-left">
      <h1 class="ml-2 mt-10">
        <span class="block text-xl font-normal text-gray-700 leading-tight">Warsa Yang Kian Langka</span>
      </h1>
    </div>
    <!-- Grid Batik 2x2 -->
    <div class="grid grid-cols-2 gap-1 justify-items-center">
    <BatikCard
        v-for="(batik, i) in batikList"
        :key="i"
        :nama="batik.nama"
        :lokasi="batik.lokasi"
        :image="batik.image"
    />
    </div>

  </section>
  <Footer />
</template>