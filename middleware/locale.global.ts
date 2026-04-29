const SUPPORTED_LOCALES = ['en', 'es']

export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n as any
  if (!i18n) {
    return
  }

  const firstSegment = String(to.path || '/').split('/').filter(Boolean)[0] || 'en'
  const nextLocale = SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : 'en'

  if (i18n.locale.value !== nextLocale) {
    i18n.locale.value = nextLocale
  }
})
