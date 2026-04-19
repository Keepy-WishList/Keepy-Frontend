import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ItemCard from './index'

const defaultProps = {
  img: 'test.jpg',
  name: 'Air Max Pulse',
  brand: 'Nike',
  price: '₩160,000',
  source: 'NIKE OFFICIAL',
  saved: '2일 전 저장',
}

describe('ItemCard', () => {
  it('상품 정보를 렌더링한다', () => {
    render(<ItemCard {...defaultProps} />)
    expect(screen.getByText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByText('Nike')).toBeInTheDocument()
    expect(screen.getByText('₩160,000')).toBeInTheDocument()
    expect(screen.getByText('2일 전 저장')).toBeInTheDocument()
  })

  it('badge가 전달되면 렌더링한다', () => {
    render(<ItemCard {...defaultProps} badge="구매 완료" />)
    expect(screen.getByText('구매 완료')).toBeInTheDocument()
  })

  it('badge가 없으면 렌더링하지 않는다', () => {
    render(<ItemCard {...defaultProps} />)
    expect(screen.queryByText('구매 완료')).not.toBeInTheDocument()
  })

  it('클릭 시 onClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<ItemCard {...defaultProps} onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
