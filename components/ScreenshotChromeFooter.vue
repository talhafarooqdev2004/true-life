<template>
  <footer class="w-full bg-[#121b2b] text-[#ffffff]">
    <div class="mx-auto max-w-[394px] px-[34px] pt-[28px] md:max-w-[1220px] md:px-[40px]">
      <div class="flex items-end leading-none">
        <span class="text-[41px] font-[800] tracking-[-1.2px] text-[#ff2217] md:text-[38px]">true</span>
        <span class="text-[41px] font-[800] tracking-[-1.2px] text-[#ffffff] md:text-[38px]">life</span>
        <span class="mb-[3px] ml-[3px] text-[20px] font-[700] tracking-[-0.4px] text-[#8f95a1] md:text-[18px]">.org</span>
      </div>

      <p class="mt-[28px] max-w-[324px] text-[18px] leading-[1.6] text-[#9ea6b5] md:max-w-[420px] md:text-[17px]">
        TrueLife.org provides free video answers to life's hardest questions, grounded in the truth of Jesus Christ.
      </p>

      <div class="mt-[24px] flex gap-[16px]">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener"
          :aria-label="item.label"
          class="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#293246] text-[#ffffff]"
          v-html="item.icon"
        ></a>
      </div>

      <section class="mt-[46px]">
        <div class="flex items-center gap-[12px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#83bd3c]">
            <path d="M21 10C21 17 12 22 12 22C12 22 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <h2 class="text-[24px] font-[800] leading-none text-[#ffffff]">Churches Near</h2>
        </div>

        <p class="mt-[30px] max-w-[328px] text-[18px] leading-[1.72] text-[#9ea6b5] md:max-w-[460px]">
          Each church we list believes the promises with the message of Jesus. They'd love to be a part of your journey with God.
        </p>

        <div class="mt-[28px] rounded-[20px] border border-[#323c4f] bg-[#20293a] px-[26px] pb-[26px] pt-[24px]">
          <input
            v-model="locationInput"
            type="text"
            placeholder="Enter your location"
            class="h-[42px] w-full border-0 bg-transparent p-0 text-[18px] text-[#ffffff] outline-none placeholder:text-[#7f8796]"
          />
          <button
            type="button"
            class="mt-[20px] flex h-[58px] w-full items-center justify-center rounded-[16px] border border-[#697283] bg-[#434c5d] text-[18px] font-[700] text-[#ffffff]"
            @click="goTo('/locations')"
          >
            Search
          </button>
        </div>
      </section>

      <section class="mt-[48px]">
        <h2 class="text-[24px] font-[800] leading-none text-[#ffffff]">Resources for Pastors</h2>
        <p class="mt-[28px] max-w-[300px] text-[18px] leading-[1.64] text-[#9ea6b5] md:max-w-[420px]">
          Our proven strategy takes 75% of church members from seekers to active, reproducing disciple of Christ.
        </p>

        <div class="mt-[26px] space-y-[21px]">
          <button
            v-for="link in pastorLinks"
            :key="link.label"
            type="button"
            :class="link.highlight ? 'text-[#82bb3f]' : 'text-[#d7dce6]'"
            class="flex items-center gap-[15px] text-left text-[18px] leading-none"
            @click="openLink(link)"
          >
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4L10 11L3 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{{ link.label }}</span>
            <svg
              v-if="link.highlight"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 1L18 9L10 17" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 9H2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </section>

      <section class="mt-[50px]">
        <h2 class="text-[24px] font-[800] leading-none text-[#ffffff]">Contact Us</h2>

        <div class="mt-[26px] space-y-[26px]">
          <div class="flex items-start gap-[18px]">
            <div class="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-[14px] bg-[#293246] text-[#82bb3f]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 5.5H21.5V19.5H3.5V5.5Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
                <path d="M3.5 7.5L12.5 14L21.5 7.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-[15px] leading-none text-[#7e8797]">Email</p>
              <button
                type="button"
                class="mt-[9px] text-left text-[17px] font-[500] leading-none text-[#ffffff]"
                @click="goTo('/pages/contact-truelife-org')"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div class="flex items-start gap-[18px]">
            <div class="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-[14px] bg-[#293246] text-[#82bb3f]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 18.1V21C21 21.5 20.8 22 20.5 22.3C20.1 22.7 19.6 22.9 19.1 22.9C14.6 22.6 10.3 20.7 7.1 17.5C3.9 14.3 2 10 1.7 5.5C1.7 5 1.9 4.5 2.3 4.1C2.6 3.8 3.1 3.6 3.6 3.6H6.5C7.3 3.6 8 4.1 8.2 4.8L9 8.3C9.1 8.9 8.9 9.5 8.5 9.9L6.7 11.6C8.8 15.1 10.5 16.8 14 18.9L15.7 17.1C16.1 16.7 16.7 16.5 17.3 16.6L20.8 17.4C21.5 17.6 22 18.3 22 19.1" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <p class="text-[15px] leading-none text-[#7e8797]">Phone</p>
              <p class="mt-[9px] text-[17px] font-[500] leading-none text-[#ffffff]">1-800-TRUELIFE</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="mt-[40px] border-t border-[#283143]">
      <div class="mx-auto max-w-[394px] px-[24px] py-[28px] text-center md:max-w-[1220px]">
        <p class="text-[14px] leading-[1.5] text-[#8a92a0]">© 2006-2026 TrueLife.org • ALL RIGHTS RESERVED</p>
        <div class="mt-[24px] flex flex-col items-center gap-[16px]">
          <button type="button" class="text-[14px] leading-none text-[#8a92a0]" @click="goTo('/pages/privacy-policy')">TERMS &amp; PRIVACY POLICY</button>
          <button type="button" class="text-[14px] leading-none text-[#8a92a0]">PRIVACY POLICY (CA)</button>
          <button type="button" class="text-[14px] leading-none text-[#8a92a0]" @click="goTo('/pages/contact-truelife-org')">CONTACT US</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from '#app'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { locale } = useI18n()
const locationInput = ref('')

const pastorLinks = [
  { label: 'Get Started Kit', type: 'internal', href: '/pastors' },
  { label: 'Life Cards + Leader Slide', type: 'external', href: 'https://www.sharethetruthnow.com/#FreeTools' },
  { label: 'Reach Out', type: 'internal', href: '/pastors' },
  { label: 'View all pastor resources', type: 'internal', href: '/pastors', highlight: true },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/truelifeorg',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15.1 4H18V1H14.6C11.4 1 9.5 2.9 9.5 6.2V9H6.5V12.2H9.5V21H13.1V12.2H16.5L17 9H13.1V6.6C13.1 5.5 13.5 5 15.1 5V4Z"/></svg>',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/truelifeorg',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M22 5.8C21.3 6.2 20.6 6.4 19.8 6.5C20.6 6 21.2 5.2 21.5 4.3C20.8 4.8 19.9 5.1 19 5.3C18.3 4.5 17.3 4 16.2 4C14.1 4 12.5 5.9 13 7.9C9.8 7.7 6.8 6.3 4.7 4C3.7 5.7 4.2 7.9 5.8 9C5.2 9 4.6 8.8 4.1 8.5C4.1 10.3 5.4 11.8 7.2 12.1C6.7 12.3 6.1 12.3 5.6 12.2C6.1 13.8 7.6 14.9 9.3 14.9C7.7 16.2 5.7 16.8 3.6 16.6C5.3 17.8 7.4 18.5 9.7 18.5C16.3 18.5 20.1 13 19.9 8.1C20.7 7.6 21.4 6.8 22 5.8Z"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/truelifeorg',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/truelifeorg',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M10 9.5L15.5 12L10 14.5V9.5Z" fill="currentColor" stroke="none"/></svg>',
  },
]

const localePrefix = computed(() => (locale.value === 'en' ? '' : `/${locale.value}`))

function localizedPath(path) {
  const safePath = path && String(path).startsWith('/') ? String(path) : '/'
  return `${localePrefix.value}${safePath}` || '/'
}

function goTo(path) {
  router.push({ path: localizedPath(path) })
}

function openLink(link) {
  if (link.type === 'external') {
    if (process.client) {
      window.open(link.href, '_blank', 'noopener')
    }
    return
  }

  goTo(link.href)
}
</script>
