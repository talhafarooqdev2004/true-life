<template>
  <section class="w-full bg-[#ffffff]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#ffffff] px-[32px] lg:px-0 py-[95px] lg:max-w-[1320px]"
    >
      <div class="flex justify-center bg-[#ffffff]">
        <div
          class="inline-flex h-[33px] items-center gap-[8px] rounded-[10px] bg-[#F3F4F6] px-[17px] text-[#475569]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99817 14.6633C11.6792 14.6633 14.6633 11.6792 14.6633 7.99817C14.6633 4.3171 11.6792 1.33301 7.99817 1.33301C4.3171 1.33301 1.33301 4.3171 1.33301 7.99817C1.33301 11.6792 4.3171 14.6633 7.99817 14.6633Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99902 7.99807L7.33206 9.33111L9.99812 6.66504"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#364153]"
          >
            Simple Process
          </span>
        </div>
      </div>

      <h2
        class="mx-auto mt-[16px] max-w-[315px] lg:max-w-full text-center text-[30px] lg:text-[48px] font-bold leading-[36px] lg:leading-[48px] tracking-[-0.55px] text-[#101828] lg:max-w-[860px]"
      >
        How Do You Get 80% Involved Every Sunday?
      </h2>

      <p
        class="mx-auto mt-[24px] max-w-[310px] lg:max-w-full text-center text-[18px] font-[400] leading-[28px] tracking-[-0.2px] text-[#4A5565] lg:max-w-[620px]"
      >
        Three simple steps that create lasting engagement and church-wide
        participation
      </p>

      <div
        class="mt-[64px] space-y-[32px] bg-[#ffffff] lg:grid lg:grid-cols-3 lg:gap-[28px] lg:space-y-0"
      >
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="relative rounded-[16px] border border-[#E5E7EB] bg-[#ffffff] px-[34px] py-[58px]"
        >
          <span
            class="absolute left-[-18px] top-[-18px] flex h-[52px] w-[52px] items-center justify-center rounded-full text-[24px] font-bold leading-none text-[#ffffff] shadow-[0_14px_24px_rgba(16,24,40,0.18)]"
            :class="step.badgeClass"
          >
            {{ index + 1 }}
          </span>

          <div
            class="flex h-[80px] w-[80px] items-center justify-center rounded-[14px] bg-[#F3F4F6] text-[#3D4858]"
          >
            <svg
              v-if="step.icon === 'cap'"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6981 18.2021C35.9964 18.0705 36.2496 17.8543 36.4263 17.5802C36.6029 17.3061 36.6953 16.9862 36.6919 16.6601C36.6885 16.334 36.5896 16.0161 36.4073 15.7457C36.225 15.4754 35.9674 15.2644 35.6664 15.139L21.3821 8.63261C20.9479 8.43454 20.4761 8.33203 19.9989 8.33203C19.5216 8.33203 19.0498 8.43454 18.6156 8.63261L4.33295 15.1323C4.03624 15.2622 3.78384 15.4758 3.60659 15.747C3.42935 16.0181 3.33496 16.335 3.33496 16.6589C3.33496 16.9828 3.42935 17.2997 3.60659 17.5708C3.78384 17.8419 4.03624 18.0555 4.33295 18.1855L18.6156 24.6985C19.0498 24.8966 19.5216 24.9991 19.9989 24.9991C20.4761 24.9991 20.9479 24.8966 21.3821 24.6985L35.6981 18.2021Z"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36.665 16.666V26.6655"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 20.832V26.6651C10 27.9911 11.0535 29.2628 12.9288 30.2004C14.8041 31.1381 17.3475 31.6648 19.9995 31.6648C22.6515 31.6648 25.195 31.1381 27.0702 30.2004C28.9455 29.2628 29.999 27.9911 29.999 26.6651V20.832"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="step.icon === 'tool'"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4983 10.4995C24.193 10.8111 24.0219 11.2299 24.0219 11.6661C24.0219 12.1024 24.193 12.5212 24.4983 12.8328L27.1649 15.4993C27.4764 15.8047 27.8952 15.9757 28.3315 15.9757C28.7677 15.9757 29.1865 15.8047 29.4981 15.4993L35.7811 9.21626C36.6191 11.0682 36.8729 13.1315 36.5085 15.1312C36.1441 17.131 35.179 18.9722 33.7417 20.4095C32.3043 21.8468 30.4631 22.812 28.4634 23.1763C26.4636 23.5407 24.4003 23.287 22.5484 22.449L11.0323 33.9651C10.3693 34.6281 9.47007 35.0005 8.53243 35.0005C7.5948 35.0005 6.69556 34.6281 6.03255 33.9651C5.36954 33.302 4.99707 32.4028 4.99707 31.4652C4.99707 30.5275 5.36954 29.6283 6.03255 28.9653L17.5487 17.4492C16.7106 15.5973 16.4569 13.534 16.8213 11.5342C17.1856 9.53449 18.1508 7.69326 19.5881 6.25594C21.0254 4.81862 22.8666 3.85347 24.8664 3.48911C26.8661 3.12475 28.9295 3.37849 30.7813 4.21651L24.515 10.4829L24.4983 10.4995Z"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.6647 11.666L22.4987 25.832L14.1658 17.4991L3.33301 28.3319"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.665 11.666H36.6646V21.6655"
                stroke="#364153"
                stroke-width="3.33317"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h3
            class="mt-[30px] text-[24px] font-bold leading-[32px] tracking-[-0.35px] text-[#101828]"
          >
            {{ step.title }}
          </h3>

          <p
            class="mt-[12px] text-[18px] font-[500] leading-[28px] tracking-[-0.2px] text-[#364153]"
          >
            {{ step.primary }}
          </p>

          <p
            class="mt-[8px] text-[16px] font-[400] leading-[24px] tracking-[-0.15px] text-[#4A5565]"
          >
            {{ step.secondary }}
          </p>
        </article>
      </div>

      <div
        class="mt-[64px] flex flex-col items-center bg-[#ffffff] lg:flex-row lg:justify-center lg:gap-[18px]"
      >
        <button
          type="button"
          class="flex h-[68px] w-[256px] items-center justify-center rounded-[12px] border border-[#7CB342] bg-[#7CB342] leading-none tracking-[-0.2px] text-[#ffffff] shadow-[0_14px_22px_rgba(124,179,66,0.28)] lg:w-[220px] shadow-[0px_20px_25px_-5px_#0000001A]"
        >
          <span class="text-[18px] font-bold"> Get Started Today</span>
        </button>

        <button
          type="button"
          class="mt-[16px] flex h-[72px] w-[196px] items-center justify-center rounded-[14px] !border-[2px] !border-[#D1D5DC] bg-[#F3F4F6] text-[18px] font-bold leading-none tracking-[-0.15px] text-[#101828] lg:mt-0"
        >
          <span class="text-[18px] font-bold"> Learn More</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: "cap",
    badgeClass: "bg-[#2F7BFF]",
    title: "Train your people",
    primary: "Simple weekly guidance",
    secondary: "Practical and repeatable",
  },
  {
    icon: "tool",
    badgeClass: "bg-[#75B843]",
    title: "Give them tools",
    primary: "Cards, scripts, and resources",
    secondary: "Removes uncertainty",
  },
  {
    icon: "chart",
    badgeClass: "bg-[#A020F8]",
    title: "Build momentum",
    primary: "Encourage participation",
    secondary: "Track and celebrate engagement",
  },
];
</script>
