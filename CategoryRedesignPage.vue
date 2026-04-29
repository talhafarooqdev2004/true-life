<template>
  <main class="min-h-screen bg-white text-[#101828]">
    <RedesignTopNav @go="goTo" />

    <section
      class="relative flex h-[242px] items-center justify-center overflow-hidden bg-[#101828] lg:h-[370px]"
      :style="bannerBg"
    >
      <div class="absolute inset-0 bg-black/55 lg:bg-black/45"></div>

      <h1
        class="relative z-10 w-[60%] max-w-[320px] text-center text-[36px] font-bold leading-[45px] tracking-[-0.035em] text-white lg:w-auto lg:max-w-none lg:text-[72px] lg:leading-[90px]"
      >
        {{ bannerTitle || "The truth about Bible" }}
      </h1>
    </section>

    <section
      v-if="!isEmpty(categoryInfo)"
      class="px-[32px] pt-[25px] pb-[40px] lg:px-0 lg:pt-[64px] lg:pb-[110px]"
    >
      <div class="mx-auto max-w-[352px] lg:max-w-[1330px]">
        <div class="lg:grid lg:grid-cols-[1fr_380px] lg:gap-x-[42px]">
          <div class="lg:min-w-0">
            <nav
              class="mb-[24px] flex items-center text-[12px] font-medium leading-[16px] text-[#667085] lg:mb-[28px]"
              aria-label="Breadcrumb"
            >
              <button type="button" class="uppercase" @click="goTo('/')">
                TRUELIFE.ORG
              </button>
              <span>/</span>
              <span class="uppercase text-[#101828]">
                {{ getCategoryName || "BIBLE" }}
              </span>
            </nav>

            <h2
              class="mb-[24px] text-[26px] font-extrabold leading-[31px] tracking-[-0.035em] text-[#101828] lg:mb-[28px] lg:text-[36px] lg:leading-[40px]"
            >
              {{
                get(answerInfo, `${locale}.title`) ||
                "How Did We Get the Old Testament?"
              }}
            </h2>

            <InlineVideoPlayer
              :title="get(answerInfo, `${locale}.title`) || answerInfo.title"
              :poster="answerInfo.thumbnail || fallbackVideoThumb"
              :embed="categoryPlayerEmbed"
              class="mb-[24px] h-[182px] rounded-[10px] lg:mb-[24px] lg:h-[500px] lg:rounded-[10px]"
              play-class="!h-[64px] !w-[64px] !bg-[#7CB342] !text-white"
            >
              <template #overlay>
                <div
                  v-if="answerInfo.host_name || true"
                  class="absolute bottom-[13px] left-[13px] rounded-[8px] bg-[#101828]/90 px-[15px] py-[10px] lg:bottom-[22px] lg:left-[22px] lg:px-[16px] lg:py-[12px]"
                >
                  <p class="m-0 text-[12px] leading-[18px] text-[#99A1AF]">
                    Host
                  </p>
                  <p
                    class="m-0 text-[14px] font-extrabold leading-[20px] text-white"
                  >
                    {{ answerInfo.host_name || "Joshua Whitaker" }}
                  </p>
                  <p
                    class="m-0 text-[12px] font-extrabold leading-[18px] text-[#7CB342]"
                  >
                    TRUELIFE HOST
                  </p>
                </div>
              </template>
            </InlineVideoPlayer>

            <div
              class="mb-[24px] flex items-center gap-[8px] lg:mb-[32px] lg:gap-[10px]"
            >
              <button
                type="button"
                class="flex h-[36px] flex-1 items-center justify-center gap-[10px] rounded-[10px] bg-[#1877F2] text-[15px] font-bold text-white shadow-[0_5px_14px_rgba(24,119,242,0.28)] lg:h-[40px] lg:max-w-[110px] lg:text-[13px]"
                @click="shareFacebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_129_57)">
                    <path
                      d="M14.994 1.66602H12.495C11.3904 1.66602 10.331 2.10483 9.54995 2.88591C8.76886 3.667 8.33005 4.72638 8.33005 5.83101V8.33H5.83105V11.662H8.33005V18.326H11.662V11.662H14.161L14.994 8.33H11.662V5.83101C11.662 5.61008 11.7498 5.39821 11.906 5.24199C12.0622 5.08577 12.2741 4.99801 12.495 4.99801H14.994V1.66602Z"
                      fill="white"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_57">
                      <rect width="19.992" height="19.992" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                Share
              </button>

              <button
                type="button"
                class="flex h-[36px] flex-1 items-center justify-center gap-[10px] rounded-[7px] bg-[#4A5565] text-[15px] font-bold text-white shadow-[0_5px_14px_rgba(74,85,101,0.25)] lg:h-[40px] lg:max-w-[110px] lg:text-[13px]"
                @click="shareEmail"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_129_61)">
                    <path
                      d="M16.66 3.33203H3.33201C2.41191 3.33203 1.66602 4.07792 1.66602 4.99803V14.994C1.66602 15.9141 2.41191 16.66 3.33201 16.66H16.66C17.5801 16.66 18.326 15.9141 18.326 14.994V4.99803C18.326 4.07792 17.5801 3.33203 16.66 3.33203Z"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.326 5.83093L10.854 10.579C10.5968 10.7401 10.2995 10.8256 9.996 10.8256C9.69253 10.8256 9.39518 10.7401 9.13801 10.579L1.66602 5.83093"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_61">
                      <rect width="19.992" height="19.992" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                Email
              </button>

              <button
                type="button"
                class="flex h-[36px] flex-1 items-center justify-center gap-[10px] rounded-[7px] bg-[#7CB342] text-[15px] font-bold text-white shadow-[0_5px_14px_rgba(124,179,66,0.28)] lg:h-[40px] lg:max-w-[110px] lg:text-[13px]"
                @click="shareGeneric"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_129_66)">
                    <path
                      d="M14.9941 6.66401C16.3743 6.66401 17.4931 5.54517 17.4931 4.16501C17.4931 2.78485 16.3743 1.66602 14.9941 1.66602C13.614 1.66602 12.4951 2.78485 12.4951 4.16501C12.4951 5.54517 13.614 6.66401 14.9941 6.66401Z"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.99802 12.4949C6.37818 12.4949 7.49701 11.3761 7.49701 9.99594C7.49701 8.61579 6.37818 7.49695 4.99802 7.49695C3.61786 7.49695 2.49902 8.61579 2.49902 9.99594C2.49902 11.3761 3.61786 12.4949 4.99802 12.4949Z"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.9941 18.326C16.3743 18.326 17.4931 17.2072 17.4931 15.827C17.4931 14.4468 16.3743 13.328 14.9941 13.328C13.614 13.328 12.4951 14.4468 12.4951 15.827C12.4951 17.2072 13.614 18.326 14.9941 18.326Z"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.15527 11.2538L12.8447 14.5691"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.8363 5.42285L7.15527 8.73819"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_129_66">
                      <rect width="19.992" height="19.992" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                Share
              </button>
            </div>

            <article
              class="answer-body text-[16px] leading-[26px] text-[#364153] lg:text-[18px] lg:leading-[29.5px]"
              v-html="articleHtml"
            ></article>
          </div>

          <aside class="mt-[28px] lg:mt-[0] lg:pt-[38px]">
            <div
              class="flex h-[50px] items-center rounded-[8px] border border-[#D1D5DC] bg-white ps-[15px] pe-[8px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] lg:h-[50px]"
            >
              <input
                v-model="sidebarQuery"
                type="text"
                placeholder="Search for more answers..."
                class="min-w-0 flex-1 border-0 bg-transparent text-[16px] text-[#101828] outline-none placeholder:text-[#8A94A6] lg:text-[13px]"
                @keyup.enter="doSearch"
              />
              <button
                type="button"
                class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8px] bg-[#7CB342] text-white"
                @click="doSearch"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.3323 12.6642C10.2772 12.6642 12.6646 10.2769 12.6646 7.33193C12.6646 4.38699 10.2772 1.99963 7.3323 1.99963C4.38735 1.99963 2 4.38699 2 7.33193C2 10.2769 4.38735 12.6642 7.3323 12.6642Z"
                    stroke="white"
                    stroke-width="1.33307"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.997 13.9973L11.1309 11.1312"
                    stroke="white"
                    stroke-width="1.33307"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div
              class="mt-[24px] rounded-[14px] bg-white p-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] lg:mt-[28px] lg:p-[20px] lg:shadow-[0_12px_32px_rgba(16,24,40,0.10)]"
            >
              <h3
                class="mb-[20px] text-[20px] font-bold leading-[28px] tracking-[-0.03em] text-[#101828] lg:mb-[26px] lg:text-[24px] lg:leading-[28px]"
              >
                Featured content
              </h3>

              <ul class="space-y-[20px] lg:space-y-[28px]">
                <li
                  v-for="item in displayFeaturedArticles"
                  :key="item.id"
                  class="flex cursor-pointer items-start gap-[12px] lg:gap-[14px]"
                  @click="openArticle(item)"
                >
                  <div
                    class="relative h-[63px] w-[78px] shrink-0 overflow-hidden rounded-[8px] bg-[#A3A7AD] lg:h-[65px] lg:w-[80px]"
                    @click.stop
                  >
                    <InlineVideoPlayer
                      :title="get(item, locale + '.title') || item.title"
                      :poster="item.thumbnail"
                      :embed="getFeaturedPlayerEmbed(item)"
                      class="h-full w-full"
                      play-class="!h-[28px] !w-[28px] !bg-white !text-[#101828] lg:!h-[25px] lg:!w-[25px]"
                    />
                  </div>

                  <p
                    class="m-0 flex-1 text-[12px] font-semibold leading-[16.5px] text-[#101828] lg:text-[14px] lg:leading-[19.5px]"
                  >
                    {{ get(item, `${locale}.title`) || item.title }}
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <Teleport to="body">
      <div
        v-if="activeFeaturedVideo"
        class="fixed inset-0 z-[10000] flex items-center justify-center bg-[#101828]/75 p-[24px]"
        role="dialog"
        aria-modal="true"
        @click.self="closeFeaturedVideo"
      >
        <div
          class="relative w-full max-w-[920px] overflow-hidden rounded-[14px] bg-[#101828] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          <button
            type="button"
            class="absolute right-[10px] top-[10px] z-[2] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/95 text-[24px] leading-none text-[#101828]"
            aria-label="Close video"
            @click="closeFeaturedVideo"
          >
            ×
          </button>
          <div
            class="aspect-video w-full [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0"
            v-html="getFeaturedPlayerEmbed(activeFeaturedVideo)"
          />
        </div>
      </div>
    </Teleport>
    <RedesignFooter />
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { isEmpty, upperCase, get, find, filter, orderBy } from "lodash";
import { useStore } from "vuex";
import { useAsyncData, useRoute, useRouter } from "#imports";
import { useI18n } from "vue-i18n";
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { locale } = useI18n();

const sidebarQuery = ref("");
const activeFeaturedVideo = ref(null);

const fallbackBanner =
  "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1600&q=80";

const fallbackVideoThumb =
  "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=1200&q=80";

const ensureCategoriesLoaded = async () => {
  if (isEmpty(store.state.categories)) {
    await store.dispatch("fetchCategories");
  }
};

const categoryState = useAsyncData(
  () => `cat-redesign:${route.params.slug || ""}:${locale.value || "en"}`,
  async () => {
    try {
      await ensureCategoriesLoaded();
    } catch (e) {
      console.error(e);
      return { categoryInfo: {}, answerInfo: {} };
    }

    const slug = route.params.slug || "";
    if (!slug) return { categoryInfo: {}, answerInfo: {} };

    const categories = store.state.categories || [];
    const category = find(categories, (c) => c.slug === slug) || {};

    const featured = !isEmpty(category)
      ? orderBy(
          filter(
            get(category, "answers", []),
            (a) =>
              !!get(a, "en.title") &&
              typeof a.slug === "string" &&
              a.slug.trim().length > 0,
          ),
          ["playerembed"],
          ["desc"],
        )
      : [];

    return { categoryInfo: category, answerInfo: featured[0] || {} };
  },
  { watch: [() => route.params.slug, () => locale.value] },
);

const categoryInfo = computed(
  () => categoryState.data.value?.categoryInfo || {},
);

const answerInfo = computed(() => categoryState.data.value?.answerInfo || {});

const fallbackPlayerEmbed = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/M7lc1UVf-VE" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const categoryPlayerEmbed = computed(
  () =>
    get(answerInfo.value, `${locale.value}.playerembed`) ||
    answerInfo.value.playerembed ||
    fallbackPlayerEmbed,
);

