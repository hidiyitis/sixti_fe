<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

// Komponen
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import DetailCard from '@/components/DetailCard.vue'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const batikData = ref(null)
const image = ref('')
const title = 'Detail'

const fetchKriyaByName = async () => {
  const name = route.params.title || 'Songket Palembang' // Default to 'Songket Palembang' if no title provided

  try {
    const res = await axios.get(
      `https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/kriyas?title=${encodeURIComponent(name)}`
    )

    const data = res.data.data?.[0]
    if (!data) {
      console.warn('Data tidak ditemukan untuk nama:', name)
      return
    }

    batikData.value = {
      title: data.title,
      origin: data.from,
      sejarah: data.history,
      filosofi: data.philosophy,
      ciriKhas: data.unique,
      funFact: data.fun_fact,
    }

    image.value = data.photos?.[0]?.url || 'https://via.placeholder.com/300x200'
  } catch (error) {
    console.error('Gagal fetch data kriya:', error)
  }
}

onMounted(() => {
  fetchKriyaByName()
})
</script>


<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Header Gambar -->
    <div class="relative h-[50vh] w-full overflow-hidden">
      <img :src="image" alt="Batik" class="object-cover w-full h-full" />
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-700/80 via-zinc-500/20 to-transparent"></div>
      <div class="absolute top-6 left-0 w-full flex items-center justify-between px-4 z-10">
        <ButtonBack />
        <span class="text-white font-medium text-base drop-shadow text-center flex-1 -ml-8">{{ title }}</span>
        <ButtonShare />
      </div>
    </div>

    <!-- Detail Data -->
    <div class="px-4 py-6">
      <DetailCard v-if="batikData" :data="batikData" />
      <p v-else class="text-center text-sm text-gray-400">Memuat data...</p>
    </div>

    <!-- Produk (Opsional) -->
    <div class="mb-4 text-left">
      <h1 class="ml-4 mt-4 mb-2 text-xl text-gray-700 leading-tight">Buat Milikmu Sendiri</h1>
    </div>
    <!-- Uncomment if needed
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
    -->
  </section>
</template>
