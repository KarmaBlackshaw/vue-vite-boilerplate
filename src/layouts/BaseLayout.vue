<template>
  <main class="app">
    <div
      class="
        w-[500px]
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

    <div
      class="
        divider
        h-[1px] w-[500px]
        my-5
      "
    ></div>

    <div class="w-[500px] h-[300px]">
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

    @include isTheme(dark) {
      color: theme('colors.gray.300')
    }
  }
}

.divider {
  background-color: theme('colors.gray.300');

  @include isTheme(dark) {
    background-color: theme('colors.gray.700');
    color: theme('colors.gray.100');
  }
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: theme('colors.stone.100');
  color: theme('colors.gray.900');

  @include isTheme(dark) {
    background-color: theme('colors.gray.900');
    color: theme('colors.gray.100');
  }
}
</style>
