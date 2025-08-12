import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function Kyiv() {
  const { t } = useI18n()

  const attractions = [
    {
      id: 'sophia',
      image: '/media/pexels-freestockpro-1227513.jpg',
      category: 'unesco'
    },
    {
      id: 'lavra',
      image: '/media/pexels-freestockpro-1174204.jpg',
      category: 'religious'
    },
    {
      id: 'independence',
      image: '/media/pexels-freestockpro-12932806.jpg',
      category: 'square'
    },
    {
      id: 'golden-gate',
      image: '/media/pexels-kostiantyn-13200378.jpg',
      category: 'historical'
    },
    {
      id: 'andrew',
      image: '/media/pexels-nextvoyage-1000772.jpg',
      category: 'cultural'
    },
    {
      id: 'museum',
      image: '/media/pexels-freestockpro-2787267.jpg',
      category: 'museum'
    }
  ]

  const districts = [
    { id: 'podil', color: 'bg-[#1F5FA0]' },
    { id: 'pechersk', color: 'bg-[#4E7B53]' },
    { id: 'shevchenko', color: 'bg-[#6A5B8C]' },
    { id: 'obolon', color: 'bg-[#D89B5A]' }
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
            <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
              {t('nav.home')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore" className="hover:text-[#1F5FA0] transition-colors">
              {t('nav.explore')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore/destinations" className="hover:text-[#1F5FA0] transition-colors">
              {t('explore.nav.destinations')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">{t('cities.kyiv.name')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/pexels-freestockpro-1227513.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('cities.kyiv.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            {t('cities.kyiv.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('cities.kyiv.hero.cta.plan')} →
            </button>
            <button className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20">
              {t('cities.kyiv.hero.cta.guide')} →
            </button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.kyiv.facts.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1F5FA0] mb-2">{t('cities.kyiv.facts.population.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.kyiv.facts.population.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#4E7B53] mb-2">{t('cities.kyiv.facts.founded.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.kyiv.facts.founded.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#6A5B8C] mb-2">{t('cities.kyiv.facts.unesco.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.kyiv.facts.unesco.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#D89B5A] mb-2">{t('cities.kyiv.facts.area.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.kyiv.facts.area.label')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.kyiv.attractions.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.kyiv.attractions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div 
                key={attraction.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={t(`cities.kyiv.attractions.${attraction.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`cities.kyiv.attractions.${attraction.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {t(`cities.kyiv.attractions.${attraction.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        attraction.category === 'unesco' ? 'bg-[#D89B5A]' :
                        attraction.category === 'religious' ? 'bg-[#6A5B8C]' :
                        attraction.category === 'square' ? 'bg-[#1F5FA0]' :
                        attraction.category === 'historical' ? 'bg-[#4E7B53]' :
                        attraction.category === 'cultural' ? 'bg-[#6A5B8C]' :
                        'bg-[#1F5FA0]'
                      }`}>
                        {t(`cities.categories.${attraction.category}`)}
                      </span>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('cities.kyiv.attractions.learn')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Overview & History */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.kyiv.overview.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.kyiv.overview.subtitle')}
            </p>
          </div>

          {/* Main Overview Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.kyiv.overview.about.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.kyiv.overview.about.description1')}
                </p>
                <p className="text-[#B0B3BA] leading-relaxed">
                  {t('cities.kyiv.overview.about.description2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.kyiv.overview.culture.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.kyiv.overview.culture.description')}
                </p>
                
                {/* Cultural Highlights */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {t('cities.kyiv.overview.culture.highlights').split(',').map((highlight: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#1F5FA0] text-white rounded-full text-sm font-medium"
                    >
                      {highlight.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src="/media/pexels-freestockpro-12932806.jpg" 
                  alt={t('cities.kyiv.overview.images.modern')}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{t('cities.kyiv.overview.images.modern')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src="/media/pexels-kostiantyn-13200378.jpg" 
                    alt={t('cities.kyiv.overview.images.architecture')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.kyiv.overview.images.architecture')}</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src="/media/pexels-nextvoyage-1000772.jpg" 
                    alt={t('cities.kyiv.overview.images.riverside')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.kyiv.overview.images.riverside')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-[#22242A]">
              {t('cities.kyiv.history.title')}
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#1F5FA0]"></div>
              
              <div className="space-y-8">
                {/* Ancient Times */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    482 AD
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.kyiv.history.founding.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.kyiv.history.founding.description')}
                    </p>
                  </div>
                </div>

                {/* Golden Age */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#F5C542] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    11th C
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.kyiv.history.golden.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.kyiv.history.golden.description')}
                    </p>
                  </div>
                </div>

                {/* Soviet Era */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    20th C
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.kyiv.history.soviet.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.kyiv.history.soviet.description')}
                    </p>
                  </div>
                </div>

                {/* Modern Ukraine */}
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1991+
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.kyiv.history.modern.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.kyiv.history.modern.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.kyiv.districts.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.kyiv.districts.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {districts.map((district) => (
              <div 
                key={district.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${district.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t(`cities.kyiv.districts.${district.id}.name`)}
                    </h3>
                    <p className="text-[#B0B3BA] mb-4">
                      {t(`cities.kyiv.districts.${district.id}.description`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {t(`cities.kyiv.districts.${district.id}.highlights`).split(',').map((highlight: string, index: number) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-xs text-[#22242A]"
                        >
                          {highlight.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.kyiv.practical.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#1F5FA0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.kyiv.practical.visit.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.kyiv.practical.visit.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.kyiv.practical.visit.spring')}</li>
                <li>• {t('cities.kyiv.practical.visit.summer')}</li>
                <li>• {t('cities.kyiv.practical.visit.autumn')}</li>
                <li>• {t('cities.kyiv.practical.visit.winter')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#4E7B53] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.kyiv.practical.language.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.kyiv.practical.language.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.kyiv.practical.language.ukrainian')}</li>
                <li>• {t('cities.kyiv.practical.language.english')}</li>
                <li>• {t('cities.kyiv.practical.language.russian')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#6A5B8C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.kyiv.practical.transport.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.kyiv.practical.transport.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.kyiv.practical.transport.metro')}</li>
                <li>• {t('cities.kyiv.practical.transport.bus')}</li>
                <li>• {t('cities.kyiv.practical.transport.taxi')}</li>
                <li>• {t('cities.kyiv.practical.transport.walk')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('cities.kyiv.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cities.kyiv.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('cities.kyiv.cta.hotels')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('cities.kyiv.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
