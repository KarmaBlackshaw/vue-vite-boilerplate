import BaseButton from '@/components/base-button/BaseButton.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'BaseButton',
  component: BaseButton,
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
  components: { BaseButton },
  setup () {
    return { args }
  },

  template: '<base-button v-bind="args">{{args.label}}</base-button>'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}
