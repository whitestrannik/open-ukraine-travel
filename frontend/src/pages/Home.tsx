import { useI18n } from '@/state/i18n'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/media/12064535-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          <source src="/media/12080908-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore" 
              className="bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('home.hero.cta.explore')}
            </Link>
            <Link 
              to="/insurance" 
              className="bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('home.hero.cta.insurance')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Actions Bar */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#22242A]">
            {t('home.quickActions.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Insurance Card */}
            <Link to="/insurance" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#22242A]">{t('home.quickActions.insurance.title')}</h3>
              <p className="text-[#B0B3BA] text-sm">{t('home.quickActions.insurance.description')}</p>
            </Link>

            {/* Hotels Card */}
            <Link to="/hotels" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#D89B5A] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#22242A]">{t('home.quickActions.hotels.title')}</h3>
              <p className="text-[#B0B3BA] text-sm">{t('home.quickActions.hotels.description')}</p>
            </Link>

            {/* Entry Rules Card */}
            <Link to="/entry" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#22242A]">{t('home.quickActions.entry.title')}</h3>
              <p className="text-[#B0B3BA] text-sm">{t('home.quickActions.entry.description')}</p>
            </Link>

            {/* Transportation Card */}
            <Link to="/transportation" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#22242A]">{t('home.quickActions.transportation.title')}</h3>
              <p className="text-[#B0B3BA] text-sm">{t('home.quickActions.transportation.description')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('home.destinations.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-2xl mx-auto">
              {t('home.destinations.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kyiv */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/media/pexels-freestockpro-1227513.jpg" 
                alt="Kyiv" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('home.destinations.kyiv.title')}</h3>
                <p className="text-white/90 text-sm mb-4">{t('home.destinations.kyiv.description')}</p>
                <Link 
                  to="/explore/destinations" 
                  className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 font-semibold"
                >
                  {t('home.destinations.explore')} →
                </Link>
              </div>
            </div>

            {/* Lviv */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/media/pexels-freestockpro-1174204.jpg" 
                alt="Lviv" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('home.destinations.lviv.title')}</h3>
                <p className="text-white/90 text-sm mb-4">{t('home.destinations.lviv.description')}</p>
                <Link 
                  to="/explore/destinations" 
                  className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 font-semibold"
                >
                  {t('home.destinations.explore')} →
                </Link>
              </div>
            </div>

            {/* Carpathians */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src="/media/pexels-freestockpro-2787267.jpg" 
                alt="Carpathians" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('home.destinations.carpathians.title')}</h3>
                <p className="text-white/90 text-sm mb-4">{t('home.destinations.carpathians.description')}</p>
                <Link 
                  to="/explore/destinations" 
                  className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 font-semibold"
                >
                  {t('home.destinations.explore')} →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/explore" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('home.destinations.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('home.safety.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('home.safety.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Government Partnership */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('home.safety.government.title')}</h3>
              <p className="text-[#B0B3BA]">{t('home.safety.government.description')}</p>
            </div>

            {/* Real-time Updates */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('home.safety.updates.title')}</h3>
              <p className="text-[#B0B3BA]">{t('home.safety.updates.description')}</p>
            </div>

            {/* Tourist Support */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('home.safety.support.title')}</h3>
              <p className="text-[#B0B3BA]">{t('home.safety.support.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('home.experiences.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-2xl mx-auto">
              {t('home.experiences.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cultural Heritage */}
            <Link to="/explore" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/media/pexels-freestockpro-1172064.jpg" 
                alt="Cultural Heritage" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('home.experiences.cultural.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.experiences.cultural.description')}</p>
              </div>
            </Link>

            {/* Nature & Parks */}
            <Link to="/explore" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/media/pexels-nextvoyage-1000026.jpg" 
                alt="Nature & Parks" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('home.experiences.nature.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.experiences.nature.description')}</p>
              </div>
            </Link>

            {/* Food & Wine */}
            <Link to="/explore" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/media/pexels-mayday-1370306.jpg" 
                alt="Food & Wine" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('home.experiences.food.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.experiences.food.description')}</p>
              </div>
            </Link>

            {/* Events & Festivals */}
            <Link to="/explore" className="group relative overflow-hidden rounded-xl h-64 shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/media/pexels-heyho-6143369.jpg" 
                alt="Events & Festivals" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('home.experiences.events.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.experiences.events.description')}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('home.updates.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-2xl mx-auto">
              {t('home.updates.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Update 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/media/pexels-kostiantyn-13200201.jpg" 
                alt="Travel Update" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#1F5FA0] font-medium mb-2">January 15, 2025</div>
                <h3 className="text-xl font-semibold mb-3 text-[#22242A]">
                  {t('home.updates.news1.title')}
                </h3>
                <p className="text-[#B0B3BA] text-sm mb-4">
                  {t('home.updates.news1.description')}
                </p>
                <a href="#" className="inline-flex items-center text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-medium">
                  {t('home.updates.readMore')} →
                </a>
              </div>
            </div>

            {/* Update 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/media/pexels-kostiantyn-13200378.jpg" 
                alt="Safety Update" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#4E7B53] font-medium mb-2">January 10, 2025</div>
                <h3 className="text-xl font-semibold mb-3 text-[#22242A]">
                  {t('home.updates.news2.title')}
                </h3>
                <p className="text-[#B0B3BA] text-sm mb-4">
                  {t('home.updates.news2.description')}
                </p>
                <a href="#" className="inline-flex items-center text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-medium">
                  {t('home.updates.readMore')} →
                </a>
              </div>
            </div>

            {/* Update 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/media/pexels-stepkoanna-33337362.jpg" 
                alt="Tourism Update" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[#D89B5A] font-medium mb-2">January 5, 2025</div>
                <h3 className="text-xl font-semibold mb-3 text-[#22242A]">
                  {t('home.updates.news3.title')}
                </h3>
                <p className="text-[#B0B3BA] text-sm mb-4">
                  {t('home.updates.news3.description')}
                </p>
                <a href="#" className="inline-flex items-center text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-medium">
                  {t('home.updates.readMore')} →
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-[#22242A] hover:bg-[#22242A]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              {t('home.updates.viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Highlight */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('home.insurance.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('home.insurance.subtitle')}
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-[#F5C542] mb-2">€50k+</div>
                <div className="text-sm opacity-80">{t('home.insurance.coverage')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F5C542] mb-2">24/7</div>
                <div className="text-sm opacity-80">{t('home.insurance.support')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F5C542] mb-2">€15</div>
                <div className="text-sm opacity-80">{t('home.insurance.price')}</div>
              </div>
            </div>
          </div>

          <Link 
            to="/insurance" 
            className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('home.insurance.cta')} →
          </Link>
        </div>
      </section>
    </div>
  )
}
