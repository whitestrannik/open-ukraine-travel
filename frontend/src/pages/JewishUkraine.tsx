import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function JewishUkraine() {
  const { t } = useI18n()

  const heritageSites = [
    {
      id: 'babyn-yar',
      image: '/media/pexels-freestockpro-12932806.jpg',
      city: 'kyiv',
      type: 'memorial',
      significance: 'high'
    },
    {
      id: 'lviv-synagogue',
      image: '/media/pexels-freestockpro-1174204.jpg',
      city: 'lviv',
      type: 'synagogue',
      significance: 'high'
    },
    {
      id: 'uman-pilgrimage',
      image: '/media/pexels-kostiantyn-13200378.jpg',
      city: 'uman',
      type: 'pilgrimage',
      significance: 'high'
    },
    {
      id: 'chernivtsi-temple',
      image: '/media/pexels-kostiantyn-13200201.jpg',
      city: 'chernivtsi',
      type: 'synagogue',
      significance: 'medium'
    },
    {
      id: 'odesa-community',
      image: '/media/pexels-nextvoyage-1000772.jpg',
      city: 'odesa',
      type: 'community',
      significance: 'high'
    },
    {
      id: 'berdychiv-heritage',
      image: '/media/pexels-freestockpro-2787267.jpg',
      city: 'berdychiv',
      type: 'historical',
      significance: 'medium'
    }
  ]

  const historicalPeriods = [
    { id: 'golden-age', icon: '✨', color: 'bg-[#F5C542]', period: '16th-18th C' },
    { id: 'hasidism', icon: '📿', color: 'bg-[#6A5B8C]', period: '18th-19th C' },
    { id: 'pogroms', icon: '🕯️', color: 'bg-[#D89B5A]', period: '19th-20th C' },
    { id: 'holocaust', icon: '🌹', color: 'bg-[#1F5FA0]', period: '1941-1944' }
  ]

  const modernInitiatives = [
    { id: 'preservation', icon: '🏛️', color: 'bg-[#4E7B53]' },
    { id: 'education', icon: '📚', color: 'bg-[#1F5FA0]' },
    { id: 'tourism', icon: '🗺️', color: 'bg-[#6A5B8C]' },
    { id: 'community', icon: '🤝', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('jewish.nav.title')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/pexels-freestockpro-12932806.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✡️</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('jewish.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            {t('jewish.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#heritage-sites" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('jewish.hero.cta.explore')} →
            </Link>
            <Link 
              to="#history" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('jewish.hero.cta.history')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Historical Overview */}
      <section id="history" className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('jewish.history.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('jewish.history.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalPeriods.map((period) => (
              <div 
                key={period.id}
                className="bg-white rounded-2xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${period.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl">{period.icon}</span>
                </div>
                <div className="text-sm text-[#B0B3BA] mb-2">{period.period}</div>
                <h3 className="text-lg font-bold mb-3 text-[#22242A]">
                  {t(`jewish.history.${period.id}.title`)}
                </h3>
                <p className="text-[#B0B3BA] text-sm leading-relaxed">
                  {t(`jewish.history.${period.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Sites */}
      <section id="heritage-sites" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('jewish.sites.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('jewish.sites.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site) => (
              <div 
                key={site.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={t(`jewish.sites.${site.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Significance Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      site.significance === 'high' ? 'bg-[#D89B5A]' : 'bg-[#6A5B8C]'
                    }`}>
                      {t(`jewish.significance.${site.significance}`)}
                    </span>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      site.type === 'memorial' ? 'bg-[#1F5FA0]' :
                      site.type === 'synagogue' ? 'bg-[#6A5B8C]' :
                      site.type === 'pilgrimage' ? 'bg-[#F5C542] text-black' :
                      site.type === 'community' ? 'bg-[#4E7B53]' :
                      'bg-[#D89B5A]'
                    }`}>
                      {t(`jewish.types.${site.type}`)}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`jewish.sites.${site.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {t(`jewish.sites.${site.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t(`jewish.cities.${site.city}`)}
                      </div>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('jewish.sites.learn')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Legacy */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('jewish.legacy.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('jewish.legacy.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('jewish.legacy.literature.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('jewish.legacy.literature.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('jewish.legacy.literature.examples')}
              </div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('jewish.legacy.music.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('jewish.legacy.music.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('jewish.legacy.music.examples')}
              </div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('jewish.legacy.science.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed mb-4">
                {t('jewish.legacy.science.description')}
              </p>
              <div className="text-sm text-[#1F5FA0] font-medium">
                {t('jewish.legacy.science.examples')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Initiatives */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('jewish.modern.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('jewish.modern.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modernInitiatives.map((initiative) => (
              <div 
                key={initiative.id}
                className="bg-white rounded-2xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 ${initiative.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl">{initiative.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#22242A]">
                  {t(`jewish.modern.${initiative.id}.title`)}
                </h3>
                <p className="text-[#B0B3BA] text-sm leading-relaxed">
                  {t(`jewish.modern.${initiative.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Respectful Tourism */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤲</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {t('jewish.respectful.title')}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('jewish.respectful.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {t('jewish.respectful.guidelines.title')}
              </h3>
              <div className="space-y-4">
                {t('jewish.respectful.guidelines.items').split('|').map((guideline: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <p className="text-white/90">{guideline.trim()}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {t('jewish.respectful.support.title')}
              </h3>
              <p className="text-white/90 leading-relaxed mb-6">
                {t('jewish.respectful.support.description')}
              </p>
              
              <div className="space-y-3">
                {t('jewish.respectful.support.ways').split('|').map((way: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F5C542] rounded-full flex-shrink-0"></div>
                    <p className="text-white/90 text-sm">{way.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#22242A]">
            {t('jewish.cta.title')}
          </h2>
          <p className="text-xl text-[#B0B3BA] mb-8">
            {t('jewish.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('jewish.cta.kyiv')} →
            </Link>
            <Link 
              to="/cities/lviv" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('jewish.cta.lviv')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
