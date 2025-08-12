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
    
    // Explore Hub Page
    'explore.hero.title': 'Discover Ukraine',
    'explore.hero.subtitle': 'From ancient capitals to pristine mountains, from UNESCO heritage sites to hidden gems - explore the diverse beauty and rich culture of Ukraine',
    'explore.hero.cta.destinations': 'Explore Destinations',
    'explore.hero.cta.essential': 'Essential Information',
    
    'explore.stats.title': 'Ukraine at a Glance',
    'explore.stats.subtitle': 'Discover the numbers that showcase Ukraine\'s rich heritage and diverse landscape',
    'explore.stats.unesco': 'UNESCO Sites',
    'explore.stats.regions': 'Regions',
    'explore.stats.cities': 'Cities & Towns',
    'explore.stats.history': 'Years of History',
    
    'explore.sections.title': 'What Would You Like to Explore?',
    'explore.sections.subtitle': 'Choose your adventure and discover Ukraine through different lenses',
    'explore.sections.explore': 'Explore Section',
    
    'explore.sections.destinations.title': 'Top Destinations',
    'explore.sections.destinations.description': 'Discover Ukraine\'s most captivating cities and regions, from vibrant Kyiv to historic Lviv, coastal Odesa to the majestic Carpathians',
    
    'explore.sections.essential.title': 'Essential Information',
    'explore.sections.essential.description': 'Everything you need to know for a safe and enjoyable trip - travel tips, safety guidelines, currency, weather, and practical advice',
    
    'explore.sections.gems.title': 'Hidden Gems',
    'explore.sections.gems.description': 'Off the beaten path destinations that showcase Ukraine\'s authentic beauty - from charming villages to secret natural wonders',
    
    'explore.sections.unesco.title': 'UNESCO World Heritage',
    'explore.sections.unesco.description': 'Explore Ukraine\'s 7 UNESCO World Heritage Sites, from ancient churches to historic city centers that tell the story of our civilization',
    
    'explore.sections.regions.title': 'Explore by Regions',
    'explore.sections.regions.description': 'Discover Ukraine\'s 24 diverse regions, each with unique traditions, landscapes, and cultural treasures waiting to be explored',
    
    'explore.sections.jewish.title': 'Jewish Ukraine',
    'explore.sections.jewish.description': 'Journey through Ukraine\'s rich Jewish heritage, from historic synagogues to cultural centers that preserve centuries of tradition',
    
    'explore.cta.title': 'Ready to Start Your Ukrainian Adventure?',
    'explore.cta.subtitle': 'Get prepared with travel insurance and find the perfect accommodation for your journey',
    'explore.cta.insurance': 'Get Travel Insurance',
    'explore.cta.hotels': 'Find Hotels',
    
    // City Pages - Categories
    'cities.categories.unesco': 'UNESCO Site',
    'cities.categories.religious': 'Religious Site',
    'cities.categories.square': 'Historic Square',
    'cities.categories.historical': 'Historical Monument',
    'cities.categories.cultural': 'Cultural Site',
    'cities.categories.museum': 'Museum',
    
    // Kyiv City Page
    'cities.kyiv.name': 'Kyiv',
    'cities.kyiv.hero.title': 'Kyiv - Heart of Ukraine',
    'cities.kyiv.hero.subtitle': 'Discover the vibrant capital where ancient history meets modern resilience, golden domes rise above bustling squares, and every street tells a story of triumph',
    'cities.kyiv.hero.cta.plan': 'Plan Your Visit',
    'cities.kyiv.hero.cta.guide': 'Download Guide',
    
    'cities.kyiv.facts.title': 'Kyiv at a Glance',
    'cities.kyiv.facts.population.value': '2.9M',
    'cities.kyiv.facts.population.label': 'Population',
    'cities.kyiv.facts.founded.value': '482 AD',
    'cities.kyiv.facts.founded.label': 'Founded',
    'cities.kyiv.facts.unesco.value': '2',
    'cities.kyiv.facts.unesco.label': 'UNESCO Sites',
    'cities.kyiv.facts.area.value': '847 km²',
    'cities.kyiv.facts.area.label': 'Area',
    
    'cities.kyiv.attractions.title': 'Must-See Attractions',
    'cities.kyiv.attractions.subtitle': 'Explore Kyiv\'s most iconic landmarks and hidden treasures',
    'cities.kyiv.attractions.learn': 'Learn More',
    
    'cities.kyiv.attractions.sophia.name': 'St. Sophia\'s Cathedral',
    'cities.kyiv.attractions.sophia.description': 'UNESCO World Heritage site with stunning Byzantine architecture and ancient mosaics from the 11th century',
    
    'cities.kyiv.attractions.lavra.name': 'Kyiv Pechersk Lavra',
    'cities.kyiv.attractions.lavra.description': 'Historic Orthodox Christian monastery complex with underground cave systems and golden domes',
    
    'cities.kyiv.attractions.independence.name': 'Independence Square',
    'cities.kyiv.attractions.independence.description': 'The heart of modern Ukraine, witness to historic events and vibrant city life',
    
    'cities.kyiv.attractions.golden-gate.name': 'Golden Gate',
    'cities.kyiv.attractions.golden-gate.description': 'Reconstructed ancient fortified gateway that once protected medieval Kyiv',
    
    'cities.kyiv.attractions.andrew.name': 'St. Andrew\'s Church',
    'cities.kyiv.attractions.andrew.description': 'Baroque masterpiece designed by Italian architect Bartolomeo Rastrelli',
    
    'cities.kyiv.attractions.museum.name': 'National Art Museum',
    'cities.kyiv.attractions.museum.description': 'Premier collection of Ukrainian art from medieval icons to contemporary works',
    
    'cities.kyiv.overview.title': 'Discover Kyiv',
    'cities.kyiv.overview.subtitle': 'Explore the rich tapestry of Ukraine\'s capital - where ancient traditions meet modern innovation',
    
    'cities.kyiv.overview.about.title': 'The Heart of Ukraine',
    'cities.kyiv.overview.about.description1': 'Kyiv stands as one of Europe\'s oldest cities, with over 1,500 years of continuous history. As Ukraine\'s political, economic, and cultural center, it seamlessly blends its ancient heritage with modern dynamism.',
    'cities.kyiv.overview.about.description2': 'The city stretches along both banks of the Dnipro River, with its historic center perched on rolling hills dotted with golden-domed churches, tree-lined boulevards, and vibrant neighborhoods that each tell their own story.',
    
    'cities.kyiv.overview.culture.title': 'Cultural Capital',
    'cities.kyiv.overview.culture.description': 'Kyiv is the undisputed cultural heart of Ukraine, home to world-class museums, theaters, and galleries. The city pulses with creativity, from traditional folk performances to cutting-edge contemporary art.',
    'cities.kyiv.overview.culture.highlights': 'Opera & Ballet, Contemporary Art, Folk Traditions, Literary Heritage, Music Festivals, Culinary Scene',
    
    'cities.kyiv.overview.images.modern': 'Modern Kyiv skyline along the Dnipro River',
    'cities.kyiv.overview.images.architecture': 'Historic architecture in the city center',
    'cities.kyiv.overview.images.riverside': 'Scenic riverside parks and walkways',
    
    'cities.kyiv.history.title': 'A Journey Through Time',
    'cities.kyiv.history.founding.title': 'Ancient Founding',
    'cities.kyiv.history.founding.description': 'Legend tells of three brothers - Kyi, Shchek, and Khoryv - who founded the city on the hills above the Dnipro River. Archaeological evidence confirms continuous settlement since the 5th century.',
    
    'cities.kyiv.history.golden.title': 'Golden Age of Kyivan Rus\'',
    'cities.kyiv.history.golden.description': 'Kyiv became the capital of the powerful Kyivan Rus\' state, rivaling Constantinople and Baghdad. St. Sophia\'s Cathedral and other architectural marvels were built during this prosperous era.',
    
    'cities.kyiv.history.soviet.title': 'Soviet Era & Resilience',
    'cities.kyiv.history.soviet.description': 'Through Soviet rule, World War II devastation, and reconstruction, Kyiv demonstrated remarkable resilience. The city became a major industrial and educational center of the USSR.',
    
    'cities.kyiv.history.modern.title': 'Independent Ukraine\'s Capital',
    'cities.kyiv.history.modern.description': 'Since Ukraine\'s independence, Kyiv has flourished as a European capital, playing host to historic events like the Orange Revolution and the Revolution of Dignity, cementing its role as a beacon of democracy.',
    
    'cities.kyiv.districts.title': 'Explore Kyiv\'s Districts',
    'cities.kyiv.districts.subtitle': 'Each district offers unique character, attractions, and experiences',
    
    'cities.kyiv.districts.podil.name': 'Podil District',
    'cities.kyiv.districts.podil.description': 'Historic merchant quarter with cobblestone streets, artisan shops, and riverside views',
    'cities.kyiv.districts.podil.highlights': 'Contract House, Kyiv River Port, Artisan Markets, Historic Churches',
    
    'cities.kyiv.districts.pechersk.name': 'Pechersk District',
    'cities.kyiv.districts.pechersk.description': 'Government and cultural center housing parliament, museums, and the famous Lavra monastery',
    'cities.kyiv.districts.pechersk.highlights': 'Pechersk Lavra, Parliament Building, National Museum, Park of Eternal Glory',
    
    'cities.kyiv.districts.shevchenko.name': 'Shevchenko District',
    'cities.kyiv.districts.shevchenko.description': 'Central district with universities, theaters, and the main shopping areas',
    'cities.kyiv.districts.shevchenko.highlights': 'Khreshchatyk Street, Opera House, University, Central Park',
    
    'cities.kyiv.districts.obolon.name': 'Obolon District',
    'cities.kyiv.districts.obolon.description': 'Modern residential area with parks, shopping centers, and Dnipro River access',
    'cities.kyiv.districts.obolon.highlights': 'Obolon Beach, Shopping Malls, Modern Architecture, River Activities',
    
    'cities.kyiv.practical.title': 'Practical Information',
    'cities.kyiv.practical.visit.title': 'Best Time to Visit',
    'cities.kyiv.practical.visit.description': 'Kyiv is beautiful year-round, each season offering unique experiences',
    'cities.kyiv.practical.visit.spring': 'Spring (Apr-May): Blooming chestnuts, mild weather',
    'cities.kyiv.practical.visit.summer': 'Summer (Jun-Aug): Warm weather, outdoor festivals',
    'cities.kyiv.practical.visit.autumn': 'Autumn (Sep-Oct): Golden foliage, perfect temperatures',
    'cities.kyiv.practical.visit.winter': 'Winter (Nov-Mar): Snow-covered domes, cozy cafes',
    
    'cities.kyiv.practical.language.title': 'Language',
    'cities.kyiv.practical.language.description': 'Communication in Kyiv is easy with multiple language options',
    'cities.kyiv.practical.language.ukrainian': 'Ukrainian is the official language',
    'cities.kyiv.practical.language.english': 'English widely spoken in tourist areas',
    'cities.kyiv.practical.language.russian': 'Russian also understood by many locals',
    
    'cities.kyiv.practical.transport.title': 'Getting Around',
    'cities.kyiv.practical.transport.description': 'Kyiv offers excellent public transportation and walkable districts',
    'cities.kyiv.practical.transport.metro': 'Metro: Fast, efficient, beautiful stations',
    'cities.kyiv.practical.transport.bus': 'Buses & Trams: Comprehensive city coverage',
    'cities.kyiv.practical.transport.taxi': 'Taxi & Ride-sharing: Uber, Bolt available',
    'cities.kyiv.practical.transport.walk': 'Walking: Many attractions within walking distance',
    
    'cities.kyiv.cta.title': 'Ready to Explore Kyiv?',
    'cities.kyiv.cta.subtitle': 'Book your accommodation and get travel insurance for a worry-free visit',
    'cities.kyiv.cta.hotels': 'Find Hotels in Kyiv',
    'cities.kyiv.cta.insurance': 'Get Travel Insurance',
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
    
    // Explore Hub Page
    'explore.hero.title': 'Відкрийте Україну',
    'explore.hero.subtitle': 'Від стародавніх столиць до незайманих гір, від об\'єктів спадщини ЮНЕСКО до прихованих перлин - досліджуйте різноманітну красу та багату культуру України',
    'explore.hero.cta.destinations': 'Досліджувати напрямки',
    'explore.hero.cta.essential': 'Основна інформація',
    
    'explore.stats.title': 'Україна одним поглядом',
    'explore.stats.subtitle': 'Відкрийте цифри, що демонструють багату спадщину та різноманітні пейзажі України',
    'explore.stats.unesco': 'Об\'єкти ЮНЕСКО',
    'explore.stats.regions': 'Регіони',
    'explore.stats.cities': 'Міста та селища',
    'explore.stats.history': 'Років історії',
    
    'explore.sections.title': 'Що ви хочете досліджувати?',
    'explore.sections.subtitle': 'Оберіть свою пригоду та відкрийте Україну під різними кутами',
    'explore.sections.explore': 'Дослідити розділ',
    
    'explore.sections.destinations.title': 'Топ напрямки',
    'explore.sections.destinations.description': 'Відкрийте найчарівніші міста та регіони України, від жвавого Києва до історичного Львова, від прибережної Одеси до величних Карпат',
    
    'explore.sections.essential.title': 'Основна інформація',
    'explore.sections.essential.description': 'Все, що потрібно знати для безпечної та приємної подорожі - поради для мандрівників, правила безпеки, валюта, погода та практичні поради',
    
    'explore.sections.gems.title': 'Приховані перлини',
    'explore.sections.gems.description': 'Напрямки поза протоптаними стежками, що демонструють автентичну красу України - від чарівних сіл до таємних природних чудес',
    
    'explore.sections.unesco.title': 'Всесвітня спадщина ЮНЕСКО',
    'explore.sections.unesco.description': 'Досліджуйте 7 об\'єктів Всесвітньої спадщини ЮНЕСКО України, від стародавніх церков до історичних центрів міст, що розповідають історію нашої цивілізації',
    
    'explore.sections.regions.title': 'Дослідження за регіонами',
    'explore.sections.regions.description': 'Відкрийте 24 різноманітні регіони України, кожен з унікальними традиціями, пейзажами та культурними скарбами, що чекають на дослідження',
    
    'explore.sections.jewish.title': 'Єврейська Україна',
    'explore.sections.jewish.description': 'Подорожуйте багатою єврейською спадщиною України, від історичних синагог до культурних центрів, що зберігають століття традицій',
    
    'explore.cta.title': 'Готові розпочати свою українську пригоду?',
    'explore.cta.subtitle': 'Підготуйтесь зі страхуванням подорожей та знайдіть ідеальне розміщення для своєї подорожі',
    'explore.cta.insurance': 'Оформити страховку',
    'explore.cta.hotels': 'Знайти готелі',
    
    // City Pages - Categories
    'cities.categories.unesco': 'Об\'єкт ЮНЕСКО',
    'cities.categories.religious': 'Релігійне місце',
    'cities.categories.square': 'Історична площа',
    'cities.categories.historical': 'Історичний пам\'ятник',
    'cities.categories.cultural': 'Культурне місце',
    'cities.categories.museum': 'Музей',
    
    // Kyiv City Page
    'cities.kyiv.name': 'Київ',
    'cities.kyiv.hero.title': 'Київ - Серце України',
    'cities.kyiv.hero.subtitle': 'Відкрийте жваву столицю, де стародавня історія зустрічається з сучасною стійкістю, золоті куполи здіймаються над жвавими площами, і кожна вулиця розповідає історію тріумфу',
    'cities.kyiv.hero.cta.plan': 'Сплануйте візит',
    'cities.kyiv.hero.cta.guide': 'Завантажити гід',
    
    'cities.kyiv.facts.title': 'Київ одним поглядом',
    'cities.kyiv.facts.population.value': '2,9 млн',
    'cities.kyiv.facts.population.label': 'Населення',
    'cities.kyiv.facts.founded.value': '482 р.',
    'cities.kyiv.facts.founded.label': 'Заснований',
    'cities.kyiv.facts.unesco.value': '2',
    'cities.kyiv.facts.unesco.label': 'Об\'єкти ЮНЕСКО',
    'cities.kyiv.facts.area.value': '847 км²',
    'cities.kyiv.facts.area.label': 'Площа',
    
    'cities.kyiv.attractions.title': 'Обов\'язкові до відвідування пам\'ятки',
    'cities.kyiv.attractions.subtitle': 'Досліджуйте найвідоміші визначні місця та приховані скарби Києва',
    'cities.kyiv.attractions.learn': 'Дізнатися більше',
    
    'cities.kyiv.attractions.sophia.name': 'Софійський собор',
    'cities.kyiv.attractions.sophia.description': 'Об\'єкт Всесвітньої спадщини ЮНЕСКО з приголомшливою візантійською архітектурою та стародавніми мозаїками XI століття',
    
    'cities.kyiv.attractions.lavra.name': 'Києво-Печерська лавра',
    'cities.kyiv.attractions.lavra.description': 'Історичний православний монастирський комплекс з підземними печерними системами та золотими куполами',
    
    'cities.kyiv.attractions.independence.name': 'Майдан Незалежності',
    'cities.kyiv.attractions.independence.description': 'Серце сучасної України, свідок історичних подій та жвавого міського життя',
    
    'cities.kyiv.attractions.golden-gate.name': 'Золоті ворота',
    'cities.kyiv.attractions.golden-gate.description': 'Реконструйовані стародавні укріплені ворота, що колись захищали середньовічний Київ',
    
    'cities.kyiv.attractions.andrew.name': 'Андріївська церква',
    'cities.kyiv.attractions.andrew.description': 'Барокковий шедевр, спроектований італійським архітектором Бартоломео Растреллі',
    
    'cities.kyiv.attractions.museum.name': 'Національний художній музей',
    'cities.kyiv.attractions.museum.description': 'Провідна колекція українського мистецтва від середньовічних ікон до сучасних творів',
    
    'cities.kyiv.overview.title': 'Відкрийте Київ',
    'cities.kyiv.overview.subtitle': 'Досліджуйте багатий гобелен столиці України - де стародавні традиції зустрічаються з сучасними інноваціями',
    
    'cities.kyiv.overview.about.title': 'Серце України',
    'cities.kyiv.overview.about.description1': 'Київ - одне з найстаріших міст Європи з понад 1500-річною безперервною історією. Як політичний, економічний та культурний центр України, він органічно поєднує свою стародавню спадщину з сучасним динамізмом.',
    'cities.kyiv.overview.about.description2': 'Місто розкинулося по обох берегах Дніпра, з історичним центром на пагорбах, усіяних золотокуполими церквами, обсадженими деревами бульварами та жвавими районами, кожен з яких розповідає свою історію.',
    
    'cities.kyiv.overview.culture.title': 'Культурна столиця',
    'cities.kyiv.overview.culture.description': 'Київ - безперечне культурне серце України, дім музеїв, театрів та галерей світового класу. Місто пульсує творчістю, від традиційних народних вистав до найсучаснішого мистецтва.',
    'cities.kyiv.overview.culture.highlights': 'Опера та балет, Сучасне мистецтво, Народні традиції, Літературна спадщина, Музичні фестивалі, Кулінарна сцена',
    
    'cities.kyiv.overview.images.modern': 'Сучасний горизонт Києва вздовж Дніпра',
    'cities.kyiv.overview.images.architecture': 'Історична архітектура в центрі міста',
    'cities.kyiv.overview.images.riverside': 'Мальовничі прибережні парки та алеї',
    
    'cities.kyiv.history.title': 'Подорож крізь час',
    'cities.kyiv.history.founding.title': 'Стародавнє заснування',
    'cities.kyiv.history.founding.description': 'Легенда розповідає про трьох братів - Кия, Щека та Хорива - які заснували місто на пагорбах над Дніпром. Археологічні дані підтверджують безперервне поселення з V століття.',
    
    'cities.kyiv.history.golden.title': 'Золота доба Київської Русі',
    'cities.kyiv.history.golden.description': 'Київ став столицею могутньої держави Київська Русь, що суперничала з Константинополем та Багдадом. Софійський собор та інші архітектурні шедеври були збудовані в цю процвітаючу епоху.',
    
    'cities.kyiv.history.soviet.title': 'Радянська епоха та стійкість',
    'cities.kyiv.history.soviet.description': 'Через радянське правління, спустошення Другої світової війни та відновлення Київ продемонстрував надзвичайну стійкість. Місто стало великим промисловим та освітнім центром СРСР.',
    
    'cities.kyiv.history.modern.title': 'Столиця незалежної України',
    'cities.kyiv.history.modern.description': 'З часу незалежності України Київ процвітає як європейська столиця, приймаючи історичні події як Помаранчева революція та Революція гідності, закріплюючи свою роль як маяк демократії.',
    
    'cities.kyiv.districts.title': 'Досліджуйте райони Києва',
    'cities.kyiv.districts.subtitle': 'Кожен район пропонує унікальний характер, пам\'ятки та враження',
    
    'cities.kyiv.districts.podil.name': 'Подільський район',
    'cities.kyiv.districts.podil.description': 'Історичний купецький квартал з бруківкою, ремісничими крамницями та видами на річку',
    'cities.kyiv.districts.podil.highlights': 'Контрактовий дім, Київський річковий порт, Ремісничі ринки, Історичні церкви',
    
    'cities.kyiv.districts.pechersk.name': 'Печерський район',
    'cities.kyiv.districts.pechersk.description': 'Урядовий та культурний центр з парламентом, музеями та знаменитим монастирем Лавра',
    'cities.kyiv.districts.pechersk.highlights': 'Печерська лавра, Будівля парламенту, Національний музей, Парк Вічної Слави',
    
    'cities.kyiv.districts.shevchenko.name': 'Шевченківський район',
    'cities.kyiv.districts.shevchenko.description': 'Центральний район з університетами, театрами та основними торговими районами',
    'cities.kyiv.districts.shevchenko.highlights': 'Хрещатик, Оперний театр, Університет, Центральний парк',
    
    'cities.kyiv.districts.obolon.name': 'Оболонський район',
    'cities.kyiv.districts.obolon.description': 'Сучасний житловий район з парками, торговими центрами та доступом до Дніпра',
    'cities.kyiv.districts.obolon.highlights': 'Оболонський пляж, Торгові центри, Сучасна архітектура, Річкові розваги',
    
    'cities.kyiv.practical.title': 'Практична інформація',
    'cities.kyiv.practical.visit.title': 'Найкращий час для відвідування',
    'cities.kyiv.practical.visit.description': 'Київ прекрасний цілий рік, кожен сезон пропонує унікальні враження',
    'cities.kyiv.practical.visit.spring': 'Весна (кві-тра): Цвітіння каштанів, м\'яка погода',
    'cities.kyiv.practical.visit.summer': 'Літо (чер-сер): Тепла погода, фестивалі просто неба',
    'cities.kyiv.practical.visit.autumn': 'Осінь (вер-жов): Золоте листя, ідеальні температури',
    'cities.kyiv.practical.visit.winter': 'Зима (лис-бер): Засніжені куполи, затишні кафе',
    
    'cities.kyiv.practical.language.title': 'Мова',
    'cities.kyiv.practical.language.description': 'Спілкування в Києві легке з кількома мовними варіантами',
    'cities.kyiv.practical.language.ukrainian': 'Українська - офіційна мова',
    'cities.kyiv.practical.language.english': 'Англійська широко поширена в туристичних районах',
    'cities.kyiv.practical.language.russian': 'Російську також розуміють багато місцевих',
    
    'cities.kyiv.practical.transport.title': 'Пересування містом',
    'cities.kyiv.practical.transport.description': 'Київ пропонує відмінний громадський транспорт та пішохідні райони',
    'cities.kyiv.practical.transport.metro': 'Метро: Швидко, ефективно, красиві станції',
    'cities.kyiv.practical.transport.bus': 'Автобуси та трамваї: Повне покриття міста',
    'cities.kyiv.practical.transport.taxi': 'Таксі та каршерінг: Uber, Bolt доступні',
    'cities.kyiv.practical.transport.walk': 'Пішки: Багато пам\'яток в межах пішої відстані',
    
    'cities.kyiv.cta.title': 'Готові досліджувати Київ?',
    'cities.kyiv.cta.subtitle': 'Забронюйте житло та оформіть туристичну страховку для безтурботного візиту',
    'cities.kyiv.cta.hotels': 'Знайти готелі в Києві',
    'cities.kyiv.cta.insurance': 'Оформити страховку',
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



