<template>
  <section class="w-full bg-[#ffffff]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#ffffff] px-[16px] py-[95px] lg:max-w-full lg:px-[20px] lg:pb-[106px]"
    >
      <div
        class="inline-flex h-[33px] items-center gap-[9px] rounded-[8px] bg-[#F3F4F6] px-[18px] text-[#475569]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.99902 2L13.3303 7.99865L3.99902 13.9973V2Z"
            stroke="#7CB342"
            stroke-width="1.33303"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span
          class="text-[12px] font-semibold uppercase leading-none tracking-[0.08em] text-[#364153]"
        >
          Video Library
        </span>
      </div>

      <h2
        class="mt-[16px] max-w-[345px] lg:max-w-full text-[30px] lg:text-[36px] font-bold leading-[36px] lg:leading-[40px] tracking-[-0.55px] text-[#101828]"
      >
        Watch Recent Videos
      </h2>

      <p
        class="mt-[16px] max-w-[338px] lg:max-w-full text-[18px] font-[400] leading-[28px] tracking-[-0.2px] text-[#4A5565] lg:max-w-[760px]"
      >
        Explore our collection of teaching videos covering faith, theology, and
        life's biggest questions.
      </p>

      <div
        class="mt-[48px] space-y-[24px] bg-[#ffffff] lg:grid lg:grid-cols-4 lg:gap-x-[26px] lg:gap-y-[38px] lg:space-y-0"
      >
        <article
          v-for="video in videos"
          :key="video.title"
          class="bg-[#ffffff]"
          :class="video.desktopOnly ? 'hidden lg:block' : ''"
        >
          <InlineVideoPlayer
            :title="video.title"
            :poster="video.image"
            :embed-src="video.embedSrc"
            :image-class="video.position"
            class="h-[203px] w-full rounded-[14px] bg-[#DDE2E8] lg:h-[186px]"
          >
            <template #overlay>
              <span
                class="absolute left-[10px] top-[10px] rounded-[4px] bg-[#7CB342] px-[10px] py-[6px] text-[12px] font-bold leading-none text-[#ffffff]"
              >
                {{ video.category }}
              </span>
            </template>
          </InlineVideoPlayer>
          <h3
            class="mt-[12px] text-[18px] font-bold leading-[27px] tracking-[-0.28px] text-[#101828]"
          >
            {{ video.title }}
          </h3>
          <p
            class="mt-[5px] text-[14px] font-[400] leading-none tracking-[-0.05px] text-[#6A7282]"
          >
            {{ video.views }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";

const videos = [
  {
    title: "What Happens After Death?",
    views: "24K views",
    image: "/video-library/thumb-0.jpg",
    position: "object-center",
    category: "Theology",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    title: "The Evidence for Jesus",
    views: "31K views",
    image: "/video-library/thumb-2.jpg",
    position: "object-center",
    category: "Apologetics",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    title: "Finding Purpose in Life",
    views: "19K views",
    image: "/video-library/thumb-1.jpg",
    position: "object-center",
    category: "Life Questions",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  {
    title: "Why Does God Allow Suffering?",
    views: "42K views",
    image: "/video-library/thumb-10.jpg",
    position: "object-center",
    category: "Difficult Questions",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    title: "How Can I Know God Personally?",
    views: "28K views",
    image: "/video-library/thumb-5.jpg",
    position: "object-center",
    category: "Theology",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    title: "Understanding the Trinity",
    views: "20K views",
    image: "/video-library/thumb-4.jpg",
    position: "object-center",
    category: "Theology",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
    desktopOnly: true,
  },
  {
    title: "How to Pray Effectively",
    views: "35K views",
    image: "/video-library/thumb-7.jpg",
    position: "object-center",
    category: "Spiritual Growth",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    desktopOnly: true,
  },
  {
    title: "Is the Bible Reliable?",
    views: "51K views",
    image: "/video-library/thumb-8.jpg",
    position: "object-center",
    category: "Apologetics",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    desktopOnly: true,
  },
  {
    title: "Breaking Free from Sin",
    views: "26K views",
    image: "/video-library/thumb-6.jpg",
    position: "object-center",
    category: "Spiritual Growth",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
    desktopOnly: true,
  },
  {
    title: "The Gospel Message Explained",
    views: "63K views",
    image: "/video-library/thumb-9.jpg",
    position: "object-center",
    category: "Gospel",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
    desktopOnly: true,
  },
  {
    title: "Understanding Forgiveness",
    views: "22K views",
    image: "/video-library/thumb-11.jpg",
    position: "object-center",
    category: "Relationships",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
    desktopOnly: true,
  },
  {
    title: "Baptism: What Does It Mean?",
    views: "18K views",
    image: "/video-library/thumb-3.jpg",
    position: "object-center",
    category: "Church Life",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    desktopOnly: true,
  },
];
</script>
