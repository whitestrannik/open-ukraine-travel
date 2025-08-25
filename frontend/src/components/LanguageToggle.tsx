import { useState, useRef, useEffect } from 'react'
import { useI18n } from '@/state/i18n'
import { useNavigate, useLocation } from 'react-router-dom'

// Список поддерживаемых языков
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
]

export function LanguageToggle() {
  const { lang, setLang } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  
  const currentLanguage = languages.find(l => l.code === lang) || languages[0]
  
  // Закрыть dropdown при клике вне его
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])
  
  const handleLanguageSelect = (languageCode: string) => {
    setLang(languageCode as any)
    setIsOpen(false)
    
    // Перенаправляем на соответствующую версию страницы для Чернигов и Черновцов
    const currentPath = location.pathname
    
    // Для Чернигов
    if (currentPath === '/explore/gems/chernihiv' || 
        currentPath === '/chernihiv-english-new' || 
        currentPath === '/chernihiv-sp') {
      
      const routes = {
        uk: '/explore/gems/chernihiv',
        en: '/chernihiv-english-new',
        es: '/chernihiv-sp'
      }
      
      const targetRoute = routes[languageCode as keyof typeof routes]
      if (targetRoute && currentPath !== targetRoute) {
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для Черновцов
    if (currentPath === '/explore/gems/chernivtsi' || 
        currentPath === '/chernivtsi-english') {
      
      const routes = {
        uk: '/explore/gems/chernivtsi',
        en: '/chernivtsi-english'
      }
      
      const targetRoute = routes[languageCode as keyof typeof routes]
      if (targetRoute && currentPath !== targetRoute) {
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для Полтава
    if (currentPath === '/explore/gems/poltava' || 
        currentPath === '/poltava-english') {
      
      const routes = {
        uk: '/explore/gems/poltava',
        en: '/poltava-english'
      }
      
      const targetRoute = routes[languageCode as keyof typeof routes]
      if (targetRoute && currentPath !== targetRoute) {
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для Жовква
    if (currentPath === '/explore/gems/zhovkva' || 
        currentPath === '/zhovkva-english') {
      
      const routes = {
        uk: '/explore/gems/zhovkva',
        en: '/zhovkva-english'
      }
      
      const targetRoute = routes[languageCode as keyof typeof routes]
      if (targetRoute && currentPath !== targetRoute) {
        navigate(targetRoute, { replace: true })
      }
    }
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-3 py-2 bg-white/80 hover:bg-white rounded-lg border border-gray-200/50 transition-all duration-200 hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-[#22242A]">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 text-[#22242A] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200/50 backdrop-blur-sm z-50 max-h-[600px] overflow-y-auto">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-[#1F5FA0] hover:text-white transition-colors duration-200 ${
                  lang === language.code ? 'bg-[#1F5FA0] text-white' : 'text-[#22242A]'
                }`}
                onClick={() => handleLanguageSelect(language.code)}
              >
                <span className="text-sm">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
                {lang === language.code && (
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}




