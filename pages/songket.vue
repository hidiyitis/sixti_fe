<script setup>
import ButtonBack from '@/components/ButtonBack.vue'
import BatikCard from '@/components/BatikCard.vue'

const batikList = [
  {
    nama: 'Batik Megamendung',
    lokasi: 'DIY Yogyakarta',
    image: '/images/megamendung.jpg',
  },
  {
    nama: 'Batik Sido Asih',
    lokasi: 'DIY Yogyakarta',
    image: '/images/sidoasih.jpg',
  },
  {
    nama: 'Batik Sogan',
    lokasi: 'DIY Yogyakarta',
    image: '/images/sogan.jpg',
  },
  {
    nama: 'Batik Kawung',
    lokasi: 'DIY Yogyakarta',
    image: '/images/kawung.jpg',
  },
  {
    nama: 'Batik Parang',
    lokasi: 'DIY Yogyakarta',
    image: '/images/parang.jpg',
  },
  {
    nama: 'Batik Sekar Jagad',
    lokasi: 'DIY Yogyakarta',
    image: '/images/sekarjagad.jpg',
  },
]
</script>

<template>
  <section class="min-h-screen px-4 py-5 max-w-md mx-auto bg-white">
    <!-- Header -->
    <div class="mb-4">
      <div class="flex items-center justify-between">
        <ButtonBack />
        <div class="w-10" /> <!-- Spacer agar tombol back tetap rata -->
      </div>
      <h1 class="text-base font-medium text-gray-800 text-center mt-2">Songket</h1>
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
