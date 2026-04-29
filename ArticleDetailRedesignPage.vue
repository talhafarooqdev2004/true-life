<template>
  <main class="font-['Inter'] text-[#222] bg-white">
    <RedesignTopNav @go="goTo" />

    <section
      class="bg-[#FCFCFD] border-b border-[#F3F4F6] px-[32px] font-['Inter'] lg:px-0"
    >
      <div
        class="pt-6 pb-7 lg:max-w-[1120px] lg:mx-auto lg:pt-[48px] lg:pb-[86px]"
      >
        <button
          type="button"
          class="flex items-center gap-2 mb-[18px] lg:mb-[31px]"
          @click="goTo('/categories/' + (categoryInfo.slug || 'bible'))"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M7.20502 11.4081L3.00195 7.20502L7.20502 3.00195"
              stroke="#4A5565"
              stroke-width="1.20088"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.4081 7.20519H3.00195"
              stroke="#4A5565"
              stroke-width="1.20088"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-[13px] lg:text-[14px] font-medium text-[#4A5565]">
            Back to Articles
          </span>
        </button>

        <div
          v-if="categoryTag"
          class="inline-flex items-center gap-2 bg-[#7CB3421A] text-[#7CB342] text-[12px] px-[15px] py-2 rounded-full mb-[30px] lg:mb-[24px]"
        >
          <span class="w-[8px] h-[8px] rounded-full bg-[#7CB342]"></span>
          <span class="tracking-[0.06em] uppercase font-semibold">
            {{ categoryTag }}
          </span>
        </div>

        <h1
          class="text-[40px] leading-[60px] font-extrabold text-[#101828] mb-[30px] max-w-[320px] lg:max-w-[720px] lg:text-[60px] lg:leading-[75px] lg:mb-[24px]"
        >
          {{ get(answerInfo, `${locale}.title`) || answerInfo.title || "" }}
        </h1>

        <p
          v-if="answerInfo.subtitle"
          class="hidden lg:block text-[18px] lg:text-[20px] leading-[28px] text-[#4A5565] mb-[34px] lg:mb-[32px] max-w-[760px]"
        >
          {{ stripHtml(answerInfo.subtitle) }}
        </p>

        <div
          class="flex items-center flex-wrap gap-[24px] text-[14px] text-[#5f6c7b] lg:gap-[28px]"
        >
          <div v-if="answerInfo.host_name" class="flex items-center gap-2">
            <span
              class="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(135deg,_#7CB342_0%,_#79B041_12.5%,_#77AE3F_25%,_#74AB3E_37.5%,_#72A93D_50%,_#6FA63C_62.5%,_#6DA43A_75%,_#6AA139_87.5%,_#689F38_100%)] text-white text-sm font-semibold"
            >
              {{ authorInitial }}
            </span>

            <span class="text-[#101828] font-medium">
              {{ answerInfo.host_name }}
            </span>
          </div>

          <div v-if="answerInfo.created_at" class="flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33203 1.33322V3.99968"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.666 1.33322V3.99968"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6659 2.66647H3.33323C2.59691 2.66647 2 3.26338 2 3.9997V13.3323C2 14.0686 2.59691 14.6656 3.33323 14.6656H12.6659C13.4022 14.6656 13.9991 14.0686 13.9991 13.3323V3.9997C13.9991 3.26338 13.4022 2.66647 12.6659 2.66647Z"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.66617H13.9991"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-sm text-[#4A5565]">{{ formattedDate }}</span>
          </div>

          <div class="flex items-center gap-2 text-sm text-[#5f6c7b]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00014 14.6655C11.6818 14.6655 14.6663 11.681 14.6663 7.99938C14.6663 4.31776 11.6818 1.33322 8.00014 1.33322C4.31852 1.33322 1.33398 4.31776 1.33398 7.99938C1.33398 11.681 4.31852 14.6655 8.00014 14.6655Z"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 3.99969V7.99939L10.6665 9.33262"
                stroke="#99A1AF"
                stroke-width="1.33323"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="text-[#4A5565]">{{ readTime }} min read</span>
          </div>
        </div>
      </div>
    </section>

    <section class="px-[32px] py-[30px] lg:px-0 lg:py-[80px]">
      <div class="mx-auto max-w-[1120px]">
        <div
          class="grid grid-cols-1 lg:grid-cols-[640px_1fr] lg:gap-[48px] lg:items-start"
        >
          <div class="bg-white pb-8 lg:px-0 lg:pt-0">
            <div
              v-if="hasVideo"
              class="relative w-full overflow-hidden rounded-[10px] rounded-t-none mb-[32px] lg:rounded-[12px] lg:mb-[48px] lg:shadow-[0_18px_30px_rgba(15,23,42,0.18)]"
            >
              <div
                class="absolute left-[13px] top-[13px] z-[2] rounded-[6.77px] bg-[#000000B2] px-[10px] py-[6px] text-[10px] lg:text-[14px] leading-none text-white"
              >
                Watch Video
              </div>

              <div
                class="w-full h-[180px] lg:h-[324px] [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:object-cover [&_img]:w-full [&_img]:h-full [&_img]:object-cover"
                v-html="localizedPlayerEmbed"
              />
              <button
                type="button"
                aria-label="Play video"
                class="pointer-events-none absolute left-1/2 top-1/2 z-[3] flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-[0_18px_35px_rgba(0,0,0,0.22)] lg:h-[64px] lg:w-[64px]"
              >
                <svg
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-[4px]"
                >
                  <path
                    d="M2 2L25 15L2 28V2Z"
                    fill="#7CB342"
                    stroke="#7CB342"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div>
              <div
                class="mb-[26px] flex items-center justify-between border-b border-[#E5E7EB] pb-[18px] lg:mb-[56px] lg:pb-[20px]"
              >
                <span
                  class="max-w-[74px] text-[14px] leading-[20px] text-[#4A5565] lg:max-w-none lg:text-[13px] lg:font-semibold"
                >
                  Share this article
                </span>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#1877F21A]"
                    aria-label="Share on Facebook"
                    @click="shareFacebook"
                  >
                    <svg
                      width="9"
                      height="15"
                      viewBox="0 0 9 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9977 0.666504H5.99815C5.11429 0.666504 4.26664 1.01761 3.64166 1.64259C3.01668 2.26758 2.66557 3.11523 2.66557 3.99909V5.99864H0.666016V8.6647H2.66557V13.9968H5.33163V8.6647H7.33118L7.9977 5.99864H5.33163V3.99909C5.33163 3.82232 5.40185 3.65278 5.52685 3.52779C5.65185 3.40279 5.82138 3.33257 5.99815 3.33257H7.9977V0.666504Z"
                        stroke="#1877F2"
                        stroke-width="1.33303"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#1DA1F21A]"
                    aria-label="Share on Twitter"
                    @click="shareTwitter"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_190_2039)">
                        <path
                          d="M14.6643 2.66605C14.6643 2.66605 14.1978 4.06573 13.3313 4.93221C14.3977 11.5974 7.06603 16.4629 1.33398 12.6638C2.80032 12.7304 4.26666 12.2639 5.33308 11.3308C2.0005 10.331 0.33421 6.39854 2.0005 3.33257C3.46684 5.06551 5.73299 6.06528 7.99915 5.99863C7.39928 3.19926 10.6652 1.59962 12.6648 3.46587C13.3979 3.46587 14.6643 2.66605 14.6643 2.66605Z"
                          stroke="#1DA1F2"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_190_2039">
                          <rect width="15.9964" height="15.9964" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#0A66C21A]"
                    aria-label="Share on LinkedIn"
                    @click="shareLinkedIn"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_190_2042)">
                        <path
                          d="M10.6651 5.33215C11.7257 5.33215 12.7429 5.75349 13.4929 6.50346C14.2429 7.25344 14.6642 8.27063 14.6642 9.33125V13.9969H11.9981V9.33125C11.9981 8.97771 11.8577 8.63865 11.6077 8.38866C11.3577 8.13866 11.0187 7.99822 10.6651 7.99822C10.3116 7.99822 9.97251 8.13866 9.72252 8.38866C9.47253 8.63865 9.33208 8.97771 9.33208 9.33125V13.9969H6.66602V9.33125C6.66602 8.27063 7.08735 7.25344 7.83732 6.50346C8.5873 5.75349 9.60449 5.33215 10.6651 5.33215Z"
                          stroke="#0A66C2"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.00005 5.99866H1.33398V13.9969H4.00005V5.99866Z"
                          stroke="#0A66C2"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.66702 3.99907C3.40323 3.99907 4.00005 3.40225 4.00005 2.66604C4.00005 1.92983 3.40323 1.33301 2.66702 1.33301C1.9308 1.33301 1.33398 1.92983 1.33398 2.66604C1.33398 3.40225 1.9308 3.99907 2.66702 3.99907Z"
                          stroke="#0A66C2"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_190_2042">
                          <rect width="15.9964" height="15.9964" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#E5E7EB]"
                    aria-label="Share via email"
                    @click="shareEmail"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_190_2047)">
                        <path
                          d="M13.3313 2.66608H2.66702C1.9308 2.66608 1.33398 3.2629 1.33398 3.99911V11.9973C1.33398 12.7335 1.9308 13.3303 2.66702 13.3303H13.3313C14.0675 13.3303 14.6643 12.7335 14.6643 11.9973V3.99911C14.6643 3.2629 14.0675 2.66608 13.3313 2.66608Z"
                          stroke="#364153"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6643 4.66559L8.68566 8.46473C8.47989 8.59365 8.24197 8.66203 7.99915 8.66203C7.75633 8.66203 7.51841 8.59365 7.31264 8.46473L1.33398 4.66559"
                          stroke="#364153"
                          stroke-width="1.33303"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_190_2047">
                          <rect width="15.9964" height="15.9964" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <div
                class="article-content text-[18px] leading-[28px] text-[#364153] lg:text-[16px] lg:leading-[28px] [&_p]:mb-[20px] lg:[&_p]:mb-[28px] [&_p]:mt-0 [&_p:last-of-type]:mb-0 [&_strong]:font-extrabold [&_strong]:text-[#364153]"
                v-html="getLocalizedDescriptionHtml"
              />
            </div>

            <blockquote
              v-if="pullQuote"
              class="rounded-r-[14px] rounded-l-none border-l-[4px] border-[#7CB342] bg-[#7CB3420D] px-[36px] py-[24px] text-[20px] font-medium italic leading-[28px] text-[#101828] lg:mt-[48px] lg:mb-[48px] lg:px-[43px] lg:py-[32px] lg:text-[24px] lg:leading-[39px]"
            >
              “{{ pullQuote }}”
            </blockquote>

            <div
              class="my-[15px] flex flex-col items-start gap-[16px] rounded-[16px] border border-[#E5E7EB] bg-gradient-to-br from-[#F9FAFB] to-[#FFFFFF] px-[24px] pb-[22px] pt-[25px] lg:my-[44px] lg:flex-row lg:px-[32px] lg:py-[32px]"
            >
              <span
                class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB342] text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.99951V20.9984"
                    stroke="white"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.99992 17.9989C2.73473 17.9989 2.48039 17.8935 2.29287 17.706C2.10535 17.5185 2 17.2641 2 16.9989V3.99992C2 3.73473 2.10535 3.48039 2.29287 3.29287C2.48039 3.10535 2.73473 3 2.99992 3H7.99954C9.06033 3 10.0777 3.4214 10.8278 4.17148C11.5778 4.92157 11.9992 5.93891 11.9992 6.99969C11.9992 5.93891 12.4206 4.92157 13.1707 4.17148C13.9208 3.4214 14.9381 3 15.9989 3H20.9986C21.2637 3 21.5181 3.10535 21.7056 3.29287C21.8931 3.48039 21.9985 3.73473 21.9985 3.99992V16.9989C21.9985 17.2641 21.8931 17.5185 21.7056 17.706C21.5181 17.8935 21.2637 17.9989 20.9986 17.9989H14.999C14.2034 17.9989 13.4404 18.3149 12.8778 18.8775C12.3153 19.44 11.9992 20.203 11.9992 20.9986C11.9992 20.203 11.6832 19.44 11.1206 18.8775C10.5581 18.3149 9.79505 17.9989 8.99947 17.9989H2.99992Z"
                    stroke="white"
                    stroke-width="1.99985"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

              <div>
                <strong
                  class="block text-[20px] font-extrabold leading-[28px] text-[#101828]"
                >
                  Ready to Learn More?
                </strong>

                <p
                  class="mt-[8px] mb-0 text-[16px] leading-[24px] text-[#364153]"
                >
                  Are you ready to find out what true life is? If you are,
                  please
                  <button
                    type="button"
                    class="border-0 bg-transparent p-0 text-[16px] font-semibold text-[#7CB342] underline"
                    @click="goTo('/pages/contact-truelife-org')"
                  >
                    click here</button
                  >.
                </p>
              </div>
            </div>

            <div
              v-if="answerInfo.host_name"
              class="my-[15px] flex flex-col items-start gap-[20px] rounded-[14px] border border-[#e5e7eb] bg-white px-[24px] pb-[24px] pt-[28px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] lg:my-[44px] lg:flex-row lg:gap-[24px] lg:px-[32px] lg:py-[32px]"
            >
              <span
                class="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,_#7CB342_0%,_#79B041_12.5%,_#77AE3F_25%,_#74AB3E_37.5%,_#72A93D_50%,_#6FA63C_62.5%,_#6DA43A_75%,_#6AA139_87.5%,_#689F38_100%)] text-[30px] font-bold text-white"
              >
                {{ authorInitial }}
              </span>

              <div>
                <strong
                  class="block text-[20px] font-extrabold leading-[28px] text-[#101828]"
                >
                  About {{ answerInfo.host_name }}
                </strong>

                <p
                  v-if="answerInfo.host_bio"
                  class="mt-[8px] mb-0 text-[16px] leading-[26px] text-[#4A5565]"
                >
                  {{ answerInfo.host_bio }}
                </p>
              </div>
            </div>
          </div>

          <aside
            class="mt-[22px] lg:mt-0 lg:flex lg:flex-col lg:gap-[32px]"
          >
            <div
              class="rounded-[16px] border border-[#e5e7eb] bg-white p-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <h3
                class="mb-[17px] mt-0 text-[18px] font-extrabold text-[#101828]"
              >
                Search Articles
              </h3>

              <div
                class="flex h-[50px] overflow-hidden rounded-[14px] border border-[#D1D5DC] bg-white"
              >
                <input
                  v-model="sidebarQuery"
                  type="text"
                  placeholder="Search for topics..."
                  class="min-w-0 flex-1 border-0 ps-[16px] pe-[8px] text-[16px] lg:text-[14px] text-[#10182880] outline-none placeholder:text-[#10182880]"
                  @keyup.enter="doSearch"
                />

                <button
                  type="button"
                  class="m-[5px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] border-0 bg-[#7CB342] text-white"
                  @click="doSearch"
                >
                  <IconSearch size="18" />
                </button>
              </div>
            </div>

            <div
              v-if="popularTopics.length"
              class="mt-[20px] lg:mt-0 rounded-[16px] border border-[#edf0f3] bg-white p-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <h3
                class="mt-0 mb-[16px] text-[18px] font-extrabold leading-none text-[#101828]"
              >
                Popular Topics
              </h3>

              <ul class="m-0 list-none p-0 space-y-[8px]">
                <li
                  v-for="topic in popularTopics"
                  :key="topic.id"
                  class="flex h-[51px] lg:h-[43px] cursor-pointer items-center justify-between rounded-[10px] bg-[#F9FAFB] px-[16px] font-medium hover:text-[#75b843]"
                  @click="goTo('/categories/' + topic.slug)"
                >
                  <span class="text-[#101828] text-[16px] lg:text-[14px]">
                    {{ get(topic, `${locale}.name`) || topic.name }}
                  </span>

                  <span class="text-[14px] font-normal text-[#6A7282]">
                    {{ (topic.answers || []).length }}
                  </span>
                </li>
              </ul>
            </div>

            <div
              v-if="relatedArticles.length"
              class="mt-5 lg:mt-0 border border-[#e0e4e8] rounded-[16px] p-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]"
            >
              <h3 class="text-[18px] font-bold mb-6 text-[#101828] mt-0">
                Related Articles
              </h3>

              <div
                v-for="item in relatedArticles"
                :key="item.id"
                class="cursor-pointer mb-6 last:mb-0 group"
                @click="openArticle(item)"
              >
                <div class="relative rounded-xl overflow-hidden mb-[11px]">
                  <img
                    :src="
                      item.thumbnail ||
                      'https://s3.amazonaws.com/truelife1/icons/112/answerthumbnails/full.jpg'
                    "
                    :alt="get(item, `${locale}.title`)"
                    loading="lazy"
                    class="w-full h-[159px] lg:h-[143px] object-cover block"
                  />

                  <span
                    v-if="item.category_tag"
                    class="absolute bottom-2 left-2 bg-[#FFFFFFE5] text-[#101828] text-[12px] font-semibold px-2 py-1 rounded"
                  >
                    {{ item.category_tag }}
                  </span>
                </div>

                <h4
                  class="text-[16px] font-semibold mb-[5.18px] text-[#101828] leading-[24px] lg:leading-[20px] mt-0 group-hover:text-[#4caf50]"
                >
                  {{ get(item, `${locale}.title`) }}
                </h4>

                <span class="text-sm text-[#6A7282]">
                  {{ estimateRead(item) }} min read
                </span>
              </div>
            </div>

            <div
              class="mt-5 lg:mt-0 rounded-[16px] p-6 bg-[linear-gradient(135deg,_#7CB342_0%,_#79B041_12.5%,_#77AE3F_25%,_#74AB3E_37.5%,_#72A93D_50%,_#6FA63C_62.5%,_#6DA43A_75%,_#6AA139_87.5%,_#689F38_100%)] text-white shadow-[0px_10px_15px_-3px_#0000001A]"
            >
              <h3 class="text-[20px] font-bold mb-[8px] text-white mt-0">
                Stay Updated
              </h3>

              <p class="text-sm text-[#FFFFFFE5] mb-[15px] mt-0">
                Get the latest articles and resources delivered to your inbox.
              </p>

              <input
                type="email"
                placeholder="Your email address"
                class="w-full px-3 py-2.5 rounded-[6px] text-sm mb-3 text-[#222] border border-white bg-white/10 placeholder:text-white/70"
              />

              <button
                type="button"
                class="w-full py-2 border-0 rounded-[10px] bg-white text-[#7CB342] font-semibold text-sm cursor-pointer"
              >
                Subscribe Now
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <RedesignFooter />
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { isEmpty, get, find, some, filter, orderBy, take } from "lodash";
import { useStore } from "vuex";
import { useAsyncData, useRoute, useRouter } from "#imports";
import { useI18n } from "vue-i18n";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
import IconMapPin from "~/components/icons/IconMapPin.vue";
import IconSearch from "~/components/icons/IconSearch.vue";
import IconMessageSquare from "~/components/icons/IconMessageSquare.vue";
import logoIndex from "@/assets/images/logo-index-155.png";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { locale } = useI18n();

