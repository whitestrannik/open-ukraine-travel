import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'
import { getAssetUrl } from '@/config/environment'

export default function HiddenGems() {
  const { t } = useI18n()

  const hiddenGems = [
    {
      id: 'tunnel-of-love',
      image: '/media/pexels-freestockpro-2787267.jpg',
      category: 'nature',
      region: 'rivne'
    },
    {
      id: 'olesko-castle',
      image: '/media/pexels-kostiantyn-13200378.jpg',
      category: 'historical',
      region: 'lviv'
    },
    {
      id: 'askania-nova',
      image: '/media/pexels-nextvoyage-1000026.jpg',
      category: 'nature',
      region: 'kherson'
    },
    {
      id: 'kamianets-podilskyi',
      image: '/media/pexels-freestockpro-12932806.jpg',
      category: 'historical',
      region: 'khmelnytskyi'
    },
    {
      id: 'shatsky-lakes',
      image: '/media/pexels-nextvoyage-1000772.jpg',
      category: 'nature',
      region: 'volyn'
    },
    {
      id: 'khotyn-fortress',
      image: '/media/pexels-freestockpro-1174204.jpg',
      category: 'historical',
      region: 'chernivtsi'
    },
    {
      id: 'klevan-castle',
      image: '/media/pexels-freestockpro-1227513.jpg',
      category: 'historical',
      region: 'rivne'
    },
    {
      id: 'dzharylhach',
      image: '/media/pexels-nextvoyage-1000026.jpg',
      category: 'nature',
      region: 'kherson'
    },
    {
      id: 'pidhirtsi-castle',
      image: '/media/pexels-kostiantyn-13200201.jpg',
      category: 'historical',
      region: 'lviv'
    }
  ]

  const categories = [
    { id: 'nature', icon: '🌿', color: 'bg-[#4E7B53]' },
    { id: 'historical', icon: '🏰', color: 'bg-[#6A5B8C]' },
    { id: 'cultural', icon: '🎭', color: 'bg-[#1F5FA0]' },
    { id: 'spiritual', icon: '⛪', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('gems.nav.title')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={getAssetUrl("/media/5085866-uhd_3840_2160_30fps.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('gems.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            {t('gems.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('gems.hero.cta.destinations')} →
            </Link>
            <Link 
              to="/explore/regions" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('gems.hero.cta.regions')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('gems.categories.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('gems.categories.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group cursor-pointer"
              >
                <div className={`${category.color} rounded-full p-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <div className="flex items-center gap-3 px-4">
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-white font-semibold text-lg">
                      {t(`gems.categories.${category.id}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Gems Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('gems.grid.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('gems.grid.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hiddenGems.map((gem) => (
              <div 
                key={gem.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={t(`gems.items.${gem.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-sm font-medium rounded-full">
                      {t(`gems.regions.${gem.region}`)}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                      gem.category === 'nature' ? 'bg-[#4E7B53]' :
                      gem.category === 'historical' ? 'bg-[#6A5B8C]' :
                      gem.category === 'cultural' ? 'bg-[#1F5FA0]' :
                      'bg-[#D89B5A]'
                    }`}>
                      {t(`gems.categories.${gem.category}`)}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`gems.items.${gem.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                      {t(`gems.items.${gem.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-white/80 text-sm">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {t(`gems.items.${gem.id}.location`)}
                      </div>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('gems.items.explore')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visit Hidden Gems */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('gems.why.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('gems.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤫</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('gems.why.authentic.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('gems.why.authentic.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('gems.why.photography.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('gems.why.photography.description')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#22242A]">
                {t('gems.why.support.title')}
              </h3>
              <p className="text-[#B0B3BA] leading-relaxed">
                {t('gems.why.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Visit */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('gems.planning.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('gems.planning.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5C542] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🗺️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#22242A]">
                    {t('gems.planning.research.title')}
                  </h3>
                  <p className="text-[#B0B3BA]">
                    {t('gems.planning.research.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#4E7B53] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🚗</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#22242A]">
                    {t('gems.planning.transport.title')}
                  </h3>
                  <p className="text-[#B0B3BA]">
                    {t('gems.planning.transport.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6A5B8C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#22242A]">
                    {t('gems.planning.timing.title')}
                  </h3>
                  <p className="text-[#B0B3BA]">
                    {t('gems.planning.timing.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F6F8] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#22242A]">
                {t('gems.planning.tips.title')}
              </h3>
              <div className="space-y-4">
                {t('gems.planning.tips.items').split('|').map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-[#22242A]">{tip.trim()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4E7B53] to-[#4E7B53]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('gems.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('gems.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('gems.cta.hotels')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('gems.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
