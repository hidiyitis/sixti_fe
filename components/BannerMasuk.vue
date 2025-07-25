<template>
  <div class="relative rounded-2xl max-w-[390px] mx-auto mt-6 mb-3 shadow-sm px-5 py-4 flex items-center justify-between bg-gradient-to-b from-neutral-500 to-neutral-600">
    <!-- SVG Dekorasi di atas -->
    <img 
      src="/assets/bgBanner.svg" 
      alt="Banner SVG" 
      class="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-30 pointer-events-none"
    />

    <!-- Konten (teks & tombol) -->
    <div class="relative flex items-center justify-between w-full">
      <!-- Teks di kiri -->
      <p class="text-white text-sm font-medium leading-snug max-w-[65%]">
        Yuk, Masuk Atau Daftar Untuk <br /> Menikmati Semua Fitur Kami!
      </p>

      <!-- Tombol di kanan -->
      <NuxtLink
        to="/login"
        class="bg-white text-neutral-900 text-[0.85rem] font-medium rounded-lg px-4 py-[6px] shadow hover:bg-gray-100 transition whitespace-nowrap"
      >
        Masuk Sekarang
      </NuxtLink>
    </div>
  </div>
</template>
