import Header from '../shared/components/Header'
import BottomNav from '../shared/components/BottomNav'

const imgShoe    = 'https://www.figma.com/api/mcp/asset/7e7b333b-fe15-490b-b217-653622f245cd'
const imgWebshot = 'https://www.figma.com/api/mcp/asset/756da052-ef19-4764-961a-d48da9a002cf'

const glassBtnCls =
  'flex items-center justify-center p-2 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm cursor-pointer transition-colors duration-150 hover:bg-keepy-purple/15'

interface Props {
  onBack: () => void
  onSearchClick: () => void
}

export default function ProductDetail({ onBack, onSearchClick }: Props) {
  return (
    <div className="flex flex-col min-h-svh bg-keepy-bg relative">
      <Header
        leftIcon="back"
        onLeftClick={onBack}
        rightSlot={
          <>
            <button className={glassBtnCls}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M15 7a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.73 17a2 2 0 0 1-3.46 0" stroke="#e8e8f2" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className={glassBtnCls}>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M14 2H2a1 1 0 0 0-1 1v15l5-3 3 2 3-2 5 3V3a1 1 0 0 0-1-1z" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        }
      />

      <div className="pt-16 overflow-y-auto flex-1 pb-4">

        {/* Hero */}
        <div className="p-4 flex flex-col gap-[15px]">
          <div className="relative rounded-4xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <img src={imgShoe} alt="Elite Runner X-1" className="w-full h-[358px] object-cover block" />
            <button className="absolute top-6 right-6 w-11 h-11 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm flex items-center justify-center cursor-pointer">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="#7066f5">
                <path d="M17.27 2.27a5 5 0 0 0-7.07 0L10 2.47l-.2-.2a5 5 0 0 0-7.07 7.07L10 16.6l7.27-7.27a5 5 0 0 0 0-7.06z"/>
              </svg>
            </button>
          </div>
          <p className="pl-2 font-manrope text-[11px] text-keepy-muted">2023년 10월 12일 저장</p>
        </div>

        {/* Info */}
        <div className="px-6 flex flex-col gap-8">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="inline-block px-3 py-[3.5px] rounded-full bg-keepy-purple/10 font-pretendard text-[10px] font-medium text-keepy-purple tracking-[1px] uppercase mb-2">신발</span>
              <h1 className="font-manrope text-[30px] tracking-[-0.75px] text-keepy-text leading-[1.25]">Elite Runner X-1</h1>
              <p className="font-manrope text-base text-keepy-muted">LuxeMotion Labs</p>
            </div>
            <span className="font-manrope font-extrabold text-2xl text-keepy-purple whitespace-nowrap">$249.00</span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-[16.5px] rounded-2xl border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm text-keepy-text font-pretendard text-base font-medium cursor-pointer transition-colors duration-150 hover:bg-keepy-purple/15">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 5.5h9M6 1l4.5 4.5L6 10" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              구매처 방문
            </button>
            <button className="w-14 h-14 rounded-2xl border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm flex items-center justify-center cursor-pointer shrink-0 transition-colors duration-150 hover:bg-keepy-purple/15">
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <path d="M7.5 0h-6A1.5 1.5 0 0 0 0 1.5V10l4.5-2.5L9 10V1.5A1.5 1.5 0 0 0 7.5 0z" fill="#e8e8f2"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Bento */}
        <div className="flex flex-col gap-4 pt-6 px-4">
          {/* Memo */}
          <div className="bg-keepy-card rounded-3xl p-6 flex flex-col gap-4 justify-between">
            <div>
              <p className="font-pretendard text-[10px] font-medium text-keepy-muted tracking-[0.5px] uppercase mb-[11px]">메모</p>
              <p className="font-pretendard text-sm text-keepy-slate leading-relaxed italic">
                "마커스를 위한 생일 선물 아이템. 지난 여름 여행 때 깔끔한 다이얼과 가죽 스트랩 질감이 마음에 든다고 했던 게 기억남."
              </p>
            </div>
            <button className="flex items-center gap-2 bg-transparent border-0 cursor-pointer font-pretendard text-xs text-keepy-muted p-0">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M7.5 1.5 9.5 3.5 3.5 9.5H1.5V7.5L7.5 1.5z" stroke="#9090a8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              메모 수정
            </button>
          </div>

          {/* Source screenshot */}
          <div className="bg-keepy-card rounded-3xl p-6">
            <p className="font-pretendard text-[10px] font-medium text-keepy-muted tracking-[0.5px] uppercase mb-[11px]">원본 소스</p>
            <div className="relative h-32 rounded-xl overflow-hidden bg-black/20">
              <img src={imgWebshot} alt="원본 소스" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1v16M1 9h16" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Extra actions */}
        <div className="flex flex-col gap-4 px-6 pt-4">
          <div className="flex items-center justify-between px-6 py-5 rounded-3xl bg-keepy-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-keepy-bg flex items-center justify-center shrink-0">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M14 2H2a1 1 0 0 0-1 1v15l5-3 3 2 3-2 5 3V3a1 1 0 0 0-1-1z" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-pretendard text-sm font-medium text-keepy-text">구매 완료로 표시</p>
                <p className="font-pretendard text-[11px] font-medium text-keepy-muted mt-0.5 whitespace-nowrap">이 아이템을 내 컬렉션으로 이동합니다</p>
              </div>
            </div>
            <div className="w-12 h-6 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm p-1 flex items-center shrink-0">
              <div className="w-4 h-4 rounded-full bg-keepy-bg" />
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-5 rounded-3xl border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-keepy-bg flex items-center justify-center shrink-0">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M8.5 1C4.91 1 2 3.91 2 7.5c0 1.59.55 3.05 1.45 4.2L1 14.5l3.3-1.45A6.47 6.47 0 0 0 8.5 14c3.59 0 6.5-2.91 6.5-6.5S12.09 1 8.5 1z" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-pretendard text-sm font-medium text-keepy-text">브랜드의 다른 제품 더보기</span>
            </div>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
              <path d="M1 1l5 5-5 5" stroke="#9090a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="h-52" />
      </div>

      {/* CTA above bottom nav */}
      <div className="fixed bottom-26 left-1/2 -translate-x-1/2 w-full max-w-107.5 px-6 py-3 bg-keepy-bg/85 backdrop-blur-[8px] z-[49]">
        <button className="w-full py-5 rounded-full border-0 bg-keepy-purple text-keepy-text font-pretendard text-lg font-medium cursor-pointer shadow-[0_8px_24px_rgba(112,102,245,0.3)] transition-opacity duration-150 hover:opacity-90">
          지금 구매하기
        </button>
      </div>

      <BottomNav active="home" onHomeClick={onBack} onSearchClick={onSearchClick} />
    </div>
  )
}
