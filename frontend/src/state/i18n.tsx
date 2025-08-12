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
    
    // Navigation
    'nav.home': 'Home',
    
    // Top Destinations Page
    'destinations.hero.title': 'Top Destinations in Ukraine',
    'destinations.hero.subtitle': 'Discover the most captivating cities and regions that showcase Ukraine\'s rich heritage, stunning landscapes, and vibrant culture',
    'destinations.hero.breadcrumb': 'Top Destinations',
    
    'explore.nav.title': 'Explore Ukraine',
    'explore.nav.destinations': 'Top Destinations',
    'explore.nav.essential': 'Essential Info',
    'explore.nav.gems': 'Hidden Gems',
    'explore.nav.unesco': 'UNESCO Sites',
    'explore.nav.regions': 'By Regions',
    'explore.nav.jewish': 'Jewish Ukraine',
    
    'destinations.grid.title': 'Must-Visit Destinations',
    'destinations.grid.subtitle': 'From historic capitals to pristine mountains, each destination offers unique experiences and unforgettable memories',
    
    'destinations.categories.capital': 'Capital City',
    'destinations.categories.cultural': 'Cultural Hub',
    'destinations.categories.coastal': 'Coastal City',
    'destinations.categories.nature': 'Nature',
    'destinations.categories.historical': 'Historical Site',
    'destinations.categories.architectural': 'Architecture',
    
    'destinations.kyiv.name': 'Kyiv',
    'destinations.kyiv.description': 'The vibrant capital city where ancient history meets modern resilience. Explore golden-domed churches, bustling squares, and world-class museums.',
    'destinations.kyiv.features': 'St. Sophia\'s Cathedral, Independence Square, Golden Gate, Kyiv Pechersk Lavra',
    
    'destinations.lviv.name': 'Lviv',
    'destinations.lviv.description': 'A UNESCO World Heritage jewel with cobblestone streets, baroque architecture, and the best coffee culture in Eastern Europe.',
    'destinations.lviv.features': 'Old Town Square, Lviv Opera House, High Castle Hill, Coffee Museums',
    
    'destinations.odesa.name': 'Odesa',
    'destinations.odesa.description': 'The pearl of the Black Sea with stunning beaches, legendary Potemkin Stairs, and a vibrant nightlife scene.',
    'destinations.odesa.features': 'Potemkin Stairs, Odesa Opera House, Arcadia Beach, City Garden',
    
    'destinations.carpathians.name': 'Carpathians',
    'destinations.carpathians.description': 'Majestic mountain range offering pristine nature, traditional villages, and year-round outdoor adventures.',
    'destinations.carpathians.features': 'Hoverla Peak, Synevyr Lake, Wooden Churches, Ski Resorts',
    
    'destinations.chernobyl.name': 'Chernobyl',
    'destinations.chernobyl.description': 'A powerful historical site offering guided tours through the exclusion zone and abandoned city of Pripyat.',
    'destinations.chernobyl.features': 'Exclusion Zone Tours, Pripyat Ghost Town, Reactor 4, Memorial Sites',
    
    'destinations.chernivtsi.name': 'Chernivtsi',
    'destinations.chernivtsi.description': 'Known as "Little Vienna" for its stunning Austro-Hungarian architecture and the famous Chernivtsi University.',
    'destinations.chernivtsi.features': 'University Building, Central Square, Olha Kobylianska Street, Rose Valley',
    
    'destinations.card.explore': 'Explore Destination',
    
    'destinations.why.title': 'Why Visit Ukraine?',
    'destinations.why.subtitle': 'Discover what makes Ukraine a unique and compelling travel destination',
    'destinations.why.history.title': 'Rich Historical Heritage',
    'destinations.why.history.description': 'Over 1,000 years of history with ancient castles, medieval towns, and UNESCO World Heritage sites',
    'destinations.why.nature.title': 'Breathtaking Natural Beauty',
    'destinations.why.nature.description': 'From Carpathian mountains to Black Sea beaches, Ukraine offers diverse and stunning landscapes',
    'destinations.why.culture.title': 'Vibrant Culture & Traditions',
    'destinations.why.culture.description': 'Experience authentic folk traditions, world-class cuisine, and warm hospitality',
    
    'destinations.cta.title': 'Ready to Explore Ukraine?',
    'destinations.cta.subtitle': 'Start planning your Ukrainian adventure with travel insurance and accommodation',
    'destinations.cta.insurance': 'Get Travel Insurance',
    'destinations.cta.hotels': 'Find Hotels',
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
    
    // Navigation
    'nav.home': 'Головна',
    
    // Top Destinations Page
    'destinations.hero.title': 'Топ напрямки України',
    'destinations.hero.subtitle': 'Відкрийте найчарівніші міста та регіони, що демонструють багату спадщину, приголомшливі пейзажі та яскраву культуру України',
    'destinations.hero.breadcrumb': 'Топ напрямки',
    
    'explore.nav.title': 'Досліджуй Україну',
    'explore.nav.destinations': 'Топ напрямки',
    'explore.nav.essential': 'Основна інформація',
    'explore.nav.gems': 'Приховані перлини',
    'explore.nav.unesco': 'Об\'єкти ЮНЕСКО',
    'explore.nav.regions': 'За регіонами',
    'explore.nav.jewish': 'Єврейська Україна',
    
    'destinations.grid.title': 'Обов\'язкові до відвідування місця',
    'destinations.grid.subtitle': 'Від історичних столиць до незайманих гір, кожен напрямок пропонує унікальні враження та незабутні спогади',
    
    'destinations.categories.capital': 'Столиця',
    'destinations.categories.cultural': 'Культурний центр',
    'destinations.categories.coastal': 'Приморське місто',
    'destinations.categories.nature': 'Природа',
    'destinations.categories.historical': 'Історичне місце',
    'destinations.categories.architectural': 'Архітектура',
    
    'destinations.kyiv.name': 'Київ',
    'destinations.kyiv.description': 'Жвава столиця, де стародавня історія зустрічається з сучасною стійкістю. Досліджуйте золотокуполі церкви, жваві площі та музеї світового класу.',
    'destinations.kyiv.features': 'Софійський собор, Майдан Незалежності, Золоті ворота, Києво-Печерська лавра',
    
    'destinations.lviv.name': 'Львів',
    'destinations.lviv.description': 'Перлина ЮНЕСКО з бруківкою, барокковою архітектурою та найкращою кавовою культурою у Східній Європі.',
    'destinations.lviv.features': 'Площа Ринок, Львівський оперний театр, Високий замок, Музеї кави',
    
    'destinations.odesa.name': 'Одеса',
    'destinations.odesa.description': 'Перлина Чорного моря з приголомшливими пляжами, легендарними Потьомкінськими сходами та яскравим нічним життям.',
    'destinations.odesa.features': 'Потьомкінські сходи, Одеський оперний театр, пляж Аркадія, Міський сад',
    
    'destinations.carpathians.name': 'Карпати',
    'destinations.carpathians.description': 'Величний гірський хребет з незайманою природою, традиційними селами та цілорічними пригодами на природі.',
    'destinations.carpathians.features': 'Говерла, озеро Синевир, дерев\'яні церкви, гірськолижні курорти',
    
    'destinations.chernobyl.name': 'Чорнобиль',
    'destinations.chernobyl.description': 'Потужне історичне місце з екскурсіями зоною відчуження та покинутим містом Прип\'ять.',
    'destinations.chernobyl.features': 'Зона відчуження, місто-привид Прип\'ять, реактор 4, меморіальні місця',
    
    'destinations.chernivtsi.name': 'Чернівці',
    'destinations.chernivtsi.description': 'Відомі як "Маленька Відень" завдяки приголомшливій австро-угорській архітектурі та знаменитому Чернівецькому університету.',
    'destinations.chernivtsi.features': 'Будівля університету, Центральна площа, вулиця Кобилянської, Долина троянд',
    
    'destinations.card.explore': 'Дослідити напрямок',
    
    'destinations.why.title': 'Чому варто відвідати Україну?',
    'destinations.why.subtitle': 'Відкрийте, що робить Україну унікальним та привабливим туристичним напрямком',
    'destinations.why.history.title': 'Багата історична спадщина',
    'destinations.why.history.description': 'Понад 1000 років історії зі стародавніми замками, середньовічними містами та об\'єктами Всесвітньої спадщини ЮНЕСКО',
    'destinations.why.nature.title': 'Захоплююча природна краса',
    'destinations.why.nature.description': 'Від Карпатських гір до пляжів Чорного моря - Україна пропонує різноманітні та приголомшливі пейзажі',
    'destinations.why.culture.title': 'Яскрава культура та традиції',
    'destinations.why.culture.description': 'Відчуйте автентичні народні традиції, кухню світового класу та теплу гостинність',
    
    'destinations.cta.title': 'Готові досліджувати Україну?',
    'destinations.cta.subtitle': 'Почніть планувати свою українську пригоду зі страхуванням подорожей та розміщенням',
    'destinations.cta.insurance': 'Оформити страховку',
    'destinations.cta.hotels': 'Знайти готелі',
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



