import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../shared/components/Header'
import BottomNav from '../shared/components/BottomNav'
import ItemCard from '../shared/components/ItemCard'

const imgAirMax  = 'https://www.figma.com/api/mcp/asset/5b1667a8-de4c-44bb-8b0f-71df3566bfa1'
const imgHeadset = 'https://www.figma.com/api/mcp/asset/bd799ae5-fe70-4add-8908-df3e6ddecc5a'
const imgLamp    = 'https://www.figma.com/api/mcp/asset/eaf016e7-d747-45cd-8e58-f727da9490a2'

const products = [
  { img: imgAirMax,  name: 'Air Max Pulse',      brand: 'Nike',        price: '₩160,000', source: 'NIKE OFFICIAL', saved: '2일 전 저장',   badge: '구매 완료' },
  { img: imgHeadset, name: 'Studio Pro Wireless', brand: 'SoundMaster', price: '₩349,990', source: 'AMAZON',        saved: '5일 전 저장',   badge: null },
  { img: imgLamp,    name: 'Orbital Table Lamp',  brand: 'Lumière',     price: '₩89,000',  source: 'DESIGN STORE', saved: '1주일 전 저장', badge: null },
]

const filters = ['전체', '패션', '테크', '인테리어']

export default function Wishlist() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('전체')

  return (
    <div className="flex flex-col min-h-svh bg-keepy-bg relative">
      <Header />

      <main className="flex-1 pt-20 px-6 pb-44 flex flex-col overflow-y-auto">
        <h1 className="font-pretendard text-[30px] font-bold text-keepy-text tracking-[-0.9px] leading-10 mb-4">
          최근 저장한 아이템
        </h1>

        {/* Search bar */}
        <div className="relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#9090a8" strokeWidth="1.5"/>
            <path d="m13 13 3 3" stroke="#9090a8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            className="w-full py-4.25 pl-12 pr-4 rounded-2xl border-0 bg-keepy-bg/20 text-keepy-muted font-pretendard text-base font-medium outline-none cursor-pointer placeholder:text-keepy-muted"
            placeholder="아카이브 검색..."
            readOnly
            onClick={() => navigate('/search')}
          />
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 py-5 pb-6 overflow-x-auto no-scrollbar">
          {filters.map(f => (
            <button
              key={f}
              className={`shrink-0 px-5 py-2 rounded-full border-0 font-pretendard text-sm font-medium cursor-pointer transition-all duration-150 ${
                activeFilter === f
                  ? 'bg-keepy-purple-light/80 text-keepy-purple-xdark'
                  : 'bg-keepy-surface/20 text-keepy-muted-2 hover:bg-keepy-purple/12 hover:text-keepy-text'
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {products.map((p, i) => (
            <ItemCard key={i} {...p} onClick={() => navigate('/detail')} />
          ))}
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-27.5 right-[calc(50%-191px)] w-16 h-16 rounded-full border-0 bg-keepy-purple flex items-center justify-center cursor-pointer z-40 transition-transform duration-150 hover:scale-[1.07] active:scale-[0.96]">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M8.5 1v15M1 8.5h15" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <BottomNav active="home" />
    </div>
  )
}
