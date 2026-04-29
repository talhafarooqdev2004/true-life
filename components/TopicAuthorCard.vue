<template>
  <section
    class="rounded-[12px] border border-[#E0E5EB] bg-white px-[22px] py-[24px] shadow-[0_1px_3px_rgba(16,24,40,0.08)]"
  >
    <div class="grid grid-cols-[60px_1fr] gap-[16px]">
      <div
        class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#7CB342] text-[20px] font-extrabold text-white"
      >
        {{ author.initials }}
      </div>
      <div>
        <h3 :class="authorText.title">
          {{ author.name }}
        </h3>
        <p class="mt-[8px]" :class="authorText.body">
          {{ author.bio }}
        </p>
        <div
          class="mt-[14px] grid grid-cols-[1fr_8px_58px] gap-[12px] text-[14px] leading-[18px] text-[#667085] lg:flex lg:items-center lg:gap-[18px]"
        >
          <p>
            Updated:<br class="lg:hidden" />
            {{ author.updated }}
          </p>
          <span class="pt-[18px] text-center text-[16px] leading-none lg:pt-0">
            •
          </span>
          <p class="break-words">
            {{ author.views }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  author: {
    type: Object,
    required: true,
  },
});

const authorText = {
  title: "text-[18px] font-extrabold leading-[22px] text-[#111827]",
  body: "text-[14px] font-normal leading-[20px] text-[#4B5563]",
};
</script>
