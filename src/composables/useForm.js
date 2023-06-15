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
  const form = ref({ ...initialState })

  function reset () {
    for (const key in initialState) {
      if (key in initialState) {
        form.value[key] = initialState[key]
      }
    }
  }

  return {
    form,
    reset
  }
}