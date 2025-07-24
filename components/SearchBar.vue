<script setup>
import { Search } from 'lucide-vue-next'
</script>

<template>
  <div class="w-full bg-gray-100 rounded-2xl flex items-center px-4 py-2 mb-4 ml-2">
    <Search class="w-6 h-6 text-gray-400 mr-2" />
    <input
      type="text"
      class="bg-transparent border-none outline-none text-gray-500 placeholder-gray-400 text-base w-full"
      placeholder="Cari atau scan batik dengan cepat"
    />
  </div>
</template> 