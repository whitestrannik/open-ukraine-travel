import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

// Карта маршрутов для разных языков
const languageRoutes: Record<string, Record<string, string>> = {
  chernihiv: {
    uk: '/explore/gems/chernihiv',
    en: '/chernihiv-english-new',
    es: '/chernihiv-sp'
  },
  chernivtsi: {
    uk: '/explore/gems/chernivtsi',
    en: '/chernivtsi-english'
  },
  poltava: {
    uk: '/explore/gems/poltava',
    en: '/poltava-english'
  },
  zhovkva: {
    uk: '/explore/gems/zhovkva',
    en: '/zhovkva-english'
  }
  // Можно добавить другие города здесь
}

export function useLanguageRedirect() {
  const { lang } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Проверяем, находимся ли мы на странице, которая поддерживает переключение языков
    const currentPath = location.pathname
    
    // Для страницы Чернигов
    if (currentPath === '/explore/gems/chernihiv' || 
        currentPath === '/chernihiv-english-new' || 
        currentPath === '/chernihiv-sp') {
      
      const targetRoute = languageRoutes.chernihiv[lang]
      
      // Если текущий маршрут не соответствует выбранному языку, перенаправляем
      if (targetRoute && currentPath !== targetRoute) {
        console.log(`Redirecting from ${currentPath} to ${targetRoute} for language ${lang}`)
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для страницы Черновцов
    if (currentPath === '/explore/gems/chernivtsi' || 
        currentPath === '/chernivtsi-english') {
      
      const targetRoute = languageRoutes.chernivtsi[lang]
      
      // Если текущий маршрут не соответствует выбранному языку, перенаправляем
      if (targetRoute && currentPath !== targetRoute) {
        console.log(`Redirecting from ${currentPath} to ${targetRoute} for language ${lang}`)
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для страницы Полтава
    if (currentPath === '/explore/gems/poltava' || 
        currentPath === '/poltava-english') {
      
      const targetRoute = languageRoutes.poltava[lang]
      
      // Если текущий маршрут не соответствует выбранному языку, перенаправляем
      if (targetRoute && currentPath !== targetRoute) {
        console.log(`Redirecting from ${currentPath} to ${targetRoute} for language ${lang}`)
        navigate(targetRoute, { replace: true })
      }
    }
    
    // Для страницы Жовква
    if (currentPath === '/explore/gems/zhovkva' || 
        currentPath === '/zhovkva-english') {
      
      const targetRoute = languageRoutes.zhovkva[lang]
      
      // Если текущий маршрут не соответствует выбранному языку, перенаправляем
      if (targetRoute && currentPath !== targetRoute) {
        console.log(`Redirecting from ${currentPath} to ${targetRoute} for language ${lang}`)
        navigate(targetRoute, { replace: true })
      }
    }
  }, [lang, location.pathname, navigate])
}
