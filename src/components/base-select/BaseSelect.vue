<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },

  itemText: {
    type: Function,
    default: item => item
  },

  itemValue: {
    type: Function,
    default: item => item
  },

  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const selectedItem = computed(() => {
  return props.items.find(x => props.itemValue(x) == props.modelValue)
})

const isShowContent = ref(false)

const emit = defineEmits(['update:modelValue'])

function handleItemClick ({ item }) {
  isShowContent.value = false
  emit('update:modelValue', props.itemValue(item))
}

const target = ref(null)
onClickOutside(target, () => isShowContent.value = false)

</script>

<template>
  <div
    ref="target"
    class="relative inline-block"
  >
    <!-- Dropdown toggle button -->
    <base-button
      v-bind="$attrs"
      class="relative w-full"
      @click="isShowContent = !isShowContent"
    >
      <template v-if="!selectedItem">
        <slot></slot>

        <PhCaretDownBold
          class="w-3 h-3 ml-3"
        />
      </template>

      <template v-else>
        {{ itemText(selectedItem) }}
      </template>
    </base-button>

    <!-- Dropdown menu -->
    <div
      class="
        absolute left-0
        z-20
        w-56
        py-1 mt-2
        overflow-hidden
        bg-white dark:bg-gray-800
        rounded-md
        shadow-xl
      "
      :class="{
        hidden: !isShowContent
      }"
    >
      <base-select-item is-disabled>
        <slot></slot>
      </base-select-item>

      <base-select-item
        v-for="(item, itemKey) in items"
        :key="itemKey"
        :is-selected="itemValue(item) == modelValue"
        @click="handleItemClick({ item })"
      >
        {{ itemText(item) }}
      </base-select-item>
    </div>
  </div>
</template>