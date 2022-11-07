<script setup>
const {
  isDark,
  toggle: toggleColorScheme
} = useColorScheme()

</script>

<template>
  <div
    class="
      cursor-pointer
      flex justify-center items-center
    "
    @click="toggleColorScheme()"
  >
    <icon-ic:outline-lightbulb v-if="isDark" />

    <icon-material-symbols:nightlight-rounded v-else />
  </div>
</template>