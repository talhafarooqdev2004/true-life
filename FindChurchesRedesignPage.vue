<template>
  <main class="min-h-screen overflow-x-hidden bg-[#F9FAFB]">
    <RedesignTopNav @go="goTo" />
    <section
      class="relative overflow-hidden bg-[#101828] px-[16px] pt-[35px] pb-[28px] text-white lg:px-0 lg:py-[128px]"
    >
      <div class="absolute inset-0">
        <img
          :src="backgroundImage"
          alt=""
          class="h-full w-full object-cover object-center opacity-[0.78]"
        />
      </div>

      <div
        class="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,33,49,0.98)_0%,rgba(23,33,49,0.9)_42%,rgba(23,33,49,0.78)_100%)]"
      ></div>
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,33,49,0.42)_0%,rgba(23,33,49,0.74)_54%,rgba(23,33,49,0.96)_100%)]"
      ></div>

      <div class="relative z-10 mx-auto max-w-[430px] lg:max-w-[1400px]">
        <nav
          class="mb-[32px] flex items-center gap-[9px] text-[14px] leading-[24px] lg:mb-[28px]"
          aria-label="Breadcrumb"
        >
          <button type="button" class="text-[#B8C0CE]" @click="goTo('/')">
            Home
          </button>
          <span class="text-[#99A1AF]">/</span>
          <span class="font-semibold text-white">Find a Church</span>
        </nav>

        <div
          class="mb-[32px] inline-flex h-[42px] items-center gap-[8px] rounded-full border border-white/20 bg-[#FFFFFF33] px-[22px] text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm lg:mb-[34px] lg:h-[37px] lg:px-[18px] lg:text-[13px]"
        >
          <IconMapPin size="16" class="text-[#7CB342]" />
          <span>Church Locator Service</span>
        </div>

        <h1
          class="mb-[23px] max-w-[370px] text-[44px] font-extrabold leading-[53px] tracking-[-0.035em] text-white lg:mb-[22px] lg:max-w-[760px] lg:text-[72px] lg:leading-[79px]"
        >
          Find a church near you
        </h1>

        <p
          class="mb-[42px] max-w-[390px] text-[20px] font-normal leading-[32.5px] tracking-[-0.015em] text-[#D1D5DC] lg:mb-[36px] lg:max-w-[820px] lg:text-[24px] lg:leading-[39px]"
        >
          Connect with a local church community. We'll help introduce you to a
          pastor so you can experience the blessing of being in a church family.
        </p>

        <div
          class="mb-[12px] flex h-[64px] items-center rounded-[17px] bg-white pl-[23px] pr-[9px] shadow-[0_18px_38px_rgba(0,0,0,0.22)] lg:mb-[15px] lg:h-[56px] lg:w-[580px] lg:rounded-[13px] lg:pl-[18px] lg:pr-[7px]"
        >
          <IconMapPin
            size="20"
            class="mr-[18px] shrink-0 text-[#99A1AF] lg:mr-[20px]"
          />

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Enter city, state, or ZIP code"
            class="min-w-0 flex-1 border-0 bg-transparent text-[18px] font-normal leading-none text-[#101828] outline-none placeholder:text-[#737E91] lg:text-[12px]"
            @keyup="handleSearchKeyup"
          />

          <button
            type="button"
            class="ml-[12px] flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border-0 bg-[#7CB342] text-white shadow-[0_8px_18px_rgba(124,179,66,0.3)] lg:h-[45px] lg:w-[45px] lg:rounded-[10px]"
            aria-label="Search"
            @click="doSearch"
          >
            <IconSearch size="22" class="lg:!h-[16px] lg:!w-[16px]" />
          </button>
        </div>

        <div
          class="mb-[26px] flex flex-wrap items-center gap-[9px] lg:mb-[35px]"
        >
          <span class="mr-[1px] text-[14px] leading-[20px] text-[#99A1AF]">
            Quick search:
          </span>

          <button
            v-for="tag in quickTags"
            :key="tag"
            type="button"
            class="h-[37px] overflow-hidden !rounded-[10px] border border-white/20 bg-white/10 px-[12px] py-[7px] text-[16px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] lg:rounded-[7px] lg:px-[12px] lg:py-[8px] lg:text-[12px]"
            @click="quickSearch(tag)"
          >
            {{ tag }}
          </button>
        </div>

        <div class="grid grid-cols-3 gap-[16px] lg:w-[600px] lg:gap-[48px]">
          <div
            v-for="stat in heroStats"
            :key="stat.label"
            class="border-l-[3px] border-[#7CB342] pl-[15px]"
          >
            <strong
              class="block text-[25px] font-extrabold leading-[30px] tracking-[-0.02em] text-white lg:text-[30px] lg:leading-[36px]"
            >
              {{ stat.value }}
            </strong>
            <span
              class="mt-[3px] lg:mt-[4.8px] block whitespace-nowrap text-[11.81px] leading-[18px] text-[#99A1AF] lg:text-[14px]"
            >
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white px-[32px] pt-[35px] pb-[40px] lg:px-0 lg:py-[80px]"
    >
      <div class="mx-auto max-w-[360px] lg:max-w-[1340px]">
        <div
          class="mb-[24px] lg:mb-[40px] lg:flex lg:items-start lg:justify-between"
        >
          <div>
            <h2
              class="m-0 text-[30px] font-bold leading-[36px] tracking-[-0.035em] text-[#101828] lg:text-[48px] lg:leading-[48px]"
            >
              Churches in Your Area
            </h2>

            <p
              class="m-0 mt-[12px] text-[18px] leading-[28px] text-[#4A5565] lg:text-[18px]"
            >
              Found
              <span class="font-bold text-[#7CB342]">{{
                churchList.length
              }}</span>
              churches<span>{{ searchLabel }}</span>
            </p>
          </div>

          <div class="mt-[26px] flex items-center gap-[13px] lg:mt-[10px]">
            <div
              class="flex h-[48px] rounded-[14px] bg-[#F3F4F6] p-[4px] lg:h-[40px] lg:rounded-[10px] lg:p-[3px]"
            >
              <button
                type="button"
                :class="[
                  'h-[42px] rounded-[10px] px-[24px] text-[16px] font-bold transition lg:h-[34px] lg:rounded-[7px] lg:px-[18px] lg:text-[12px]',
                  viewMode === 'list'
                    ? 'bg-white text-[#101828] shadow-[0_8px_16px_rgba(16,24,40,0.16)]'
                    : 'text-[#4A5565]',
                ]"
                @click="viewMode = 'list'"
              >
                <span class="lg:hidden">List</span>
                <span class="hidden lg:inline">List View</span>
              </button>

              <button
                type="button"
                :class="[
                  'h-[42px] rounded-[10px] px-[24px] text-[16px] font-bold transition lg:h-[34px] lg:rounded-[7px] lg:px-[18px] lg:text-[12px]',
                  viewMode === 'grid'
                    ? 'bg-white text-[#101828] shadow-[0_8px_16px_rgba(16,24,40,0.16)]'
                    : 'text-[#4A5565]',
                ]"
                @click="viewMode = 'grid'"
              >
                <span class="lg:hidden">Grid</span>
                <span class="hidden lg:inline">Grid View</span>
              </button>
            </div>

            <button
              type="button"
              class="flex h-[48px] w-[64px] items-center justify-center rounded-[14px] !border !border-[#D1D5DC] bg-white text-[#101828] lg:h-[40px] lg:w-[90px] lg:gap-[8px] lg:rounded-[12px] lg:text-[13px] lg:font-semibold"
              aria-label="Filter"
              @click="$emit('filter')"
            >
              <IconFilter size="18" stroke-width="1.8" />
              <span class="hidden lg:inline">Filter</span>
            </button>
          </div>
        </div>

        <div
          class="lg:grid lg:grid-cols-[425px_1fr] lg:items-start lg:gap-[36px]"
        >
          <div
            v-if="isLoading"
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[32px] text-[16px] text-[#4A5565]"
          >
            Loading churches...
          </div>

          <div
            v-else-if="churchList.length === 0"
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[32px] text-[16px] text-[#4A5565]"
          >
            No churches found. Try a different search.
          </div>

          <div
            v-else
            :class="[
              viewMode === 'grid'
                ? 'grid grid-cols-1 gap-[18px]'
                : 'flex flex-col gap-[18px]',
            ]"
          >
            <article
              v-for="church in churchList"
              :key="church.id"
              :class="[
                'rounded-[14px] border bg-white p-[25px] transition lg:p-[20px]',
                activeChurchId === church.id
                  ? 'border-[#7CB342] shadow-[0_10px_24px_rgba(124,179,66,0.16)]'
                  : 'border-[#E1E5EA] shadow-[0_2px_6px_rgba(16,24,40,0.03)]',
              ]"
              @click="$emit('focusChurch', church)"
            >
              <div class="flex gap-[18px] lg:gap-[15px]">
                <div
                  class="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[13px] bg-[#F3F4F6] text-[#536073] lg:h-[41px] lg:w-[41px] lg:rounded-[10px]"
                >
                  <IconMapPin
                    size="24"
                    stroke-width="1.9"
                    class="lg:!h-[22px] lg:!w-[22px]"
                  />
                </div>

                <div class="min-w-0 flex-1">
                  <h3
                    class="m-0 text-[18px] font-bold leading-[28px] tracking-[-0.02em] text-[#101828] lg:leading-[28px]"
                  >
                    {{ church.name }}
                  </h3>

                  <p
                    class="m-0 mt-[8px] text-[14px] leading-[22px] text-[#4A5565] lg:leading-[20px]"
                  >
                    {{ church.address }},<br class="lg:hidden" />
                    {{ church.city }}, {{ church.state }} {{ church.zipcode }}
                  </p>
                </div>
              </div>

              <div
                class="mt-[16px] flex flex-wrap items-center gap-x-[16px] gap-y-[8px] text-[14px] leading-[20px] lg:text-[12px]"
              >
                <span
                  v-if="church.phone"
                  class="inline-flex items-center gap-[6px] text-[#536073]"
                >
                  <IconPhone size="16" class="text-[#99A1AF]" />
                  {{ church.phone }}
                </span>

                <span
                  v-if="church.distance"
                  class="inline-flex items-center gap-[8px] font-semibold text-[#7CB342]"
                >
                  <IconSend size="16" class="text-[#99A1AF]" />
                  {{ Number(church.distance).toFixed(1) }} miles
                </span>
              </div>

              <div
                class="my-[20px] h-px w-full bg-[#EEF0F3] lg:my-[18px]"
              ></div>

              <div class="flex items-center gap-[12px]">
                <button
                  type="button"
                  class="flex h-[44px] flex-1 items-center justify-center gap-[8px] rounded-[10px] border-0 bg-[#7CB342] text-[18px] font-bold text-white lg:h-[38px] lg:text-[13px]"
                  @click.stop="$emit('details', church)"
                >
                  View Details
                  <IconChevronRight size="16" />
                </button>

                <button
                  type="button"
                  class="flex h-[44px] w-[48px] shrink-0 items-center justify-center rounded-[10px] border-0 bg-[#F3F4F6] text-[#101828] lg:h-[38px] lg:w-[42px]"
                  aria-label="Share"
                  @click.stop="$emit('share', church)"
                >
                  <IconSend size="16" stroke-width="1.8" />
                </button>
              </div>
            </article>
          </div>

          <ChurchMap class="mt-[24px] lg:sticky lg:top-[24px] lg:mt-0" />
        </div>
      </div>
    </section>

    <section class="bg-[#F9FAFB] px-[32px] py-[25px] lg:px-0 lg:py-[80px]">
      <div class="mx-auto max-w-[360px] lg:max-w-[1340px]">
        <div
          class="space-y-[25px] lg:grid lg:grid-cols-2 lg:gap-[28px] lg:space-y-0"
        >
          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[40px] flex gap-[20px] lg:min-h-[214px] lg:items-start lg:gap-[18px] lg:p-[34px]"
          >
            <div
              class="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#7CB342] text-white lg:h-[48px] lg:w-[48px]"
            >
              <IconMessageSquare size="28" />
            </div>

            <div>
              <h3
                class="m-0 text-[24px] font-bold leading-[32px] tracking-[-0.03em] text-[#101828] lg:text-[22px] lg:leading-[28px]"
              >
                Submit a Question
              </h3>

              <p
                class="m-0 mt-[13px] text-[16px] leading-[26px] text-[#4A5565] lg:max-w-[330px] lg:text-[14px] lg:leading-[22px]"
              >
                If you don't see your question listed, feel free to submit it to
                our experts or live chat with a real person.
              </p>

              <button
                type="button"
                class="mt-[24px] flex h-[48px] w-[187px] items-center justify-center gap-[16px] rounded-[10px] border-0 bg-[#7CB342] text-[16px] font-bold leading-[24px] text-white lg:h-[41px]lg:text-[13px]"
                @click="goTo('/pages/contact-truelife-org')"
              >
                <span>Ask a Question</span>
                <IconSend size="16" />
              </button>
            </div>
          </div>

          <div
            class="rounded-[16px] border border-[#E5E7EB] bg-white p-[40px] flex gap-[20px] lg:min-h-[214px] lg:items-start lg:gap-[18px] lg:p-[34px]"
          >
            <div
              class="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[14px] bg-[#101828] text-white lg:h-[48px] lg:w-[48px]"
            >
              <IconMessageSquare size="28" />
            </div>

            <div>
              <h3
                class="text-[24px] font-bold leading-[32px] tracking-[-0.03em] text-[#101828] lg:text-[22px] lg:leading-[28px]"
              >
                Live Chat with Us
              </h3>

              <p
                class="mt-[12px] text-[16px] leading-[26px] text-[#4A5565] lg:max-w-[360px] lg:text-[14px] lg:leading-[22px]"
              >
                Questions about life and God?
                <strong class="font-semibold text-[#101828]"
                  >Click here.</strong
                >
                For Pastors &amp; Customer Support,
                <strong class="font-semibold text-[#101828]"
                  >click here.</strong
                >
              </p>

              <button
                type="button"
                class="mt-[24px] flex h-[48px] w-[187px] items-center justify-center gap-[16px] rounded-[10px] border-0 bg-[#101828] text-[16px] font-semibold leading-[24px] text-white lg:h-[41px] lg:text-[13px]"
                @click="goTo('/pages/contact-truelife-org')"
              >
                <span>Start Chatting</span>
                <IconChevronRight size="16" />
              </button>
            </div>
          </div>
        </div>

        <section
          class="mt-[25px] rounded-[16px] border border-[#E5E7EB] bg-white px-[20px] py-[25px] text-center lg:mt-[82px] lg:px-[110px] lg:py-[48px]"
        >
          <span
            class="mx-auto inline-flex h-[48px] items-center gap-[10px] rounded-full border border-[#7CB34233] bg-[#7CB3421A] px-[24px] text-[16px] font-semibold text-[#7CB342] lg:h-[37px] lg:px-[18px] lg:text-[12px]"
          >
            <IconBookOpen size="19" />
            Trusted Churches
          </span>

          <h2
            class="m-0 mt-[27px] text-[34px] font-bold leading-[41px] tracking-[-0.045em] text-[#101828] lg:mt-[22px] lg:text-[36px] lg:leading-[40px]"
          >
            Churches Near You
          </h2>

          <p
            class="m-0 mx-auto mt-[19px] w-[90%] text-[20px] leading-[34px] tracking-[-0.02em] text-[#4A5565] lg:max-w-[640px] lg:text-[18px] lg:leading-[29.5px]"
          >
            Each church on our system has partnered with TrueLife.org and
            affirms our belief statement. We believe you will love joining their
            family.
          </p>

          <div
            class="mt-[46px] space-y-[28px] lg:grid lg:grid-cols-3 lg:gap-[20px] lg:space-y-0"
          >
            <div
              v-for="stat in trustedStats"
              :key="stat.label"
              class="rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] p-[29px] lg:p-[24px]"
            >
              <div
                class="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#7CB342] text-white lg:h-[41px] lg:w-[41px] lg:rounded-[10px]"
              >
                <component
                  :is="stat.icon"
                  size="28"
                  class="lg:!h-[22px] lg:!w-[22px]"
                />
              </div>
              <strong
                class="mt-[19px] block text-[34px] font-bold leading-[41px] tracking-[-0.035em] text-[#101828] lg:text-[30px] lg:leading-[36px]"
              >
                {{ stat.value }}
              </strong>
              <span
                class="mt-[9px] block text-[16px] leading-[23px] text-[#4A5565] lg:text-[12px] lg:leading-[18px]"
              >
                {{ stat.label }}
              </span>
            </div>
          </div>

          <div
            class="mt-[84px] space-y-[28px] border-t border-[#E5E7EB] pt-[32px] text-left lg:grid lg:grid-cols-2 lg:gap-[56px] lg:space-y-0 lg:pt-[30px]"
          >
            <div
              class="grid grid-cols-[132px_1fr] items-center gap-[18px] lg:grid-cols-[84px_1fr]"
            >
              <strong
                class="text-[55px] font-bold leading-[55px] tracking-[-0.06em] text-[#7CB342] lg:text-[42px] lg:leading-[48px]"
              >
                70%
              </strong>
              <span
                class="text-[16px] leading-[22px] text-[#4A5565] lg:text-[14px] lg:leading-[19.5px]"
              >
                of church members are excited to see it be used in their church
              </span>
            </div>

            <div
              class="grid grid-cols-[132px_1fr] items-center gap-[18px] lg:grid-cols-[84px_1fr]"
            >
              <strong
                class="text-[55px] font-bold leading-[55px] tracking-[-0.06em] text-[#7CB342] lg:text-[42px] lg:leading-[48px]"
              >
                85%
              </strong>
              <span
                class="text-[16px] leading-[22px] text-[#4A5565] lg:text-[14px] lg:leading-[19.5px]"
              >
                believe every church ought to use this strategy
              </span>
            </div>
          </div>
        </section>

        <section
          class="mt-[25px] space-y-[25px] lg:mt-[80px] lg:grid lg:grid-cols-2 lg:gap-[28px] lg:space-y-0"
        >
          <div
            class="rounded-[16px] bg-[#101828] p-[40px] text-white lg:min-h-[255px] lg:p-[34px]"
          >
            <div
              class="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-white/10 text-white lg:h-[41px] lg:w-[41px] lg:rounded-[10px]"
            >
              <IconMail size="24" />
            </div>

            <h3
              class="m-0 mt-[24px] text-[24px] font-bold leading-[32px] lg:text-[22px] lg:leading-[28px]"
            >
              Need Help?
            </h3>

            <p
              class="m-0 mt-[13px] text-[16px] leading-[26px] text-[#D1D5DC] lg:max-w-[420px] lg:text-[14px] lg:leading-[22px]"
            >
              Our team is here to support you in finding the perfect church home
              for you and your family.
            </p>

            <button
              type="button"
              class="mt-[25px] flex items-center gap-[9px] border-0 bg-transparent p-0 text-[16px] font-semibold text-[#7CB342] lg:text-[13px]"
              @click="goTo('/pages/contact-truelife-org')"
            >
              support@truelife.org
              <IconChevronRight size="16" />
            </button>
          </div>

          <div
            class="rounded-[16px] bg-[#7CB342] p-[40px] text-white lg:min-h-[255px] lg:p-[34px]"
          >
            <div
              class="flex h-[48px] w-[48px] items-center justify-center rounded-[14px] bg-white/20 text-white lg:h-[41px] lg:w-[41px] lg:rounded-[10px]"
            >
              <IconPhone size="24" />
            </div>

            <h3
              class="m-0 mt-[35px] text-[24px] font-bold leading-[32px] lg:mt-[24px] lg:text-[22px] lg:leading-[28px]"
            >
              Call Us
            </h3>

            <p
              class="m-0 mt-[13px] text-[16px] leading-[26px] text-white/90 lg:max-w-[420px] lg:text-[14px] lg:leading-[22px]"
            >
              Speak with a real person who can help answer your questions and
              guide you to a local church.
            </p>

            <button
              type="button"
              class="mt-[23px] flex items-center gap-[10px] border-0 bg-transparent p-0 text-[16px] text-white lg:text-[13px]"
            >
              <span class="font-semibold">1-800-TRUELIFE</span>
              <IconChevronRight size="16" />
            </button>
          </div>
        </section>
      </div>
    </section>
    <RedesignFooter />
  </main>
