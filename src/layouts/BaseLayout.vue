<template>
  <main
    class="
      flex justify-center items-center flex-col
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      h-full
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
