// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  app: {
    head: {
      title: 'MusauBrian',
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'portfolio site for @musaubrian' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        {
          rel: 'icon',
          href: 'favicon.ico',
        },
      ],
    },
  },
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
});