const sidebarQuery = ref("");

const ensureCategoriesLoaded = async () => {
  if (isEmpty(store.state.categories)) {
    await store.dispatch("fetchCategories");
  }
};

const articleState = useAsyncData(
  () => `article-redesign:${route.params.slug || ""}:${locale.value || "en"}`,
  async () => {
    try {
      await ensureCategoriesLoaded();
    } catch (e) {
      console.error(e);
      return { answerInfo: {}, categoryInfo: {}, allCategories: [] };
    }
    const slug = route.params.slug || "";
    if (!slug) return { answerInfo: {}, categoryInfo: {}, allCategories: [] };
    const categories = store.state.categories || [];
    const category =
      find(categories, (c) => some(c.answers, (a) => a.slug === slug)) || {};
    const answer = !isEmpty(category)
      ? find(category.answers, (a) => a.slug === slug) || {}
      : {};
    return {
      answerInfo: answer,
      categoryInfo: category,
      allCategories: categories,
    };
  },
  { watch: [() => route.params.slug, () => locale.value] },
);

const answerInfo = computed(() => articleState.data.value?.answerInfo || {});
const categoryInfo = computed(
  () => articleState.data.value?.categoryInfo || {},
);
const allCategories = computed(
  () => articleState.data.value?.allCategories || [],
);

