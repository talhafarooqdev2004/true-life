<template>
  <section class="w-full bg-[#F9FAFB]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#F8FAFC] px-[33px] py-[80px] lg:max-w-[1320px] lg:px-[0px] lg:pb-[98px] lg:pt-[96px]"
    >
      <div class="flex justify-center bg-[#F8FAFC]">
        <div
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[9px] border border-[#E5E7EB] bg-[#ffffff] px-[17px] text-[#475569] shadow-[0_1px_2px_rgba(16,24,40,0.03)]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_1121)">
              <path
                d="M3.99902 14.6643V2.66702C3.99902 2.31348 4.13947 1.97441 4.38946 1.72442C4.63945 1.47443 4.97851 1.33398 5.33206 1.33398H10.6642C11.0177 1.33398 11.3568 1.47443 11.6068 1.72442C11.8568 1.97441 11.9972 2.31348 11.9972 2.66702V14.6643H3.99902Z"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.99907 7.99805H2.66604C2.3125 7.99805 1.97344 8.13849 1.72344 8.38848C1.47345 8.63848 1.33301 8.97754 1.33301 9.33108V13.3302C1.33301 13.6837 1.47345 14.0228 1.72344 14.2728C1.97344 14.5228 2.3125 14.6632 2.66604 14.6632H3.99907"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9971 5.99805H13.3301C13.6836 5.99805 14.0227 6.13849 14.2727 6.38848C14.5227 6.63848 14.6631 6.97754 14.6631 7.33108V13.3297C14.6631 13.6833 14.5227 14.0223 14.2727 14.2723C14.0227 14.5223 13.6836 14.6628 13.3301 14.6628H11.9971"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66504 4H9.33111"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66504 6.66602H9.33111"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66504 9.33203H9.33111"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66504 11.998H9.33111"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_1121">
                <rect width="15.9964" height="15.9964" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#364153]"
          >
            Church Partners
          </span>
        </div>
      </div>

      <h2
        class="mx-auto mt-[16px] max-w-[360px] lg:max-w-full text-center text-[30px] lg:text-[48px] font-bold leading-[1.17] lg:leading-[48px] tracking-[-0.58px] text-[#101828] lg:max-w-[860px]"
      >
        1,000 Churches Have Made Inviting Meaningful and Impactful
      </h2>

      <p
        class="mx-auto mt-[28px] max-w-[348px] text-center text-[19px] font-[400] leading-[1.48] tracking-[-0.18px] text-[#5B6679] lg:max-w-[680px]"
      >
        Join thousands of churches worldwide that are seeing real results with
        consistent engagement and transformed church culture
      </p>

      <div
        class="mt-[65px] grid grid-cols-2 gap-x-[32px] gap-y-[32px] bg-[#F8FAFC] px-[14px] lg:grid-cols-4 lg:gap-[28px] lg:px-[0px]"
      >
        <article
          v-for="church in churches"
          :key="church.name"
          class="flex py-[32px] flex-col items-center justify-center rounded-[14px] border border-[#E5E7EB] bg-[#ffffff] lg:w-full"
        >
          <div
            class="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#E5E7EB] text-[#A5AFBC]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99707 21.9877V3.99701C5.99707 3.46685 6.20767 2.95841 6.58255 2.58353C6.95743 2.20865 7.46587 1.99805 7.99603 1.99805H15.9919C16.522 1.99805 17.0305 2.20865 17.4054 2.58353C17.7802 2.95841 17.9908 3.46685 17.9908 3.99701V21.9877H5.99707Z"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99695 11.9941H3.99798C3.46783 11.9941 2.95938 12.2047 2.58451 12.5796C2.20963 12.9545 1.99902 13.4629 1.99902 13.9931V19.99C1.99902 20.5201 2.20963 21.0286 2.58451 21.4035C2.95938 21.7783 3.46783 21.9889 3.99798 21.9889H5.99695"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.9902 8.99609H19.9892C20.5194 8.99609 21.0278 9.2067 21.4027 9.58158C21.7776 9.95645 21.9882 10.4649 21.9882 10.9951V19.9904C21.9882 20.5205 21.7776 21.029 21.4027 21.4039C21.0278 21.7787 20.5194 21.9893 19.9892 21.9893H17.9902"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99512 5.99609H13.993"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99512 9.99414H13.993"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99512 13.9922H13.993"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99512 17.9902H13.993"
                stroke="#99A1AF"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p
            class="mt-[13px] max-w-[116px] text-center text-[14px] font-semibold leading-[20px] tracking-[-0.18px] text-[#364153]"
          >
            {{ church.name }}
          </p>
        </article>
      </div>

      <div
        class="mx-auto mt-[48px] flex flex-col items-center rounded-[16px] bg-[#7CB342] p-[40px] text-center lg:w-full lg:flex-row lg:justify-around"
      >
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-[#7CB342]"
          :class="stat.label === 'Partner Churches' ? '' : 'mt-[39px] lg:mt-0'"
        >
          <p
            class="text-[36px] lg:text-[48px] font-bold leading-none tracking-[0px] text-[#ffffff]"
          >
            {{ stat.value }}
          </p>
          <p
            class="mt-[9px] text-[16px] font-[400] leading-[24px] tracking-[-0.12px] text-[#ffffff]"
          >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const churches = [
  { name: "Grace Church" },
  { name: "New Hope" },
  { name: "Cornerstone" },
  { name: "Faith Community" },
  { name: "Living Water", desktopOnly: true },
  { name: "Riverside", desktopOnly: true },
  { name: "Crossroads", desktopOnly: true },
  { name: "Harvest Church", desktopOnly: true },
  { name: "Victory Church" },
  { name: "City Light" },
  { name: "The Bridge" },
  { name: "Elevation" },
];

const stats = [
  {
    value: "1,000+",
    label: "Partner Churches",
  },
  {
    value: "50+",
    label: "Countries Represented",
  },
  {
    value: "2.5M+",
    label: "People Invited This Year",
  },
];
</script>
