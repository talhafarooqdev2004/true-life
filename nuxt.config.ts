export default defineNuxtConfig({
  compatibilityDate: '2024-10-14',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      appDashboardUrl: 'https://mytruelife.org',
    },
  },
})
