
<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator (value) {
      return ['sm', 'md', 'lg'].includes(value)
    }
  },

  color: {
    type: String,
    default: 'white'
  },

  outlined: {
    type: Boolean,
    default: false
  },

  isLoading: {
    type: Boolean,
    default: false
  }
})

const loaderClasses = computed(() => {
  const classList = ['mr-2']

  if (props.size) {
    if (props.size === 'sm') {
      classList.push(
        'w-[15px]'
      )
    }

    if (props.size === 'md') {
      classList.push(
        'w-[20px]'
      )
    }

    if (props.size === 'lg') {
      classList.push(
        'w-[25px]'
      )
    }
  }

  if (props.color) {
    if (props.color === 'transparent') {
      classList.push(
        'stroke-gray-200 hover:stroke-gray-300'
      )
    }

    if (props.color === 'white') {
      if (props.outlined) {
        classList.push(
          'stroke-gray-300 hover:stroke-gray-400'
        )
      } else {
        classList.push(
          'stroke-gray-800 hover:stroke-gray-700'
        )
      }
    }

    if (props.color === 'blue') {
      if (props.outlined) {
        classList.push(
          'stroke-blue-500 hover:stroke-blue-600'
        )
      } else {
        classList.push(
          'stroke-blue-50 hover:stroke-blue-100'
        )
      }
    }

    if (props.color === 'green') {
      if (props.outlined) {
        classList.push(
          'stroke-green-500 hover:stroke-green-600'
        )
      } else {
        classList.push(
          'stroke-green-50 hover:stroke-green-100'
        )
      }
    }
  }

  return classList
})

const btnClasses = computed(() => {
  const classList = []

  if (props.size) {
    if (props.size === 'sm') {
      classList.push(
        'h-[25px]',
        'text-[9px]',
        'px-2'
      )
    }

    if (props.size === 'md') {
      classList.push(
        'h-[35px]',
        'text-[12px]',
        'px-3'
      )
    }

    if (props.size === 'lg') {
      classList.push(
        'h-[45px]',
        'text-[13px]',
        'px-4'
      )
    }
  }

  if (props.color) {
    if (props.color === 'transparent') {
      classList.push(
        'border border-transparent',
        'text-gray-200 hover:text-gray-300'
      )
    }

    if (props.color === 'white') {
      if (props.outlined) {
        classList.push(
          'border border-gray-300 hover:border-gray-400',
          'text-gray-300 hover:text-gray-400'
        )
      } else {
        classList.push(
          'border border-gray-300 hover:border-gray-400',
          'bg-gray-300 hover:bg-gray-400',
          'text-gray-800 hover:text-gray-700'
        )
      }
    }

    if (props.color === 'blue') {
      if (props.outlined) {
        classList.push(
          'border border-blue-500 hover:border-blue-600',
          'text-blue-500 hover:text-blue-600'
        )
      } else {
        classList.push(
          'border border-blue-500 hover:border-blue-600',
          'bg-blue-500 hover:bg-blue-600',
          'text-blue-50 hover:text-blue-100'
        )
      }
    }

    if (props.color === 'green') {
      if (props.outlined) {
        classList.push(
          'border border-green-500 hover:border-green-600',
          'text-green-500 hover:text-green-600'
        )
      } else {
        classList.push(
          'border border-green-500 hover:border-green-600',
          'bg-green-500 hover:bg-green-600',
          'text-green-50 hover:text-green-100'
        )
      }
    }
  }

  return classList
})

</script>

<template>
  <button
    class="base-button"
    :class="btnClasses"
  >
    <base-loader
      v-if="isLoading"
      :class="loaderClasses"
    />

    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import './BaseButton';
</style>