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
      className="flex justify-start items-center h-28 w-full overflow-hidden glass-card p-3"
      onClick={onClick}
    >
      <div className="h-[98%] aspect-square rounded-[14px]">
        <img src={img} alt={name} className="w-full h-full object-full rounded-[14px]" />
      </div>

      <div className="w-full flex flex-col justify-between items-start ml-3">
        <div className="flex flex-row items-center justify-between w-full overflow-hidden gap-2">
          <span className="font-pretendard text-[16px] font-semibold text-keepy-text truncate max-w-30">{name}</span>
          <div className="text-white shrink-999">구매완료</div>
        </div>
        <span className="font-manrope text-xs text-keepy-muted max-w-30 truncate">{brand}</span>

        <div className="flex flex-col mt-2">
          <span className="font-pretendard font-semibold text-[16px] text-keepy-purple whitespace-nowrap">{price}</span>

        </div>
        <span className="font-pretendard text-xs font-medium text-keepy-muted whitespace-nowrap self-end">{created}일 전 저장</span>

        
      </div>
    </button>
  )
}
