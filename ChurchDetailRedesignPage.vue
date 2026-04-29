<template>
  <main class="church-detail-page bg-[#f5f6f8] w-full overflow-x-hidden">
    <RedesignTopNav @go="goTo" />

    <section class="relative overflow-hidden bg-[#101828] lg:h-[522px]">
      <div class="absolute inset-0">
        <img
          :src="churchInfo.profile_cover_art || fallbackCover"
          alt=""
          width="1920"
          height="782"
          loading="eager"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,40,0.35)_0%,rgba(16,24,40,0.70)_45%,rgba(16,24,40,0.96)_100%)] lg:bg-[linear-gradient(180deg,rgba(16,24,40,0.18)_0%,rgba(16,24,40,0.48)_42%,rgba(16,24,40,0.95)_100%)]"
      ></div>
      <div
        class="relative z-10 px-[32px] pt-[24px] pb-[34px] lg:mx-auto lg:flex lg:h-full lg:max-w-[1310px] lg:flex-col lg:px-0 lg:pt-[22px] lg:pb-[36px]"
      >
        <NuxtLink
          to="/locations"
          class="inline-flex h-[40px] w-fit items-center gap-2 rounded-[10px] lg:relative -left-20 bg-[#FFFFFFF2] px-[18px] text-[16px] font-semibold text-[#101828] no-underline shadow-[0px_10px_15px_-3px_#0000001A] lg:h-[36px] lg:px-[15px] lg:text-[14px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99715 11.9973L5.99805 7.9982L9.99715 3.9991"
              stroke="#101828"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Back to Search</span>
        </NuxtLink>
        <div class="lg:mt-auto lg:flex lg:items-end lg:gap-[28px]">
          <div
            class="mt-[25px] h-[128px] w-[128px] overflow-hidden rounded-[16px] border-[4px] border-white bg-white lg:mt-0 lg:h-[160px] lg:w-[160px] lg:shrink-0 lg:rounded-[12px] lg:border-[3px]"
          >
            <img
              :src="churchInfo.profile_headshot || fallbackHeadshot"
              :alt="pastorName"
              width="140"
              height="139"
              class="h-full w-full object-cover object-top"
            />
          </div>
          <div class="lg:min-w-0 lg:flex-1">
            <div class="mt-[32px] lg:mt-0">
              <span
                class="inline-flex h-[36px] items-center gap-[8px] rounded-[10px] bg-[#7CB342] px-[18px] text-sm font-semibold text-white lg:h-[30px] lg:rounded-[8px] lg:px-[14px]"
              >
                <span
                  class="h-[9px] w-[9px] shrink-0 rounded-full bg-[#BFEA8E] lg:h-[7px] lg:w-[7px]"
                ></span>
                Verified Partner Church
              </span>
            </div>
            <h1
              class="mt-[16px] max-w-[335px] text-[32px] font-bold leading-[45px] tracking-[0.37px] text-white lg:mt-[14px] lg:max-w-none lg:text-[60px] lg:leading-[75px] lg:tracking-[0.2px]"
            >
              {{ churchInfo.name }}
            </h1>
            <div
              class="mt-[17px] lg:mt-[14px] lg:flex lg:items-start lg:gap-[34px]"
            >
              <div v-if="pastorName" class="mb-[17px] lg:mb-0">
                <p
                  class="m-0 text-[14px] leading-[20px] text-[#FFFFFFB2] lg:leading-[18px]"
                >
                  Lead Pastor
                </p>
                <p
                  class="m-0 mt-[3px] text-[18px] font-semibold leading-[28px] text-white lg:leading-[22px]"
                >
                  {{ pastorName }}
                </p>
              </div>
              <div
                v-if="locationInfo.city"
                class="mb-[17px] lg:mb-0 lg:border-l lg:border-[#FFFFFF26] lg:pl-[24px]"
              >
                <p
                  class="m-0 text-[14px] leading-[24px] text-[#FFFFFFB2] lg:text-[12px] lg:leading-[18px]"
                >
                  Location
                </p>
                <p
                  class="m-0 mt-[3px] text-[18px] font-extrabold leading-[28px] text-[#FFFFFFE5] lg:text-[14px] lg:font-bold lg:leading-[22px]"
                >
                  {{ locationInfo.city }}, {{ locationInfo.state }}
                </p>
              </div>
              <div
                v-if="distance"
                class="lg:border-l lg:border-[#FFFFFF26] lg:pl-[24px]"
              >
                <p
                  class="m-0 text-[14px] leading-[24px] text-[#FFFFFFB2] lg:text-[12px] lg:leading-[18px]"
                >
                  Distance
                </p>
                <p
                  class="m-0 mt-[3px] text-[18px] font-semibold leading-[28px] text-[#7CB342] lg:text-[14px] lg:leading-[22px]"
                >
                  {{ distance }}
                </p>
              </div>
            </div>
          </div>
          <div class="pt-[32px] lg:ml-auto lg:shrink-0 lg:pt-0 lg:pb-[24px]">
            <button
              type="button"
              class="flex h-[56px] w-full items-center justify-center gap-[8px] rounded-[14px] border-0 bg-[#7CB342] text-[16px] font-bold text-white shadow-[0px_10px_15px_-3px_#0000001A] lg:rounded-[10px] lg:text-[14px] lg:px-[33px]"
              @click="openMessage"
            >
              <IconMail size="21" class="lg:!h-[16px] lg:!w-[16px]" /> Send
              Message
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-white lg:pt-[80px] lg:pb-[66px]">
      <div
        class="lg:mx-auto lg:grid lg:max-w-[1310px] lg:grid-cols-[1fr_340px] lg:gap-x-[32px] lg:gap-y-[20px]"
      >
        <section
          class="px-[32px] pt-[25px] pb-[40px] bg-white md:col-start-1 md:row-start-1 md:p-0 lg:col-start-1 lg:row-start-1 lg:p-0"
        >
          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[32px] lg:p-[28px]"
          >
            <h2
              class="m-0 mb-[25px] text-[24px] font-bold leading-[32px] text-[#101828]"
            >
              Contact Information
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
              <div
                v-if="churchInfo.cell_phone"
                class="flex items-center gap-[16px] rounded-[14px] bg-[#F9FAFB] p-[16px]"
              >
                <div
                  class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB342]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9891 16.9112V19.9096C21.9902 20.188 21.9332 20.4635 21.8217 20.7186C21.7102 20.9736 21.5466 21.2025 21.3415 21.3907C21.1364 21.5789 20.8943 21.7222 20.6306 21.8113C20.3669 21.9005 20.0875 21.9336 19.8102 21.9086C16.7347 21.5744 13.7804 20.5235 11.1847 18.8402C8.76981 17.3056 6.72239 15.2582 5.18785 12.8433C3.4987 10.2359 2.44751 7.26719 2.11944 4.1778C2.09446 3.90142 2.12731 3.62285 2.21589 3.35985C2.30447 3.09686 2.44684 2.85518 2.63394 2.65022C2.82104 2.44526 3.04876 2.2815 3.30262 2.16937C3.55647 2.05724 3.83089 1.9992 4.10841 1.99894H7.10685C7.5919 1.99416 8.06214 2.16593 8.42992 2.48222C8.7977 2.79851 9.03792 3.23774 9.10581 3.71804C9.23237 4.67761 9.46707 5.61978 9.80545 6.52658C9.93992 6.88432 9.96902 7.27311 9.88931 7.64688C9.8096 8.02065 9.6244 8.36374 9.35568 8.63549L8.08634 9.90483C9.50916 12.4071 11.581 14.4789 14.0832 15.9017L15.3526 14.6324C15.6243 14.3636 15.9674 14.1785 16.3412 14.0987C16.7149 14.019 17.1037 14.0481 17.4615 14.1826C18.3683 14.521 19.3104 14.7557 20.27 14.8822C20.7555 14.9507 21.1989 15.1953 21.5159 15.5694C21.8329 15.9435 22.0013 16.421 21.9891 16.9112Z"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p class="m-0 text-[14px] leading-[24px] text-[#4A5565]">
                    Phone
                  </p>
                  <p
                    class="mt-[2.8px] text-[16px] font-semibold leading-[24px] text-[#101828]"
                  >
                    {{ churchInfo.cell_phone }}
                  </p>
                </div>
              </div>

              <div
                v-if="churchInfo.profile_website"
                class="flex items-center gap-[17px] rounded-[14px] bg-[#F9FAFB] px-[17px] py-[18px] relative"
              >
                <div
                  class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB342]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9929 21.9886C17.5128 21.9886 21.9877 17.5137 21.9877 11.9938C21.9877 6.47379 17.5128 1.99896 11.9929 1.99896C6.47287 1.99896 1.99805 6.47379 1.99805 11.9938C1.99805 17.5137 6.47287 21.9886 11.9929 21.9886Z"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.994 1.99896C9.42758 4.69372 7.99609 8.27244 7.99609 11.9938C7.99609 15.7151 9.42758 19.2938 11.994 21.9886C14.5604 19.2938 15.9919 15.7151 15.9919 11.9938C15.9919 8.27244 14.5604 4.69372 11.994 1.99896Z"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.99805 11.9938H21.9877"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="min-w-0 flex-1">
                  <p class="m-0 text-[14px] leading-[24px] text-[#4A5565]">
                    Website
                  </p>
                  <a
                    :href="websiteUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block truncate text-[16px] font-semibold leading-[28px] !text-[#7CB342] no-underline"
                  >
                    {{ churchInfo.profile_website }}
                  </a>
                </div>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#99A1AF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="shrink-0 absolute top-1 right-[16px] top-[19px]"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>

              <div
                v-if="pastorEmail"
                class="flex items-center gap-[17px] rounded-[14px] bg-[#F9FAFB] px-[17px] py-[18px]"
              >
                <div
                  class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB342]"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9887 3.99792H3.99701C2.89301 3.99792 1.99805 4.89289 1.99805 5.99689V17.9907C1.99805 19.0947 2.89301 19.9896 3.99701 19.9896H19.9887C21.0927 19.9896 21.9877 19.0947 21.9877 17.9907V5.99689C21.9877 4.89289 21.0927 3.99792 19.9887 3.99792Z"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9877 6.99634L13.0223 12.6934C12.7137 12.8867 12.357 12.9892 11.9929 12.9892C11.6287 12.9892 11.272 12.8867 10.9634 12.6934L1.99805 6.99634"
                      stroke="white"
                      stroke-width="1.99896"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="min-w-0">
                  <p class="m-0 text-[14px] leading-[24px] text-[#4A5565]">
                    Email
                  </p>
                  <p
                    class="m-0 truncate text-[16px] font-semibold leading-[24px] text-[#101828]"
                  >
                    {{ pastorEmail }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          v-if="serviceTimes.length"
          class="px-[32px] pt-[24px] pb-0 lg:col-start-1 lg:row-start-2 lg:p-0"
        >
          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[33px] lg:p-[28px]"
          >
            <div class="mb-[27px] flex items-center gap-[12px]">
              <div
                class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB3421A]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9929 21.9885C17.5128 21.9885 21.9877 17.5137 21.9877 11.9937C21.9877 6.47373 17.5128 1.9989 11.9929 1.9989C6.47287 1.9989 1.99805 6.47373 1.99805 11.9937C1.99805 17.5137 6.47287 21.9885 11.9929 21.9885Z"
                    stroke="#7CB342"
                    stroke-width="1.99896"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9941 5.99683V11.9937L15.9921 13.9927"
                    stroke="#7CB342"
                    stroke-width="1.99896"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <h2
                class="m-0 text-[24px] font-bold leading-[32px] text-[#101828]"
              >
                Service Times
              </h2>
            </div>

            <div class="space-y-[16px]">
              <div
                v-for="(st, i) in serviceTimes"
                :key="i"
                class="flex items-center justify-between rounded-[14px] bg-[#F9FAFB] p-[16px]"
              >
                <div class="flex items-center gap-[16px]">
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.2832 2.14246V5.28385"
                      stroke="#99A1AF"
                      stroke-width="1.5707"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5664 2.14246V5.28385"
                      stroke="#99A1AF"
                      stroke-width="1.5707"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.921 3.71326H3.92617C3.05869 3.71326 2.35547 4.41648 2.35547 5.28395V16.2788C2.35547 17.1463 3.05869 17.8495 3.92617 17.8495H14.921C15.7885 17.8495 16.4917 17.1463 16.4917 16.2788V5.28395C16.4917 4.41648 15.7885 3.71326 14.921 3.71326Z"
                      stroke="#99A1AF"
                      stroke-width="1.5707"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.35547 8.42529H16.4917"
                      stroke="#99A1AF"
                      stroke-width="1.5707"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p
                    class="m-0 max-w-[120px] lg:max-w-100 text-[16px] font-semibold leading-[24px] text-[#101828]"
                  >
                    {{ st.name }}
                  </p>
                </div>

                <p
                  class="m-0 max-w-[94px] text-right text-[16px] font-bold leading-[24px] text-[#7CB342]"
                >
                  {{ st.time }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          class="px-[32px] pt-[40px] pb-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:p-0"
        >
          <div
            class="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white"
          >
            <div class="flex items-center gap-[12px] bg-[#7CB342] p-[24px]">
              <div
                class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[14px] bg-[#FFFFFF33]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9897 9.99475C19.9897 14.9852 14.4536 20.1825 12.5946 21.7876C12.4214 21.9178 12.2106 21.9883 11.9939 21.9883C11.7772 21.9883 11.5664 21.9178 11.3932 21.7876C9.53417 20.1825 3.99805 14.9852 3.99805 9.99475C3.99805 7.87412 4.84046 5.84034 6.33998 4.34083C7.83949 2.84132 9.87326 1.9989 11.9939 1.9989C14.1145 1.9989 16.1483 2.84132 17.6478 4.34083C19.1473 5.84034 19.9897 7.87412 19.9897 9.99475Z"
                    stroke="white"
                    stroke-width="1.99896"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.9945 12.9932C13.6505 12.9932 14.993 11.6508 14.993 9.99478C14.993 8.33879 13.6505 6.99634 11.9945 6.99634C10.3385 6.99634 8.99609 8.33879 8.99609 9.99478C8.99609 11.6508 10.3385 12.9932 11.9945 12.9932Z"
                    stroke="white"
                    stroke-width="1.99896"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p class="m-0 text-[18px] font-bold leading-[28px] text-white">
                  Location
                </p>
                <p
                  class="m-[0.81px] text-[14px] leading-[24px] text-[#FFFFFFCC]"
                >
                  Get directions
                </p>
              </div>
            </div>

            <div
              class="relative h-[355px] overflow-hidden bg-[#ddd8cc] lg:h-[304px]"
            >
              <img
                v-if="locationInfo.latitude"
                :src="`https://maps.googleapis.com/maps/api/staticmap?size=450x420&zoom=3&markers=${locationInfo.latitude},${locationInfo.longitude}&key=AIzaSyCgAHqRDxO08kAM6AEgklKLkbVTYGDMpaw&scale=2`"
                alt="Church location map"
                class="h-full w-full object-cover"
                loading="lazy"
              />

              <div
                class="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  class="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[4px] border-white bg-[#7CB342] shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
                >
                  <IconMapPin size="30" class="text-white" />
                </div>
              </div>
            </div>

            <div class="p-[24px] bg-[#F9FAFB]">
              <div class="mb-[20px] flex items-start gap-[16px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.66 8.33C16.66 12.4892 12.046 16.8208 10.4967 18.1586C10.3523 18.2671 10.1766 18.3258 9.99602 18.3258C9.81543 18.3258 9.63973 18.2671 9.49539 18.1586C7.94601 16.8208 3.33203 12.4892 3.33203 8.33C3.33203 6.5626 4.03413 4.86759 5.28387 3.61785C6.53361 2.36811 8.22862 1.66602 9.99602 1.66602C11.7634 1.66602 13.4584 2.36811 14.7082 3.61785C15.9579 4.86759 16.66 6.5626 16.66 8.33Z"
                    stroke="#7CB342"
                    stroke-width="1.666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99509 10.829C11.3752 10.829 12.4941 9.71021 12.4941 8.33005C12.4941 6.94989 11.3752 5.83105 9.99509 5.83105C8.61493 5.83105 7.49609 6.94989 7.49609 8.33005C7.49609 9.71021 8.61493 10.829 9.99509 10.829Z"
                    stroke="#7CB342"
                    stroke-width="1.666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <p
                    v-if="locationInfo.address"
                    class="m-0 text-[16px] font-bold leading-[24px] text-[#101828]"
                  >
                    {{ locationInfo.address }}
                  </p>

                  <p
                    class="m-0 mt-[2.8px] text-[16px] leading-[24px] text-[#4A5565]"
                  >
                    {{
                      [
                        locationInfo.city,
                        locationInfo.state,
                        locationInfo.zipcode,
                      ]
                        .filter(Boolean)
                        .join(", ")
                    }}
                  </p>

                  <p
                    v-if="locationInfo.country"
                    class="m-0 text-[16px] leading-[24px] text-[#4A5565]"
                  >
                    {{ locationInfo.country }}
                  </p>
                </div>
              </div>

              <a
                v-if="locationInfo.latitude"
                :href="`https://www.google.com/maps/dir/?api=1&destination=${locationInfo.latitude},${locationInfo.longitude}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-[48px] w-full items-center justify-center gap-[9px] rounded-[10px] bg-[#7CB342] text-[16px] font-semibold text-white no-underline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_190_437)">
                    <path
                      d="M2 7.33166L14.6638 1.33301L8.66517 13.9968L7.33213 8.66469L2 7.33166Z"
                      stroke="white"
                      stroke-width="1.33303"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_190_437">
                      <rect width="15.9964" height="15.9964" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="text-white"> Get Directions</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div
      class="bg-[#F9FAFB] lg:border-t lg:border-[#E5E7EB] lg:pt-[80px] lg:pb-[64px]"
    >
      <div
        class="px-[32px] lg:mx-auto lg:grid lg:max-w-[1310px] lg:grid-cols-[1fr_340px] lg:gap-x-[36px] lg:px-0"
      >
        <div class="lg:flex lg:flex-col lg:gap-[24px]">
          <section class="bg-[#F9FAFB] pt-[35px] pb-0 lg:p-0">
            <div class="mb-[24px] lg:mb-[28px]">
              <span
                class="inline-flex h-[42px] items-center gap-[10px] rounded-full border border-[#E5E7EB] bg-white px-[22px] text-[14px] font-semibold text-[#101828]"
              >
                About This Church
              </span>
            </div>

            <h2
              class="m-0 mb-[25px] max-w-[350px] text-[30px] font-bold leading-[36px] tracking-[-0.04em] text-[#101828] lg:mb-[45px] lg:max-w-none lg:text-[48px] lg:leading-[48px]"
            >
              About {{ churchInfo.name }}
            </h2>

            <div
              v-if="churchInfo.profile_video_embed"
              class="mb-[37px] overflow-hidden rounded-[16px] bg-black lg:mb-[24px] lg:h-[356px]"
              v-html="churchInfo.profile_video_embed"
            ></div>

            <div
              v-else-if="welcomeVideoUrl"
              class="relative mb-[37px] h-[241px] overflow-hidden rounded-[16px] bg-[#101828] lg:mb-[24px] lg:h-[460px]"
            >
              <video
                controls
                :poster="welcomeVideoThumb"
                preload="none"
                class="h-full w-full object-cover"
              >
                <source :src="welcomeVideoUrl" type="video/mp4" />
              </video>

              <div
                class="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div
                  class="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white shadow-lg"
                >
                  <svg width="25" height="29" viewBox="0 0 27 30" fill="none">
                    <path
                      d="M2 2L25 15L2 28V2Z"
                      fill="#7CB342"
                      stroke="#7CB342"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              class="rounded-[16px] border border-[#E5E7EB] bg-white px-[32px] pt-[32px] pb-[31px] lg:px-[32px] lg:pt-[32px] lg:pb-[32px]"
            >
              <h3
                class="m-0 mb-[25px] text-[23px] lg:text-[24px] font-bold leading-[32px] text-[#101828]"
              >
                Our Mission
              </h3>

              <div
                v-if="churchInfo.profile_description"
                class="mission-content mb-[24px] text-[16px] leading-[29px] text-[#4A5565]"
                v-html="churchInfo.profile_description"
              ></div>

              <div
                v-if="churchInfo.profile_description"
                class="mb-[24px] rounded-r-[14px] border-l-[4px] border-[#7CB342] bg-[#7CB3420D] px-[28px] py-[22px]"
              >
                <p
                  class="m-0 text-[16px] font-bold italic leading-[24px] text-[#101828]"
                >
                  "We welcome you to join us for worship and discover how God
                  can transform your life through His love and grace."
                </p>

                <p
                  v-if="pastorName"
                  class="m-0 mt-[8px] text-[16px] leading-[24px] text-[#4A5565]"
                >
                  — Pastor {{ pastorName }}
                </p>
              </div>

              <p
                class="m-0 mb-[34px] text-[16px] leading-[26px] text-[#4A5565]"
              >
                Whether you're a long-time believer or exploring faith for the
                first time, there's a place for you here. We offer ministries
                for all ages and life stages, from children and youth programs
                to adult Bible studies and community outreach.
              </p>

              <div class="mb-[32px] h-px w-full bg-[#E5E7EB]"></div>

              <div class="lg:flex lg:gap-[16px]">
                <button
                  type="button"
                  class="mb-[16px] flex h-[48px] w-full items-center justify-center gap-[9px] rounded-[14px] border-0 bg-[#7CB342] text-[18px] font-semibold text-white lg:mb-0 lg:flex-1"
                  @click="scrollToTop"
                >
                  Plan Your Visit
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49609 14.994L12.4941 9.99601L7.49609 4.99805"
                      stroke="white"
                      stroke-width="1.66599"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  class="flex h-[48px] w-full items-center justify-center gap-[9px] rounded-[14px] border-0 bg-[#101828] text-[18px] font-extrabold text-white lg:flex-1"
                  @click="openMessage"
                >
                  Contact Pastor
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49609 14.994L12.4941 9.99601L7.49609 4.99805"
                      stroke="white"
                      stroke-width="1.66599"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>

        <aside class="pt-[25px] lg:flex lg:flex-col lg:gap-[20px] lg:p-0">
          <section class="bg-[#F9FAFB] pb-0 lg:p-0">
            <div
              class="rounded-[16px] border border-[#E5E7EB] bg-white p-[24px]"
            >
              <h3
                class="m-0 mb-[25px] text-[18px] font-bold leading-[28px] text-[#101828]"
              >
                Church Overview
              </h3>

              <div class="space-y-[20px]">
                <div class="flex items-center gap-[16px]">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB3421A]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9908 20.9891V18.9901C15.9908 17.9298 15.5696 16.9129 14.8198 16.1632C14.0701 15.4134 13.0532 14.9922 11.9929 14.9922H5.99597C4.93565 14.9922 3.91877 15.4134 3.16901 16.1632C2.41926 16.9129 1.99805 17.9298 1.99805 18.9901V20.9891"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.99597 10.9944C11.204 10.9944 12.9939 9.20445 12.9939 6.99646C12.9939 4.78847 11.204 2.99854 8.99597 2.99854C6.78798 2.99854 4.99805 4.78847 4.99805 6.99646C4.99805 9.20445 6.78798 10.9944 8.99597 10.9944Z"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.9887 20.989V18.9901C21.988 18.1042 21.6932 17.2437 21.1505 16.5436C20.6078 15.8436 19.8479 15.3435 18.9902 15.1221"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9922 3.12842C16.8522 3.3486 17.6144 3.84874 18.1587 4.54999C18.703 5.25123 18.9985 6.1137 18.9985 7.00141C18.9985 7.88911 18.703 8.75158 18.1587 9.45282C17.6144 10.1541 16.8522 10.6542 15.9922 10.8744"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p
                      class="m-0 text-[24px] font-bold leading-[32px] text-[#101828]"
                    >
                      5,000+
                    </p>
                    <p
                      class="mt-[1px] text-[14px] leading-[20px] text-[#4A5565]"
                    >
                      Members
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-[19px]">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB3421A]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9892 13.9928C20.4784 12.5336 21.9877 10.7845 21.9877 8.49568C21.9877 7.03775 21.4085 5.63953 20.3776 4.60861C19.3467 3.5777 17.9484 2.99854 16.4905 2.99854C14.7314 2.99854 13.4921 3.49828 11.9929 4.9975C10.4936 3.49828 9.25428 2.99854 7.49519 2.99854C6.03726 2.99854 4.63904 3.5777 3.60812 4.60861C2.57721 5.63953 1.99805 7.03775 1.99805 8.49568C1.99805 10.7945 3.49727 12.5436 4.99649 13.9928L11.9929 20.9892L18.9892 13.9928Z"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p
                      class="m-0 text-[24px] font-bold leading-[32px] text-[#101828]"
                    >
                      54 Years
                    </p>
                    <p
                      class="mt-[1px] text-[14px] leading-[20px] text-[#4A5565]"
                    >
                      Serving Community
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-[19px]">
                  <div
                    class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB3421A]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9941 6.99658V20.9893"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.99753 17.9907C2.73245 17.9907 2.47823 17.8854 2.29079 17.698C2.10335 17.5106 1.99805 17.2563 1.99805 16.9913V3.99802C1.99805 3.73294 2.10335 3.47872 2.29079 3.29128C2.47823 3.10384 2.73245 2.99854 2.99753 2.99854H7.99493C9.05525 2.99854 10.0721 3.41974 10.8219 4.1695C11.5716 4.91926 11.9929 5.93614 11.9929 6.99646C11.9929 5.93614 12.4141 4.91926 13.1638 4.1695C13.9136 3.41974 14.9305 2.99854 15.9908 2.99854H20.9882C21.2533 2.99854 21.5075 3.10384 21.6949 3.29128C21.8824 3.47872 21.9877 3.73294 21.9877 3.99802V16.9913C21.9877 17.2563 21.8824 17.5106 21.6949 17.698C21.5075 17.8854 21.2533 17.9907 20.9882 17.9907H14.9913C14.1961 17.9907 13.4334 18.3067 12.8711 18.869C12.3088 19.4313 11.9929 20.194 11.9929 20.9892C11.9929 20.194 11.6769 19.4313 11.1146 18.869C10.5523 18.3067 9.78965 17.9907 8.99441 17.9907H2.99753Z"
                        stroke="#7CB342"
                        stroke-width="1.99896"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p
                      class="m-0 text-[24px] font-bold leading-[32px] text-[#101828]"
                    >
                      100+
                    </p>
                    <p
                      class="mt-[1px] text-[14px] leading-[20px] text-[#4A5565]"
                    >
                      Ministries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-[#F9FAFB] pt-[24px] pb-0 lg:p-0">
            <div
              class="rounded-[16px] border border-[#E5E7EB] bg-white p-[25px]"
            >
              <h3
                class="m-0 mb-[25px] text-[18px] font-bold leading-[28px] text-[#101828]"
              >
                Ministries
              </h3>

              <div class="space-y-[12px]">
                <div
                  v-for="ministry in [
                    'Children & Youth',
                    'College & Young Adults',
                    'Marriage & Family',
                    'Senior Adults',
                    'Music & Worship',
                    'Community Outreach',
                    'Missions',
                    'Small Groups',
                  ]"
                  :key="ministry"
                  class="flex h-[44px] cursor-pointer items-center justify-between rounded-[10px] bg-[#F9FAFB] px-[12px]"
                >
                  <span class="text-[14px] font-medium text-[#101828]">
                    {{ ministry }}
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.99805 11.9972L9.99715 7.99812L5.99805 3.99902"
                      stroke="#99A1AF"
                      stroke-width="1.33303"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-[#F9FAFB] pt-[24px] pb-0 lg:p-0">
            <div
              class="rounded-[14px] bg-[linear-gradient(135deg,_#7CB342_0%,_#79B041_12.5%,_#77AE3F_25%,_#74AB3E_37.5%,_#72A93D_50%,_#6FA63C_62.5%,_#6DA43A_75%,_#689F38_100%)] p-[24px]"
            >
              <h3
                class="m-0 mb-[16px] text-[20px] font-bold leading-[28px] text-white"
              >
                First Time Visitor?
              </h3>

              <p
                class="m-0 mb-[26px] text-[16px] leading-[26px] text-[#FFFFFFE5]"
              >
                We'd love to welcome you! Learn what to expect when you visit
                us.
              </p>

              <button
                type="button"
                class="flex h-[48px] w-full items-center justify-center rounded-[14px] border-0 bg-white text-[16px] font-semibold text-[#7CB342]"
                @click="scrollToTop"
              >
                Plan Your Visit
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>

    <div class="bg-white lg:pt-[80px] lg:pb-0">
      <div
        class="md:mx-auto md:grid md:max-w-[1310px] md:grid-cols-3 md:gap-[28px] lg:mx-auto lg:grid lg:max-w-[1310px] lg:grid-cols-3 lg:gap-[28px]"
      >
        <section
          class="bg-[#F9FAFB] px-[32px] pt-[56px] md:bg-white md:p-0 lg:bg-white lg:p-0 flex flex-col h-full"
        >
          <div class="rounded-[16px] bg-[#101828] p-[32px] h-full">
            <div
              class="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-white/10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.89498 19.9897C9.80257 20.9683 11.9969 21.2333 14.0827 20.7371C16.1684 20.2409 18.0083 19.0161 19.2708 17.2833C20.5334 15.5506 21.1355 13.4239 20.9688 11.2864C20.802 9.14899 19.8773 7.14139 18.3614 5.62541C16.8454 4.10942 14.8378 3.18473 12.7003 3.01798C10.5629 2.85124 8.43617 3.45339 6.70342 4.71593C4.97067 5.97848 3.74583 7.81838 3.24962 9.9041C2.75341 11.9898 3.01846 14.1842 3.99701 16.0918L1.99805 21.9887L7.89498 19.9897Z"
                  stroke="white"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="m-0 mb-[13px] text-[24px] font-bold leading-[32px] text-white"
            >
              Still have questions?
            </h3>

            <p
              class="m-0 mb-[25.26px] text-[16px] leading-[26px] text-[#D1D5DC]"
            >
              If you don't see your question listed, feel free to submit it to
              our experts or live chat with a real person.
            </p>

            <button
              type="button"
              class="mb-[12px] flex h-[48px] w-full items-center justify-center gap-[8px] rounded-[10px] border-0 bg-[#7CB342] text-[16px] font-semibold text-white"
              @click="navigateTo('/pages/contact-truelife-org')"
            >
              Submit a Question
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_190_596)">
                  <path
                    d="M9.68931 14.4543C9.71463 14.5174 9.75865 14.5712 9.81546 14.6086C9.87227 14.6459 9.93915 14.665 10.0071 14.6633C10.0751 14.6616 10.1409 14.6391 10.1957 14.5988C10.2506 14.5586 10.2918 14.5026 10.3138 14.4383L14.6462 1.77444C14.6675 1.71538 14.6716 1.65147 14.6579 1.59019C14.6443 1.5289 14.6134 1.47277 14.569 1.42837C14.5246 1.38397 14.4685 1.35313 14.4072 1.33947C14.3459 1.3258 14.282 1.32987 14.223 1.3512L1.55914 5.68356C1.49482 5.70562 1.43878 5.74683 1.39855 5.80165C1.35833 5.85647 1.33583 5.92229 1.33409 5.99026C1.33235 6.05824 1.35145 6.12512 1.38881 6.18193C1.42618 6.23874 1.48003 6.28277 1.54314 6.30809L6.82862 8.42761C6.9957 8.49451 7.14751 8.59455 7.27489 8.7217C7.40227 8.84885 7.50259 9.00048 7.56978 9.16744L9.68931 14.4543Z"
                    stroke="white"
                    stroke-width="1.33303"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5651 1.43115L7.27344 8.72218"
                    stroke="white"
                    stroke-width="1.33303"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_190_596">
                    <rect width="15.9964" height="15.9964" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button
              type="button"
              class="flex h-[48px] w-full items-center justify-center rounded-[10px] border-0 bg-white/10 text-[16px] font-extrabold text-white"
            >
              Live Chat with Us
            </button>
          </div>
        </section>

        <section
          class="bg-[#F9FAFB] px-[32px] pt-[32px] pb-0 md:bg-white md:p-0 lg:bg-white lg:p-0 flex flex-col h-full"
        >
          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[32px] h-full"
          >
            <div
              class="mb-[24px] flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#7CB3421A]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9897 9.99487C19.9897 14.9853 14.4536 20.1826 12.5946 21.7877C12.4214 21.918 12.2106 21.9884 11.9939 21.9884C11.7772 21.9884 11.5664 21.918 11.3932 21.7877C9.53417 20.1826 3.99805 14.9853 3.99805 9.99487C3.99805 7.87424 4.84046 5.84046 6.33998 4.34095C7.83949 2.84144 9.87326 1.99902 11.9939 1.99902C14.1145 1.99902 16.1483 2.84144 17.6478 4.34095C19.1473 5.84046 19.9897 7.87424 19.9897 9.99487Z"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9945 12.9935C13.6505 12.9935 14.993 11.651 14.993 9.99502C14.993 8.33903 13.6505 6.99658 11.9945 6.99658C10.3385 6.99658 8.99609 8.33903 8.99609 9.99502C8.99609 11.651 10.3385 12.9935 11.9945 12.9935Z"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="m-0 mb-[13px] text-[24px] font-bold leading-[32px] text-[#101828]"
            >
              Churches Near
            </h3>

            <p
              class="m-0 mb-[25.25px] text-[16px] leading-[26px] text-[#4A5565]"
            >
              Discover other churches connected with TrueLife.org and are ready
              to be a part of your life.
            </p>

            <div
              class="relative mb-[24px] h-[198px] lg:h-[246px] overflow-hidden rounded-[14px] bg-[#e8e0d0]"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png"
                alt="World map"
                class="h-full w-full object-cover opacity-60"
              />

              <div class="absolute left-[95px] top-[73px]">
                <div
                  class="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[3px] border-white bg-[#7CB342] shadow-md"
                >
                  <IconMapPin size="16" class="text-white" />
                </div>
              </div>

              <div class="absolute left-[128px] top-[65px]">
                <div
                  class="flex h-[34px] w-[34px] items-center justify-center rounded-full border-[3px] border-white bg-[#7CB342] shadow-md"
                >
                  <IconMapPin size="20" class="text-white" />
                </div>
              </div>

              <div class="absolute left-[166px] top-[126px]">
                <div
                  class="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[3px] border-white bg-[#7CB342] shadow-md"
                >
                  <IconMapPin size="16" class="text-white" />
                </div>
              </div>
            </div>

            <NuxtLink
              to="/locations"
              class="inline-flex items-center gap-[8px] text-[16px] font-semibold leading-[28px] text-[#7CB342] no-underline"
            >
              <span class="text-[#7CB342]">View Nearby Churches</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99805 11.9972L9.99715 7.99812L5.99805 3.99902"
                  stroke="#7CB342"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>
        </section>

        <section
          class="bg-[#F9FAFB] px-[32px] pt-[32px] pb-0 md:bg-white md:p-0 lg:bg-white lg:p-0 flex flex-col h-full"
        >
          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[32px] h-full"
          >
            <div
              class="mb-[36px] flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-[#7CB3421A]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9941 6.99658V20.9893"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.99753 17.9907C2.73245 17.9907 2.47823 17.8854 2.29079 17.698C2.10335 17.5106 1.99805 17.2563 1.99805 16.9913V3.99802C1.99805 3.73294 2.10335 3.47872 2.29079 3.29128C2.47823 3.10384 2.73245 2.99854 2.99753 2.99854H7.99493C9.05525 2.99854 10.0721 3.41974 10.8219 4.1695C11.5716 4.91926 11.9929 5.93614 11.9929 6.99646C11.9929 5.93614 12.4141 4.91926 13.1638 4.1695C13.9136 3.41974 14.9305 2.99854 15.9908 2.99854H20.9882C21.2533 2.99854 21.5075 3.10384 21.6949 3.29128C21.8824 3.47872 21.9877 3.73294 21.9877 3.99802V16.9913C21.9877 17.2563 21.8824 17.5106 21.6949 17.698C21.5075 17.8854 21.2533 17.9907 20.9882 17.9907H14.9913C14.1961 17.9907 13.4334 18.3067 12.8711 18.869C12.3088 19.4313 11.9929 20.194 11.9929 20.9892C11.9929 20.194 11.6769 19.4313 11.1146 18.869C10.5523 18.3067 9.78965 17.9907 8.99441 17.9907H2.99753Z"
                  stroke="#7CB342"
                  stroke-width="1.99896"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3
              class="m-0 mb-[13px] text-[24px] font-bold leading-[32px] text-[#101828]"
            >
              Resources for Pastors
            </h3>

            <p class="m-0 mb-[25px] text-[16px] leading-[26px] text-[#4A5565]">
              TrueLife partners with 10K+ of church members invite after one
              Sunday. You have to see it to believe it!
            </p>

            <div class="mb-[24px] space-y-[12px]">
              <div
                v-for="resource in [
                  'Sunday Sermon Guides',
                  'Invitation Card System',
                  'Church Growth Tools',
                ]"
                :key="resource"
                class="flex h-[44px] cursor-pointer items-center justify-between rounded-[10px] bg-[#F9FAFB] px-[13px]"
              >
                <span class="text-[14px] font-medium text-[#101828]">
                  {{ resource }}
                </span>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99805 11.9972L9.99715 7.99812L5.99805 3.99902"
                    stroke="#99A1AF"
                    stroke-width="1.33303"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <NuxtLink
              to="/pastors"
              class="inline-flex items-center gap-[9px] text-[16px] font-semibold leading-[28px] no-underline"
            >
              <span class="text-[#7CB342]">View All Resources</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99805 1.99951H13.9971V5.99861"
                  stroke="#7CB342"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66602 9.33119L13.9977 1.99951"
                  stroke="#7CB342"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9977 8.66464V12.6637C11.9977 13.0173 11.8573 13.3563 11.6073 13.6063C11.3573 13.8563 11.0183 13.9968 10.6647 13.9968H3.33303C2.97949 13.9968 2.64043 13.8563 2.39044 13.6063C2.14044 13.3563 2 13.0173 2 12.6637V5.33206C2 4.97851 2.14044 4.63945 2.39044 4.38946C2.64043 4.13947 2.97949 3.99902 3.33303 3.99902H7.33213"
                  stroke="#7CB342"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>
        </section>
      </div>
    </div>

    <section
      class="bg-[linear-gradient(135deg,_#F9FAFB_0%,_#F3F4F6_100%)] lg:bg-none lg:bg-white p-[40px] lg:px-0 lg:py-[40px]"
    >
      <div
        class="rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] px-[36px] pt-[39px] pb-[43px] text-center md:mx-auto md:max-w-[1310px] lg:mx-auto lg:max-w-[1310px]"
      >
        <h3
          class="m-0 mb-[16px] text-[30px] font-bold leading-[36px] tracking-[-0.03em] text-[#101828]"
        >
          About TrueLife
        </h3>

        <p
          class="m-0 mb-[30px] text-center text-[18px] leading-[29px] text-[#4A5565] md:mx-auto md:max-w-[650px] lg:mx-auto lg:max-w-[650px]"
        >
          TrueLife.org is the most Biblically consistent content that delivers
          through answers from a biblically conservative Christian point of
          view. We have partnered with thousands of churches to share Christ
          using our unfailing love with our viewers.
        </p>

        <NuxtLink
          to="/pages/about-truelife-org"
          class="mx-auto flex min-h-[71px] lg:min-h-[48px] w-full max-w-[270px] lg:max-w-[290px] items-center justify-center gap-[8px] rounded-[14px] bg-[#7CB342] px-[22px] lg:py-[14px] font-semiboldno-underline"
        >
          <span class="text-[16px] leading-[24px] text-white font-semibold"
            >Learn More About TrueLife</span
          >
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.51758 14.3409L10.8626 9.99588L6.51758 5.65088"
              stroke="white"
              stroke-width="1.44834"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </section>

    <RedesignFooter />

    <Teleport to="body">
      <div
        v-if="showMessageModal"
        class="modal-overlay"
        @click.self="showMessageModal = false"
      >
        <div class="modal-content">
          <button class="modal-close" @click="showMessageModal = false">
            ✕
          </button>
          <h3>Send a Message</h3>
          <form @submit.prevent="handleMessage">
            <input
              v-model="msgForm.name"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              v-model="msgForm.email"
              type="email"
              placeholder="Your email"
              required
            />
            <input
              v-model="msgForm.subject"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              v-model="msgForm.message"
              placeholder="Your message"
              required
              rows="4"
            ></textarea>
            <button type="submit" class="btn-send">Send Message</button>
          </form>
          <p v-if="msgSent" class="msg-success">Message sent successfully!</p>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useAsyncData, navigateTo } from "#imports";
