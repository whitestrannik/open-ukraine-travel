import { useI18n } from '@/state/i18n'
import { Link } from 'react-router-dom'

export default function TopDestinations() {
  const { t } = useI18n()

  const destinations = [
    {
      id: 'kyiv',
      image: '/media/pexels-freestockpro-1227513.jpg',
      category: 'capital',
      route: '/cities/kyiv'
    },
    {
      id: 'lviv',
      image: '/media/pexels-freestockpro-1174204.jpg',
      category: 'cultural',
      route: '/cities/lviv'
    },
    {
      id: 'odesa',
      image: '/media/pexels-nextvoyage-1000772.jpg',
      category: 'coastal',
      route: '/cities/odesa'
    },
    {
      id: 'carpathians',
      image: '/media/pexels-freestockpro-2787267.jpg',
      category: 'nature',
      route: '/cities/carpathians'
    },
    {
      id: 'chernobyl',
      image: '/media/pexels-markus-winkler-1430818-3058990.jpg',
      category: 'historical',
      route: '/cities/chernobyl'
    },
    {
      id: 'chernivtsi',
      image: '/media/pexels-kostiantyn-13200378.jpg',
      category: 'architectural',
      route: '/cities/chernivtsi'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/pexels-freestockpro-12932806.jpg')` }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('destinations.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            {t('destinations.hero.subtitle')}
          </p>
        </div>
      </section>

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
            <span className="text-[#1F5FA0] font-medium">{t('destinations.hero.breadcrumb')}</span>
          </nav>
        </div>
      </section>

      {/* Sub-navigation */}
      <section className="bg-white border-b border-gray-200/50 sticky top-[73px] z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-4">
            <h2 className="text-sm font-semibold text-[#22242A] mb-3 uppercase tracking-wide">
              {t('explore.nav.title')}
            </h2>
            <nav className="flex flex-wrap items-center gap-2 overflow-x-auto">
              <Link 
                to="/explore/destinations" 
                className="px-4 py-2 rounded-lg font-medium text-white bg-[#1F5FA0] shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.destinations')}
              </Link>
              
              <Link 
                to="/explore/essential" 
                className="px-4 py-2 rounded-lg font-medium text-[#22242A] bg-gray-100 hover:bg-[#1F5FA0] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.essential')}
              </Link>
              
              <Link 
                to="/explore/gems" 
                className="px-4 py-2 rounded-lg font-medium text-[#22242A] bg-gray-100 hover:bg-[#1F5FA0] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.gems')}
              </Link>
              
              <Link 
                to="/explore/unesco" 
                className="px-4 py-2 rounded-lg font-medium text-[#22242A] bg-gray-100 hover:bg-[#1F5FA0] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.unesco')}
              </Link>
              
              <Link 
                to="/explore/regions" 
                className="px-4 py-2 rounded-lg font-medium text-[#22242A] bg-gray-100 hover:bg-[#1F5FA0] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.regions')}
              </Link>
              
              <Link 
                to="/explore/jewish" 
                className="px-4 py-2 rounded-lg font-medium text-[#22242A] bg-gray-100 hover:bg-[#1F5FA0] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                {t('explore.nav.jewish')}
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('destinations.grid.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('destinations.grid.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                to={destination.route}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block"
              >
                {/* Destination Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={t(`destinations.${destination.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      destination.category === 'capital' ? 'bg-[#1F5FA0]' :
                      destination.category === 'cultural' ? 'bg-[#6A5B8C]' :
                      destination.category === 'coastal' ? 'bg-[#4E7B53]' :
                      destination.category === 'nature' ? 'bg-[#4E7B53]' :
                      destination.category === 'historical' ? 'bg-[#D89B5A]' :
                      'bg-[#6A5B8C]'
                    }`}>
                      {t(`destinations.categories.${destination.category}`)}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t(`destinations.${destination.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">
                      {t(`destinations.${destination.id}.description`)}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {t(`destinations.${destination.id}.features`).split(',').map((feature: string, index: number) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
                        >
                          {feature.trim()}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors group">
                      {t('destinations.card.explore')}
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Ukraine Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('destinations.why.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('destinations.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rich History */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('destinations.why.history.title')}</h3>
              <p className="text-[#B0B3BA]">{t('destinations.why.history.description')}</p>
            </div>

            {/* Natural Beauty */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('destinations.why.nature.title')}</h3>
              <p className="text-[#B0B3BA]">{t('destinations.why.nature.description')}</p>
            </div>

            {/* Cultural Richness */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v1M7 4V3a1 1 0 011-1h8a1 1 0 011 1v1M7 4H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('destinations.why.culture.title')}</h3>
              <p className="text-[#B0B3BA]">{t('destinations.why.culture.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('destinations.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('destinations.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('destinations.cta.insurance')} →
            </Link>
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('destinations.cta.hotels')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

