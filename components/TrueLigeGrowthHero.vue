<template>
  <section class="w-full bg-[#101828]">
    <div
      class="mx-auto flex min-h-[807px] w-full max-w-[394px] flex-col items-center bg-[#101828] px-[20px] pb-[43px] pt-[52px] text-center"
    >
      <div
        class="inline-flex h-[33px] items-center justify-center gap-[7px] rounded-full border border-[#7CB342] bg-[#7CB34233] px-[17px] text-[#FFFFFF]"
      >
        <svg
          class="h-[14px] w-[14px] shrink-0 text-[#7CB342]"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6.891 1.313L7.945 4.36L10.992 5.414L7.945 6.469L6.891 9.516L5.836 6.469L2.789 5.414L5.836 4.36L6.891 1.313Z"
            fill="#7CB342"
          />
          <path
            d="M11.063 7.984L11.648 9.297L12.961 9.883L11.648 10.469L11.063 11.781L10.477 10.469L9.164 9.883L10.477 9.297L11.063 7.984Z"
            fill="#7CB342"
          />
          <path
            d="M2.734 8.531L3.164 9.492L4.125 9.922L3.164 10.352L2.734 11.313L2.305 10.352L1.344 9.922L2.305 9.492L2.734 8.531Z"
            fill="#7CB342"
          />
        </svg>
        <span
          class="text-[10px] font-[800] leading-none tracking-[-0.05px] text-[#FFFFFF]"
        >
          Church Growth Program
        </span>
      </div>

      <h1
        class="mt-[25px] max-w-[250px] text-[27px] font-[800] leading-[0.99] tracking-[-0.65px] text-[#FFFFFF]"
      >
        Get 80% of Your Church to Consistently Engage in
        <span class="text-[#7CB342]">Invite Every Week</span>
      </h1>

      <p
        class="mt-[-1px] max-w-[205px] text-[16px] font-[500] leading-[1.32] tracking-[0px] text-[#D1D5DB]"
      >
        With just 30 seconds of training!
      </p>

      <button
        type="button"
        class="mt-[31px] flex h-[49px] w-[136px] items-center justify-center gap-[15px] rounded-[8px] border border-[#7CB342] bg-[#7CB342] text-[13px] font-[800] leading-none tracking-[0px] text-[#FFFFFF] shadow-[0_0_0_1px_#7CB342]"
      >
        <span>Join Now</span>
        <svg
          class="h-[17px] w-[17px] shrink-0"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M3.188 8.5H13.104"
            stroke="#FFFFFF"
            stroke-width="1.6"
            stroke-linecap="round"
          />
          <path
            d="M9.031 4.427L13.104 8.5L9.031 12.573"
            stroke="#FFFFFF"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        class="mt-[11px] flex h-[50px] w-[136px] items-center justify-center rounded-[9px] border border-[#FFFFFF66] bg-[#FFFFFF1A] text-[13px] font-[800] leading-none tracking-[0px] text-[#FFFFFF]"
      >
        Watch Demo
      </button>

      <div
        class="mt-[45px] h-[126px] w-[230px] overflow-hidden rounded-[12px] bg-[#111827] shadow-[0_18px_34px_rgba(0,0,0,0.36)]"
      >
        <InlineVideoPlayer
          title="Church program demo"
          poster="/video-library/thumb-5.jpg"
          :embed-src="demoEmbedSrc"
          image-class="object-center"
          class="h-[126px] w-[230px] bg-[#111827]"
        />
      </div>

      <div class="mt-[44px] flex w-full flex-col items-center bg-[#101828]">
        <div class="bg-[#101828] text-center">
          <p
            class="text-[28px] font-[800] leading-none tracking-[0px] text-[#7CB342]"
          >
            1,000+
          </p>
          <p
            class="mt-[10px] text-[10px] font-[400] leading-none tracking-[0px] text-[#8F98A8]"
          >
            Churches Using System
          </p>
        </div>

        <div class="mt-[26px] bg-[#101828] text-center">
          <p
            class="text-[28px] font-[800] leading-none tracking-[0px] text-[#7CB342]"
          >
            80%
          </p>
          <p
            class="mt-[10px] text-[10px] font-[400] leading-none tracking-[0px] text-[#8F98A8]"
          >
            Average Engagement Rate
          </p>
        </div>

        <div class="mt-[27px] bg-[#101828] text-center">
          <p
            class="text-[28px] font-[800] leading-none tracking-[0px] text-[#7CB342]"
          >
            30 sec
          </p>
          <p
            class="mt-[10px] text-[10px] font-[400] leading-none tracking-[0px] text-[#8F98A8]"
          >
            Training Time Required
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";

const demoEmbedSrc = "https://www.youtube.com/embed/M7lc1UVf-VE";
</script>
