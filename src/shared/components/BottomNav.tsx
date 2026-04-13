type NavTab = 'home' | 'search' | 'add' | 'profile'

interface Props {
  active: NavTab
  onHomeClick?: () => void
  onSearchClick?: () => void
}

export default function BottomNav({ active, onHomeClick, onSearchClick }: Props) {
  const itemCls = (tab: NavTab) =>
    `flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl border-0 cursor-pointer transition-colors duration-150 ${
      active === tab
        ? 'bg-keepy-bg text-keepy-purple-dark'
        : 'bg-transparent text-keepy-muted hover:text-keepy-text'
    }`

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-107.5 px-4 pb-6 bg-keepy-bg/70 backdrop-blur-md border-t border-keepy-purple/25 z-50">
      <div className="flex items-center justify-between bg-keepy-purple/6 border border-keepy-purple/15 rounded-4xl h-20 px-7">

        <button className={itemCls('home')} onClick={onHomeClick}>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M1 7L8 1l7 6v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 17V9h4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-pretendard text-[10px] font-medium tracking-[0.5px] uppercase">홈</span>
        </button>

        <button className={itemCls('search')} onClick={onSearchClick}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="m13 13 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-pretendard text-[10px] font-medium tracking-[0.5px] uppercase">검색</span>
        </button>

        <button className={itemCls('add')}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="font-pretendard text-[10px] font-medium tracking-[0.5px] uppercase">추가</span>
        </button>

        <button className={itemCls('profile')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 15v-1.5A3.5 3.5 0 0 0 10.5 10h-5A3.5 3.5 0 0 0 2 13.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="font-pretendard text-[10px] font-medium tracking-[0.5px] uppercase">프로필</span>
        </button>

      </div>
    </nav>
  )
}
