<script setup >
import BaseLayout from '@/layouts/BaseLayout.vue'

const route = useRoute()
const layout = ref()

watch(
  () => route.meta?.layout,
  async metaLayout => {
    try {
      const component = metaLayout && await import(/* @vite-ignore */ `./layouts/${metaLayout}.vue`)
      layout.value = markRaw(component?.default || BaseLayout)
    } catch (e) {
      layout.value = markRaw(BaseLayout)
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout" />
</template>

