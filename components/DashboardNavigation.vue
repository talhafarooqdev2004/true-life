<template>
    <header
      class="sticky top-0 z-40 flex h-[64px] items-center justify-between border-b border-[#E5E7EB] bg-white px-4 lg:hidden"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex h-[32px] w-[32px] items-center justify-center rounded-[9px] bg-[#7CB342] text-[13px] font-bold text-white"
        >
          TL
        </div>
        <span class="text-[17px] font-bold text-[#101828]">TrueLife</span>
      </div>

      <button
        type="button"
        class="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#101828] text-white"
        aria-label="Open dashboard navigation"
        @click="openNav()"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7H20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12H20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 17H20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </header>

    <div
      v-if="open"
      class="fixed inset-0 z-[45] bg-black/45 lg:hidden"
      @click="close()"
    ></div>

    <aside
      :class="[
        'fixed left-0 top-0 z-50 flex h-screen w-[280px] max-w-[82vw] flex-col overflow-y-auto bg-[#172231] text-white transition-transform duration-200 lg:z-40 lg:w-[250px]',
        open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="flex h-[64px] items-center justify-between gap-3 px-[18px]">
        <div class="flex items-center gap-3">
          <div
            class="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] bg-[#7CB342] text-[12px] font-bold"
          >
            TL
          </div>
          <span class="text-[16px] font-bold">TrueLife</span>
        </div>

        <button
          type="button"
          class="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-white/10 text-[22px] leading-none text-white lg:hidden"
          aria-label="Close dashboard navigation"
          @click="close()"
        >
          ×
        </button>
      </div>

      <div
        class="flex items-center gap-3 border-t border-white/5 px-[18px] py-[22px]"
      >
        <div
          class="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#7CB342]"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <div>
          <p class="text-[13px] font-bold leading-[18px]">John Doe</p>
          <p class="text-[12px] leading-[16px] text-[#9CA3AF]">
            john.doe@email.com
          </p>
        </div>
      </div>

      <nav class="space-y-[6px] px-[10px]">
        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] bg-[#7CB342] px-3 text-[13px] font-medium shadow-[0_6px_14px_rgba(124,179,66,0.35)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z"
              stroke="white"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
          </svg>
          Dashboard
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 19.5V5C4 3.89543 4.89543 3 6 3H20V21H6C4.89543 21 4 20.1046 4 19Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path
              d="M8 7H16"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          My Content
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M20.8 4.6C18.9 2.7 15.8 2.7 13.9 4.6L12 6.5L10.1 4.6C8.2 2.7 5.1 2.7 3.2 4.6C1.3 6.5 1.3 9.6 3.2 11.5L12 20.3L20.8 11.5C22.7 9.6 22.7 6.5 20.8 4.6Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
          </svg>
          Saved Articles
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 10L20 7V17L15 14V10Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <rect
              x="3"
              y="6"
              width="12"
              height="12"
              rx="2"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
          </svg>
          Video Library
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M17 21V19C17 17.3431 15.6569 16 14 16H6C4.34315 16 3 17.3431 3 19V21"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path
              d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path
              d="M21 21V19C20.999 17.6193 20.059 16.4146 18.72 16.08"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M16 4.13C17.3057 4.47284 18.2144 5.65301 18.2144 7.005C18.2144 8.35699 17.3057 9.53716 16 9.88"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          Church Finder
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect
              x="4"
              y="5"
              width="16"
              height="15"
              rx="2"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path
              d="M8 3V7"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M16 3V7"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path d="M4 10H20" stroke="#D1D5DB" stroke-width="1.8" />
          </svg>
          Events
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 3H6C4.9 3 4 3.9 4 5V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V9L14 3Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path d="M14 3V9H20" stroke="#D1D5DB" stroke-width="1.8" />
            <path
              d="M8 13H16"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
            <path
              d="M8 17H13"
              stroke="#D1D5DB"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          Resources
        </button>

        <button
          class="flex h-[38px] w-full items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium text-[#D1D5DB]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
              stroke="#D1D5DB"
              stroke-width="1.8"
            />
            <path
              d="M19.4 15C19.2 15.5 19.3 16.1 19.7 16.5L19.8 16.6C20.3 17.1 20.3 17.9 19.8 18.4L18.4 19.8C17.9 20.3 17.1 20.3 16.6 19.8L16.5 19.7C16.1 19.3 15.5 19.2 15 19.4C14.5 19.6 14.2 20.1 14.2 20.6V20.8C14.2 21.5 13.7 22 13 22H11C10.3 22 9.8 21.5 9.8 20.8V20.6C9.8 20.1 9.5 19.6 9 19.4C8.5 19.2 7.9 19.3 7.5 19.7L7.4 19.8C6.9 20.3 6.1 20.3 5.6 19.8L4.2 18.4C3.7 17.9 3.7 17.1 4.2 16.6L4.3 16.5C4.7 16.1 4.8 15.5 4.6 15C4.4 14.5 3.9 14.2 3.4 14.2H3.2C2.5 14.2 2 13.7 2 13V11C2 10.3 2.5 9.8 3.2 9.8H3.4C3.9 9.8 4.4 9.5 4.6 9C4.8 8.5 4.7 7.9 4.3 7.5L4.2 7.4C3.7 6.9 3.7 6.1 4.2 5.6L5.6 4.2C6.1 3.7 6.9 3.7 7.4 4.2L7.5 4.3C7.9 4.7 8.5 4.8 9 4.6C9.5 4.4 9.8 3.9 9.8 3.4V3.2C9.8 2.5 10.3 2 11 2H13C13.7 2 14.2 2.5 14.2 3.2V3.4C14.2 3.9 14.5 4.4 15 4.6C15.5 4.8 16.1 4.7 16.5 4.3L16.6 4.2C17.1 3.7 17.9 3.7 18.4 4.2L19.8 5.6C20.3 6.1 20.3 6.9 19.8 7.4L19.7 7.5C19.3 7.9 19.2 8.5 19.4 9C19.6 9.5 20.1 9.8 20.6 9.8H20.8C21.5 9.8 22 10.3 22 11V13C22 13.7 21.5 14.2 20.8 14.2H20.6C20.1 14.2 19.6 14.5 19.4 15Z"
              stroke="#D1D5DB"
              stroke-width="1.5"
            />
          </svg>
          Settings
        </button>
      </nav>

      <div
        class="mx-[18px] mt-[24px] rounded-[10px] border border-[#7CB34233] bg-[#7CB3421F] p-[14px]"
      >
        <div class="flex items-start gap-3">
          <div
            class="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] bg-[#7CB342]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.8 4.6C18.9 2.7 15.8 2.7 13.9 4.6L12 6.5L10.1 4.6C8.2 2.7 5.1 2.7 3.2 4.6C1.3 6.5 1.3 9.6 3.2 11.5L12 20.3L20.8 11.5C22.7 9.6 22.7 6.5 20.8 4.6Z"
                stroke="white"
                stroke-width="1.8"
              />
            </svg>
          </div>
          <div>
            <p class="text-[13px] font-bold leading-[18px]">Premium Member</p>
            <p class="text-[11px] leading-[16px] text-[#CBD5E1]">
              Monthly Subscription
            </p>
          </div>
        </div>

        <button
          class="mt-3 h-[32px] w-full rounded-[6px] bg-[#7CB342] text-[12px] font-semibold text-white"
        >
          Manage Subscription
        </button>
      </div>

      <div class="mt-auto p-[14px]">
        <button
          class="flex h-[38px] w-full items-center justify-between rounded-[8px] bg-[#263243] px-3 text-[13px]"
        >
          <span class="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#D1D5DB"
                stroke-width="1.8"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#D1D5DB"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
            Notifications
          </span>
          <span
            class="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#7CB342] text-[11px] font-bold"
            >3</span
          >
        </button>
      </div>
    </aside>
</template>

<script setup>
defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:open"]);

function openNav() {
  emit("update:open", true);
}

function close() {
  emit("update:open", false);
}
</script>
