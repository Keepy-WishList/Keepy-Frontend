import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Header from './index'

describe('Header', () => {
  it('좌측 버튼 클릭 시 onLeftClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<Header onLeftClick={handleClick} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('rightSlot이 전달되면 렌더링한다', () => {
    render(<Header rightSlot={<span>저장</span>} />)
    expect(screen.getByText('저장')).toBeInTheDocument()
  })

  it('rightSlot이 없으면 기본 알림 버튼을 렌더링한다', () => {
    render(<Header />)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
