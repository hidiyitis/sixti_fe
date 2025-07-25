<template>
  <div class="flex bg-gray-100 p-1 rounded-2xl w-fit mx-auto">
    <!-- Tombol Profile -->
    <button
      @click="setTab('profile')"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition',
        modelValue === 'profile'
          ? 'bg-gradient-to-b from-zinc-700 to-zinc-900 text-white'
          : 'text-gray-400'
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        :class="{ 'fill-white': modelValue === 'profile', 'fill-gray-400': modelValue !== 'profile' }"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
          1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 
          4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
      Profile
    </button>

    <!-- Tombol Gallery -->
    <button
      @click="setTab('gallery')"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition',
        modelValue === 'gallery'
          ? 'bg-gradient-to-b from-zinc-700 to-zinc-900 text-white'
          : 'text-gray-400'
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        :class="{ 'fill-white': modelValue === 'gallery', 'fill-gray-400': modelValue !== 'gallery' }"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 
          11h7v7h-7v-7z"
        />
      </svg>
      Gallery
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: 'profile',
  },
})

const emit = defineEmits(['update:modelValue'])

const setTab = (tab) => {
  emit('update:modelValue', tab)
}
</script>