import { isEmpty, get } from "lodash-es";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
import IconPhone from "~/components/icons/IconPhone.vue";
import IconGlobe from "~/components/icons/IconGlobe.vue";
import IconMail from "~/components/icons/IconMail.vue";
import IconMapPin from "~/components/icons/IconMapPin.vue";
import IconMessageSquare from "~/components/icons/IconMessageSquare.vue";
import ChurchsService from "@/services/ChurchsService";
import MessagesService from "@/services/MessagesService";
import WelcomeVideoService from "@/services/WelcomeVideoService";
import logoIndex from "@/assets/images/logo-index-155.png";

const route = useRoute();
const fallbackCover =
  "https://truelifeorg.s3.amazonaws.com/images/profile-banner.jpg";
const fallbackHeadshot =
  "https://truelifeorg.s3.amazonaws.com/images/placeholder-headshot.jpg";

const showMessageModal = ref(false);
const msgSent = ref(false);
const msgForm = ref({ name: "", email: "", subject: "", message: "" });

const { data: churchState } = await useAsyncData(
  `church-detail-redesign:${route.params.slug}`,
  async () => {
    const fallback = { churchInfo: {}, locationInfo: {}, welcomeVideo: null };
    try {
      const resp = await ChurchsService.getAccountBySlug(route.params.slug);
      const churchInfo = get(resp, "data", {}) || {};
      if (isEmpty(churchInfo) || churchInfo.id == null) return fallback;

      let locationInfo = {};
      let welcomeVideo = null;

      try {
        const respLoc = await ChurchsService.getLocationByAccount(
          churchInfo.id,
        );
        locationInfo = respLoc.data || {};
      } catch (e) {
      }

      try {
        const respWelcome = await WelcomeVideoService.getByAccount(
          churchInfo.id,
        );
        welcomeVideo = get(respWelcome, "data", null);
      } catch (e) {
      }

      return { churchInfo, locationInfo, welcomeVideo };
    } catch (e) {
      console.error(e);
      return fallback;
    }
  },
);

