<script setup>
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import DetailCard from '@/components/DetailCard.vue'
import ProductCard from '@/components/ProductCard.vue'
// Daftar produk yang akan ditampilkan
const products = [
  {
    title: 'Paket Membatik',
    minPrice: 145000,
    maxPrice: 180000,
    image: '/images/paket-membatik.jpg',
  },
]

const batikData = {
  title: 'Batik Mega Mendung',
  origin: 'Cirebon, Jawa Barat',
  sejarah: 'Batik Mega Mendung berasal dari Cirebon, Jawa Barat, dan dikenal sejak abad ke-17. Motif ini berkembang di bawah pengaruh budaya Tionghoa, terutama dari para pedagang dan tokoh spiritual seperti Pangeran Panulun. Bentuk awan dalam motif ini diyakini merupakan adaptasi dari unsur dekoratif Tiongkok, kemudian disesuaikan dengan nilai-nilai lokal.',
  filosofi: 'Kesabaran dan keteduhan: seperti awan yang meneduhkan bumi sebelum hujan turun. Pengendalian emosi: gradasi warna menggambarkan proses pengendalian diri dan perasaan.',
  ciriKhas: 'Bentuk motif menyerupai awan bergelombang dengan ujung lancip dan simetris. Warna dominan: biru tua, biru muda, merah marun, dan abu-abu dengan gradasi bertingkat.',
  funFact: 'Motif ini sangat ikonik hingga menjadi identitas visual Kota Cirebon. Kamu bisa menemukan motif Mega Mendung pada dinding museum, busana resmi daerah, hingga dekorasi ruang publik.',
}

// Gambar batik dari internet
const image = 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/06/028577700_1443707050-Batik-Mega-Mendung-1024x768.webp'
const title = 'Detail'
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Bagian gambar dengan gradient overlay dan header -->
    <div class="relative h-[50vh] w-full overflow-hidden">
      <img
        :src="image"
        alt="Batik"
        class="object-cover w-full h-full"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-700/80 via-zinc-500/20 to-transparent"></div>
      <!-- Header tombol dan judul -->
      <div class="absolute top-6 left-0 w-full flex items-center justify-between px-4 z-10">
        <ButtonBack />
        <span class="text-white font-medium text-base drop-shadow text-center flex-1 -ml-8">{{ title }}</span>
        <ButtonShare />
      </div>
    </div>
    <!-- Konten detail -->
    <div class="px-4 py-6">
      <DetailCard :data="batikData" />
    </div>
    <div class="mb-4 text-left">
      <h1 class="ml-4 mt-4 mb-2">
        <span class="block text-xl font-normal text-gray-700 leading-tight">Buat Milikmu Sendiri</span>
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
</template>