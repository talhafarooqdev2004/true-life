<template>
  <article
    class="mx-auto w-full max-w-[332px] rounded-[14px] border border-[#E0E5EB] bg-white px-[24px] pb-[62px] pt-[25px] shadow-[0_1px_3px_rgba(16,24,40,0.05)] lg:max-w-[760px] lg:px-[48px]"
  >
    <template v-for="(block, index) in blocks" :key="index">
      <div
        v-if="block.type === 'paragraphs'"
        :id="block.id"
        class="space-y-[28px]"
        :class="index === 0 ? '' : 'mt-[27px]'"
      >
        <p
          v-for="paragraph in block.items"
          :key="paragraph"
          :class="topicText.body"
        >
          {{ paragraph }}
        </p>
      </div>

      <div
        v-else-if="block.type === 'quote'"
        class="mt-[39px] border-l-[3px] py-0 pl-0"
        :class="quoteAccentClass(block.variant)"
      >
        <div
          class="rounded-r-[10px] px-[25px] pb-[25px] pt-[26px]"
          :class="quoteBgClass(block.variant)"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3282 3.99902C20.6211 3.99902 19.943 4.27991 19.443 4.7799C18.943 5.27988 18.6621 5.958 18.6621 6.66509V14.6633C18.6621 15.3704 18.943 16.0485 19.443 16.5485C19.943 17.0485 20.6211 17.3294 21.3282 17.3294C21.6817 17.3294 22.0208 17.4698 22.2708 17.7198C22.5208 17.9698 22.6612 18.3088 22.6612 18.6624V19.9954C22.6612 20.7025 22.3803 21.3806 21.8803 21.8806C21.3804 22.3806 20.7022 22.6615 19.9951 22.6615C19.6416 22.6615 19.3025 22.8019 19.0525 23.0519C18.8026 23.3019 18.6621 23.641 18.6621 23.9945V26.6606C18.6621 27.0141 18.8026 27.3532 19.0525 27.6032C19.3025 27.8532 19.6416 27.9936 19.9951 27.9936C22.1164 27.9936 24.1508 27.151 25.6507 25.651C27.1507 24.151 27.9933 22.1167 27.9933 19.9954V6.66509C27.9933 5.958 27.7125 5.27988 27.2125 4.7799C26.7125 4.27991 26.0344 3.99902 25.3273 3.99902H21.3282Z"
              :stroke="quoteStroke(block.variant)"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66607 3.99915C5.95898 3.99915 5.28086 4.28003 4.78087 4.78002C4.28089 5.28 4 5.95813 4 6.66521V14.6634C4 15.3705 4.28089 16.0486 4.78087 16.5486C5.28086 17.0486 5.95898 17.3295 6.66607 17.3295C7.01961 17.3295 7.35867 17.4699 7.60866 17.7199C7.85866 17.9699 7.9991 18.309 7.9991 18.6625V19.9955C7.9991 20.7026 7.71821 21.3808 7.21823 21.8807C6.71824 22.3807 6.04012 22.6616 5.33303 22.6616C4.97949 22.6616 4.64043 22.8021 4.39044 23.052C4.14044 23.302 4 23.6411 4 23.9946V26.6607C4 27.0143 4.14044 27.3533 4.39044 27.6033C4.64043 27.8533 4.97949 27.9937 5.33303 27.9937C7.45429 27.9937 9.48866 27.1511 10.9886 25.6511C12.4886 24.1512 13.3312 22.1168 13.3312 19.9955V6.66521C13.3312 5.95813 13.0503 5.28 12.5504 4.78002C12.0504 4.28003 11.3723 3.99915 10.6652 3.99915H6.66607Z"
              :stroke="quoteStroke(block.variant)"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p
            class="mt-[17px]"
            :class="topicText.quote"
          >
            "{{ block.quote }}"
          </p>

          <p class="mt-[17px] text-[13px] font-bold leading-[18px] text-[#4B5563]">
            — {{ block.source }}
          </p>
        </div>
      </div>

      <section
        v-else-if="block.type === 'section'"
        :id="block.id"
        class="mt-[47px] scroll-mt-[24px]"
      >
        <h2
          :class="topicText.heading"
        >
          {{ block.title }}
        </h2>
        <div class="mt-[11px] h-[2px] w-full bg-[#7CB342]"></div>

        <div v-if="block.body" class="mt-[31px] space-y-[28px]">
          <p
            v-for="paragraph in block.body"
            :key="paragraph"
            :class="topicText.body"
          >
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section
        v-else-if="block.type === 'subsection'"
        :id="block.id"
        class="mt-[25px] scroll-mt-[24px]"
      >
        <h3 :class="topicText.subheading">
          {{ block.title }}
        </h3>
        <div class="mt-[16.31px] space-y-[28px]">
          <p
            v-for="paragraph in block.body"
            :key="paragraph"
            :class="topicText.body"
          >
            {{ paragraph }}
          </p>
        </div>
      </section>

      <div
        v-else-if="block.type === 'cards'"
        class="mt-[33px] space-y-[25px] lg:grid lg:grid-cols-2 lg:gap-[25px] lg:space-y-0"
      >
        <article
          v-for="card in block.items"
          :key="card.title"
          class="rounded-[11px] border px-[25px] py-[22px]"
          :class="cardClass(card.variant)"
        >
          <h3 :class="topicText.cardTitle">
            {{ card.title }}
          </h3>
          <p class="mt-[10px]" :class="topicText.cardBody">
            {{ card.text }}
          </p>
        </article>
      </div>

      <div v-else-if="block.type === 'steps'" class="mt-[35px] space-y-[20px]">
        <div
          v-for="step in block.items"
          :key="step.number"
          class="grid grid-cols-[32px_1fr] gap-[17px]"
        >
          <div
            class="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#7CB342] text-[17px] font-extrabold leading-none text-white"
          >
            {{ step.number }}
          </div>
          <div>
            <h3 :class="topicText.stepTitle">
              {{ step.title }}
            </h3>
            <p class="mt-[6px]" :class="topicText.stepBody">
              {{ step.text }}
            </p>
          </div>
        </div>
      </div>

      <div
        v-else-if="block.type === 'cta'"
        class="mt-[36px] rounded-[10px] bg-[#73B43B] px-[28px] py-[27px] text-white"
      >
        <h2 :class="topicText.ctaTitle">
          {{ block.title }}
        </h2>
        <p class="mt-[16px]" :class="topicText.ctaBody">
          {{ block.text }}
        </p>
        <div class="lg:flex lg:gap-[14px]">
          <button
            type="button"
            class="mt-[23px] flex h-[61px] w-full items-center justify-center rounded-[7px] bg-white px-[22px] text-center text-[14px] font-bold leading-[20px] text-[#7CB342]"
          >
            {{ block.primaryLabel }}
          </button>
          <button
            type="button"
            class="mt-[14px] flex h-[44px] w-full items-center justify-center rounded-[7px] border border-[#FFFFFF] bg-[#FFFFFF33] px-[22px] text-[14px] font-bold leading-none text-white lg:mt-[23px] lg:h-[61px]"
          >
            {{ block.secondaryLabel }}
          </button>
        </div>
      </div>
    </template>
  </article>
