<template>
  <main class="app">
    <div class="app__navigation">
      <router-link to="/">
        Home
      </router-link>

      <router-link to="/about">
        About
      </router-link>
    </div>

    <div class="app__content">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
body, html, #app, .app {
  height: 100%;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: theme('colors.gray.900');
  color: theme('colors.gray.100');

  .app__navigation {
    width: 100px;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 13px;
    margin-bottom: 10px;
  }

  .app__content {
    height: 300px;
    width: 400px;
  }
}
</style>
