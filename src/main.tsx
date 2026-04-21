import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { ServicesHub } from './pages/ServicesHub'
import { ServicePage } from './pages/ServicePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><ServicesHub /></Layout>} />
        <Route path="/services/:slug" element={<Layout><ServicePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