</template>

<script setup>
import { computed, h, nextTick, onMounted, ref } from "vue";
import { isEmpty, forEach } from "lodash";
import { useStore } from "vuex";
import { useRouter } from "#imports";
import { useI18n } from "vue-i18n";
import { loadedGoogleMapsAPI } from "@/helpers/googleMaps.js";
import churchIconSrc from "@/assets/images/clusters/church_icon.png";
import RedesignFooter from "~/homepage-redesign/components/RedesignFooter.vue";
import RedesignTopNav from "~/homepage-redesign/components/RedesignTopNav.vue";
import IconMapPin from "~/components/icons/IconMapPin.vue";
import IconSearch from "~/components/icons/IconSearch.vue";
import IconPhone from "~/components/icons/IconPhone.vue";
import IconMessageSquare from "~/components/icons/IconMessageSquare.vue";
import IconUsers from "~/components/icons/IconUsers.vue";
import IconGlobe from "~/components/icons/IconGlobe.vue";
import IconMail from "~/components/icons/IconMail.vue";
import IconFilter from "~/components/icons/IconFilter.vue";
import IconSend from "~/components/icons/IconSend.vue";
import IconChevronRight from "~/components/icons/IconChevronRight.vue";
import IconBookOpen from "~/components/icons/IconBookOpen.vue";
import IconHeart from "~/components/icons/IconHeart.vue";
import logoIndex from "@/assets/images/logo-index-155.png";

