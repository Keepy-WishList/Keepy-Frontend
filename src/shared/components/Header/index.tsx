import type { ReactNode } from 'react'

interface Props {
  leftIcon?: 'none' | 'back'
  hasLogo?: true | false
  title?: string
  onLeftClick?: () => void
}

export default function Header({ leftIcon = 'none', onLeftClick, hasLogo = true, title }: Props) {
  return (
    <header className="fixed top-0 w-full h-16 flex justify-start z-50">
      <div className="w-full flex items-center gap-4 justify-start px-6">

        {/* 좌측 아이콘 */}
        {leftIcon === 'none' ? 
          (<></>) : (
          <button aria-label='뒤로가기' onClick={onLeftClick}>
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="#e8e8f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
          )}

        {/* 로고 */}
        {hasLogo? (<span className="font-poetsen font-regular text-2xl text-keepy-purple tracking-[-1.2px]">Keepy</span>)
        :(<></>)}

        {/* 중앙 타이틀 */}
        {title && (
          <div className='absolute left-1/2 -translate-x-1/2 text-keepy-text font-pretendard text-[18px] font-semibold'>
            {title}
          </div>
        )}

      </div>
    </header>
  )
}
