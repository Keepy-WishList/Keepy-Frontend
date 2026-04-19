import HomeIcon from '@/assets/nav/navHome.svg?react'
import AddIcon from '@/assets/nav/navAdd.svg?react'
import NavProfileIcon from '@/assets/nav/navProfile.svg?react'
import { useNavigate } from 'react-router-dom'

type NavTab = 'home' | 'add' | 'profile'

interface Props {
  active: NavTab
}

export default function BottomNav({ active }: Props) {
  const navigate = useNavigate();

  const itemCls = (tab: NavTab) =>
    `flex flex-col items-center gap-0.5 ${
      active === tab
        ? ' text-[#E8E8F2]'
        : ' text-keepy-muted hover:text-keepy-text'
    }`

  return (
    <nav className="w-full h-15 fixed bottom-0 bg-[rgba(112,102,245,0.06)] border-[0.5px] border-[rgba(112,102,245,0.15)] backdrop-blur-[10px] rounded-tl-4xl rounded-tr-4xl">
      <div className="w-full flex flex-row justify-around pt-2">

        <button className={itemCls('home')} onClick={()=>navigate('/main')}>
          <HomeIcon
            width={18}
            height={18}
            className={`transition-opacity duration-150 ${active === 'home' ? 'opacity-100' : 'opacity-30'}`}
          />
          <span className="font-pretendard text-[10px] font-medium ">홈</span>
        </button>

        <button className={itemCls('add')} onClick={()=>navigate('/add')}>
            <AddIcon
            width={18}
            height={18}
            className={`transition-opacity duration-150 ${active === 'add' ? 'opacity-100' : 'opacity-30'}`}
          />
          <span className="font-pretendard text-[10px] font-medium ">추가</span>
        </button>

        <button className={itemCls('profile')} onClick={()=>navigate('/profile')}>
          <NavProfileIcon
            width={16}
            height={16}
            className={`transition-opacity duration-150 ${active === 'profile' ? 'opacity-100' : 'opacity-30'}`}
          />
          <span className="font-pretendard text-[10px] font-medium">프로필</span>
        </button>

      </div>
    </nav>
  )
}
