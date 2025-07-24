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
    image: 'https://www.batikprabuseno.com/artikel/wp-content/uploads/2022/12/ugugu-01.png',
  },
  {
    nama: 'Batik Parang Kusumo',
    lokasi: 'Solo',
    image: 'https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2021/10/batik-parang-f-batik-indonesia.jpg',
  },
]

const products = [
  {
    title: 'Paket Membatik',
    minPrice: 145000,
    maxPrice: 180000,
    image: 'https://www.rinso.com/images/h0nadbhvm6m4/17RmARrAatDIJ0x2DxsGSc/68f28770f0815e43ef8408c6751dcefb/MDIuX1JpbnNvX09rdG9iZXJfSGVhZGVyLmpwZw/1000w-668h/pembatik-pemula.jpg',
  },
  {
    title: 'Paket Menenun',
    minPrice: 95000,
    maxPrice: 125000,
    image: 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/09/AdobeStock_335615974_Preview.jpeg',
  },
  {
    title: 'Paket Meyongket',
    minPrice: 75000,
    maxPrice: 99000,
    image: 'https://cdn0-production-images-kly.akamaized.net/aLtYPIfKeiiel2yE9fiQGkYlBms=/0x0/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2562099/original/018829600_1546383438-rep-yun-songket-4.jpg',
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
    <div class="mb-4 text-left">
      <h1 class="ml-2 mt-10">
        <span class="block text-xl font-normal text-gray-700 leading-tight">Buat Kriyamu</span>
      </h1>
    </div>
    <div class="space-y-4 px-4 py-6">
    <ProductCard
      v-for="(item, index) in products"
      :key="index"
      :title="item.title"
      :image="item.image"
      :minPrice="item.minPrice"
      :maxPrice="item.maxPrice"
    />
  </div>

  </section>
  <Footer />
</template>