<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

// Components
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import DetailCard from '@/components/DetailCard.vue'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const batikData = ref(null)
const image = ref('')
const title = 'Detail'
const isLoading = ref(true)
const error = ref(null)

const fetchKriyaById = async () => {
  const id = route.params.id
  
  if (!id) {
    error.value = 'No ID provided in URL'
    isLoading.value = false
    return
  }

  try {
    const res = await axios.get(
      `https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/kriyas/${id}`
    )

    const data = res.data.data
    if (!data) {
      throw new Error('Data not found')
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
  } catch (err) {
    console.error('Failed to fetch kriya data:', err)
    error.value = err.response?.data?.message || err.message || 'Failed to load data'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchKriyaById()
})
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Header Image with Loading State -->
    <div class="relative h-[50vh] w-full overflow-hidden">
      <template v-if="!isLoading && image">
        <img :src="image" alt="Batik" class="object-cover w-full h-full" />
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-700/80 via-zinc-500/20 to-transparent"></div>
      </template>
      <div v-else class="w-full h-full bg-gray-200 animate-pulse"></div>
      
      <div class="absolute top-6 left-0 w-full flex items-center justify-between px-4 z-10">
        <ButtonBack />
        <span class="text-white font-medium text-base drop-shadow text-center flex-1 -ml-8">{{ title }}</span>
        <ButtonShare />
      </div>
    </div>

    <!-- Error State -->
    <div v-if="error" class="p-4 text-center">
      <p class="text-red-500">{{ error }}</p>
      <button 
        @click="fetchKriyaById"
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>

    <!-- Loading State -->
    <div v-else-if="isLoading" class="p-4 space-y-4">
      <div class="space-y-2 animate-pulse">
        <div class="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
      </div>
    </div>

    <!-- Content State -->
    <template v-else>
      <!-- Detail Data -->
      <div class="px-4 py-6">
        <DetailCard v-if="batikData" :data="batikData" />
        <p v-else class="text-center text-sm text-gray-400">No data available</p>
      </div>

      <!-- Products Section -->
      <div class="mb-4 text-left">
        <h1 class="ml-4 mt-4 mb-2 text-xl text-gray-700 leading-tight">Buat Milikmu Sendiri</h1>
      </div>
      <div class="space-y-4 px-4 py-6">
        <ProductCard
          v-for="(item, index) in products"
          :key="index"
          :id="item.id"
          :title="item.title"
          :image="item.image"
          :minPrice="item.minPrice"
          :maxPrice="item.maxPrice"
        />
      </div>
     
    </template>
  </section>
</template>