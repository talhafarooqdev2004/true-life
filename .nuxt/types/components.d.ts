
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  DashboardNavigation: typeof import("../../components/DashboardNavigation.vue")['default']
  InlineVideoPlayer: typeof import("../../components/InlineVideoPlayer.vue")['default']
  PlaceholderPage: typeof import("../../components/PlaceholderPage.vue")['default']
  PricingPage: typeof import("../../components/PricingPage.vue")['default']
  RedesignCategoryCard: typeof import("../../components/RedesignCategoryCard.vue")['default']
  RedesignFooter: typeof import("../../components/RedesignFooter.vue")['default']
  RedesignHero: typeof import("../../components/RedesignHero.vue")['default']
  RedesignPlaylistPanel: typeof import("../../components/RedesignPlaylistPanel.vue")['default']
  RedesignTopNav: typeof import("../../components/RedesignTopNav.vue")['default']
  RedesignTopicCard: typeof import("../../components/RedesignTopicCard.vue")['default']
  ScreenshotChromeFooter: typeof import("../../components/ScreenshotChromeFooter.vue")['default']
  ScreenshotChromeHeader: typeof import("../../components/ScreenshotChromeHeader.vue")['default']
  ThemeSiteFooter: typeof import("../../components/ThemeSiteFooter.vue")['default']
  ThemeSiteHeader: typeof import("../../components/ThemeSiteHeader.vue")['default']
  TopicAuthorCard: typeof import("../../components/TopicAuthorCard.vue")['default']
  TopicContentRenderer: typeof import("../../components/TopicContentRenderer.vue")['default']
  TopicSidebar: typeof import("../../components/TopicSidebar.vue")['default']
  TrueLifeAvailabilitySection: typeof import("../../components/TrueLifeAvailabilitySection.vue")['default']
  TrueLifeChurchPartnersSection: typeof import("../../components/TrueLifeChurchPartnersSection.vue")['default']
  TrueLifeDesignSection: typeof import("../../components/TrueLifeDesignSection.vue")['default']
  TrueLifeFearSection: typeof import("../../components/TrueLifeFearSection.vue")['default']
  TrueLifeFinalCtaSection: typeof import("../../components/TrueLifeFinalCtaSection.vue")['default']
  TrueLifeHeroSection: typeof import("../../components/TrueLifeHeroSection.vue")['default']
  TrueLifeRecentVideosSection: typeof import("../../components/TrueLifeRecentVideosSection.vue")['default']
  TrueLifeResourcesSection: typeof import("../../components/TrueLifeResourcesSection.vue")['default']
  TrueLifeSimpleProcessSection: typeof import("../../components/TrueLifeSimpleProcessSection.vue")['default']
  TrueLifeStoriesSection: typeof import("../../components/TrueLifeStoriesSection.vue")['default']
  TrueLifeVideoStoriesSection: typeof import("../../components/TrueLifeVideoStoriesSection.vue")['default']
  TrueLigeGrowthHero: typeof import("../../components/TrueLigeGrowthHero.vue")['default']
  VideoLibraryPage: typeof import("../../components/VideoLibraryPage.vue")['default']
  IconsIconBase: typeof import("../../components/icons/IconBase.vue")['default']
  IconsIconBook: typeof import("../../components/icons/IconBook.vue")['default']
  IconsIconBookOpen: typeof import("../../components/icons/IconBookOpen.vue")['default']
  IconsIconCheckSquare: typeof import("../../components/icons/IconCheckSquare.vue")['default']
  IconsIconChevronRight: typeof import("../../components/icons/IconChevronRight.vue")['default']
  IconsIconFilter: typeof import("../../components/icons/IconFilter.vue")['default']
  IconsIconGlobe: typeof import("../../components/icons/IconGlobe.vue")['default']
  IconsIconHeart: typeof import("../../components/icons/IconHeart.vue")['default']
  IconsIconMail: typeof import("../../components/icons/IconMail.vue")['default']
  IconsIconMapPin: typeof import("../../components/icons/IconMapPin.vue")['default']
  IconsIconMessageSquare: typeof import("../../components/icons/IconMessageSquare.vue")['default']
  IconsIconPhone: typeof import("../../components/icons/IconPhone.vue")['default']
  IconsIconPlay: typeof import("../../components/icons/IconPlay.vue")['default']
  IconsIconSearch: typeof import("../../components/icons/IconSearch.vue")['default']
  IconsIconSend: typeof import("../../components/icons/IconSend.vue")['default']
  IconsIconUsers: typeof import("../../components/icons/IconUsers.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyDashboardNavigation: LazyComponent<typeof import("../../components/DashboardNavigation.vue")['default']>
  LazyInlineVideoPlayer: LazyComponent<typeof import("../../components/InlineVideoPlayer.vue")['default']>
  LazyPlaceholderPage: LazyComponent<typeof import("../../components/PlaceholderPage.vue")['default']>
  LazyPricingPage: LazyComponent<typeof import("../../components/PricingPage.vue")['default']>
  LazyRedesignCategoryCard: LazyComponent<typeof import("../../components/RedesignCategoryCard.vue")['default']>
  LazyRedesignFooter: LazyComponent<typeof import("../../components/RedesignFooter.vue")['default']>
  LazyRedesignHero: LazyComponent<typeof import("../../components/RedesignHero.vue")['default']>
  LazyRedesignPlaylistPanel: LazyComponent<typeof import("../../components/RedesignPlaylistPanel.vue")['default']>
  LazyRedesignTopNav: LazyComponent<typeof import("../../components/RedesignTopNav.vue")['default']>
  LazyRedesignTopicCard: LazyComponent<typeof import("../../components/RedesignTopicCard.vue")['default']>
  LazyScreenshotChromeFooter: LazyComponent<typeof import("../../components/ScreenshotChromeFooter.vue")['default']>
  LazyScreenshotChromeHeader: LazyComponent<typeof import("../../components/ScreenshotChromeHeader.vue")['default']>
  LazyThemeSiteFooter: LazyComponent<typeof import("../../components/ThemeSiteFooter.vue")['default']>
  LazyThemeSiteHeader: LazyComponent<typeof import("../../components/ThemeSiteHeader.vue")['default']>
  LazyTopicAuthorCard: LazyComponent<typeof import("../../components/TopicAuthorCard.vue")['default']>
  LazyTopicContentRenderer: LazyComponent<typeof import("../../components/TopicContentRenderer.vue")['default']>
  LazyTopicSidebar: LazyComponent<typeof import("../../components/TopicSidebar.vue")['default']>
  LazyTrueLifeAvailabilitySection: LazyComponent<typeof import("../../components/TrueLifeAvailabilitySection.vue")['default']>
  LazyTrueLifeChurchPartnersSection: LazyComponent<typeof import("../../components/TrueLifeChurchPartnersSection.vue")['default']>
  LazyTrueLifeDesignSection: LazyComponent<typeof import("../../components/TrueLifeDesignSection.vue")['default']>
  LazyTrueLifeFearSection: LazyComponent<typeof import("../../components/TrueLifeFearSection.vue")['default']>
  LazyTrueLifeFinalCtaSection: LazyComponent<typeof import("../../components/TrueLifeFinalCtaSection.vue")['default']>
  LazyTrueLifeHeroSection: LazyComponent<typeof import("../../components/TrueLifeHeroSection.vue")['default']>
  LazyTrueLifeRecentVideosSection: LazyComponent<typeof import("../../components/TrueLifeRecentVideosSection.vue")['default']>
  LazyTrueLifeResourcesSection: LazyComponent<typeof import("../../components/TrueLifeResourcesSection.vue")['default']>
  LazyTrueLifeSimpleProcessSection: LazyComponent<typeof import("../../components/TrueLifeSimpleProcessSection.vue")['default']>
  LazyTrueLifeStoriesSection: LazyComponent<typeof import("../../components/TrueLifeStoriesSection.vue")['default']>
  LazyTrueLifeVideoStoriesSection: LazyComponent<typeof import("../../components/TrueLifeVideoStoriesSection.vue")['default']>
  LazyTrueLigeGrowthHero: LazyComponent<typeof import("../../components/TrueLigeGrowthHero.vue")['default']>
  LazyVideoLibraryPage: LazyComponent<typeof import("../../components/VideoLibraryPage.vue")['default']>
  LazyIconsIconBase: LazyComponent<typeof import("../../components/icons/IconBase.vue")['default']>
  LazyIconsIconBook: LazyComponent<typeof import("../../components/icons/IconBook.vue")['default']>
  LazyIconsIconBookOpen: LazyComponent<typeof import("../../components/icons/IconBookOpen.vue")['default']>
  LazyIconsIconCheckSquare: LazyComponent<typeof import("../../components/icons/IconCheckSquare.vue")['default']>
  LazyIconsIconChevronRight: LazyComponent<typeof import("../../components/icons/IconChevronRight.vue")['default']>
  LazyIconsIconFilter: LazyComponent<typeof import("../../components/icons/IconFilter.vue")['default']>
  LazyIconsIconGlobe: LazyComponent<typeof import("../../components/icons/IconGlobe.vue")['default']>
  LazyIconsIconHeart: LazyComponent<typeof import("../../components/icons/IconHeart.vue")['default']>
  LazyIconsIconMail: LazyComponent<typeof import("../../components/icons/IconMail.vue")['default']>
  LazyIconsIconMapPin: LazyComponent<typeof import("../../components/icons/IconMapPin.vue")['default']>
  LazyIconsIconMessageSquare: LazyComponent<typeof import("../../components/icons/IconMessageSquare.vue")['default']>
  LazyIconsIconPhone: LazyComponent<typeof import("../../components/icons/IconPhone.vue")['default']>
  LazyIconsIconPlay: LazyComponent<typeof import("../../components/icons/IconPlay.vue")['default']>
  LazyIconsIconSearch: LazyComponent<typeof import("../../components/icons/IconSearch.vue")['default']>
  LazyIconsIconSend: LazyComponent<typeof import("../../components/icons/IconSend.vue")['default']>
  LazyIconsIconUsers: LazyComponent<typeof import("../../components/icons/IconUsers.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
