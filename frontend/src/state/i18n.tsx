import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Language = 'en' | 'uk'

type I18nContextValue = {
  lang: Language
  setLang: (l: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const dictionaries: Record<Language, Record<string, string>> = {
  en: {
    'nav.explore': 'Explore',
    'nav.entry': 'Entry',
    'nav.insurance': 'Insurance',
    'nav.hotels': 'Hotels',
    'nav.transportation': 'Transportation',
    'nav.mice': 'MICE',
    'explore.title': 'Explore Ukraine',
    
    // Home Page
    'home.hero.title': 'Discover Ukraine',
    'home.hero.subtitle': 'Experience the resilient beauty of a nation reborn',
    'home.hero.cta.explore': 'Explore Destinations',
    'home.hero.cta.insurance': 'Get Insurance',
    
    // Quick Actions
    'home.quickActions.title': 'Plan Your Perfect Trip',
    'home.quickActions.insurance.title': 'Travel Insurance',
    'home.quickActions.insurance.description': 'Secure coverage required for entry to Ukraine',
    'home.quickActions.hotels.title': 'Find Hotels',
    'home.quickActions.hotels.description': 'Book verified accommodations across Ukraine',
    'home.quickActions.entry.title': 'Entry Requirements',
    'home.quickActions.entry.description': 'Check visa and documentation needs',
    'home.quickActions.transportation.title': 'Transportation',
    'home.quickActions.transportation.description': 'Plan your journey to and within Ukraine',
    
    // Destinations
    'home.destinations.title': 'Ukraine\'s Must-See Destinations',
    'home.destinations.subtitle': 'From historic cities to breathtaking landscapes, discover the beauty that awaits',
    'home.destinations.kyiv.title': 'Kyiv',
    'home.destinations.kyiv.description': 'The vibrant capital blending ancient history with modern resilience',
    'home.destinations.lviv.title': 'Lviv',
    'home.destinations.lviv.description': 'UNESCO World Heritage city with stunning architecture and rich culture',
    'home.destinations.carpathians.title': 'Carpathians',
    'home.destinations.carpathians.description': 'Majestic mountains offering pristine nature and adventure',
    'home.destinations.explore': 'Explore',
    'home.destinations.viewAll': 'View All Destinations',
    
    // Safety & Trust
    'home.safety.title': 'Travel with Confidence',
    'home.safety.subtitle': 'Ukraine is open and safe for tourism with comprehensive support systems in place',
    'home.safety.government.title': 'Government Partnership',
    'home.safety.government.description': 'Official collaboration with Ukrainian tourism authorities',
    'home.safety.updates.title': 'Real-time Updates',
    'home.safety.updates.description': 'Current safety information and travel advisories',
    'home.safety.support.title': '24/7 Tourist Support',
    'home.safety.support.description': 'Multilingual assistance for all travelers',
    
    // Experiences
    'home.experiences.title': 'Discover Your Ukraine',
    'home.experiences.subtitle': 'Choose your adventure from our curated experiences',
    'home.experiences.cultural.title': 'Cultural Heritage',
    'home.experiences.cultural.description': 'Ancient castles, historic sites, and UNESCO treasures',
    'home.experiences.nature.title': 'Nature & Parks',
    'home.experiences.nature.description': 'National parks, pristine forests, and natural wonders',
    'home.experiences.food.title': 'Food & Wine',
    'home.experiences.food.description': 'Traditional cuisine and emerging wine regions',
    'home.experiences.events.title': 'Events & Festivals',
    'home.experiences.events.description': 'Cultural celebrations and vibrant local events',
    
    // Latest Updates
    'home.updates.title': 'Latest News & Updates',
    'home.updates.subtitle': 'Stay informed with the latest travel advisories, safety updates, and tourism news',
    'home.updates.news1.title': 'New Tourist Routes Open in Western Ukraine',
    'home.updates.news1.description': 'Explore newly accessible destinations in Lviv and Transcarpathia regions with enhanced safety measures.',
    'home.updates.news2.title': 'Enhanced Safety Protocols for Travelers',
    'home.updates.news2.description': 'Updated security measures and emergency response systems now in place across major tourist destinations.',
    'home.updates.news3.title': 'Spring Festival Season Begins',
    'home.updates.news3.description': 'Join vibrant cultural celebrations and traditional festivals starting this spring across Ukraine.',
    'home.updates.readMore': 'Read More',
    'home.updates.viewAll': 'View All Updates',

    // Insurance Highlight
    'home.insurance.title': 'Travel with Peace of Mind',
    'home.insurance.subtitle': 'Comprehensive travel insurance designed specifically for Ukraine visitors',
    'home.insurance.coverage': 'Medical Coverage',
    'home.insurance.support': 'Emergency Support',
    'home.insurance.price': 'Starting from',
    'home.insurance.cta': 'Get Insured Now',
  },
  uk: {
    'nav.explore': 'Досліджуй',
    'nav.entry': "В'їзд",
    'nav.insurance': 'Страхування',
    'nav.hotels': 'Готелі',
    'nav.transportation': 'Транспорт',
    'nav.mice': 'MICE',
    'explore.title': 'Відкрий Україну',
    
    // Home Page
    'home.hero.title': 'Відкрий Україну',
    'home.hero.subtitle': 'Відчуй стійку красу відродженої нації',
    'home.hero.cta.explore': 'Дослідити напрямки',
    'home.hero.cta.insurance': 'Оформити страховку',
    
    // Quick Actions
    'home.quickActions.title': 'Сплануй ідеальну подорож',
    'home.quickActions.insurance.title': 'Туристичне страхування',
    'home.quickActions.insurance.description': "Обов'язкове покриття для в'їзду в Україну",
    'home.quickActions.hotels.title': 'Знайти готелі',
    'home.quickActions.hotels.description': 'Забронювати перевірені готелі по всій Україні',
    'home.quickActions.entry.title': "Вимоги для в'їзду",
    'home.quickActions.entry.description': 'Перевірити візові та документальні вимоги',
    'home.quickActions.transportation.title': 'Транспорт',
    'home.quickActions.transportation.description': 'Сплануйте поїздку до та по Україні',
    
    // Destinations
    'home.destinations.title': "Обов'язкові до відвідування місця України",
    'home.destinations.subtitle': 'Від історичних міст до захоплюючих пейзажів - відкрий красу, що чекає на тебе',
    'home.destinations.kyiv.title': 'Київ',
    'home.destinations.kyiv.description': 'Жвава столиця, що поєднує стародавню історію з сучасною стійкістю',
    'home.destinations.lviv.title': 'Львів',
    'home.destinations.lviv.description': 'Місто Всесвітньої спадщини ЮНЕСКО з чудовою архітектурою та багатою культурою',
    'home.destinations.carpathians.title': 'Карпати',
    'home.destinations.carpathians.description': 'Величні гори з незайманою природою та пригодами',
    'home.destinations.explore': 'Дослідити',
    'home.destinations.viewAll': 'Переглянути всі напрямки',
    
    // Safety & Trust
    'home.safety.title': 'Подорожуй з упевненістю',
    'home.safety.subtitle': 'Україна відкрита і безпечна для туризму з комплексними системами підтримки',
    'home.safety.government.title': 'Партнерство з урядом',
    'home.safety.government.description': 'Офіційна співпраця з українськими туристичними органами',
    'home.safety.updates.title': 'Оновлення в реальному часі',
    'home.safety.updates.description': 'Актуальна інформація про безпеку та туристичні поради',
    'home.safety.support.title': 'Підтримка туристів 24/7',
    'home.safety.support.description': 'Багатомовна допомога для всіх мандрівників',
    
    // Experiences
    'home.experiences.title': 'Відкрий свою Україну',
    'home.experiences.subtitle': 'Обери свою пригоду з наших кураторських досвідів',
    'home.experiences.cultural.title': 'Культурна спадщина',
    'home.experiences.cultural.description': "Стародавні замки, історичні пам'ятки та скарби ЮНЕСКО",
    'home.experiences.nature.title': 'Природа і парки',
    'home.experiences.nature.description': 'Національні парки, незаймані ліси та природні дива',
    'home.experiences.food.title': 'Їжа і вино',
    'home.experiences.food.description': 'Традиційна кухня та винні регіони, що розвиваються',
    'home.experiences.events.title': 'Події та фестивалі',
    'home.experiences.events.description': 'Культурні святкування та яскраві місцеві події',
    
    // Latest Updates
    'home.updates.title': 'Останні новини та оновлення',
    'home.updates.subtitle': 'Залишайтеся в курсі останніх туристичних порад, оновлень безпеки та новин туризму',
    'home.updates.news1.title': 'Нові туристичні маршрути відкриті в Західній Україні',
    'home.updates.news1.description': 'Досліджуйте нові доступні напрямки у Львівській та Закарпатській областях з посиленими заходами безпеки.',
    'home.updates.news2.title': 'Посилені протоколи безпеки для мандрівників',
    'home.updates.news2.description': 'Оновлені заходи безпеки та системи екстреного реагування тепер діють у всіх основних туристичних місцях.',
    'home.updates.news3.title': 'Починається весняний фестивальний сезон',
    'home.updates.news3.description': 'Приєднуйтесь до яскравих культурних святкувань та традиційних фестивалів цієї весни по всій Україні.',
    'home.updates.readMore': 'Читати далі',
    'home.updates.viewAll': 'Переглянути всі оновлення',

    // Insurance Highlight
    'home.insurance.title': 'Подорожуй зі спокоєм',
    'home.insurance.subtitle': 'Комплексне туристичне страхування, розроблене спеціально для відвідувачів України',
    'home.insurance.coverage': 'Медичне покриття',
    'home.insurance.support': 'Екстрена підтримка',
    'home.insurance.price': 'Від',
    'home.insurance.cta': 'Оформити страховку',
  },
}

function detectInitialLang(): Language {
  const url = new URL(window.location.href)
  const query = url.searchParams.get('lang')
  if (query === 'uk') return 'uk'
  const stored = localStorage.getItem('lang') as Language | null
  if (stored === 'uk') return 'uk'
  const browser = navigator.language?.toLowerCase()
  if (browser?.startsWith('uk')) return 'uk'
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLang())

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Language) => {
    localStorage.setItem('lang', l)
    setLangState(l)
  }

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>) => {
      const dict = { ...dictionaries.en, ...dictionaries[lang] }
      let text = dict[key] ?? `⟦${key}⟧`
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(new RegExp(`{${k}}`, 'g'), String(v))
        }
      }
      return text
    }
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}



