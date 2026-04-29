<template>
  <main class="about-redesign">
    <RedesignTopNav @go="goTo" />

    <section
      class="bg-[#0B1728] text-white px-[32px] pt-[25px] lg:pt-[63px] pb-[34px]"
    >
      <div>
        <div class="lg:mx-auto max-w-[1330px]">
          <div
            class="lg:grid lg:grid-cols-[1fr_520px] lg:gap-[60px] lg:items-center"
          >
            <div>
              <div
                class="inline-block px-4 py-[10px] rounded-full bg-[#7CB34233] text-[#7CB342] text-[14px] tracking-wide border border-[#7CB3424D]"
              >
                OUR MISSION
              </div>

              <h1
                class="mt-6 text-[48px] leading-[60px] font-bold lg:text-[60px] lg:leading-[75px]"
              >
                <span class="text-white">Spreading Truth,</span><br />
                <span class="text-[#7CB342]">Changing Lives</span>
              </h1>

              <p
                class="mt-4 text-[20px] leading-[32.5px] text-[#D1D5DC] max-w-[520px] lg:max-w-full"
              >
                TrueLife is a not-for-profit ministry dedicated to spreading the
                truth of the gospel of Jesus Christ through innovative digital
                resources, empowering churches and individuals worldwide.
              </p>

              <div
                class="mt-[24px] space-y-[13px] lg:flex lg:space-y-0 lg:gap-[16px]"
              >
                <button
                  class="w-full lg:w-auto px-[20px] h-[48px] bg-[#7CB342] rounded-lg flex items-center justify-center gap-[17px] text-[16px] font-semibold shadow-[0_6px_14px_rgba(0,0,0,0.25)]"
                >
                  <span class="text-white"> Find a Church</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33398 7.99939H12.6666"
                      stroke="white"
                      stroke-width="1.33323"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 3.33307L12.6663 7.99938L8 12.6657"
                      stroke="white"
                      stroke-width="1.33323"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button
                  class="w-full lg:w-auto px-[20px] lg:px-[40px] h-[48px] !border !border-[#FFFFFF33] rounded-[10px] text-[16px] text-white bg-[#FFFFFF1A] font-semibold backdrop-blur-[4px]"
                >
                  Support Our Mission
                </button>
              </div>
            </div>

            <div class="mt-[40px] lg:mt-0">
              <div class="rounded-[16px] overflow-hidden relative">
                <div
                  class="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 z-10"
                ></div>

                <img
                  src="./assets/images/about-design.jpg"
                  class="w-full h-[420px] lg:h-[570px] object-cover"
                />

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end"
                >
                  <p class="p-[20px] text-[16px] lg:text-[18px] text-white">
                    Reaching the world with the message of Jesus Christ
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-[80px] lg:mt-[40px] grid grid-cols-2 gap-y-[32px] lg:grid-cols-4 lg:gap-y-0 lg:gap-x-[60px] lg:text-left"
          >
            <div>
              <p
                class="text-[#7CB342] text-[40px] lg:text-[48px] font-bold lg:text-center"
              >
                5,000+
              </p>
              <p
                class="text-[#99A1AF] mt-2 text-[12px] lg:text-[14px] tracking-wide lg:text-center"
              >
                PARTNER CHURCHES
              </p>
            </div>

            <div>
              <p
                class="text-[#7CB342] text-[40px] font-bold lg:text-[48px] lg:text-center"
              >
                50+
              </p>
              <p
                class="text-[#99A1AF] mt-2 text-[12px] tracking-wide lg:text-[14px] lg:text-center"
              >
                DENOMINATIONS
              </p>
            </div>

            <div>
              <p
                class="text-[#7CB342] text-[40px] font-bold lg:text-[48px] lg:text-center"
              >
                Global
              </p>
              <p
                class="text-[#99A1AF] mt-2 text-[12px] tracking-wide lg:text-[14px] lg:text-center"
              >
                REACH
              </p>
            </div>

            <div>
              <p
                class="text-[#7CB342] text-[40px] font-bold lg:text-[48px] lg:text-center"
              >
                24/7
              </p>
              <p
                class="text-[#99A1AF] mt-2 text-[12px] tracking-wide lg:text-[14px] lg:text-center"
              >
                ONLINE RESOURCES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F8FAFC] lg:mx-auto px-[32px] py-[80px]">
      <div class="mx-auto max-w-[1330px]">
        <div class="text-center">
          <h2 class="text-[48px] leading-[48px] font-bold text-[#101828]">
            What We Believe
          </h2>

          <p
            class="mx-auto mt-4 max-w-[320px] lg:max-w-[640px] text-[20px] leading-[28px] text-[#4A5565]"
          >
            Our foundation is built on biblical truth and a passion for sharing
            the gospel with the world.
          </p>
        </div>

        <div
          class="mt-[40px] lg:mt-[64px] grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-[24px]"
        >
          <div
            class="rounded-[14px] border border-[#E8ECF1] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[#7CB3421A]"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.998 8.16504V24.4952"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.49847 20.9959C3.18911 20.9959 2.89242 20.873 2.67367 20.6542C2.45492 20.4355 2.33203 20.1388 2.33203 19.8294V4.66571C2.33203 4.35635 2.45492 4.05966 2.67367 3.84091C2.89242 3.62216 3.18911 3.49927 3.49847 3.49927H9.33067C10.5681 3.49927 11.7549 3.99084 12.6299 4.86584C13.5049 5.74084 13.9964 6.92759 13.9964 8.16503C13.9964 6.92759 14.488 5.74084 15.363 4.86584C16.238 3.99084 17.4248 3.49927 18.6622 3.49927H24.4944C24.8038 3.49927 25.1004 3.62216 25.3192 3.84091C25.5379 4.05966 25.6608 4.35635 25.6608 4.66571V19.8294C25.6608 20.1388 25.5379 20.4355 25.3192 20.6542C25.1004 20.873 24.8038 20.9959 24.4944 20.9959H17.4958C16.5677 20.9959 15.6776 21.3646 15.0214 22.0208C14.3651 22.6771 13.9964 23.5671 13.9964 24.4952C13.9964 23.5671 13.6278 22.6771 12.9715 22.0208C12.3153 21.3646 11.4252 20.9959 10.4971 20.9959H3.49847Z"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[20px] leading-[28px] font-bold text-[#101828]"
            >
              Biblical Truth
            </h3>

            <p class="mt-[12px] text-[16px] leading-[26px] text-[#4A5565]">
              We believe the truth of Christianity is real and that the Bible is
              true and reliable.
            </p>
          </div>

          <div
            class="rounded-[14px] border border-[#E8ECF1] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[#7CB3421A]"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1615 16.3301C23.8995 14.6271 25.6608 12.5858 25.6608 9.91469C25.6608 8.21321 24.9849 6.58143 23.7818 5.3783C22.5787 4.17518 20.9469 3.49927 19.2454 3.49927C17.1925 3.49927 15.7461 4.08249 13.9964 5.83215C12.2468 4.08249 10.8004 3.49927 8.74745 3.49927C7.04598 3.49927 5.41419 4.17518 4.21107 5.3783C3.00794 6.58143 2.33203 8.21321 2.33203 9.91469C2.33203 12.5975 4.08169 14.6388 5.83135 16.3301L13.9964 24.4952L22.1615 16.3301Z"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[20px] leading-[28px] font-bold text-[#101828]"
            >
              Gospel-Centered
            </h3>

            <p class="mt-[12px] text-[16px] leading-[26px] text-[#4A5565]">
              Our mission is to spread the gospel of Jesus Christ wherever and
              however possible.
            </p>
          </div>

          <div
            class="rounded-[14px] border border-[#E8ECF1] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[#7CB3421A]"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6622 24.4952V22.1623C18.6622 20.9249 18.1706 19.7382 17.2956 18.8632C16.4206 17.9882 15.2339 17.4966 13.9964 17.4966H6.99779C5.76036 17.4966 4.5736 17.9882 3.6986 18.8632C2.8236 19.7382 2.33203 20.9249 2.33203 22.1623V24.4952"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4978 12.8308C13.0746 12.8308 15.1636 10.7419 15.1636 8.16503C15.1636 5.5882 13.0746 3.49927 10.4978 3.49927C7.92096 3.49927 5.83203 5.5882 5.83203 8.16503C5.83203 10.7419 7.92096 12.8308 10.4978 12.8308Z"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[20px] leading-[28px] font-bold text-[#101828]"
            >
              Church Partnership
            </h3>

            <p class="mt-[12px] text-[16px] leading-[26px] text-[#4A5565]">
              Working alongside churches to equip believers and reach
              communities with truth.
            </p>
          </div>

          <div
            class="rounded-[14px] border border-[#E8ECF1] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] bg-[#7CB3421A]"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9964 25.6616C20.4385 25.6616 25.6608 20.4392 25.6608 13.9972C25.6608 7.5551 20.4385 2.33276 13.9964 2.33276C7.55436 2.33276 2.33203 7.5551 2.33203 13.9972C2.33203 20.4392 7.55436 25.6616 13.9964 25.6616Z"
                  stroke="#7CB342"
                  stroke-width="2.33288"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[20px] leading-[28px] font-bold text-[#101828]"
            >
              Global Impact
            </h3>

            <p class="mt-[12px] text-[16px] leading-[26px] text-[#4A5565]">
              Using media, conferences, and events to bring individuals to faith
              in Christ.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-[32px] py-[80px]">
      <div class="mx-auto max-w-[1330px]">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_520px] lg:gap-[60px] lg:items-start"
        >
          <div>
            <h2
              class="text-[36px] lg:text-[48px] leading-[40px] font-bold text-[#101828]"
            >
              Our Story
            </h2>

            <div
              v-if="pageContent"
              class="mt-[24px] text-[18px] leading-[29.5px] text-[#364153] [&_p]:mb-7 last:[&_p]:mb-0 [&_strong]:font-bold [&_strong]:text-[#111827] [&_blockquote]:mt-4 [&_blockquote]:border-l-[3px] [&_blockquote]:border-[#76B943] [&_blockquote]:bg-[#F7FBF4] [&_blockquote]:px-6 [&_blockquote]:py-6 [&_blockquote]:text-[16px] [&_blockquote]:leading-[25px] [&_blockquote]:font-bold [&_blockquote]:italic [&_blockquote]:text-[#111827] [&_blockquote]:rounded-r-[8px]"
              v-html="pageContent"
            />

            <template v-else>
              <p class="mt-6 text-[18px] leading-[29px] text-[#364153]">
                TrueLife is a not-for-profit ministry that believes the truth of
                Christianity is real and that the Bible is true and reliable. We
                desire to spread the gospel of Jesus Christ wherever and however
                possible throughout the United States and international areas.
              </p>

              <p class="mt-7 text-[18px] leading-[29px] text-[#364153]">
                Using online videos and other media, local conferences and
                evangelistic events, we bring individuals to faith in Christ and
                equip believers with solid biblical teaching.
              </p>

              <p class="mt-7 text-[18px] leading-[29px] text-[#364153]">
                Over the course of our ministry, we have partnered with almost
                <strong class="font-bold text-[#111827]">5,000 churches</strong>
                from virtually every conceivable denomination, working together
                to reach communities with the gospel.
              </p>
            </template>

            <blockquote
              class="mt-[32px] rounded-r-[14px] border-l-[4px] border-[#7CB342] bg-[#7CB3420D] p-[24px] text-[16px] font-medium italic leading-[24px] text-[#101828] lg:mt-[40px] lg:text-[18px] lg:leading-[30px]"
            >
              "Our mission is to help churches and believers understand and
              defend their faith, while empowering them to share the gospel
              effectively."
            </blockquote>
          </div>

          <div
            class="flex h-[420px] lg:h-[390px] flex-col overflow-hidden rounded-[14px] bg-[#0B1728] shadow-[0_12px_30px_rgba(15,23,42,0.12)] mt-[40px] lg:mt-0"
          >
            <div
              v-if="pageEmbed"
              class="relative h-[70%] w-full overflow-hidden [&_iframe]:h-full [&_iframe]:w-full"
            >
              <div class="h-full w-full" v-html="pageEmbed" />
            </div>

            <div
              v-else
              class="h-[80%] w-full"
            >
              <InlineVideoPlayer
                title="Watch Our Story"
                poster="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
                embed-src="https://www.youtube.com/embed/M7lc1UVf-VE"
                class="h-full w-full"
                play-class="!h-[72px] !w-[72px] !text-[#0B1728]"
              />
            </div>

            <div class="flex h-[30%] flex-col justify-center bg-[#0B1728] px-6">
              <strong
                class="block text-[20px] leading-[28px] font-bold text-white"
              >
                Watch Our Story
              </strong>

              <p class="mt-2 text-[16px] leading-[24px] text-[#99A1AF]">
                Learn more about how TrueLife is making an impact around the
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F9FAFB] px-[32px] py-[25px] lg:py-[80px]">
      <div class="mx-auto max-w-[1330px]">
        <div class="text-center">
          <h2
            class="text-[36px] lg:text-[48px] leading-[40px] font-bold text-[#101828]"
          >
            What We Do
          </h2>

          <p
            class="mx-auto mt-[15px] max-w-[320px] lg:max-w-full text-[20px] leading-[28px] text-[#4A5565]"
          >
            Providing resources and tools to help people discover truth and grow
            in their faith.
          </p>
        </div>

        <div
          class="mt-[25px] lg:mt-[64px] grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-[24px]"
        >
          <div
            class="rounded-[14px] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#DBEAFE]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99805 2.99951L19.9953 11.9978L5.99805 20.996V2.99951Z"
                  stroke="#155DFC"
                  stroke-width="1.99961"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[24px] leading-[32px] font-bold text-[#101828]"
            >
              Video Resources
            </h3>

            <p class="mt-[16px] text-[16px] leading-[26px] text-[#4A5565]">
              Expert answers to life's most challenging questions through
              engaging video content from biblical scholars and theologians.
            </p>

            <button
              type="button"
              class="mt-6 inline-flex items-center gap-[9px] text-[16px] leading-[24px] font-semibold text-[#7CB342]"
              @click="goTo('/')"
            >
              Explore Videos
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 7.99854H12.6636"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99805 3.33301L12.6638 7.99877L7.99805 12.6645"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            class="rounded-[14px] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#F3E8FF]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.998 6.99854V20.9958"
                  stroke="#9810FA"
                  stroke-width="1.99961"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.99981 17.9966C2.73464 17.9966 2.48034 17.8913 2.29284 17.7038C2.10534 17.5163 2 17.262 2 16.9968V3.99932C2 3.73415 2.10534 3.47985 2.29284 3.29235C2.48034 3.10485 2.73464 2.99951 2.99981 2.99951H7.99884C9.0595 2.99951 10.0767 3.42086 10.8267 4.17086C11.5767 4.92086 11.9981 5.93808 11.9981 6.99874C11.9981 5.93808 12.4194 4.92086 13.1694 4.17086C13.9194 3.42086 14.9366 2.99951 15.9973 2.99951H20.9963C21.2615 2.99951 21.5158 3.10485 21.7033 3.29235C21.8908 3.47985 21.9961 3.73415 21.9961 3.99932V16.9968C21.9961 17.262 21.8908 17.5163 21.7033 17.7038C21.5158 17.8913 21.2615 17.9966 20.9963 17.9966H14.9975C14.202 17.9966 13.4391 18.3126 12.8766 18.8751C12.3141 19.4376 11.9981 20.2005 11.9981 20.996C11.9981 20.2005 11.6821 19.4376 11.1196 18.8751C10.5571 18.3126 9.79414 17.9966 8.99864 17.9966H2.99981Z"
                  stroke="#9810FA"
                  stroke-width="1.99961"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[24px] leading-[32px] font-bold text-[#101828]"
            >
              Church Resources
            </h3>

            <p class="mt-[16px] text-[16px] leading-[26px] text-[#4A5565]">
              Equipping pastors and churches with sermon builders, evangelism
              tools, and comprehensive biblical resources.
            </p>

            <button
              type="button"
              class="mt-6 inline-flex items-center gap-[9px] text-[16px] leading-[24px] font-semibold text-[#7CB342]"
              @click="goTo('/')"
            >
              For Pastors
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 7.99854H12.6636"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99805 3.33301L12.6638 7.99877L7.99805 12.6645"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            class="rounded-[14px] bg-white p-[32px] shadow-[0px_1px_2px_-1px_#0000001A,_0px_1px_3px_0px_#0000001A]"
          >
            <div
              class="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] bg-[#FFE2E2]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9967 13.9974C20.4864 12.5377 21.9961 10.788 21.9961 8.49845C21.9961 7.04004 21.4168 5.64136 20.3855 4.61011C19.3543 3.57886 17.9556 2.99951 16.4972 2.99951C14.7375 2.99951 13.4978 3.49941 11.9981 4.99912C10.4984 3.49941 9.25859 2.99951 7.49893 2.99951C6.04053 2.99951 4.64185 3.57886 3.6106 4.61011C2.57935 5.64136 2 7.04004 2 8.49845C2 10.798 3.49971 12.5477 4.99942 13.9974L11.9981 20.996L18.9967 13.9974Z"
                  stroke="#E7000B"
                  stroke-width="1.99961"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="mt-[24px] text-[24px] leading-[32px] font-bold text-[#101828]"
            >
              Share Your Story
            </h3>

            <p class="mt-[16px] text-[16px] leading-[26px] text-[#4A5565]">
              Record and share your testimony through our innovative technology,
              helping others discover Jesus.
            </p>

            <button
              type="button"
              class="mt-6 inline-flex items-center gap-[9px] text-[16px] leading-[24px] font-semibold text-[#7CB342]"
              @click="goTo('/')"
            >
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 7.99854H12.6636"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99805 3.33301L12.6638 7.99877L7.99805 12.6645"
                  stroke="#7CB342"
                  stroke-width="1.33307"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white px-[32px] py-[25px] pb-[30px] lg:py-[80px]">
      <div class="mx-auto max-w-[1330px]">
        <div class="text-center">
          <h2
            class="text-[36px] lg:text-[48px] leading-[40px] font-bold text-[#101828]"
          >
            Denominational Partners
          </h2>

          <p
            class="mx-auto mt-[16px] max-w-[340px] lg: max-w-full lg:w-[55%] text-[20px] leading-[28px] text-[#4A5565]"
          >
            We're honored to work alongside churches from over 50 denominations,
            united in sharing the gospel.
          </p>
        </div>

        <div
          class="mt-[33px] lg:mt-[56px] grid grid-cols-2 gap-[24px] lg:grid-cols-4 lg:gap-[24px]"
        >
          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Southern Baptist
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Independent Baptist
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Presbyterian
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Evangelical Free
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Global Methodist Church
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Lutheran Church Missouri Synod
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Acts 29
          </div>

          <div
            class="flex items-center justify-center rounded-[10px] border border-[#E5E7EB] bg-[#F9FAFB] p-[24px] text-center text-[14px] leading-[20px] text-[#364153] font-medium"
          >
            Church of the Nazarene
          </div>
        </div>

        <p
          class="mt-[48px] text-center text-[16px] leading-[24px] text-[#536173]"
        >
          Plus many more churches and organizations worldwide
        </p>

        <div
          class="mt-[17px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] text-[#6A7282]"
        >
          <button
            type="button"
            class="text-[#6B7280]"
            @click="openExternal('https://www.liberty.edu')"
          >
            Liberty University
          </button>

          <span>•</span>

          <button
            type="button"
            class="text-[#6B7280]"
            @click="openExternal('#')"
          >
            American Association of Christian Counselors
          </button>

          <span>•</span>

          <button
            type="button"
            class="text-[#6B7280]"
            @click="openExternal('https://answersingenesis.org')"
          >
            Answers in Genesis
          </button>

          <span>•</span>

          <button
            type="button"
            class="text-[#6B7280]"
            @click="openExternal('#')"
          >
            Christ for All Peoples
          </button>
        </div>
      </div>
    </section>

    <section
      class="bg-[linear-gradient(135deg,_#7CB342_0%,_#79B041_12.5%,_#77AE3F_25%,_#74AB3E_37.5%,_#72A93D_50%,_#6FA63C_62.5%,_#6DA43A_75%,_#6AA139_87.5%,_#689F38_100%)] px-[32px] py-[60px] lg:py-[112px]"
    >
      <div class="mx-auto max-w-[1330px]">
        <div
          class="grid grid-cols-1 lg:grid-cols-[1fr_670px] lg:gap-[60px] lg:items-center"
        >
          <div>
            <h2
              class="text-[36px] leading-[40px] font-bold text-white lg:text-[48px] lg:leading-[48px]"
            >
              Join Us in<br />
              Spreading the Gospel
            </h2>

            <p
              class="mt-[24px] text-[20px] leading-[28px] text-[#FFFFFFE5] max-w-[520px]"
            >
              Partner with TrueLife to reach more people with the message of
              Jesus Christ. Whether you're a church, pastor, or individual
              believer, there's a place for you in this mission.
            </p>

            <div class="mt-[31px] space-y-4 lg:flex lg:space-y-0 lg:gap-[16px]">
              <button
                type="button"
                class="w-full lg:w-auto px-[20px] h-[48px] rounded-[10px] bg-white text-[#7CB342] text-[16px] font-semibold shadow-[0_6px_14px_rgba(0,0,0,0.15)]"
                @click="goTo('/locations')"
              >
                Find a Church Near You
              </button>

              <button
                type="button"
                class="w-full lg:w-auto px-[20px] h-[48px] rounded-[10px] !border-2 !border-white text-white text-[16px] font-semibold bg-[#FFFFFF33]"
                @click="goTo('/pages/contact-truelife-org')"
              >
                Make a Donation
              </button>
            </div>
          </div>

          <div class="mt-[48px] lg:mt-0 grid grid-cols-2 gap-[24px]">
            <div class="rounded-[14px] bg-[#FFFFFF1A] p-[28px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.3293 16.6631C37.0903 20.3979 36.5479 24.2806 34.7926 27.6639C33.0374 31.0472 30.1753 33.7265 26.6837 35.255C23.192 36.7835 19.2819 37.0688 15.6054 36.0633C11.9289 35.0578 8.70827 32.8223 6.48051 29.7296C4.25274 26.6369 3.15256 22.8739 3.36342 19.0683C3.57428 15.2626 5.08345 11.6442 7.63924 8.81656C10.195 5.98891 13.643 4.1229 17.408 3.52972C21.1731 2.93654 25.0278 3.65204 28.3291 5.55691"
                  stroke="white"
                  stroke-width="3.33269"
                />
                <path
                  d="M14.998 18.3299L19.9971 23.329L36.6605 6.66553"
                  stroke="white"
                  stroke-width="3.33269"
                />
              </svg>

              <h3
                class="mt-[17px] text-[18px] leading-[28px] font-bold text-white"
              >
                Free Resources
              </h3>

              <p class="mt-2 text-[14px] leading-[20px] text-[#FFFFFFCC]">
                Access thousands of free videos and articles
              </p>
            </div>

            <div class="rounded-[14px] bg-[#FFFFFF1A] p-[28px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.3293 16.6631C37.0903 20.3979 36.5479 24.2806 34.7926 27.6639C33.0374 31.0472 30.1753 33.7265 26.6837 35.255C23.192 36.7835 19.2819 37.0688 15.6054 36.0633C11.9289 35.0578 8.70827 32.8223 6.48051 29.7296C4.25274 26.6369 3.15256 22.8739 3.36342 19.0683C3.57428 15.2626 5.08345 11.6442 7.63924 8.81656C10.195 5.98891 13.643 4.1229 17.408 3.52972C21.1731 2.93654 25.0278 3.65204 28.3291 5.55691"
                  stroke="white"
                  stroke-width="3.33269"
                />
                <path
                  d="M14.998 18.3299L19.9971 23.329L36.6605 6.66553"
                  stroke="white"
                  stroke-width="3.33269"
                />
              </svg>

              <h3
                class="mt-[17px] text-[18px] leading-[28px] font-bold text-white"
              >
                Church Tools
              </h3>

              <p class="mt-2 text-[14px] leading-[20px] text-[#FFFFFFCC]">
                Evangelism materials for your congregation
              </p>
            </div>

            <div class="rounded-[14px] bg-[#FFFFFF1A] p-[28px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.3293 16.6631C37.0903 20.3979 36.5479 24.2806 34.7926 27.6639C33.0374 31.0472 30.1753 33.7265 26.6837 35.255C23.192 36.7835 19.2819 37.0688 15.6054 36.0633C11.9289 35.0578 8.70827 32.8223 6.48051 29.7296C4.25274 26.6369 3.15256 22.8739 3.36342 19.0683C3.57428 15.2626 5.08345 11.6442 7.63924 8.81656C10.195 5.98891 13.643 4.1229 17.408 3.52972C21.1731 2.93654 25.0278 3.65204 28.3291 5.55691"
                  stroke="white"
                  stroke-width="3.33269"
                />
                <path
                  d="M14.998 18.3299L19.9971 23.329L36.6605 6.66553"
                  stroke="white"
                  stroke-width="3.33269"
                />
              </svg>

              <h3
                class="mt-[17px] text-[18px] leading-[28px] font-bold text-white"
              >
                Expert Answers
              </h3>

              <p class="mt-2 text-[14px] leading-[20px] text-[#FFFFFFCC]">
                Biblical scholars answering tough questions
              </p>
            </div>

            <div class="rounded-[14px] bg-[#FFFFFF1A] p-[28px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M36.3293 16.6631C37.0903 20.3979 36.5479 24.2806 34.7926 27.6639C33.0374 31.0472 30.1753 33.7265 26.6837 35.255C23.192 36.7835 19.2819 37.0688 15.6054 36.0633C11.9289 35.0578 8.70827 32.8223 6.48051 29.7296C4.25274 26.6369 3.15256 22.8739 3.36342 19.0683C3.57428 15.2626 5.08345 11.6442 7.63924 8.81656C10.195 5.98891 13.643 4.1229 17.408 3.52972C21.1731 2.93654 25.0278 3.65204 28.3291 5.55691"
                  stroke="white"
                  stroke-width="3.33269"
                />
                <path
                  d="M14.998 18.3299L19.9971 23.329L36.6605 6.66553"
                  stroke="white"
                  stroke-width="3.33269"
                />
              </svg>

              <h3
                class="mt-[17px] text-[18px] leading-[28px] font-bold text-white"
              >
                Global Reach
              </h3>

              <p class="mt-2 text-[14px] leading-[20px] text-[#FFFFFFCC]">
                Partnering with churches worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RedesignFooter />
  </main>
</template>

<script setup>
import { computed } from "vue";
import { isEmpty } from "lodash";
import { useStore } from "vuex";
import { useAsyncData, useRouter } from "#imports";
import { useI18n } from "vue-i18n";
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
import IconBook from "~/components/icons/IconBook.vue";
import IconCheckSquare from "~/components/icons/IconCheckSquare.vue";
import IconMapPin from "~/components/icons/IconMapPin.vue";
import IconMail from "~/components/icons/IconMail.vue";
import IconGlobe from "~/components/icons/IconGlobe.vue";
import IconUsers from "~/components/icons/IconUsers.vue";

const router = useRouter();
const store = useStore();
const { locale } = useI18n();

const aboutState = useAsyncData("about-redesign", async () => {
  if (isEmpty(store.state.pages)) {
    await store.dispatch("fetchPages");
  }
  const pages = store.state.pages || [];
  const aboutPage = pages.find((p) => p.slug === "about-truelife-org") || {};
  return { aboutPage };
});

const aboutPage = computed(() => aboutState.data.value?.aboutPage || {});

const pageContent = computed(() => {
  const key = locale.value === "es" ? "es_content" : "content";
  return aboutPage.value[key] || aboutPage.value.content || "";
});

const pageEmbed = computed(() => {
  const key = locale.value === "es" ? "es_embed" : "embed";
  return aboutPage.value[key] || aboutPage.value.embed || "";
});

function goTo(path) {
  const safe = path && String(path).startsWith("/") ? String(path) : "/";
  const loc = locale.value === "en" ? safe : `/${locale.value}${safe}`;
  router.push({ path: loc });
}

function openExternal(url) {
  window.open(url, "_blank", "noopener");
}
</script>
