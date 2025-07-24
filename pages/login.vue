<script setup>
import GoogleLogin from '@/components/GoogleLogin.vue'
</script>

<template>
  <section class="min-h-screen max-w-md mx-auto flex flex-col items-center justify-center bg-white p-6">
    <!-- Gambar Depan -->
    <div class="w-full mb-6">
      <img
        src="assets/LOGIN.svg"
        alt="Ragam Login"
        class="w-full h-auto rounded-lg"
      />
    </div>

    <!-- Judul dan Deskripsi -->
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Ragam</h1>
      <p class="text-sm text-gray-600 mt-2">
        Akses penuh ke fitur hanya dengan satu akun.
      </p>
    </div>

    <!-- Tombol Login -->
    <GoogleLogin />
  </section>
</template>