import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function Explore() {
  const { t } = useI18n()

  const sections = [
    {
      id: 'destinations',
      route: '/explore/destinations',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      color: 'bg-[#1F5FA0]',
      gradient: 'from-[#1F5FA0] to-[#1F5FA0]/80'
    },
    {
      id: 'essential',
      route: '/explore/essential',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1227513.jpg`,
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'bg-[#4E7B53]',
      gradient: 'from-[#4E7B53] to-[#4E7B53]/80'
    },
    {
      id: 'gems',
      route: '/explore/gems',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      color: 'bg-[#6A5B8C]',
      gradient: 'from-[#6A5B8C] to-[#6A5B8C]/80'
    },
    {
      id: 'unesco',
      route: '/explore/unesco',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`,
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      color: 'bg-[#D89B5A]',
      gradient: 'from-[#D89B5A] to-[#D89B5A]/80'
    },
    {
      id: 'regions',
      route: '/explore/regions',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-2787267.jpg`,
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      color: 'bg-[#1F5FA0]',
      gradient: 'from-[#1F5FA0] to-[#1F5FA0]/80'
    },
    {
      id: 'jewish',
      route: '/explore/jewish',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000772.jpg`,
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      color: 'bg-[#6A5B8C]',
      gradient: 'from-[#6A5B8C] to-[#6A5B8C]/80'
    }
  ]

  const stats = [
    { key: 'unesco', value: '7', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { key: 'regions', value: '24', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { key: 'cities', value: '460+', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { key: 'history', value: '1000+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}media/12064535-uhd_3840_2160_30fps.mp4`} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('explore.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            {t('explore.hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('explore.hero.cta.destinations')} →
            </Link>
            <Link 
              to="/explore/essential" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('explore.hero.cta.essential')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('explore.stats.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('explore.stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center group">
                <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-[#1F5FA0] mb-2">{stat.value}</div>
                <div className="text-[#B0B3BA] font-medium">{t(`explore.stats.${stat.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Sections Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('explore.sections.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('explore.sections.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Link 
                key={section.id}
                to={section.route}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={t(`explore.sections.${section.id}.title`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${section.gradient} opacity-80`}></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Icon */}
                    <div className="self-start">
                      <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {t(`explore.sections.${section.id}.title`)}
                      </h3>
                      <p className="text-white/90 text-sm mb-4 line-clamp-3">
                        {t(`explore.sections.${section.id}.description`)}
                      </p>
                      
                      {/* Arrow */}
                      <div className="inline-flex items-center text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors group">
                        {t('explore.sections.explore')}
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#1F5FA0] to-[#1F5FA0]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('explore.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('explore.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('explore.cta.insurance')} →
            </Link>
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('explore.cta.hotels')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}




