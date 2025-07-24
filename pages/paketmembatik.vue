<script setup>
import ButtonBack from '@/components/ButtonBack.vue'
import ButtonShare from '@/components/ButtonShare.vue'
import DetailPaket from '@/components/DetailPaket.vue'

const image = 'https://bcaf.telkomuniversity.ac.id/wp-content/uploads/2024/06/028577700_1443707050-Batik-Mega-Mendung-1024x768.webp'
const title = 'Kriya Kit'

// Data array berisi beberapa paket
const batikDataList = [
  {
    title: 'Paket Membatik',
    harga: 'Rp145.000',
    deskripsi: 'Pelajari Keindahan Warisan Budaya Indonesia Melalui Pengalaman Membatik Langsung Berbagai Motif Klasik Dari Berbagai Daerah.',
    motif: [
      'Batik Megamendung', 'Batik Sido Asih',
      'Batik Sogan', 'Batik Kawung',
      'Batik Parang', 'Batik Sekar Jagad'
    ],
    isiPaket: [
      'Mini Loom (Alat Tenun Kecil)',
      'Benang Warna Alami (Katun atau Tenun Lokal)',
      'Jarum Kayu',
      'Panduan Langkah Demi Langkah',
      'Kartu Cerita Budaya Tenun Lombok'
    ],
    shopeeUrl: 'https://shopee.co.id/example',
    tokopediaUrl: 'https://tokopedia.com/example'
  },
  // Kamu bisa tambahkan item lain di sini
]

// Ambil satu data (misal pertama)
const batikData = batikDataList[0]
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto bg-white p-0">
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

    <!-- Konten yang naik ke gambar -->
    <div class="relative z-10 -mt-16 px-4">
      <DetailPaket :data="batikData" />
    </div>
  </section>
</template>
