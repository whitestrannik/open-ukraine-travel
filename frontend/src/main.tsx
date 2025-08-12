import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { I18nProvider } from '@/state/i18n'
import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import Explore from '@/pages/Explore'
import TopDestinations from '@/pages/TopDestinations'
import Kyiv from '@/pages/cities/Kyiv'
import Lviv from '@/pages/cities/Lviv'
import Odesa from '@/pages/cities/Odesa'
import Carpathians from '@/pages/cities/Carpathians'
import Chernobyl from '@/pages/cities/Chernobyl'
import Chernivtsi from '@/pages/cities/Chernivtsi'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/destinations" element={<TopDestinations />} />
            <Route path="/explore/essential" element={<div className="p-6">Essential Information – placeholder</div>} />
            <Route path="/explore/gems" element={<div className="p-6">Hidden Gems – placeholder</div>} />
            <Route path="/explore/unesco" element={<div className="p-6">UNESCO Sites – placeholder</div>} />
            <Route path="/explore/regions" element={<div className="p-6">By Regions – placeholder</div>} />
            <Route path="/explore/jewish" element={<div className="p-6">Jewish Ukraine – placeholder</div>} />
            <Route path="/cities/kyiv" element={<Kyiv />} />
            <Route path="/cities/lviv" element={<Lviv />} />
            <Route path="/cities/odesa" element={<Odesa />} />
            <Route path="/cities/carpathians" element={<Carpathians />} />
            <Route path="/cities/chernobyl" element={<Chernobyl />} />
            <Route path="/cities/chernivtsi" element={<Chernivtsi />} />
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