const categoryTag = computed(() => {
  const name =
    get(categoryInfo.value, `${locale.value}.name`) ||
    categoryInfo.value.name ||
    "";
  return name ? name.toUpperCase() : "";
});

const authorInitial = computed(() => {
  const name = answerInfo.value.host_name || "";
  return name.charAt(0).toUpperCase() || "D";
});

const formattedDate = computed(() => {
  const d = answerInfo.value.created_at || answerInfo.value.updated_at;
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
});

const readTime = computed(() => {
  const desc = get(answerInfo.value, `${locale.value}.description`, "") || "";
  const words = desc.replace(/<[^>]+>/g, "").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
});

const hasVideo = computed(
  () => !isEmpty(get(answerInfo.value, `${locale.value}.playerembed`)),
);
const localizedPlayerEmbed = computed(() =>
  get(answerInfo.value, `${locale.value}.playerembed`, ""),
);

const getLocalizedDescriptionHtml = computed(() => {
  const desc = get(answerInfo.value, `${locale.value}.description`, "") || "";
  return rewriteCmsInternalLinks(desc);
});

const pullQuote = computed(() => {
  const desc = get(answerInfo.value, `${locale.value}.description`, "") || "";
  const match = desc.match(/<blockquote[^>]*>(.*?)<\/blockquote>/is);
  if (match) {
    return match[1].replace(/<[^>]+>/g, "").trim();
  }
  return "";
});

