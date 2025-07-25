<template>
  <div class="min-h-screen bg-[#FAFAFA] text-gray-900 max-w-md mx-auto shadow-md font-archivo">
    <slot />
  </div>
</template>

<style>
/* ✅ 1. Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@400;500;600;700&display=swap');

/* ✅ 2. Terapkan font ke seluruh halaman */
body {
  background: #FAFAFA !important;
  font-family: 'Archivo Expanded', sans-serif;
}
</style>
