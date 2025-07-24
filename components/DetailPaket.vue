<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      harga: '',
      deskripsi: '',
      motif: [],
      isiPaket: [],
      shopeeUrl: '',
      tokopediaUrl: '',
    }),
  },
})

const beliShopee = () => {
  window.open(data.shopeeUrl || 'https://shopee.co.id', '_blank')
}

const beliTokopedia = () => {
  window.open(data.tokopediaUrl || 'https://tokopedia.com', '_blank')
}
</script>

<template>
  <section class="max-w-md mx-auto px-4 pt-4 pb-8">
    <div class="bg-white rounded-2xl shadow-md p-5 space-y-6">
      <!-- Judul dan Harga -->
      <div>
        <h1 class="text-xl font-bold text-gray-900">{{ data.title }}</h1>
        <p class="text-sm text-gray-700 mt-1">{{ data.harga }}</p>
      </div>

      <!-- Deskripsi -->
      <p class="text-sm text-gray-600 leading-relaxed">
        {{ data.deskripsi }}
      </p>

      <!-- Motif -->
      <div v-if="data.motif && data.motif.length">
        <h2 class="font-semibold text-gray-800 text-sm mb-2">Motif Yang Bisa Dibuat</h2>
        <div class="grid grid-cols-2 gap-2">
          <span
            v-for="(item, index) in data.motif"
            :key="index"
            class="text-sm px-3 py-1 rounded-full border text-gray-700 text-center"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <!-- Isi Paket -->
      <div v-if="data.isiPaket && data.isiPaket.length">
        <h2 class="font-semibold text-gray-800 text-sm mb-2">Isi Paket Kit</h2>
        <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(item, i) in data.isiPaket" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Tombol Marketplace -->
      <div class="flex gap-2 pt-2">
        <button @click="beliShopee" class="flex-1 flex items-center justify-center gap-2 text-sm text-gray-800 font-semibold bg-[#f8f8f8] py-2 rounded-xl hover:bg-gray-200">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png" alt="shopee" class="h-5 w-5" />
          Beli Di Shopee
        </button>
        <button @click="beliTokopedia" class="flex-1 flex items-center justify-center gap-2 text-sm text-gray-800 font-semibold bg-[#f8f8f8] py-2 rounded-xl hover:bg-gray-200">
          <img src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/berita-tokopedia-info-berita-terbaru-tokopedia-6.png" alt="tokopedia" class="h-5 w-5" />
          Beli Di Tokopedia
        </button>
      </div>
    </div>
  </section>
</template>
