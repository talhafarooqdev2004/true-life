<template>
  <main class="min-h-screen bg-[#ffffff] text-[#101828]">
    <RedesignTopNav @go="goTo" />

    <section class="bg-[#111C2D] px-[24px] py-[64px] text-white lg:px-[50px] lg:py-[86px]">
      <div class="mx-auto max-w-[1120px] lg:grid lg:grid-cols-[1fr_420px] lg:items-center lg:gap-[76px]">
        <div>
          <div
            class="inline-flex h-[34px] items-center gap-[8px] rounded-[10px] border border-[#7CB34266] bg-[#7CB34233] px-[16px] text-[12px] font-bold uppercase tracking-[0.08em] text-[#ffffff]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17L4 12"
                stroke="#7CB342"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Share Your Story
          </div>

          <h1
            class="mt-[24px] max-w-[720px] text-[42px] font-bold leading-[50px] tracking-[-0.04em] text-white lg:text-[64px] lg:leading-[70px]"
          >
            Tell us how TrueLife has helped you find hope.
          </h1>

          <p class="mt-[22px] max-w-[620px] text-[18px] leading-[30px] text-[#D1D5DB] lg:text-[20px] lg:leading-[32px]">
            Your story can encourage someone who is asking the same questions, carrying the same doubts, or looking for the same next step.
          </p>
        </div>

        <div class="mt-[40px] rounded-[18px] border border-white/10 bg-white/10 p-[22px] shadow-[0_24px_60px_rgba(0,0,0,0.24)] lg:mt-0 lg:p-[28px]">
          <div class="rounded-[14px] bg-white p-[20px] text-[#101828] lg:p-[24px]">
            <p class="text-[14px] font-bold uppercase tracking-[0.08em] text-[#7CB342]">
              Stories Matter
            </p>
            <p class="mt-[16px] text-[28px] font-bold leading-[34px] tracking-[-0.03em]">
              Real faith journeys help real people take their next step.
            </p>
            <div class="mt-[22px] grid grid-cols-3 gap-[10px]">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="rounded-[10px] bg-[#F3F4F6] px-[10px] py-[14px] text-center"
              >
                <strong class="block text-[20px] leading-none text-[#7CB342]">{{ stat.value }}</strong>
                <span class="mt-[7px] block text-[11px] leading-[14px] text-[#4A5565]">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F8FAFC] px-[24px] py-[64px] lg:px-[50px] lg:py-[92px]">
      <div class="mx-auto max-w-[1120px] lg:grid lg:grid-cols-[1fr_340px] lg:gap-[36px]">
        <form class="rounded-[18px] border border-[#E5E7EB] bg-white p-[22px] shadow-[0_12px_32px_rgba(16,24,40,0.08)] lg:p-[32px]">
          <div>
            <span
              class="inline-flex h-[34px] items-center rounded-[9px] bg-[#F3F4F6] px-[14px] text-[12px] font-bold uppercase tracking-[0.08em] text-[#364153]"
            >
              Story Details
            </span>
            <h2 class="mt-[18px] text-[30px] font-bold leading-[36px] tracking-[-0.04em] lg:text-[40px] lg:leading-[46px]">
              Share what happened
            </h2>
            <p class="mt-[12px] max-w-[640px] text-[16px] leading-[26px] text-[#4A5565]">
              Send your story to the TrueLife team. We will review it before any public use.
            </p>
          </div>

          <div class="mt-[30px] grid gap-[18px] lg:grid-cols-2">
            <label class="block">
              <span class="text-[14px] font-bold text-[#101828]">First name</span>
              <input
                type="text"
                class="mt-[8px] h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] text-[15px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="Your first name"
              />
            </label>

            <label class="block">
              <span class="text-[14px] font-bold text-[#101828]">Last name</span>
              <input
                type="text"
                class="mt-[8px] h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] text-[15px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="Your last name"
              />
            </label>

            <label class="block lg:col-span-2">
              <span class="text-[14px] font-bold text-[#101828]">Email address</span>
              <input
                type="email"
                class="mt-[8px] h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] text-[15px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="you@example.com"
              />
            </label>

            <label class="block lg:col-span-2">
              <span class="text-[14px] font-bold text-[#101828]">Story title</span>
              <input
                type="text"
                class="mt-[8px] h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] text-[15px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="A short title for your story"
              />
            </label>

            <label class="block lg:col-span-2">
              <span class="text-[14px] font-bold text-[#101828]">Your story</span>
              <textarea
                class="mt-[8px] min-h-[210px] w-full resize-y rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] py-[13px] text-[15px] leading-[24px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="Tell us what you were searching for, what helped, and what changed."
              ></textarea>
            </label>

            <label class="block lg:col-span-2">
              <span class="text-[14px] font-bold text-[#101828]">Church or city</span>
              <input
                type="text"
                class="mt-[8px] h-[48px] w-full rounded-[10px] border border-[#D1D5DB] bg-white px-[14px] text-[15px] text-[#101828] outline-none focus:border-[#7CB342] focus:ring-4 focus:ring-[#7CB3421F]"
                placeholder="Optional"
              />
            </label>
          </div>

          <div class="mt-[24px] rounded-[12px] border border-[#D9E7CC] bg-[#F5FAEF] p-[16px]">
            <label class="flex items-start gap-[12px]">
              <input
                type="checkbox"
                class="mt-[3px] h-[18px] w-[18px] rounded-[4px] border border-[#AFCB8F] accent-[#7CB342]"
              />
              <span class="text-[14px] leading-[22px] text-[#364153]">
                TrueLife may contact me about this story and ask permission before sharing it publicly.
              </span>
            </label>
          </div>

          <div class="mt-[28px] flex flex-col gap-[12px] sm:flex-row">
            <button
              type="button"
              class="flex h-[48px] items-center justify-center rounded-[10px] bg-[#7CB342] px-[24px] text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(124,179,66,0.28)]"
            >
              Submit Story
            </button>
            <NuxtLink
              to="/pages/contact-truelife-org"
              class="flex h-[48px] items-center justify-center rounded-[10px] border border-[#D1D5DB] bg-white px-[24px] text-[15px] font-bold text-[#101828]"
            >
              Contact Team
            </NuxtLink>
          </div>
        </form>

        <aside class="mt-[28px] space-y-[18px] lg:mt-0">
          <div class="rounded-[18px] border border-[#E5E7EB] bg-white p-[22px] shadow-[0_8px_24px_rgba(16,24,40,0.06)]">
            <h3 class="text-[20px] font-bold leading-[26px]">What to include</h3>
            <ul class="mt-[18px] space-y-[16px]">
              <li v-for="item in prompts" :key="item" class="flex gap-[10px] text-[14px] leading-[22px] text-[#4A5565]">
                <span class="mt-[6px] h-[8px] w-[8px] shrink-0 rounded-full bg-[#7CB342]"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="rounded-[18px] bg-[#111C2D] p-[22px] text-white shadow-[0_12px_32px_rgba(16,24,40,0.18)]">
            <h3 class="text-[20px] font-bold leading-[26px]">Before we publish</h3>
            <div class="mt-[18px] space-y-[14px]">
              <div v-for="step in reviewSteps" :key="step" class="flex items-start gap-[10px]">
                <span class="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#7CB342] text-[12px] font-bold text-white">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 8.2L6.5 11.2L12.8 4.8"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p class="text-[14px] leading-[22px] text-[#D1D5DB]">{{ step }}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="bg-white px-[24px] py-[64px] lg:px-[50px] lg:py-[86px]">
      <div class="mx-auto max-w-[1120px]">
        <div class="text-center">
          <span class="inline-flex h-[34px] items-center rounded-[9px] bg-[#F3F4F6] px-[14px] text-[12px] font-bold uppercase tracking-[0.08em] text-[#364153]">
            Story Impact
          </span>
          <h2 class="mx-auto mt-[18px] max-w-[760px] text-[30px] font-bold leading-[36px] tracking-[-0.04em] lg:text-[44px] lg:leading-[50px]">
            One honest story can make faith feel possible.
          </h2>
        </div>

        <div class="mt-[36px] grid gap-[18px] lg:grid-cols-3">
          <article
            v-for="card in impactCards"
            :key="card.title"
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[24px] shadow-[0_2px_8px_rgba(16,24,40,0.05)]"
          >
            <div class="flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-[#F2F8EC] text-[#7CB342]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path :d="card.icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="mt-[18px] text-[20px] font-bold leading-[26px]">{{ card.title }}</h3>
            <p class="mt-[10px] text-[15px] leading-[24px] text-[#4A5565]">{{ card.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <RedesignFooter />
  </main>
</template>

<script setup>
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import RedesignFooter from "~/components/RedesignFooter.vue";
import RedesignTopNav from "~/components/RedesignTopNav.vue";

const router = useRouter();
const { locale } = useI18n();

const stats = [
  { value: "500+", label: "Stories Shared" },
  { value: "70+", label: "Countries" },
  { value: "1M+", label: "People Reached" },
];

const prompts = [
  "What question or struggle brought you to TrueLife.",
  "Which resource, person, or truth helped you most.",
  "What changed in your faith, family, church, or daily life.",
  "What you would say to someone starting the same journey.",
];

const reviewSteps = [
  "A team member reviews every submission.",
  "We contact you before sharing your story publicly.",
  "Sensitive details can be edited or removed by request.",
];

const impactCards = [
  {
    title: "Encourage seekers",
    text: "Stories help people see that their questions are not unusual and that hope is possible.",
    icon: "M12 21C12 21 4 16.5 4 9.8C4 6.6 6.5 4.5 9.2 4.5C10.7 4.5 11.6 5.2 12 6C12.4 5.2 13.3 4.5 14.8 4.5C17.5 4.5 20 6.6 20 9.8C20 16.5 12 21 12 21Z",
  },
  {
    title: "Equip churches",
    text: "Your testimony can give pastors and leaders a clearer picture of how people are being helped.",
    icon: "M4 20V8L12 4L20 8V20M9 20V12H15V20",
  },
  {
    title: "Point to Jesus",
    text: "The best stories are not polished performances. They are honest reminders of God's grace.",
    icon: "M12 3V21M5 8H19",
  },
];

function goTo(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  const localizedPath =
    locale.value === "en" ? safePath : `/${locale.value}${safePath}`;
  router.push({ path: localizedPath });
}
</script>
