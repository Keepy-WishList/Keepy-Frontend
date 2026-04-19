import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ItemCard from './index'

const defaultProps = {
  img: 'test.jpg',
  name: 'Air Max Pulse',
  brand: 'Nike',
  price: '₩160,000',
  created: '2',
  isPurchased: true,
}

describe('ItemCard', () => {
  it('상품 정보를 렌더링한다', () => {
    render(<ItemCard {...defaultProps} />)
    expect(screen.getByText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByText('Nike')).toBeInTheDocument()
    expect(screen.getByText('₩160,000')).toBeInTheDocument()
    expect(screen.getByText('2일 전 저장')).toBeInTheDocument()
  })

  it('클릭 시 onClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<ItemCard {...defaultProps} onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
