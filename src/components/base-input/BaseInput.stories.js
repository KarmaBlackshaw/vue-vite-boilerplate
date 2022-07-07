import BaseInput from './BaseInput.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'BaseInput',
  component: BaseInput,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm'
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['transparent', 'white', 'blue', 'green'],
      defaultValue: 'white'
    },
    outlined: {
      control: 'boolean'
    },
    isLoading: {
      control: 'boolean'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  components: { BaseInput },
  setup () {
    return { args }
  },

  template: '<base-input v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}