const store = useStore();
const router = useRouter();
const { locale } = useI18n();

const searchQuery = ref("");
const churchList = ref([]);
const isLoading = ref(false);
const viewMode = ref("list");
const activeChurchId = ref(null);
const mapFallback = ref(false);
const mapEl = ref(null);
const mapLat = ref(37.358);
const mapLng = ref(-79.176);

let gmap = null;
let mapInfoWindow = null;
let churchMarkers = {};
let markerCluster = null;

const searchLabel = computed(() => {
  const q = searchQuery.value.trim();
  return q ? ` near ${q}` : "";
});

const fallbackSrc = computed(
  () =>
    `https://maps.google.com/maps?q=${mapLat.value},${mapLng.value}&z=10&output=embed`,
);

onMounted(async () => {
  isLoading.value = true;
  try {
    if (isEmpty(store.state.locations)) {
      await store.dispatch("fetchLocations");
    }
    churchList.value = Object.freeze(store.state.locations || []);
  } catch (e) {
    console.error("Failed to load locations", e);
  }

  const mapsReady = await Promise.race([
    loadedGoogleMapsAPI.then(() => true).catch(() => false),
    new Promise((r) => setTimeout(() => r(false), 5000)),
  ]);

  if (!mapsReady || typeof google === "undefined") {
    mapFallback.value = true;
    isLoading.value = false;
    return;
  }

  await nextTick();
  initMap();
  loadMarkers();
  isLoading.value = false;
});

