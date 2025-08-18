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
import EssentialInfo from '@/pages/EssentialInfo'
import HiddenGems from '@/pages/HiddenGems'
import UnescoSites from '@/pages/UnescoSites'
import ByRegions from '@/pages/ByRegions'
import JewishUkraine from '@/pages/JewishUkraine'
import NewsArticle from '@/pages/NewsArticle'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/open-ukraine-travel' : '/'}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/destinations" element={<TopDestinations />} />
            <Route path="/explore/essential" element={<EssentialInfo />} />
            <Route path="/explore/gems" element={<HiddenGems />} />
            <Route path="/explore/unesco" element={<UnescoSites />} />
            <Route path="/explore/regions" element={<ByRegions />} />
            <Route path="/explore/jewish" element={<JewishUkraine />} />
            <Route path="/cities/kyiv" element={<Kyiv />} />
            <Route path="/cities/lviv" element={<Lviv />} />
            <Route path="/cities/odesa" element={<Odesa />} />
            <Route path="/cities/carpathians" element={<Carpathians />} />
            <Route path="/cities/chernobyl" element={<Chernobyl />} />
            <Route path="/cities/chernivtsi" element={<Chernivtsi />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
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

