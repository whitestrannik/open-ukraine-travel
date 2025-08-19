import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { LanguageToggle } from './LanguageToggle'
import { useI18n } from '@/state/i18n'

export function Layout() {
  const { t } = useI18n()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  // Dropdown state
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExploreDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])
  
  // Handle scroll to move header synchronously with page scroll


  // Scroll handler for header visibility
  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (header) {
        header.style.transform = `translateY(-${currentScrollY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Handle mouse enter/leave with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsExploreDropdownOpen(true)
  }
  
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExploreDropdownOpen(false)
    }, 150)
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" style={{ willChange: 'transform' }}>
        <div className="flex flex-col px-1 py-4">
          <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 group">
                                        <div className="w-24 h-20 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}ukraine-herb.png.webp`} alt="Ukrainian Coat of Arms" className="h-full w-auto" />
              </div>
                          <span className="font-extrabold text-2xl text-[#08108A] transition-colors duration-300 group-hover:text-[#1F5FA0] flex flex-col -mt-8 -ml-3">
              <span className="text-base font-semibold">Explore</span>
              <span className="text-3xl relative -mt-2"> Ukraine
                <span className="text-base font-semibold absolute -bottom-3 right-0">today</span>
              </span>
            </span>
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 ml-8">
            <div className="flex items-center gap-1">
              {/* Explore Ukraine Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink 
                  to="/explore" 
                  className="font-sans font-semibold text-lg transition-all duration-200 flex items-center justify-center text-center whitespace-nowrap gap-1 py-1 px-1 border-b-2 text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]"
                >
                  <span className="relative z-10">{t('nav.explore')}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isExploreDropdownOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>
                
                {/* Dropdown Menu */}
                {isExploreDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200/50 backdrop-blur-sm z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      <Link 
                        to="/explore/destinations" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#1F5FA0] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.destinations')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">Kyiv, Lviv, Odesa & more</div>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/explore/essential" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#4E7B53] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.essential')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">Travel tips & guides</div>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/explore/gems" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#6A5B8C] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.gems')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">Off the beaten path</div>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/explore/unesco" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#D89B5A] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.unesco')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">World Heritage sites</div>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/explore/regions" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#1F5FA0] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.regions')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">Regional highlights</div>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/explore/jewish" 
                        className="flex items-center px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 group"
                        onClick={() => setIsExploreDropdownOpen(false)}
                      >
                        <div className="w-8 h-8 bg-[#6A5B8C] rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">{t('explore.nav.jewish')}</div>
                          <div className="text-sm text-[#B0B3BA] group-hover:text-white/80">Cultural heritage</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <NavLink 
                to="/entry" 
                className={({ isActive }) => 
                    `font-sans font-semibold text-lg transition-all duration-200 flex items-center justify-center text-center whitespace-nowrap py-1 px-1 border-b-2 ${
                    isActive 
                        ? 'text-[#1F5FA0] border-[#1F5FA0]' 
                        : 'text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]'
                  }`
                }
              >
                <span className="relative z-10">{t('nav.entry')}</span>
              </NavLink>
              
              <NavLink 
                to="/insurance" 
                className={({ isActive }) => 
                    `font-sans font-semibold text-lg transition-all duration-200 flex items-center justify-center text-center whitespace-nowrap py-1 px-1 border-b-2 ${
                    isActive 
                        ? 'text-[#1F5FA0] border-[#1F5FA0]' 
                        : 'text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]'
                  }`
                }
              >
                <span className="relative z-10">{t('nav.insurance')}</span>
              </NavLink>
              
              <NavLink 
                to="/hotels" 
                className={({ isActive }) => 
                    `font-sans font-semibold text-lg transition-all duration-200 flex items-center justify-center text-center whitespace-nowrap py-1 px-1 border-b-2 ${
                    isActive 
                        ? 'text-[#1F5FA0] border-[#1F5FA0]' 
                        : 'text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]'
                  }`
                }
              >
                <span className="relative z-10">{t('nav.hotels')}</span>
              </NavLink>
              
              <NavLink 
                to="/transportation" 
                className={({ isActive }) => 
                    `relative font-sans font-semibold text-lg transition-colors duration-200 flex items-center justify-center text-center whitespace-nowrap py-1 px-1 border-b-2 ${
                    isActive 
                        ? 'text-[#1F5FA0] border-[#1F5FA0]' 
                        : 'text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]'
                  }`
                }
              >
                {t('nav.transportation')}
              </NavLink>
              
              <NavLink 
                to="/mice" 
                className={({ isActive }) => 
                    `relative font-sans font-semibold text-lg transition-colors duration-200 flex items-center justify-center text-center whitespace-nowrap py-1 px-1 border-b-2 ${
                    isActive 
                        ? 'text-[#1F5FA0] border-[#1F5FA0]' 
                        : 'text-[#08108A] border-transparent hover:text-[#1F5FA0] hover:border-[#1F5FA0]'
                  }`
                }
              >
                {t('nav.mice')}
              </NavLink>
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle - More prominent placement */}
            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            

            
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-container md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#22242A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Close header top row */}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-container md:hidden bg-white border-b border-gray-200/50 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Language Toggle for Mobile */}
            <div className="flex justify-center mb-6">
              <LanguageToggle />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link 
                to="/explore" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.explore')}
              </Link>
              
              <Link 
                to="/entry" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.entry')}
              </Link>
              
              <Link 
                to="/insurance" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.insurance')}
              </Link>
              
              <Link 
                to="/hotels" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.hotels')}
              </Link>
              
              <Link 
                to="/transportation" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.transportation')}
              </Link>
              
              <Link 
                to="/mice" 
                className="block px-4 py-3 text-[#22242A] hover:bg-[#1F5FA0] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.mice')}
              </Link>
            </div>
            

          </div>
        </div>
      )}
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer only shown on homepage per PRD */}
      {isHomePage && (
        <footer className="bg-[#22242A] text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-10">
               {/* Left side - Company Info */}
               <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-6">
                   <img src={`${import.meta.env.BASE_URL}ukraine-herb.png.webp`} alt="Ukrainian Coat of Arms" className="h-18 w-auto" />
                  <span className="font-bold text-xl">Explore Ukraine</span>
                </div>
                <p className="text-[#B0B3BA] mb-4">
                  Your trusted guide to discovering the beauty, culture, and resilience of Ukraine.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-[#B0B3BA] hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#B0B3BA] hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#B0B3BA] hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                    </svg>
                  </a>
                </div>
              </div>

               {/* Right side - Menu sections */}
               <div className="lg:w-2/3">
                 {/* First Row - 3 items */}
                 <div className="flex flex-wrap gap-4 mb-10">
                   {/* B2B Services - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.b2b')} 
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li><Link to="/mice" className="hover:text-white transition-colors block py-1">MICE Travel</Link></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Corporate Travel</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Group Tours</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Event Planning</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Business Services</a></li>
                       </ul>
                     </div>
                   </div>

                   {/* Events & Activities - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.eventsActivities')}
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Cultural Festivals</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Music Events</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Art Exhibitions</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Sports Events</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Seasonal Activities</a></li>
                       </ul>
                     </div>
                   </div>

                   {/* FAQs & Help Desk - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.faqsHelp')}
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Travel FAQs</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Safety Information</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Contact Support</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Live Chat</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Help Center</a></li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 {/* Second Row - 3 items */}
                 <div className="flex flex-wrap gap-4">
                   {/* News & Updates - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.newsUpdates')}
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Latest News</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Travel Updates</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Safety Alerts</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Tourism News</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Press Releases</a></li>
                       </ul>
                     </div>
                   </div>

                   {/* Useful Governmental Address Book - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.governmentAddresses')}
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li><a href="#" className="hover:text-white transition-colors block py-1">{t('footer.ministryOfTourism')}</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">{t('footer.borderGuardService')}</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">{t('footer.consularServices')}</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">{t('footer.safetyUpdates')}</a></li>
                         <li><a href="#" className="hover:text-white transition-colors block py-1">Local Authorities</a></li>
                </ul>
                     </div>
              </div>

                   {/* Emergency Contacts - Hover Expandable */}
                   <div className="group relative min-w-[200px]">
                     <h3 className="font-semibold text-lg cursor-pointer group-hover:text-white transition-colors whitespace-nowrap">
                       {t('footer.emergencyContacts')}
                       <span className="ml-2 text-sm opacity-60 group-hover:opacity-100">→</span>
                     </h3>
                     <div className="absolute top-8 left-0 bg-[#1a1a2e] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-48 p-4">
                       <ul className="space-y-2 text-[#B0B3BA]">
                         <li>
                           <div className="font-medium text-white">{t('footer.touristHotline')}</div>
                           <div className="text-sm">+380 44 123 4567</div>
                  </li>
                  <li>
                           <div className="font-medium text-white">{t('footer.emergencyServices')}</div>
                           <div className="text-sm">112</div>
                  </li>
                  <li>
                           <div className="font-medium text-white">{t('footer.embassySupport')}</div>
                           <div className="text-sm">embassy@ukraine.gov.ua</div>
                  </li>
                </ul>
              </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#B0B3BA]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-[#B0B3BA] text-sm">
                © {new Date().getFullYear()} Explore Ukraine. All rights reserved.
              </div>
              <div className="flex gap-6 mt-4 md:mt-0 text-sm text-[#B0B3BA]">
                <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}




