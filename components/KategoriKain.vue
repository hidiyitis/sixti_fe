<template>
  <div class="grid grid-cols-3 gap-2 mt-4 ml-2 mr-2">
    <div
      v-for="item in items"
      :key="item.label"
      class="relative w-full h-[70px] rounded-xl overflow-hidden shadow-md cursor-pointer"
      @click="handleClick(item)"
    >
      <!-- Background Image -->
      <img :src="item.img" alt="" class="w-full h-full object-cover" />
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

      <!-- Label -->
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <span class="text-white font-semibold text-sm text-center">{{ item.label }}</span>
      </div>
    </div>

    <!-- Dialog Dalam Pengembangan -->
    <UnderConstructionDialog :show="showDialog" @close="showDialog = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import UnderConstructionDialog from '@/components/UnderConstructionDialog.vue'

const router = useRouter()
const showDialog = ref(false)

const items = [
  {
    label: 'Batik',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNAIGxBbm_8CiKekcE2UqaVjaou_yI_xbrQ&s',
    to: '/batik'
  },
  {
    label: 'Tenun',
    img: 'https://asset.kompas.com/crops/eV3pVhsTUUlB_nffNUO84gOd4UQ=/34x11:951x622/750x500/data/photo/2022/02/28/621c6c100fc46.jpg',
    to: '/tenun'
  },
  {
    label: 'Songket',
    img: 'https://disbud.bulelengkab.go.id/uploads/konten/31_kain-songket-buleleng.jpg',
    to: '/songket'
  }
]

const handleClick = (item) => {
  if (item.label === 'Tenun' || item.label === 'Songket') {
    showDialog.value = true
  } else {
    router.push(item.to)
  }
}
</script>
