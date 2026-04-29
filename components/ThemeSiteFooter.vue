<template>
  <footer class="bg-[#121b2b] text-[#ffffff]">
    <div class="mx-auto max-w-[394px] px-[34px] pb-[34px] pt-[30px] md:max-w-[1220px] md:px-[42px] md:pb-[0px] md:pt-[62px]">
      <div class="md:grid md:grid-cols-[1.16fr_1fr_1fr_0.72fr] md:gap-[38px]">
        <div>
          <img :src="logoIndex" alt="truelife.org" class="block w-[149px]" />
          <p class="mt-[22px] max-w-[324px] text-[18px] leading-[1.58] text-[#9da5b6] md:mt-[24px] md:max-w-[280px] md:text-[16px]">
            TrueLife.org provides free video answers to life's hardest questions, grounded in the truth of Jesus Christ.
          </p>
          <div class="mt-[24px] flex gap-[16px]">
            <a
              v-for="item in socialLinks"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener"
              :aria-label="item.label"
              class="flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#293246] text-[#ffffff] transition hover:bg-[#33415a] md:h-[44px] md:w-[44px]"
              v-html="item.icon"
            ></a>
          </div>
        </div>

        <div class="mt-[44px] md:mt-[0px]">
          <h3 class="flex items-center gap-[11px] text-[24px] font-[800] leading-none text-[#ffffff] md:text-[17px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#85bd43] md:h-[17px] md:w-[17px]">
              <path d="M21 10C21 17 12 22 12 22C12 22 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Churches Near
          </h3>
          <p class="mt-[30px] max-w-[326px] text-[18px] leading-[1.62] text-[#9da5b6] md:mt-[22px] md:max-w-[245px] md:text-[16px]">
            Each church we list believes the promises with the message of Jesus. They'd love to be a part of your journey with God.
          </p>
          <div class="mt-[28px] rounded-[19px] border border-[#333d51] bg-[#20293a] p-[20px] md:mt-[14px] md:rounded-[12px] md:p-[14px]">
            <input
              v-model="locationInput"
              type="text"
              placeholder="Enter your location"
              class="h-[42px] w-full border-0 bg-transparent px-0 text-[17px] text-[#ffffff] outline-none placeholder:text-[#7d8697] md:h-[34px] md:text-[15px]"
            />
            <button
              type="button"
              class="mt-[14px] flex h-[58px] w-full items-center justify-center rounded-[14px] border border-[#6a7384] bg-[#454e5f] text-[18px] font-[700] text-[#ffffff] transition hover:bg-[#465066] md:mt-[10px] md:h-[38px] md:rounded-[9px] md:text-[15px]"
              @click="goTo('/locations')"
            >
              Search
            </button>
          </div>
        </div>

        <div class="mt-[46px] md:mt-[0px]">
          <h3 class="text-[24px] font-[800] leading-none text-[#ffffff] md:text-[17px]">Resources for Pastors</h3>
          <p class="mt-[28px] max-w-[300px] text-[18px] leading-[1.64] text-[#9da5b6] md:mt-[22px] md:max-w-[250px] md:text-[16px]">
            Our proven strategy takes 75% of church members from seekers to active, reproducing disciple of Christ.
          </p>
          <div class="mt-[24px] space-y-[19px] md:mt-[20px] md:space-y-[10px]">
            <button
              v-for="link in pastorLinks"
              :key="link.label"
              type="button"
              :class="link.highlight ? 'text-[#7cb342]' : 'text-[#d4dae5]'"
              class="flex items-center gap-[12px] text-left text-[18px] leading-[1.45] transition hover:text-[#ffffff] md:text-[15px]"
              @click="handleFooterLink(link)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:h-[13px] md:w-[13px]">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ link.label }}</span>
              <svg
                v-if="link.highlight"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12H19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div class="mt-[48px] md:mt-[0px]">
          <h3 class="text-[24px] font-[800] leading-none text-[#ffffff] md:text-[17px]">Contact Us</h3>
          <div class="mt-[26px] space-y-[22px] md:mt-[22px] md:space-y-[18px]">
            <div class="flex items-start gap-[14px]">
              <div class="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-[13px] bg-[#293246] text-[#7cb342] md:h-[48px] md:w-[48px] md:rounded-[12px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5H20V19H4V5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                  <path d="M4 7L12 13L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div>
                <p class="text-[15px] leading-none text-[#7d8798] md:text-[14px]">Email</p>
                <button
                  type="button"
                  class="mt-[8px] text-left text-[17px] font-[500] leading-[1.35] text-[#ffffff] transition hover:text-[#7cb342] md:text-[15px]"
                  @click="goTo('/pages/contact-truelife-org')"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div class="flex items-start gap-[14px]">
              <div class="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-[13px] bg-[#293246] text-[#7cb342] md:h-[48px] md:w-[48px] md:rounded-[12px]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16.92V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22C14.09 21.7 9.38 19.61 5.76 16C2.15 12.38 0.06 7.67 -0.24 2.76C-0.24 2.23 -0.03 1.72 0.35 1.35C0.72 0.97 1.23 0.76 1.76 0.76H5C5.94 0.75 6.76 1.4 6.97 2.31L7.82 6.07C7.99 6.82 7.76 7.61 7.2 8.15L5.15 10.2C7.45 14.25 10.75 17.55 14.8 19.85L16.85 17.8C17.39 17.24 18.18 17.01 18.93 17.18L22.69 18.03C23.6 18.24 24.25 19.06 24.24 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)" />
                </svg>
              </div>
              <div>
                <p class="text-[15px] leading-none text-[#7d8798] md:text-[14px]">Phone</p>
                <p class="mt-[8px] text-[17px] font-[500] leading-[1.35] text-[#ffffff] md:text-[15px]">1-800-TRUELIFE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[36px] border-t border-[#263042] md:mt-[0px]">
      <div class="mx-auto flex max-w-[394px] flex-col items-center gap-[14px] px-[34px] py-[25px] text-center text-[13px] leading-[1.48] text-[#838c9b] md:max-w-[1220px] md:flex-row md:justify-between md:px-[42px] md:py-[18px] md:text-left md:text-[12px]">
        <p>© 2006-2026 TrueLife.org • ALL RIGHTS RESERVED</p>
        <div class="flex flex-col items-center gap-[12px] md:flex-row md:gap-[26px]">
          <button type="button" class="transition hover:text-[#ffffff]" @click="goTo('/pages/privacy-policy')">TERMS &amp; PRIVACY POLICY</button>
          <button type="button" class="transition hover:text-[#ffffff]">PRIVACY POLICY (CA)</button>
          <button type="button" class="transition hover:text-[#ffffff]" @click="goTo('/pages/contact-truelife-org')">CONTACT US</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from '#app'
import { useI18n } from 'vue-i18n'
import logoIndex from '@/assets/images/logo-index-155.png'

const router = useRouter()
const { locale } = useI18n()
const locationInput = ref('')

const pastorLinks = [
  { label: 'Get Started Kit', type: 'internal', href: '/pastors' },
  { label: 'Life Cards + Leader Slide', type: 'external', href: 'https://www.sharethetruthnow.com/#FreeTools' },
  { label: 'Reach Out', type: 'internal', href: '/pastors' },
  { label: 'View all pastor resources', type: 'internal', href: '/pastors', highlight: true },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/truelifeorg',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/truelifeorg',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/truelifeorg',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/truelifeorg',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
  },
]

const localePrefix = computed(() => (locale.value === 'en' ? '' : `/${locale.value}`))

function localizedPath(path) {
  const safePath = path && String(path).startsWith('/') ? String(path) : '/'
  return `${localePrefix.value}${safePath}` || '/'
}

function openExternal(url) {
  if (!process.client) return
  window.open(url, '_blank', 'noopener')
}

function goTo(path) {
  router.push({ path: localizedPath(path) })
}

function handleFooterLink(link) {
  if (link.type === 'external') {
    openExternal(link.href)
    return
  }

  goTo(link.href)
}
</script>
