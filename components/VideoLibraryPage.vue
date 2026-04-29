<template>
  <main class="min-h-screen bg-white">
    <RedesignTopNav @go="goTo" />
    <section
      class="bg-[#111C2C] px-[26px] py-[63px] text-white lg:px-[50px] lg:py-[92px]"
    >
      <div
        class="mx-auto max-w-[1450px] lg:grid lg:grid-cols-[1fr_1fr] lg:gap-[65px] lg:items-center"
      >
        <div>
          <div
            class="inline-flex items-center rounded-full border border-[#7CB3424D] bg-[#7CB34233] px-[14px] py-[9px] text-[14px] font-bold uppercase text-[#7CB342] lg:px-[14px] lg:py-[8px] lg:text-[12px]"
          >
            Video Library
          </div>

          <h1
            class="mt-[24px] text-[44px] leading-[60px] font-bold tracking-[-0.6px] text-white lg:mt-[27px] lg:text-[54px] lg:leading-[64px] lg:tracking-[-0.8px]"
          >
            Discover Truth Through
            <span class="text-[#7CB342] lg:block">Video Resources</span>
          </h1>

          <p
            class="mt-[23px] text-[20px] leading-[32.5px] text-[#D1D5DC] lg:max-w-[570px] lg:mt-[24px] lg:text-[17px] lg:leading-[27px]"
          >
            Explore our comprehensive library of biblical teachings,
            testimonies, and apologetics content designed to strengthen your
            faith and equip you to share the gospel.
          </p>

          <div class="mt-[32px] lg:mt-[24px]">
            <div
              class="flex h-[48px] items-center gap-[12px] rounded-[8px] border border-[#FFFFFF26] bg-[#FFFFFF14] px-[14px] lg:h-[49px] lg:w-[570px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#9CA3AF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#9CA3AF"
                  stroke-width="2"
                />
              </svg>

              <input
                type="text"
                placeholder="Search videos by topic, title, or keyword..."
                class="w-full bg-transparent text-[15px] leading-[22px] text-white placeholder:text-[#9CA3AF] outline-none lg:text-[14px]"
              />
            </div>

            <button
              type="button"
              class="mt-[24px] flex h-[42px] w-full items-center justify-center gap-[10px] rounded-[8px] !border !border-[#7CB34266] bg-[#7CB34233] text-[15px] font-bold text-[#7CB342] lg:w-[360px] lg:mt-[20px] lg:h-[43px] lg:w-[276px] lg:text-[13px]"
              @click="qrModalOpen = true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H10V10H4V4Z" stroke="#7CB342" stroke-width="2" />
                <path d="M14 4H20V10H14V4Z" stroke="#7CB342" stroke-width="2" />
                <path d="M4 14H10V20H4V14Z" stroke="#7CB342" stroke-width="2" />
                <path d="M14 14H16" stroke="#7CB342" stroke-width="2" />
                <path d="M18 14H20" stroke="#7CB342" stroke-width="2" />
                <path d="M14 18H20" stroke="#7CB342" stroke-width="2" />
              </svg>
              Scan QR Code for Mobile Access
            </button>
          </div>
        </div>

        <div class="mt-[26px] lg:mt-[24px]">
          <div
            class="overflow-hidden rounded-[8px] bg-[#0B1728] shadow-[0_14px_35px_rgba(0,0,0,0.25)] lg:rounded-[11px]"
          >
            <InlineVideoPlayer
              title="Welcome to TrueLife: How to Use This Library"
              :poster="featuredVideoPoster"
              :embed-src="featuredVideoEmbed"
              class="h-[156px] lg:h-[273px]"
              play-class="lg:h-[68px] lg:w-[68px]"
            >
              <template #overlay>
                <span
                  class="absolute left-[10px] top-[9px] rounded-full bg-[#7CB342] px-[9px] py-[4px] text-[8px] font-bold uppercase text-white lg:left-[14px] lg:top-[14px] lg:px-[15px] lg:py-[8px] lg:text-[12px]"
                >
                  Featured
                </span>

                <div
                  class="absolute bottom-[9px] left-[10px] right-[10px] lg:bottom-[22px] lg:left-[22px] lg:right-[22px]"
                >
                  <div
                    class="mb-[5px] flex items-center gap-[12px] text-[8px] text-white/80 lg:mb-[8px] lg:text-[14px]"
                  >
                    <span>18:22</span>
                    <span>45K views</span>
                  </div>

                  <h3
                    class="text-[12px] font-bold leading-[16px] text-white lg:text-[20px] lg:leading-[22px]"
                  >
                    Welcome to TrueLife: How to Use This Library
                  </h3>

                  <p
                    class="mt-[3px] text-[7px] leading-[11px] text-white/75 lg:mt-[8px] lg:text-[14px] lg:leading-[17px]"
                  >
                    Start here to discover how to navigate our video resources
                    and grow in your faith journey
                  </p>
                </div>
              </template>
            </InlineVideoPlayer>
          </div>

          <div
            class="mt-[14px] grid grid-cols-3 gap-[8px] lg:mt-[20px] lg:gap-[13px]"
          >
            <div
              class="rounded-[5px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[10px] py-[10px] text-center lg:rounded-[8px] lg:px-[10px] lg:py-[16px]"
            >
              <strong
                class="block text-[17px] leading-[20px] text-[#7CB342] lg:text-[24px] lg:leading-[28px]"
                >500+</strong
              >
              <span class="text-[9px] text-[#D1D5DB] lg:text-[13px]"
                >Videos</span
              >
            </div>
            <div
              class="rounded-[5px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[10px] py-[10px] text-center lg:rounded-[8px] lg:px-[10px] lg:py-[16px]"
            >
              <strong
                class="block text-[17px] leading-[20px] text-[#7CB342] lg:text-[24px] lg:leading-[28px]"
                >50+</strong
              >
              <span class="text-[9px] text-[#D1D5DB] lg:text-[13px]"
                >Topics</span
              >
            </div>
            <div
              class="rounded-[5px] border border-[#FFFFFF33] bg-[#FFFFFF1A] px-[10px] py-[10px] text-center lg:rounded-[8px] lg:px-[10px] lg:py-[16px]"
            >
              <strong
                class="block text-[17px] leading-[20px] text-[#7CB342] lg:text-[24px] lg:leading-[28px]"
                >1M+</strong
              >
              <span class="text-[9px] text-[#D1D5DB] lg:text-[13px]"
                >Views</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-[32px] py-[95px]">
      <div class="mx-auto max-w-[1360px]">
        <div class="grid grid-cols-1 gap-[34px] lg:grid-cols-3 lg:gap-[32px]">
          <article v-for="video in videos" :key="video.title">
            <InlineVideoPlayer
              :title="video.title"
              :poster="video.image"
              :embed-src="video.embedSrc"
              class="h-[185px] w-full rounded-[9px] lg:h-[190px]"
            />

            <h2
              class="mt-[16px] text-[20px] leading-[28px] font-bold text-[#101828]"
            >
              {{ video.title }}
            </h2>

            <p class="mt-[8px] text-[16px] leading-[22px] text-[#4A5565]">
              {{ video.description }}
            </p>

            <div
              class="mt-[12px] flex items-center gap-[8px] text-[14px] text-[#6A7282]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 1.99988L13.3326 7.99943L4 13.999V1.99988Z"
                  stroke="#6A7282"
                  stroke-width="1.33323"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {{ video.views }} views
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#111C2C] px-[25px] pt-[50px] pb-[72px] text-white">
      <div
        class="mx-auto max-w-[1120px] lg:grid lg:grid-cols-[1fr_390px] lg:gap-[80px] lg:items-center"
      >
        <div>
          <div
            class="inline-flex rounded-full border border-[#7CB3424D] bg-[#7CB34233] px-[14px] py-[9px] text-[12px] font-bold uppercase text-[#7CB342]"
          >
            Mobile Access
          </div>

          <h2
            class="mt-[26px] text-[31px] leading-[39px] font-bold text-white lg:text-[48px] lg:leading-[58px]"
          >
            Watch Anytime,<br />
            <span class="text-[#7CB342]">Anywhere</span>
          </h2>

          <p
            class="mt-[24px] text-[18px] leading-[28px] text-[#D1D5DB] lg:max-w-[520px]"
          >
            Access our complete video library on your mobile device. Scan the QR
            code to download the TrueLife app and take biblical truth with you
            wherever you go.
          </p>

          <div class="mt-[31px] space-y-[24px]">
            <div class="flex gap-[12px]">
              <div class="pt-[2px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8011 9.99939C22.2577 12.2405 21.9323 14.5705 20.879 16.6007C19.8257 18.6309 18.1082 20.2387 16.013 21.1559C13.9178 22.0731 11.5715 22.2443 9.36531 21.6409C7.15915 21.0375 5.22651 19.6961 3.8897 17.8402C2.55288 15.9844 1.89269 13.7263 2.01923 11.4427C2.14576 9.15899 3.05137 6.98771 4.58502 5.29091C6.11868 3.59412 8.18768 2.47438 10.447 2.11843C12.7063 1.76248 15.0194 2.19184 17.0004 3.33489"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.9995L12 13.9995L22 3.99951"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-[16px] font-bold leading-[22px] text-white">
                  Offline Viewing
                </h3>
                <p class="mt-[4px] text-[15px] leading-[22px] text-[#9CA3AF]">
                  Download videos to watch without internet connection
                </p>
              </div>
            </div>

            <div class="flex gap-[12px]">
              <div class="pt-[2px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8011 9.99939C22.2577 12.2405 21.9323 14.5705 20.879 16.6007C19.8257 18.6309 18.1082 20.2387 16.013 21.1559C13.9178 22.0731 11.5715 22.2443 9.36531 21.6409C7.15915 21.0375 5.22651 19.6961 3.8897 17.8402C2.55288 15.9844 1.89269 13.7263 2.01923 11.4427C2.14576 9.15899 3.05137 6.98771 4.58502 5.29091C6.11868 3.59412 8.18768 2.47438 10.447 2.11843C12.7063 1.76248 15.0194 2.19184 17.0004 3.33489"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.9995L12 13.9995L22 3.99951"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-[16px] font-bold leading-[22px] text-white">
                  Personalized Playlists
                </h3>
                <p class="mt-[4px] text-[15px] leading-[22px] text-[#9CA3AF]">
                  Create custom collections of your favorite teachings
                </p>
              </div>
            </div>

            <div class="flex gap-[12px]">
              <div class="pt-[2px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.8011 9.99939C22.2577 12.2405 21.9323 14.5705 20.879 16.6007C19.8257 18.6309 18.1082 20.2387 16.013 21.1559C13.9178 22.0731 11.5715 22.2443 9.36531 21.6409C7.15915 21.0375 5.22651 19.6961 3.8897 17.8402C2.55288 15.9844 1.89269 13.7263 2.01923 11.4427C2.14576 9.15899 3.05137 6.98771 4.58502 5.29091C6.11868 3.59412 8.18768 2.47438 10.447 2.11843C12.7063 1.76248 15.0194 2.19184 17.0004 3.33489"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 10.9995L12 13.9995L22 3.99951"
                    stroke="#7CB342"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-[16px] font-bold leading-[22px] text-white">
                  New Content Weekly
                </h3>
                <p class="mt-[4px] text-[15px] leading-[22px] text-[#9CA3AF]">
                  Get notified when new videos are added to the library
                </p>
              </div>
            </div>
          </div>

          <div
            class="mt-[32px] space-y-[16px] lg:flex lg:space-y-0 lg:gap-[14px]"
          >
            <button
              type="button"
              class="flex h-[48px] w-full items-center justify-center gap-[12px] rounded-[7px] bg-[#7CB342] text-[16px] font-bold text-white lg:w-[210px]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_278_1533)">
                  <path
                    d="M11.3314 1.33301H4.66526C3.92894 1.33301 3.33203 1.92992 3.33203 2.66624V13.3321C3.33203 14.0684 3.92894 14.6653 4.66526 14.6653H11.3314C12.0678 14.6653 12.6647 14.0684 12.6647 13.3321V2.66624C12.6647 1.92992 12.0678 1.33301 11.3314 1.33301Z"
                    stroke="white"
                    stroke-width="1.33323"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11.999H8.00667"
                    stroke="white"
                    stroke-width="1.33323"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_278_1533">
                    <rect width="15.9988" height="15.9988" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              Download App
            </button>

            <button
              type="button"
              class="h-[48px] w-full rounded-[7px] !border !border-[#FFFFFF33] bg-[#FFFFFF1A] text-[16px] font-bold text-white lg:w-[160px]"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          class="mt-[42px] rounded-[20px] bg-white px-[32px] pt-[37px] pb-[35px] text-center shadow-[0_10px_20px_rgba(0,0,0,0.08)] lg:mt-0"
        >
          <h3 class="text-[27px] leading-[32px] font-bold text-[#111827]">
            Scan to Download
          </h3>

          <p class="mt-[10px] text-[18px] leading-[24px] text-[#4B5563]">
            Available on iOS and Android
          </p>

          <div
            class="mx-auto mt-[30px] flex h-[298px] w-full max-w-[298px] items-center justify-center rounded-[14px] border-[3px] border-[#E5E7EB] bg-white"
          >
            <div class="relative h-[220px] w-[220px]">
              <div
                class="absolute left-0 top-0 h-[58px] w-[58px] bg-black p-[10px]"
              >
                <div class="h-full w-full bg-white p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <div
                class="absolute right-0 top-0 h-[58px] w-[58px] bg-black p-[10px]"
              >
                <div class="h-full w-full bg-white p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <div
                class="absolute bottom-0 left-0 h-[58px] w-[58px] bg-black p-[10px]"
              >
                <div class="h-full w-full bg-white p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <div
                class="absolute left-[72px] top-0 h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[96px] top-0 h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[124px] top-0 h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[72px] top-[24px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[120px] top-[24px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[84px] top-[48px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[108px] top-[48px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-0 top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[24px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[48px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[72px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[96px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[120px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[144px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[168px] top-[72px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[12px] top-[96px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[48px] top-[96px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[96px] top-[96px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[144px] top-[96px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[192px] top-[96px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[24px] top-[120px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[72px] top-[120px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[120px] top-[120px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[168px] top-[120px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[216px] top-[120px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[72px] top-[156px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[96px] top-[156px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[120px] top-[156px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[144px] top-[156px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[168px] top-[156px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[84px] top-[180px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[132px] top-[180px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[180px] top-[180px] h-[12px] w-[12px] bg-black"
              ></div>

              <div
                class="absolute left-[72px] top-[204px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[120px] top-[204px] h-[12px] w-[12px] bg-black"
              ></div>
              <div
                class="absolute left-[168px] top-[204px] h-[12px] w-[12px] bg-black"
              ></div>
            </div>
          </div>

          <div class="mt-[28px] flex items-start justify-center">
            <div class="flex flex-col items-center">
              <div
                class="flex h-[54px] w-[54px] items-center justify-center rounded-[10px] bg-[#F3F4F6]"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.5 12.5C17.5 9.5 20 8 20 8C18.5 6 16 6.2 15.3 6.2C14 6.1 12.8 7 12.1 7C11.4 7 10.3 6.2 9.2 6.2C6.8 6.2 4.5 8.2 4.5 12.1C4.5 13.9 5.2 15.8 6 17.1C6.8 18.4 7.5 19.6 8.7 19.5C9.8 19.5 10.2 18.8 11.5 18.8C12.8 18.8 13.2 19.5 14.3 19.5C15.5 19.5 16.3 18.2 17 16.9C17.5 16 17.7 15.2 17.8 15.1C17.8 15.1 15.6 14.2 15.6 11.7"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="mt-[10px] text-[14px] leading-[18px] text-[#4B5563]">
                App Store
              </p>
            </div>

            <div
              class="mx-[24px] mt-[12px] h-[54px] w-[1px] bg-[#E5E7EB]"
            ></div>

            <div class="flex flex-col items-center">
              <div
                class="flex h-[54px] w-[54px] items-center justify-center rounded-[10px] bg-[#F3F4F6]"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L5 21V3Z" fill="white" />
                </svg>
              </div>
              <p class="mt-[10px] text-[14px] leading-[18px] text-[#4B5563]">
                Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Teleport to="body">
      <div
        v-if="qrModalOpen"
        class="fixed inset-0 z-[9999] flex items-start justify-center bg-black/80 px-[6px] pt-[70px] lg:items-center lg:px-[24px] lg:pt-0"
        @click.self="qrModalOpen = false"
      >
        <div
          class="relative w-full max-w-[214px] rounded-[8px] bg-white px-[14px] pb-[19px] pt-[18px] text-center shadow-[0_24px_70px_rgba(0,0,0,0.34)] lg:max-w-[448px] lg:rounded-[13px] lg:px-[32px] lg:pb-[31px] lg:pt-[31px]"
        >
          <button
            type="button"
            class="absolute right-[10px] top-[10px] flex h-[22px] w-[22px] items-center justify-center text-[#4A5565] lg:right-[22px] lg:top-[21px]"
            aria-label="Close QR modal"
            @click="qrModalOpen = false"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <h2
            class="pr-[16px] text-left text-[20px] font-bold leading-[24px] tracking-[-0.03em] text-[#101828] lg:pr-0 lg:text-center lg:text-[32px] lg:leading-[38px]"
          >
            Watch on Your Phone
          </h2>
          <p
            class="mx-auto mt-[8px] max-w-[180px] text-center text-[11px] leading-[16px] text-[#4A5565] lg:max-w-[300px] lg:text-[14px] lg:leading-[19px]"
          >
            Scan this QR code to access the TrueLife video library on your mobile device
          </p>

          <div
            class="mx-auto mt-[17px] flex h-[182px] w-full max-w-[182px] items-center justify-center rounded-[7px] border-[2px] border-[#E5E7EB] bg-white lg:mt-[28px] lg:h-[294px] lg:max-w-[294px] lg:rounded-[10px] lg:border-[3px]"
          >
            <div class="relative h-[136px] w-[136px] lg:h-[220px] lg:w-[220px]">
              <div
                class="absolute left-0 top-0 h-[36px] w-[36px] bg-black p-[6px] lg:h-[58px] lg:w-[58px] lg:p-[10px]"
              >
                <div class="h-full w-full bg-white p-[6px] lg:p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <div
                class="absolute right-0 top-0 h-[36px] w-[36px] bg-black p-[6px] lg:h-[58px] lg:w-[58px] lg:p-[10px]"
              >
                <div class="h-full w-full bg-white p-[6px] lg:p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <div
                class="absolute bottom-0 left-0 h-[36px] w-[36px] bg-black p-[6px] lg:h-[58px] lg:w-[58px] lg:p-[10px]"
              >
                <div class="h-full w-full bg-white p-[6px] lg:p-[9px]">
                  <div class="h-full w-full bg-black"></div>
                </div>
              </div>

              <span
                v-for="block in modalQrBlocks"
                :key="`${block.x}-${block.y}`"
                class="absolute h-[7px] w-[7px] bg-black lg:h-[12px] lg:w-[12px]"
                :style="{ left: `${block.x}%`, top: `${block.y}%` }"
              ></span>
            </div>
          </div>

          <p
            class="mx-auto mt-[16px] max-w-[175px] text-[10px] leading-[15px] text-[#4A5565] lg:mt-[28px] lg:max-w-[300px] lg:text-[12px] lg:leading-[16px]"
          >
            Point your camera at the QR code to open the link
          </p>

          <button
            type="button"
            class="mt-[14px] flex h-[35px] w-full items-center justify-center rounded-[6px] bg-[#7CB342] text-[12px] font-bold text-white lg:mt-[20px] lg:h-[35px] lg:text-[14px]"
            @click="qrModalOpen = false"
          >
            Continue to Videos
          </button>
        </div>
      </div>
    </Teleport>
    <RedesignFooter />
  </main>
</template>

<script setup>
import { ref } from "vue";
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";

const qrModalOpen = ref(false);

const featuredVideoPoster =
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop";
const featuredVideoEmbed = "https://www.youtube.com/embed/M7lc1UVf-VE";

const videos = [
  {
    title: "What is the Gospel?",
    description: "Understanding the core message of Christianity",
    views: "45K",
    image:
      "https://images.unsplash.com/photo-1614850715973-58c3167b30a0?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    title: "Evidence for the Resurrection",
    description: "Historical and biblical evidence for Jesus' resurrection",
    views: "38K",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    title: "How to Share Your Faith",
    description: "Practical tips for sharing the gospel with others",
    views: "52K",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  {
    title: "Understanding Grace",
    description: "The biblical concept of God's grace explained",
    views: "41K",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    title: "My Journey to Christ",
    description: "A powerful story of transformation through faith",
    views: "29K",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    title: "Living a Holy Life",
    description: "Biblical principles for daily Christian walk",
    views: "35K",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    title: "The Power of Prayer",
    description: "Understanding and practicing effective prayer",
    views: "44K",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/V-_O7nl0Ii0",
  },
  {
    title: "What Happens After Death?",
    description: "Biblical teaching on eternity and the afterlife",
    views: "56K",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    title: "From Atheism to Faith",
    description: "An intellectual's journey from skepticism to belief",
    views: "62K",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    title: "Rooted in Truth",
    description: "Building a faith that stands firm through every season",
    views: "31K",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
    embedSrc: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
];

const qrBlocks = [
  1, 2, 3, 5, 6, 7, 8, 10, 12, 14, 15, 16, 17, 19, 21, 22, 26, 28, 29, 31, 32,
  34, 35, 36, 38, 39, 41, 43, 44, 45, 47, 48, 49,
];

const modalQrBlocks = [
  { x: 43, y: 0 },
  { x: 55, y: 0 },
  { x: 68, y: 0 },
  { x: 43, y: 11 },
  { x: 61, y: 11 },
  { x: 37, y: 22 },
  { x: 49, y: 22 },
  { x: 61, y: 22 },
  { x: 0, y: 34 },
  { x: 12, y: 34 },
  { x: 24, y: 34 },
  { x: 37, y: 34 },
  { x: 49, y: 34 },
  { x: 61, y: 34 },
  { x: 74, y: 34 },
  { x: 86, y: 34 },
  { x: 6, y: 46 },
  { x: 24, y: 46 },
  { x: 49, y: 46 },
  { x: 74, y: 46 },
  { x: 98, y: 46 },
  { x: 12, y: 58 },
  { x: 37, y: 58 },
  { x: 61, y: 58 },
  { x: 86, y: 58 },
  { x: 43, y: 74 },
  { x: 55, y: 74 },
  { x: 68, y: 74 },
  { x: 80, y: 74 },
  { x: 92, y: 74 },
  { x: 49, y: 86 },
  { x: 74, y: 86 },
  { x: 98, y: 86 },
  { x: 43, y: 98 },
  { x: 68, y: 98 },
  { x: 92, y: 98 },
];
</script>
