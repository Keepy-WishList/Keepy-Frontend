import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import Wishlist from './pages/Wishlist'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/home" element={<Wishlist />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