const popularTopics = computed(() => {
  const cats = allCategories.value || [];
  return take(
    orderBy(
      cats.filter((c) => (c.answers || []).length > 0),
      [(c) => (c.answers || []).length],
      ["desc"],
    ),
    5,
  );
});

const relatedArticles = computed(() => {
  const answers = get(categoryInfo.value, "answers", []);
  const slug = route.params.slug || "";
  const related = filter(
    answers,
    (a) => a.slug !== slug && !!get(a, `${locale.value}.title`),
  );
  return take(
    orderBy(related, ["playerembed"], ["desc"]).map((a) => ({
      ...a,
      category_tag:
        get(categoryInfo.value, `${locale.value}.name`) ||
        categoryInfo.value.name ||
        "",
    })),
    3,
  );
});

function stripHtml(html) {
  return (html || "").replace(/<[^>]+>/g, "");
}

function estimateRead(item) {
  const desc = get(item, `${locale.value}.description`, "") || "";
  return Math.max(
    1,
    Math.ceil(desc.replace(/<[^>]+>/g, "").split(/\s+/).length / 200),
  );
}

function localizedPathString(path) {
  const norm = String(path || "/").startsWith("/") ? String(path) : `/${path}`;
  return locale.value === "en" ? norm : `/${locale.value}${norm}`;
}

