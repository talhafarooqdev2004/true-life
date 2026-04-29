<template>
  <div class="relative overflow-hidden bg-[#101828]" v-bind="$attrs">
    <button
      v-if="!isPlaying"
      type="button"
      class="group relative block h-full w-full overflow-hidden text-left"
      :aria-label="`Play ${title || 'video'}`"
      :disabled="!hasPlayer"
      @click="play"
    >
      <img
        v-if="poster"
        :src="poster"
        :alt="title"
        class="h-full w-full object-cover"
        :class="imageClass"
        loading="lazy"
      />
      <div v-else class="h-full w-full bg-[#101828]" />

      <div class="absolute inset-0 bg-black/35"></div>

      <slot name="overlay" />

      <span
        v-if="hasPlayer"
        class="absolute left-1/2 top-1/2 flex h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#7CB342] shadow-[0_18px_35px_rgba(0,0,0,0.24)] transition-transform group-hover:scale-105"
        :class="playClass"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          class="lg:h-[40px] lg:w-[40px]"
        >
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
        </svg>
      </span>
    </button>

    <div
      v-else
      class="h-full w-full [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0 [&_iframe]:object-cover"
      v-html="playerHtml"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  embed: {
    type: String,
    default: "",
  },
  embedSrc: {
    type: String,
    default: "",
  },
  imageClass: {
    type: String,
    default: "",
  },
  playClass: {
    type: String,
    default: "",
  },
  poster: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Video",
  },
});

const isPlaying = ref(false);

const hasPlayer = computed(() => Boolean(props.embed || props.embedSrc));

const playerHtml = computed(() => {
  if (props.embed) {
    return addAutoplayToEmbed(props.embed);
  }

  if (!props.embedSrc) {
    return "";
  }

  return `<iframe src="${appendAutoplay(props.embedSrc)}" title="${escapeAttr(
    props.title,
  )}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
});

function play() {
  if (!hasPlayer.value) return;
  isPlaying.value = true;
}

function addAutoplayToEmbed(embed) {
  return String(embed).replace(/src=(["'])(.*?)\1/i, (_match, quote, src) => {
    return `src=${quote}${appendAutoplay(src)}${quote}`;
  });
}

function appendAutoplay(src) {
  try {
    const url = new URL(src, "https://truelife.local");
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("rel", "0");
    return src.startsWith("/")
      ? `${url.pathname}${url.search}`
      : url.toString();
  } catch {
    const joiner = String(src).includes("?") ? "&" : "?";
    return `${src}${joiner}autoplay=1&rel=0`;
  }
}

function escapeAttr(value) {
  return String(value || "Video")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
</script>
