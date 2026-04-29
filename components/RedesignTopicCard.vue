<template>
  <article
    class="overflow-hidden rounded-[16px] border border-[#DFE3E9] bg-white shadow-[0_10px_24px_rgba(16,24,40,0.08)]"
    :class="
      card.active
        ? 'lg:border-[#7CB342] lg:shadow-[0_10px_24px_rgba(124,179,66,0.18)]'
        : ''
    "
  >
    <div class="relative h-[223px] overflow-hidden bg-[#050505] lg:h-[190px]">
      <InlineVideoPlayer
        v-if="card.active"
        :title="card.title"
        :poster="card.image"
        :embed-src="card.embedSrc || fallbackEmbedSrc"
        image-class="opacity-75"
        class="absolute inset-0 h-full w-full"
        play-class="!h-[62px] !w-[62px] !bg-[#7CB342] !text-white"
      />
      <img
        v-else-if="card.image"
        :src="card.image"
        :alt="card.title"
        class="absolute inset-0 h-full w-full object-cover opacity-75 grayscale"
      />
      <div
        v-else
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_18%,rgba(255,255,255,0)_42%),linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.35)_100%)]"
      ></div>
      <div class="absolute inset-0 bg-black/20"></div>
      <div
        class="absolute left-[16px] top-[15px] inline-flex items-center gap-[8px] rounded-[8px] bg-white px-[13px] py-[8px] text-[13px] font-extrabold leading-none tracking-[0.04em] text-[#172033] shadow-[0_4px_12px_rgba(0,0,0,0.18)] lg:left-[14px] lg:top-[14px] lg:h-[27px] lg:px-[10px] lg:py-0 lg:text-[11px]"
        :class="card.active ? '!bg-[#7CB342] !text-white' : ''"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          class="lg:h-[14px] lg:w-[14px]"
        >
          <path
            d="M7.998 4.666v9.331"
            :stroke="card.active ? 'white' : '#7CB342'"
            stroke-width="1.333"
            stroke-linecap="round"
          />
          <path
            d="M2 11.997c-.177 0-.347-.07-.472-.195a.667.667 0 0 1-.195-.471V2.666c0-.177.07-.346.195-.471A.667.667 0 0 1 2 1.999h3.332a2.666 2.666 0 0 1 2.666 2.667A2.666 2.666 0 0 1 10.664 2h3.333c.177 0 .346.07.471.195.125.125.195.294.195.471v8.665c0 .177-.07.346-.195.471a.667.667 0 0 1-.471.195H9.998a2 2 0 0 0-2 2 2 2 0 0 0-2-2H2Z"
            :stroke="card.active ? 'white' : '#7CB342'"
            stroke-width="1.333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ card.badge }}</span>
      </div>
      <div
        v-if="card.active"
        class="absolute right-[14px] top-[14px] flex h-[32px] items-center rounded-[8px] bg-[#7CB342] px-[13px] text-[11px] font-bold uppercase text-white"
      >
        Now Playing
      </div>
    </div>
    <div class="p-[24px] lg:p-[22px]">
      <h3
        class="max-w-[280px] text-[16px] font-semibold leading-[22px] tracking-[-0.01em]"
        :class="card.active ? 'text-[#7CB342]' : 'text-[#101828]'"
      >
        {{ card.title }}
      </h3>
      <div class="mt-[17px] h-px bg-[#E0E5EB]"></div>
      <ul class="mt-[16px] space-y-[10px]">
        <li
          v-for="item in card.resources"
          :key="item"
          class="flex items-start gap-[8px] text-[14px] font-normal leading-[22.75px] text-[#4A5565]"
        >
          <span
            class="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#7CB342]"
          ></span
          ><span>{{ item }}</span>
        </li>
      </ul>
      <div class="mt-[22px] h-px bg-[#E0E5EB]"></div>
      <button
        type="button"
        class="mt-[17px] flex h-[44px] w-full items-center justify-center gap-[9px] rounded-[14px] bg-[#F3F4F6] px-[18px] text-[14px] font-semibold uppercase leading-none tracking-[0.03em] text-[#172033] shadow-[inset_4px_0_0_#7CB342,0_2px_4px_rgba(16,24,40,0.04)]"
      >
        <span>{{ card.ctaLabel }}</span
        ><svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33252 7.99829H12.6638"
            stroke="#101828"
            stroke-width="1.33303"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99805 3.33252L12.6637 7.99814L7.99805 12.6638"
            stroke="#101828"
            stroke-width="1.33303"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </article>
</template>
<script setup>
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";

defineProps({ card: { type: Object, required: true } });

const fallbackEmbedSrc = "https://www.youtube.com/embed/M7lc1UVf-VE";
</script>
