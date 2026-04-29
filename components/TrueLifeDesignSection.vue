<template>
  <section class="w-full bg-[#F9FAFB]">
    <div
      class="mx-auto grid w-full max-w-[394px] bg-[#F8FAFC] px-[32px] lg:max-w-[1320px] lg:grid-cols-2 lg:gap-[42px] lg:px-[0px] py-[80px] lg:py-[97px]"
    >
      <div>
        <div
          class="inline-flex items-center gap-[8px] rounded-[12px] border border-[#E5E7EB] bg-[#ffffff] px-[18px] py-[8px] text-[#475569]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_449)">
              <path
                d="M13.3303 3.33252H2.66604C1.92983 3.33252 1.33301 3.92934 1.33301 4.66555V11.3307C1.33301 12.0669 1.92983 12.6638 2.66604 12.6638H13.3303C14.0665 12.6638 14.6633 12.0669 14.6633 11.3307V4.66555C14.6633 3.92934 14.0665 3.33252 13.3303 3.33252Z"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.33301 6.66528H14.6633"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_449">
                <rect width="15.9964" height="15.9964" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.09em]"
          >
            Custom Design
          </span>
        </div>

        <h2
          class="mt-[16px] max-w-[320px] lg:max-w-full text-[30px] lg:text-[36px] font-bold leading-[37.5px] lg:leading-[45px] tracking-[-0.55px] text-[#101828]"
        >
          We Design Your Custom Church Invitation Cards
        </h2>

        <ul class="mt-[24px] space-y-[16px]">
          <li
            v-for="item in invitationPoints"
            :key="item"
            class="flex items-start gap-[12px] text-[18px] leading-[1.5] text-[#364153]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9938 21.9886C17.5138 21.9886 21.9886 17.5138 21.9886 11.9938C21.9886 6.47385 17.5138 1.99902 11.9938 1.99902C6.47385 1.99902 1.99902 6.47385 1.99902 11.9938C1.99902 17.5138 6.47385 21.9886 11.9938 21.9886Z"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.99512 11.9938L10.9941 13.9928L14.992 9.99487"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>{{ item }}</span>
          </li>
        </ul>

        <div
          class="mt-[32px] rounded-[16px] border border-[#E5E7EB] bg-[#ffffff] p-[34px] shadow-[0_10px_24px_rgba(16,24,40,0.12)]"
        >
          <div class="rounded-[15px] bg-[#ffffff] px-[0px] py-[0px]">
            <div
              class="rounded-[16px] bg-[#7CB342] px-[20px] py-[40px] lg:h-[327px] text-center text-[#ffffff] flex flex-col justify-center items-center"
            >
              <p class="text-[24px] font-bold leading-none tracking-[-0.25px]">
                Your Church Name
              </p>
              <p
                class="mt-[9px] text-[14px] font-[400] leading-[20px] tracking-[-0.1px] text-[#FFFFFFE5]"
              >
                You're Invited to
                <br />
                Experience Hope
              </p>
            </div>
          </div>

          <p
            class="mt-[16px] text-center text-[14px] font-[400] leading-none tracking-[-0.2px] text-[#6A7282]"
          >
            Example Church Invitation Card
          </p>
        </div>
      </div>

      <div class="mt-[64px] lg:mt-[24px]">
        <div
          class="inline-flex items-center gap-[8px] rounded-[12px] border border-[#E5E7EB] bg-[#ffffff] px-[18px] py-[8px] text-[#475569]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_449)">
              <path
                d="M13.3303 3.33252H2.66604C1.92983 3.33252 1.33301 3.92934 1.33301 4.66555V11.3307C1.33301 12.0669 1.92983 12.6638 2.66604 12.6638H13.3303C14.0665 12.6638 14.6633 12.0669 14.6633 11.3307V4.66555C14.6633 3.92934 14.0665 3.33252 13.3303 3.33252Z"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.33301 6.66528H14.6633"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_449">
                <rect width="15.9964" height="15.9964" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.09em]"
          >
            Conversation Guides
          </span>
        </div>

        <h2
          class="mt-[15px] max-w-[325px] lg:max-w-full text-[30px] lg:text-[36px] font-bold leading-[37.5px] lg:leading-[45px] tracking-[-0.55px] text-[#101828]"
        >
          We Provide "What to Say" Cards for Wallets Too
        </h2>

        <div
          class="mt-[24px] rounded-[16px] border-2 border-[#E5E7EB] bg-[#ffffff] px-[28px] py-[34px] shadow-[0px_20px_25px_-5px_#0000001A]"
        >
          <div class="flex items-start gap-[12px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.93135 15.4918C9.84212 15.1459 9.66183 14.8302 9.40924 14.5776C9.15665 14.325 8.84099 14.1448 8.4951 14.0555L2.36329 12.4743C2.25867 12.4446 2.1666 12.3816 2.10104 12.2949C2.03547 12.2081 2 12.1023 2 11.9936C2 11.8848 2.03547 11.7791 2.10104 11.6923C2.1666 11.6055 2.25867 11.5425 2.36329 11.5128L8.4951 9.93066C8.84087 9.84152 9.15645 9.66138 9.40903 9.40897C9.66161 9.15657 9.84197 8.84112 9.93135 8.49541L11.5125 2.36359C11.5419 2.25857 11.6049 2.16604 11.6918 2.10013C11.7787 2.03421 11.8847 1.99854 11.9938 1.99854C12.1028 1.99854 12.2089 2.03421 12.2958 2.10013C12.3827 2.16604 12.4456 2.25857 12.475 2.36359L14.0552 8.49541C14.1444 8.8413 14.3247 9.15696 14.5773 9.40955C14.8299 9.66214 15.1456 9.84243 15.4915 9.93166L21.6233 11.5118C21.7287 11.5409 21.8217 11.6038 21.888 11.6908C21.9543 11.7778 21.9901 11.8842 21.9901 11.9936C21.9901 12.103 21.9543 12.2093 21.888 12.2964C21.8217 12.3834 21.7287 12.4463 21.6233 12.4753L15.4915 14.0555C15.1456 14.1448 14.8299 14.325 14.5773 14.5776C14.3247 14.8302 14.1444 15.1459 14.0552 15.4918L12.474 21.6236C12.4446 21.7286 12.3817 21.8211 12.2948 21.8871C12.2079 21.953 12.1018 21.9886 11.9928 21.9886C11.8837 21.9886 11.7777 21.953 11.6908 21.8871C11.6039 21.8211 11.5409 21.7286 11.5115 21.6236L9.93135 15.4918Z"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.9893 2.99854V6.99646"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9882 4.99756H17.9902"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.99805 16.9912V18.9902"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.99701 17.9907H2.99805"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3
              class="text-[22px] font-[800] leading-[1.1] tracking-[-0.25px] text-[#172033]"
            >
              What to Say...
            </h3>
          </div>

          <ul class="mt-[24px] space-y-[16px]">
            <li
              v-for="item in guidePoints"
              :key="item"
              class="flex items-start gap-[12px] text-[18px] leading-[28px] text-[#364153]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9938 21.9886C17.5138 21.9886 21.9886 17.5138 21.9886 11.9938C21.9886 6.47385 17.5138 1.99902 11.9938 1.99902C6.47385 1.99902 1.99902 6.47385 1.99902 11.9938C1.99902 17.5138 6.47385 21.9886 11.9938 21.9886Z"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99512 11.9936L10.9941 13.9926L14.992 9.99463"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div
          class="mt-[32px] rounded-[16px] border border-[#E5E7EB] bg-[#ffffff] p-[34px] shadow-[0px_20px_25px_-5px_#0000001A]"
        >
          <div
            class="rounded-[14px] bg-[linear-gradient(135deg,#101828_0%,#1E2939_100%)] p-[24px] text-left text-[#ffffff]"
          >
            <p
              class="text-[14px] font-semibold uppercase leading-none tracking-[0.02em] text-[#7CB342]"
            >
              Conversation Starter:
            </p>
            <p
              class="mt-[12px] max-w-[255px] lg:max-w-full text-[16px] leading-[26px] tracking-[-0.1px] text-[#FFFFFF]"
            >
              "Hey, I've been going to this church that's been really meaningful
              to me. Would you be interested in checking it out with me this
              Sunday?"
            </p>
          </div>

          <p
            class="mt-[16px] text-center text-[14px] leading-[20px] tracking-[-0.15px] text-[#6A7282]"
          >
            Fits in your wallet - always ready
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const invitationPoints = [
  "Personalized for your church",
  "Branded with your identity",
  "Clear messaging for outreach",
  "Easy to distribute and use",
];

const guidePoints = [
  "Short, natural invitation scripts",
  "Easy conversation starters",
  "Helps overcome hesitation",
  "Works in real-life situations",
];
</script>
