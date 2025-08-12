import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { I18nProvider } from '@/state/i18n'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import Explore from '@/pages/Explore'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/entry" element={<div className="p-6">Entry Requirements – placeholder</div>} />
            <Route path="/insurance" element={<div className="p-6">Insurance – placeholder</div>} />
            <Route path="/hotels" element={<div className="p-6">Hotels – placeholder</div>} />
            <Route path="/transportation" element={<div className="p-6">Transportation – placeholder</div>} />
            <Route path="/mice" element={<div className="p-6">MICE – placeholder</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>,
)
