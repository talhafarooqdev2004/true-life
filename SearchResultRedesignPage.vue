<template>
  <main class="search-result-redesign">
    <RedesignTopNav @go="goTo" />

    <section class="search-hero">
      <div class="hero-container">
        <h1 class="search-heading">Search Results</h1>
        <p v-if="searchSlug" class="search-query-label">Showing results for: <strong>{{ searchSlug }}</strong></p>
        <form class="search-form" @submit.prevent="reSearch">
          <input v-model="newQuery" type="text" class="search-input" placeholder="Search for topics, questions..." />
          <button type="submit" class="search-submit"><IconSearch size="18" /> Search</button>
        </form>
      </div>
    </section>

    <section class="results-body">
      <div class="body-container">
        <div class="body-columns">
          <div class="main-col">
            <div v-if="aiResult" class="ai-answer-card">
              <div class="ai-badge">✨ AI-Powered Answer</div>
              <div class="ai-content" v-html="aiResult" />
            </div>

            <div v-if="isLoading" class="state-box">
              <div class="loading-spinner" aria-label="Loading"></div>
              Searching...
            </div>

            <div v-else-if="displayVideos.length === 0 && !aiResult && !isLoading" class="state-box empty-state">
              <p>No results found for <strong>"{{ searchSlug }}"</strong></p>
              <p class="empty-hint">Try searching with different keywords or browse our topics below.</p>
            </div>

            <p v-if="displayVideos.length > 0" class="result-count">{{ displayVideos.length }} result{{ displayVideos.length === 1 ? '' : 's' }} found</p>

            <div v-if="displayVideos.length > 0" class="results-grid">
              <div
                v-for="video in displayVideos"
                :key="video.id"
                class="result-card"
                @click="openResult(video)"
              >
                <div class="result-thumb">
                  <div
                    v-if="getPlayerEmbed(video)"
                    class="h-full w-full"
                    @click.stop
                  >
                    <InlineVideoPlayer
                      :title="getTitle(video)"
                      :poster="video.isTestimonial ? video.embeded_thumnail : video.thumbnail"
                      :embed="getPlayerEmbed(video)"
                      class="h-full w-full"
                      play-class="!left-auto !top-auto !bottom-[6px] !right-[6px] !h-[28px] !w-[28px] !translate-x-0 !translate-y-0 !rounded-[4px] !bg-black/70 !text-white !shadow-none"
                    />
                  </div>
                  <img
                    v-else
                    :alt="getTitle(video)"
                    :src="video.isTestimonial ? video.embeded_thumnail : video.thumbnail"
                    loading="lazy"
                  />
                </div>
                <div class="result-info">
                  <h3 class="result-title">{{ getTitle(video) }}</h3>
                  <p class="result-desc">{{ getDescription(video) }}</p>
                  <span class="result-type">{{ video.isTestimonial ? 'Testimonial' : 'Article' }}</span>
                </div>
              </div>
            </div>
          </div>

          <aside class="sidebar-col">
            <div v-if="otherCategories.length" class="sidebar-card">
              <h3>Related Topics</h3>
              <ul class="topic-list">
                <li v-for="cate in otherCategories" :key="cate.id" class="topic-item" @click="goTo('/categories/' + cate.slug)">
                  <span>{{ get(cate, `${locale}.name`) || cate.name }}</span>
                  <span class="topic-count">{{ (cate.answers || []).length }}</span>
                </li>
              </ul>
            </div>

            <div class="sidebar-card sidebar-cta">
              <h3>Browse All Topics</h3>
              <p>Explore our full library of resources on faith, life, and purpose.</p>
              <button type="button" class="browse-btn" @click="goTo('/categories/bible')">View All Topics →</button>
            </div>

            <div class="sidebar-card sidebar-cta">
              <h3>Need Personalized Help?</h3>
              <p>Connect with a mentor who can help answer your specific questions.</p>
              <button type="button" class="mentor-btn" @click="goTo('/pages/contact-truelife-org')">💬 Connect with a Mentor</button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div
        v-if="activeVideo"
        class="video-lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="closePlayer"
      >
        <div class="video-dialog">
          <button
            type="button"
            class="video-close"
            aria-label="Close video"
            @click="closePlayer"
          >
            ×
          </button>
          <div class="video-frame" v-html="getPlayerEmbed(activeVideo)" />
        </div>
      </div>
    </Teleport>

    <RedesignFooter />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { isEmpty, filter, includes, forEach, concat, take, orderBy, get } from 'lodash'
