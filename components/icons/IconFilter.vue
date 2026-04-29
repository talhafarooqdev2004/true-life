<template>
  <IconBase :size="size">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </IconBase>
</template>

<script setup>
import IconBase from './IconBase.vue'

defineProps({ size: { type: [Number, String], default: 24 } })
</script>
