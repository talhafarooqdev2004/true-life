<template>
  <section class="w-full bg-[#F9FAFB]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#F8FAFC] px-[32px] lg:py-[100px] lg:max-w-[1320px] lg:px-0"
    >
      <div class="flex justify-center bg-[#F8FAFC]">
        <div
          class="inline-flex h-[35px] items-center gap-[8px] rounded-[10px] border border-[#E5E7EB] bg-[#ffffff] px-[18px] text-[#475569] shadow-[0_1px_2px_rgba(16,24,40,0.03)]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99902 1.99951L13.3303 7.99816L3.99902 13.9968V1.99951Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#364153]"
          >
            Video Stories
          </span>
        </div>
      </div>

      <h2
        class="mx-auto mt-[16px] max-w-[310px] lg:max-w-full text-center text-[30px] lg:text-[48px] font-bold leading-[36px] lg:leading-[48px] tracking-[-0.55px] text-[#101828] lg:max-w-[820px]"
      >
        Listen to What Other Pastors Are Saying
      </h2>

      <p
        class="mx-auto mt-[10px] max-w-[340px] lg:max-w-full text-center text-[18px] font-[400] leading-[28px] tracking-[-0.18px] text-[#4A5565] lg:max-w-[620px]"
      >
        Watch real pastors share their experiences and results with the
        invitation system
      </p>

      <div
        class="mt-[64px] space-y-[24px] bg-[#F8FAFC] lg:grid lg:grid-cols-4 lg:gap-[28px] lg:space-y-0"
      >
        <article
          v-for="story in videoStories"
          :key="story.name"
          class="bg-[#F8FAFC]"
        >
          <InlineVideoPlayer
            :title="story.name"
            :poster="story.image"
            :embed-src="story.embedSrc"
            :image-class="story.imagePosition"
            class="h-[185px] w-full rounded-[14px] bg-[#DDE2E8]"
          />
          <h3
            class="mt-[14px] text-[16px] font-bold leading-[24px] tracking-[-0.15px] text-[#101828]"
          >
            {{ story.name }}
          </h3>
          <p
            class="mt-[5px] text-[14px] font-[400] leading-none tracking-[-0.05px] text-[#4A5565]"
          >
            {{ story.church }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";

const videoStories = [
  {
    name: "Pastor Mark Johnson",
    church: "Riverside Community Church",
    image: "/video-library/thumb-0.jpg",
    imagePosition: "object-center",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    name: "Pastor Lisa Anderson",
    church: "Hope City Church",
    image: "/video-library/thumb-5.jpg",
    imagePosition: "object-center",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    name: "Rev. Thomas White",
    church: "Crossroads Fellowship",
    image: "/video-library/thumb-6.jpg",
    imagePosition: "object-center",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  {
    name: "Pastor Jennifer Lee",
    church: "New Life Church",
    image: "/video-library/thumb-4.jpg",
    imagePosition: "object-center",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
];
</script>
