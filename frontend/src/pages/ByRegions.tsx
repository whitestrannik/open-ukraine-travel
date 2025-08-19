import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function ByRegions() {
  const { t } = useI18n()

  const regions = [
    {
      id: 'western-ukraine',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`,
      color: 'bg-[#6A5B8C]',
      cities: ['lviv', 'chernivtsi', 'uzhhorod', 'ivano-frankivsk']
    },
    {
      id: 'central-ukraine',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      color: 'bg-[#1F5FA0]',
      cities: ['kyiv', 'cherkasy', 'poltava', 'vinnytsia']
    },
    {
      id: 'eastern-ukraine',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      color: 'bg-[#D89B5A]',
      cities: ['kharkiv', 'dnipro', 'zaporizhzhia']
    },
    {
      id: 'southern-ukraine',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000772.jpg`,
      color: 'bg-[#4E7B53]',
      cities: ['odesa', 'mykolaiv', 'kherson']
    },
    {
      id: 'carpathian-region',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-2787267.jpg`,
      color: 'bg-[#4E7B53]',
      cities: ['bukovel', 'yaremche', 'kolomyia']
    },
    {
      id: 'northern-ukraine',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000026.jpg`,
      color: 'bg-[#6A5B8C]',
      cities: ['chernihiv', 'sumy', 'zhytomyr']
    }
  ]

  const highlights = [
    { id: 'diversity', icon: '🌈', color: 'bg-[#1F5FA0]' },
    { id: 'landscapes', icon: '🏔️', color: 'bg-[#4E7B53]' },
    { id: 'culture', icon: '🎭', color: 'bg-[#6A5B8C]' },
    { id: 'history', icon: '📜', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('regions.nav.title')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={`${import.meta.env.BASE_URL}media/9871912-uhd_3840_2160_30fps.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('regions.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            {t('regions.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('regions.hero.cta.destinations')} →
            </Link>
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('regions.hero.cta.capital')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Highlights */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('regions.highlights.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('regions.highlights.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="text-center group">
                <div className={`w-16 h-16 ${highlight.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#22242A] mb-2">
                  {t(`regions.highlights.${highlight.id}.title`)}
                </h3>
                <p className="text-[#B0B3BA] text-sm">
                  {t(`regions.highlights.${highlight.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('regions.grid.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('regions.grid.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div 
                key={region.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={t(`regions.items.${region.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {t(`regions.items.${region.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                      {t(`regions.items.${region.id}.description`)}
                    </p>
                    
                    {/* Key Cities */}
                    <div className="mb-4">
                      <div className="text-white/80 text-xs mb-2">{t('regions.items.key_cities')}:</div>
                      <div className="flex flex-wrap gap-2">
                        {region.cities.slice(0, 3).map((city, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full"
                          >
                            {t(`regions.cities.${city}`)}
                          </span>
                        ))}
                        {region.cities.length > 3 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur text-white text-xs rounded-full">
                            +{region.cities.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t(`regions.items.${region.id}.location`)}
                      </div>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('regions.items.explore')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Specialties */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('regions.specialties.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('regions.specialties.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#6A5B8C] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('regions.specialties.architecture.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('regions.specialties.architecture.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('regions.specialties.architecture.examples')}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#4E7B53] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🌲</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('regions.specialties.nature.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('regions.specialties.nature.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('regions.specialties.nature.examples')}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-[#D89B5A] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl">🍯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('regions.specialties.cuisine.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('regions.specialties.cuisine.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('regions.specialties.cuisine.examples')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips by Region */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('regions.tips.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('regions.tips.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#22242A]">
                {t('regions.tips.planning.title')}
              </h3>
              
              <div className="space-y-4">
                {t('regions.tips.planning.items').split('|').map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-[#22242A]">{tip.trim()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F6F6F8] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#22242A]">
                {t('regions.tips.seasonal.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#4E7B53] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🌸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.spring.title')}</h4>
                    <p className="text-[#B0B3BA] text-sm">{t('regions.tips.seasonal.spring.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">☀️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.summer.title')}</h4>
                    <p className="text-[#B0B3BA] text-sm">{t('regions.tips.seasonal.summer.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#D89B5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🍂</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.autumn.title')}</h4>
                    <p className="text-[#B0B3BA] text-sm">{t('regions.tips.seasonal.autumn.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1F5FA0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">❄️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.winter.title')}</h4>
                    <p className="text-[#B0B3BA] text-sm">{t('regions.tips.seasonal.winter.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('regions.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('regions.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('regions.cta.destinations')} →
            </Link>
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('regions.cta.hotels')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

