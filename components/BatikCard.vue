<template>
  <div class="w-full max-w-[160px] rounded-lg overflow-hidden border border-gray-200 shadow bg-white">
    <div class="relative">
      <img
        :src="image"
        alt="Batik Image"
        class="w-full h-28 object-cover"
      />
      <span class="absolute top-1.5 right-1.5 bg-neutral-700 text-white text-[10px] px-2 py-[2px] rounded-full shadow">
        {{ lokasi }}
      </span>
    </div>
    <div class="p-2 space-y-2">
      <h2 class="text-sm font-semibold text-gray-800 leading-tight line-clamp-2 text-center">
        {{ nama }}
      </h2>
      <!-- Tombol tidak full-width, hanya setengah dan kiri -->
      <button
        class="flex items-center gap-1 px-3 py-1 bg-neutral-800 text-white text-xs rounded-md shadow hover:bg-neutral-700 transition w-1/2"
        @click="goToDetail(id)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-white" viewBox="0 0 24 24">
          <path d="M12 4.5c-7.333 0-11 7.5-11 7.5s3.667 7.5 11 7.5 11-7.5 11-7.5-3.667-7.5-11-7.5zm0 12c-2.481 0-4.5-2.019-4.5-4.5S9.519 7.5 12 7.5 16.5 9.519 16.5 12 14.481 16.5 12 16.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5S10.621 14.5 12 14.5 14.5 13.379 14.5 12 13.379 9.5 12 9.5z" />
        </svg>
        Detail
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  id: Number,
  nama: String,
  lokasi: String,
  image: String,
})

const router = useRouter()
const goToDetail = (id) => {
  router.push(`detail/${id}`)
}
</script>