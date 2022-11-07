<script setup>
import { createPopper } from '@popperjs/core'

const reference = ref(null)
const popper = ref(null)
const instance = ref(null)

const props = defineProps({
  trigger: {
    type: String,
    default: 'hover',
    validator (val) {
      return ['click', 'hover'].includes(val)
    }
  },
  // https://popper.js.org/docs/v2/constructors/#placement
  placement: {
    type: String,
    default: 'bottom'
  }
})

function show () {
  if (props.trigger === 'click') {
    if (popper.value.hasAttribute('data-show')) {
      return hide()
    }
  }

  popper.value.setAttribute('data-show', '')
  instance.value.update()
}

function hide () {
  popper.value.removeAttribute('data-show')
}

function setReference (el) {
  reference.value = el.$el || el
}

const isDomEntity = entity => {
  return entity && typeof entity === 'object' && entity.nodeType !== undefined
}

const unwatchReference = watch(
  [
    () => reference.value,
    () => popper.value
  ], val => {
    if (!val.every(isDomEntity)) {
      return
    }

    instance.value = createPopper(reference.value, popper.value, {
      placement: props.placement
    })

    initializeTrigger()
    unwatchReference()
  })

function initializeTrigger () {
  if (props.trigger === 'click') {
    useEventListener(reference.value, 'click', show)
    onClickOutside(reference.value, hide)
  }

  if (props.trigger === 'hover') {
    useEventListener(reference.value, 'mouseover', show)
    useEventListener(reference.value, 'mouseleave', hide)
  }
}

</script>

<template>
  <div v-bind="$attrs">
    <slot :reference="setReference"></slot>

    <div
      id="popper"
      ref="popper"
    >
      <slot name="popper"></slot>
    </div>
  </div>
</template>

<style lang="scss">
#popper {
  display: none;
}

#popper[data-show] {
  display: block;
}
</style>