import { withDocus } from '@docus/app'

export default withDocus({
  rootDir: __dirname,
  buildModules: ['@nuxt/typescript-build', '@docus/twitter', '@docus/github'],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    optimizeDeps: {
      exclude: ['vue-demi', 'scule', '@vueuse/integrations', 'ohmyfetch'],
      include: ['defu', 'theme-colors', 'cookie', 'js-cookie', 'clipboard', 'property-information'],
    },
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Layer0 Traditional Template Guide' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@rishi_raj_jain_' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://image.nuxtjs.org/social.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://image.nuxtjs.org/social.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt/Image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://image.nuxtjs.org/social.png',
      },
    ],
  },
  build: {
    transpile: ['ohmyfetch'],
    loaders: {
      imgUrl: { limit: 0 },
    },
  },
})
