import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function Odesa() {
  const { t } = useI18n()

  const attractions = [
    {
      id: 'potemkin-stairs',
      image: '/media/pexels-nextvoyage-1000772.jpg',
      category: 'historical'
    },
    {
      id: 'opera-house',
      image: '/media/pexels-freestockpro-1174204.jpg',
      category: 'cultural'
    },
    {
      id: 'primorsky-boulevard',
      image: '/media/pexels-freestockpro-12932806.jpg',
      category: 'square'
    },
    {
      id: 'arcadia-beach',
      image: '/media/pexels-freestockpro-2787267.jpg',
      category: 'coastal'
    },
    {
      id: 'catacombs',
      image: '/media/pexels-kostiantyn-13200378.jpg',
      category: 'historical'
    },
    {
      id: 'city-garden',
      image: '/media/pexels-nextvoyage-1000026.jpg',
      category: 'cultural'
    }
  ]

  const districts = [
    { id: 'city-center', color: 'bg-[#1F5FA0]' },
    { id: 'arcadia', color: 'bg-[#4E7B53]' },
    { id: 'moldavanka', color: 'bg-[#6A5B8C]' },
    { id: 'langeron', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('cities.odesa.name')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/pexels-nextvoyage-1000772.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('cities.odesa.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            {t('cities.odesa.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {t('cities.odesa.hero.cta.plan')} →
            </button>
            <button className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20">
              {t('cities.odesa.hero.cta.guide')} →
            </button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.odesa.facts.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#1F5FA0] mb-2">{t('cities.odesa.facts.population.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.odesa.facts.population.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#4E7B53] mb-2">{t('cities.odesa.facts.founded.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.odesa.facts.founded.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#6A5B8C] mb-2">{t('cities.odesa.facts.beaches.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.odesa.facts.beaches.label')}</div>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-[#D89B5A] mb-2">{t('cities.odesa.facts.steps.value')}</div>
              <div className="text-[#B0B3BA] font-medium">{t('cities.odesa.facts.steps.label')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.odesa.attractions.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.odesa.attractions.subtitle')}
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
                    alt={t(`cities.odesa.attractions.${attraction.id}.name`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`cities.odesa.attractions.${attraction.id}.name`)}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 line-clamp-2">
                      {t(`cities.odesa.attractions.${attraction.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
                        attraction.category === 'historical' ? 'bg-[#4E7B53]' :
                        attraction.category === 'cultural' ? 'bg-[#6A5B8C]' :
                        attraction.category === 'square' ? 'bg-[#1F5FA0]' :
                        attraction.category === 'coastal' ? 'bg-[#4E7B53]' :
                        'bg-[#1F5FA0]'
                      }`}>
                        {t(`cities.categories.${attraction.category}`)}
                      </span>
                      
                      <button className="text-[#F5C542] hover:text-[#F5C542]/80 font-semibold transition-colors">
                        {t('cities.odesa.attractions.learn')} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Overview & History - Similar structure to other cities */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.odesa.overview.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.odesa.overview.subtitle')}
            </p>
          </div>

          {/* Main Overview Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.odesa.overview.about.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.odesa.overview.about.description1')}
                </p>
                <p className="text-[#B0B3BA] leading-relaxed">
                  {t('cities.odesa.overview.about.description2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#22242A]">
                  {t('cities.odesa.overview.culture.title')}
                </h3>
                <p className="text-[#B0B3BA] leading-relaxed mb-4">
                  {t('cities.odesa.overview.culture.description')}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {t('cities.odesa.overview.culture.highlights').split(',').map((highlight: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#4E7B53] text-white rounded-full text-sm font-medium"
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
                  src="/media/pexels-nextvoyage-1000772.jpg" 
                  alt={t('cities.odesa.overview.images.seafront')}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{t('cities.odesa.overview.images.seafront')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src="/media/pexels-freestockpro-1174204.jpg" 
                    alt={t('cities.odesa.overview.images.opera')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.odesa.overview.images.opera')}</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg group">
                  <img 
                    src="/media/pexels-freestockpro-2787267.jpg" 
                    alt={t('cities.odesa.overview.images.beach')}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-white text-xs font-medium">{t('cities.odesa.overview.images.beach')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-[#22242A]">
              {t('cities.odesa.history.title')}
            </h3>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#4E7B53]"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1794
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.odesa.history.founding.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.odesa.history.founding.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#F5C542] rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                    19th C
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.odesa.history.golden.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.odesa.history.golden.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    20th C
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.odesa.history.soviet.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.odesa.history.soviet.description')}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    Today
                  </div>
                  <div className="ml-8">
                    <h4 className="text-xl font-semibold mb-2 text-[#22242A]">
                      {t('cities.odesa.history.modern.title')}
                    </h4>
                    <p className="text-[#B0B3BA]">
                      {t('cities.odesa.history.modern.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.odesa.districts.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('cities.odesa.districts.subtitle')}
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
                      {t(`cities.odesa.districts.${district.id}.name`)}
                    </h3>
                    <p className="text-[#B0B3BA] mb-4">
                      {t(`cities.odesa.districts.${district.id}.description`)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {t(`cities.odesa.districts.${district.id}.highlights`).split(',').map((highlight: string, index: number) => (
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
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('cities.odesa.practical.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#4E7B53] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.odesa.practical.visit.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.odesa.practical.visit.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.odesa.practical.visit.spring')}</li>
                <li>• {t('cities.odesa.practical.visit.summer')}</li>
                <li>• {t('cities.odesa.practical.visit.autumn')}</li>
                <li>• {t('cities.odesa.practical.visit.winter')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#6A5B8C] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.odesa.practical.beaches.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.odesa.practical.beaches.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.odesa.practical.beaches.arcadia')}</li>
                <li>• {t('cities.odesa.practical.beaches.langeron')}</li>
                <li>• {t('cities.odesa.practical.beaches.dolphin')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="w-12 h-12 bg-[#1F5FA0] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#22242A]">{t('cities.odesa.practical.transport.title')}</h3>
              <p className="text-[#B0B3BA] mb-4">{t('cities.odesa.practical.transport.description')}</p>
              <ul className="text-sm text-[#B0B3BA] space-y-2">
                <li>• {t('cities.odesa.practical.transport.tram')}</li>
                <li>• {t('cities.odesa.practical.transport.trolley')}</li>
                <li>• {t('cities.odesa.practical.transport.taxi')}</li>
                <li>• {t('cities.odesa.practical.transport.walking')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#4E7B53] to-[#4E7B53]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {t('cities.odesa.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cities.odesa.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('cities.odesa.cta.hotels')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('cities.odesa.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
