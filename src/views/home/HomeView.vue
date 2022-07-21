<script setup>
const {
  t,
  language
} = useTranslate()

</script>

<template>
  <div>
    <div class="text-center">
      <span class="text-sm ">
        {{ t('intro.greeting', { person: 'developer' }) }}
      </span>
    </div>

    <h1>
      Vue + Vite Boilerplate 🚀
    </h1>

    <ul>
      <li class="mb-3">
        <EmojioneV1LightningMood class="inline mr-2" />

        Vue 3 and Vite 2
      </li>

      <li class="mb-3">
        <VscodeIconsFileTypePackage class="inline mr-2" />
        Auto import components and apis on-demand
      </li>

      <li class="mb-3">
        <IconParkNewspaperFolding class="inline mr-2" />
        Document components with storybook
      </li>

      <li class="mb-3">
        <VscodeIconsFileTypeTailwind class="inline mr-2" />
        Tailwind
      </li>

      <li class="mb-3">
        <MdiProgressHelper class="inline mr-2" /> NProgress
      </li>

      <li class="mb-3">
        <VscodeIconsFileTypeLocale class="inline mr-2" />

        <select
          v-model="language"
          class="
            w-[200px]
            px-2 py-1
            rounded
            text-gray-900
            text-sm
          "
        >
          <option value="en">
            En
          </option>

          <option value="kr">
            Kr
          </option>
        </select>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import './HomeView';
</style>