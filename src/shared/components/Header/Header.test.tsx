import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Header from './index'

describe('Header', () => {
  it('leftIcon이 back일때 backicon이 렌더링된다.', ()=>{
    render(<Header leftIcon='back'/>)
    expect(screen.queryByRole(('button'),{name:'뒤로가기'})).toBeInTheDocument()
  })

  it('leftIcon이 none일때 leftIcon이 렌더링되지 않는다.', ()=>{
    render(<Header leftIcon='none'/>)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('좌측 버튼 클릭 시 onLeftClick을 호출한다', () => {
    const handleClick = vi.fn()
    render(<Header leftIcon="back" onLeftClick={handleClick} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('title props가 있을때 title이 렌더링된다.', () => {
    render(<Header title="테스트 제목" />)
    expect(screen.getByText('테스트 제목')).toBeInTheDocument()
  })

  it('title props가 없을때 title이 렌더링되지 않는다.', () => {
    render(<Header />)
    expect(screen.queryByText('테스트 제목')).not.toBeInTheDocument()
  })


})
