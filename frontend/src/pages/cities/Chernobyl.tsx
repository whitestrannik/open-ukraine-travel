import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function Chernobyl() {
  const { t } = useI18n()

  const attractions = [
    {
      id: 'reactor-4',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-345522.jpg`,
      category: 'historical'
    },
    {
      id: 'pripyat',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1172064.jpg`,
      category: 'historical'
    },
    {
      id: 'duga-radar',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      category: 'historical'
    },
    {
      id: 'red-forest',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-2787267.jpg`,
      category: 'nature'
    },
    {
      id: 'control-room',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000026.jpg`,
      category: 'historical'
    },
    {
      id: 'memorial',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      category: 'memorial'
    }
  ]

  const zones = [
    { id: 'exclusion-zone', color: 'bg-[#D89B5A]' },
    { id: 'pripyat-city', color: 'bg-[#6A5B8C]' },
    { id: 'chernobyl-town', color: 'bg-[#1F5FA0]' },
    { id: 'cooling-pond', color: 'bg-[#4E7B53]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('cities.chernobyl.name')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-345522.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('cities.chernobyl.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            {t('cities.chernobyl.hero.subtitle')}
          </p>
          

        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-[#F5C542]/10 border-b border-[#F5C542]/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#F5C542]">
            <div className="w-12 h-12 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#22242A]">{t('cities.chernobyl.notice.title')}</h3>
              <p className="text-[#B0B3BA] leading-relaxed">{t('cities.chernobyl.notice.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.chernobyl.facts.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#D89B5A] mb-2">{t('cities.chernobyl.facts.disaster.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.chernobyl.facts.disaster.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#6A5B8C] mb-2">{t('cities.chernobyl.facts.zone.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.chernobyl.facts.zone.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#4E7B53] mb-2">{t('cities.chernobyl.facts.evacuated.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.chernobyl.facts.evacuated.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1F5FA0] mb-2">{t('cities.chernobyl.facts.tours.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.chernobyl.facts.tours.label')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Sites */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.chernobyl.attractions.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.chernobyl.attractions.subtitle')}
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
                    alt={t(`cities.chernobyl.attractions.${attraction.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`cities.chernobyl.attractions.${attraction.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {t(`cities.chernobyl.attractions.${attraction.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        attraction.category === 'historical' ? 'bg-[#D89B5A]' :
                        attraction.category === 'nature' ? 'bg-[#4E7B53]' :
                        attraction.category === 'memorial' ? 'bg-[#6A5B8C]' :
                        'bg-[#1F5FA0]'
                      }`}>
                        {t(`cities.categories.${attraction.category}`)}
                      </span>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('cities.chernobyl.attractions.learn')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & History */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.chernobyl.overview.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.chernobyl.overview.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.chernobyl.overview.about.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.chernobyl.overview.about.description1')}
                </p>
                <p className="text-[#B0B3BA] leading-relaxed">
                  {t('cities.chernobyl.overview.about.description2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.chernobyl.overview.today.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.chernobyl.overview.today.description')}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {t('cities.chernobyl.overview.today.highlights').split(',').map((highlight: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#D89B5A] text-white rounded-full text-sm font-medium"
                    >
                      {highlight.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src={`${import.meta.env.BASE_URL}media/pexels-freestockpro-345522.jpg`} 
                  alt={t('cities.chernobyl.overview.images.reactor')}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{t('cities.chernobyl.overview.images.reactor')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src={`${import.meta.env.BASE_URL}media/pexels-freestockpro-1172064.jpg`} 
                    alt={t('cities.chernobyl.overview.images.pripyat')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.chernobyl.overview.images.pripyat')}</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src={`${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`} 
                    alt={t('cities.chernobyl.overview.images.memorial')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.chernobyl.overview.images.memorial')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-[#22242A]">
              {t('cities.chernobyl.history.title')}
            </h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D89B5A]"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1970
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.chernobyl.history.construction.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.chernobyl.history.construction.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#D89B5A] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    1986
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.chernobyl.history.disaster.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.chernobyl.history.disaster.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1990s
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.chernobyl.history.containment.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.chernobyl.history.containment.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2011+
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.chernobyl.history.tourism.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.chernobyl.history.tourism.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.chernobyl.zones.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.chernobyl.zones.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <div 
                key={zone.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${zone.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t(`cities.chernobyl.zones.${zone.id}.name`)}
                    </h3>
                    <p className="text-[#B0B3BA] mb-4">
                      {t(`cities.chernobyl.zones.${zone.id}.description`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {t(`cities.chernobyl.zones.${zone.id}.highlights`).split(',').map((highlight: string, index: number) => (
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

      {/* Tour Information */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.chernobyl.tours.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#D89B5A] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.chernobyl.tours.safety.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.chernobyl.tours.safety.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.chernobyl.tours.safety.guide')}</li>
                <li>• {t('cities.chernobyl.tours.safety.equipment')}</li>
                <li>• {t('cities.chernobyl.tours.safety.restrictions')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#6A5B8C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.chernobyl.tours.duration.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.chernobyl.tours.duration.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.chernobyl.tours.duration.oneday')}</li>
                <li>• {t('cities.chernobyl.tours.duration.twoday')}</li>
                <li>• {t('cities.chernobyl.tours.duration.private')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#1F5FA0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.chernobyl.tours.booking.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.chernobyl.tours.booking.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.chernobyl.tours.booking.advance')}</li>
                <li>• {t('cities.chernobyl.tours.booking.passport')}</li>
                <li>• {t('cities.chernobyl.tours.booking.operators')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#D89B5A] to-[#D89B5A]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('cities.chernobyl.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cities.chernobyl.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/tours" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('cities.chernobyl.cta.tours')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('cities.chernobyl.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

