import type { Meta, StoryObj } from '@storybook/react'
import Header from './index'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    title: 'input'
  },
  argTypes: {
    leftIcon: {
      control: 'radio',
      options: ['none', 'back'],
    },
    hasLogo:{
      control: 'radio',
      options: [true,false]
    }
    
  },
}
export default meta

type Story = StoryObj<typeof Header>

export const none: Story = {
  args: {
    leftIcon: 'none',
  },
}

export const Back: Story = {
  args: {
    leftIcon: 'back',
  },
}


