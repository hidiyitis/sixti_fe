<template>
  <div class="space-y-4">
    <!-- Menu utama -->
    <div class="bg-white rounded-xl border overflow-hidden">
      <button
        v-for="item in menuList"
        :key="item.label"
        class="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition"
        @click="item.onClick"
      >
        <component :is="item.icon" class="w-5 h-5 text-gray-800" />
        <span class="text-sm font-semibold text-gray-800">{{ item.label }}</span>
      </button>
    </div>

    <!-- Tombol keluar -->
    <div class="bg-white rounded-xl border overflow-hidden">
      <button
        class="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition"
        @click="onLogout"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-500" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16 13v-2H7V8l-5 4 5 4v-3h9zM20 3H10v2h10v14H10v2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
        <span class="text-sm font-semibold text-red-600">Keluar</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const menuList = [
  {
    label: 'Personal',
    icon: {
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          class: 'w-5 h-5 fill-current',
          innerHTML: `<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>`
        })
      }
    },
    onClick: () => {
      console.log('Navigasi ke personal')
    }
  },
  {
    label: 'Pengaturan',
    icon: {
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          class: 'w-5 h-5 fill-current',
          innerHTML: `<path d="M19.14 12.936a7.962 7.962 0 000-1.872l2.036-1.58a.5.5 0 00.11-.628l-1.928-3.34a.5.5 0 00-.602-.22l-2.396.96a7.987 7.987 0 00-1.62-.936l-.36-2.52A.5.5 0 0014 2h-4a.5.5 0 00-.496.424l-.36 2.52a7.987 7.987 0 00-1.62.936l-2.396-.96a.5.5 0 00-.602.22l-1.928 3.34a.5.5 0 00.11.628L4.86 11.064a7.962 7.962 0 000 1.872l-2.036 1.58a.5.5 0 00-.11.628l1.928 3.34a.5.5 0 00.602.22l2.396-.96c.5.396 1.05.726 1.62.936l.36 2.52A.5.5 0 0010 22h4a.5.5 0 00.496-.424l.36-2.52c.57-.21 1.12-.54 1.62-.936l2.396.96a.5.5 0 00.602-.22l1.928-3.34a.5.5 0 00-.11-.628l-2.036-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>`
        })
      }
    },
    onClick: () => {
      console.log('Navigasi ke pengaturan')
    }
  },
  {
    label: 'Bantuan',
    icon: {
      render() {
        return h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          class: 'w-5 h-5 fill-current',
          innerHTML: `<path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.63 3.55 1.69 4.9L2 22l5.17-1.58A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92c-.36.36-.57.86-.57 1.41V14h-2v-.5c0-.83.34-1.63.93-2.22l1.24-1.26a1.49 1.49 0 00-2.12-2.1 1.49 1.49 0 00-.44 1.06H8.1c0-1.38 1.12-2.5 2.5-2.5.66 0 1.3.26 1.77.73.96.98.96 2.56 0 3.54z"/>`
        })
      }
    },
    onClick: () => {
      console.log('Navigasi ke bantuan')
    }
  }
]

const onLogout = () => {
  console.log('Keluar dari akun...')
}
</script>
