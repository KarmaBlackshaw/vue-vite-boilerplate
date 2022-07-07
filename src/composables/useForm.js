/**

Usage:

const {
  form: storeForm,
  reset: storeFormReset
} = useForm({
  name: null,
  position: null,
  content: null
})

 */
export default initialState => {
  const form = reactive({ ...initialState })

  function reset () {
    for (const key in initialState) {
      if (Object.hasOwnProperty.call(initialState, key)) {
        form[key] = initialState[key]
      }
    }
  }

  return {
    form,
    reset
  }
}