import type { ReactNode } from 'react'

interface Props {
  leftIcon?: 'menu' | 'back'
  onLeftClick?: () => void
  rightSlot?: ReactNode
}

const iconBtnCls =
  'flex items-center justify-center p-2 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm cursor-pointer transition-colors duration-150 hover:bg-keepy-purple/15'

export default function Header({ leftIcon = 'menu', onLeftClick, rightSlot }: Props) {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-107.5 h-16 flex items-center justify-between px-6 bg-keepy-bg/65 backdrop-blur-[10px] border-b border-keepy-purple/25 z-50">
      <div className="flex items-center gap-4">
        <button className={iconBtnCls} onClick={onLeftClick}>
          {leftIcon === 'menu' ? (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <path d="M0 1h18M0 6h18M0 11h18" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <span className="font-manrope font-extrabold text-2xl text-keepy-purple tracking-[-1.2px]">Keepy</span>
      </div>

      <div className="flex items-center gap-2">
        {rightSlot ?? (
          <button className={iconBtnCls}>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path d="M8 0C5.24 0 3 2.24 3 5v4.17C3 10.28 2.37 11.33 1.76 12H14.24C13.63 11.33 13 10.28 13 9.17V5c0-2.76-2.24-5-5-5zm0 20c1.1 0 2-.9 2-2H6c0 1.1.9 2 2 2z" fill="#e8e8f2"/>
            </svg>
          </button>
        )}
      </div>
    </header>
  )
}
