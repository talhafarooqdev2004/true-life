<template>
  <aside class="mx-auto mt-[30px] w-full max-w-[412px] space-y-[24px] lg:sticky lg:top-[24px] lg:mt-0 lg:max-w-none">
    <TopicAuthorCard :author="author" class="lg:hidden" />

    <section
      class="rounded-[14px] border border-[#E0E5EB] bg-white px-[30px] pb-[34px] pt-[30px] shadow-[0_2px_4px_rgba(16,24,40,0.08)] lg:rounded-[12px] lg:px-[23px] lg:py-[24px]"
    >
      <div class="flex items-center gap-[13px]">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path
            d="M6.41699 2.75H15.5837V19.25H6.41699V2.75Z"
            stroke="#7CB342"
            stroke-width="1.83333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.41699 15.5833H15.5837"
            stroke="#7CB342"
            stroke-width="1.83333"
            stroke-linecap="round"
          />
        </svg>
        <h3 :class="sidebarText.tocTitle">
          Table of Contents
        </h3>
      </div>

      <nav class="mt-[26px] space-y-[12px]">
        <a
          v-for="item in contents"
          :key="item.label"
          :href="item.href"
          class="block rounded-[10px] px-[16px] py-[9px] text-[14px] font-normal leading-[20px] text-[#4B5563] lg:rounded-[8px] lg:px-[12px] lg:py-[8px] lg:leading-[19px]"
          :class="item.active ? 'bg-[#7CB342] !font-bold !text-white' : ''"
        >
          {{ item.label }}
        </a>
      </nav>
    </section>

    <section
      class="rounded-[12px] border border-[#E0E5EB] bg-white px-[22px] py-[25px] shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
    >
      <h3 :class="sidebarText.title">
        Related Topics
      </h3>

      <div class="mt-[24px] space-y-[26px]">
        <NuxtLink
          v-for="topic in relatedTopics"
          :key="topic.title"
          :to="topic.href"
          class="grid grid-cols-[45px_1fr_16px] items-center gap-[14px]"
        >
          <img
            :src="topic.image"
            :alt="topic.title"
            class="h-[45px] w-[45px] rounded-[8px] object-cover"
          />
          <span :class="sidebarText.relatedTitle">
            {{ topic.title }}
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3.5L10.5 8L6 12.5"
              stroke="#98A2B3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <section class="rounded-[11px] bg-[#111C2C] px-[24px] py-[27px] text-white">
      <h3 :class="sidebarText.darkTitle">Have Questions?</h3>
      <p class="mt-[16px]" :class="sidebarText.darkBody">
        Search our extensive library for answers to your spiritual questions.
      </p>
      <form
        class="mt-[14px] flex h-[44px] rounded-[8px] border border-[#475467] bg-[#344054] p-[3px]"
        @submit.prevent
      >
        <input
          type="text"
          placeholder="Search questions..."
          class="min-w-0 flex-1 bg-transparent px-[11px] text-[14px] text-white outline-none placeholder:text-[#98A2B3]"
        />
        <button
          type="submit"
          aria-label="Search questions"
          class="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[7px] bg-[#7CB342]"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.75 15.75L12.4875 12.4875"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>
    </section>
  </aside>
</template>

<script setup>
defineProps({
  author: {
    type: Object,
    required: true,
  },
  contents: {
    type: Array,
    required: true,
  },
  relatedTopics: {
    type: Array,
    required: true,
  },
});

const sidebarText = {
  tocTitle: "text-[18px] font-extrabold leading-[22px] text-[#111827]",
  title: "text-[18px] font-extrabold leading-[22px] text-[#111827]",
  body: "text-[14px] font-normal leading-[20px] text-[#4B5563]",
  relatedTitle: "text-[14px] font-extrabold leading-[18px] text-[#111827]",
  darkTitle: "text-[18px] font-extrabold leading-[22px] text-white",
  darkBody: "text-[14px] font-normal leading-[20px] text-[#D1D5DB]",
};
</script>
