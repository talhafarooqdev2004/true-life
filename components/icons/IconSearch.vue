<template>
  <IconBase :size="size">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </IconBase>
</template>

<script setup>
import IconBase from './IconBase.vue'

defineProps({ size: { type: [Number, String], default: 24 } })
</script>