import { useStore } from 'vuex'
import { useAsyncData, useRoute, useRouter, useHead } from '#imports'
import { useI18n } from 'vue-i18n'
import RedesignFooter from '~/homepage-redesign/components/RedesignFooter.vue'
import RedesignTopNav from '~/homepage-redesign/components/RedesignTopNav.vue'
import IconMapPin from '~/components/icons/IconMapPin.vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import InlineVideoPlayer from '~/components/InlineVideoPlayer.vue'
import slug from '@/helpers/slug'
import ChurchsService from '@/services/ChurchsService'
import { buildHead, getMetadata } from '@/helpers/seo'

const route = useRoute()
const router = useRouter()
const store = useStore()
const { locale, t } = useI18n()

const newQuery = ref('')
const activeVideo = ref(null)

const LIST_LANG = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  ko: 'Korean',
}

const EMPTY_AI_STATE = {
  aiResult: null,
  fallbackSearchedVideo: [],
  fallbackOtherCategories: [],
}

function getSearchSlug() {
  return Array.isArray(route.params.slug)
    ? route.params.slug[0] || ''
    : route.params.slug || ''
}

const searchSlug = computed(() => getSearchSlug())

newQuery.value = getSearchSlug()

useHead(() =>
  buildHead({
    ...getMetadata('search-result'),
    title: `${t('label.searchResults')}: ${getSearchSlug()}`,
    path: route.path || '',
    locale: locale.value || 'en',
  })
)

function findVideos(listItems, categories, loc, searchWord) {
  const cateSearched = []
  const filteredVideos = []

  forEach(listItems, (item) => {
    if (
      !isEmpty(item.slug) &&
      (
        includes(item.slug, searchWord) ||
        includes(slug(get(item, `${loc}.description`)), searchWord) ||
        includes(slug(get(item, `${loc}.title`)), searchWord)
      )
    ) {
      if (!includes(cateSearched, item.cate)) {
        cateSearched.push(item.cate)
      }
      filteredVideos.push(item)
    }
  })

  return {
    searchedVideo: orderBy(filteredVideos, ['isVideo'], ['desc']),
    otherCategories: take(
      filter(categories, (item) => !includes(cateSearched, item.id)),
      4
    ),
  }
}

const searchState = useAsyncData(
  () => `search-redesign:${route.fullPath}:${locale.value}`,
  async () => {
    if (isEmpty(store.state.categories)) {
      await store.dispatch('fetchCategories')
    }

    const categories = store.state.categories || []
    const answers = store.state.answers || []
    const testimonials = store.state.testimonials || []
    const listItems = concat(answers, testimonials)
    const searchInfo = slug(getSearchSlug())

    let searchedVideo = []
    let otherCategories = take(categories, 4)

    if (!isEmpty(searchInfo)) {
      const found = findVideos(listItems, categories, locale.value, searchInfo)
      searchedVideo = found.searchedVideo
      otherCategories = found.otherCategories
    }

    return { searchedVideo, otherCategories }
  },
  { watch: [() => route.fullPath, () => locale.value] }
)

