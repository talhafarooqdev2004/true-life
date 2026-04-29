<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <slot />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [Number, String],
    default: 24,
  },
})
</script>
