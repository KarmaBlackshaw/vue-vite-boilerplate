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
      class="checkbox"
      :checked="isDark"
      @change="toggleColorScheme()"
    >

    <label
      for="checkbox"
      class="label"
    >

      <div class="ball">
        <img
          v-if="isDark"
          src="./assets/images/sun-3.png"
          alt=""
        >
        <img
          v-else
          src="./assets/images/moon-3.png"
          alt=""
        >
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
@import './BaseThemeToggle';
</style>