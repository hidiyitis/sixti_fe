<template>
  <div class="banner-masuk">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 mb-4">
      <div class="text-white text-xs font-medium leading-snug">
        Yuk, Masuk atau Daftar <br />
        Menikmati Fitur Kami!
      </div>
      <button class="btn-masuk mt-3 md:mt-0 md:ml-4">Masuk Sekarang</button>
    </div>
  </div>
</template>

<style scoped>
.banner-masuk {
  background: #232323;
  border-radius: 16px;
  max-width: 340px;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.btn-masuk {
  background: #fff;
  color: #232323;
  font-size: 0.80rem;
  border-radius: 8px;
  padding: 0.25rem 0.7rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  border: none;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.btn-masuk:hover {
  background: #f3f3f3;
}
</style> 