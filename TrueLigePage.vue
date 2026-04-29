<template>
  <main class="min-h-screen bg-[#101828]">
    <RedesignTopNav @go="goTo" />
    <TrueLigeGrowthHero />
    <RedesignFooter />
  </main>
</template>

<script setup>
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import RedesignFooter from "~/components/RedesignFooter.vue";
import RedesignTopNav from "~/components/RedesignTopNav.vue";
import TrueLigeGrowthHero from "~/components/TrueLigeGrowthHero.vue";

const router = useRouter();
const { locale } = useI18n();

function goTo(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  const localizedPath =
    locale.value === "en" ? safePath : `/${locale.value}${safePath}`;
  router.push({ path: localizedPath });
}
</script>
