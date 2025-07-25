<script setup>
import ButtonBack from '@/components/ButtonBack.vue'
import BatikCard from '@/components/BatikCard.vue'
import axios from 'axios'

// State untuk data batik (dari API)
const batikList = ref([])

// Fetch data dari endpoint API
const fetchBatikList = async () => {
  try {
    const response = await axios.get(
      'https://ragam-backend-836115399739.asia-southeast2.run.app/api/v1/kriyas?limit=6'
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

// Panggil saat mounted
onMounted(() => {
  fetchBatikList()
})

</script>

<template>
  <section class="min-h-screen px-4 py-5 max-w-md mx-auto bg-white">
    <!-- Header -->
    <div class="mb-4">
      <div class="flex items-center justify-between">
        <ButtonBack />
        <div class="w-10" /> <!-- Spacer agar tombol back tetap rata -->
      </div>
      <h1 class="text-base font-medium text-gray-800 text-center mt-2">Batik</h1>
    </div>

    <!-- Grid Batik 2 kolom -->
    <div class="grid grid-cols-2 gap-4 justify-items-center">
      <BatikCard
        v-for="(batik, i) in batikList"
        :key="i"
        :nama="batik.nama"
        :lokasi="batik.lokasi"
        :image="batik.image"
      />
    </div>
  </section>
</template>
