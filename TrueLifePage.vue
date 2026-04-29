<template>
  <main class="min-h-screen bg-[#ffffff]">
    <RedesignTopNav @go="goTo" />
    <TrueLifeHeroSection />
    <TrueLifeFearSection />
    <TrueLifeDesignSection />
    <TrueLifeStoriesSection />
    <TrueLifeVideoStoriesSection />
    <TrueLifeSimpleProcessSection />
    <TrueLifeAvailabilitySection />
    <TrueLifeRecentVideosSection />
    <TrueLifeResourcesSection />
    <TrueLifeChurchPartnersSection />
    <TrueLifeFinalCtaSection />
    <RedesignFooter />
  </main>
</template>

<script setup>
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import RedesignFooter from "~/components/RedesignFooter.vue";
import RedesignTopNav from "~/components/RedesignTopNav.vue";
import TrueLifeHeroSection from "~/components/TrueLifeHeroSection.vue";
import TrueLifeFearSection from "~/components/TrueLifeFearSection.vue";
import TrueLifeDesignSection from "~/components/TrueLifeDesignSection.vue";
import TrueLifeStoriesSection from "~/components/TrueLifeStoriesSection.vue";
import TrueLifeVideoStoriesSection from "~/components/TrueLifeVideoStoriesSection.vue";
import TrueLifeSimpleProcessSection from "~/components/TrueLifeSimpleProcessSection.vue";
import TrueLifeAvailabilitySection from "~/components/TrueLifeAvailabilitySection.vue";
import TrueLifeRecentVideosSection from "~/components/TrueLifeRecentVideosSection.vue";
import TrueLifeResourcesSection from "~/components/TrueLifeResourcesSection.vue";
import TrueLifeChurchPartnersSection from "~/components/TrueLifeChurchPartnersSection.vue";
import TrueLifeFinalCtaSection from "~/components/TrueLifeFinalCtaSection.vue";

const router = useRouter();
const { locale } = useI18n();

function goTo(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  const localizedPath =
    locale.value === "en" ? safePath : `/${locale.value}${safePath}`;
  router.push({ path: localizedPath });
}
</script>
