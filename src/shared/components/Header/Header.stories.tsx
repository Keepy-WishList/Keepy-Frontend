import type { Meta, StoryObj } from '@storybook/react'
import Header from './index'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftIcon: {
      control: 'radio',
      options: ['menu', 'back'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Header>

export const Menu: Story = {
  args: {
    leftIcon: 'menu',
  },
}

export const Back: Story = {
  args: {
    leftIcon: 'back',
  },
}

export const WithRightSlot: Story = {
  args: {
    leftIcon: 'menu',
    rightSlot: (
      <button className="px-4 py-1.5 rounded-full bg-keepy-purple font-pretendard text-xs font-medium text-white">
        저장
      </button>
    ),
  },
}
