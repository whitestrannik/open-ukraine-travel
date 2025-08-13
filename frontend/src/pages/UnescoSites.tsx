import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function UnescoSites() {
  const { t } = useI18n()

  const unescoSites = [
    {
      id: 'kyiv-sofia',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      year: '1990',
      type: 'cultural',
      city: 'kyiv'
    },
    {
      id: 'lviv-historic-center',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`,
      year: '1998',
      type: 'cultural',
      city: 'lviv'
    },
    {
      id: 'struve-arc',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      year: '2005',
      type: 'cultural',
      city: 'multiple'
    },
    {
      id: 'primeval-beech-forests',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-2787267.jpg`,
      year: '2007',
      type: 'natural',
      city: 'carpathians'
    },
    {
      id: 'wooden-churches',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000026.jpg`,
      year: '2013',
      type: 'cultural',
      city: 'carpathians'
    },
    {
      id: 'chernivtsi-university',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200201.jpg`,
      year: '2011',
      type: 'cultural',
      city: 'chernivtsi'
    }
  ]

  const stats = [
    { id: 'total', value: '7', icon: '🏛️', color: 'bg-[#1F5FA0]' },
    { id: 'cultural', value: '6', icon: '🎭', color: 'bg-[#6A5B8C]' },
    { id: 'natural', value: '1', icon: '🌲', color: 'bg-[#4E7B53]' },
    { id: 'years', value: '33', icon: '📅', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('unesco.nav.title')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏛️</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('unesco.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            {t('unesco.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('unesco.hero.cta.explore')} →
            </Link>
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('unesco.hero.cta.kyiv')} →
            </Link>
          </div>
        </div>
      </section>

      {/* UNESCO Stats */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('unesco.stats.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('unesco.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center group">
                <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-[#22242A] mb-2">{stat.value}</div>
                <div className="text-[#B0B3BA] font-medium">
                  {t(`unesco.stats.${stat.id}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNESCO Sites Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('unesco.sites.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('unesco.sites.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {unescoSites.map((site) => (
              <div 
                key={site.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={t(`unesco.sites.${site.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* UNESCO Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-[#1F5FA0] text-white px-3 py-1 rounded-full text-sm font-medium">
                      <span>🏛️</span>
                      <span>UNESCO {site.year}</span>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      site.type === 'cultural' ? 'bg-[#6A5B8C]' : 'bg-[#4E7B53]'
                    }`}>
                      {t(`unesco.types.${site.type}`)}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`unesco.sites.${site.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {t(`unesco.sites.${site.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t(`unesco.sites.${site.id}.location`)}
                      </div>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('unesco.sites.learn')} →
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-[#B0B3BA]">
                      {t('unesco.sites.inscribed')}: <span className="font-semibold text-[#22242A]">{site.year}</span>
                    </div>
                    <div className="text-sm text-[#B0B3BA]">
                      {t(`unesco.sites.${site.id}.criteria`)}
                    </div>
                  </div>
                  
                  <p className="text-[#22242A] text-sm leading-relaxed">
                    {t(`unesco.sites.${site.id}.significance`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UNESCO Matters */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('unesco.importance.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('unesco.importance.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('unesco.importance.universal.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('unesco.importance.universal.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('unesco.importance.protection.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('unesco.importance.protection.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('unesco.importance.education.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('unesco.importance.education.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Responsibly */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {t('unesco.responsible.title')}
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                {t('unesco.responsible.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('unesco.responsible.guidelines.title')}
                </h3>
                <div className="space-y-4">
                  {t('unesco.responsible.guidelines.items').split('|').map((guideline: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-black text-sm">✓</span>
                      </div>
                      <p className="text-white/90">{guideline.trim()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {t('unesco.responsible.impact.title')}
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  {t('unesco.responsible.impact.description')}
                </p>
                
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-3">
                    {t('unesco.responsible.support.title')}
                  </h4>
                  <p className="text-white/90 text-sm">
                    {t('unesco.responsible.support.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#22242A]">
            {t('unesco.cta.title')}
          </h2>
          <p className="text-xl text-[#B0B3BA] mb-8">
            {t('unesco.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('unesco.cta.kyiv')} →
            </Link>
            <Link 
              to="/cities/lviv" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('unesco.cta.lviv')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

