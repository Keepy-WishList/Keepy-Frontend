// 상품 리스트 카드 컴포넌트
interface Props {
  img: string
  name: string
  price: string
  brand: string
  isPurchased: boolean
  created: string
  onClick?: () => void
}

export default function ItemCard({ img, name, price, brand, isPurchased, created, onClick }: Props) {
  return (
    <button
      className="relative flex justify-start items-center h-28 w-full overflow-hidden glass-card p-3"
      onClick={onClick}
    >
      <div className="relative h-[98%] aspect-square rounded-[14px]">

        {/*상품 이미지 */}
        <img src={img} alt={name} className="w-full h-full object-full rounded-[14px]" />
        {isPurchased && ( //구매완료한 상품은 고양이 발바닥 이미지 덧씌우기
          <div className="absolute inset-0 rounded-[14px] overflow-hidden flex items-center justify-center">
            <svg role="img" aria-label="구매완료" width="full" height="full" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full z-50">
              <g clipPath="url(#clip0_147_18)">
                <path d="M74 0H14C6.26801 0 0 6.26801 0 14V74C0 81.732 6.26801 88 14 88H74C81.732 88 88 81.732 88 74V14C88 6.26801 81.732 0 74 0Z" fill="black" fillOpacity="0.55"/>
                <path d="M43.313 40.5585C43.5499 40.419 43.8219 40.3922 44.0815 40.483C46.3258 41.2681 57.2678 45.4274 58.5971 52.3168C59.5325 57.3913 56.8889 61.4099 53.0177 61.7922C50.6498 62.0259 48.3521 60.9716 46.4821 58.9465C45.9495 58.3698 44.9424 58.4692 44.5329 59.139C43.0951 61.4906 41.0479 62.9739 38.68 63.2077C34.8088 63.5899 31.4304 60.1658 31.3553 55.0064C31.3118 47.9891 41.2613 41.7667 43.313 40.5585Z" fill="#A9A4FF" fillOpacity="0.8"/>
                <path d="M28.779 49.4137C31.6422 48.8051 33.3395 45.3776 32.5702 41.7582C31.8009 38.1387 28.8562 35.6979 25.993 36.3065C23.1299 36.9151 21.4325 40.3426 22.2018 43.962C22.9712 47.5815 25.9159 50.0223 28.779 49.4137Z" fill="#A9A4FF" fillOpacity="0.8"/>
                <path d="M37.5025 38.3717C40.5487 37.7242 42.3426 34.0207 41.5091 30.0996C40.6757 26.1786 37.5305 23.5248 34.4843 24.1723C31.438 24.8198 29.6442 28.5234 30.4776 32.4444C31.3111 36.3655 34.4562 39.0192 37.5025 38.3717Z" fill="#A9A4FF" fillOpacity="0.8"/>
                <path d="M49.6523 37.4603C46.5306 37.2997 44.162 34.0188 44.362 30.1321C44.5619 26.2454 47.2546 23.2248 50.3763 23.3853C53.4979 23.5459 55.8665 26.8269 55.6666 30.7136C55.4666 34.6003 52.7739 37.6209 49.6523 37.4603Z" fill="#A9A4FF" fillOpacity="0.8"/>
                <path d="M59.2246 44.614C62.11 45.1215 64.9096 42.915 65.4777 39.6855C66.0457 36.456 64.1671 33.4265 61.2817 32.919C58.3962 32.4114 55.5966 34.618 55.0286 37.8475C54.4605 41.077 56.3391 44.1065 59.2246 44.614Z" fill="#A9A4FF" fillOpacity="0.8"/>
              </g>
              <defs>
                <clipPath id="clip0_147_18">
                  <rect width="88" height="88" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </div>

     {/*상품 정보 */}
      <div className="w-full flex flex-col justify-between items-start ml-3">
        <div className="flex flex-row items-center justify-between w-full overflow-hidden gap-2">

           {/* 이름 */}
          <span className="font-pretendard text-[16px] font-semibold text-keepy-text truncate max-w-30">{name}</span>
          {isPurchased && ( //구매완료한 상품은 체크표시
            <svg data-testid="checkIcon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 -mb-3 -mt-3">
              <path d="M10.5 18L15.75 23.25L25.5 13.5" stroke="#7066F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        {/* 브랜드 */}
        <span className="font-manrope text-xs text-keepy-muted max-w-30 truncate">{brand}</span>

        {/*가격 */}
        <div className="flex flex-col mt-2">
          <span className="font-pretendard font-semibold text-[16px] text-keepy-purple whitespace-nowrap">{price}</span>
       
        {/* 저장한 날짜 */}
        </div>
        <span className="font-pretendard text-xs font-medium text-keepy-muted whitespace-nowrap self-end">{created}일 전 저장</span>

      </div>
      {isPurchased && ( //구매한 상품은 카드 전체 어두운 오버레이 추가
        <div className="absolute inset-0 rounded-[inherit] bg-black/30" />
      )}
    </button>
  )
}
