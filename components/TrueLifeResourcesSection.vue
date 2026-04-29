<template>
  <section class="w-full bg-[#F9FAFB]">
    <div
      class="mx-auto w-full max-w-[394px] px-[21px] pb-[54px] py-[80px] lg:max-w-full lg:px-[20px] lg:pb-[112px] lg:pt-[96px]"
    >
      <div class="flex justify-center">
        <div
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[9px] border border-[#E5E7EB] px-[17px] text-[#475569]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3308 5.33203H2.66652C2.29841 5.33203 2 5.63044 2 5.99855V7.33158C2 7.69969 2.29841 7.9981 2.66652 7.9981H13.3308C13.6989 7.9981 13.9973 7.69969 13.9973 7.33158V5.99855C13.9973 5.63044 13.6989 5.33203 13.3308 5.33203Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99805 5.33203V13.9967"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6642 7.99805V12.6637C12.6642 13.0172 12.5238 13.3563 12.2738 13.6063C12.0238 13.8563 11.6847 13.9967 11.3312 13.9967H4.66604C4.3125 13.9967 3.97344 13.8563 3.72344 13.6063C3.47345 13.3563 3.33301 13.0172 3.33301 12.6637V7.99805"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.9993 5.33287C4.55737 5.33287 4.13354 5.15732 3.82105 4.84483C3.50856 4.53234 3.33301 4.10851 3.33301 3.66658C3.33301 3.22465 3.50856 2.80083 3.82105 2.48834C4.13354 2.17585 4.55737 2.00029 4.9993 2.00029C5.64228 1.98909 6.27236 2.30106 6.80738 2.89553C7.3424 3.49 7.75753 4.33937 7.99862 5.33287C8.23972 4.33937 8.65484 3.49 9.18987 2.89553C9.72489 2.30106 10.355 1.98909 10.9979 2.00029C11.4399 2.00029 11.8637 2.17585 12.1762 2.48834C12.4887 2.80083 12.6642 3.22465 12.6642 3.66658C12.6642 4.10851 12.4887 4.53234 12.1762 4.84483C11.8637 5.15732 11.4399 5.33287 10.9979 5.33287"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#364153]"
          >
            Available Resources
          </span>
        </div>
      </div>

      <h2
        class="mt-[16px] text-center text-[30px] lg:text-[36px] font-bold leading-[36px] tracking-[-0.55px] text-[#101828]"
      >
        Tools to Grow Your Faith
      </h2>

      <p
        class="mx-auto mt-[16px] max-w-[342px] lg:max-w-full text-center text-[18px] font-[400] leading-[28px] tracking-[-0.2px] text-[#4A5565]"
      >
        Explore a comprehensive library of resources designed to help you seek
        truth, answer questions, and grow in your relationship with God.
      </p>

      <div
        class="mt-[40px] lg:mt-[64px] space-y-[24px] lg:grid lg:grid-cols-3 lg:gap-[26px] lg:space-y-0"
      >
        <article
          v-for="resource in resources"
          :key="resource.title"
          class="rounded-[16px] border border-[#DFE3E8] bg-[#ffffff] p-[34px]"
        >
          <div
            class="flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#7CB3421A]"
          >
            <svg
              v-if="resource.icon === 'video'"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.665 15.1655L24.7579 19.2274C24.8458 19.2859 24.9478 19.3194 25.0532 19.3245C25.1586 19.3295 25.2634 19.3059 25.3564 19.2561C25.4494 19.2063 25.5272 19.1322 25.5814 19.0417C25.6356 18.9512 25.6643 18.8477 25.6643 18.7422V9.1811C25.6644 9.07847 25.6373 8.97765 25.5859 8.88882C25.5345 8.79999 25.4606 8.72629 25.3716 8.67517C25.2826 8.62405 25.1817 8.59731 25.0791 8.59766C24.9765 8.59801 24.8757 8.62543 24.7871 8.67715L18.665 12.2491"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3316 7H4.66611C3.37757 7 2.33301 8.04457 2.33301 9.3331V18.6655C2.33301 19.954 3.37757 20.9986 4.66611 20.9986H16.3316C17.6202 20.9986 18.6647 19.954 18.6647 18.6655V9.3331C18.6647 8.04457 17.6202 7 16.3316 7Z"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="resource.icon === 'book'"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.999 8.16602V24.4977"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.49956 20.9983C3.19017 20.9983 2.89345 20.8754 2.67468 20.6566C2.45591 20.4378 2.33301 20.1411 2.33301 19.8317V4.66655C2.33301 4.35716 2.45591 4.06045 2.67468 3.84167C2.89345 3.6229 3.19017 3.5 3.49956 3.5H9.33231C10.5699 3.5 11.7567 3.99162 12.6318 4.8667C13.5069 5.74178 13.9985 6.92865 13.9985 8.1662C13.9985 6.92865 14.4901 5.74178 15.3652 4.8667C16.2403 3.99162 17.4272 3.5 18.6647 3.5H24.4975C24.8069 3.5 25.1036 3.6229 25.3224 3.84167C25.5411 4.06045 25.664 4.35716 25.664 4.66655V19.8317C25.664 20.1411 25.5411 20.4378 25.3224 20.6566C25.1036 20.8754 24.8069 20.9983 24.4975 20.9983H17.4982C16.57 20.9983 15.6799 21.367 15.0235 22.0233C14.3672 22.6796 13.9985 23.5698 13.9985 24.4979C13.9985 23.5698 13.6298 22.6796 12.9735 22.0233C12.3172 21.367 11.427 20.9983 10.4989 20.9983H3.49956Z"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="resource.icon === 'question'"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.21566 23.3308C11.4421 24.4729 14.0033 24.7822 16.4376 24.2031C18.872 23.6239 21.0195 22.1944 22.4931 20.172C23.9666 18.1496 24.6694 15.6674 24.4748 13.1726C24.2802 10.6779 23.201 8.33472 21.4316 6.56532C19.6622 4.79593 17.319 3.71667 14.8242 3.52205C12.3295 3.32743 9.84731 4.03024 7.82492 5.50382C5.80253 6.97741 4.37295 9.12487 3.79379 11.5592C3.21463 13.9936 3.52399 16.5548 4.66611 18.7812L2.33301 25.6639L9.21566 23.3308Z"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="resource.icon === 'gift'"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.3314 9.33203H4.66655C4.02228 9.33203 3.5 9.85431 3.5 10.4986V12.8317C3.5 13.476 4.02228 13.9982 4.66655 13.9982H23.3314C23.9756 13.9982 24.4979 13.476 24.4979 12.8317V10.4986C24.4979 9.85431 23.9756 9.33203 23.3314 9.33203Z"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.999 9.33203V24.4972"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.1647 13.998V22.1639C22.1647 22.7827 21.9189 23.3761 21.4814 23.8137C21.0438 24.2512 20.4504 24.497 19.8316 24.497H8.16611C7.54733 24.497 6.9539 24.2512 6.51636 23.8137C6.07882 23.3761 5.83301 22.7827 5.83301 22.1639V13.998"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.74939 9.33327C7.97591 9.33327 7.23412 9.026 6.6872 8.47908C6.14027 7.93215 5.83301 7.19036 5.83301 6.41689C5.83301 5.64342 6.14027 4.90162 6.6872 4.3547C7.23412 3.80777 7.97591 3.50051 8.74939 3.50051C9.87474 3.4809 10.9775 4.02693 11.9139 5.06738C12.8503 6.10782 13.5769 7.59441 13.9989 9.33327C14.4208 7.59441 15.1474 6.10782 16.0838 5.06738C17.0202 4.02693 18.123 3.4809 19.2483 3.50051C20.0218 3.50051 20.7636 3.80777 21.3105 4.3547C21.8575 4.90162 22.1647 5.64342 22.1647 6.41689C22.1647 7.19036 21.8575 7.93215 21.3105 8.47908C20.7636 9.026 20.0218 9.33327 19.2483 9.33327"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else-if="resource.icon === 'people'"
              class="h-[30px] w-[30px]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 15.5C14.2 15.5 16 13.7 16 11.5C16 9.3 14.2 7.5 12 7.5C9.8 7.5 8 9.3 8 11.5C8 13.7 9.8 15.5 12 15.5Z"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 13.5C21.65 13.5 23 12.15 23 10.5C23 8.85 21.65 7.5 20 7.5"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
              />
              <path
                d="M6 26C6 22.7 8.7 20 12 20H15C18.3 20 21 22.7 21 26"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 20.5C23.2 21.05 25 23 25 26"
                stroke="currentColor"
                stroke-width="2.4"
                stroke-linecap="round"
              />
            </svg>

            <svg
              v-else
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.498 16.3326C17.7313 15.166 18.3146 14.3495 19.2478 13.4162C20.4144 12.3663 20.9976 10.8498 20.9976 9.33329C20.9976 7.47696 20.2602 5.69666 18.9476 4.38403C17.635 3.07141 15.8547 2.33398 13.9983 2.33398C12.142 2.33398 10.3617 3.07141 9.04907 4.38403C7.73645 5.69666 6.99902 7.47696 6.99902 9.33329C6.99902 10.4998 7.23233 11.8997 8.74885 13.4162C9.56544 14.2328 10.2654 15.166 10.4987 16.3326"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.499 20.998H17.4983"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.665 25.6641H16.3312"
                stroke="#7CB342"
                stroke-width="2.3331"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h3
            class="mt-[19px] text-[20px] font-bold leading-[28px] tracking-[-0.28px] text-[#101828]"
          >
            {{ resource.title }}
          </h3>

          <p
            class="mt-[12px] max-w-[290px] lg:max-w-full text-[16px] font-[400] leading-[1.55] tracking-[-0.12px] text-[#4A5565]"
          >
            {{ resource.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const resources = [
  {
    icon: "video",
    title: "Video Resources",
    text: "Access hundreds of teaching videos on faith, theology, and Christian living.",
  },
  {
    icon: "book",
    title: "Articles & Guides",
    text: "Read in-depth articles exploring biblical truth and answering life's questions.",
  },
  {
    icon: "question",
    title: "Ask a Question",
    text: "Submit your spiritual questions and receive thoughtful, biblical answers.",
  },
  {
    icon: "gift",
    title: "Free Gospel Cards",
    text: "Download and share beautifully designed cards that explain the gospel message.",
  },
  {
    icon: "people",
    title: "Church Resources",
    text: "Tools and materials to help your church engage seekers and answer questions.",
  },
  {
    icon: "question",
    title: "Faith Courses",
    text: "Structured learning paths to deepen your understanding of Christianity.",
    desktopOnly: true,
  },
];
</script>
