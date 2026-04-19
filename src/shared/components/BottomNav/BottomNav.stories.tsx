import type { Meta, StoryObj } from '@storybook/react'
import BottomNav from './index';

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    active: {
      control: 'radio',
      options: ['home', 'search', 'add', 'profile'],
    },
  },
}
export default meta

type Story = StoryObj<typeof BottomNav>

export const Home: Story = {
  args: { active: 'home' },
}

export const Search: Story = {
  args: { active: 'search' },
}

export const Add: Story = {
  args: { active: 'add' },
}

export const Profile: Story = {
  args: { active: 'profile' },
}
