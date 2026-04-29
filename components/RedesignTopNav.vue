<template>
  <header
    class="left-0 top-0 z-[1000] flex h-[80px] w-full items-center justify-between border-b border-white/10 bg-[#101828F2] px-[16px] lg:px-[43px] shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]"
  >
    <button type="button" class="flex items-center" @click="$emit('go', '/')">
      <img class="block w-[143px] h-auto" :src="logoIndex" alt="Truelife" />
    </button>

    <nav class="hidden lg:flex items-center gap-[34px]">
      <button class="nav-link text-[#D1D5DC] text-sm" @click="$emit('go', '/')">
        IMPACT
      </button>
      <button class="nav-link text-[#D1D5DC] text-sm" @click="goFreeCards">
        FREE CARDS
      </button>
      <button
        class="nav-link text-[#D1D5DC] text-sm"
        @click="$emit('go', '/jesusstorychallenge')"
      >
        JESUS STORY CHALLENGE
      </button>
      <button
        class="nav-link text-[#D1D5DC] text-sm"
        @click="$emit('go', '/pastors')"
      >
        PASTORS
      </button>
      <button
        class="nav-link text-[#D1D5DC] text-sm"
        @click="$emit('go', '/pages/about-truelife-org')"
      >
        ABOUT
      </button>
    </nav>

    <div class="hidden lg:flex items-center gap-[24px]">
      <div
        class="relative"
        @mouseenter="openLang"
        @mouseleave="scheduleLangClose"
      >
        <button
          class="flex h-[34px] items-center gap-[7px] rounded-[10px] bg-[#FFFFFF1A] px-[12px] text-[10px] font-medium uppercase text-[#D1D5DC] hover:bg-white/15"
        >
          <svg
            class="h-[14px] w-[14px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path
              d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"
            />
          </svg>
          <span class="text-[10px]">
            {{ localeLabels[locale] || "English" }}</span
          >
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.76917 3.06667L0.702501 0L0 0.7025L3.76917 4.47167L7.53834 0.7025L6.83584 0L3.76917 3.06667Z"
              fill="#D1D5DC"
            />
          </svg>
        </button>
        <ul
          v-show="langOpen"
          class="absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-[10px] border border-white/15 bg-[#22293D] py-1 shadow-lg"
        >
          <li v-for="loc in availableLocales" :key="loc">
            <button
              @click="switchLocale(loc)"
              :class="[
                'block w-full px-4 py-2 text-left text-[14px] text-white/85 hover:bg-white/10',
                locale === loc ? 'text-[#7CB342]' : '',
              ]"
            >
              {{ localeLabels[loc] }}
            </button>
          </li>
        </ul>
      </div>
      <button class="nav-link text-sm" @click="goLogin">LOGIN</button>
      <button
        class="flex h-[38px] items-center justify-center rounded-full bg-[#7CB342] px-[24px] text-[14px] font-bold uppercase text-white shadow-[0_8px_18px_rgba(124,179,66,0.35)] hover:bg-[#689F38]"
        @click="$emit('go', '/locations')"
      >
        FIND A CHURCH
      </button>
    </div>

    <button
      class="flex h-[38px] w-[38px] items-center justify-center lg:hidden"
      @click="drawerOpen = true"
    >
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
        <path
          d="M2.666 7.998h10.664M2.666 3.999h10.664M2.666 11.997h10.664"
          stroke="white"
          stroke-width="1.333"
          stroke-linecap="round"
        />
      </svg>
    </button>

    <Teleport to="body">
      <div
        v-if="drawerOpen"
        class="fixed inset-0 z-[9999] bg-[#101828] lg:hidden h-max"
        @click.self="drawerOpen = false"
      >
        <aside
          class="flex w-full flex-col overflow-y-auto bg-[#101828] px-[18px] pt-[34px]"
        >
          <div class="flex items-center justify-between">
            <img
              class="block w-[167px] h-auto"
              :src="logoIndex"
              alt="Truelife"
            />
            <button
              class="flex h-[34px] w-[34px] items-center justify-center text-white"
              aria-label="Close menu"
              @click="drawerOpen = false"
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
            <button class="drawer-link" @click="navigate('/')">IMPACT</button>
            <button
              class="drawer-link"
              @click="
                drawerOpen = false;
                goFreeCards();
              "
            >
              FREE CARDS
            </button>
            <button
              class="drawer-link"
              @click="navigate('/jesusstorychallenge')"
            >
              JESUS STORY CHALLENGE
            </button>
            <button class="drawer-link" @click="navigate('/pastors')">
              PASTORS
            </button>
            <button
              class="drawer-link"
              @click="navigate('/pages/about-truelife-org')"
            >
              ABOUT
            </button>
            <button
              class="drawer-link"
              @click="
                drawerOpen = false;
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
                <span>{{ localeLabels[locale] || "English" }}</span>
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
                <li v-for="loc in availableLocales" :key="loc">
                  <button
                    class="block w-full px-[14px] py-[9px] text-left text-[14px] uppercase text-white/85"
                    :class="locale === loc ? 'text-[#7CB342]' : ''"
                    @click="switchMobileLocale(loc)"
                  >
                    {{ localeLabels[loc] }}
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
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRuntimeConfig } from "#app";
import logoIndex from "@/assets/images/truelife.org.png";

const emit = defineEmits(["go"]);
const router = useRouter();
const config = useRuntimeConfig();
const { locale, availableLocales } = useI18n();
const langOpen = ref(false);
const drawerOpen = ref(false);
const mobileLangOpen = ref(false);
let langCloseTimer = null;
const localeLabels = {
  en: "English",
  es: "Spanish",
  fr: "French",
  ko: "Korean",
};
const dashboardUrl = config.public?.appDashboardUrl || "https://mytruelife.org";
function openLang() {
  clearTimeout(langCloseTimer);
  langOpen.value = true;
}
function scheduleLangClose() {
  langCloseTimer = setTimeout(() => {
    langOpen.value = false;
  }, 150);
}
function goLogin() {
  window.open(dashboardUrl + "/users/sign-in", "_blank", "noopener");
}
function goFreeCards() {
  window.open(
    "https://www.sharethetruthnow.com/#FreeTools",
    "_blank",
    "noopener",
  );
}
function switchLocale(loc) {
  langOpen.value = false;
  locale.value = loc;
  const currentPath = router.currentRoute.value.path;
  const stripped = currentPath.replace(/^\/(es|fr|ko)/, "") || "/";
  router.push({ path: loc === "en" ? stripped : `/${loc}${stripped}` });
}
function switchMobileLocale(loc) {
  mobileLangOpen.value = false;
  drawerOpen.value = false;
  switchLocale(loc);
}
function navigate(path) {
  drawerOpen.value = false;
  emit("go", path);
}
</script>

<style scoped>
.nav-link {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.15s;
}
.nav-link:hover {
  color: white;
}
.drawer-link {
  padding: 12px 0;
  text-align: left;
  color: #d1d5dc;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.18;
}
</style>