function rewriteCmsHref(href) {
  if (typeof href !== "string") return href;
  const trimmed = href.trim();
  if (!/^https?:\/\//i.test(trimmed)) return trimmed;
  let parsed;
  try {
    parsed = new URL(trimmed);
  } catch {
    return trimmed;
  }
  const host = (parsed.hostname || "").toLowerCase();
  if (host !== "truelife.org" && host !== "www.truelife.org") return trimmed;
  return localizedPathString(
    `${parsed.pathname || "/"}${parsed.search || ""}${parsed.hash || ""}`,
  );
}

function rewriteCmsInternalLinks(html) {
  if (typeof html !== "string" || !html.length) return "";
  return html.replace(
    /(<a\b[^>]*\bhref\s*=\s*["'])([^"']+)(["'])/gi,
    (_m, pre, val, suf) => `${pre}${rewriteCmsHref(val)}${suf}`,
  );
}

function goTo(path) {
  const safe = path && String(path).startsWith("/") ? String(path) : "/";
  router.push({ path: localizedPathString(safe) });
}

function openExternal(url) {
  window.open(url, "_blank", "noopener");
}

function openArticle(item) {
  if (!item || !item.slug) return;
  goTo(`/answers/${item.slug}`);
}

function doSearch() {
  const q = (sidebarQuery.value || "").trim();
  if (q) goTo(`/search-result/all?q=${encodeURIComponent(q)}`);
}

function shareFacebook() {
  if (!process.client) return;
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
    "_blank",
    "noopener",
  );
}

