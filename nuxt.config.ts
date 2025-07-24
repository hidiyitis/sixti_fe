/// <reference types="nuxt/schema" />

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Mobile App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
})