const aiState = useAsyncData(
  () => `search-redesign-ai:${route.fullPath}:${locale.value}`,
  async () => {
    if (isEmpty(store.state.categories)) {
      await store.dispatch('fetchCategories')
    }

    const searchText = getSearchSlug()
    if (isEmpty(searchText)) return EMPTY_AI_STATE

    const categories = store.state.categories || []
    const answers = store.state.answers || []
    const testimonials = store.state.testimonials || []
    const listItems = concat(answers, testimonials)

    try {
      const res = await ChurchsService.generate_answer({
        locale: LIST_LANG[locale.value] || LIST_LANG.en,
        question: searchText,
      })

      let aiResult = null
      let fallbackSearchedVideo = []
      let fallbackOtherCategories = []

      if (res.data?.result?.answer) {
        aiResult = res.data.result.answer.replace(/\n/g, '<br/>')
      }

      if (res.data?.result?.word) {
        const fallbackSearchWord = slug(res.data.result.word)
        const foundByAiWord = findVideos(listItems, categories, locale.value, fallbackSearchWord)
        fallbackSearchedVideo = foundByAiWord.searchedVideo
        fallbackOtherCategories = foundByAiWord.otherCategories
      }

      return { aiResult, fallbackSearchedVideo, fallbackOtherCategories }
    } catch (error) {
      console.log(error)
      return EMPTY_AI_STATE
    }
  },
  {
    server: false,
    lazy: true,
    default: () => EMPTY_AI_STATE,
    watch: [() => route.fullPath, () => locale.value],
  }
)

const searchedVideo = computed(() => {
  const directResults = searchState.data.value?.searchedVideo || []
  return directResults.length > 0 ? directResults : aiState.data.value?.fallbackSearchedVideo || []
})

const otherCategories = computed(() => {
  const directResults = searchState.data.value?.searchedVideo || []
  if (directResults.length > 0) return searchState.data.value?.otherCategories || []

  const fallbackCats = aiState.data.value?.fallbackOtherCategories || []
  return fallbackCats.length > 0 ? fallbackCats : searchState.data.value?.otherCategories || []
})

const aiResult = computed(() => aiState.data.value?.aiResult || null)

const isLoading = computed(() => searchState.pending?.value || aiState.pending?.value || false)

const displayVideos = computed(() =>
  filter(searchedVideo.value, (item) => !isEmpty(get(item, 'slug', '')))
)

function getTitle(video) {
  return get(video, `${locale.value}.title`) || video.title || ''
}

function getDescription(video) {
  const desc = get(video, `${locale.value}.description`, '') || ''
  const plain = desc.replace(/<[^>]+>/g, '')
  return plain.length > 120 ? plain.substring(0, 120) + '...' : plain
}

function localizedPathString(path) {
  const norm = String(path || '/').startsWith('/') ? String(path) : `/${path}`
  return locale.value === 'en' ? norm : `/${locale.value}${norm}`
}

function goTo(path) {
  const safe = path && String(path).startsWith('/') ? String(path) : '/'
  router.push({ path: localizedPathString(safe) })
}

function getPlayerEmbed(video) {
  return (
    get(video, `${locale.value}.playerembed`) ||
    video?.playerembed ||
    ''
  )
}

function openPlayer(video) {
  if (!getPlayerEmbed(video)) return
  activeVideo.value = video
}

function closePlayer() {
  activeVideo.value = null
}

function openResult(video) {
  if (!video || !video.slug) return
  const prefix = video.isTestimonial ? '/testimonials/' : '/answers/'
  goTo(prefix + video.slug)
}

function reSearch() {
  const q = (newQuery.value || '').trim()
  if (!q) return
  const encoded = encodeURIComponent(q)
  const path = locale.value === 'en' ? `/search-result/${encoded}` : `/${locale.value}/search-result/${encoded}`
  router.push({ path, query: { lang: locale.value } })
}
</script>

<style scoped>
.search-result-redesign {
  --accent: #7CB342;
  --accent-dark: #689F38;
  --dark-bg: #111C2C;
  --ink: #101828;
  --muted: #4A5565;
  font-family: 'Inter', Arial, sans-serif;
  color: var(--ink);
  background: #F9FAFB;
}

.search-hero {
  background: radial-gradient(circle at top left, #1D2A40 0%, #111C2C 58%, #0F1724 100%);
  padding: 52px 0 44px;
  color: #fff;
}

.hero-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 30px;
  text-align: center;
}

.search-heading {
  font-size: 36px;
  line-height: 44px;
  font-weight: 800;
  margin: 0 0 10px;
  letter-spacing: -0.6px;
}

.search-query-label {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 24px;
}

.search-query-label strong {
  color: #fff;
}

