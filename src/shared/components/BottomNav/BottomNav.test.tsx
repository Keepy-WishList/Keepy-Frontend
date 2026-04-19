import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import BottomNav from './index'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>()
  return { ...actual, useNavigate: () => mockNavigate }
})

describe('BottomNav', () => {
  beforeEach(() => {
    mockNavigate.mockReset()
  })

  it('탭 레이블 3개를 모두 렌더링한다', () => {
    render(<MemoryRouter><BottomNav active="home" /></MemoryRouter>)
    expect(screen.getByText('홈')).toBeInTheDocument()
    expect(screen.getByText('추가')).toBeInTheDocument()
    expect(screen.getByText('프로필')).toBeInTheDocument()
  })

  it('홈 탭 클릭 시 /main으로 이동한다', () => {
    render(<MemoryRouter><BottomNav active="home" /></MemoryRouter>)
    fireEvent.click(screen.getByText('홈').closest('button')!)
    expect(mockNavigate).toHaveBeenCalledWith('/main')
  })

  it('추가 탭 클릭 시 /add로 이동한다', () => {
    render(<MemoryRouter><BottomNav active='add' /></MemoryRouter>)
    fireEvent.click(screen.getByText('추가').closest('button')!)
    expect(mockNavigate).toHaveBeenCalledWith('/add')
  })
})
