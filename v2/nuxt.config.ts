// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@nuxtjs/fontaine"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "MusauBrian",
      meta: [
        { charset: "utf-8" },
        { name: "description", content: "portfolio site for @musaubrian" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [
        {
          rel: "icon",
          href: "favicon.ico",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"',
        },
      ],
    },
  },
});
