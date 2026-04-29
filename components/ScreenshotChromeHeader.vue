<template>
  <header class="w-full border-b border-[#2b3446] bg-[#121b2b]">
    <div class="mx-auto flex h-[117px] max-w-[394px] items-center justify-between px-[33px] md:max-w-[1220px] md:px-[40px]">
      <button type="button" aria-label="Go to homepage" class="shrink-0" @click="goTo('/')">
        <div class="flex items-end leading-none">
          <span class="text-[41px] font-[800] tracking-[-1.2px] text-[#ff2217] md:text-[38px]">true</span>
          <span class="text-[41px] font-[800] tracking-[-1.2px] text-[#ffffff] md:text-[38px]">life</span>
          <span class="mb-[3px] ml-[3px] text-[20px] font-[700] tracking-[-0.4px] text-[#8f95a1] md:text-[18px]">.org</span>
        </div>
      </button>

      <button type="button" aria-label="Open menu" class="flex h-[34px] w-[34px] items-center justify-center text-[#ffffff]">
        <svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6.5H33" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" />
          <path d="M6 15H33" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" />
          <path d="M6 23.5H33" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from '#app'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()

const localePrefix = computed(() => (locale.value === 'en' ? '' : `/${locale.value}`))

function goTo(path) {
  const safePath = path && String(path).startsWith('/') ? String(path) : '/'
  router.push({ path: `${localePrefix.value}${safePath}` || '/' })
}
</script>
