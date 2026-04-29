<template>
  <IconBase :size="size">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </IconBase>
</template>

<script setup>
import IconBase from './IconBase.vue'

defineProps({ size: { type: [Number, String], default: 24 } })
</script>
