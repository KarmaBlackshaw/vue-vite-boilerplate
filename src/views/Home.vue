<script setup>
const {
  t
} = useTranslate()

const iconClass = `
  h-[15px] min-h-[15px]
  w-[15px] min-w-[15px]
`

const foo = 'afsafdasdsfdf'

</script>

<template>
  <div>
    <h1 class="text-2xl text-center mb-5">
      {{ t('project.name') }}
    </h1>

    <ul class="flex flex-col gap-3">
      <li class="flex items-center gap-3">
        <icon-emojione-v1:lightning-mood :class="iconClass" />

        Vue 3 and Vite 2
      </li>

      <icon-zondicons:airplane />

      <li class="flex items-center gap-3">
        <icon-vscode-icons:file-type-package :class="iconClass" />

        Auto import components, icons, and apis on-demand
      </li>

      <li class="flex items-center gap-3">
        <icon-vscode-icons:file-type-tailwind :class="iconClass" />

        Tailwind
      </li>

      <li class="flex items-center gap-3">
        <icon-mdi:progress-helper :class="iconClass" />

        NProgress
      </li>
    </ul>
  </div>
</template>