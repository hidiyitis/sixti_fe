<template>
  <div class="kategori-kain flex flex-row gap-2 justify-between items-center mt-4 mb-4 ml-2">
    <router-link
      v-for="item in items"
      :key="item.label"
      :to="item.to"
      class="kain-card relative overflow-hidden"
      style="text-decoration: none;"
    >
      <img :src="item.img" :alt="item.label" class="kain-img" />
      <div class="kain-overlay"></div>
      <div class="kain-label">{{ item.label }}</div>
    </router-link>
  </div>
</template>

<script setup>
const items = [
  { label: 'Batik', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNAIGxBbm_8CiKekcE2UqaVjaou_yI_xbrQ&s', to: '/batik' },
  { label: 'Tenun', img: 'https://asset.kompas.com/crops/eV3pVhsTUUlB_nffNUO84gOd4UQ=/34x11:951x622/750x500/data/photo/2022/02/28/621c6c100fc46.jpg', to: '/tenun' },
  { label: 'Songket', img: 'https://disbud.bulelengkab.go.id/uploads/konten/31_kain-songket-buleleng.jpg', to: '/songket' },
]
</script>

<style scoped>
.kategori-kain {
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
}
.kain-card {
  flex: 1 1 0;
  max-width: 100px;
  min-width: 0;
  height: 48px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.15s;
}
.kain-card:active, .kain-card:focus {
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
}
.kain-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}
.kain-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg,rgba(0,0,0,0.45) 60%,rgba(0,0,0,0.25) 100%);
  border-radius: 12px;
}
.kain-label {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  z-index: 2;
  text-align: center;
}
@media (min-width: 600px) {
  .kain-card {
    max-width: 120px;
    height: 60px;
    border-radius: 18px;
  }
  .kain-img, .kain-overlay {
    border-radius: 18px;
  }
  .kain-label {
    font-size: 1.15rem;
  }
}
</style> 