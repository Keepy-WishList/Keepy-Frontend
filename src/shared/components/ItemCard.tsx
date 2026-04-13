interface Props {
  img: string
  name: string
  brand: string
  price: string
  source: string
  saved: string
  badge?: string | null
  onClick?: () => void
}

export default function ItemCard({ img, name, brand, price, source, saved, badge, onClick }: Props) {
  return (
    <button
      className="flex h-33 rounded-xl overflow-hidden bg-keepy-card border-0 cursor-pointer text-left transition-transform duration-150 w-full hover:scale-[1.01] active:scale-[0.99]"
      onClick={onClick}
    >
      <div className="w-33 h-33 shrink-0 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col justify-between p-5 min-w-0">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between gap-2">
            <span className="font-manrope text-[18px] text-keepy-text truncate">{name}</span>
            {badge && (
              <span className="shrink-0 px-2 py-1 rounded-md bg-keepy-bg font-pretendard text-[10px] font-medium text-keepy-green tracking-[0.5px] uppercase">
                {badge}
              </span>
            )}
          </div>
          <span className="font-manrope text-sm text-keepy-muted">{brand}</span>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-manrope text-xl text-keepy-purple-dark whitespace-nowrap">{price}</span>
            <div className="flex items-center gap-1.5 opacity-60">
              <svg width="12" height="11" viewBox="0 0 12 11" fill="none">
                <path d="M6 0L7.35 4.15H12L8.32 6.73L9.67 10.88L6 8.3L2.33 10.88L3.68 6.73L0 4.15H4.65L6 0Z" fill="#9090a8"/>
              </svg>
              <span className="font-manrope text-[11px] text-keepy-text tracking-[0.55px] uppercase">{source}</span>
            </div>
          </div>
          <span className="font-pretendard text-[10px] font-medium text-keepy-muted whitespace-nowrap">{saved}</span>
        </div>
      </div>
    </button>
  )
}
