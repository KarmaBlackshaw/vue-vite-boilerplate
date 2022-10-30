import { useEventListener } from '@vueuse/core'

// libs
import _debounce from 'lodash/debounce'
import { pipe } from '@/utils/function'

import tailwind from '../../tailwind.config'

export default () => {
  const state = reactive({
    width: 0
  })

  const sizes = pipe(tailwind.theme.screens, [
    val => Object.entries(val),
    val => val.map(x => {
      x[1] = Number(x[1].replace(/px$/g, ''))
      return x
    }),
    val => Object.fromEntries(val)
  ])

  const breakpoint = reactive({
    sm: false,
    md: false,
    lg: false,
    xl: false
  })

  /**
   * Handle resize
   */
  const resizeCallback = _debounce(() => {
    const width = window.innerWidth

    state.width = width

    for (const size in sizes) {
      const breakpointWidth = sizes[size]

      breakpoint[size] = width >= breakpointWidth
    }
  }, 10)

  resizeCallback()

  useEventListener(window, 'resize', resizeCallback)

  return breakpoint
}