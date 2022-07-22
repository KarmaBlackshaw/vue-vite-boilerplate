<template>
  <main
    class="
      app
    bg-gray-100 dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    "
  >
    <div
      class="
        w-[500px]
        flex justify-between
      "
    >
      <div class="flex gap-2 text-gray-400">
        <router-link
          to="/"
          active-class="
            font-bold
            text-gray-700 dark:text-gray-300
          "
        >
          Home
        </router-link>

        <router-link
          to="/about"
          active-class="
            font-bold
            text-gray-700 dark:text-gray-300
          "
        >
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
        bg-gray-300 dark:gray-700
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

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
