<script setup>
defineProps({
  type: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <button
    class="base-button"
    :class="{
      ...(type && { [`base-button__${type}`]: true })
    }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import './BaseButton';
</style>