<script setup>
import { ref, onMounted } from 'vue'
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'

const videoRef = ref(null)
const loading = ref(false)
const result = ref(null)

const startCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (videoRef.value) {
      videoRef.value.srcObject = stream
    }
  } catch (error) {
    console.error('Gagal akses kamera:', error)
    alert('Tidak dapat mengakses kamera.')
  }
}

// Tangkap gambar dan convert ke base64 (data:image/jpeg;base64,...)
const captureBase64 = () => {
  const video = videoRef.value
  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL('image/jpeg') // ← hasil base64 lengkap
}

// Kirim base64 ke Roboflow
const checkBatik = async () => {
  loading.value = true
  result.value = null

  try {
    const base64 = captureBase64()
    const base64BodyOnly = base64.split(',')[1] // Hapus prefix data:image/jpeg;base64,

    const axios = (await import('axios')).default
    const { data } = await axios({
      method: 'POST',
      url: 'https://serverless.roboflow.com/motif-batik-idv6s/17',
      params: {
        api_key: 'HycjmV1sVakbknQr5SWu',
      },
      data: base64BodyOnly,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    result.value = data
    console.log('Hasil deteksi:', data)
  } catch (err) {
    console.error('Error:', err)
    alert('Gagal mendeteksi batik.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  startCamera()
})
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
    <!-- Header dan Kamera -->
    <div class="relative h-[50vh] w-full overflow-hidden">
      <!-- Header -->
      <div class="absolute top-6 left-0 w-full flex items-center justify-between px-4 z-10">
        <ButtonBack />
        <span class="text-gray-800 font-medium text-base text-center flex-1 -ml-8">Cek Batik</span>
        <ButtonShare />
      </div>

      <!-- Kamera -->
      <div class="relative h-[50vh] w-full bg-black">
        <video
          ref="videoRef"
          class="object-cover w-full h-full"
          autoplay
          muted
          playsinline
        ></video>
      </div>
    </div>

    <!-- Tombol & Hasil -->
    <div class="p-4 space-y-6 mt-4 relative z-10">
      <button
        class="w-full py-2.5 text-white font-semibold text-sm rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 shadow hover:brightness-110 transition"
        @click="checkBatik"
        :disabled="loading"
      >
        Cek Batik
      </button>

      <div v-if="loading" class="flex justify-center py-6">
        <div class="h-6 w-6 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
      </div>

      <!-- Hasil Deteksi -->
      <div v-if="result && result.predictions.length > 0" class="flex items-center justify-between bg-white rounded-xl shadow-sm p-3 pr-4">
        <div class="flex items-center gap-3">
          <span class="text-base font-semibold text-gray-800">{{ result.predictions[0].class }}</span>
          <span class="text-sm text-green-500 font-bold">{{ (result.predictions[0].confidence * 100).toFixed(1) }}%</span>
        </div>
        <button class="bg-gray-100 hover:bg-gray-200 transition rounded-lg p-2 text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Tidak Terdeteksi -->
      <div v-else-if="result && result.predictions.length === 0" class="text-center">
        <img src="assets/TidakTerdeteksi.svg" alt="Tidak Terdeteksi" class="w-24 h-24 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-gray-700">Mohon Maaf</h3>
        <p class="text-sm text-gray-500">Database masih dalam tahap pengembangan</p>
      </div>
    </div>
  </section>
</template>