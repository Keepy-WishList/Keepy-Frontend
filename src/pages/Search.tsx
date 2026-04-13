import { useState } from 'react'
import Header from '../shared/components/Header'
import BottomNav from '../shared/components/BottomNav'

const imgSofa = 'https://www.figma.com/api/mcp/asset/0dc433fa-f05b-4b54-b44e-222f802ffb60'
const imgLamp = 'https://www.figma.com/api/mcp/asset/1b544a59-2277-42a9-91ed-bdc7123fde24'
const imgDesk = 'https://www.figma.com/api/mcp/asset/06e77f33-63aa-42de-b2cc-e581a9ddb571'

const categories = ['가구', '조명', '장식', '주방']
const sortOptions = ['최신순', '가격순', '평점순']

const products = [
  { img: imgSofa, badge: 'NEW', name: '노르딕 미니멀리즘 소파',  price: '₩320,000', desc: '북유럽 감성을 담은 간결한 디자인과 최고의 안락함을 제공하는 프리미엄 패브릭 소파입…', rating: '4.9', reviews: '128 리뷰' },
  { img: imgLamp, badge: null, name: '오로라 글라스 펜던트',     price: '₩85,000',  desc: '빛의 굴절을 아름답게 표현하는 수공예 유리 조명으로 공간에 따스한 감성을 더합니다.', rating: '4.7', reviews: '45 리뷰' },
  { img: imgDesk, badge: null, name: '화이트 오크 워크데스크',   price: '₩450,000', desc: '최상급 오크 원목으로 제작된 견고하고 심플한 데스크입니다. 어떤 작업실에도 완벽하게…', rating: '5.0', reviews: '22 리뷰' },
]

interface Props {
  onBack: () => void
  onProductClick: (idx: number) => void
}

