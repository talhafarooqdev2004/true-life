<template>
  <header
    class="border-b border-[#283244] bg-[#121b2b] shadow-[inset_0_-1px_0_rgba(255,255,255,0.03)]"
  >
    <div
      class="mx-auto flex h-[117px] max-w-[394px] items-center justify-between px-[33px] md:hidden"
    >
      <button
        type="button"
        class="shrink-0"
        aria-label="Go to homepage"
        @click="goTo('/')"
      >
        <img :src="logoIndex" alt="truelife.org" class="block w-[149px]" />
      </button>
      <button
        type="button"
        class="flex h-[34px] w-[34px] items-center justify-center text-[#ffffff]"
        aria-label="Open navigation menu"
        @click="mobileMenuOpen = true"
      >
        <svg
          width="27"
          height="21"
          viewBox="0 0 27 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2.25H26"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1 10.5H26"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1 18.75H26"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>

    <div
      class="mx-auto hidden h-[58px] max-w-[1220px] items-center justify-between px-[36px] md:flex"
    >
      <button
        type="button"
        class="shrink-0"
        aria-label="Go to homepage"
        @click="goTo('/')"
      >
        <img :src="logoIndex" alt="truelife.org" class="block w-[116px]" />
      </button>

      <nav class="flex items-center gap-[28px]">
        <button
          v-for="item in navItems"
          :key="item.label"
          type="button"
          class="text-[11px] font-[500] uppercase leading-none text-[#ffffff] transition hover:text-[#87bf43]"
          @click="handleNav(item)"
        >
          {{ item.label }}
        </button>
      </nav>

      <div class="flex items-center gap-[18px]">
        <button
          type="button"
          class="flex h-[24px] items-center gap-[6px] rounded-full bg-[#2a3445] px-[10px] text-[9px] font-[500] uppercase text-[#d9dee7]"
          aria-label="Current language English"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M3 12H21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12 3C14.3 5.47 15.6 8.69 15.6 12C15.6 15.31 14.3 18.53 12 21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M12 3C9.7 5.47 8.4 8.69 8.4 12C8.4 15.31 9.7 18.53 12 21"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span>ENGLISH</span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L4 4L7 1"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          class="text-[12px] font-[500] uppercase text-[#ffffff] transition hover:text-[#87bf43]"
          @click="goLogin"
        >
          LOGIN
        </button>

        <button
          type="button"
          class="flex h-[28px] items-center justify-center rounded-full bg-[#82bb3f] px-[19px] text-[11px] font-[700] uppercase text-[#ffffff] shadow-[0_8px_18px_rgba(130,187,63,0.28)] transition hover:bg-[#77ad38]"
          @click="goTo('/locations')"
        >
          FIND A CHURCH
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[9999] bg-[#101828] md:hidden"
        @click.self="mobileMenuOpen = false"
      >
        <aside
          class="flex h-full w-full flex-col overflow-y-auto bg-[#101828] px-[18px] pt-[34px]"
        >
          <div class="flex items-center justify-between">
            <img :src="logoIndex" alt="truelife.org" class="block w-[167px]" />
            <button
              type="button"
              class="flex h-[34px] w-[34px] items-center justify-center text-white"
              aria-label="Close menu"
              @click="mobileMenuOpen = false"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <div class="mt-[32px] h-px bg-white/10"></div>

          <nav class="flex flex-col py-[18px]">
            <button
              v-for="item in navItems"
              :key="`mobile-${item.label}`"
              type="button"
              class="mobile-drawer-link"
              @click="handleMobileNav(item)"
            >
              {{ item.label }}
            </button>
            <button
              type="button"
              class="mobile-drawer-link"
              @click="
                mobileMenuOpen = false;
                goLogin();
              "
            >
              LOGIN
            </button>
          </nav>

          <div class="mt-auto pb-[26px]">
            <div class="h-px bg-white/10"></div>
            <div class="relative mt-[7px] flex items-center gap-[12px]">
              <svg
                class="h-[24px] w-[24px] shrink-0 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path
                  d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"
                />
              </svg>
              <button
                class="flex h-[41px] items-center gap-[8px] rounded-[11px] bg-[#2B3446] px-[15px] text-[16px] font-[500] uppercase leading-none text-[#F9FAFB]"
                type="button"
                @click="mobileLangOpen = !mobileLangOpen"
              >
                <span>ENGLISH</span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1.5 1.75L6 6.25L10.5 1.75"
                    stroke="#F9FAFB"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <ul
                v-show="mobileLangOpen"
                class="absolute bottom-full left-[36px] mb-[8px] min-w-[140px] rounded-[10px] border border-white/10 bg-[#2B3446] py-[6px] shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
              >
                <li v-for="loc in localeOptions" :key="loc.value">
                  <button
                    class="block w-full px-[14px] py-[9px] text-left text-[14px] uppercase text-white/85"
                    :class="locale === loc.value ? 'text-[#7CB342]' : ''"
                    @click="switchMobileLocale(loc.value)"
                  >
                    {{ loc.label }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </Teleport>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRuntimeConfig } from "#app";
import { useI18n } from "vue-i18n";
import logoIndex from "@/assets/images/logo-index-155.png";

const router = useRouter();
const config = useRuntimeConfig();
const { locale } = useI18n();

const dashboardUrl = config.public?.appDashboardUrl || "https://mytruelife.org";
const mobileMenuOpen = ref(false);
const mobileLangOpen = ref(false);
const localeOptions = [
  { value: "en", label: "ENGLISH" },
  { value: "es", label: "SPANISH" },
  { value: "fr", label: "FRENCH" },
  { value: "ko", label: "KOREAN" },
];

const navItems = [
  { label: "IMPACT", type: "internal", href: "/" },
  {
    label: "FREE CARDS",
    type: "external",
    href: "https://www.sharethetruthnow.com/#FreeTools",
  },
  { label: "JESUS STORY CHALLENGE", type: "internal", href: "/pricing" },
  { label: "PASTORS", type: "internal", href: "/pastors" },
  { label: "ABOUT", type: "internal", href: "/pages/about-truelife-org" },
];

const localePrefix = computed(() =>
  locale.value === "en" ? "" : `/${locale.value}`,
);

function localizedPath(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  return `${localePrefix.value}${safePath}` || "/";
}

function openExternal(url) {
  if (!process.client) return;
  window.open(url, "_blank", "noopener");
}

function goLogin() {
  openExternal(`${dashboardUrl}/users/sign-in`);
}

function goTo(path) {
  mobileMenuOpen.value = false;
  router.push({ path: localizedPath(path) });
}

function handleNav(item) {
  if (item.type === "external") {
    openExternal(item.href);
    return;
  }

  goTo(item.href);
}

function handleMobileNav(item) {
  mobileMenuOpen.value = false;
  handleNav(item);
}

function switchMobileLocale(loc) {
  mobileLangOpen.value = false;
  mobileMenuOpen.value = false;
  locale.value = loc;
  const currentPath = router.currentRoute.value.path;
  const stripped = currentPath.replace(/^\/(es|fr|ko)/, "") || "/";
  router.push({ path: loc === "en" ? stripped : `/${loc}${stripped}` });
}
</script>

<style scoped>
.mobile-drawer-link {
  padding: 12px 0;
  text-align: left;
  color: #d1d5dc;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.18;
  text-transform: uppercase;
}
</style>