const bannerBg = computed(() => {
  const bg = categoryInfo.value.background || fallbackBanner;
  return {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
});

const bannerTitle = computed(() => {
  const name =
    get(categoryInfo.value, `${locale.value}.name`) ||
    categoryInfo.value.name ||
    "Bible";

  return name ? `The truth about ${name}` : "The truth about Bible";
});

const getCategoryName = computed(() =>
  upperCase(get(categoryInfo.value, `${locale.value}.name`) || "BIBLE"),
);

const getLocalizedDescriptionHtml = computed(() => {
  const desc = get(answerInfo.value, `${locale.value}.description`, "") || "";
  return rewriteCmsInternalLinks(desc);
});

const defaultArticleHtml = `
  <p>The Old Testament is the most widely read book in all the world, yet few people know its origin. Join TrueLife host Joshua Whitaker as he eloquently guides this meaningful discussion with Dr. Shawn Madden and Dr. Mark Rooker, who are both Old Testament Professors at Southeastern Seminary in Wake Forest, North Carolina.</p>

  <p>Are you ready to find out what true life is? If you are, please <a href="#">click here</a>.</p>

  <p>The Old Testament is the most widely read book in all the world, yet few people know its origin. Join TrueLife host Joshua Whitaker as he eloquently guides this meaningful discussion with Dr. Shawn Madden and Dr. Mark Rooker, who are both Old Testament Professors at Southeastern Seminary in Wake Forest, North Carolina.</p>

  <p>If you would like to learn more from <a href="#">Dr. Mark Rooker</a> and <a href="#">Dr. Shawn Madden</a>, you can at <a href="#">Southeastern Baptist Theological Seminary</a>.</p>

  <p>TrueLife.org would be more than happy to help introduce you to a pastor so you can experience the great blessing of being in a church family. Please use our <a href="#">Church Finder</a> to easily locate and email a pastor near you.</p>
`;

const articleHtml = computed(() => {
  return getLocalizedDescriptionHtml.value || defaultArticleHtml;
});

const featuredArticles = computed(() =>
  orderBy(
    filter(
      get(categoryInfo.value, "answers", []),
      (a) =>
        !!get(a, `${locale.value}.title`) &&
        typeof a.slug === "string" &&
        a.slug.trim().length > 0,
    ),
    ["playerembed"],
    ["desc"],
  ),
);

const fallbackFeaturedArticles = [
  {
    id: 1,
    title: "How Did We Get the Old Testament?",
    thumbnail: fallbackVideoThumb,
    slug: "how-did-we-get-the-old-testament",
  },
  {
    id: 2,
    title: "Are Errors in the Bible?",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
    slug: "are-errors-in-the-bible",
  },
  {
    id: 3,
    title: "Are the Gospels Accurate?",
    thumbnail:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=300&q=80",
    slug: "are-the-gospels-accurate",
  },
  {
    id: 4,
    title: "How Did We Get the New Testament?",
    thumbnail:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=300&q=80",
    slug: "how-did-we-get-the-new-testament",
  },
  {
    id: 5,
    title: "Transcript: How Did We Get the New Testament?",
    thumbnail:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=300&q=80",
    slug: "transcript-how-did-we-get-the-new-testament",
  },
  {
    id: 6,
    title: "Is the Bible True?",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
    slug: "is-the-bible-true",
  },
  {
    id: 7,
    title: "Why Believe the Bible?",
    thumbnail:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=300&q=80",
    slug: "why-believe-the-bible",
  },
  {
    id: 8,
    title: "Transcript: Are Errors in the Bible?",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80",
    slug: "transcript-are-errors-in-the-bible",
  },
  {
    id: 9,
    title: "The Synoptic Problem",
    thumbnail:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=300&q=80",
    slug: "the-synoptic-problem",
  },
  {
    id: 10,
    title:
      "Did the New Testament authors regard their own writings as Scripture?",
    thumbnail:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80",
    slug: "did-the-new-testament-authors-regard-their-own-writings-as-scripture",
  },
  {
    id: 11,
    title: "Sermon: What Did Jesus Believe About the Bible? (Matthew 5:17-18)",
    thumbnail:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=300&q=80",
    slug: "sermon-what-did-jesus-believe-about-the-bible",
  },
];

const displayFeaturedArticles = computed(() => {
  return featuredArticles.value.length
    ? featuredArticles.value
    : fallbackFeaturedArticles;
});

function localizedPathString(path) {
  const raw = String(path || "").trim();
  const norm = raw.startsWith("/") ? raw : `/${raw}`;
  if (locale.value === "en") return norm;
  if (norm === `/${locale.value}` || norm.startsWith(`/${locale.value}/`)) {
    return norm;
  }
  return `/${locale.value}${norm}`;
}

function rewriteCmsHref(href) {
  if (typeof href !== "string") return href;

  const trimmed = href.trim();
  if (!/^https?:\/\//i.test(trimmed)) return trimmed;

  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch {
    return trimmed;
  }

  const host = (parsed.hostname || "").toLowerCase();
  if (host !== "truelife.org" && host !== "www.truelife.org") return trimmed;

  return localizedPathString(
    `${parsed.pathname || "/"}${parsed.search || ""}${parsed.hash || ""}`,
  );
}

function rewriteCmsInternalLinks(html) {
  if (typeof html !== "string" || !html.length) return "";
  return html.replace(
    /(<a\b[^>]*\bhref\s*=\s*["'])([^"']+)(["'])/gi,
    (_m, pre, val, suf) => `${pre}${rewriteCmsHref(val)}${suf}`,
  );
}

function getFeaturedPlayerEmbed(item) {
  return (
    get(item, `${locale.value}.playerembed`) ||
    item?.playerembed ||
    fallbackPlayerEmbed
  );
}

function openFeaturedVideo(item) {
  activeFeaturedVideo.value = item;
}

function closeFeaturedVideo() {
  activeFeaturedVideo.value = null;
}

function goTo(path) {
  const safe = path && String(path).startsWith("/") ? String(path) : "/";
  const loc = locale.value === "en" ? safe : `/${locale.value}${safe}`;
  router.push({ path: loc });
}

function openArticle(item) {
  if (!item || !item.slug) return;
  goTo(`/answers/${item.slug}`);
}

function doSearch() {
  const q = (sidebarQuery.value || "").trim();
  if (q) goTo(`/search?q=${encodeURIComponent(q)}`);
}

function shareFacebook() {
  if (!process.client) return;
  const url = encodeURIComponent(window.location.href);
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function shareEmail() {
  if (!process.client) return;
  const subj = encodeURIComponent(
    get(answerInfo.value, `${locale.value}.title`) ||
      "How Did We Get the Old Testament?",
  );
  const body = encodeURIComponent(window.location.href);
  window.location.href = `mailto:?subject=${subj}&body=${body}`;
}

function shareGeneric() {
  if (!process.client) return;
  if (navigator.share) {
    navigator
      .share({
        title:
          get(answerInfo.value, `${locale.value}.title`) ||
          "How Did We Get the Old Testament?",
        url: window.location.href,
      })
      .catch(() => {});
  }
}
</script>

<style scoped>
.answer-body :deep(p) {
  margin: 0 0 27px;
}

.answer-body :deep(a) {
  color: #7cb342;
  font-weight: 700;
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .answer-body :deep(p) {
    margin: 0 0 24px;
  }
}
</style>
