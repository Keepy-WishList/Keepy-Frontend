import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import BottomNav from './index'

describe('BottomNav', () => {
  it('탭 레이블 4개를 모두 렌더링한다', () => {
    render(<BottomNav active="home" />)
    expect(screen.getByText('홈')).toBeInTheDocument()
    expect(screen.getByText('검색')).toBeInTheDocument()
    expect(screen.getByText('추가')).toBeInTheDocument()
    expect(screen.getByText('프로필')).toBeInTheDocument()
  })

  it('홈 탭 클릭 시 onHomeClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<BottomNav active="search" onHomeClick={handleClick} />)
    fireEvent.click(screen.getByText('홈').closest('button')!)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('검색 탭 클릭 시 onSearchClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<BottomNav active="home" onSearchClick={handleClick} />)
    fireEvent.click(screen.getByText('검색').closest('button')!)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
