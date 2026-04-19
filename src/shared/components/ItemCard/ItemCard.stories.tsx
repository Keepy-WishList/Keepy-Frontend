import type { Meta, StoryObj } from '@storybook/react'
import ItemCard from './index'

const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='132' height='132'%3E%3Crect width='132' height='132' fill='%2322222e'/%3E%3C/svg%3E`

const meta: Meta<typeof ItemCard> = {
  title: 'Components/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: {
    img: PLACEHOLDER,
    name: 'Air Max Pulse',
    brand: 'Nike',
    price: '₩160,000',
    source: 'NIKE OFFICIAL',
    saved: '2일 전 저장',
  },
}
export default meta

type Story = StoryObj<typeof ItemCard>

export const Default: Story = {}

export const WithBadge: Story = {
  args: {
    badge: '구매 완료',
  },
}

export const LongName: Story = {
  args: {
    name: '이름이 아주 길어서 말줄임표가 적용되는 케이스의 상품',
    brand: 'Very Long Brand Name',
  },
}
