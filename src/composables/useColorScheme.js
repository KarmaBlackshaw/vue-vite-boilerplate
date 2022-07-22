export default () => {
  const isDark = useDark({
    selector: ':root',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light'
  })

  return {
    isDark,
    toggle: useToggle(isDark)
  }
}