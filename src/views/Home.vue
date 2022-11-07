<script setup>
const {
  t,
  language,
  languages
} = useTranslate()

</script>

<template>
  <div>
    <h1 class="text-2xl text-center mb-5">
      {{ t('project.name') }}
    </h1>

    <ul class="flex flex-col gap-3">
      <li class="flex items-center gap-2">
        <icon-emojione-v1:lightning-mood />

        Vue 3 and Vite 2
      </li>

      <li class="flex items-center gap-2">
        <icon-vscode-icons:file-type-package />

        Auto import components, icons, and apis on-demand
      </li>

      <li class="flex items-center gap-2">
        <icon-vscode-icons:file-type-tailwind />

        Tailwind
      </li>

      <li class="flex items-center gap-2">
        <icon-mdi:progress-helper />

        NProgress
      </li>

      <li class="flex items-center gap-2">
        <icon-vscode-icons:file-type-locale />

        <base-select
          v-model="language"
          :items="languages"
          :item-text="item => item.text"
          :item-value="item => item.value"
          class="w-[200px]"
          outlined
        >
          Select Language
        </base-select>
      </li>
    </ul>
  </div>
</template>