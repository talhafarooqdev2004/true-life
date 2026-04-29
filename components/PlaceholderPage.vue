<template>
  <main class="placeholder-page">
    <RedesignTopNav @go="goTo" />
    <section class="hero">
      <span class="eyebrow">Preview Route</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="actions">
        <NuxtLink class="primary" :to="primaryLink">{{ primaryLabel }}</NuxtLink>
        <NuxtLink class="secondary" to="/">Back to Home</NuxtLink>
      </div>
    </section>
    <RedesignFooter />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import RedesignFooter from '~/components/RedesignFooter.vue'
import RedesignTopNav from '~/components/RedesignTopNav.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: 'This route is included so the redesign can be explored end-to-end in the browser.',
  },
  primaryLink: {
    type: String,
    default: '/locations',
  },
  primaryLabel: {
    type: String,
    default: 'Open Find Churches',
  },
})

const { locale } = useI18n()
const router = useRouter()

function goTo(path) {
  const safe = path && String(path).startsWith('/') ? String(path) : '/'
  const loc = locale.value === 'en' ? safe : `/${locale.value}${safe}`
  router.push({ path: loc })
}
</script>

<style scoped>
.placeholder-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #eef1f5, #f8fafc);
}

.hero {
  width: min(980px, calc(100% - 32px));
  margin: 40px auto 0;
  padding: 48px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.eyebrow {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: #e8f3dd;
  color: #557b1f;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1 {
  margin: 18px 0 12px;
  color: #172036;
  font-size: clamp(32px, 5vw, 56px);
}

p {
  margin: 0;
  color: #526070;
  font-size: 18px;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.primary,
.secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
}

.primary {
  background: #7cb342;
  color: white;
}

.secondary {
  border: 1px solid #c4cbd3;
  color: #172036;
}
</style>
