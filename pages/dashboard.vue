<template>
  <main class="min-h-screen bg-[#F6F7F8] text-[#101828] lg:flex">
    <DashboardNavigation v-model:open="mobileNavOpen" />

    <section class="w-full lg:ml-[250px]">
      <header
        class="hidden h-[74px] items-center justify-between border-b border-[#DADDE2] bg-white px-[28px] lg:flex"
      >
        <div>
          <h1 class="text-[24px] font-bold leading-[30px] text-[#101828]">
            Dashboard
          </h1>
          <p class="mt-[2px] text-[14px] text-[#667085]">
            Welcome back! Here's what's new.
          </p>
        </div>

        <button
          class="h-[38px] rounded-[9px] bg-[#7CB342] px-[20px] text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(124,179,66,0.35)]"
        >
          Explore Resources
        </button>
      </header>

      <div
        class="mx-auto max-w-[960px] px-4 py-5 lg:max-w-none lg:px-[28px] lg:py-[28px]"
      >
        <div class="mb-5 lg:hidden">
          <h1 class="text-[26px] font-bold text-[#101828]">Dashboard</h1>
          <p class="mt-1 text-[13px] text-[#667085]">
            Welcome back! Here's what's new.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-[14px]">
          <div
            class="flex min-h-[84px] items-center justify-between rounded-[10px] border border-[#E1E4E8] bg-white px-[18px] shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
          >
            <div>
              <p class="text-[14px] text-[#667085]">Videos Watched</p>
              <p
                class="mt-1 text-[24px] font-bold leading-[28px] text-[#101828]"
              >
                24
              </p>
            </div>
            <div
              class="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#EAF3FF]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 10L20 7V17L15 14V10Z"
                  stroke="#2563EB"
                  stroke-width="2"
                />
                <rect
                  x="3"
                  y="6"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="#2563EB"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <div
            class="flex min-h-[84px] items-center justify-between rounded-[10px] border border-[#E1E4E8] bg-white px-[18px] shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
          >
            <div>
              <p class="text-[14px] text-[#667085]">Articles Read</p>
              <p
                class="mt-1 text-[24px] font-bold leading-[28px] text-[#101828]"
              >
                142
              </p>
            </div>
            <div
              class="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#EAFBEA]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 6.5V21"
                  stroke="#7CB342"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 18C3.45 18 3 17.55 3 17V5C3 4.45 3.45 4 4 4H9C10.66 4 12 5.34 12 7C12 5.34 13.34 4 15 4H20C20.55 4 21 4.45 21 5V17C21 17.55 20.55 18 20 18H14.5C13.12 18 12 19.12 12 20.5C12 19.12 10.88 18 9.5 18H4Z"
                  stroke="#7CB342"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <div
            class="flex min-h-[84px] items-center justify-between rounded-[10px] border border-[#E1E4E8] bg-white px-[18px] shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
          >
            <div>
              <p class="text-[14px] text-[#667085]">Saved Items</p>
              <p
                class="mt-1 text-[24px] font-bold leading-[28px] text-[#101828]"
              >
                38
              </p>
            </div>
            <div
              class="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#FAEAFE]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20.8 4.6C18.9 2.7 15.8 2.7 13.9 4.6L12 6.5L10.1 4.6C8.2 2.7 5.1 2.7 3.2 4.6C1.3 6.5 1.3 9.6 3.2 11.5L12 20.3L20.8 11.5C22.7 9.6 22.7 6.5 20.8 4.6Z"
                  stroke="#C026D3"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>

          <div
            class="flex min-h-[84px] items-center justify-between rounded-[10px] border border-[#E1E4E8] bg-white px-[18px] shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
          >
            <div>
              <p class="text-[14px] text-[#667085]">Days Active</p>
              <p
                class="mt-1 text-[24px] font-bold leading-[28px] text-[#101828]"
              >
                89
              </p>
            </div>
            <div
              class="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#FFF3E8]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                  stroke="#F97316"
                  stroke-width="2"
                />
                <path
                  d="M8 3V7"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 3V7"
                  stroke="#F97316"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path d="M4 10H20" stroke="#F97316" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="mt-[28px] grid grid-cols-1 gap-[28px] xl:grid-cols-[1fr_300px]"
        >
          <div class="space-y-[28px]">
            <article
              class="overflow-hidden rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="border-b border-[#EAECF0] px-[20px] py-[22px]">
                <h2 class="text-[20px] font-bold leading-[26px]">
                  Onward Partnership Introduction
                </h2>
                <p class="mt-1 text-[14px] text-[#667085]">
                  Learn about our partnership program
                </p>
              </div>

              <div class="p-[20px]">
                <InlineVideoPlayer
                  title="Onward Partnership Introduction"
                  poster="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
                  :embed-src="demoVideoEmbed"
                  class="h-[220px] w-full rounded-[10px] lg:h-[374px]"
                  play-class="!h-[58px] !w-[58px] !bg-[#7CB342] !text-white"
                />

                <div
                  class="mt-[20px] rounded-[10px] border border-[#E1E4E8] bg-[#F9FAFB] p-[16px]"
                >
                  <p class="text-[14px] leading-[22px] text-[#364153]">
                    I've provided this learning demo and text resources so you
                    can learn more about Onward's mission and services to help
                    you spread the Gospel.
                  </p>

                  <button
                    class="mt-[14px] inline-flex h-[40px] items-center gap-2 rounded-[7px] bg-[#7CB342] px-[18px] text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(124,179,66,0.35)]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    Download Resources
                  </button>
                </div>
              </div>
            </article>

            <article
              class="overflow-hidden rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="border-b border-[#EAECF0] px-[20px] py-[22px]">
                <h2 class="text-[20px] font-bold leading-[26px]">
                  Ordering Cards
                </h2>
                <p class="mt-1 text-[14px] text-[#4A5565]">
                  Get started with invitation cards
                </p>
              </div>

              <div class="space-y-[18px] p-[20px]">
                <p class="text-[16px] leading-[24px] text-[#475467]">
                  We could offer a quick form here where someone could order
                  cards. But, most of the Onward team thinks it would be better
                  to make the whole invitation idea more personal by getting to
                  know you better so we can provide more personalized counsel.
                </p>
                <p class="text-[16px] leading-[24px] text-[#475467]">
                  So, invite yourself to email us or schedule a phone call using
                  the info below so we can get to know you.
                </p>
                <p class="text-[16px] leading-[24px] text-[#475467]">
                  We'll get you started off with 500 cards for free and 1-1
                  coaching on how to share invitations with people you meet.
                </p>

                <div
                  class="grid gap-3 rounded-[10px] border border-[#D9E7CC] bg-[#F5FAEF] p-[16px] sm:grid-cols-2"
                >
                  <button
                    class="h-[44px] rounded-[8px] bg-[#7CB342] text-[14px] font-semibold text-white shadow-[0_5px_12px_rgba(124,179,66,0.3)]"
                  >
                    Contact Us
                  </button>
                  <button
                    class="h-[44px] rounded-[8px] border border-[#DADDE2] bg-white text-[14px] font-semibold text-[#101828]"
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </article>

            <article
              class="overflow-hidden rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="px-[20px] py-[22px]">
                <h2 class="text-[20px] font-bold leading-[26px]">
                  How to Start Truly Living with God
                </h2>
                <p class="mt-1 text-[14px] text-[#4A5565]">
                  Essential guidance for your spiritual journey
                </p>
              </div>

              <div class="px-[20px] pb-[20px]">
                <InlineVideoPlayer
                  title="How to Start Truly Living with God"
                  poster="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1400&auto=format&fit=crop"
                  :embed-src="demoVideoEmbed"
                  class="h-[220px] w-full rounded-[10px] lg:h-[460px]"
                  play-class="!h-[58px] !w-[58px] !bg-[#7CB342] !text-white"
                >
                  <template #overlay>
                    <div
                      class="absolute bottom-0 left-0 right-0 bg-black/70 px-[16px] py-[12px] text-[12px] text-white"
                    >
                      Duration: 12:45
                    </div>
                  </template>
                </InlineVideoPlayer>

                <p class="mt-[18px] text-[14px] leading-[22px] text-[#475467]">
                  "Here is truly living! Let God have you, by his invitation,
                  fully, totally, and immediately."
                </p>
              </div>
            </article>

            <article
              class="overflow-hidden rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="border-b border-[#EAECF0] px-[20px] py-[22px]">
                <h2 class="text-[20px] font-bold leading-[26px]">
                  Information/Training Video Illustrations
                </h2>
                <p class="mt-1 text-[14px] text-[#667085]">
                  Visual aids for your ministry
                </p>
              </div>

              <div class="p-[20px]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
                  class="h-[220px] w-full rounded-[10px] object-cover lg:h-[374px]"
                  alt=""
                />

                <p class="mt-[18px] text-[13px] leading-[22px] text-[#475467]">
                  Download image files you can import into any digital slides or
                  video programs. We have Keynote, PowerPoint, and other native
                  format files also available upon request.
                </p>

                <div
                  class="mt-[16px] rounded-[10px] border border-[#E1E4E8] bg-[#F9FAFB] p-[16px]"
                >
                  <h3 class="text-[16px] font-bold text-[#101828]">
                    Available Formats:
                  </h3>
                  <ul
                    class="mt-[10px] space-y-[8px] text-[13px] text-[#475467]"
                  >
                    <li class="flex items-center gap-2">
                      <span
                        class="h-[6px] w-[6px] rounded-full bg-[#7CB342]"
                      ></span
                      >PNG/JPG Image Files
                    </li>
                    <li class="flex items-center gap-2">
                      <span
                        class="h-[6px] w-[6px] rounded-full bg-[#7CB342]"
                      ></span
                      >PowerPoint Templates
                    </li>
                    <li class="flex items-center gap-2">
                      <span
                        class="h-[6px] w-[6px] rounded-full bg-[#7CB342]"
                      ></span
                      >Keynote Files
                    </li>
                  </ul>
                </div>

                <button
                  class="mt-[18px] inline-flex h-[40px] items-center gap-2 rounded-[7px] bg-[#7CB342] px-[18px] text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(124,179,66,0.35)]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  Download All Resources
                </button>
              </div>
            </article>

            <section
              class="rounded-[12px] bg-[linear-gradient(135deg,#7CB342_0%,#5C9B2F_100%)] p-[28px] text-white shadow-[0_12px_24px_rgba(92,155,47,0.25)]"
            >
              <div class="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div
                  class="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[12px] bg-white/20"
                >
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21V19C17 17.3431 15.6569 16 14 16H6C4.34315 16 3 17.3431 3 19V21"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M21 21V19C20.999 17.6193 20.059 16.4146 18.72 16.08"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16 4.13C17.3057 4.47284 18.2144 5.65301 18.2144 7.005C18.2144 8.35699 17.3057 9.53716 16 9.88"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2
                    class="max-w-[620px] text-[24px] font-bold leading-[31px]"
                  >
                    Let's partner. Invite you to let my team help you spread the
                    Gospel
                  </h2>
                  <p
                    class="mt-[12px] max-w-[620px] text-[14px] leading-[24px] text-white/85"
                  >
                    Join our community of believers working together to share
                    the message of hope and transformation. Get personalized
                    support, resources, and training.
                  </p>

                  <div class="mt-[22px] flex flex-col gap-3 sm:flex-row">
                    <button
                      class="h-[42px] rounded-[8px] flex gap-2 justify-center items-center bg-white px-[26px] text-[14px] font-semibold text-[#7CB342]"
                    >
                      Get Started
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5 14.9973L12.4991 9.99815L7.5 4.99902"
                          stroke="#7CB342"
                          stroke-width="1.66638"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      class="h-[42px] rounded-[8px] !border !border-white/30 bg-white/10 px-[26px] text-[14px] font-semibold text-white"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside class="space-y-[22px]">
            <div
              class="rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="border-b border-[#EAECF0] px-[18px] py-[18px]">
                <h2 class="text-[18px] font-bold">Continue Watching</h2>
              </div>

              <div class="space-y-[16px] p-[18px]">
                <div>
                  <InlineVideoPlayer
                    title="Bible Study Essentials"
                    poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900&auto=format&fit=crop"
                    :embed-src="demoVideoEmbed"
                    class="h-[116px] w-full rounded-[7px]"
                    play-class="!h-[42px] !w-[42px] !bg-white !text-[#101828]"
                  >
                    <template #overlay>
                      <div
                        class="absolute bottom-0 left-0 h-[4px] w-full bg-white/30"
                      >
                        <div class="h-full w-[65%] bg-[#7CB342]"></div>
                      </div>
                    </template>
                  </InlineVideoPlayer>
                  <h3 class="mt-2 text-[13px] font-bold">
                    Bible Study Essentials
                  </h3>
                  <p class="text-[11px] text-[#667085]">8:32 remaining</p>
                </div>

                <div>
                  <InlineVideoPlayer
                    title="Prayer & Worship"
                    poster="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=900&auto=format&fit=crop"
                    :embed-src="demoVideoEmbed"
                    class="h-[116px] w-full rounded-[7px]"
                    play-class="!h-[42px] !w-[42px] !bg-white !text-[#101828]"
                  >
                    <template #overlay>
                      <div
                        class="absolute bottom-0 left-0 h-[4px] w-full bg-white/30"
                      >
                        <div class="h-full w-[34%] bg-[#7CB342]"></div>
                      </div>
                    </template>
                  </InlineVideoPlayer>
                  <h3 class="mt-2 text-[13px] font-bold">Prayer & Worship</h3>
                  <p class="text-[11px] text-[#667085]">14:21 remaining</p>
                </div>
              </div>
            </div>

            <div
              class="rounded-[12px] border border-[#E1E4E8] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <div class="border-b border-[#EAECF0] px-[18px] py-[18px]">
                <h2 class="text-[18px] font-bold">Upcoming Events</h2>
              </div>

              <div class="space-y-[16px] p-[18px]">
                <div class="flex gap-3">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 flex-col items-center justify-center rounded-[7px] bg-[#F0F8EA]"
                  >
                    <span class="text-[11px] font-bold text-[#7CB342]"
                      >APR</span
                    >
                    <span
                      class="text-[20px] font-bold leading-[22px] text-[#7CB342]"
                      >15</span
                    >
                  </div>
                  <div>
                    <p class="text-[13px] font-bold">Sunday Service</p>
                    <p class="text-[11px] text-[#667085]">
                      10:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 flex-col items-center justify-center rounded-[7px] bg-[#EAF3FF]"
                  >
                    <span class="text-[11px] font-bold text-[#2563EB]"
                      >APR</span
                    >
                    <span
                      class="text-[20px] font-bold leading-[22px] text-[#2563EB]"
                      >18</span
                    >
                  </div>
                  <div>
                    <p class="text-[13px] font-bold">Bible Study Group</p>
                    <p class="text-[11px] text-[#667085]">7:00 PM - 8:30 PM</p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 flex-col items-center justify-center rounded-[7px] bg-[#FAEAFE]"
                  >
                    <span class="text-[11px] font-bold text-[#A855F7]"
                      >APR</span
                    >
                    <span
                      class="text-[20px] font-bold leading-[22px] text-[#A855F7]"
                      >22</span
                    >
                  </div>
                  <div>
                    <p class="text-[13px] font-bold">Youth Ministry</p>
                    <p class="text-[11px] text-[#667085]">6:00 PM - 8:00 PM</p>
                  </div>
                </div>

                <button
                  class="mx-auto flex items-center gap-1 text-[13px] font-semibold text-[#7CB342]"
                >
                  View All Events
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7"
                      stroke="#7CB342"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="#7CB342"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              class="rounded-[12px] bg-[#172231] p-[18px] text-white shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <h2 class="text-[18px] font-bold">Quick Actions</h2>

              <div class="mt-[16px] space-y-[10px]">
                <button
                  class="flex h-[38px] w-full items-center justify-center gap-2 rounded-[7px] bg-white/10 text-[13px] font-semibold"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V9L14 3Z"
                      stroke="white"
                      stroke-width="1.8"
                    />
                    <path d="M14 3V9H20" stroke="white" stroke-width="1.8" />
                    <path
                      d="M8 13H16"
                      stroke="white"
                      stroke-width="1.8"
                      stroke-linecap="round"
                    />
                  </svg>
                  Request Resources
                </button>

                <button
                  class="flex h-[38px] w-full items-center justify-center gap-2 rounded-[7px] bg-white/10 text-[13px] font-semibold"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21V19C17 17.3431 15.6569 16 14 16H6C4.34315 16 3 17.3431 3 19V21"
                      stroke="white"
                      stroke-width="1.8"
                    />
                    <path
                      d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
                      stroke="white"
                      stroke-width="1.8"
                    />
                  </svg>
                  Find Community
                </button>

                <button
                  class="flex h-[38px] w-full items-center justify-center gap-2 rounded-[7px] bg-[#7CB342] text-[13px] font-semibold"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.8 4.6C18.9 2.7 15.8 2.7 13.9 4.6L12 6.5L10.1 4.6C8.2 2.7 5.1 2.7 3.2 4.6C1.3 6.5 1.3 9.6 3.2 11.5L12 20.3L20.8 11.5C22.7 9.6 22.7 6.5 20.8 4.6Z"
                      stroke="white"
                      stroke-width="1.8"
                    />
                  </svg>
                  Support Ministry
                </button>
              </div>
            </div>

            <div
              class="rounded-[12px] border border-[#E1E4E8] bg-white p-[18px] shadow-[0px_1px_2px_rgba(16,24,40,0.08)]"
            >
              <h2 class="text-[18px] font-bold">Need Help?</h2>
              <p class="mt-2 text-[13px] text-[#667085]">
                Our team is here to support your journey.
              </p>

              <button
                class="mt-[16px] h-[38px] w-full rounded-[7px] bg-[#7CB342] text-[13px] font-semibold text-white shadow-[0_5px_12px_rgba(124,179,66,0.35)]"
              >
                Contact Support
              </button>
            </div>
          </aside>
        </div>
      </div>
      <RedesignFooter />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import DashboardNavigation from "~/components/DashboardNavigation.vue";
import InlineVideoPlayer from "~/components/InlineVideoPlayer.vue";

const mobileNavOpen = ref(false);
const demoVideoEmbed = "https://www.youtube.com/embed/M7lc1UVf-VE";
</script>
