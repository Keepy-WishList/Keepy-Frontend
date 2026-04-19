const googleIcon = 'https://www.figma.com/api/mcp/asset/73b6958f-5bd5-4205-82da-c1479fe51b97'
const appleIcon  = 'https://www.figma.com/api/mcp/asset/633fcf23-f35d-4127-9059-4b09dd465f71'
const avatar1    = 'https://www.figma.com/api/mcp/asset/8bb5a651-62b8-4efa-bb8c-5b9bd05f85a3'
const avatar2    = 'https://www.figma.com/api/mcp/asset/f3a83473-4bc4-4930-a4cd-5d01793c8574'
const avatar3    = 'https://www.figma.com/api/mcp/asset/bfbc24b8-6abc-4735-82df-bf1e4d67fcb2'

import { useNavigate } from 'react-router-dom'

const socialBtnCls =
  'flex items-center justify-center gap-2 py-4 px-3 rounded-2xl border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm text-keepy-text font-manrope text-xs cursor-pointer transition-colors duration-150 hover:bg-keepy-purple/12'

export default function Onboarding() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-h-svh bg-keepy-bg relative">

      {/* Hero glow */}
      <div className="h-[164px] relative overflow-hidden shrink-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-[280px] bg-[radial-gradient(ellipse_at_center,rgba(112,102,245,0.28)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* Brand */}
      <div className="flex justify-center pb-2 shrink-0">
        <span className="font-poetsen text-[64px] text-keepy-purple tracking-[-1.5px] leading-none">Keepy</span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 px-8 pb-20 shrink-0">
        <p className="font-pretendard text-base font-bold text-white/60 tracking-[-1.2px] text-center">
          저장은 쉽게, 살 때는 바로
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 w-full">
          <button
            className="flex items-center justify-center gap-2 w-full py-5 rounded-full border-0 bg-keepy-purple text-keepy-text font-pretendard text-base font-medium cursor-pointer transition hover:-translate-y-px hover:opacity-90 active:translate-y-0"
            onClick={() => navigate('/main')}
          >
            시작하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button className={socialBtnCls}>
              <img src={googleIcon} alt="Google" className="w-4 h-5 object-contain" />
              <span>Google로 계속하기</span>
            </button>
            <button className={socialBtnCls}>
              <img src={appleIcon} alt="Apple" className="w-[17px] h-5 object-contain" />
              <span>Apple로 계속하기</span>
            </button>
          </div>
        </div>

        
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 pt-[33px] px-6 pb-8 flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="#" className="font-pretendard text-[11px] font-medium text-keepy-muted tracking-[0.275px] no-underline hover:text-keepy-text">이용약관</a>
          <a href="#" className="font-pretendard text-[11px] font-medium text-keepy-muted tracking-[0.275px] no-underline hover:text-keepy-text">개인정보 처리방침</a>
        </div>
        <p className="font-manrope text-[11px] text-keepy-muted tracking-[0.275px] text-center">
          © 2024 KEEPY ARCHIVE. ALL RIGHTS RESERVED.
        </p>
      </footer>

    </div>
  )
}
