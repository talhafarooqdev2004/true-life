<template>
  <IconBase :size="size">
    <polyline points="9 18 15 12 9 6" />
  </IconBase>
</template>

<script setup>
import IconBase from './IconBase.vue'

defineProps({ size: { type: [Number, String], default: 24 } })
</script>