</template>

<script setup>
defineProps({
  blocks: {
    type: Array,
    required: true,
  },
});

const topicText = {
  body: "text-[18px] font-normal leading-[29px] text-[#364153]",
  heading:
    "text-[30px] font-extrabold leading-[36px] tracking-[-0.45px] text-[#111827]",
  subheading: "text-[20px] font-extrabold leading-[25px] text-[#111827]",
  quote: "text-[20px] font-semibold italic leading-[32px] text-[#111827]",
  cardTitle: "text-[16px] font-extrabold leading-[22px] text-[#111827]",
  cardBody: "text-[16px] font-normal leading-[24px] text-[#364153]",
  stepTitle: "text-[16px] font-extrabold leading-[22px] text-[#111827]",
  stepBody: "text-[16px] font-normal leading-[23px] text-[#364153]",
  ctaTitle: "text-[23px] font-extrabold leading-[29px] tracking-[-0.15px]",
  ctaBody: "text-[16px] font-normal leading-[24px]",
};

const quoteAccentClass = (variant) =>
  variant === "blue" ? "border-l-[#2E8BFF]" : "border-l-[#7CB342]";

const quoteBgClass = (variant) =>
  variant === "blue" ? "bg-[#EFF6FF]" : "bg-[#F7FAF4]";

const quoteStroke = (variant) => (variant === "blue" ? "#2B7FFF" : "#7CB342");

const cardClass = (variant) => {
  const variants = {
    blue: "border-[#BFDBFE] bg-[#EFF6FF]",
    purple: "border-[#E9D5FF] bg-[#FAF5FF]",
    green: "border-[#BBF7D0] bg-[#F0FDF4]",
    red: "border-[#FECACA] bg-[#FEF2F2]",
  };

  return variants[variant] || variants.blue;
};
</script>
