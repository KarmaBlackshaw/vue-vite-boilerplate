export default () => {
  const isDark = useDark({
    selector: ':root',
    attribute: 'data-theme',
    valueDark: 'dark',
    valueLight: 'light'
  })

  return {
    isDark,
    toggle: useToggle(isDark)
  }
}