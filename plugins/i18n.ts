import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    submit: 'Search',
    label: {
      searchResults: 'Search Results',
    },
    navbar: {
      freeCards: 'Free Cards',
      shareYourStory: 'Share Your Story',
      pastors: 'Pastors',
      about: 'About',
      findAChurch: 'Find a Church',
      title: {
        login: 'Login',
      },
    },
    redesign: {
      hero: {
        trustPill: 'Trusted by 5,000+ churches worldwide',
        heading: "Find answers to life's hard questions",
        subheading: "TrueLife.org provides free video answers to life's hardest questions, grounded in the truth of Jesus Christ.",
        searchLabel: 'Search the TrueLife library',
        searchPlaceholder: 'Ask about God, faith, or your life...',
        popular: 'Popular:',
        statQuestionsNum: '10M+',
        statQuestions: 'Questions Answered',
        statChurchesNum: '5K+',
        statChurches: 'Churches Connected',
        statSupportNum: '24/7',
        statSupport: 'Support Available',
      },
      topics: {
        badge: 'Featured Topics',
        heading: 'Browse by topic',
        desc: 'Explore a preview set of categories with enough sample content to test the redesign in the browser.',
        statCoreNum: '8',
        statCore: 'designed pages',
        statCoreDesc: 'already wired',
        statResourcesNum: '18',
        statResources: 'mock articles',
        statResourcesDesc: 'plus testimonials',
        statAccessNum: '4',
        statAccess: 'route groups',
        statAccessDesc: 'localized enabled',
        viewAll: 'View All',
        filterLabel: 'Filter by super category',
        allTopics: 'All topics',
        loading: 'Loading topics...',
        noMatch: 'No categories matched your search.',
      },
      cta: {
        cantFindHeading: 'Can’t find your topic?',
        cantFindDesc: 'Use the search experience or browse the full category list to test alternate navigation paths.',
        viewAllResources: 'View All Resources',
        searchQuestions: 'Search Questions',
        guidanceHeading: 'Need a next step?',
        guidanceDesc: 'This preview includes realistic paths for contacting support, finding churches, and exploring curated content.',
        connectMentor: 'Connect with a Mentor',
        browseResources: 'Browse Resources',
        findChurch: 'Find a Church',
      },
      footer: {
        tagline: "TrueLife.org provides free video answers to life's hardest questions, grounded in the truth of Jesus Christ.",
        churchesNear: 'Churches Near',
        churchesNearDesc: "Each church we list believes the promises with the message of Jesus. They'd love to be a part of your journey with God",
        resourcesHeading: 'Resources for Pastors',
        resourcesDesc: 'Our proven strategy takes 75% of church members from seekers to active, reproducing disciple of Christ.',
        getStarted: 'Get Started Kit',
        lifeCards: 'Life Cards + Leader Slide',
        reachOut: 'Reach Out',
        viewAllResources: 'View all pastor resources',
        contactUs: 'Contact Us',
        email: 'Email',
        locationPlaceholder: 'Enter your location',
        search: 'Search',
        copyright: '© 2006-2026 TrueLife.org • All rights reserved',
        legal: 'Terms & Privacy Policy • Contact Us',
      },
    },
  },
  es: {},
}

function humanizeMissing(key: string) {
  return key
    .split('.')
    .slice(-1)[0]
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    missingWarn: false,
    fallbackWarn: false,
    missing: (_locale, key) => humanizeMissing(key),
  })

  nuxtApp.vueApp.use(i18n)
  nuxtApp.provide('i18n', i18n.global)
})