const churchInfo = computed(() => churchState.value?.churchInfo || {});
const locationInfo = computed(() => churchState.value?.locationInfo || {});

const pastorName = computed(() => {
  const p = churchInfo.value.pastor;
  if (!p) return "";
  return [p.firstname, p.lastname].filter(Boolean).join(" ");
});

const pastorEmail = computed(() => {
  return churchInfo.value.pastor?.email || churchInfo.value.contact_email || "";
});

const distance = computed(() => {
  return "";
});

const websiteUrl = computed(() => {
  const w = churchInfo.value.profile_website;
  if (!w) return "#";
  return w.startsWith("http") ? w : `https://${w}`;
});

const welcomeVideoUrl = computed(
  () =>
    churchState.value?.welcomeVideo?.url ||
    churchInfo.value.welcome_video?.url ||
    "",
);
const welcomeVideoThumb = computed(
  () =>
    churchState.value?.welcomeVideo?.thumbnail ||
    churchInfo.value.welcome_video?.thumbnail ||
    "",
);

const serviceTimes = computed(() => {
  const raw = churchInfo.value.profile_service_times;
  if (!raw) return [];
  const decoded = raw
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  const lines = decoded
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const result = [];
  let currentName = "";
  for (const line of lines) {
    if (line.includes(":") && !line.match(/\d{1,2}:\d{2}/)) {
      currentName = line.replace(/:$/, "");
    } else {
      result.push({ name: currentName || "Service", time: line });
    }
  }
  return result;
});

function openMessage() {
  showMessageModal.value = true;
  msgSent.value = false;
}

async function handleMessage() {
  try {
    await MessagesService.sendMessage({
      subject: msgForm.value.subject,
      message: msgForm.value.message,
      email: msgForm.value.email,
      account_id: locationInfo.value.account_id || churchInfo.value.id,
    });
    msgSent.value = true;
    msgForm.value = { name: "", email: "", subject: "", message: "" };
  } catch (e) {
    alert("Failed to send message. Please try again.");
  }
}

function goTo(target) {
  if (typeof target === "string" && target.startsWith("/")) {
    navigateTo(target);
    return;
  }
  const el = document.getElementById(target);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  width: min(480px, calc(100% - 32px));
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close {
  float: right;
  border: none;
  background: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #5a6877;
}

.modal-content h3 {
  margin: 0 0 20px;
  color: #1a2a3a;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-content input,
.modal-content textarea {
  border: 1px solid #d4d9e0;
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 14px;
  color: #1a2a3a;
}

.btn-send {
  border: none;
  background: #7cb342;
  color: #fff;
  padding: 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.msg-success {
  margin-top: 12px;
  color: #7cb342;
  font-weight: 600;
  text-align: center;
}
</style>
