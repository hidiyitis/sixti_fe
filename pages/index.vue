<script setup>
import { ref, onMounted } from 'vue'

// Import komponen
import SearchBar from '@/components/SearchBar.vue'
import KategoriKain from '@/components/KategoriKain.vue'
import BannerMasuk from '@/components/BannerMasuk.vue'
import BatikCard from '@/components/BatikCard.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'

// ✅ State data
const batikList = ref([])
const products = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

// ✅ Fetch data batik (client side only)
const fetchBatikList = async () => {
  try {
    const response = await $fetch('https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/kriyas?limit=2')
    batikList.value = response.data.map((item) => ({
      id: item.id,
      nama: item.title,
      lokasi: item.from,
      image: item.photos?.[0]?.url || 'https://via.placeholder.com/150'
    }))
  } catch (error) {
    console.error('❌ Gagal fetch data batik:', error)
    errorMessage.value = 'Gagal memuat data batik.'
  }
}

// ✅ Fetch data produk
const fetchProducts = async () => {
  try {
    const response = await $fetch('https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/products?limit=3')
    products.value = response.data.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.photos?.[0]?.url || 'https://via.placeholder.com/150',
      price: item.price,
    }))
  } catch (error) {
    console.error('❌ Gagal fetch produk:', error)
    errorMessage.value = 'Gagal memuat produk.'
  }
}

// ✅ Jalankan hanya di client
onMounted(async () => {
  await fetchBatikList()
  await fetchProducts()
  isLoading.value = false
})
</script>

<template>
  <section class="min-h-screen bg-white px-4 py-4 max-w-md mx-auto">
    <!-- Header -->
    <div class="mb-4 text-left">
      <h1 class="ml-2 mt-10">
        <span class="block text-2xl font-normal text-gray-700 leading-tight">Selamat Datang, </span>
        <span class="block text-2xl font-bold text-gray-800 mt-1 flex items-center">
          Kenali Kriya Indonesia!<span class="ml-1">👋</span>
        </span>
      </h1>
    </div>

    <BannerMasuk />
    <SearchBar />
    <KategoriKain />

    <!-- Loading -->
    <div v-if="isLoading" class="text-center py-6">
      <div class="animate-spin h-6 w-6 border-2 border-gray-400 border-t-transparent rounded-full mx-auto"></div>
      <p class="text-sm text-gray-500 mt-2">Memuat data...</p>
    </div>

    <!-- Error -->
    <div v-else-if="errorMessage" class="text-center text-red-500 text-sm">
      {{ errorMessage }}
    </div>

    <!-- Data Batik -->
    <div v-else>
      <div class="mb-4 text-left">
        <h1 class="ml-2 mt-10">
          <span class="block text-xl font-normal text-gray-700 leading-tight">Warsa Yang Kian Langka</span>
        </h1>
      </div>

      <div class="grid grid-cols-2 gap-1 justify-items-center">
        <BatikCard
          v-for="(batik, i) in batikList"
          :id="batik.id"
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
          :id="item.id"
          :key="index"
          :title="item.title"
          :image="item.image"
          :price="item.price"
        />
      </div>
    </div>
  </section>

  <Footer />
</template>