<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import DetailPaket from '@/components/DetailPaket.vue'

const route = useRoute()

const title = 'Kriya Kit'
const image = ref('')
const batikData = ref(null)
const loading = ref(true)

const fetchPaket = async () => {
  try {
    // Ambil ID dari params atau fallback ke id=1
    const id = route.params.id || 1

    const res = await axios.get(`https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/products/${id}`)
    const data = res.data.data

    console.log('📦 Data produk dari API:', data)

    // ✅ Map ke struktur DetailPaket.vue
    batikData.value = {
      title: data.title,
      harga: `Rp${data.price.toLocaleString('id-ID')}`, // format jadi Rupiah
      deskripsi: data.description,
      motif: data.kriyas?.map(k => k.title) || [], // ambil semua title kriya dari array
      isiPaket: data.package_kit ? data.package_kit.split('\n') : [], // pisahkan teks jadi array
      shopeeUrl: data.shopeeUrl || 'https://shopee.co.id',
      tokopediaUrl: data.tokopediaUrl || 'https://tokopedia.com',
    }

    // ✅ Set gambar dari array photos
    image.value = data.photos?.[0]?.url || 'https://via.placeholder.com/400x300'
  } catch (err) {
    console.error('❌ Gagal fetch produk:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPaket()
})
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- 🔄 Loading state -->
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <p class="text-gray-500 text-sm animate-pulse">Memuat data paket...</p>
    </div>

    <template v-else>
      <!-- Gambar & Header -->
      <div class="relative h-[50vh] w-full overflow-hidden">
        <img :src="image" alt="Batik" class="object-cover w-full h-full" />
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-700/80 via-zinc-500/20 to-transparent"></div>
        <div class="absolute top-6 left-0 w-full flex items-center justify-between px-4 z-10">
          <ButtonBack />
          <span class="text-white font-medium text-base drop-shadow text-center flex-1 -ml-8">{{ title }}</span>
          <ButtonShare />
        </div>
      </div>

      <!-- Konten Detail Paket -->
      <div class="relative z-10 -mt-16 px-4">
        <DetailPaket v-if="batikData" :data="batikData" />
      </div>
    </template>
  </section>
</template>
