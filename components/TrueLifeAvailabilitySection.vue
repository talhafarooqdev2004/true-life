<template>
  <section class="w-full bg-[linear-gradient(135deg,#101828_0%,#1E2939_100%)]">
    <div
      class="mx-auto grid w-full max-w-[394px] px-[32px] py-[95px] lg:max-w-[1320px] lg:grid-cols-[1fr_520px] lg:items-center lg:gap-[90px] lg:px-[0px] lg:py-[96px]"
    >
      <div>
        <div
          class="inline-flex h-[35px] items-center gap-[8px] rounded-[9px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[18px] text-[#ffffff]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33203 1.33301V3.99907"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6641 1.33301V3.99907"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.6643 2.66602H3.33303C2.59682 2.66602 2 3.26283 2 3.99905V13.3303C2 14.0665 2.59682 14.6633 3.33303 14.6633H12.6643C13.4005 14.6633 13.9973 14.0665 13.9973 13.3303V3.99905C13.9973 3.26283 13.4005 2.66602 12.6643 2.66602Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 6.66504H13.9973"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.06em] text-[#ffffff]"
          >
            Free Consultation
          </span>
        </div>

        <h2
          class="mt-[24px] max-w-[318px] lg:max-w-full text-[30px] lg:text-[48px] font-bold leading-[37.5px] lg:leading-[48.5px] tracking-[-0.55px] text-[#ffffff]"
        >
          View Our Availability and Schedule a Time to Connect
        </h2>

        <p
          class="mt-[24px] max-w-[322px] lg:max-w-full text-[20px] font-[400] leading-[32px] tracking-[-0.25px] text-[#D1D5DC]"
        >
          Let's talk about how this proven system can work for your specific
          church context and goals.
        </p>

        <div class="mt-[32px] space-y-[16px]">
          <div
            v-for="item in benefits"
            :key="item.title"
            class="flex items-start gap-[16px]"
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
                d="M8.99512 11.9941L10.9941 13.993L14.992 9.99512"
                stroke="#7CB342"
                stroke-width="1.99896"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div class="min-w-0">
              <h3
                class="text-[18px] font-bold leading-[20px] tracking-[-0.15px] text-[#ffffff]"
              >
                {{ item.title }}
              </h3>
              <p
                class="mt-[3px] max-w-[230px] text-[16px] font-[400] leading-[24px] tracking-[-0.1px] text-[#99A1AF]"
              >
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="mt-[40px] flex h-[68px] items-center justify-center gap-[22px] rounded-[12px] border border-[#7CB342] bg-[#7CB342] px-[40px] leading-none tracking-[-0.2px] text-[#ffffff] lg:w-[260px] lg: lg:w-[300px]"
        >
          <span class="text-[18px] font-bold">Schedule Your Call</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99707 11.9941H18.9898"
              stroke="white"
              stroke-width="1.99896"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9941 4.99707L18.9905 11.9934L11.9941 18.9898"
              stroke="white"
              stroke-width="1.99896"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="mt-[48px] rounded-[24px] bg-[#ffffff] p-[33px] lg:mt-0">
        <div class="flex items-center justify-between bg-[#ffffff]">
          <h3
            class="text-[24px] font-bold leading-none tracking-[-0.35px] text-[#101828]"
          >
            Select a Time
          </h3>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6641 2.66602V7.99815"
              stroke="#7CB342"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.3281 2.66602V7.99815"
              stroke="#7CB342"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.3276 5.33203H6.66509C5.19266 5.33203 3.99902 6.52567 3.99902 7.9981V26.6606C3.99902 28.133 5.19266 29.3266 6.66509 29.3266H25.3276C26.8 29.3266 27.9936 28.133 27.9936 26.6606V7.9981C27.9936 6.52567 26.8 5.33203 25.3276 5.33203Z"
              stroke="#7CB342"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.99902 13.3301H27.9936"
              stroke="#7CB342"
              stroke-width="2.66607"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div
          class="mt-[32px] grid grid-cols-7 gap-x-[8px] bg-[#ffffff] text-center"
        >
          <span
            v-for="day in weekdays"
            :key="day"
            class="text-[14px] font-semibold leading-none tracking-[0px] text-[#6A7282]"
          >
            {{ day }}
          </span>
        </div>

        <div
          class="mt-[14px] grid grid-cols-7 gap-x-[8px] gap-y-[8px] bg-[#ffffff]"
        >
          <span
            v-for="date in dates"
            :key="date.value"
            class="flex h-[31px] w-[31px] lg:h-[60px] lg:w-[60px] items-center justify-center rounded-[10px] text-[14px] font-medium leading-none tracking-[0px]"
            :class="
              date.active
                ? 'bg-[#7CB342] text-[#ffffff]'
                : 'bg-[#F3F4F6] text-[#99A1AF]'
            "
          >
            {{ date.value }}
          </span>
        </div>

        <div class="mt-[32px] flex items-center gap-[8px] bg-[#ffffff]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_922)">
              <path
                d="M7.99817 14.6633C11.6792 14.6633 14.6633 11.6792 14.6633 7.99817C14.6633 4.3171 11.6792 1.33301 7.99817 1.33301C4.3171 1.33301 1.33301 4.3171 1.33301 7.99817C1.33301 11.6792 4.3171 14.6633 7.99817 14.6633Z"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99805 3.99902V7.99812L10.6641 9.33116"
                stroke="#7CB342"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_922">
                <rect width="15.9964" height="15.9964" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span class="text-[14px] font-semibold leading-none text-[#364153]">
            Available Time Slots
          </span>
        </div>

        <div class="mt-[16px] space-y-[8px] bg-[#ffffff]">
          <button
            v-for="slot in timeSlots"
            :key="slot"
            type="button"
            class="flex h-[46px] w-full items-center justify-center rounded-[10px] !border !border-[#E5E7EB] bg-[#F9FAFB] text-[14px] font-[500] leading-none text-[#364153]"
          >
            {{ slot }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: "Choose a time that works for you",
    text: "Flexible scheduling to fit your busy calendar",
  },
  {
    title: "Learn how the system fits your church",
    text: "Customized approach for your unique congregation",
  },
  {
    title: "Get personalized guidance",
    text: "Expert advice tailored to your ministry goals",
  },
];

const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
const activeDates = new Set([5, 8, 12, 15, 19, 22, 26]);
const dates = Array.from({ length: 31 }, (_, index) => {
  const value = index + 1;
  return {
    value,
    active: activeDates.has(value),
  };
});
const timeSlots = ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
</script>