export default function Search({ onBack, onProductClick }: Props) {
  const [activeCategory, setActiveCategory] = useState('가구')
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState('최신순')

  return (
    <div className="flex flex-col min-h-svh bg-keepy-bg-search relative overflow-hidden">

      {/* Ambient orbs */}
      <div className="fixed rounded-full pointer-events-none z-0 w-[195px] h-[1071px] -left-[39px] -top-[214px] bg-keepy-purple-light/10 blur-[60px]" />
      <div className="fixed rounded-full pointer-events-none z-0 w-[156px] h-[857px] -right-[39px] -bottom-[214px] bg-keepy-cyan/10 blur-[50px]" />

      <Header leftIcon="menu" />

      <div className="relative z-[1] pt-24 px-6 overflow-y-auto flex-1">

        {/* Search hero */}
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="font-pretendard text-[36px] font-medium text-keepy-text tracking-[-0.9px] leading-10">
            검색 및 필터링
          </h1>
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#9090a8" strokeWidth="1.5"/>
              <path d="m13 13 3 3" stroke="#9090a8" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              className="w-full py-5 pl-14 pr-14 rounded-2xl border-0 bg-keepy-surface-2 text-keepy-text font-manrope text-xl outline-none"
              defaultValue="Nordic"
            />
            <button className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="rgba(112,102,245,0.3)" strokeWidth="0.5"/>
                <path d="M7 7l6 6M13 7l-6 6" stroke="#9090a8" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-8 mb-8">

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <p className="font-pretendard text-xs font-medium text-keepy-muted-2 tracking-[2.4px] uppercase">카테고리</p>
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button
                  key={c}
                  className={`px-4 py-2 rounded-full border-0 font-pretendard text-sm font-medium cursor-pointer transition-all duration-150 ${
                    activeCategory === c
                      ? 'bg-keepy-purple-light text-keepy-purple-xdark'
                      : 'bg-keepy-surface text-keepy-muted-2 hover:bg-keepy-purple/20 hover:text-keepy-text'
                  }`}
                  onClick={() => setActiveCategory(c)}
                >{c}</button>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-pretendard text-xs font-medium text-keepy-muted-2 tracking-[2.4px] uppercase">가격 범위</p>
              <span className="font-manrope text-xs text-keepy-cyan">₩50,000+</span>
            </div>
            <div className="relative h-1.5 bg-keepy-surface-2 rounded-full overflow-hidden">
              <div className="absolute top-0 bottom-0 left-[15%] right-[20%] bg-keepy-cyan shadow-[0_0_12px_rgba(85,234,252,0.6)]" />
            </div>
            <div className="flex justify-between">
              <span className="font-manrope text-[10px] text-keepy-muted-2">₩10,000</span>
              <span className="font-manrope text-[10px] text-keepy-muted-2">₩500,000</span>
            </div>
          </div>

          {/* Sort */}
          <div className="flex flex-col gap-4">
            <p className="font-pretendard text-xs font-medium text-keepy-muted-2 tracking-[2.4px] uppercase">정렬</p>
            <button
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm text-keepy-text font-pretendard text-sm font-medium cursor-pointer w-full"
              onClick={() => setSortOpen(!sortOpen)}
            >
              <span>{activeSort}</span>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1l5 5 5-5" stroke="#e8e8f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {sortOpen && (
              <div className="bg-keepy-surface rounded-xl overflow-hidden border border-keepy-purple/30">
                {sortOptions.map(o => (
                  <button
                    key={o}
                    className={`block w-full px-4 py-3 border-0 bg-transparent font-pretendard text-sm font-medium text-left cursor-pointer transition-colors duration-100 hover:bg-keepy-purple/10 ${
                      activeSort === o ? 'text-keepy-purple-light' : 'text-keepy-muted-2'
                    }`}
                    onClick={() => { setActiveSort(o); setSortOpen(false) }}
                  >{o}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="font-pretendard text-sm font-medium text-keepy-muted-2">
              <span className="text-keepy-purple-light">12개</span>의 결과 발견
            </span>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm text-keepy-purple-light font-pretendard text-sm font-medium cursor-pointer">
              <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                <path d="M0 1h10M2 3.5h6M4 6h2" stroke="#a9a4ff" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              필터
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {products.map((p, i) => (
              <div key={i} className="bg-keepy-card-search rounded-3xl overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                  {p.badge && (
                    <span className="absolute top-4 left-4 px-[13px] py-[5px] rounded-full border border-keepy-cyan/30 bg-keepy-cyan/20 backdrop-blur-sm font-pretendard text-[10px] font-medium text-keepy-cyan tracking-[0.5px] uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-8 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-pretendard text-xl font-medium text-keepy-text leading-[1.4]">{p.name}</h3>
                    <span className="font-manrope text-base text-keepy-purple-light whitespace-nowrap shrink-0">{p.price}</span>
                  </div>
                  <p className="font-pretendard text-sm font-medium text-keepy-muted-2 leading-relaxed line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1">
                      <svg width="12" height="11" viewBox="0 0 12 11" fill="#e8e8f2">
                        <path d="M6 0l1.35 4.15H12L8.32 6.73 9.67 10.88 6 8.3 2.33 10.88 3.68 6.73 0 4.15h4.65L6 0z"/>
                      </svg>
                      <span className="font-pretendard text-xs font-medium text-keepy-text">{p.rating}</span>
                      <span className="font-manrope text-xs text-keepy-muted-2">({p.reviews})</span>
                    </div>
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-keepy-purple/30 bg-keepy-purple/6 backdrop-blur-sm text-keepy-purple-light font-pretendard text-sm font-medium cursor-pointer transition-colors duration-150 hover:bg-keepy-purple/15"
                      onClick={() => onProductClick(i)}
                    >
                      상세보기
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4.5h10M7 1l4 3.5L7 8" stroke="#a9a4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-40" />
      </div>

      <BottomNav active="search" onHomeClick={onBack} onSearchClick={() => {}} />
    </div>
  )
}
