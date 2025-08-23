import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'
import { useState } from 'react'

export default function ByRegions() {
  const { t } = useI18n()
  const [activeRegion, setActiveRegion] = useState('western-ukraine')

  const mainRegions = [
    {
      id: 'western-ukraine',
      nameKey: 'regions.main.western',
      descKey: 'regions.main.western.desc',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`,
      color: 'bg-[#6A5B8C]',
      gradient: 'from-[#6A5B8C] to-[#6A5B8C]/80',
      subRegions: [
        { id: 'halychyna', name: 'regions.modal.halychyna', desc: 'regions.modal.halychyna.desc' },
        { id: 'bukovyna', name: 'regions.modal.bukovyna', desc: 'regions.modal.bukovyna.desc' },
        { id: 'zakarpattia', name: 'regions.modal.zakarpattia', desc: 'regions.modal.zakarpattia.desc' },
        { id: 'volyn', name: 'regions.modal.volyn', desc: 'regions.modal.volyn.desc' }
      ],
      cuisine: {
        specialties: ['Borsch', 'Holubtsi', 'Kasha', 'Hutsul Banosh', 'Bryndza cheese', 'Bograch', 'Rakot Krumpli', 'Hutsul Mushroom Soup'],
        description: 'Rich in potatoes, mushrooms, and dairy products. Famous for hearty soups, traditional Hutsul dishes with cornmeal and sheep cheese, and Hungarian-influenced Transcarpatian cuisine.',
        restaurants: ['Traditional Hutsul restaurants', 'Mountain cafes', 'Farm-to-table dining', 'Shepherd huts', 'Transcarpathian taverns']
      }
    },
    {
      id: 'northern-ukraine',
      nameKey: 'regions.main.northern',
      descKey: 'regions.main.northern.desc',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000026.jpg`,
      color: 'bg-[#4E7B53]',
      gradient: 'from-[#4E7B53] to-[#4E7B53]/80',
      subRegions: [
        { id: 'polissia', name: 'regions.modal.polissia', desc: 'regions.modal.polissia.desc' },
        { id: 'starodub', name: 'regions.modal.starodub', desc: 'regions.modal.starodub.desc' }
      ],
      cuisine: {
        specialties: ['Forest mushrooms', 'Wild berries', 'Honey', 'Fish dishes', 'Polissia Kasha', 'Wild game'],
        description: 'Forest-based cuisine with wild mushrooms, berries, and freshwater fish from local lakes and rivers. Traditional Polissia dishes with forest ingredients.',
        restaurants: ['Forest lodges', 'Rural guesthouses', 'Traditional Ukrainian taverns', 'Hunting lodges']
      }
    },
    {
      id: 'central-ukraine',
      nameKey: 'regions.main.central',
      descKey: 'regions.main.central.desc',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      color: 'bg-[#1F5FA0]',
      gradient: 'from-[#1F5FA0] to-[#1F5FA0]/80',
      subRegions: [
        { id: 'central', name: 'regions.modal.central', desc: 'regions.modal.central.desc' },
        { id: 'podillia', name: 'regions.modal.podillia', desc: 'regions.modal.podillia.desc' }
      ],
      cuisine: {
        specialties: ['Chicken Kyiv', 'Deruny', 'Kutia', 'Paska', 'Poltava Varenyky', 'Galushky', 'Central Ukrainian Borsch'],
        description: 'Classic Ukrainian cuisine with rich traditions. Known for festive dishes, hearty comfort food, and traditional Poltava specialties including famous dumplings.',
        restaurants: ['Traditional Ukrainian restaurants', 'Modern Ukrainian cuisine', 'Family-run eateries', 'Poltava taverns']
      }
    },
    {
      id: 'eastern-ukraine',
      nameKey: 'regions.main.eastern',
      descKey: 'regions.main.eastern.desc',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      color: 'bg-[#D89B5A]',
      gradient: 'from-[#D89B5A] to-[#D89B5A]/80',
      subRegions: [
        { id: 'slobozhanshyna', name: 'regions.modal.slobozhanshyna', desc: 'regions.modal.slobozhanshyna.desc' },
        { id: 'donbas', name: 'regions.modal.donbas', desc: 'regions.modal.donbas.desc' }
      ],
      cuisine: {
        specialties: ['Shashlik', 'Plov', 'Baklava', 'Kebab', 'Slobozhanshchyna Borsch', 'Donbas Dumplings'],
        description: 'Influenced by Eastern and Central Asian cuisines. Rich in grilled meats, rice dishes, and sweet pastries. Traditional Slobozhanshchyna and Donbas specialties.',
        restaurants: ['Eastern European restaurants', 'Grill houses', 'Traditional bakeries', 'Slobozhanshchyna taverns']
      }
    },
    {
      id: 'southern-ukraine',
      nameKey: 'regions.main.southern',
      descKey: 'regions.main.southern.desc',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000772.jpg`,
      color: 'bg-[#4E7B53]',
      gradient: 'from-[#4E7B53] to-[#4E7B53]/80',
      subRegions: [
        { id: 'southern', name: 'regions.modal.southern', desc: 'regions.modal.southern.desc' },
        { id: 'crimea', name: 'regions.modal.crimea', desc: 'regions.modal.crimea.desc' },
        { id: 'bessarabia', name: 'regions.modal.bessarabia', desc: 'regions.modal.bessarabia.desc' },
        { id: 'kuban', name: 'regions.modal.kuban', desc: 'regions.modal.kuban.desc' }
      ],
      cuisine: {
        specialties: ['Odesa Borsch', 'Bessarabian Mamaliga', 'Black Sea Fish', 'Southern Wine', 'Odesa Forshmak', 'Bessarabian Plachinda', 'Crimean Tatar Chebureki', 'Crimean Tatar Plov'],
        description: 'Mediterranean influence with fresh seafood, local wines, and coastal specialties. Famous for Odesa borsch, Bessarabian cornmeal dishes, Jewish-influenced Odesa cuisine, traditional Southern Ukrainian specialties, and Crimean Tatar cuisine.',
        restaurants: ['Seafood restaurants', 'Wine cellars', 'Coastal cafes', 'Traditional taverns', 'Odesa fish markets', 'Jewish delis', 'Crimean Tatar restaurants']
      }
    }
  ]

  const activeRegionData = mainRegions.find(region => region.id === activeRegion)

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
          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
            {t('regions.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('regions.grid.title')}
            </h2>
            <p className="text-xl text-[#22242A] max-w-3xl mx-auto">
              {t('regions.grid.subtitle')}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-bold text-[#22242A] mb-6">
                  {t('regions.navigation.title')}
                </h3>
                
                <nav className="space-y-2">
                  {mainRegions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setActiveRegion(region.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeRegion === region.id
                          ? `${region.color} text-white shadow-lg transform scale-105`
                          : 'bg-gray-50 hover:bg-gray-100 text-[#22242A]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-sm">
                            {t(region.nameKey)}
                          </h4>
                          <p className={`text-xs mt-1 ${
                            activeRegion === region.id ? 'text-white/80' : 'text-[#22242A]'
                          }`}>
                            {region.subRegions.length} historical regions
                          </p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          activeRegion === region.id ? 'bg-white' : 'bg-gray-300'
                        }`}></div>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {activeRegionData && (
                <div className="space-y-8">
                  {/* Region Header */}
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={activeRegionData.image} 
                      alt={t(activeRegionData.nameKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-4xl font-bold text-white mb-4">
                        {t(activeRegionData.nameKey)}
                      </h2>
                      <p className="text-white text-xl max-w-2xl">
                        {t(activeRegionData.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Historical Regions & Cuisine Grid */}
                  <div>
                    <h3 className="text-3xl font-bold text-[#22242A] mb-6">
                      Historical Regions & Cuisine
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeRegionData.subRegions.map((subRegion) => (
                        <div 
                          key={subRegion.id}
                          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-xl font-bold text-[#22242A]">
                              {t(subRegion.name)}
                            </h4>
                            <div className={`w-3 h-3 ${activeRegionData.color} rounded-full`}></div>
                          </div>
                          
                          <p className="text-[#22242A] leading-relaxed mb-4">
                            {t(subRegion.desc)}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-[#1F5FA0] text-sm font-medium">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Explore region
                            </div>
                            
                            <button className="text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-semibold transition-colors">
                              Learn more →
                            </button>
                          </div>
                        </div>
                      ))}
                      
                      {/* Cuisine Card */}
                      <div 
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-[#D89B5A]/20"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-[#D89B5A] rounded-lg flex items-center justify-center mr-3">
                              <span className="text-white text-sm">🍽️</span>
                            </div>
                            <h4 className="text-xl font-bold text-[#22242A]">
                              {t(activeRegionData.nameKey)} Cuisine
                            </h4>
                          </div>
                          <div className="w-3 h-3 bg-[#D89B5A] rounded-full"></div>
                        </div>
                        
                        <p className="text-[#22242A] leading-relaxed mb-4">
                          {activeRegionData.cuisine.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-semibold text-[#22242A] mb-2">
                            Regional Specialties:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {activeRegionData.cuisine.specialties.slice(0, 3).map((specialty, index) => (
                              <span key={index} className="px-2 py-1 bg-[#D89B5A]/10 text-[#D89B5A] text-xs rounded-full">
                                {specialty}
                              </span>
                            ))}
                            {activeRegionData.cuisine.specialties.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{activeRegionData.cuisine.specialties.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-[#1F5FA0] text-sm font-medium">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
                            </svg>
                            Culinary traditions
                          </div>
                          
                          <button className="text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-semibold transition-colors">
                            Explore cuisine →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Region Statistics */}
                  <div className="bg-[#F6F6F8] rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      Region Overview
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#1F5FA0] mb-2">
                          {activeRegionData.subRegions.length}
                        </div>
                        <div className="text-[#22242A] text-sm">Historical Regions</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#4E7B53] mb-2">
                          {activeRegion === 'western-ukraine' ? '25' : 
                           activeRegion === 'northern-ukraine' ? '15' :
                           activeRegion === 'central-ukraine' ? '20' :
                           activeRegion === 'eastern-ukraine' ? '18' :
                           activeRegion === 'southern-ukraine' ? '12' : '15'}
                        </div>
                        <div className="text-[#22242A] text-sm">Major Cities</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#D89B5A] mb-2">
                          {activeRegion === 'western-ukraine' ? '8' : 
                           activeRegion === 'northern-ukraine' ? '3' :
                           activeRegion === 'central-ukraine' ? '5' :
                           activeRegion === 'eastern-ukraine' ? '4' :
                           activeRegion === 'southern-ukraine' ? '6' : '5'}
                        </div>
                        <div className="text-[#22242A] text-sm">UNESCO Sites</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#6A5B8C] mb-2">
                          {activeRegion === 'western-ukraine' ? '150+' : 
                           activeRegion === 'northern-ukraine' ? '80+' :
                           activeRegion === 'central-ukraine' ? '120+' :
                           activeRegion === 'eastern-ukraine' ? '100+' :
                           activeRegion === 'southern-ukraine' ? '90+' : '100+'}
                        </div>
                        <div className="text-[#22242A] text-sm">Attractions</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
            <p className="text-xl text-[#22242A] max-w-3xl mx-auto">
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
              <p className="text-[#22242A] leading-relaxed mb-4">
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
              <p className="text-[#22242A] leading-relaxed mb-4">
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
              <p className="text-[#22242A] leading-relaxed mb-4">
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
            <p className="text-xl text-[#22242A] max-w-3xl mx-auto">
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
                    <p className="text-[#22242A] text-sm">{t('regions.tips.seasonal.spring.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5C542] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs">☀️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.summer.title')}</h4>
                    <p className="text-[#22242A] text-sm">{t('regions.tips.seasonal.summer.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#D89B5A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">🍂</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.autumn.title')}</h4>
                    <p className="text-[#22242A] text-sm">{t('regions.tips.seasonal.autumn.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1F5FA0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">❄️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#22242A] mb-1">{t('regions.tips.seasonal.winter.title')}</h4>
                    <p className="text-[#22242A] text-sm">{t('regions.tips.seasonal.winter.description')}</p>
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