.search-form {
  display: flex;
  gap: 0;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 14px 18px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-right: none;
  border-radius: 8px 0 0 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  outline: none;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.15);
}

.search-submit {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  background: var(--accent);
  color: #fff;
  border: 2px solid var(--accent);
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  white-space: nowrap;
}

.search-submit:hover {
  background: var(--accent-dark);
  border-color: var(--accent-dark);
}

.results-body {
  padding: 32px 0 60px;
}

.body-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 30px;
}

.body-columns {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: start;
}

@media (min-width: 1024px) {
  .body-columns {
    grid-template-columns: 1fr 340px;
    gap: 28px;
  }

  .sidebar-col {
    position: sticky;
    top: 24px;
  }
}

.main-col {
  min-width: 0;
}

.ai-answer-card {
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.08);
}

.ai-badge {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  letter-spacing: 0.04em;
}

.ai-content {
  font-size: 15px;
  line-height: 1.7;
  color: var(--ink);
}

.state-box {
  text-align: center;
  padding: 40px 20px;
  color: var(--muted);
  font-size: 15px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 12px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-hint {
  color: #9ca3af;
  font-size: 14px;
  margin-top: 8px;
}

.result-count {
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  margin: 0 0 16px;
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.result-card {
  display: flex;
  gap: 16px;
  background: #fff;
  border: 1px solid #E0E5EB;
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
}

.result-card:hover {
  border-color: var(--accent);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.result-thumb {
  flex-shrink: 0;
  width: 160px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #f3f4f6;
}

.result-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-badge {
  position: absolute;
  bottom: 6px;
  right: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
}

.video-lightbox {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(16, 24, 40, 0.72);
}

.video-dialog {
  position: relative;
  width: min(920px, 100%);
  overflow: hidden;
  border-radius: 14px;
  background: #101828;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.video-close {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
  display: flex;
  height: 34px;
  width: 34px;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #101828;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
}

.video-frame {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video-frame :deep(iframe) {
  height: 100%;
  width: 100%;
  border: 0;
  display: block;
}

.result-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-title {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 6px;
  color: var(--ink);
  line-height: 1.3;
}

.result-desc {
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 8px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.result-type {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-dark);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

@media (max-width: 600px) {
  .result-card {
    flex-direction: column;
  }
  .result-thumb {
    width: 100%;
    height: 180px;
  }
}

.sidebar-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-card {
  background: #fff;
  border: 1px solid #E0E5EB;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.08);
}

.sidebar-card h3 {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 16px;
  color: var(--ink);
}

.topic-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e8eaed;
  cursor: pointer;
  font-size: 14px;
  color: var(--ink);
  transition: color 0.15s;
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-item:hover {
  color: var(--accent-dark);
}

.topic-count {
  background: #e8f5e9;
  color: var(--accent-dark);
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}

.sidebar-cta {
  background: #F0FDF4;
  border-color: #BBF7D0;
}

.sidebar-cta p {
  font-size: 14px;
  color: var(--muted);
  margin: 0 0 14px;
  line-height: 1.5;
}

.browse-btn,
.mentor-btn {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
}

@media (min-width: 1024px) {
  .search-hero {
    padding: 68px 0 58px;
  }

  .search-heading {
    font-size: 48px;
    line-height: 58px;
  }

  .results-body {
    padding: 56px 0 88px;
  }
}

@media (max-width: 600px) {
  .search-hero {
    padding: 44px 0 38px;
  }

  .hero-container,
  .body-container {
    padding: 0 30px;
  }

  .search-heading {
    font-size: 34px;
    line-height: 42px;
  }

  .search-form {
    flex-direction: column;
    gap: 12px;
  }

  .search-input {
    width: 100%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  .search-submit {
    width: 100%;
    border-radius: 10px;
  }

  .result-card {
    flex-direction: column;
  }

  .result-thumb {
    width: 100%;
    height: 180px;
  }
}

.browse-btn {
  background: var(--accent);
  color: #fff;
}

.browse-btn:hover {
  background: var(--accent-dark);
}

.mentor-btn {
  background: var(--dark-bg);
  color: #fff;
}

.mentor-btn:hover {
  background: #253048;
}

</style>
