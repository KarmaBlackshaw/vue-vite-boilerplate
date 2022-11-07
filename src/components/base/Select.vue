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
  <base-popper
    trigger="click"
    placement="bottom-start"
  >
    <template #default="{ reference }">
      <base-button
        :ref="reference"
      >
        <template v-if="!selectedItem">
          <slot></slot>

          <icon-ph:caret-down-bold class="w-3 h-3 ml-3" />
        </template>

        <template v-else>
          {{ itemText(selectedItem) }}
        </template>
      </base-button>
    </template>

    <template #popper>
      <div
        class="
        absolute left-0
        z-20
        w-56
        p-2 mt-2
        overflow-hidden
        bg-white dark:bg-gray-800
        rounded-md
        shadow-xl
      "
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
    </template>
  </base-popper>
</template>