<script setup>
defineProps({
  isSelected: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="
      block
      px-3 py-2
      text-sm text-gray-600 dark:text-gray-300 capitalize
      transition-colors duration-200 transform
      hover:bg-gray-100 dark:hover:bg-gray-700/50 dark:hover:text-white
      cursor-pointer
      rounded-sm
    "
    :class="{
      'bg-gray-100 dark:bg-gray-700': isSelected,
      'text-gray-200 dark:text-gray-500': isDisabled
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

