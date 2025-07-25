<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Import komponen
import SearchBar from '@/components/SearchBar.vue'
import KategoriKain from '@/components/KategoriKain.vue'
import BannerMasuk from '@/components/BannerMasuk.vue'
import BatikCard from '@/components/BatikCard.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'

// State untuk data batik (dari API)
const batikList = ref([])
const products = ref([])

// Fetch data dari endpoint API
const fetchBatikList = async () => {
  try {
    const response = await axios.get(
      'https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/kriyas?limit=2',
    )

    const data = response.data.data

    // Mapping agar sesuai dengan kebutuhan <BatikCard />
    batikList.value = data.map((item) => ({
      nama: item.title,
      lokasi: item.from,
      image: item.photos?.[0]?.url || 'https://via.placeholder.com/150'
    }))
  } catch (error) {
    console.error('Gagal fetch data batik:', error)
  }
}

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      'https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/products?limit=3',
    )
    const data = response.data.data
    // Mapping produk untuk digunakan di komponen ProductCard
    products.value = data.map((item) => ({
      title: item.title,
      image: item.photos?.[0]?.url || 'https://via.placeholder.com/150',
      price: item.price,
    }))
  
  } catch (error) {
    console.error('Gagal fetch produk:', error)
    return []
  }
}

// Panggil saat mounted
onMounted(() => {
  fetchBatikList(),
  fetchProducts()
})


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
      :price="item.price"
    />
  </div>

  </section>
  <Footer />
</template>