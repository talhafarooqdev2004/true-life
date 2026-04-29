<template>
  <article class="category-card">
    <div
      class="thumb-button"
      :aria-label="`Open ${displayName}`"
      role="button"
      tabindex="0"
      @click="$emit('open', category)"
      @keydown.enter.prevent="$emit('open', category)"
      @keydown.space.prevent="$emit('open', category)"
    >
      <InlineVideoPlayer
        v-if="hasVideo"
        :title="displayName"
        :poster="fallbackThumbnail"
        :embed="firstPlayerEmbed"
        image-class="brightness-[0.82]"
        class="h-full w-full"
        play-class="!h-[52px] !w-[52px] !bg-white/90 !text-[#1a2a3a]"
        @click.stop
      />
      <img v-else :src="fallbackThumbnail" :alt="displayName" loading="lazy" />
      <span class="thumb-overlay"></span>
      <span class="thumb-badge">
        <span class="badge-dot"></span>
        {{ supercategoryLabel }}
      </span>
    </div>

    <div class="card-divider"></div>

    <div class="card-body">
      <h3>{{ firstResourceTitle }}</h3>

      <ul class="resource-list">
        <li v-for="item in resourceItems" :key="item">{{ item }}</li>
      </ul>

      <button type="button" class="open-link" @click="$emit('open', category)">
        Explore {{ totalResources }} Resources →
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { get } from 'lodash'
import { useI18n } from 'vue-i18n'
import InlineVideoPlayer from '~/components/InlineVideoPlayer.vue'

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})

defineEmits(['open'])

const { locale } = useI18n()

const displayName = computed(() => {
  if (locale.value === 'en') {
    return get(props.category, 'name', '')
  }

  return get(props.category, `name_${locale.value}`, '') || get(props.category, 'name', '')
})

const supercategoryLabel = computed(() => {
  return String(props.category.supercategory || displayName.value).toUpperCase()
})

const firstResourceTitle = computed(() => {
  const answers = Array.isArray(props.category.answers) ? props.category.answers : []
  const first = answers.find(a => a.title && !a.title.startsWith('Transcript:'))
  if (first) return first.title
  if (answers.length > 0 && answers[0].title) return answers[0].title
  return displayName.value
})

const fallbackThumbnail = computed(() => get(props.category, 'thumbnail', '') || 'https://s3.amazonaws.com/truelife1/icons/112/answerthumbnails/full.jpg')

const answerCount = computed(() => (Array.isArray(props.category.answers) ? props.category.answers.length : 0))
const testimonialCount = computed(() => (Array.isArray(props.category.testimonials) ? props.category.testimonials.length : 0))
const totalResources = computed(() => answerCount.value + testimonialCount.value)
const firstPlayerEmbed = computed(() => {
  const answers = Array.isArray(props.category.answers) ? props.category.answers : []
  const videoAnswer = answers.find((answer) => {
    return (
      get(answer, 'playerembed') ||
        get(answer, `${locale.value}.playerembed`) ||
        get(answer, 'en.playerembed')
    )
  })

  if (!videoAnswer) return ''

  return (
    get(videoAnswer, 'playerembed') ||
    get(videoAnswer, `${locale.value}.playerembed`) ||
    get(videoAnswer, 'en.playerembed') ||
    ''
  )
})

const hasVideo = computed(() => {
  return Boolean(firstPlayerEmbed.value)
})

const resourceItems = computed(() => {
  const answers = Array.isArray(props.category.answers) ? props.category.answers : []
  const testimonials = Array.isArray(props.category.testimonials) ? props.category.testimonials : []
  const items = [
    ...answers.map(a => a.title).filter(Boolean),
    ...testimonials.map(t => t.title).filter(Boolean),
  ]
  return items.length > 0 ? items : ['Articles and Videos']
})
</script>

<style scoped lang="scss">
.category-card {
  background: #fff;
  border: 1px solid rgba(124, 179, 66, 0.25);
  border-radius: 18px;
  box-shadow: 0 4px 28px rgba(124, 179, 66, 0.22);
  overflow: hidden;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.category-card:hover {
  border-color: #7cb342;
  box-shadow: 0 10px 40px rgba(124, 179, 66, 0.35);
}

.category-card:hover .thumb-play {
  background: #7cb342;
  color: #fff;
}

.thumb-button {
  position: relative;
  border: none;
  background: #0f1f2c;
  width: 100%;
  padding: 0;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  display: block;
}

.thumb-button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.82);
}

.thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 40, 0.1), rgba(15, 23, 40, 0.36));
}

.thumb-badge {
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
  background: rgba(15, 23, 40, 0.82);
  color: #f4f6fa;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: #7cb342;
  flex-shrink: 0;
}

.thumb-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  color: #1a2a3a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  transition: background 200ms ease, color 200ms ease;
}

.card-body {
  padding: 16px 16px 18px;
}

.card-divider {
  height: 1px;
  background: rgba(196, 203, 211, 0.4);
  margin: 0 16px;
}

.card-body h3 {
  margin: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(196, 203, 211, 0.45);
  color: #10293d;
  font-family: 'Inter', Arial, sans-serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
}

.resource-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  max-height: 120px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(124, 179, 66, 0.4) transparent;
}

.resource-list::-webkit-scrollbar {
  width: 4px;
}

.resource-list::-webkit-scrollbar-track {
  background: transparent;
}

.resource-list::-webkit-scrollbar-thumb {
  background: rgba(124, 179, 66, 0.4);
  border-radius: 999px;
}

.resource-list li {
  position: relative;
  padding-left: 14px;
  color: #3e5d75;
  font-size: 15px;
  line-height: 1.8;
}

.resource-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #3e5d75;
}

.open-link {
  display: inline-block;
  margin-top: 14px;
  border: 2px solid #c4cbd3;
  border-left: 4px solid #7cb342;
  border-radius: 999px;
  background: transparent;
  color: #10293d;
  padding: 10px 20px;
  font-size: 14px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 150ms ease, color 150ms ease;
}

.open-link:hover {
  border-color: #7cb342;
  border-left-color: #7cb342;
  color: #4a7a1e;
}
</style>
