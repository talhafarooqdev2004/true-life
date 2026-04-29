<template>
  <main class="min-h-screen bg-white">
    <RedesignTopNav @go="goTo" />
    <section
      class="relative isolate overflow-hidden border-b border-white bg-gradient-to-r from-[rgba(16,24,40,0.95)] via-[rgba(16,24,40,0.90)] to-[rgba(16,24,40,0.85)] text-white"
    >
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,26,45,0.42)_0%,rgba(17,26,45,0.72)_48%,rgba(17,26,45,0.92)_100%)]"
      ></div>
      <div
        class="relative mx-auto flex min-h-[730px] w-full max-w-[394px] flex-col items-center px-[10px] pb-[56px] pt-[80px] text-center lg:min-h-[735px] lg:max-w-[880px] lg:px-0 lg:py-[128px]"
      >
        <div
          class="inline-flex items-center gap-[10px] rounded-full border border-[#586173] bg-[#3A4354] px-[20px] py-[14px] text-[14px] font-medium leading-none text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] lg:px-[18px] lg:py-[10px] lg:text-[13px]"
        >
          <span class="h-[8px] w-[8px] rounded-full bg-[#7CB342]"></span
          ><span>{{ t("redesign.hero.trustPill") }}</span>
        </div>
        <h1
          class="mt-[40px] max-w-[334px] text-[48px] font-bold leading-[0.98] tracking-[-1.2px] text-white lg:mt-[42px] lg:max-w-[780px] lg:text-[66px] lg:leading-[1.03] lg:tracking-[-2px]"
        >
          {{ t("redesign.hero.heading") }}
        </h1>
        <p
          class="mt-[23px] max-w-[330px] text-[20px] font-normal leading-[32.5px] text-[#D1D5DC] lg:max-w-[720px] lg:text-[22px] lg:leading-[34px]"
        >
          {{ t("redesign.hero.subheading") }}
        </p>
        <form
          class="mt-[8px] w-full lg:mt-[38px] lg:max-w-[575px]"
          @submit.prevent="applySearch"
        >
          <div
            class="flex h-[60px] items-center gap-[8px] rounded-[16px] bg-[#FFFFFFF2] px-[6px] shadow-[0_18px_36px_rgba(0,0,0,0.24)] lg:h-[56px] lg:rounded-[14px]"
          >
            <input
              v-model="searchInput"
              type="text"
              autocomplete="off"
              :placeholder="t('redesign.hero.searchPlaceholder')"
              class="h-full flex-1 bg-transparent pl-[18px] pr-[10px] text-[16px] leading-none text-[#667286] outline-none placeholder:text-[#7F8796] lg:text-[13px]"
            />
            <button
              type="submit"
              class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[13px] bg-[#7CB342] text-white shadow-[0_10px_22px_rgba(124,179,66,0.16)] lg:h-[42px] lg:w-[42px] lg:rounded-[11px]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33213 12.6638C10.277 12.6638 12.6643 10.2766 12.6643 7.33171C12.6643 4.38685 10.277 1.99957 7.33213 1.99957C4.38728 1.99957 2 4.38685 2 7.33171C2 10.2766 4.38728 12.6638 7.33213 12.6638Z"
                  stroke="white"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9969 13.9968L11.1309 11.1308"
                  stroke="white"
                  stroke-width="1.33303"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
        <div
          class="mt-[12px] flex max-w-[326px] flex-wrap items-center gap-[8px] text-[14px] lg:max-w-none"
        >
          <span class="text-[#9EA6B5]">{{ t("redesign.hero.popular") }}</span
          ><NuxtLink
            v-for="tag in ['forgiveness', 'purpose', 'suffering', 'hope']"
            :key="tag"
            :to="`/categories/${tag}`"
            class="rounded-[10px] border border-white/20 bg-white/10 px-[14px] py-[8px] text-[14px] font-medium leading-none text-white lg:text-[13px]"
            >{{ tag }}</NuxtLink
          >
        </div>
        <div
          class="mt-[40px] grid w-full grid-cols-2 gap-x-[22px] gap-y-[24px] lg:mt-[54px] lg:max-w-[660px] lg:grid-cols-3 lg:gap-x-[70px]"
        >
          <article
            v-for="stat in heroStats"
            :key="stat.label"
            class="flex items-start gap-[14px] text-left"
            :class="
              stat.label === 'Support Available'
                ? 'col-span-2 mx-auto lg:col-span-1 lg:mx-0'
                : ''
            "
          >
            <span class="mt-[2px] h-[55px] w-[3px] bg-[#7CB342]"></span>
            <div>
              <p class="text-[30px] font-extrabold leading-[1.05] text-white">
                {{ stat.value }}
              </p>
              <p class="mt-[8px] text-[14px] leading-[1.4] text-[#9EA6B5]">
                {{ stat.label }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="border-t-[2px] border-t-[#0D1421] bg-white">
      <div
        class="mx-auto w-full max-w-[394px] px-[16px] pb-[32px] pt-[95px] lg:max-w-[1600px] lg:px-[20px] lg:pt-[95px]"
      >
        <div
          class="inline-flex items-center gap-[10px] rounded-[8px] bg-[#F2F3F6] px-[14px] py-[9px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6638 1.99951H3.33254C2.59633 1.99951 1.99951 2.59633 1.99951 3.33254V12.6638C1.99951 13.4 2.59633 13.9968 3.33254 13.9968H12.6638C13.4 13.9968 13.9968 13.4 13.9968 12.6638V3.33254C13.9968 2.59633 13.4 1.99951 12.6638 1.99951Z"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.99951 5.99866H13.9968"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.99951 9.9978H13.9968"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99854 1.99951V13.9968"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99756 1.99951V13.9968"
              stroke="#7CB342"
              stroke-width="1.33303"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="text-[12px] font-semibold leading-none tracking-[0.12em] d-flex mt-0.5 text-[#465165]"
            >TOPICS LIBRARY</span
          >
        </div>
        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <h2
              class="mt-[24px] max-w-[334px] text-[36px] font-extrabold leading-[40px] tracking-[-1.25px] text-[#101828] lg:max-w-none lg:text-[48px] lg:leading-[48px]"
            >
              Explore Life's Questions
            </h2>
            <p
              class="mt-[9px] lg:mt-[16px] max-w-[358px] text-[18px] font-normal leading-[29.5px] text-[#4A5565] lg:max-w-[640px] lg:text-[16px] lg:leading-[26px]"
            >
              Discover comprehensive resources and thoughtful answers to the
              questions that matter most. Each topic includes curated articles,
              videos, and expert guidance.
            </p>
          </div>
          <button
            type="button"
            class="mt-[28px] hidden h-[42px] relative top-20 items-center gap-[9px] rounded-[12px] border border-[#D1D5DC] bg-white px-[24px] text-[13px] font-bold uppercase text-[#101828] shadow-[0_2px_4px_rgba(16,24,40,0.08)] lg:flex"
            @click="goTo('/topics')"
          >
            View All Topics
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33252 7.99817H12.6638"
                stroke="#101828"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99805 3.33264L12.6637 7.99826L7.99805 12.6639"
                stroke="#101828"
                stroke-width="1.33303"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="mt-[14px] lg:mt-[40px] space-y-[36px] lg:flex lg:items-center lg:gap-[28px] lg:space-y-0"
        >
          <article
            v-for="(stat, index) in topicStats"
            :key="stat.title"
            class="flex items-center gap-[12px] lg:gap-[32px]"
          >
            <div class="flex items-center gap-[12px]">
              <div
                class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#EFF4E4] text-[20px] font-bold text-[#7CB342]"
              >
                {{ stat.value }}
              </div>

              <div>
                <h3
                  class="text-[14px] font-semibold leading-[1.06] text-[#101828]"
                >
                  {{ stat.title }}
                </h3>
                <p class="mt-[1px] text-[12px] leading-[16px] text-[#4A5565]">
                  {{ stat.text }}
                </p>
              </div>
            </div>

            <svg
              v-if="index !== topicStats.length - 1"
              width="1"
              height="48"
              viewBox="0 0 1 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="0.988303" height="47.9892" fill="#D1D5DC" />
            </svg>
          </article>
        </div>
      </div>
    </section>
    <section class="border-t border-t-[#E2E5E9] bg-white">
      <div
        class="mx-auto w-full max-w-[394px] pb-[28px] pt-[64px] lg:max-w-[1600px] lg:pt-[64px]"
      >
        <div class="flex items-center gap-[12px] px-[16px] lg:px-[20px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33019 16.66C8.33012 16.8148 8.37318 16.9666 8.45455 17.0982C8.53592 17.2299 8.65237 17.3363 8.79084 17.4055L10.4568 18.2385C10.5839 18.302 10.725 18.332 10.8669 18.3255C11.0087 18.3191 11.1466 18.2765 11.2674 18.2018C11.3881 18.1271 11.4878 18.0228 11.5569 17.8987C11.626 17.7747 11.6623 17.635 11.6622 17.493V11.662C11.6624 11.2492 11.8158 10.8511 12.0928 10.545L18.1096 3.89013C18.2174 3.77064 18.2883 3.62247 18.3138 3.46354C18.3392 3.3046 18.318 3.14171 18.2528 2.99455C18.1876 2.8474 18.0811 2.72229 17.9463 2.63435C17.8115 2.54641 17.6541 2.4994 17.4932 2.49902H2.4992C2.33811 2.49908 2.18048 2.54585 2.04543 2.63367C1.91037 2.72148 1.80367 2.84657 1.73826 2.99379C1.67285 3.14101 1.65153 3.30404 1.67689 3.46313C1.70224 3.62222 1.77318 3.77054 1.88112 3.89013L7.89953 10.545C8.17653 10.8511 8.33001 11.2492 8.33019 11.662V16.66Z"
              stroke="#4A5565"
              stroke-width="1.666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2
            class="text-[14px] font-semibold uppercase leading-none tracking-[0.06em] text-[#101828]"
          >
            Filter by Category
          </h2>
        </div>
        <div
          class="mt-[15px] flex flex-wrap gap-x-[12px] gap-y-[12px] px-[16px] lg:px-[20px]"
        >
          <button
            v-for="filter in topicFilters"
            :key="filter.value"
            type="button"
            class="flex h-[42px] items-center justify-center rounded-[15px] border px-[20px] text-[14px] leading-none transition-colors"
            :class="
              selectedTopic === filter.value
                ? 'border-[#7CB342] bg-[#7CB342] text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]'
                : '!border !border-[#E5E7EB] bg-[#F3F4F6] text-[#364153]'
            "
            @click="selectedTopic = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>
        <div
          class="mt-[40px] space-y-[24px] lg:grid lg:grid-cols-3 lg:gap-[20px] lg:space-y-0 px-[16px] lg:px-[20px"
        >
          <RedesignTopicCard
            v-for="card in visibleTopicCards"
            :key="card.id"
            :card="card"
          />
        </div>
        <div class="px-[16px] lg:px-[20px]">
          <div
            class="mt-[64px] rounded-[20px] border border-[#E5E7EB] bg-[linear-gradient(135deg,_#F9FAFB_0%,_#FFFFFF_100%)] p-[40px] text-center shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)] lg:mt-[70px] lg:px-[40px] lg:py-[40px]"
          >
            <h2
              class="mx-auto max-w-[720px] text-[24px] font-bold leading-[32px] tracking-[-0.3px] text-[#101828] lg:text-[30px] lg:leading-[36px]"
            >
              Can't Find What You're Looking For?
            </h2>
            <p
              class="mx-auto mt-[16px] max-w-[560px] text-[18px] leading-[28px] tracking-[-0.2px] text-[#4A5565] lg:text-[16px] lg:leading-[24px]"
            >
              Browse our complete library of resources or use the search to find
              specific topics and questions.
            </p>
            <div class="lg:flex lg:justify-center lg:gap-[16px]">
              <button
                type="button"
                class="mt-[32px] flex h-[55px] w-full items-center justify-center rounded-[14px] bg-[#7CB342] px-[20px] text-[14px] font-semibold uppercase text-white shadow-[0_6px_9px_rgba(124,179,66,0.28)] lg:h-[52px] lg:w-[250px]"
                @click="goTo('/topics')"
              >
                View All Resources</button
              ><button
                type="button"
                class="mt-[16px] flex h-[55px] w-full items-center justify-center rounded-[14px] !border-[2px] !border-[#D1D5DC] bg-white px-[20px] text-[14px] font-semibold uppercase text-[#101828] lg:mt-[32px] lg:h-[52px] lg:w-[250px]"
                @click="goTo('/search')"
              >
                Search Questions
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-[linear-gradient(135deg,_#F9FAFB_0%,_#FFFFFF_100%)] py-[80px] mt-[95px] px-[16px] lg:px-[20px]"
        >
          <div
            class="rounded-[25px] border border-[#DFE3E8] bg-white p-[40px] text-center shadow-[0_2px_6px_rgba(16,24,40,0.07)] lg:px-[40px]"
          >
            <div class="flex items-center justify-center">
              <div
                class="relative h-[56px] w-[56px] flex-shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-[0_4px_10px_rgba(16,24,40,0.22)]"
              >
                <img
                  src="/assets/images/Image (Mentor).png"
                  class="absolute inset-0 h-full w-full object-cover scale-[2.5] object-center"
                  alt="Mentor"
                />
              </div>

              <div
                class="-ml-[8px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white bg-[#7CB342] text-white shadow-[0_4px_10px_rgba(16,24,40,0.22)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5309 26.6608C13.0751 27.9659 16.0018 28.3194 18.7836 27.6576C21.5653 26.9958 24.0193 25.3622 25.7032 23.0512C27.3871 20.7402 28.1902 17.9037 27.9678 15.053C27.7454 12.2022 26.5121 9.52463 24.4902 7.50271C22.4683 5.4808 19.7907 4.24753 16.9399 4.02513C14.0892 3.80273 11.2527 4.60584 8.9417 6.28973C6.63068 7.97361 4.99708 10.4275 4.33527 13.2093C3.67346 15.9911 4.02697 18.9178 5.33208 21.462L2.66602 29.3269L10.5309 26.6608Z"
                    stroke="white"
                    stroke-width="2.66607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="-ml-[8px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white bg-[#2F80FF] text-white shadow-[0_4px_10px_rgba(16,24,40,0.22)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9966 9.33105V27.9935"
                    stroke="white"
                    stroke-width="2.66607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.99905 23.9945C3.64551 23.9945 3.30644 23.8541 3.05645 23.6041C2.80646 23.3541 2.66602 23.015 2.66602 22.6615V5.33206C2.66602 4.97851 2.80646 4.63945 3.05645 4.38946C3.30644 4.13947 3.64551 3.99902 3.99905 3.99902H10.6642C12.0784 3.99902 13.4346 4.5608 14.4346 5.56077C15.4346 6.56074 15.9963 7.91699 15.9963 9.33116C15.9963 7.91699 16.5581 6.56074 17.5581 5.56077C18.5581 4.5608 19.9143 3.99902 21.3285 3.99902H27.9936C28.3472 3.99902 28.6862 4.13947 28.9362 4.38946C29.1862 4.63945 29.3267 4.97851 29.3267 5.33206V22.6615C29.3267 23.015 29.1862 23.3541 28.9362 23.6041C28.6862 23.8541 28.3472 23.9945 27.9936 23.9945H19.9954C18.9348 23.9945 17.9176 24.4159 17.1677 25.1658C16.4177 25.9158 15.9963 26.933 15.9963 27.9936C15.9963 26.933 15.575 25.9158 14.825 25.1658C14.0751 24.4159 13.0579 23.9945 11.9972 23.9945H3.99905Z"
                    stroke="white"
                    stroke-width="2.66607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                class="-ml-[8px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white bg-[#263143] text-white shadow-[0_4px_10px_rgba(16,24,40,0.22)]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6606 13.3303C26.6606 19.9861 19.2769 26.9179 16.7974 29.0587C16.5665 29.2324 16.2853 29.3263 15.9963 29.3263C15.7073 29.3263 15.4261 29.2324 15.1951 29.0587C12.7157 26.9179 5.33203 19.9861 5.33203 13.3303C5.33203 10.5019 6.45558 7.78944 8.45552 5.78951C10.4555 3.78957 13.168 2.66602 15.9963 2.66602C18.8246 2.66602 21.5371 3.78957 23.5371 5.78951C25.537 7.78944 26.6606 10.5019 26.6606 13.3303Z"
                    stroke="white"
                    stroke-width="2.66607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.9962 17.3293C18.2048 17.3293 19.9953 15.5388 19.9953 13.3302C19.9953 11.1215 18.2048 9.33105 15.9962 9.33105C13.7875 9.33105 11.9971 11.1215 11.9971 13.3302C11.9971 15.5388 13.7875 17.3293 15.9962 17.3293Z"
                    stroke="white"
                    stroke-width="2.66607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2
              class="mx-auto mt-[32px] max-w-[640px] text-[30px] font-bold leading-[36px] tracking-[-0.45px] text-[#101828] lg:text-[36px] lg:leading-[42px]"
            >
              Need Personalized Guidance?
            </h2>
            <p
              class="mx-auto mt-[16px] max-w-[620px] text-[18px] leading-[29.25px] tracking-[-0.15px] text-[#4A5565] lg:leading-[29.5px]"
            >
              Connect with experienced mentors who can provide one-on-one
              support and help answer your specific questions about faith, life,
              and purpose.
            </p>
            <div class="lg:flex lg:justify-center lg:gap-[14px]">
              <button
                type="button"
                class="mx-auto mt-[40px] flex gap-[9px] h-[56px] w-full max-w-[306px] items-center justify-center rounded-[14px] bg-[#7CB342] px-[18px] text-[14px] font-semibold uppercase text-white shadow-[0_5px_8px_rgba(124,179,66,0.28)] lg:mx-0 lg:h-[47px] lg:w-[300px]"
                @click="goTo('/pastors')"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_389)">
                    <path
                      d="M6.58071 16.6602C8.17055 17.4758 9.9994 17.6967 11.7377 17.2831C13.476 16.8695 15.0094 15.8487 16.0617 14.4046C17.1139 12.9605 17.6158 11.188 17.4768 9.40658C17.3378 7.62517 16.5672 5.95198 15.3037 4.6885C14.0402 3.42503 12.367 2.65437 10.5856 2.5154C8.80422 2.37642 7.03175 2.87828 5.58762 3.93052C4.14349 4.98276 3.12267 6.5162 2.70912 8.2545C2.29556 9.99281 2.51646 11.8217 3.33201 13.4115L1.66602 18.3262L6.58071 16.6602Z"
                      stroke="white"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_389">
                      <rect width="19.992" height="19.992" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Connect With a Mentor</button
              ><button
                type="button"
                class="mx-auto mt-[16px] flex gap-[9px] h-[56px] w-full max-w-[306px] items-center justify-center rounded-[13px] !border-[2px] !border-[#D1D5DC] bg-white px-[18px] text-[14px] font-semibold uppercase text-[#101828] lg:mx-0 lg:mt-[40px] lg:h-[47px] lg:w-[300px]"
                @click="goTo('/topics')"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_393)">
                    <path
                      d="M9.99609 5.83105V17.493"
                      stroke="#101828"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.49901 14.994C2.27809 14.994 2.06621 14.9062 1.91 14.75C1.75378 14.5938 1.66602 14.3819 1.66602 14.161V3.33202C1.66602 3.1111 1.75378 2.89922 1.91 2.743C2.06621 2.58679 2.27809 2.49902 2.49901 2.49902H6.66401C7.54771 2.49902 8.39521 2.85007 9.02008 3.47494C9.64495 4.09981 9.996 4.94732 9.996 5.83102C9.996 4.94732 10.347 4.09981 10.9719 3.47494C11.5968 2.85007 12.4443 2.49902 13.328 2.49902H17.493C17.7139 2.49902 17.9258 2.58679 18.082 2.743C18.2382 2.89922 18.326 3.1111 18.326 3.33202V14.161C18.326 14.3819 18.2382 14.5938 18.082 14.75C17.9258 14.9062 17.7139 14.994 17.493 14.994H12.495C11.8322 14.994 11.1966 15.2573 10.7279 15.7259C10.2593 16.1946 9.996 16.8302 9.996 17.493C9.996 16.8302 9.73272 16.1946 9.26406 15.7259C8.79541 15.2573 8.15978 14.994 7.49701 14.994H2.49901Z"
                      stroke="#101828"
                      stroke-width="1.666"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_393">
                      <rect width="19.992" height="19.992" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Browse All Resources</button
              ><button
                type="button"
                class="mx-auto mt-[16px] flex gap-[9px] h-[56px] w-full max-w-[306px] items-center justify-center rounded-[14px] !border-[2px] !border-[#7CB342] bg-[#7CB3421A] px-[18px] text-[14px] font-semibold uppercase text-[#7CB342] lg:mx-0 lg:mt-[40px] lg:h-[47px] lg:w-[300px]"
                @click="goTo('/locations')"
              >
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
                    d="M9.99607 10.829C11.3762 10.829 12.4951 9.71021 12.4951 8.33005C12.4951 6.94989 11.3762 5.83105 9.99607 5.83105C8.61591 5.83105 7.49707 6.94989 7.49707 8.33005C7.49707 9.71021 8.61591 10.829 9.99607 10.829Z"
                    stroke="#7CB342"
                    stroke-width="1.666"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Find a Church
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <RedesignFooter />
  </main>
</template>
<script setup>
import { computed, ref } from "vue";
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import RedesignTopicCard from "~/homepage-redesign/components/RedesignTopicCard.vue";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
const router = useRouter();
const { locale, t } = useI18n();
const searchInput = ref("");
const selectedTopic = ref("all");
const heroStats = [
  { value: "10M+", label: "Questions Answered" },
  { value: "5K+", label: "Churches Connected" },
  { value: "24/7", label: "Support Available" },
];
const topicStats = [
  { value: "6", title: "Core Topics", text: "Essential categories" },
  { value: "100+", title: "Resources", text: "Articles & videos" },
  { value: "24/7", title: "Access", text: "Always available" },
];
const topicFilters = [
  "All Topics",
  "Purpose",
  "Hope",
  "Religions",
  "Science",
  "Christianity",
  "Sexuality",
  "Suffering",
].map((label) => ({
  label,
  value: label === "All Topics" ? "all" : label.toLowerCase(),
}));
const topicCards = [
  {
    id: "forgiveness",
    badge: "FORGIVENESS",
    title: "Giving and Receiving Grace",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "Study Guide: Do You Have True Life?",
      "Four Steps With God",
    ],
    ctaLabel: "Explore 4 Resources",
    filters: ["all"],
  },
  {
    id: "god",
    badge: "GOD",
    title: "I Don't Know if There is God?",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "Why Doesn't God Just Intervene?",
      "Does God Care About Me?",
    ],
    ctaLabel: "Explore 6 Resources",
    filters: ["all"],
  },
  {
    id: "bible",
    badge: "BIBLE",
    title: "How Do We Get the Old Testament?",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "Why Do We Get the New Testament?",
      "Are Errors in the Bible?",
    ],
    ctaLabel: "Explore 5 Resources",
    filters: ["all"],
    active: true,
  },
  {
    id: "church",
    badge: "CHURCH",
    title: "Why Church?",
    image:
      "https://images.unsplash.com/photo-1528357136257-0c25517acfea?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "What is Church?",
      "Interview: Why Church?",
    ],
    ctaLabel: "Explore 3 Resources",
    filters: ["all"],
  },
  {
    id: "jesus",
    badge: "JESUS",
    title: "Is Jesus God?",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "Four Steps With God",
      "Did Jesus Who Forgive Sin?",
    ],
    ctaLabel: "Explore 7 Resources",
    filters: ["all"],
  },
  {
    id: "christianity",
    badge: "CHRISTIANITY",
    title: "What is a Christian Worldview?",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80",
    resources: [
      "Articles and Videos",
      "How Christianity Started",
      "How Do I Live for Christ?",
    ],
    ctaLabel: "Explore 5 Resources",
    filters: ["all", "christianity"],
  },
];
const socialItems = ["f", "𝕏", "◎", "▶"];
const visibleTopicCards = computed(() =>
  topicCards.filter((card) => card.filters.includes(selectedTopic.value)),
);
function applySearch() {
  const q = (searchInput.value || "").trim();
  if (!q) return;
  const encoded = encodeURIComponent(q);
  router.push({
    path:
      locale.value === "en"
        ? `/search-result/${encoded}`
        : `/${locale.value}/search-result/${encoded}`,
    query: { lang: locale.value },
  });
}
function goTo(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  router.push({
    path: locale.value === "en" ? safePath : `/${locale.value}${safePath}`,
  });
}
</script>
