<template>
  <section
    class="relative isolate overflow-hidden border-b border-[#ffffff] bg-gradient-to-r from-[rgba(16,24,40,0.95)] via-[rgba(16,24,40,0.90)] to-[rgba(16,24,40,0.85)] text-[#ffffff]"
  >
    <div
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,45,0.42)_0%,rgba(17,26,45,0.72)_48%,rgba(17,26,45,0.92)_100%)]"
      aria-hidden="true"
    ></div>
    <div
      class="absolute inset-x-0 top-0 h-[174px] bg-[linear-gradient(180deg,rgba(17,26,45,0.34)_0%,rgba(17,26,45,0)_100%)]"
      aria-hidden="true"
    ></div>

    <div
      class="relative mx-auto flex min-h-[730px] w-full max-w-[394px] flex-col items-center px-[10px] pb-[56px] pt-[80px] text-center"
    >
      <div
        class="inline-flex items-center gap-[10px] rounded-full border border-[#586173] bg-[#3a4354] px-[20px] py-[14px] text-[14px] leading-none font-[500] text-[#ffffff] shadow-[0_10px_22px_rgba(0,0,0,0.18)]"
      >
        <span class="h-[8px] w-[8px] rounded-full bg-[#7cb342]"></span>
        <span>{{ t("redesign.hero.trustPill") }}</span>
      </div>

      <h1
        class="mt-[40px] max-w-[334px] text-[48px] leading-[0.98] font-bold tracking-[-1.2px] text-[#ffffff]"
      >
        {{ t("redesign.hero.heading") }}
      </h1>

      <p
        class="mt-[23px] max-w-[330px] text-[20px] leading-[32.5px] font-[400] text-[#D1D5DC]"
      >
        {{ t("redesign.hero.subheading") }}
      </p>

      <form class="mt-[8px] w-full" @submit.prevent="$emit('submit')">
        <label class="sr-only" for="redesign-search">
          {{ t("redesign.hero.searchLabel") }}
        </label>

        <div
          class="flex h-[64px] items-center gap-[8px] rounded-[16px] bg-[#FFFFFFF2] px-[6px] shadow-[0_18px_36px_rgba(0,0,0,0.24)]"
        >
          <input
            id="redesign-search"
            :value="modelValue"
            type="text"
            autocomplete="off"
            :placeholder="t('redesign.hero.searchPlaceholder')"
            class="h-full flex-1 bg-transparent pl-[18px] pr-[10px] text-[16px] leading-none text-[#667286] outline-none placeholder:text-[#7f8796]"
            @input="$emit('update:modelValue', $event.target.value)"
          />

          <button
            type="submit"
            :aria-label="t('redesign.hero.searchLabel')"
            class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[13px] bg-[#7cb342] text-[#ffffff] shadow-[0_10px_22px_rgba(124,179,66,0.16)] transition hover:bg-[#8fbe58]"
          >
            <svg
              class="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M20 20L15.5 15.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </form>

      <div
        class="mt-[12px] flex max-w-[326px] flex-wrap items-center gap-[8px] text-[14px]"
        role="list"
        aria-label="Popular topics"
      >
        <span class="text-[#9ea6b5]">{{ t("redesign.hero.popular") }}</span>
        <NuxtLink
          role="listitem"
          to="/categories/forgiveness"
          class="rounded-[10px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[14px] py-[8px] text-[14px] leading-none font-[500] text-[#ffffff]"
        >
          forgiveness
        </NuxtLink>
        <NuxtLink
          role="listitem"
          to="/categories/purpose"
          class="rounded-[10px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[14px] py-[8px] text-[14px] leading-none font-[500] text-[#ffffff]"
        >
          purpose
        </NuxtLink>
        <NuxtLink
          role="listitem"
          to="/categories/suffering"
          class="rounded-[10px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[14px] py-[8px] text-[14px] leading-none font-[500] text-[#ffffff]"
        >
          suffering
        </NuxtLink>
        <NuxtLink
          role="listitem"
          to="/categories/hope"
          class="rounded-[10px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[14px] py-[8px] text-[14px] leading-none font-[500] text-[#ffffff]"
        >
          hope
        </NuxtLink>
      </div>

      <div class="mt-[40px] grid w-full grid-cols-2 gap-x-[22px] gap-y-[24px]">
        <article class="flex items-start gap-[14px] pl-[3px] text-left">
          <span class="mt-[2px] h-[55px] w-[3px] bg-[#7cb342]"></span>
          <div>
            <p class="text-[30px] leading-[1.05] font-[800] text-[#ffffff]">
              {{ t("redesign.hero.statQuestionsNum") }}
            </p>
            <p class="mt-[8px] text-[14px] leading-[1.4] text-[#9ea6b5]">
              {{ t("redesign.hero.statQuestions") }}
            </p>
          </div>
        </article>

        <article class="flex items-start gap-[14px] text-left">
          <span class="mt-[2px] h-[55px] w-[3px] bg-[#7cb342]"></span>
          <div>
            <p class="text-[30px] leading-[1.05] font-[800] text-[#ffffff]">
              {{ t("redesign.hero.statChurchesNum") }}
            </p>
            <p class="mt-[8px] text-[14px] leading-[1.4] text-[#9ea6b5]">
              {{ t("redesign.hero.statChurches") }}
            </p>
          </div>
        </article>

        <article
          class="col-span-2 mx-auto flex items-start gap-[14px] pl-[6px] text-left"
        >
          <span class="mt-[2px] h-[55px] w-[3px] bg-[#7cb342]"></span>
          <div>
            <p class="text-[30px] leading-[1.05] font-[800] text-[#ffffff]">
              {{ t("redesign.hero.statSupportNum") }}
            </p>
            <p class="mt-[8px] text-[14px] leading-[1.4] text-[#9ea6b5]">
              {{ t("redesign.hero.statSupport") }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue", "submit"]);
</script>
