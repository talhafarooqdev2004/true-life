<template>
  <IconBase :size="size">
    <polygon points="5 3 19 12 5 21 5 3" />
  </IconBase>
</template>

<script setup>
import IconBase from './IconBase.vue'

defineProps({ size: { type: [Number, String], default: 24 } })
</script>
