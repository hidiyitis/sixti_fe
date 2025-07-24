import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJNCr1Y0Jn7ccl-i0LuJtXX2dIpDFubY8",
  authDomain: "ragam-app.firebaseapp.com",
  projectId: "ragam-app",
  storageBucket: "ragam-app.appspot.com",
  messagingSenderId: "733403533210",
  appId: "1:733403533210:web:43a92ce0621a0e2159b423",
  measurementId: "G-VHN53WBE8Z"
}

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseAuth: auth,
      googleProvider: provider
    }
  }
})