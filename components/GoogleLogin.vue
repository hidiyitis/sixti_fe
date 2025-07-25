<script setup>
import { signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

// Ambil plugin Firebase dari Nuxt
const { $firebaseAuth, $googleProvider } = useNuxtApp()
const router = useRouter()

// Fungsi login Google
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup($firebaseAuth, $googleProvider)
    const user = result.user
    console.log('Login Berhasil:', user)
    console.log('Login Berhasil:', user.displayName, user.email)

    // Simpan user ke localStorage
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/profile')
  } catch (error) {
    console.error('Login Gagal:', error)
  }
}
</script>

<template>
  <button
    class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
    @click="handleGoogleLogin"
  >
    Login dengan Google
  </button>
</template>
