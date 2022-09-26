<script setup>
const {
  isDark,
  toggle: toggleColorScheme
} = useColorScheme()

</script>

<template>
  <div class="base-theme-toggle">
    <input
      id="checkbox"
      type="checkbox"
      class="
        checkbox
        opacity-0
        absolute
      "
      :checked="isDark"
      @change="toggleColorScheme()"
    >

    <label
      for="checkbox"
      class="
        label
        cursor-pointer
        w-[50px] h-[26px]
        p-1
        flex items-center justify-between
        relative
        rounded-xl
        bg-gray-700
        border
        border-gray-400/50 dark:border-gray-700
      "
    >
      <div
        class="
          ball
          w-[20px] h-[20px]
          absolute
          flex items-center justify-center
        "
      >
        <icon-fxemoji:whitesun v-if="isDark" />

        <icon-twemoji:full-moon v-else />
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import './BaseThemeToggle';
</style>