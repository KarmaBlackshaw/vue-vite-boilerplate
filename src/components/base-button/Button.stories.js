import MyButton from './BaseButton.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = args => ({
  components: { MyButton },

  setup () {
    return { args }
  },

  template: '<my-button v-bind="args">{{args.label}}</my-button>'
})

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: 'primary',
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  label: 'Button'
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  label: 'Button'
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  label: 'Button'
}
