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
    'cities.categories.coastal': 'Coastal Area',
    'cities.categories.nature': 'Natural Site',
    'cities.categories.memorial': 'Memorial Site',
    
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

    // LVIV TRANSLATIONS
    'cities.lviv.name': 'Lviv',
    'cities.lviv.hero.title': 'Lviv - Cultural Pearl of Ukraine',
    'cities.lviv.hero.subtitle': 'Discover the UNESCO World Heritage city where cobblestone streets tell stories of centuries past',
    'cities.lviv.hero.cta.plan': 'Plan Your Visit',
    'cities.lviv.hero.cta.guide': 'City Guide',
    
    'cities.lviv.facts.title': 'Lviv at a Glance',
    'cities.lviv.facts.population.value': '721K',
    'cities.lviv.facts.population.label': 'Population',
    'cities.lviv.facts.founded.value': '1256',
    'cities.lviv.facts.founded.label': 'Founded',
    'cities.lviv.facts.unesco.value': '1998',
    'cities.lviv.facts.unesco.label': 'UNESCO Status',
    'cities.lviv.facts.coffee.value': '100+',
    'cities.lviv.facts.coffee.label': 'Coffee Houses',
    
    'cities.lviv.attractions.title': 'Must-See Attractions',
    'cities.lviv.attractions.subtitle': 'Explore Lviv\'s architectural treasures and cultural landmarks',
    'cities.lviv.attractions.learn': 'Learn More',
    
    'cities.lviv.attractions.old-town.name': 'Historic Old Town',
    'cities.lviv.attractions.old-town.description': 'UNESCO World Heritage Site with stunning medieval architecture and charming squares',
    
    'cities.lviv.attractions.opera-house.name': 'Lviv Opera House',
    'cities.lviv.attractions.opera-house.description': 'Magnificent 19th-century opera theater, one of the most beautiful in Europe',
    
    'cities.lviv.attractions.high-castle.name': 'High Castle Hill',
    'cities.lviv.attractions.high-castle.description': 'Historic hilltop offering panoramic views of the entire city',
    
    'cities.lviv.attractions.coffee-museums.name': 'Coffee Culture Museums',
    'cities.lviv.attractions.coffee-museums.description': 'Unique museums celebrating Lviv\'s rich coffee heritage and traditions',
    
    'cities.lviv.attractions.armenian-cathedral.name': 'Armenian Cathedral',
    'cities.lviv.attractions.armenian-cathedral.description': '14th-century cathedral showcasing Armenian architectural heritage',
    
    'cities.lviv.attractions.pharmacy-museum.name': 'Pharmacy Museum',
    'cities.lviv.attractions.pharmacy-museum.description': 'Historic pharmacy turned museum with fascinating medical artifacts',
    
    'cities.lviv.overview.title': 'Discover Lviv',
    'cities.lviv.overview.subtitle': 'Immerse yourself in the cultural capital of Western Ukraine',
    
    'cities.lviv.overview.about.title': 'Cultural Capital of Western Ukraine',
    'cities.lviv.overview.about.description1': 'Lviv is a living museum where Gothic, Renaissance, and Baroque architecture creates an enchanting urban landscape. Founded in 1256, this UNESCO World Heritage city has preserved its medieval charm while embracing modern cultural dynamism.',
    'cities.lviv.overview.about.description2': 'The city\'s cobblestone streets wind through a historic center filled with stunning churches, palaces, and squares. Lviv\'s unique position at the crossroads of Eastern and Western Europe has created a rich cultural tapestry reflected in its architecture, cuisine, and traditions.',
    
    'cities.lviv.overview.culture.title': 'Coffee Culture & Arts',
    'cities.lviv.overview.culture.description': 'Lviv is renowned as Ukraine\'s coffee capital, with a café culture that rivals Vienna or Prague. The city pulses with artistic energy, hosting numerous festivals, exhibitions, and cultural events throughout the year.',
    'cities.lviv.overview.culture.highlights': 'Coffee Culture, Art Galleries, Music Festivals, Theater Scene, Literary Traditions, Craft Heritage',
    
    'cities.lviv.overview.images.square': 'Market Square - heart of the old town',
    'cities.lviv.overview.images.architecture': 'Stunning baroque and gothic architecture',
    'cities.lviv.overview.images.coffee': 'Traditional coffee houses and culture',
    
    'cities.lviv.history.title': 'A Journey Through Centuries',
    'cities.lviv.history.founding.title': 'Medieval Foundation',
    'cities.lviv.history.founding.description': 'Founded by King Danylo of Galicia in 1256 and named after his son Lev, Lviv quickly became an important trading center on the route between Europe and Asia.',
    
    'cities.lviv.history.austrian.title': 'Austrian Golden Age',
    'cities.lviv.history.austrian.description': 'Under Austrian rule (1772-1918), Lviv flourished as the capital of Galicia, becoming a major cultural and educational center with magnificent architecture still visible today.',
    
    'cities.lviv.history.coffee.title': 'Birth of Coffee Culture',
    'cities.lviv.history.coffee.description': 'The 19th century saw the emergence of Lviv\'s famous coffee culture, with numerous coffee houses becoming centers of intellectual and cultural life.',
    
    'cities.lviv.history.modern.title': 'UNESCO Recognition',
    'cities.lviv.history.modern.description': 'In 1998, Lviv\'s historic center was inscribed on the UNESCO World Heritage List, recognizing its outstanding universal value and well-preserved medieval urban fabric.',
    
    'cities.lviv.districts.title': 'Explore Lviv\'s Districts',
    'cities.lviv.districts.subtitle': 'Each district offers unique architectural styles and cultural experiences',
    
    'cities.lviv.districts.old-town.name': 'Historic Old Town',
    'cities.lviv.districts.old-town.description': 'The UNESCO-protected heart of Lviv with medieval streets, Renaissance palaces, and baroque churches',
    'cities.lviv.districts.old-town.highlights': 'Market Square, Town Hall, St. George\'s Cathedral',
    
    'cities.lviv.districts.galician.name': 'Galician Quarter',
    'cities.lviv.districts.galician.description': 'Elegant 19th-century district with Austrian-era architecture and tree-lined boulevards',
    'cities.lviv.districts.galician.highlights': 'Opera House, University, Freedom Avenue',
    
    'cities.lviv.districts.jewish-quarter.name': 'Former Jewish Quarter',
    'cities.lviv.districts.jewish-quarter.description': 'Historic area that was once the center of one of Europe\'s largest Jewish communities',
    'cities.lviv.districts.jewish-quarter.highlights': 'Golden Rose Synagogue, Jewish Museum, Memorial sites',
    
    'cities.lviv.districts.castle-hill.name': 'Castle Hill Area',
    'cities.lviv.districts.castle-hill.description': 'Elevated district offering panoramic views and historic fortifications',
    'cities.lviv.districts.castle-hill.highlights': 'High Castle Park, Observatory, City Views',
    
    'cities.lviv.practical.title': 'Practical Information',
    
    'cities.lviv.practical.visit.title': 'Best Time to Visit',
    'cities.lviv.practical.visit.description': 'Lviv is beautiful year-round, with each season offering unique experiences',
    'cities.lviv.practical.visit.spring': 'Spring (Mar-May): Mild weather, fewer crowds',
    'cities.lviv.practical.visit.summer': 'Summer (Jun-Aug): Warm, perfect for walking tours',
    'cities.lviv.practical.visit.autumn': 'Autumn (Sep-Nov): Golden colors, cozy café weather',
    'cities.lviv.practical.visit.winter': 'Winter (Dec-Feb): Christmas markets, snow-covered architecture',
    
    'cities.lviv.practical.coffee.title': 'Coffee Culture',
    'cities.lviv.practical.coffee.description': 'Experience Lviv\'s legendary coffee scene',
    'cities.lviv.practical.coffee.culture': 'Traditional coffee houses with unique atmospheres',
    'cities.lviv.practical.coffee.museums': 'Coffee-themed museums and exhibitions',
    'cities.lviv.practical.coffee.roasters': 'Local roasters and specialty blends',
    
    'cities.lviv.practical.transport.title': 'Getting Around',
    'cities.lviv.practical.transport.description': 'Lviv is best explored on foot, with excellent public transport options',
    'cities.lviv.practical.transport.walking': 'Walking tours of the historic center',
    'cities.lviv.practical.transport.tram': 'Historic tram system throughout the city',
    'cities.lviv.practical.transport.taxi': 'Taxi and ride-sharing services available',
    'cities.lviv.practical.transport.train': 'Central railway station with connections across Europe',
    
    'cities.lviv.cta.title': 'Experience Lviv\'s Magic',
    'cities.lviv.cta.subtitle': 'Book your stay in Ukraine\'s cultural capital and discover centuries of heritage',
    'cities.lviv.cta.hotels': 'Find Hotels',
    'cities.lviv.cta.insurance': 'Get Insured',

    // ODESA TRANSLATIONS
    'cities.odesa.name': 'Odesa',
    'cities.odesa.hero.title': 'Odesa - Pearl by the Sea',
    'cities.odesa.hero.subtitle': 'Experience the charm of Ukraine\'s maritime capital with its legendary beaches and vibrant culture',
    'cities.odesa.hero.cta.plan': 'Plan Your Visit',
    'cities.odesa.hero.cta.guide': 'City Guide',
    
    'cities.odesa.facts.title': 'Odesa at a Glance',
    'cities.odesa.facts.population.value': '1.0M',
    'cities.odesa.facts.population.label': 'Population',
    'cities.odesa.facts.founded.value': '1794',
    'cities.odesa.facts.founded.label': 'Founded',
    'cities.odesa.facts.beaches.value': '16km',
    'cities.odesa.facts.beaches.label': 'Coastline',
    'cities.odesa.facts.steps.value': '192',
    'cities.odesa.facts.steps.label': 'Potemkin Steps',
    
    'cities.odesa.attractions.title': 'Must-See Attractions',
    'cities.odesa.attractions.subtitle': 'Discover Odesa\'s iconic landmarks and coastal beauty',
    'cities.odesa.attractions.learn': 'Learn More',
    
    'cities.odesa.attractions.potemkin-stairs.name': 'Potemkin Stairs',
    'cities.odesa.attractions.potemkin-stairs.description': 'Iconic 192-step staircase connecting the city to the port, famous worldwide',
    
    'cities.odesa.attractions.opera-house.name': 'Odesa Opera House',
    'cities.odesa.attractions.opera-house.description': 'Magnificent opera theater, architectural masterpiece and cultural heart of the city',
    
    'cities.odesa.attractions.primorsky-boulevard.name': 'Primorsky Boulevard',
    'cities.odesa.attractions.primorsky-boulevard.description': 'Elegant seaside promenade with stunning views over the Black Sea',
    
    'cities.odesa.attractions.arcadia-beach.name': 'Arcadia Beach',
    'cities.odesa.attractions.arcadia-beach.description': 'Popular beach resort area with clubs, restaurants, and vibrant nightlife',
    
    'cities.odesa.attractions.catacombs.name': 'Odesa Catacombs',
    'cities.odesa.attractions.catacombs.description': 'Extensive underground limestone tunnels, among the largest catacomb systems in the world',
    
    'cities.odesa.attractions.city-garden.name': 'City Garden',
    'cities.odesa.attractions.city-garden.description': 'Historic park in the city center, perfect for relaxation and cultural events',
    
    'cities.odesa.overview.title': 'Discover Odesa',
    'cities.odesa.overview.subtitle': 'Experience the unique charm of Ukraine\'s maritime gateway',
    
    'cities.odesa.overview.about.title': 'Pearl by the Black Sea',
    'cities.odesa.overview.about.description1': 'Odesa is Ukraine\'s principal seaport and a major cultural center, known for its distinctive architecture, vibrant arts scene, and legendary sense of humor. Founded in 1794, the city has always been a cosmopolitan melting pot of cultures.',
    'cities.odesa.overview.about.description2': 'The city\'s elegant 19th-century architecture, tree-lined boulevards, and beautiful beaches make it one of Ukraine\'s most attractive destinations. Odesa\'s unique character combines European sophistication with Black Sea charm.',
    
    'cities.odesa.overview.culture.title': 'Maritime Culture & Arts',
    'cities.odesa.overview.culture.description': 'Odesa is famous for its wit, humor, and vibrant cultural life. The city has produced many renowned writers, musicians, and artists, and continues to be a major center for performing arts and literature.',
    'cities.odesa.overview.culture.highlights': 'Opera & Theater, Beach Culture, Literary Traditions, Comedy & Humor, Film Industry, Maritime Heritage',
    
    'cities.odesa.overview.images.seafront': 'Beautiful seafront and Potemkin Stairs',
    'cities.odesa.overview.images.opera': 'Magnificent opera house architecture',
    'cities.odesa.overview.images.beach': 'Popular Arcadia beach resort area',
    
    'cities.odesa.history.title': 'From Port City to Cultural Capital',
    'cities.odesa.history.founding.title': 'Imperial Foundation',
    'cities.odesa.history.founding.description': 'Founded in 1794 by Catherine the Great as a strategic port on the Black Sea, Odesa quickly grew into one of the Russian Empire\'s most important commercial centers.',
    
    'cities.odesa.history.golden.title': '19th Century Prosperity',
    'cities.odesa.history.golden.description': 'The 19th century was Odesa\'s golden age, when the city became a major grain export hub and attracted merchants, artists, and intellectuals from across Europe.',
    
    'cities.odesa.history.soviet.title': 'Soviet Era Challenges',
    'cities.odesa.history.soviet.description': 'During the Soviet period, Odesa remained an important port while developing its cultural reputation, particularly in cinema and literature, despite facing various political challenges.',
    
    'cities.odesa.history.modern.title': 'Modern Renaissance',
    'cities.odesa.history.modern.description': 'Today, Odesa continues to thrive as Ukraine\'s maritime capital, balancing its role as a major port with its growing importance as a tourist destination and cultural center.',
    
    'cities.odesa.districts.title': 'Explore Odesa\'s Districts',
    'cities.odesa.districts.subtitle': 'From historic center to beachfront, each area has its own character',
    
    'cities.odesa.districts.city-center.name': 'Historic City Center',
    'cities.odesa.districts.city-center.description': 'The heart of Odesa with its famous opera house, elegant architecture, and bustling pedestrian streets',
    'cities.odesa.districts.city-center.highlights': 'Opera House, Deribasovskaya Street, City Garden',
    
    'cities.odesa.districts.arcadia.name': 'Arcadia',
    'cities.odesa.districts.arcadia.description': 'Popular beach resort district with clubs, restaurants, and vibrant nightlife',
    'cities.odesa.districts.arcadia.highlights': 'Beaches, Nightclubs, Restaurants, Waterfront',
    
    'cities.odesa.districts.moldavanka.name': 'Moldavanka',
    'cities.odesa.districts.moldavanka.description': 'Historic working-class district famous in literature and folklore',
    'cities.odesa.districts.moldavanka.highlights': 'Traditional Markets, Local Culture, Historic Sites',
    
    'cities.odesa.districts.langeron.name': 'Langeron',
    'cities.odesa.districts.langeron.description': 'Upscale coastal area with beautiful beaches and luxury accommodations',
    'cities.odesa.districts.langeron.highlights': 'Premium Beaches, Hotels, Seafood Restaurants',
    
    'cities.odesa.practical.title': 'Practical Information',
    
    'cities.odesa.practical.visit.title': 'Best Time to Visit',
    'cities.odesa.practical.visit.description': 'Odesa is a year-round destination with peak season during summer months',
    'cities.odesa.practical.visit.spring': 'Spring (Apr-May): Pleasant weather, fewer crowds',
    'cities.odesa.practical.visit.summer': 'Summer (Jun-Aug): Beach season, festivals, warm weather',
    'cities.odesa.practical.visit.autumn': 'Autumn (Sep-Oct): Mild temperatures, beautiful colors',
    'cities.odesa.practical.visit.winter': 'Winter (Nov-Mar): Mild climate, cultural season',
    
    'cities.odesa.practical.beaches.title': 'Beach Guide',
    'cities.odesa.practical.beaches.description': 'Odesa offers various beach experiences along its coastline',
    'cities.odesa.practical.beaches.arcadia': 'Arcadia: Most popular, clubs and entertainment',
    'cities.odesa.practical.beaches.langeron': 'Langeron: Upscale, family-friendly',
    'cities.odesa.practical.beaches.dolphin': 'Dolphin: Quieter, more relaxed atmosphere',
    
    'cities.odesa.practical.transport.title': 'Getting Around',
    'cities.odesa.practical.transport.description': 'Odesa has good public transport and is walkable in the center',
    'cities.odesa.practical.transport.tram': 'Historic tram system connecting major areas',
    'cities.odesa.practical.transport.trolley': 'Extensive trolleybus network',
    'cities.odesa.practical.transport.taxi': 'Taxi and ride-sharing readily available',
    'cities.odesa.practical.transport.walking': 'Walking tours of the historic center',
    
    'cities.odesa.cta.title': 'Discover Odesa\'s Charm',
    'cities.odesa.cta.subtitle': 'Experience Ukraine\'s maritime pearl with its beaches, culture, and legendary hospitality',
    'cities.odesa.cta.hotels': 'Find Hotels',
    'cities.odesa.cta.insurance': 'Get Insured',

    // CARPATHIANS TRANSLATIONS
    'cities.carpathians.name': 'Carpathians',
    'cities.carpathians.hero.title': 'Ukrainian Carpathians - Nature\'s Paradise',
    'cities.carpathians.hero.subtitle': 'Discover pristine mountains, ancient traditions, and breathtaking landscapes in Ukraine\'s highland region',
    'cities.carpathians.hero.cta.plan': 'Plan Adventure',
    'cities.carpathians.hero.cta.guide': 'Nature Guide',
    
    'cities.carpathians.facts.title': 'Carpathians at a Glance',
    'cities.carpathians.facts.peak.value': '2,061m',
    'cities.carpathians.facts.peak.label': 'Highest Peak (Hoverla)',
    'cities.carpathians.facts.unesco.value': '16',
    'cities.carpathians.facts.unesco.label': 'UNESCO Churches',
    'cities.carpathians.facts.parks.value': '8',
    'cities.carpathians.facts.parks.label': 'National Parks',
    'cities.carpathians.facts.villages.value': '500+',
    'cities.carpathians.facts.villages.label': 'Mountain Villages',
    
    'cities.carpathians.attractions.title': 'Natural Wonders & Heritage',
    'cities.carpathians.attractions.subtitle': 'Explore the diverse attractions of Ukraine\'s mountain region',
    'cities.carpathians.attractions.learn': 'Learn More',
    
    'cities.carpathians.attractions.hoverla.name': 'Mount Hoverla',
    'cities.carpathians.attractions.hoverla.description': 'Ukraine\'s highest peak at 2,061 meters, popular hiking destination with stunning views',
    
    'cities.carpathians.attractions.synevyr.name': 'Lake Synevyr',
    'cities.carpathians.attractions.synevyr.description': 'The largest natural lake in the Carpathians, known as the "Pearl of the Carpathians"',
    
    'cities.carpathians.attractions.wooden-churches.name': 'Wooden Churches',
    'cities.carpathians.attractions.wooden-churches.description': 'UNESCO World Heritage wooden churches showcasing traditional Carpathian architecture',
    
    'cities.carpathians.attractions.bukovel.name': 'Bukovel Resort',
    'cities.carpathians.attractions.bukovel.description': 'Premier ski resort and year-round mountain destination with modern facilities',
    
    'cities.carpathians.attractions.hutsul-villages.name': 'Hutsul Villages',
    'cities.carpathians.attractions.hutsul-villages.description': 'Traditional mountain villages preserving authentic Hutsul culture and crafts',
    
    'cities.carpathians.attractions.thermal-springs.name': 'Thermal Springs',
    'cities.carpathians.attractions.thermal-springs.description': 'Natural hot springs offering relaxation and therapeutic benefits',
    
    'cities.carpathians.overview.title': 'Discover the Carpathians',
    'cities.carpathians.overview.subtitle': 'Immerse yourself in Ukraine\'s mountain paradise',
    
    'cities.carpathians.overview.about.title': 'Mountain Paradise',
    'cities.carpathians.overview.about.description1': 'The Ukrainian Carpathians offer some of Europe\'s most pristine mountain landscapes, with dense forests, crystal-clear lakes, and traditional villages that have preserved their authentic character for centuries.',
    'cities.carpathians.overview.about.description2': 'This region is home to unique Hutsul culture, UNESCO World Heritage wooden churches, and diverse wildlife. Whether you seek adventure or tranquility, the Carpathians provide unforgettable experiences in every season.',
    
    'cities.carpathians.overview.culture.title': 'Traditional Mountain Culture',
    'cities.carpathians.overview.culture.description': 'The Carpathians are the heartland of traditional Ukrainian mountain culture, where ancient customs, crafts, and folklore continue to thrive in authentic village communities.',
    'cities.carpathians.overview.culture.highlights': 'Hutsul Traditions, Wood Crafts, Folk Music, Traditional Cuisine, Pastoral Life, Ancient Customs',
    
    'cities.carpathians.overview.images.mountains': 'Majestic Carpathian mountain peaks',
    'cities.carpathians.overview.images.lake': 'Crystal-clear mountain lakes',
    'cities.carpathians.overview.images.church': 'Historic wooden churches',
    
    'cities.carpathians.history.title': 'Ancient Land of Traditions',
    'cities.carpathians.history.ancient.title': 'Ancient Settlements',
    'cities.carpathians.history.ancient.description': 'The Carpathians have been inhabited for millennia, with archaeological evidence of ancient settlements and trade routes crossing these mountains.',
    
    'cities.carpathians.history.medieval.title': 'Medieval Heritage',
    'cities.carpathians.history.medieval.description': 'During medieval times, the region developed its distinctive wooden church architecture and unique cultural traditions that blend various European influences.',
    
    'cities.carpathians.history.folklore.title': 'Folk Traditions',
    'cities.carpathians.history.folklore.description': 'The 19th century saw the documentation and preservation of rich Carpathian folklore, music, and crafts that continue to define the region\'s cultural identity.',
    
    'cities.carpathians.history.modern.title': 'Conservation & Tourism',
    'cities.carpathians.history.modern.description': 'Today, the Carpathians balance environmental conservation with sustainable tourism, protecting their natural beauty while sharing their cultural treasures with visitors.',
    
    'cities.carpathians.regions.title': 'Carpathian Regions',
    'cities.carpathians.regions.subtitle': 'Each region offers unique landscapes and cultural experiences',
    
    'cities.carpathians.regions.zakarpattia.name': 'Zakarpattia Oblast',
    'cities.carpathians.regions.zakarpattia.description': 'The westernmost region with thermal springs, wine valleys, and multicultural heritage',
    'cities.carpathians.regions.zakarpattia.highlights': 'Thermal Springs, Wine Region, Uzhhorod Castle',
    
    'cities.carpathians.regions.ivano-frankivsk.name': 'Ivano-Frankivsk Oblast',
    'cities.carpathians.regions.ivano-frankivsk.description': 'Home to Mount Hoverla, Bukovel resort, and pristine national parks',
    'cities.carpathians.regions.ivano-frankivsk.highlights': 'Mount Hoverla, Bukovel, National Parks',
    
    'cities.carpathians.regions.chernivtsi.name': 'Chernivtsi Oblast',
    'cities.carpathians.regions.chernivtsi.description': 'Southern Carpathians with unique Hutsul villages and mountain traditions',
    'cities.carpathians.regions.chernivtsi.highlights': 'Hutsul Culture, Mountain Villages, Traditional Crafts',
    
    'cities.carpathians.regions.lviv.name': 'Lviv Oblast',
    'cities.carpathians.regions.lviv.description': 'Northern foothills with historic sites and natural reserves',
    'cities.carpathians.regions.lviv.highlights': 'Nature Reserves, Historic Sites, Hiking Trails',
    
    'cities.carpathians.practical.title': 'Practical Information',
    
    'cities.carpathians.practical.visit.title': 'Best Time to Visit',
    'cities.carpathians.practical.visit.description': 'The Carpathians offer different experiences throughout the year',
    'cities.carpathians.practical.visit.spring': 'Spring (Apr-May): Wildflowers, mild hiking weather',
    'cities.carpathians.practical.visit.summer': 'Summer (Jun-Aug): Perfect for hiking, festivals',
    'cities.carpathians.practical.visit.autumn': 'Autumn (Sep-Oct): Beautiful colors, mushroom season',
    'cities.carpathians.practical.visit.winter': 'Winter (Dec-Mar): Skiing, snow activities',
    
    'cities.carpathians.practical.activities.title': 'Mountain Activities',
    'cities.carpathians.practical.activities.description': 'Year-round outdoor adventures and cultural experiences',
    'cities.carpathians.practical.activities.hiking': 'Hiking trails for all skill levels',
    'cities.carpathians.practical.activities.skiing': 'Skiing and winter sports at Bukovel',
    'cities.carpathians.practical.activities.thermal': 'Thermal spring relaxation',
    
    'cities.carpathians.practical.accommodation.title': 'Mountain Stays',
    'cities.carpathians.practical.accommodation.description': 'Various accommodation options in mountain settings',
    'cities.carpathians.practical.accommodation.hotels': 'Mountain hotels and resorts',
    'cities.carpathians.practical.accommodation.guesthouses': 'Traditional village guesthouses',
    'cities.carpathians.practical.accommodation.camping': 'Camping and eco-lodges',
    
    'cities.carpathians.cta.title': 'Embrace Mountain Adventure',
    'cities.carpathians.cta.subtitle': 'Discover Ukraine\'s natural paradise with pristine landscapes and ancient traditions',
    'cities.carpathians.cta.hotels': 'Find Mountain Stays',
    'cities.carpathians.cta.insurance': 'Get Insured',

    // CHERNOBYL TRANSLATIONS
    'cities.chernobyl.name': 'Chernobyl',
    'cities.chernobyl.hero.title': 'Chernobyl - Historical Site',
    'cities.chernobyl.hero.subtitle': 'Experience one of history\'s most significant sites through safe, guided educational tours',
    'cities.chernobyl.hero.cta.tours': 'Book Tour',
    'cities.chernobyl.hero.cta.safety': 'Safety Info',
    
    'cities.chernobyl.notice.title': 'Important Safety Notice',
    'cities.chernobyl.notice.description': 'All visits to the Chernobyl Exclusion Zone must be arranged through licensed tour operators. Tours are safe, educational, and strictly regulated by Ukrainian authorities.',
    
    'cities.chernobyl.facts.title': 'Chernobyl Facts',
    'cities.chernobyl.facts.disaster.value': '1986',
    'cities.chernobyl.facts.disaster.label': 'Nuclear Accident',
    'cities.chernobyl.facts.zone.value': '30km',
    'cities.chernobyl.facts.zone.label': 'Exclusion Zone Radius',
    'cities.chernobyl.facts.evacuated.value': '116K',
    'cities.chernobyl.facts.evacuated.label': 'People Evacuated',
    'cities.chernobyl.facts.tours.value': '2011',
    'cities.chernobyl.facts.tours.label': 'Tours Started',
    
    'cities.chernobyl.attractions.title': 'Key Sites',
    'cities.chernobyl.attractions.subtitle': 'Educational visits to historically significant locations',
    'cities.chernobyl.attractions.learn': 'Learn More',
    
    'cities.chernobyl.attractions.reactor-4.name': 'Reactor 4 & New Sarcophagus',
    'cities.chernobyl.attractions.reactor-4.description': 'The site of the 1986 accident, now covered by the massive New Safe Confinement structure',
    
    'cities.chernobyl.attractions.pripyat.name': 'Pripyat Ghost City',
    'cities.chernobyl.attractions.pripyat.description': 'The abandoned city that housed nuclear plant workers, frozen in time since evacuation',
    
    'cities.chernobyl.attractions.duga-radar.name': 'Duga Radar System',
    'cities.chernobyl.attractions.duga-radar.description': 'Massive Soviet-era radar installation, known as the "Russian Woodpecker"',
    
    'cities.chernobyl.attractions.red-forest.name': 'Red Forest',
    'cities.chernobyl.attractions.red-forest.description': 'Forest area most affected by radiation, now a site of scientific study and natural recovery',
    
    'cities.chernobyl.attractions.control-room.name': 'Control Room',
    'cities.chernobyl.attractions.control-room.description': 'Replica of the control room where the accident occurred, used for educational purposes',
    
    'cities.chernobyl.attractions.memorial.name': 'Memorial Sites',
    'cities.chernobyl.attractions.memorial.description': 'Monuments honoring the victims and heroes of the Chernobyl disaster',
    
    'cities.chernobyl.overview.title': 'Understanding Chernobyl',
    'cities.chernobyl.overview.subtitle': 'Learn about this significant historical site through educational tourism',
    
    'cities.chernobyl.overview.about.title': 'Historical Significance',
    'cities.chernobyl.overview.about.description1': 'The Chernobyl Nuclear Power Plant accident of April 26, 1986, was a pivotal moment in history that changed global perspectives on nuclear energy and safety. Today, the site serves as an important educational destination.',
    'cities.chernobyl.overview.about.description2': 'Guided tours offer visitors the opportunity to learn about the events, consequences, and ongoing recovery efforts while observing how nature has begun to reclaim the abandoned areas.',
    
    'cities.chernobyl.overview.today.title': 'Chernobyl Today',
    'cities.chernobyl.overview.today.description': 'The exclusion zone has become an unexpected laboratory for studying radiation effects on ecosystems and a symbol of human resilience and scientific progress in containment and cleanup efforts.',
    'cities.chernobyl.overview.today.highlights': 'Educational Tours, Scientific Research, Wildlife Recovery, Historical Preservation, Safety Protocols, Memorial Sites',
    
    'cities.chernobyl.overview.images.reactor': 'Reactor 4 with New Safe Confinement',
    'cities.chernobyl.overview.images.pripyat': 'Abandoned city of Pripyat',
    'cities.chernobyl.overview.images.memorial': 'Memorial to disaster victims',
    
    'cities.chernobyl.history.title': 'Timeline of Events',
    'cities.chernobyl.history.construction.title': 'Power Plant Construction',
    'cities.chernobyl.history.construction.description': 'Construction of the Chernobyl Nuclear Power Plant began in 1970, with the first reactor becoming operational in 1977. The facility was designed to provide power to the growing Soviet economy.',
    
    'cities.chernobyl.history.disaster.title': 'The Accident',
    'cities.chernobyl.history.disaster.description': 'On April 26, 1986, during a safety test, Reactor 4 exploded, releasing radioactive materials across Europe. This became the worst nuclear disaster in history.',
    
    'cities.chernobyl.history.containment.title': 'Containment Efforts',
    'cities.chernobyl.history.containment.description': 'Massive containment and cleanup efforts began immediately, involving hundreds of thousands of workers. The original sarcophagus was built to contain the damaged reactor.',
    
    'cities.chernobyl.history.tourism.title': 'Educational Tourism',
    'cities.chernobyl.history.tourism.description': 'In 2011, Ukraine opened the exclusion zone for educational tours, allowing visitors to learn about the disaster and its aftermath through guided, safe visits.',
    
    'cities.chernobyl.zones.title': 'Exclusion Zone Areas',
    'cities.chernobyl.zones.subtitle': 'Different areas within the 30km exclusion zone offer various educational experiences',
    
    'cities.chernobyl.zones.exclusion-zone.name': '30km Exclusion Zone',
    'cities.chernobyl.zones.exclusion-zone.description': 'The outer boundary where access is controlled and radiation monitoring is conducted',
    'cities.chernobyl.zones.exclusion-zone.highlights': 'Checkpoints, Monitoring Stations, Wildlife Areas',
    
    'cities.chernobyl.zones.pripyat-city.name': 'Pripyat City',
    'cities.chernobyl.zones.pripyat-city.description': 'The abandoned city that housed 50,000 plant workers and their families',
    'cities.chernobyl.zones.pripyat-city.highlights': 'Abandoned Buildings, Amusement Park, Schools',
    
    'cities.chernobyl.zones.chernobyl-town.name': 'Chernobyl Town',
    'cities.chernobyl.zones.chernobyl-town.description': 'The administrative center where some workers still maintain the facility',
    'cities.chernobyl.zones.chernobyl-town.highlights': 'Administrative Buildings, Worker Facilities, Monuments',
    
    'cities.chernobyl.zones.cooling-pond.name': 'Cooling Pond Area',
    'cities.chernobyl.zones.cooling-pond.description': 'The artificial lake used for cooling the reactors, now a wildlife habitat',
    'cities.chernobyl.zones.cooling-pond.highlights': 'Wildlife Viewing, Scientific Studies, Nature Recovery',
    
    'cities.chernobyl.tours.title': 'Tour Information',
    
    'cities.chernobyl.tours.safety.title': 'Safety & Regulations',
    'cities.chernobyl.tours.safety.description': 'All tours are conducted with strict safety protocols and professional guides',
    'cities.chernobyl.tours.safety.guide': 'Licensed professional guides required',
    'cities.chernobyl.tours.safety.equipment': 'Radiation monitoring equipment provided',
    'cities.chernobyl.tours.safety.restrictions': 'Age and health restrictions apply',
    
    'cities.chernobyl.tours.duration.title': 'Tour Options',
    'cities.chernobyl.tours.duration.description': 'Various tour lengths available to suit different interests',
    'cities.chernobyl.tours.duration.oneday': 'One-day tours: Basic overview',
    'cities.chernobyl.tours.duration.twoday': 'Two-day tours: Extended exploration',
    'cities.chernobyl.tours.duration.private': 'Private tours: Customized experience',
    
    'cities.chernobyl.tours.booking.title': 'Booking Requirements',
    'cities.chernobyl.tours.booking.description': 'Advance booking and documentation required',
    'cities.chernobyl.tours.booking.advance': 'Book minimum 2 weeks in advance',
    'cities.chernobyl.tours.booking.passport': 'Valid passport required',
    'cities.chernobyl.tours.booking.operators': 'Use only licensed tour operators',
    
    'cities.chernobyl.cta.title': 'Educational Experience',
    'cities.chernobyl.cta.subtitle': 'Learn about history through safe, guided tours of this significant site',
    'cities.chernobyl.cta.tours': 'Book Educational Tour',
    'cities.chernobyl.cta.insurance': 'Get Travel Insurance',

    // CHERNIVTSI TRANSLATIONS
    'cities.chernivtsi.name': 'Chernivtsi',
    'cities.chernivtsi.hero.title': 'Chernivtsi - Little Vienna',
    'cities.chernivtsi.hero.subtitle': 'Explore the multicultural gem of Bukovina with its stunning UNESCO university and rich architectural heritage',
    'cities.chernivtsi.hero.cta.plan': 'Plan Your Visit',
    'cities.chernivtsi.hero.cta.guide': 'City Guide',
    
    'cities.chernivtsi.facts.title': 'Chernivtsi at a Glance',
    'cities.chernivtsi.facts.population.value': '264K',
    'cities.chernivtsi.facts.population.label': 'Population',
    'cities.chernivtsi.facts.founded.value': '1408',
    'cities.chernivtsi.facts.founded.label': 'First Mentioned',
    'cities.chernivtsi.facts.unesco.value': '2011',
    'cities.chernivtsi.facts.unesco.label': 'UNESCO University',
    'cities.chernivtsi.facts.languages.value': '4+',
    'cities.chernivtsi.facts.languages.label': 'Historic Languages',
    
    'cities.chernivtsi.attractions.title': 'Must-See Attractions',
    'cities.chernivtsi.attractions.subtitle': 'Discover the architectural and cultural treasures of Bukovina',
    'cities.chernivtsi.attractions.learn': 'Learn More',
    
    'cities.chernivtsi.attractions.university.name': 'Chernivtsi University',
    'cities.chernivtsi.attractions.university.description': 'UNESCO World Heritage university building, masterpiece of 19th-century architecture',
    
    'cities.chernivtsi.attractions.theater-square.name': 'Theater Square',
    'cities.chernivtsi.attractions.theater-square.description': 'Central square with beautiful theater and surrounding historic buildings',
    
    'cities.chernivtsi.attractions.armenian-church.name': 'Armenian Church',
    'cities.chernivtsi.attractions.armenian-church.description': 'Historic Armenian church showcasing the city\'s multicultural heritage',
    
    'cities.chernivtsi.attractions.city-hall.name': 'City Hall',
    'cities.chernivtsi.attractions.city-hall.description': 'Elegant Austrian-era city hall building with distinctive architecture',
    
    'cities.chernivtsi.attractions.museum-art.name': 'Art Museum',
    'cities.chernivtsi.attractions.museum-art.description': 'Regional art museum with collections of local and European works',
    
    'cities.chernivtsi.attractions.prut-river.name': 'Prut River Embankment',
    'cities.chernivtsi.attractions.prut-river.description': 'Scenic riverside area perfect for walks and relaxation',
    
    'cities.chernivtsi.overview.title': 'Discover Chernivtsi',
    'cities.chernivtsi.overview.subtitle': 'Experience the multicultural charm of Bukovina\'s capital',
    
    'cities.chernivtsi.overview.about.title': 'Little Vienna of the East',
    'cities.chernivtsi.overview.about.description1': 'Chernivtsi, known as "Little Vienna," is a remarkable city that showcases the architectural and cultural heritage of the former Austro-Hungarian Empire. Its UNESCO World Heritage university building stands as a testament to the city\'s rich educational and cultural traditions.',
    'cities.chernivtsi.overview.about.description2': 'The city\'s unique character stems from its multicultural past, where Ukrainian, Romanian, German, Jewish, and Polish communities created a vibrant cultural mosaic that continues to influence its identity today.',
    
    'cities.chernivtsi.overview.culture.title': 'Multicultural Heritage',
    'cities.chernivtsi.overview.culture.description': 'Chernivtsi\'s cultural landscape reflects its diverse history, with influences from various European traditions creating a unique blend of architecture, cuisine, and customs.',
    'cities.chernivtsi.overview.culture.highlights': 'Austrian Architecture, University Traditions, Literary Heritage, Multicultural Festivals, Classical Music, Historical Museums',
    
    'cities.chernivtsi.overview.images.university': 'UNESCO World Heritage University',
    'cities.chernivtsi.overview.images.square': 'Central Theater Square',
    'cities.chernivtsi.overview.images.river': 'Scenic Prut River embankment',
    
    'cities.chernivtsi.history.title': 'Centuries of Cultural Exchange',
    'cities.chernivtsi.history.founding.title': 'Medieval Origins',
    'cities.chernivtsi.history.founding.description': 'First mentioned in 1408, Chernivtsi developed as an important trading center in the historical region of Bukovina, benefiting from its strategic location.',
    
    'cities.chernivtsi.history.austrian.title': 'Austrian Period',
    'cities.chernivtsi.history.austrian.description': 'Under Austrian rule (1775-1918), Chernivtsi flourished as the capital of Bukovina, developing its distinctive architecture and multicultural character.',
    
    'cities.chernivtsi.history.university.title': 'University Foundation',
    'cities.chernivtsi.history.university.description': 'The founding of Chernivtsi University in 1875 marked the city\'s emergence as a major educational center, with its magnificent building becoming an architectural masterpiece.',
    
    'cities.chernivtsi.history.modern.title': 'Modern Chernivtsi',
    'cities.chernivtsi.history.modern.description': 'Today, Chernivtsi continues to be an important educational and cultural center, preserving its architectural heritage while embracing its role in modern Ukraine.',
    
    'cities.chernivtsi.districts.title': 'Historic Districts',
    'cities.chernivtsi.districts.subtitle': 'Each district reflects different aspects of the city\'s multicultural heritage',
    
    'cities.chernivtsi.districts.historic-center.name': 'Historic Center',
    'cities.chernivtsi.districts.historic-center.description': 'The heart of Chernivtsi with its Austrian-era architecture and main cultural attractions',
    'cities.chernivtsi.districts.historic-center.highlights': 'Theater Square, City Hall, Historic Buildings',
    
    'cities.chernivtsi.districts.university-quarter.name': 'University Quarter',
    'cities.chernivtsi.districts.university-quarter.description': 'The prestigious educational district centered around the UNESCO World Heritage university',
    'cities.chernivtsi.districts.university-quarter.highlights': 'University Campus, Student Life, Academic Traditions',
    
    'cities.chernivtsi.districts.romanian-district.name': 'Romanian Quarter',
    'cities.chernivtsi.districts.romanian-district.description': 'Historic area reflecting the city\'s Romanian cultural heritage and traditions',
    'cities.chernivtsi.districts.romanian-district.highlights': 'Romanian Churches, Cultural Centers, Traditional Architecture',
    
    'cities.chernivtsi.districts.jewish-quarter.name': 'Former Jewish Quarter',
    'cities.chernivtsi.districts.jewish-quarter.description': 'Area that was once home to a thriving Jewish community, part of the city\'s multicultural heritage',
    'cities.chernivtsi.districts.jewish-quarter.highlights': 'Synagogue Sites, Memorial Places, Cultural Heritage',
    
    'cities.chernivtsi.practical.title': 'Practical Information',
    
    'cities.chernivtsi.practical.visit.title': 'Best Time to Visit',
    'cities.chernivtsi.practical.visit.description': 'Chernivtsi is beautiful throughout the year, with each season offering unique experiences',
    'cities.chernivtsi.practical.visit.spring': 'Spring (Apr-May): Pleasant weather, blooming parks',
    'cities.chernivtsi.practical.visit.summer': 'Summer (Jun-Aug): Warm weather, outdoor festivals',
    'cities.chernivtsi.practical.visit.autumn': 'Autumn (Sep-Oct): Beautiful colors, comfortable temperatures',
    'cities.chernivtsi.practical.visit.winter': 'Winter (Nov-Mar): Cozy atmosphere, fewer crowds',
    
    'cities.chernivtsi.practical.architecture.title': 'Architecture Tours',
    'cities.chernivtsi.practical.architecture.description': 'Explore the city\'s stunning architectural heritage',
    'cities.chernivtsi.practical.architecture.university': 'UNESCO University building tours',
    'cities.chernivtsi.practical.architecture.churches': 'Historic churches of various denominations',
    'cities.chernivtsi.practical.architecture.mansions': 'Austrian-era mansions and public buildings',
    
    'cities.chernivtsi.practical.transport.title': 'Getting Around',
    'cities.chernivtsi.practical.transport.description': 'Chernivtsi is compact and walkable, with good public transport',
    'cities.chernivtsi.practical.transport.walking': 'Walking tours of the historic center',
    'cities.chernivtsi.practical.transport.trolley': 'Trolleybus system connecting districts',
    'cities.chernivtsi.practical.transport.taxi': 'Taxi services readily available',
    'cities.chernivtsi.practical.transport.train': 'Railway connections to major Ukrainian cities',
    
    'cities.chernivtsi.cta.title': 'Experience Little Vienna',
    'cities.chernivtsi.cta.subtitle': 'Discover the multicultural heritage and architectural beauty of Bukovina\'s capital',
    'cities.chernivtsi.cta.hotels': 'Find Hotels',
    'cities.chernivtsi.cta.insurance': 'Get Insured',

    // ESSENTIAL INFORMATION PAGE
    'essential.nav.title': 'Essential Information',
    'essential.hero.title': 'Essential Travel Information',
    'essential.hero.subtitle': 'Everything you need to know for a safe and memorable journey to Ukraine',
    'essential.hero.cta.entry': 'Entry Requirements',
    'essential.hero.cta.insurance': 'Get Insured',
    
    'essential.facts.title': 'Quick Facts',
    'essential.facts.subtitle': 'Key information for travelers to Ukraine',
    'essential.facts.language.value': 'Ukrainian',
    'essential.facts.language.label': 'Official Language',
    'essential.facts.currency.value': 'UAH (₴)',
    'essential.facts.currency.label': 'Currency',
    'essential.facts.timezone.value': 'EET/EEST',
    'essential.facts.timezone.label': 'Time Zone',
    'essential.facts.emergency.value': '112',
    'essential.facts.emergency.label': 'Emergency Number',
    
    'essential.sections.title': 'Essential Information',
    'essential.sections.subtitle': 'Comprehensive guide to traveling in Ukraine',
    'essential.sections.learn': 'Learn More',
    
    'essential.sections.entry-requirements.title': 'Entry Requirements',
    'essential.sections.entry-requirements.description': 'Visa requirements, passport validity, and border crossing information for different nationalities.',
    'essential.sections.entry-requirements.points': 'Valid passport required|Visa-free for many countries|COVID-19 requirements may apply|Border crossing procedures',
    
    'essential.sections.currency-payments.title': 'Currency & Payments',
    'essential.sections.currency-payments.description': 'Information about Ukrainian currency, exchange rates, and payment methods.',
    'essential.sections.currency-payments.points': 'Ukrainian Hryvnia (UAH)|ATMs widely available|Card payments accepted|Currency exchange offices',
    
    'essential.sections.health-safety.title': 'Health & Safety',
    'essential.sections.health-safety.description': 'Health insurance, medical facilities, and safety recommendations for travelers.',
    'essential.sections.health-safety.points': 'Travel insurance recommended|Good medical facilities in cities|Emergency services available|Safety precautions advised',
    
    'essential.sections.transportation.title': 'Transportation',
    'essential.sections.transportation.description': 'Public transport, taxis, car rentals, and intercity travel options.',
    'essential.sections.transportation.points': 'Efficient public transport|Railway network available|Taxi and ride-sharing|Car rental options',
    
    'essential.sections.communication.title': 'Communication',
    'essential.sections.communication.description': 'Internet access, mobile networks, and language considerations.',
    'essential.sections.communication.points': 'Good mobile coverage|WiFi widely available|English in tourist areas|Translation apps helpful',
    
    'essential.sections.cultural-tips.title': 'Cultural Tips',
    'essential.sections.cultural-tips.description': 'Local customs, etiquette, and cultural insights for respectful travel.',
    'essential.sections.cultural-tips.points': 'Warm and hospitable people|Respect local customs|Tipping is customary|Learn basic Ukrainian phrases',
    
    'essential.checklist.title': 'Travel Checklist',
    'essential.checklist.subtitle': 'Essential items and preparations for your Ukraine trip',
    
    'essential.checklist.before.title': 'Before You Travel',
    'essential.checklist.before.items': 'Check passport validity (6+ months)|Obtain travel insurance|Research visa requirements|Book accommodation|Plan your itinerary|Download offline maps|Learn basic Ukrainian phrases|Check current travel advisories',
    
    'essential.checklist.arrival.title': 'Upon Arrival',
    'essential.checklist.arrival.items': 'Exchange currency or find ATM|Get local SIM card if needed|Download transport apps|Register accommodation if required|Keep important documents safe|Have emergency contacts ready',
    
    'essential.emergency.title': 'Emergency Information',
    'essential.emergency.subtitle': 'Important numbers and contacts for your safety',
    'essential.emergency.police.label': 'Police',
    'essential.emergency.police.number': '102',
    'essential.emergency.medical.label': 'Medical',
    'essential.emergency.medical.number': '103',
    'essential.emergency.fire.label': 'Fire Service',
    'essential.emergency.fire.number': '101',
    
    'essential.cta.title': 'Ready to Travel?',
    'essential.cta.subtitle': 'Get prepared with insurance and accommodation for your Ukrainian adventure',
    'essential.cta.insurance': 'Get Travel Insurance',
    'essential.cta.hotels': 'Find Hotels',

    // HIDDEN GEMS PAGE
    'gems.nav.title': 'Hidden Gems',
    'gems.hero.title': 'Ukraine\'s Hidden Gems',
    'gems.hero.subtitle': 'Discover secret places, untouched nature, and authentic experiences beyond the tourist trail',
    'gems.hero.cta.destinations': 'Popular Destinations',
    'gems.hero.cta.regions': 'By Regions',
    
    'gems.categories.title': 'Explore by Category',
    'gems.categories.subtitle': 'Find hidden treasures across different types of experiences',
    'gems.categories.nature': 'Natural Wonders',
    'gems.categories.historical': 'Historical Sites',
    'gems.categories.cultural': 'Cultural Gems',
    'gems.categories.spiritual': 'Spiritual Places',
    
    'gems.grid.title': 'Discover Hidden Treasures',
    'gems.grid.subtitle': 'Off-the-beaten-path destinations that showcase Ukraine\'s authentic beauty',
    'gems.items.explore': 'Explore',
    
    'gems.items.tunnel-of-love.name': 'Tunnel of Love',
    'gems.items.tunnel-of-love.description': 'Romantic railway tunnel covered by green arches, perfect for couples and nature lovers',
    'gems.items.tunnel-of-love.location': 'Klevan, Rivne Oblast',
    
    'gems.items.olesko-castle.name': 'Olesko Castle',
    'gems.items.olesko-castle.description': 'Medieval castle with rich history and stunning views over the surrounding countryside',
    'gems.items.olesko-castle.location': 'Olesko, Lviv Oblast',
    
    'gems.items.askania-nova.name': 'Askania-Nova Reserve',
    'gems.items.askania-nova.description': 'Unique biosphere reserve with wild animals and pristine steppe landscapes',
    'gems.items.askania-nova.location': 'Kherson Oblast',
    
    'gems.items.kamianets-podilskyi.name': 'Kamianets-Podilskyi',
    'gems.items.kamianets-podilskyi.description': 'Ancient fortress city with medieval architecture and dramatic canyon setting',
    'gems.items.kamianets-podilskyi.location': 'Khmelnytskyi Oblast',
    
    'gems.items.shatsky-lakes.name': 'Shatsky Lakes',
    'gems.items.shatsky-lakes.description': 'Crystal-clear lakes surrounded by pristine forests, ideal for nature enthusiasts',
    'gems.items.shatsky-lakes.location': 'Volyn Oblast',
    
    'gems.items.khotyn-fortress.name': 'Khotyn Fortress',
    'gems.items.khotyn-fortress.description': 'Impressive medieval fortress overlooking the Dniester River with panoramic views',
    'gems.items.khotyn-fortress.location': 'Chernivtsi Oblast',
    
    'gems.items.klevan-castle.name': 'Klevan Castle',
    'gems.items.klevan-castle.description': 'Romantic castle ruins surrounded by parkland and mysterious legends',
    'gems.items.klevan-castle.location': 'Klevan, Rivne Oblast',
    
    'gems.items.dzharylhach.name': 'Dzharylhach Island',
    'gems.items.dzharylhach.description': 'Pristine island with sandy beaches and unique ecosystem in the Black Sea',
    'gems.items.dzharylhach.location': 'Kherson Oblast',
    
    'gems.items.pidhirtsi-castle.name': 'Pidhirtsi Castle',
    'gems.items.pidhirtsi-castle.description': 'Renaissance palace complex with beautiful gardens and rich cultural heritage',
    'gems.items.pidhirtsi-castle.location': 'Lviv Oblast',
    
    'gems.regions.rivne': 'Rivne Oblast',
    'gems.regions.lviv': 'Lviv Oblast',
    'gems.regions.kherson': 'Kherson Oblast',
    'gems.regions.khmelnytskyi': 'Khmelnytskyi Oblast',
    'gems.regions.volyn': 'Volyn Oblast',
    'gems.regions.chernivtsi': 'Chernivtsi Oblast',
    
    'gems.why.title': 'Why Visit Hidden Gems?',
    'gems.why.subtitle': 'Discover the unique advantages of exploring off-the-beaten-path destinations',
    'gems.why.authentic.title': 'Authentic Experiences',
    'gems.why.authentic.description': 'Experience genuine Ukrainian culture without tourist crowds and commercialization.',
    'gems.why.photography.title': 'Unique Photography',
    'gems.why.photography.description': 'Capture stunning, original photos that showcase Ukraine\'s undiscovered beauty.',
    'gems.why.support.title': 'Support Local Communities',
    'gems.why.support.description': 'Your visit directly benefits small communities and helps preserve local traditions.',
    
    'gems.planning.title': 'Planning Your Hidden Gems Adventure',
    'gems.planning.subtitle': 'Essential tips for exploring Ukraine\'s lesser-known destinations',
    'gems.planning.research.title': 'Research & Preparation',
    'gems.planning.research.description': 'Plan ahead as hidden gems may have limited facilities and require special arrangements.',
    'gems.planning.transport.title': 'Transportation',
    'gems.planning.transport.description': 'Consider renting a car or joining organized tours for better access to remote locations.',
    'gems.planning.timing.title': 'Best Times to Visit',
    'gems.planning.timing.description': 'Check seasonal accessibility and weather conditions for outdoor destinations.',
    
    'gems.planning.tips.title': 'Insider Tips',
    'gems.planning.tips.items': 'Learn basic Ukrainian phrases for rural areas|Bring cash as card payments may not be available|Respect local customs and private property|Pack appropriate clothing for outdoor activities|Download offline maps and translation apps|Consider hiring local guides for cultural insights',
    
    'gems.cta.title': 'Start Your Hidden Gems Journey',
    'gems.cta.subtitle': 'Discover Ukraine\'s secret treasures and create unforgettable memories',
    'gems.cta.hotels': 'Find Accommodation',
    'gems.cta.insurance': 'Get Travel Insurance',

    // UNESCO SITES PAGE (abbreviated due to space)
    'unesco.nav.title': 'UNESCO Sites',
    'unesco.hero.title': 'Ukraine\'s UNESCO World Heritage',
    'unesco.hero.subtitle': 'Explore sites of outstanding universal value recognized by UNESCO',
    'unesco.hero.cta.explore': 'Explore Sites',
    'unesco.hero.cta.kyiv': 'Visit Kyiv',
    
    'unesco.stats.title': 'UNESCO Heritage in Numbers',
    'unesco.stats.subtitle': 'Ukraine\'s contribution to world heritage',
    'unesco.stats.total.label': 'UNESCO Sites',
    'unesco.stats.cultural.label': 'Cultural Sites',
    'unesco.stats.natural.label': 'Natural Sites',
    'unesco.stats.years.label': 'Years of Heritage',
    
    'unesco.sites.title': 'World Heritage Sites',
    'unesco.sites.subtitle': 'Discover Ukraine\'s UNESCO-recognized treasures',
    'unesco.sites.learn': 'Learn More',
    'unesco.sites.inscribed': 'Inscribed',
    
    'unesco.types.cultural': 'Cultural',
    'unesco.types.natural': 'Natural',
    
    'unesco.sites.kyiv-sofia.name': 'Kyiv: Saint-Sophia\'s Cathedral',
    'unesco.sites.kyiv-sofia.description': 'Outstanding architectural monument of Kyivan Rus with unique mosaics and frescoes',
    'unesco.sites.kyiv-sofia.location': 'Kyiv',
    'unesco.sites.kyiv-sofia.criteria': 'Criteria i, ii, iii, iv',
    'unesco.sites.kyiv-sofia.significance': 'Represents the flowering of Byzantine art and architecture in Eastern Europe',
    
    'unesco.sites.lviv-historic-center.name': 'Lviv Historic Centre',
    'unesco.sites.lviv-historic-center.description': 'Exceptional example of urban planning and architecture reflecting multicultural traditions',
    'unesco.sites.lviv-historic-center.location': 'Lviv',
    'unesco.sites.lviv-historic-center.criteria': 'Criteria ii, v',
    'unesco.sites.lviv-historic-center.significance': 'Outstanding testimony to the synthesis of Eastern and Western European architectural traditions',
    
    // Additional UNESCO sites (condensed)
    'unesco.sites.struve-arc.name': 'Struve Geodetic Arc',
    'unesco.sites.struve-arc.description': 'Chain of survey triangulations for measuring earth\'s shape',
    'unesco.sites.struve-arc.location': 'Multiple locations',
    'unesco.sites.primeval-beech-forests.name': 'Primeval Beech Forests',
    'unesco.sites.primeval-beech-forests.description': 'Ancient beech forests representing outstanding examples of undisturbed ecosystems',
    'unesco.sites.primeval-beech-forests.location': 'Carpathians',
    'unesco.sites.wooden-churches.name': 'Wooden Tserkvas',
    'unesco.sites.wooden-churches.description': 'Wooden churches representing outstanding examples of religious architecture',
    'unesco.sites.wooden-churches.location': 'Carpathians',
    'unesco.sites.chernivtsi-university.name': 'Chernivtsi University',
    'unesco.sites.chernivtsi-university.description': 'Outstanding example of 19th-century architecture and urban planning',
    'unesco.sites.chernivtsi-university.location': 'Chernivtsi',
    'unesco.sites.chernivtsi-university.criteria': 'Criteria ii, iv',
    'unesco.sites.chernivtsi-university.significance': 'Outstanding example of 19th-century Habsburg architecture and urban planning',

    'unesco.sites.struve-arc.criteria': 'Criteria ii, iii, vi',
    'unesco.sites.struve-arc.significance': 'Represents a major advance in earth sciences and international scientific collaboration',
    'unesco.sites.primeval-beech-forests.criteria': 'Criteria ix',
    'unesco.sites.primeval-beech-forests.significance': 'Outstanding examples of undisturbed complex temperate forests',
    'unesco.sites.wooden-churches.criteria': 'Criteria iii, iv',
    'unesco.sites.wooden-churches.significance': 'Outstanding examples of vernacular religious architecture in Eastern Europe',
    
    'unesco.importance.title': 'Why UNESCO Heritage Matters',
    'unesco.importance.subtitle': 'Understanding the significance of World Heritage recognition',
    'unesco.importance.universal.title': 'Universal Value',
    'unesco.importance.universal.description': 'These sites represent outstanding value to humanity as a whole.',
    'unesco.importance.protection.title': 'Protection & Preservation',
    'unesco.importance.protection.description': 'UNESCO status ensures long-term conservation for future generations.',
    'unesco.importance.education.title': 'Education & Awareness',
    'unesco.importance.education.description': 'Sites serve as learning opportunities about history and culture.',
    
    'unesco.responsible.title': 'Visit Responsibly',
    'unesco.responsible.subtitle': 'Help preserve these treasures for future generations',
    'unesco.responsible.guidelines.title': 'Visitor Guidelines',
    'unesco.responsible.guidelines.items': 'Respect site rules and regulations|Stay on designated paths|Don\'t touch artifacts or structures|Follow photography restrictions|Keep noise levels low|Support local conservation efforts',
    'unesco.responsible.impact.title': 'Your Impact Matters',
    'unesco.responsible.impact.description': 'Responsible tourism helps fund conservation and benefits local communities.',
    'unesco.responsible.support.title': 'Support Conservation',
    'unesco.responsible.support.description': 'Consider donating to heritage preservation organizations.',
    
    'unesco.cta.title': 'Explore UNESCO Heritage',
    'unesco.cta.subtitle': 'Visit these remarkable sites and become part of their preservation story',
    'unesco.cta.kyiv': 'Discover Kyiv',
    'unesco.cta.lviv': 'Explore Lviv',

    // BY REGIONS PAGE (condensed)
    'regions.nav.title': 'By Regions',
    'regions.hero.title': 'Explore Ukraine by Region',
    'regions.hero.subtitle': 'Discover the diverse landscapes, cultures, and attractions across Ukraine\'s regions',
    'regions.hero.cta.destinations': 'Top Destinations',
    'regions.hero.cta.capital': 'Visit Capital',
    
    'regions.highlights.title': 'Regional Diversity',
    'regions.highlights.subtitle': 'What makes each region of Ukraine unique',
    'regions.highlights.diversity.title': 'Cultural Diversity',
    'regions.highlights.diversity.description': 'Each region has distinct traditions',
    'regions.highlights.landscapes.title': 'Varied Landscapes',
    'regions.highlights.landscapes.description': 'From mountains to seashores',
    'regions.highlights.culture.title': 'Rich Heritage',
    'regions.highlights.culture.description': 'Centuries of history and culture',
    'regions.highlights.history.title': 'Historical Significance',
    'regions.highlights.history.description': 'Important historical sites',
    
    'regions.grid.title': 'Discover Ukraine\'s Regions',
    'regions.grid.subtitle': 'Each region offers unique experiences and attractions',
    'regions.items.key_cities': 'Key Cities',
    'regions.items.explore': 'Explore Region',
    
    'regions.items.western-ukraine.name': 'Western Ukraine',
    'regions.items.western-ukraine.description': 'Historic cities, UNESCO sites, and mountain landscapes',
    'regions.items.western-ukraine.location': 'Lviv, Chernivtsi, Carpathians',
    'regions.items.central-ukraine.name': 'Central Ukraine',
    'regions.items.central-ukraine.description': 'The heart of Ukraine with the capital and cultural centers',
    'regions.items.central-ukraine.location': 'Kyiv, Cherkasy, Poltava',
    'regions.items.eastern-ukraine.name': 'Eastern Ukraine',
    'regions.items.eastern-ukraine.description': 'Industrial heritage and diverse cultural attractions',
    'regions.items.eastern-ukraine.location': 'Kharkiv, Dnipro',
    'regions.items.southern-ukraine.name': 'Southern Ukraine',
    'regions.items.southern-ukraine.description': 'Black Sea coastline with beaches and historic ports',
    'regions.items.southern-ukraine.location': 'Odesa, Mykolaiv',
    'regions.items.carpathian-region.name': 'Carpathian Mountains',
    'regions.items.carpathian-region.description': 'Mountain adventures, traditional villages, and natural beauty',
    'regions.items.carpathian-region.location': 'Bukovel, Yaremche',
    'regions.items.northern-ukraine.name': 'Northern Ukraine',
    'regions.items.northern-ukraine.description': 'Forests, historic towns, and natural reserves',
    'regions.items.northern-ukraine.location': 'Chernihiv, Sumy',
    
    'regions.cities.lviv': 'Lviv',
    'regions.cities.chernivtsi': 'Chernivtsi',
    'regions.cities.uzhhorod': 'Uzhhorod',
    'regions.cities.ivano-frankivsk': 'Ivano-Frankivsk',
    'regions.cities.kyiv': 'Kyiv',
    'regions.cities.cherkasy': 'Cherkasy',
    'regions.cities.poltava': 'Poltava',
    'regions.cities.vinnytsia': 'Vinnytsia',
    'regions.cities.kharkiv': 'Kharkiv',
    'regions.cities.dnipro': 'Dnipro',
    'regions.cities.zaporizhzhia': 'Zaporizhzhia',
    'regions.cities.odesa': 'Odesa',
    'regions.cities.mykolaiv': 'Mykolaiv',
    'regions.cities.kherson': 'Kherson',
    'regions.cities.bukovel': 'Bukovel',
    'regions.cities.yaremche': 'Yaremche',
    'regions.cities.kolomyia': 'Kolomyia',
    'regions.cities.chernihiv': 'Chernihiv',
    'regions.cities.sumy': 'Sumy',
    'regions.cities.zhytomyr': 'Zhytomyr',
    
    'regions.specialties.title': 'Regional Specialties',
    'regions.specialties.subtitle': 'What makes each region unique and special',
    'regions.specialties.architecture.title': 'Architectural Heritage',
    'regions.specialties.architecture.description': 'From ancient churches to Habsburg palaces, each region showcases distinct architectural styles.',
    'regions.specialties.architecture.examples': 'Byzantine churches, Gothic cathedrals, Baroque palaces, Soviet monuments',
    'regions.specialties.nature.title': 'Natural Wonders',
    'regions.specialties.nature.description': 'Ukraine\'s diverse landscapes offer everything from mountain peaks to coastal plains.',
    'regions.specialties.nature.examples': 'Carpathian Mountains, Black Sea coast, Dnipro River, Steppe landscapes',
    'regions.specialties.cuisine.title': 'Regional Cuisine',
    'regions.specialties.cuisine.description': 'Each region has developed unique culinary traditions influenced by geography and history.',
    'regions.specialties.cuisine.examples': 'Borscht variations, Carpathian mushrooms, Black Sea fish, Traditional pastries',

    'regions.tips.title': 'Travel Tips by Region',
    'regions.tips.subtitle': 'Essential advice for exploring Ukraine\'s diverse regions',
    'regions.tips.planning.title': 'Planning Your Journey',
    'regions.tips.planning.items': 'Research regional specialties and attractions|Consider seasonal weather variations|Plan transportation between regions|Book accommodation in advance during peak season|Learn about local customs and traditions|Check for regional festivals and events',

    'regions.tips.seasonal.title': 'Seasonal Considerations',
    'regions.tips.seasonal.spring.title': 'Spring (March-May)',
    'regions.tips.seasonal.spring.description': 'Mild weather, blooming landscapes, fewer crowds',
    'regions.tips.seasonal.summer.title': 'Summer (June-August)',
    'regions.tips.seasonal.summer.description': 'Warm weather, peak season, vibrant festivals',
    'regions.tips.seasonal.autumn.title': 'Autumn (September-November)',
    'regions.tips.seasonal.autumn.description': 'Beautiful colors, harvest season, comfortable temperatures',
    'regions.tips.seasonal.winter.title': 'Winter (December-February)',
    'regions.tips.seasonal.winter.description': 'Snow activities, winter festivals, cozy indoor experiences',

    'regions.cta.title': 'Start Your Regional Adventure',
    'regions.cta.subtitle': 'Choose your region and discover Ukraine\'s incredible diversity',
    'regions.cta.destinations': 'View Destinations',
    'regions.cta.hotels': 'Find Hotels',

    // JEWISH UKRAINE PAGE (condensed)
    'jewish.nav.title': 'Jewish Ukraine',
    'jewish.hero.title': 'Jewish Heritage in Ukraine',
    'jewish.hero.subtitle': 'Discover the rich history and cultural legacy of Jewish communities in Ukraine',
    'jewish.hero.cta.explore': 'Explore Heritage',
    'jewish.hero.cta.history': 'Learn History',
    
    'jewish.history.title': 'Historical Periods',
    'jewish.history.subtitle': 'Key periods in Ukrainian Jewish history',
    'jewish.history.golden-age.title': 'Golden Age',
    'jewish.history.golden-age.description': 'Period of prosperity and cultural flourishing',
    'jewish.history.hasidism.title': 'Hasidic Movement',
    'jewish.history.hasidism.description': 'Birth of influential Jewish spiritual movement',
    'jewish.history.pogroms.title': 'Difficult Times',
    'jewish.history.pogroms.description': 'Period of persecution and emigration',
    'jewish.history.holocaust.title': 'Holocaust',
    'jewish.history.holocaust.description': 'Tragic destruction during World War II',
    
    'jewish.sites.title': 'Heritage Sites',
    'jewish.sites.subtitle': 'Important Jewish heritage locations across Ukraine',
    'jewish.sites.learn': 'Learn More',
    
    'jewish.significance.high': 'Major Site',
    'jewish.significance.medium': 'Important Site',
    
    'jewish.types.memorial': 'Memorial',
    'jewish.types.synagogue': 'Synagogue',
    'jewish.types.pilgrimage': 'Pilgrimage',
    'jewish.types.community': 'Community',
    'jewish.types.historical': 'Historical',
    
    'jewish.sites.babyn-yar.name': 'Babyn Yar Memorial',
    'jewish.sites.babyn-yar.description': 'Memorial to Holocaust victims and site of remembrance',
    'jewish.sites.lviv-synagogue.name': 'Lviv Synagogues',
    'jewish.sites.lviv-synagogue.description': 'Historic synagogues and Jewish quarter remains',
    'jewish.sites.uman-pilgrimage.name': 'Uman Pilgrimage Site',
    'jewish.sites.uman-pilgrimage.description': 'Important pilgrimage destination for Breslov Hasidim',
    'jewish.sites.chernivtsi-temple.name': 'Chernivtsi Temple',
    'jewish.sites.chernivtsi-temple.description': 'Beautiful temple representing multicultural heritage',
    'jewish.sites.odesa-community.name': 'Odesa Jewish Community',
    'jewish.sites.odesa-community.description': 'Historic Jewish community center and cultural sites',
    'jewish.sites.berdychiv-heritage.name': 'Berdychiv Heritage',
    'jewish.sites.berdychiv-heritage.description': 'Important historical Jewish community center',
    
    'jewish.cities.kyiv': 'Kyiv',
    'jewish.cities.lviv': 'Lviv',
    'jewish.cities.uman': 'Uman',
    'jewish.cities.chernivtsi': 'Chernivtsi',
    'jewish.cities.odesa': 'Odesa',
    'jewish.cities.berdychiv': 'Berdychiv',
    
    'jewish.legacy.title': 'Cultural Legacy',
    'jewish.legacy.subtitle': 'The lasting contributions of Ukrainian Jewish communities to world culture',
    'jewish.legacy.literature.title': 'Literature & Writers',
    'jewish.legacy.literature.description': 'Ukrainian Jewish writers have made significant contributions to world literature.',
    'jewish.legacy.literature.examples': 'Sholem Aleichem, Isaac Babel, Vasily Grossman',
    'jewish.legacy.music.title': 'Music & Arts',
    'jewish.legacy.music.description': 'Rich musical traditions from klezmer to classical compositions.',
    'jewish.legacy.music.examples': 'Klezmer music, Folk songs, Classical composers',
    'jewish.legacy.science.title': 'Science & Innovation',
    'jewish.legacy.science.description': 'Notable contributions to science, medicine, and technology.',
    'jewish.legacy.science.examples': 'Medical advances, Scientific research, Technological innovation',

    'jewish.modern.title': 'Modern Initiatives',
    'jewish.modern.subtitle': 'Contemporary efforts to preserve and celebrate Jewish heritage',
    'jewish.modern.preservation.title': 'Heritage Preservation',
    'jewish.modern.preservation.description': 'Restoration of synagogues, cemeteries, and historical sites.',
    'jewish.modern.education.title': 'Educational Programs',
    'jewish.modern.education.description': 'Museums, cultural centers, and educational initiatives.',
    'jewish.modern.tourism.title': 'Heritage Tourism',
    'jewish.modern.tourism.description': 'Guided tours and cultural experiences for visitors.',
    'jewish.modern.community.title': 'Community Revival',
    'jewish.modern.community.description': 'Rebuilding Jewish communities and cultural life.',

    'jewish.respectful.title': 'Respectful Heritage Tourism',
    'jewish.respectful.subtitle': 'Guidelines for meaningful and respectful visits to Jewish heritage sites',
    'jewish.respectful.guidelines.title': 'Visitor Guidelines',
    'jewish.respectful.guidelines.items': 'Approach sites with respect and solemnity|Learn about the history before visiting|Follow site-specific rules and customs|Be mindful when taking photographs|Dress appropriately for religious sites|Support local preservation efforts',
    'jewish.respectful.support.title': 'Supporting Heritage',
    'jewish.respectful.support.description': 'Your respectful visit helps preserve these important sites and supports local communities.',
    'jewish.respectful.support.ways': 'Visit with certified guides|Purchase from local heritage shops|Donate to preservation organizations|Share educational content responsibly|Participate in cultural events|Support community initiatives',

    'jewish.cta.title': 'Explore Jewish Heritage',
    'jewish.cta.subtitle': 'Visit these meaningful sites with respect and understanding',
    'jewish.cta.kyiv': 'Visit Kyiv Sites',
    'jewish.cta.lviv': 'Explore Lviv Heritage',
    
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




