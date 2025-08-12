import { Link, NavLink, Outlet } from 'react-router-dom'
import { LanguageToggle } from './LanguageToggle'
import { useI18n } from '@/state/i18n'

export function Layout() {
  const { t } = useI18n()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <Link to="/explore" className="font-bold">Open Ukraine</Link>
          <nav className="flex items-center gap-4">
            <NavLink to="/explore" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.explore')}
            </NavLink>
            <NavLink to="/entry" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.entry')}
            </NavLink>
            <NavLink to="/insurance" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.insurance')}
            </NavLink>
            <NavLink to="/hotels" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.hotels')}
            </NavLink>
            <NavLink to="/transportation" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.transportation')}
            </NavLink>
            <NavLink to="/mice" className={({ isActive }) => isActive ? 'underline' : ''}>
              {t('nav.mice')}
            </NavLink>
          </nav>
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t p-4 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Open Ukraine</footer>
    </div>
  )
}



