import { useState } from 'react'
import Onboarding from './pages/Onboarding'
import Wishlist from './pages/Wishlist'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'

type Page = 'onboarding' | 'wishlist' | 'detail' | 'search'

export default function App() {
  const [page, setPage] = useState<Page>('onboarding')

  const goTo = (p: Page) => setPage(p)

  return (
    <div className="app-shell">
      {page === 'onboarding' && (
        <Onboarding onStart={() => goTo('wishlist')} />
      )}
      {page === 'wishlist' && (
        <Wishlist
          onProductClick={() => goTo('detail')}
          onSearchClick={() => goTo('search')}
        />
      )}
      {page === 'detail' && (
        <ProductDetail onBack={() => goTo('wishlist')} onSearchClick={() => goTo('search')} />
      )}
      {page === 'search' && (
        <Search
          onBack={() => goTo('wishlist')}
          onProductClick={() => goTo('detail')}
        />
      )}
    </div>
  )
}
