<template>
  <section class="w-full bg-[#ffffff]">
    <div
      class="mx-auto w-full max-w-[394px] bg-[#ffffff] px-[30px] py-[95px] lg:max-w-[1320px] lg:px-0"
    >
      <div class="flex justify-center">
        <div
          class="inline-flex h-[34px] items-center gap-[8px] rounded-[10px] bg-[#F3F4F6] px-[16px] text-[#475569]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9973 9.99771C13.9973 10.3513 13.8569 10.6903 13.6069 10.9403C13.3569 11.1903 13.0178 11.3307 12.6643 11.3307H4.66607L2 13.9968V3.33254C2 2.979 2.14044 2.63994 2.39044 2.38995C2.64043 2.13996 2.97949 1.99951 3.33303 1.99951H12.6643C13.0178 1.99951 13.3569 2.13996 13.6069 2.38995C13.8569 2.63994 13.9973 2.979 13.9973 3.33254V9.99771Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span
            class="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-[#475569]"
          >
            Success Stories
          </span>
        </div>
      </div>

      <h2
        class="mx-auto mt-[16px] max-w-[320px] text-center text-[30px] lg: text-[48px] font-bold leading-[36px] lg:leading-[48px] tracking-[-0.55px] text-[#101828] lg:max-w-[700px]"
      >
        Read What Leaders Are Saying...
      </h2>

      <p
        class="mx-auto mt-[16px] max-w-[315px] lg:max-w-full text-center text-[18px] font-[400] leading-[28px] tracking-[-0.2px] text-[#4A5565] lg:max-w-[560px]"
      >
        Hear from pastors and ministry leaders who have transformed their church
        culture with TrueLife's invitation system
      </p>

      <div
        class="mt-[36px] lg:mt-[64px] space-y-[32px] lg:grid lg:grid-cols-3 lg:gap-[28px] lg:space-y-0"
      >
        <article
          v-for="story in stories"
          :key="story.name"
          class="rounded-[16px] border-2 border-[#E5E7EB] bg-[#ffffff] p-[33px]"
        >
          <div
            class="flex items-center gap-[4px] bg-[#ffffff]"
            aria-label="5 star rating"
          >
            <svg
              v-for="star in 5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_130_556)">
                <path
                  d="M9.59987 1.91166C9.63638 1.83791 9.69277 1.77583 9.76268 1.73242C9.8326 1.68902 9.91325 1.66602 9.99555 1.66602C10.0778 1.66602 10.1585 1.68902 10.2284 1.73242C10.2983 1.77583 10.3547 1.83791 10.3912 1.91166L12.3154 5.80926C12.4422 6.0658 12.6293 6.28774 12.8608 6.45605C13.0922 6.62435 13.361 6.73398 13.6441 6.77554L17.9474 7.40529C18.0289 7.4171 18.1055 7.4515 18.1685 7.50458C18.2315 7.55766 18.2784 7.62732 18.3039 7.70567C18.3294 7.78402 18.3324 7.86794 18.3127 7.94793C18.293 8.02793 18.2512 8.1008 18.1923 8.15832L15.0802 11.1888C14.8749 11.3888 14.7214 11.6357 14.6327 11.9082C14.5441 12.1807 14.5229 12.4707 14.5712 12.7531L15.3059 17.0348C15.3203 17.1163 15.3115 17.2002 15.2805 17.2769C15.2495 17.3536 15.1976 17.4201 15.1306 17.4687C15.0636 17.5174 14.9844 17.5462 14.9018 17.552C14.8192 17.5577 14.7367 17.5401 14.6637 17.5012L10.8169 15.4787C10.5634 15.3456 10.2814 15.2761 9.99513 15.2761C9.70885 15.2761 9.42684 15.3456 9.17338 15.4787L5.32742 17.5012C5.2544 17.5399 5.17198 17.5573 5.08956 17.5514C5.00714 17.5456 4.92802 17.5167 4.86119 17.4681C4.79436 17.4195 4.74252 17.3531 4.71155 17.2765C4.68058 17.1999 4.67174 17.1161 4.68601 17.0348L5.41989 12.754C5.46836 12.4714 5.44736 12.1812 5.35869 11.9085C5.27002 11.6358 5.11635 11.3888 4.91092 11.1888L1.79884 8.15915C1.73936 8.1017 1.69721 8.0287 1.67719 7.94846C1.65717 7.86823 1.66009 7.78398 1.68562 7.70533C1.71114 7.62667 1.75825 7.55676 1.82156 7.50357C1.88488 7.45037 1.96186 7.41603 2.04374 7.40445L6.34618 6.77554C6.62961 6.73431 6.89878 6.62482 7.13052 6.45649C7.36226 6.28817 7.54962 6.06605 7.67648 5.80926L9.59987 1.91166Z"
                  fill="#7CB342"
                  stroke="#7CB342"
                  stroke-width="1.666"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_130_556">
                  <rect width="19.992" height="19.992" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p
            class="mt-[15px] text-[16px] font-[400] italic leading-[26px] tracking-[-0.12px] text-[#364153]"
          >
            "{{ story.quote }}"
          </p>

          <div class="mt-[25px] h-px bg-[#E5E7EB]"></div>

          <div class="mt-[8px] flex items-center gap-[16px] bg-[#ffffff]">
            <img
              :src="story.avatar"
              :alt="story.name"
              class="h-[56px] w-[56px] shrink-0 rounded-full bg-[#E5E7EB] object-cover"
              width="58"
              height="58"
            />
            <div class="min-w-0 bg-[#ffffff]">
              <h3
                class="text-[16px] font-bold leading-[24px] tracking-[-0.2px] text-[#101828]"
              >
                {{ story.name }}
              </h3>
              <p
                class="mt-[2px] text-[14px] font-[400] leading-[20px] tracking-[-0.05px] text-[#4A5565]"
              >
                {{ story.role }}
              </p>
              <p
                class="text-[12px] font-[400] leading-[16px] tracking-[-0.05px] text-[#6A7282]"
              >
                {{ story.church }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const stories = [
  {
    quote:
      "This system completely transformed our church culture. Our members went from being afraid to invite people to actively looking for opportunities every week.",
    name: "Pastor John Williams",
    role: "Senior Pastor",
    church: "Grace Community Church",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "The 30-second training is genius! We saw immediate engagement from people who had never invited anyone before. It removed all the pressure.",
    name: "Rev. Sarah Mitchell",
    role: "Lead Pastor",
    church: "New Hope Fellowship",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "We went from 15% participation in outreach to over 75% in just 8 weeks. The custom cards with our branding made all the difference.",
    name: "Pastor David Chen",
    role: "Executive Pastor",
    church: "Cornerstone Church",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    quote:
      'The "what to say" cards are a game-changer. Our congregation feels equipped and confident to have spiritual conversations naturally.',
    name: "Pastor Rachel Thompson",
    role: "Ministry Director",
    church: "Living Water Church",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Best investment we have made in church growth. Real results, measurable engagement, and our people actually love doing it!",
    name: "Rev. Michael Brown",
    role: "Associate Pastor",
    church: "Faith Community",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote:
      "This approach is rooted in biblical truth but packaged in a way that modern church members can actually implement. Highly recommended!",
    name: "Pastor Emily Davis",
    role: "Senior Pastor",
    church: "Harvest Church",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];
</script>
