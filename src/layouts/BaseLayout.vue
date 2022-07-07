<template>
  <main class="app dark:bg-gray-900 dark:text-gray-100">
    <div
      class="
        w-[400px]
        flex justify-between
      "
    >
      <div class="flex gap-2 links-container">
        <router-link to="/">
          Home
        </router-link>

        <router-link to="/about">
          About
        </router-link>
      </div>

      <base-theme-toggle />
    </div>

    <div class="h-[1px] w-[400px] bg-gray-700 my-5"></div>

    <div class="w-[400px] h-[300px]">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
body, html, #app, .app {
  height: 100%;
  font-family: "Quicksand", sans-serif;
}

.links-container {
  a {
    color: theme('colors.gray.400');
  }

  .router-link-active {
    font-weight: 900;
    color: theme('colors.gray.700');

    @include isDark {
      color: theme('colors.gray.300')
    }
  }
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: theme('colors.gray.900');
  background-color: theme('colors.gray.50');

  @include isDark {
    background-color: theme('colors.gray.900');
    color: theme('colors.gray.100');
  }
}
</style>
