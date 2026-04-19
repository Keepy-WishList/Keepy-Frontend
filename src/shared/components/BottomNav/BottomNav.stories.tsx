import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import BottomNav from './index';

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    active: {
      control: 'radio',
      options: ['home', 'add', 'profile'],
    },
  },
}
export default meta

type Story = StoryObj<typeof BottomNav>

export const Home: Story = {
  args: { active: 'home' },
}

export const Add: Story = {
  args: { active: 'add' },
}

export const Profile: Story = {
  args: { active: 'profile' },
}
