<template>
  <div
    class="bg-neutral-900 rounded-2xl max-w-[340px] mx-auto mt-3 mb-3 shadow-sm px-4 py-3"
  >
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
      <p class="text-white text-xs font-medium leading-snug">
        Yuk, Masuk atau Daftar <br />
        Menikmati Fitur Kami!
      </p>
      <NuxtLink
        to="/login"
        class="mt-3 md:mt-0 md:ml-4 bg-white text-neutral-900 text-[0.8rem] font-medium rounded-lg px-3 py-[6px] shadow hover:bg-gray-100 transition"
      >
        Masuk Sekarang
      </NuxtLink>
    </div>
  </div>
</template>
