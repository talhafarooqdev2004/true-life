<template>
  <RedesignTopNav @go="goTo" />
  <section class="bg-[#f7f8fa]">
    <div
      class="bg-[#111b2a] bg-[radial-gradient(circle_at_top,_#172335_0%,_#111b2a_55%)] px-6 py-[66px] text-center lg:px-0 lg:pt-[95px] lg:pb-[128px]"
    >
      <button
        class="h-[36px] rounded-full !border !border-[#7CB3424D] bg-[#7CB34233] px-[18px] text-[12px] font-bold uppercase leading-none text-[#7CB342] lg:h-[40px] lg:px-[15px] lg:text-[11px]"
      >
        Get Pricing
      </button>

      <h1
        class="mx-auto mt-[25px] max-w-[270px] text-[32px] font-extrabold uppercase leading-[1.25] tracking-[-0.8px] text-white lg:mt-[23px] lg:max-w-none lg:text-[60px] lg:leading-[58px] lg:tracking-[0.6px]"
      >
        Jesus Story Challenge
      </h1>

      <p
        class="mx-auto mt-[22px] max-w-[282px] text-[16px] font-normal leading-[25px] text-[#d7dce4] lg:mt-[24px] lg:max-w-none lg:text-[20px] lg:leading-[24px]"
      >
        To see pricing and join, select your church's average attendance
      </p>
    </div>

    <div class="px-[32px] py-[48px] text-center lg:px-0 py-[60px]">
      <h2
        class="text-[24px] font-bold leading-[32px] tracking-[-0.35px] text-[#111827] lg:text-[30px] lg:leading-[32px] lg:tracking-[-0.3px]"
      >
        Select Your Church Size
      </h2>

      <p
        class="mx-auto mt-[15px] max-w-[300px] text-[16px] font-normal leading-[22px] text-[#536070] lg:mt-[16px] lg:max-w-none lg:text-[18px] lg:leading-[20px]"
      >
        Biblically, my heart's desire and prayer to God for them is that they be
        saved. Romans 10:1
      </p>

      <div
        class="mx-auto mt-[32px] flex flex-wrap justify-center gap-[12px] lg:mt-[23px] lg:flex-nowrap lg:gap-[12px]"
      >
        <button class="size-btn">0-25</button>
        <button class="size-btn">40-50</button>
        <button class="size-btn">100-199</button>
        <button class="size-btn">180-350</button>
        <button class="size-btn">400-750</button>
        <button class="size-btn">900-1,375</button>
        <button class="size-btn">1500-2250</button>
        <button class="size-btn">2500+</button>
      </div>

      <button
        class="mx-auto mt-[24px] flex h-[56px] w-[200px] items-center justify-center gap-[14px] rounded-[10px] bg-[#75b936] text-[14px] font-bold text-white shadow-[0_10px_18px_rgba(64,112,31,0.28)] lg:mt-[28px] lg:h-[56px] lg:w-[194px] lg:gap-[11px] lg:rounded-[14px] lg:text-[12px]"
      >
        Create Your Org
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="lg:h-[17px] lg:w-[17px]"
        >
          <path
            d="M4.16406 9.99591H15.826"
            stroke="white"
            stroke-width="1.66599"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99609 4.16498L15.827 9.99593L9.99609 15.8269"
            stroke="white"
            stroke-width="1.66599"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </section>

  <section
    class="min-h-screen bg-white px-[32px] py-[64px] flex flex-col gap-[32px] lg:px-0 lg:py-[96px]"
  >
    <div
      class="flex flex-col gap-[32px] lg:max-w-[1120px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-[40px]"
    >
      <div
        class="mx-auto w-full rounded-[12px] border border-[#E5E7EB] bg-white p-[34px] shadow-[0px_20px_25px_-5px_#0000001A] lg:p-[40px] lg:rounded-[16px]"
      >
        <p class="text-[18px] leading-[18px] text-[#4a5568]">
          Monthly Plan
          <span class="text-[14px]">(12 Payments Required)</span>
        </p>

        <h2
          class="mt-[14px] text-[36px] font-extrabold uppercase leading-[36px] tracking-[-0.7px] text-[#7CB342] lg:text-[48px] lg:leading-[48px]"
        >
          <span class="text-[#101828]">$ - </span>Select Above
        </h2>

        <ul class="mt-[32px] space-y-[16px] lg:mt-[28px] lg:space-y-[18px]">
          <li v-for="item in features" :key="item" class="flex gap-[12px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0"
            >
              <path
                d="M16.6599 4.99792L7.497 14.1609L3.33203 9.99588"
                stroke="#7CB342"
                stroke-width="1.66599"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span
              class="text-[16px] font-normal leading-[22px] text-[#364153] lg:leading-[24px]"
            >
              {{ item }}
            </span>
          </li>
        </ul>

        <button
          class="mt-[32px] h-[60px] w-full rounded-[14px] bg-[#101828] text-[18px] font-semibold text-white shadow-[0px_10px_15px_-3px_#0000001A] lg:mt-[36px] lg:h-[56px]"
        >
          Get Started
        </button>
      </div>

      <div
        class="mx-auto w-full rounded-[12px] border border-[#E5E7EB] bg-[linear-gradient(135deg,#7CB342_0%,#79B041_12.5%,#77AE3F_25%,#74AB3E_37.5%,#72A93D_50%,#6FA63C_62.5%,#6DA43A_75%,#6AA139_87.5%,#689F38_100%)] p-[34px] shadow-[0px_20px_25px_-5px_#0000001A] lg:p-[40px] lg:rounded-[16px]"
      >
        <p
          class="text-[18px] leading-[18px] text-[#FFFFFFE5] flex gap-2 flex-wrap items-center lg:text-[14px]"
        >
          <span>
            Yearly Plan
            <span class="text-[14px]">(Save 16%)</span>
          </span>

          <span
            class="text-[14px] ms-2 bg-[#FFFFFF33] text-white font-bold px-[16px] py-[12px] rounded-full lg:px-[14px] lg:py-[6px] lg:text-[12px]"
          >
            Save 16%
          </span>
        </p>

        <h2
          class="mt-[14px] text-[36px] font-extrabold uppercase leading-[36px] tracking-[-0.7px] text-[#FFFFFF] lg:text-[48px] lg:leading-[48px]"
        >
          $ - Select Above
        </h2>

        <ul class="mt-[32px] space-y-[16px] lg:mt-[28px] lg:space-y-[18px]">
          <li v-for="item in features" :key="item" class="flex gap-[12px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0"
            >
              <path
                d="M16.6599 4.99805L7.497 14.161L3.33203 9.99601"
                stroke="white"
                stroke-width="1.66599"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-[16px] font-normal leading-[24px] text-[#FFFFFF]">
              {{ item }}
            </span>
          </li>
        </ul>

        <button
          class="mt-[32px] h-[60px] w-full rounded-[14px] bg-[#FFFFFF] text-[18px] font-semibold text-[#7CB342] shadow-[0px_10px_15px_-3px_#0000001A] lg:mt-[36px] lg:h-[56px]"
        >
          Get Started
        </button>
      </div>
    </div>
  </section>

  <div class="bg-[#F9FAFB] px-[32px] py-[64px] lg:px-0 lg:py-[80px]">
    <div
      class="w-full overflow-hidden rounded-[14px] shadow-[0_12px_26px_rgba(0,0,0,0.18)] lg:mx-auto lg:grid lg:max-w-[1330px] lg:grid-cols-[1fr_1fr] lg:items-center lg:rounded-[10px] lg:shadow-[0_12px_26px_rgba(0,0,0,0.12)]"
    >
      <div class="h-[210px] w-full overflow-hidden lg:h-[450px]">
        <img
          src="../assets/images/guarantee.jpg"
          alt="Guarantee"
          class="h-full w-full object-cover lg:object-[center_center]"
        />
      </div>

      <div class="p-[32px] lg:px-[52px] lg:py-[52px]">
        <h3
          class="text-[30px] font-bold leading-[36px] tracking-[-0.4px] text-[#1f2937] lg:text-[36px] lg:leading-[40px] lg:tracking-[-0.6px]"
        >
          Above and Beyond Guarantee:
        </h3>

        <p
          class="mt-[16px] text-[16px] leading-[26px] text-[#364153] lg:mt-[22px] lg:leading-[29px]"
        >
          There's no risk in trying TrueLife, and you can do so with absolute
          assurance. If you join a full refund then choose to go the next level.
        </p>

        <p
          class="mt-[16px] text-[16px] leading-[26px] text-[#364153] lg:mt-[16px] lg:leading-[29px]"
        >
          If your business is not on offer watching the Video(s)/App video and
          receive an always you inclusion cards or print them, you get a full
          refund.
        </p>

        <p
          class="mt-[16px] text-[16px] font-semibold leading-[26px] text-[#101828] lg:mt-[16px] lg:text-[18px] lg:leading-[29px]"
        >
          You have
          <span class="font-bold text-[#7CB342]">30 days</span>
          with the cards to follow our strategy. If you are unhappy with the
          results, we will get you a full refund.
        </p>
      </div>
    </div>
  </div>
  <div class="px-[32px] py-[64px] bg-white lg:px-0 lg:py-[95px]">
    <h2
      class="text-center text-[30px] font-bold leading-[36px] text-[#101828] lg:text-[48px] lg:leading-[36px]"
    >
      Trusted By Ministry Leaders
    </h2>

    <p
      class="mx-auto mt-[16px] max-w-[300px] text-center text-[18px] leading-[28px] text-[#4A5565] lg:max-w-none lg:text-[18px] lg:leading-[20px]"
    >
      See what leaders in the Christian community are saying about TrueLife
    </p>

    <div
      class="mt-[48px] space-y-[22px] lg:mx-auto lg:mt-[64px] lg:grid lg:max-w-[1200px] lg:grid-cols-3 lg:gap-x-[28px] lg:gap-y-[28px] lg:space-y-0"
    >
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="rounded-[14px] border border-[#e5e7eb] bg-white p-[32px] text-center shadow-[0px_10px_15px_-3px_#0000001A] lg:min-h-[206px] lg:rounded-[10px]"
      >
        <div
          class="mx-auto mb-[14px] h-[80px] w-[80px] rounded-full border-[3px] border-[#6cab3c] p-[2px] lg:mb-[16px] lg:border-[2px] lg:p-[1px]"
        >
          <img
            src="../assets/images/front-img.webp"
            alt=""
            class="h-full w-full rounded-full object-cover"
          />
        </div>

        <h3 class="text-[18px] font-bold text-[#101828] lg:leading-[16px]">
          {{ item.name }}
        </h3>

        <p class="mt-[5px] text-[14px] text-[#4A5565]">
          {{ item.role }}
        </p>

        <div class="mt-[25px] flex gap-[6px] text-left relative">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -left-5 -top-3 lg:-left-[20px] lg:-top-[8px]"
          >
            <path
              d="M21.3325 3.99951C20.6253 3.99951 19.9471 4.28044 19.447 4.7805C18.9469 5.28056 18.666 5.95878 18.666 6.66597V14.6654C18.666 15.3726 18.9469 16.0508 19.447 16.5508C19.9471 17.0509 20.6253 17.3318 21.3325 17.3318C21.6861 17.3318 22.0252 17.4723 22.2752 17.7223C22.5252 17.9724 22.6657 18.3115 22.6657 18.6651V19.9983C22.6657 20.7055 22.3848 21.3837 21.8847 21.8838C21.3847 22.3838 20.7064 22.6648 19.9992 22.6648C19.6457 22.6648 19.3065 22.8052 19.0565 23.0552C18.8065 23.3053 18.666 23.6444 18.666 23.998V26.6644C18.666 27.018 18.8065 27.3572 19.0565 27.6072C19.3065 27.8572 19.6457 27.9977 19.9992 27.9977C22.1208 27.9977 24.1555 27.1549 25.6557 25.6547C27.1558 24.1545 27.9986 22.1199 27.9986 19.9983V6.66597C27.9986 5.95878 27.7177 5.28056 27.2176 4.7805C26.7176 4.28044 26.0394 3.99951 25.3322 3.99951H21.3325Z"
              stroke="#7CB342"
              stroke-opacity="0.2"
              stroke-width="2.66646"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66646 3.99951C5.95927 3.99951 5.28105 4.28044 4.78099 4.7805C4.28093 5.28056 4 5.95878 4 6.66597V14.6654C4 15.3726 4.28093 16.0508 4.78099 16.5508C5.28105 17.0509 5.95927 17.3318 6.66646 17.3318C7.02006 17.3318 7.35917 17.4723 7.6092 17.7223C7.85923 17.9724 7.99969 18.3115 7.99969 18.6651V19.9983C7.99969 20.7055 7.71876 21.3837 7.21871 21.8838C6.71865 22.3838 6.04042 22.6648 5.33323 22.6648C4.97964 22.6648 4.64052 22.8052 4.39049 23.0552C4.14047 23.3053 4 23.6444 4 23.998V26.6644C4 27.018 4.14047 27.3572 4.39049 27.6072C4.64052 27.8572 4.97964 27.9977 5.33323 27.9977C7.4548 27.9977 9.48948 27.1549 10.9897 25.6547C12.4898 24.1545 13.3326 22.1199 13.3326 19.9983V6.66597C13.3326 5.95878 13.0517 5.28056 12.5516 4.7805C12.0516 4.28044 11.3733 3.99951 10.6662 3.99951H6.66646Z"
              stroke="#7CB342"
              stroke-opacity="0.2"
              stroke-width="2.66646"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p
            class="text-[14px] leading-[22px] text-[#364153] italic lg:leading-[19px]"
          >
            "{{ item.quote }}"
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-[linear-gradient(135deg,#7CB342_0%,#79B041_12.5%,#77AE3F_25%,#74AB3E_37.5%,#72A93D_50%,#6FA63C_62.5%,#6DA43A_75%,#6AA139_87.5%,#689F38_100%)] px-[32px] py-[64px] text-center lg:px-0 lg:py-[95px]"
  >
    <div class="lg:max-w-[800px] lg:mx-auto">
      <h2
        class="text-[30px] font-bold leading-[36px] text-white lg:text-[48px] lg:leading-[44px]"
      >
        Ready to Transform Your Church?
      </h2>

      <p
        class="mx-auto mt-[25px] max-w-[300px] text-[18px] leading-[29.5px] text-[#FFFFFFE5] lg:mt-[23px] lg:max-w-[640px] lg:text-[20px] lg:leading-[32.5px]"
      >
        Join thousands of churches using TrueLife to reach more people with the
        gospel of Jesus Christ.
      </p>

      <div
        class="mt-[32px] flex flex-col gap-[16px] lg:flex-row lg:justify-center lg:gap-[16px]"
      >
        <button
          class="h-[60px] w-full rounded-[14px] bg-white text-[18px] font-semibold text-[#7CB342] shadow-[0_8px_18px_rgba(0,0,0,0.18)] lg:w-[190px]"
        >
          Get Started Today
        </button>

        <button
          class="h-[60px] w-full rounded-[14px] !border !border-white text-[18px] font-semibold text-white bg-[#FFFFFF33] lg:w-[190px]"
        >
          Contact Sales
        </button>
      </div>
    </div>
  </div>

  <RedesignFooter />
</template>

<script setup>
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";

const features = [
  "Custom-designed QR code pastor video invites cards",
  "One Year License to use TrueBlessing",
  "Access to 2 Church Hosting & Evangelizing",
  "Access to True Life Church Locator System",
  "Premier Jesus Stories & Church Profile",
  "Study Guide and Leader Guides",
  "Instagram-short Jesus-You Leader Codes",
  "Video Player for Your Website",
];

const yearlyFeatures = [
  {
    text: "Custom-designed QR code pastor video invites cards",
    underline: true,
  },
  { text: "One Year License to use TrueBlessing" },
  { text: "Access to 2 Church Hosting & Evangelizing" },
  { text: "Access to True Life Church Locator System" },
  { text: "Premier Jesus Stories & Church Profile" },
  { text: "Study Guide and Leader Guides" },
  { text: "Instagram-short Jesus-You Leader Codes" },
  { text: "Video Player for Your Website" },
];

const testimonials = [
  {
    name: "KEN HAM",
    role: "President, Answers in Genesis",
    image: "../assets/images/front-img.webp",
    quote:
      "Many people are drawn to faith in Jesus. There's a real hunger for biblical answers. TrueLife offers help you with that.",
  },
  {
    name: "JOSH MCDOWELL",
    role: "Author & Speaker",
    image: "../assets/images/front-img.webp",
    quote:
      "TrueLife's helping people worldwide change to more biblical ideas. Now we're personally encountering God with TrueLife very day by far.",
  },
  {
    name: "JONATHAN FALWELL",
    role: "Senior Pastor, Thomas Road Baptist Church",
    image: "../assets/images/front-img.webp",
    quote:
      "TrueLife bring a spiritual answers. I am deeply bed in local churches. There is value in your church.",
  },
  {
    name: "MARK ANGELO",
    role: "Senior Pastor",
    image: "../assets/images/front-img.webp",
    quote:
      "TrueLife truly makes reaching more equipped with sound biblical principles. All answers in most affinity to those that God with Christ. Jesus TrueLife in everyone that.",
  },
  {
    name: "PAIGE PATTERSON",
    role: "Theologian",
    image: "../assets/images/front-img.webp",
    quote:
      "TrueLife truly helps driven believers be passionate sound. You know what TrueLife is important insights.",
  },
];
</script>

<style scoped>
.size-btn {
  height: 43px;
  min-width: 76px;
  border-radius: 14px;
  border: 1.5px solid #d1d5dc;
  background: #ffffff;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #344154;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

@media (min-width: 768px) {
  .size-btn {
    height: 50px;
    border-radius: 14px;
    border: 1.5px solid #d1d5dc;
    background: #ffffff;
    padding: 15px;
    padding-inline: 30px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #344154;
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
  }
}
</style>
