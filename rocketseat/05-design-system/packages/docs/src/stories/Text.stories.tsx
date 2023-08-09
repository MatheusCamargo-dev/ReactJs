import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ratione maxime dolor! Esse, repellat, velit, et natus nesciunt facere quibusdam laborum possimus doloribus deleniti ut qui? In iste consequatur maxime?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
