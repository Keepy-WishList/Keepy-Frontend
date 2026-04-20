import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ItemCard from './index'

const defaultProps = {
  img: 'test.jpg',
  name: 'Air Max Pulse',
  brand: 'Nike',
  price: '₩160,000',
  created: '2',
}

describe('ItemCard', () => {
  it('상품 정보를 렌더링한다', () => {
    render(<ItemCard {...defaultProps} isPurchased={false}/>)
    expect(screen.getByAltText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByText('Air Max Pulse')).toBeInTheDocument()
    expect(screen.getByText('Nike')).toBeInTheDocument()
    expect(screen.getByText('₩160,000')).toBeInTheDocument()
    expect(screen.getByText('2일 전 저장')).toBeInTheDocument()
  })

  it('클릭 시 onClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<ItemCard {...defaultProps} onClick={handleClick} isPurchased={false} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('isPurchased가 true일때 구매완료 오버레이가 렌더링된다', () => {
    render(<ItemCard {...defaultProps} isPurchased={true} />)
    expect(screen.getByRole('img', { name: '구매완료' })).toBeInTheDocument()
    expect(screen.getByTestId('checkIcon')).toBeInTheDocument()
  })

  it('isPurchased가 false일때 구매완료 오버레이가 렌더링되지 않는다', () => {
    render(<ItemCard {...defaultProps} isPurchased={false} />)
    expect(screen.queryByRole('img', { name: '구매완료' })).not.toBeInTheDocument()
    expect(screen.queryByTestId('checkIcon')).not.toBeInTheDocument()
  })
})