function initMap(zoom = 10, lat = 37.358, lng = -79.176) {
  mapLat.value = lat;
  mapLng.value = lng;

  if (!mapEl.value || typeof google === "undefined") {
    mapFallback.value = true;
    return;
  }

  mapFallback.value = false;
  const center = new google.maps.LatLng(lat, lng);
  gmap = new google.maps.Map(mapEl.value, {
    zoom,
    center,
    disableDefaultUI: true,
    mapTypeControl: true,
    zoomControl: true,
    scaleControl: true,
  });
  mapInfoWindow = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0, -35),
  });
}

function loadMarkers() {
  if (
    typeof google === "undefined" ||
    typeof MarkerClusterer === "undefined" ||
    !gmap
  ) {
    mapFallback.value = true;
    return;
  }

  Object.values(churchMarkers).forEach((m) => m.setMap(null));
  churchMarkers = {};
  if (markerCluster) {
    markerCluster.clearMarkers();
    markerCluster = null;
  }

  const clusterArr = [];
  forEach(churchList.value, (church) => {
    const pos = new google.maps.LatLng(church.latitude, church.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      icon: churchIconSrc,
      map: gmap,
    });
    google.maps.event.addListener(marker, "click", () => focusChurch(church));
    churchMarkers[church.id] = marker;
    clusterArr.push(marker);
  });

  markerCluster = new MarkerClusterer(gmap, clusterArr, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

function focusChurch(church) {
  activeChurchId.value = church.id;

  if (typeof google === "undefined" || !gmap) {
    mapLat.value = church.latitude;
    mapLng.value = church.longitude;
    mapFallback.value = true;
    return;
  }

  const pos = new google.maps.LatLng(church.latitude, church.longitude);
  gmap.panTo(pos);
  gmap.setZoom(12);

  const html = `
    <div style="font-family:Inter, Arial, sans-serif;max-width:240px;">
      <h3 style="margin:0 0 4px;font-size:14px;">${church.name}</h3>
      <p style="margin:0 0 4px;font-size:12px;color:#555;">${church.pastor?.firstname || ""} ${church.pastor?.lastname || ""}</p>
      <p style="margin:0;font-size:12px;color:#777;">${church.address}, ${church.city}, ${church.state}</p>
    </div>`;
  mapInfoWindow.setContent(html);
  mapInfoWindow.setPosition(pos);
  mapInfoWindow.open(gmap);
}

async function doSearch() {
  const q = searchQuery.value.trim();
  isLoading.value = true;
  try {
    await store.dispatch("fetchLocations", q ? `?query=${q}` : "");
    churchList.value = Object.freeze(store.state.locations || []);
  } catch (e) {
    console.error(e);
  }

  if (!isEmpty(churchList.value) && typeof google !== "undefined") {
    await nextTick();
    initMap(11, churchList.value[0].latitude, churchList.value[0].longitude);
    loadMarkers();
  } else if (!isEmpty(churchList.value)) {
    mapLat.value = churchList.value[0].latitude;
    mapLng.value = churchList.value[0].longitude;
  }

  isLoading.value = false;
}

function handleSearchKeyup(event) {
  if (event.key === "Enter") {
    doSearch();
  }
}

function quickSearch(val) {
  searchQuery.value = val;
  doSearch();
}

function goTo(path) {
  const safe = path && String(path).startsWith("/") ? String(path) : "/";
  const loc = locale.value === "en" ? safe : `/${locale.value}${safe}`;
  router.push({ path: loc });
}

function openExternal(url) {
  window.open(url, "_blank", "noopener");
}

const backgroundImage =
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1800&q=80";

const quickTags = ["Virginia", "Lynchburg, VA", "24502"];

const heroStats = [
  { value: "2.4K+", label: "Partner Churches" },
  { value: "50+", label: "States & Countries" },
  { value: "100K+", label: "Lives Connected" },
];

const trustedStats = [
  { value: "2,400+", label: "Partner Churches", icon: IconUsers },
  { value: "50+", label: "States & Countries", icon: IconGlobe },
  { value: "100K+", label: "Lives Connected", icon: IconHeart },
];

const ChurchMap = {
  name: "ChurchMap",
  render() {
    const pins = [
      "left-[32%] top-[53%]",
      "left-[50%] top-[25%]",
      "left-[62%] top-[39%]",
      "left-[70%] top-[26%]",
      "left-[65%] top-[58%]",
    ];

    return h(
      "div",
      {
        class:
          "relative h-[224px] overflow-hidden rounded-[16px] bg-[#ece8dd] shadow-[0_10px_25px_rgba(16,24,40,0.14)] lg:h-[450px]",
      },
      [
        h("img", {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png",
          alt: "Map",
          class: "h-full w-full object-cover opacity-[0.56]",
        }),
        h("div", { class: "absolute inset-0 bg-white/15" }),
        ...pins.map((pos, index) =>
          h(
            "div",
            {
              class: `absolute ${pos} flex h-[36px] w-[36px] items-center justify-center rounded-full border-[4px] border-white bg-[#7CB342] text-white shadow-[0_4px_12px_rgba(16,24,40,0.25)] lg:h-[34px] lg:w-[34px]`,
            },
            [
              h(IconMapPin, {
                size: index === 2 ? 24 : 22,
                fill: "white",
                strokeWidth: 1.8,
              }),
            ],
          ),
        ),
        h(
          "div",
          {
            class:
              "absolute right-[18px] top-[18px] flex flex-col overflow-hidden rounded-[10px] shadow-[0_4px_10px_rgba(16,24,40,0.22)]",
          },
          [
            h(
              "button",
              {
                type: "button",
                class:
                  "flex h-[42px] w-[42px] items-center justify-center border-0 bg-white text-[22px] font-bold text-[#344054]",
              },
              "+",
            ),
            h("div", { class: "h-px bg-[#E5E7EB]" }),
            h(
              "button",
              {
                type: "button",
                class:
                  "flex h-[42px] w-[42px] items-center justify-center border-0 bg-white text-[26px] font-bold text-[#344054]",
              },
              "-",
            ),
          ],
        ),
        h(
          "div",
          {
            class:
              "absolute bottom-[18px] left-[18px] flex h-[45px] items-center gap-[10px] rounded-[8px] bg-white px-[13px] text-[13px] font-medium text-[#344054] shadow-[0_5px_14px_rgba(16,24,40,0.22)]",
          },
          [
            h(
              "span",
              {
                class:
                  "flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#7CB342] text-white",
              },
              [h(IconMapPin, { size: 16, fill: "white", strokeWidth: 1.8 })],
            ),
            "Church Location",
          ],
        ),
      ],
    );
  },
};
</script>
