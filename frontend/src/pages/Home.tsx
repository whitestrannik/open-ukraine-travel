import { useI18n } from '@/state/i18n'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const { t } = useI18n()
  const [bookingData, setBookingData] = useState({
    checkInDay: '',
    checkInMonth: '',
    checkInYear: '',
    checkOutDay: '',
    checkOutMonth: '',
    checkOutYear: '',
    city: '',
    guests: '2'
  })

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', bookingData)
    window.location.href = '/hotels'
  }

  return (
    <div className="min-h-screen">
      {/* Information Portal - Top Right */}
      <div className="fixed top-0 right-4 z-50">
        <a 
          href="https://evisa.mfa.gov.ua/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 text-xs font-medium text-[#1F5FA0] hover:text-[#0F3F80] border border-white/50"
        >
          Information Portal
        </a>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}media/12064535-uhd_3840_2160_30fps.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* News Content Overlay - Bottom Left */}
        <div className="absolute bottom-20 left-6 z-20 max-w-sm">
          <h1 className="text-lg font-bold text-white mb-1 drop-shadow-lg">Latest News</h1>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
            {/* Main News Item */}
            <Link to="/news/tourism-recovery-program" className="block hover:bg-gray-50/50 transition-colors">
              <div className="p-2 border-b border-gray-200/30 bg-gray-50/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#22242A] flex-1 pr-2">
                    Ukraine Tourism Recovery Program Launched
                  </h3>
                  <div className="text-xs text-[#1F5FA0] font-bold">Jan 22</div>
          </div>
        </div>
            </Link>

            {/* News Item 1 */}
            <Link to="/news/new-tourist-routes" className="block hover:bg-gray-50/50 transition-colors">
              <div className="p-2 border-b border-gray-200/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#22242A] flex-1 pr-2">
                    New Tourist Routes Open in Western Ukraine
                  </h3>
                  <div className="text-xs text-[#4E7B53] font-medium">Jan 20</div>
          </div>
        </div>
            </Link>

            {/* News Item 2 */}
            <Link to="/news/safety-updates" className="block hover:bg-gray-50/50 transition-colors">
              <div className="p-2 border-b border-gray-200/20">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#22242A] flex-1 pr-2">
                    Safety Updates for Travelers
                  </h3>
                  <div className="text-xs text-[#D89B5A] font-medium">Jan 18</div>
              </div>
              </div>
            </Link>

            {/* News Item 3 */}
            <Link to="/news/cultural-events" className="block hover:bg-gray-50/50 transition-colors">
              <div className="p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#22242A] flex-1 pr-2">
                    Cultural Events This Month
                  </h3>
                  <div className="text-xs text-[#6A5B8C] font-medium">Jan 15</div>
          </div>
        </div>
                </Link>
              </div>
            </div>

        {/* Insurance Block Overlay - Bottom Right (Above Hotel Booking) */}
        <div className="absolute top-2 right-6 z-30 w-52">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="p-3">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-[#1F5FA0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h2 className="text-sm font-bold text-[#22242A]">Travel Insurance</h2>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center text-xs text-[#B0B3BA]">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Medical coverage
                </div>
                <div className="flex items-center text-xs text-[#B0B3BA]">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Trip cancellation
              </div>
            </div>

                <Link 
                to="/insurance" 
                className="block w-full bg-[#4E7B53] hover:bg-[#4E7B53]/90 text-white text-center py-2 rounded-lg text-xs font-semibold transition-all duration-300 transform hover:scale-105"
                >
                Get Insured
                </Link>
              </div>
            </div>
          </div>

        {/* Booking Block Overlay - Bottom Right */}
        <div className="absolute top-38 right-6 z-20 w-52">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-[#1F5FA0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h2 className="text-lg font-bold text-[#22242A]">{t('bookYourStay')}</h2>
              </div>
              
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                {/* City Selection */}
                <div>
                  <label className="block text-xs font-medium text-[#22242A] mb-1">{t('destination')}</label>
                  <select 
                    value={bookingData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                    required
                  >
                    <option value="">{t('selectCity')}</option>
                    <option value="kyiv">{t('kyiv')}</option>
                    <option value="lviv">{t('lviv')}</option>
                    <option value="odesa">{t('odesa')}</option>
                    <option value="carpathians">{t('carpathians')}</option>
                    <option value="chernivtsi">{t('chernivtsi')}</option>
                  </select>
                </div>

                {/* Check-in Date */}
                <div>
                  <label className="block text-xs font-medium text-[#22242A] mb-1">{t('checkIn')}</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select 
                      value={bookingData.checkInDay}
                      onChange={(e) => handleInputChange('checkInDay', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('day')}</option>
                      {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select 
                      value={bookingData.checkInMonth}
                      onChange={(e) => handleInputChange('checkInMonth', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('month')}</option>
                      <option value="1">{t('january')}</option>
                      <option value="2">{t('february')}</option>
                      <option value="3">{t('march')}</option>
                      <option value="4">{t('april')}</option>
                      <option value="5">{t('may')}</option>
                      <option value="6">{t('june')}</option>
                      <option value="7">{t('july')}</option>
                      <option value="8">{t('august')}</option>
                      <option value="9">{t('september')}</option>
                      <option value="10">{t('october')}</option>
                      <option value="11">{t('november')}</option>
                      <option value="12">{t('december')}</option>
                    </select>
                    <select 
                      value={bookingData.checkInYear}
                      onChange={(e) => handleInputChange('checkInYear', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('year')}</option>
                      {Array.from({length: 5}, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
          </div>
        </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-xs font-medium text-[#22242A] mb-1">{t('checkOut')}</label>
                  <div className="grid grid-cols-3 gap-2">
                    <select 
                      value={bookingData.checkOutDay}
                      onChange={(e) => handleInputChange('checkOutDay', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('day')}</option>
                      {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select 
                      value={bookingData.checkOutMonth}
                      onChange={(e) => handleInputChange('checkOutMonth', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('month')}</option>
                      <option value="1">{t('january')}</option>
                      <option value="2">{t('february')}</option>
                      <option value="3">{t('march')}</option>
                      <option value="4">{t('april')}</option>
                      <option value="5">{t('may')}</option>
                      <option value="6">{t('june')}</option>
                      <option value="7">{t('july')}</option>
                      <option value="8">{t('august')}</option>
                      <option value="9">{t('september')}</option>
                      <option value="10">{t('october')}</option>
                      <option value="11">{t('november')}</option>
                      <option value="12">{t('december')}</option>
                    </select>
                    <select 
                      value={bookingData.checkOutYear}
                      onChange={(e) => handleInputChange('checkOutYear', e.target.value)}
                      className="px-2 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                      required
                    >
                      <option value="">{t('year')}</option>
                      {Array.from({length: 5}, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
          </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-medium text-[#22242A] mb-1">{t('guests')}</label>
                  <select 
                    value={bookingData.guests}
                    onChange={(e) => handleInputChange('guests', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                  >
                    <option value="1">1 {t('guest')}</option>
                    <option value="2">2 {t('guests')}</option>
                    <option value="3">3 {t('guests')}</option>
                    <option value="4">4 {t('guests')}</option>
                    <option value="5">5+ {t('guests')}</option>
                  </select>
            </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t('searchHotels')}
                </button>
              </form>

              <div className="mt-3 space-y-1">
                <div className="flex items-center text-xs text-[#B0B3BA]">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                  {t('bestPriceGuarantee')}
              </div>
                <div className="flex items-center text-xs text-[#B0B3BA]">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('freeCancellation')}
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats - Ukraine at a Glance */}
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
            {[
              { key: 'unesco', value: '7', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { key: 'regions', value: '24', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
              { key: 'cities', value: '460+', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              { key: 'history', value: '1000+', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((stat) => (
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

      {/* Explore Sections Grid - What Would You Like to Explore? */}
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
            {[
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
            ].map((section) => (
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
    </div>
  )
}

