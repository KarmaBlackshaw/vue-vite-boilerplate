<template>
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style lang="scss">
@import '@/styles/app/_@index.scss';

body, html, #app, .app-main {
  height: 100%;
}

.app-main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: theme('colors.gray.700');
  color: theme('colors.gray.100');
  font-size: 24px;
  font-family: "Quicksand", sans-serif;
}
</style>