function shareTwitter() {
  if (!process.client) return;
  const text = encodeURIComponent(
    get(answerInfo.value, `${locale.value}.title`) || "",
  );
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${text}`,
    "_blank",
    "noopener",
  );
}

function shareLinkedIn() {
  if (!process.client) return;
  window.open(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
    "_blank",
    "noopener",
  );
}

function shareEmail() {
  if (!process.client) return;
  const subj = encodeURIComponent(
    get(answerInfo.value, `${locale.value}.title`) || "TrueLife.org",
  );
  window.location.href = `mailto:?subject=${subj}&body=${encodeURIComponent(window.location.href)}`;
}
</script>

<style scoped>

.video-embed :deep(iframe) {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border-radius: 12px;
}

@media (max-width: 600px) {
  .video-embed :deep(iframe) {
    border-radius: 8px;
  }
}

.article-content :deep(p) {
  margin: 0 0 18px;
}
.article-content :deep(a) {
  color: #2196f3;
  text-decoration: underline;
}
.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.article-content :deep(h2) {
  font-size: 22px;
  margin: 28px 0 12px;
  color: #1a2a3a;
}
.article-content :deep(h3) {
  font-size: 18px;
  margin: 24px 0 10px;
  color: #1a2a3a;
}
.article-content :deep(blockquote) {
  display: none;
}
</style>
