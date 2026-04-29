<template>
  <div
    class="bg-[linear-gradient(90deg,_#7CB342_0%,_#2B7FFF_50%,_#7CB342_100%)] w-[100%] h-[6px]"
  ></div>
  <footer class="redesign-footer">
    <div class="footer-inner">
      <div class="footer-col brand-col">
        <button type="button" class="flex items-center" @click="goTo('/')">
          <img class="block h-auto w-[143px]" :src="logoIndex" alt="Truelife" />
        </button>
        <p>{{ t("redesign.footer.tagline") }}</p>
        <div class="social-row">
          <a
            href="https://www.facebook.com/truelifeorg"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14.994 1.66602H12.495C11.3904 1.66602 10.331 2.10483 9.54995 2.88591C8.76886 3.667 8.33005 4.72638 8.33005 5.83101V8.33H5.83105V11.662H8.33005V18.326H11.662V11.662H14.161L14.994 8.33H11.662V5.83101C11.662 5.61008 11.7498 5.39821 11.906 5.24199C12.0622 5.08577 12.2741 4.99801 12.495 4.99801H14.994V1.66602Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/truelifeorg"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="X / Twitter"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.326 3.33221C18.326 3.33221 17.7429 5.08151 16.66 6.16441C17.9928 14.4944 8.8298 20.5753 1.66602 15.8272C3.49861 15.9105 5.33121 15.3274 6.66401 14.1612C2.49901 12.9117 0.416518 7.997 2.49901 4.16521C4.33161 6.33101 7.16381 7.5805 9.996 7.4972C9.2463 3.99861 13.328 1.99941 15.827 4.33181C16.7433 4.33181 18.326 3.33221 18.326 3.33221Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/truelifeorg"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14.161 1.66602H5.83101C3.53075 1.66602 1.66602 3.53075 1.66602 5.83101V14.161C1.66602 16.4613 3.53075 18.326 5.83101 18.326H14.161C16.4613 18.326 18.326 16.4613 18.326 14.161V5.83101C18.326 3.53075 16.4613 1.66602 14.161 1.66602Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3281 9.47118C13.4309 10.1644 13.3125 10.8725 12.9897 11.4945C12.667 12.1166 12.1562 12.6211 11.5302 12.9362C10.9042 13.2513 10.1948 13.3609 9.50284 13.2496C8.8109 13.1383 8.17169 12.8116 7.67612 12.316C7.18055 11.8204 6.85386 11.1812 6.74252 10.4893C6.63117 9.79734 6.74085 9.08791 7.05594 8.4619C7.37103 7.83588 7.87549 7.32516 8.49758 7.00237C9.11966 6.67959 9.82768 6.56117 10.5209 6.66397C11.2281 6.76884 11.8828 7.09835 12.3883 7.60385C12.8938 8.10935 13.2233 8.76403 13.3281 9.47118Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5776 5.41455H14.586"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/truelifeorg"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="YouTube"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2.08243 14.1612C1.50052 11.415 1.50052 8.57735 2.08243 5.83118C2.15889 5.5523 2.30662 5.29812 2.5111 5.09364C2.71557 4.88917 2.96975 4.74144 3.24863 4.66498C7.71637 3.92483 12.2755 3.92483 16.7432 4.66498C17.0221 4.74144 17.2763 4.88917 17.4807 5.09364C17.6852 5.29812 17.8329 5.5523 17.9094 5.83118C18.4913 8.57735 18.4913 11.415 17.9094 14.1612C17.8329 14.44 17.6852 14.6942 17.4807 14.8987C17.2763 15.1032 17.0221 15.2509 16.7432 15.3274C12.2755 16.0677 7.71636 16.0677 3.24863 15.3274C2.96975 15.2509 2.71557 15.1032 2.5111 14.8987C2.30662 14.6942 2.15889 14.44 2.08243 14.1612Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.33008 12.4951L12.4951 9.99607L8.33008 7.49707V12.4951Z"
                stroke="white"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>
          <svg
            class="footer-h4-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7cb342"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {{ t("redesign.footer.churchesNear") }}
        </h4>
        <p>{{ t("redesign.footer.churchesNearDesc") }}</p>
        <div
          class="mt-4 rounded-[20px] border border-white/10 bg-[#1C2536] p-[18px]"
        >
          <input
            v-model="searchInput"
            type="text"
            placeholder="Enter your location"
            class="w-full bg-transparent text-[16px] text-white outline-none placeholder:text-white/40"
            @keyup="handleLocationKeyup"
          />

          <button
            type="button"
            class="mt-[18px] h-[44px] w-full rounded-[14px] border !border-white/20 !bg-[#FFFFFF33] text-[16px] font-semibold text-white"
            @click="goTo('/locations')"
          >
            Search
          </button>
        </div>
      </div>

      <div class="footer-col">
        <h4>{{ t("redesign.footer.resourcesHeading") }}</h4>
        <p>{{ t("redesign.footer.resourcesDesc") }}</p>
        <ul>
          <li>
            <button type="button" @click="goTo('/pastors')">
              <FooterChevron />
              {{ t("redesign.footer.getStarted") }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="
                openExternal('https://www.sharethetruthnow.com/#FreeTools')
              "
            >
              <FooterChevron />
              {{ t("redesign.footer.lifeCards") }}
            </button>
          </li>
          <li>
            <button type="button" @click="goTo('/pastors')">
              <FooterChevron />
              {{ t("redesign.footer.reachOut") }}
            </button>
          </li>
          <li>
            <button
              type="button"
              class="footer-link-green"
              @click="goTo('/pastors')"
            >
              <FooterChevron />
              {{ t("redesign.footer.viewAllResources") }}
            </button>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>{{ t("redesign.footer.contactUs") }}</h4>

        <div class="contact-item">
          <div class="contant-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M16.66 3.33203H3.33201C2.41191 3.33203 1.66602 4.07792 1.66602 4.99803V14.994C1.66602 15.9141 2.41191 16.66 3.33201 16.66H16.66C17.5801 16.66 18.326 15.9141 18.326 14.994V4.99803C18.326 4.07792 17.5801 3.33203 16.66 3.33203Z"
                stroke="#7CB342"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.326 5.83105L10.854 10.5791C10.5968 10.7403 10.2995 10.8257 9.996 10.8257C9.69253 10.8257 9.39518 10.7403 9.13801 10.5791L1.66602 5.83105"
                stroke="#7CB342"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="contact-text">
            <span class="label">{{ t("redesign.footer.email") }}</span>
            <button
              type="button"
              class="footer-link-green"
              @click="goTo('/pages/contact-truelife-org')"
            >
              {{ t("redesign.footer.contactUs") }}
            </button>
          </div>
        </div>

        <div class="contact-item">
          <div class="contant-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M18.326 14.0944V16.5934C18.327 16.8254 18.2795 17.0551 18.1865 17.2676C18.0936 17.4802 17.9573 17.671 17.7863 17.8278C17.6154 17.9847 17.4136 18.1041 17.1938 18.1784C16.974 18.2527 16.7412 18.2803 16.5101 18.2594C13.9468 17.9809 11.4846 17.105 9.32133 15.7021C7.30867 14.4232 5.60228 12.7168 4.32334 10.7041C2.91556 8.53101 2.03946 6.05683 1.76604 3.48203C1.74522 3.25168 1.7726 3.01952 1.84642 2.80033C1.92025 2.58114 2.0389 2.37972 2.19484 2.2089C2.35077 2.03807 2.54056 1.90159 2.75213 1.80814C2.9637 1.71469 3.19242 1.66631 3.42371 1.6661H5.9227C6.32696 1.66212 6.71887 1.80527 7.02539 2.06888C7.33191 2.33248 7.53212 2.69855 7.5887 3.09885C7.69417 3.89859 7.88979 4.68382 8.1718 5.43958C8.28387 5.73773 8.30813 6.06176 8.24169 6.37327C8.17525 6.68478 8.02091 6.97072 7.79695 7.19721L6.73904 8.25511C7.92486 10.3406 9.65158 12.0673 11.737 13.2531L12.7949 12.1952C13.0214 11.9712 13.3074 11.8169 13.6189 11.7505C13.9304 11.684 14.2544 11.7083 14.5526 11.8203C15.3083 12.1024 16.0936 12.298 16.8933 12.4034C17.2979 12.4605 17.6675 12.6643 17.9317 12.9761C18.1958 13.2879 18.3362 13.6859 18.326 14.0944Z"
                stroke="#7CB342"
                stroke-width="1.666"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="contact-text">
            <span class="label">Phone</span>
            <span class="value">1-800-TRUELIFE</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copy">© 2006-2026 TrueLife.org • ALL RIGHTS RESERVED</p>

      <div class="footer-links">
        <button type="button" class="footer-link">
          TERMS &amp; PRIVACY POLICY
        </button>
        <button type="button" class="footer-link">PRIVACY POLICY (CA)</button>
        <button
          type="button"
          class="footer-link"
          @click="goTo('/pages/contact-truelife-org')"
        >
          CONTACT US
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { h, ref } from "vue";
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import logoIndex from "@/assets/images/truelife.org.png";

const router = useRouter();
const { locale, t } = useI18n();
const searchInput = ref("");

function goTo(path) {
  const safePath = path && String(path).startsWith("/") ? String(path) : "/";
  const localizedPath =
    locale.value === "en" ? safePath : `/${locale.value}${safePath}`;
  router.push({ path: localizedPath });
}

function openExternal(url) {
  window.open(url, "_blank", "noopener");
}

function handleLocationKeyup(event) {
  if (event.key === "Enter") {
    goTo("/locations");
  }
}

const FooterChevron = {
  name: "FooterChevron",
  render() {
    return h(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        h("path", {
          d: "M5.99854 11.9972L9.99763 7.99812L5.99854 3.99902",
          stroke: "#D1D5DC",
          "stroke-width": "1.33303",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
    );
  },
};
</script>

<style scoped>
.redesign-footer {
  --panel-accent: #7cb342;
  background: #1a2236;
  color: rgba(255, 255, 255, 0.8);
  padding: 80px 0 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 16px;
}

.footer-col {
  font-size: 15px;
  line-height: 1.6;
}

.footer-logo {
  width: 155px;
  height: auto;
  margin-bottom: 12px;
}

.brand-col p {
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  line-height: 29px;
}

.social-row {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff1a;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 150ms ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.2);
}

.footer-col h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-col p {
  margin-top: 24px;
}

.footer-h4-icon {
  flex-shrink: 0;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}

.footer-col li {
  margin-bottom: 12px;
}

.footer-col li button,
.footer-col p button {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  padding: 0;
  font-size: 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
}

.contant-icon-wrapper {
  width: 40px;
  height: 40px;
  background-color: #ffffff1a;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-text {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 12px;
  color: #6a7282;
}

.value {
  font-size: 14px;
  color: #d1d5dc;
}

.footer-link-green {
  color: var(--panel-accent) !important;
}

.footer-bottom {
  margin-top: 30px;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 28px 20px 18px;
  text-align: center;
  background-color: #00000033;
}

.footer-copy {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
}

.footer-links {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: start;
}

.footer-link {
  border: 0;
  background: transparent;
  padding: 0;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.65);
}

.footer-link:hover {
  color: #ffffff;
}

@media (max-width: 1024px) {
  .footer-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 44px;
    text-align: left;
  }

  .footer-links {
    margin-top: 0;
    display: flex;
    gap: 34px;
  }

  .footer-link {
    text-align: left;
    white-space: nowrap;
  }
}
</style>
