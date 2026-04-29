<template>
  <section class="w-full bg-[#ffffff]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#ffffff] px-[24px] pb-[28px] pt-[58px] lg:max-w-[1320px] lg:px-[0px] lg:py-[95px]"
    >
      <div class="flex justify-center">
        <div
          class="inline-flex h-[33px] items-center gap-[8px] rounded-[10px] bg-[#F3F4F6] px-[15px] text-[#364153]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_355)">
              <path
                d="M13.3303 8.66475C13.3303 11.9973 10.9975 13.6636 8.22476 14.6301C8.07957 14.6793 7.92186 14.6769 7.7782 14.6234C4.99882 13.6636 2.66602 11.9973 2.66602 8.66475V3.99913C2.66602 3.82236 2.73624 3.65283 2.86123 3.52783C2.98623 3.40284 3.15576 3.33261 3.33253 3.33261C4.66557 3.33261 6.33186 2.53279 7.4916 1.51969C7.6328 1.39905 7.81243 1.33276 7.99815 1.33276C8.18387 1.33276 8.3635 1.39905 8.5047 1.51969C9.6711 2.53946 11.3307 3.33261 12.6638 3.33261C12.8405 3.33261 13.0101 3.40284 13.1351 3.52783C13.2601 3.65283 13.3303 3.82236 13.3303 3.99913V8.66475Z"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_355">
                <rect width="15.9964" height="15.9964" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.06em]"
          >
            Fear-Free System
          </span>
        </div>
      </div>

      <h1
        class="mx-auto mt-[16px] max-w-[330px] text-center text-[30px] lg:text-[40px] font-bold leading-[37.5px] lg:leading-[60px] tracking-[-0.55px] text-[#101828] lg:max-w-[720px]"
      >
        We Take Your People&apos;s Evangelism and Invitation Fears Away
      </h1>

      <div
        class="mt-[26px] lg:mt-[64px] space-y-[36px] lg:grid lg:grid-cols-3 lg:gap-[28px] lg:space-y-0"
      >
        <article
          v-for="card in cards"
          :key="card.title"
          class="rounded-[16px] border-2 border-[#E5E7EB] bg-[#F9FAFB] p-[34px]"
        >
          <div
            class="flex h-[64px] w-[64px] items-center justify-center rounded-[14px] bg-[#7CB342] text-[#ffffff]"
          >
            <svg
              v-if="card.icon === 'people'"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3285 27.9937V25.3276C21.3285 23.9134 20.7667 22.5572 19.7667 21.5572C18.7668 20.5573 17.4105 19.9955 15.9963 19.9955H7.99815C6.58398 19.9955 5.22773 20.5573 4.22776 21.5572C3.22779 22.5572 2.66602 23.9134 2.66602 25.3276V27.9937"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9972 14.6634C14.942 14.6634 17.3293 12.2761 17.3293 9.33128C17.3293 6.38642 14.942 3.99915 11.9972 3.99915C9.05232 3.99915 6.66504 6.38642 6.66504 9.33128C6.66504 12.2761 9.05232 14.6634 11.9972 14.6634Z"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3262 27.9937V25.3277C29.3254 24.1462 28.9321 22.9985 28.2083 22.0648C27.4845 21.1311 26.4711 20.4642 25.3271 20.1688"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.3281 4.17236C22.4751 4.46603 23.4917 5.13308 24.2177 6.06835C24.9436 7.00362 25.3377 8.15391 25.3377 9.33787C25.3377 10.5218 24.9436 11.6721 24.2177 12.6074C23.4917 13.5427 22.4751 14.2097 21.3281 14.5034"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="card.icon === 'shield'"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6606 17.3295C26.6606 23.9947 21.9949 27.3272 16.4495 29.2601C16.1591 29.3585 15.8437 29.3538 15.5564 29.2468C9.99765 27.3272 5.33203 23.9947 5.33203 17.3295V7.99826C5.33203 7.64472 5.47248 7.30565 5.72247 7.05566C5.97246 6.80567 6.31152 6.66523 6.66506 6.66523C9.33113 6.66523 12.6637 5.06559 14.9832 3.03938C15.2656 2.7981 15.6249 2.66553 15.9963 2.66553C16.3677 2.66553 16.727 2.7981 17.0094 3.03938C19.3422 5.07892 22.6615 6.66523 25.3275 6.66523C25.6811 6.66523 26.0201 6.80567 26.2701 7.05566C26.5201 7.30565 26.6606 7.64472 26.6606 7.99826V17.3295Z"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9961 9.3313V27.9938"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.99905 23.9945C3.64551 23.9945 3.30644 23.8541 3.05645 23.6041C2.80646 23.3541 2.66602 23.015 2.66602 22.6615V5.33206C2.66602 4.97851 2.80646 4.63945 3.05645 4.38946C3.30644 4.13947 3.64551 3.99902 3.99905 3.99902H10.6642C12.0784 3.99902 13.4346 4.5608 14.4346 5.56077C15.4346 6.56074 15.9963 7.91699 15.9963 9.33116C15.9963 7.91699 16.5581 6.56074 17.5581 5.56077C18.5581 4.5608 19.9143 3.99902 21.3285 3.99902H27.9936C28.3472 3.99902 28.6862 4.13947 28.9362 4.38946C29.1862 4.63945 29.3267 4.97851 29.3267 5.33206V22.6615C29.3267 23.015 29.1862 23.3541 28.9362 23.6041C28.6862 23.8541 28.3472 23.9945 27.9936 23.9945H19.9954C18.9348 23.9945 17.9176 24.4159 17.1677 25.1658C16.4177 25.9158 15.9963 26.933 15.9963 27.9936C15.9963 26.933 15.575 25.9158 14.825 25.1658C14.0751 24.4159 13.0579 23.9945 11.9972 23.9945H3.99905Z"
                stroke="white"
                stroke-width="2.66607"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h2
            class="mt-[23px] max-w-[240px] lg:max-w-full text-[24px] font-bold leading-[32px] tracking-[-0.35px] text-[#101828]"
          >
            {{ card.title }}
          </h2>

          <ul class="mt-[24px] space-y-[16px]">
            <li
              v-for="item in card.points"
              :key="item"
              class="flex items-start gap-[12px] text-[16px] leading-[26px] text-[#364153]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_130_373)">
                  <path
                    d="M9.996 18.326C14.5965 18.326 18.326 14.5965 18.326 9.996C18.326 5.39548 14.5965 1.66602 9.996 1.66602C5.39548 1.66602 1.66602 5.39548 1.66602 9.996C1.66602 14.5965 5.39548 18.326 9.996 18.326Z"
                    stroke="#7CB342"
                    stroke-width="1.666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.49707 9.99595L9.16307 11.662L12.4951 8.32996"
                    stroke="#7CB342"
                    stroke-width="1.666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_130_373">
                    <rect width="19.992" height="19.992" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span class="max-w-[220px] lg:max-w-full">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>

      <div
        class="mt-[64px] rounded-[16px] border-l-[4px] border-l-[#7CB342] bg-[#F6F8EF] p-[40px] lg:mx-auto lg:w-[800px]"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_130_442)">
            <path
              d="M28.0277 41.9904V27.2118C28.0277 15.8063 35.488 8.07607 45.9896 5.99854L47.9792 10.2996C43.1163 12.1332 39.991 17.5739 39.991 21.9949H47.9892V41.9904H28.0277ZM0 41.9904L0 27.2118C0 15.8063 7.49431 8.07607 17.9959 5.99854L19.9875 10.2996C15.1226 12.1332 11.9973 17.5739 11.9973 21.9949H19.9615V41.9904H0Z"
              fill="#7CB342"
            />
          </g>
          <defs>
            <clipPath id="clip0_130_442">
              <rect width="47.9892" height="47.9892" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p
          class="mt-[22px] max-w-[270px] text-left text-[20px] lg:text-[24px] leading-[32.5px] lg:leading-[39px] italic tracking-[-0.25px] text-[#1E2939] lg:max-w-[640px]"
        >
          The best evangelism strategy is one your people actually use. TrueLife
          helps churches remove fear and make inviting others simple and
          consistent.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: "people",
    title: "Low-pressure approach",
    points: [
      "Simple, natural ways to invite others",
      "No awkward conversations",
      "Designed for everyday people",
    ],
  },
  {
    icon: "shield",
    title: "Confidence-building system",
    points: [
      "Removes fear of rejection",
      "Gives clear, repeatable steps",
      "Encourages consistency",
    ],
  },
  {
    icon: "book",
    title: "Biblically aligned method",
    points: [
      "Focus on outreach and connection",
      "Helps members live their faith daily",
      "Built around real church growth",
    ],
  },
];
</script>
