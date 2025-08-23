import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function Poltava() {
  const { t } = useI18n()

  const attractions = [
    {
      id: 'round-square',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`,
      category: 'square'
    },
    {
      id: 'cathedral',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      category: 'religious'
    },
    {
      id: 'museum-history',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-2787267.jpg`,
      category: 'museum'
    },
    {
      id: 'korpusny-garden',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000026.jpg`,
      category: 'nature'
    },
    {
      id: 'white-rotunda',
      image: `${import.meta.env.BASE_URL}media/pexels-nextvoyage-1000772.jpg`,
      category: 'historical'
    },
    {
      id: 'shevchenko-park',
      image: `${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg`,
      category: 'park'
    }
  ]

  const districts = [
    { id: 'historic-center', color: 'bg-[#1F5FA0]' },
    { id: 'korpusny-garden-area', color: 'bg-[#6A5B8C]' },
    { id: 'university-quarter', color: 'bg-[#D89B5A]' },
    { id: 'industrial-zone', color: 'bg-[#4E7B53]' }
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
            <span className="text-[#1F5FA0] font-medium">Полтава</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Полтава - Серце України
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Місто з багатою історією, де традиції козацтва зустрічаються з сучасністю
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Планувати поїздку →
            </button>
            <button className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20">
              Путівник →
            </button>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Розташування</h3>
              <p className="text-gray-600">Центральна Україна, Полтавська область</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Найкращий час</h3>
              <p className="text-gray-600">Травень - Вересень</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Населення</h3>
              <p className="text-gray-600">~300,000 мешканців</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Про Полтаву</h2>
              <p className="text-lg text-gray-700 mb-6">
                Полтава - це місто з багатою історією, яке є серцем традиційної української культури. 
                Тут зберігається дух козацтва та імперська спадщина, що робить місто унікальним місцем для відвідування.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Місто відоме своїми музеями, автентичною кухнею та традиційними святами. 
                Полтавські вареники та інші страви стали символом української кухні.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-[#1F5FA0] text-white rounded-full text-sm font-medium">
                  Історичні пам'ятки
                </span>
                <span className="px-4 py-2 bg-[#6A5B8C] text-white rounded-full text-sm font-medium">
                  Традиційна кухня
                </span>
                <span className="px-4 py-2 bg-[#D89B5A] text-white rounded-full text-sm font-medium">
                  Музеї
                </span>
                <span className="px-4 py-2 bg-[#4E7B53] text-white rounded-full text-sm font-medium">
                  Парки
                </span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg`}
                alt="Полтава"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600">Кругла площа - серце міста</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Основні визначні пам'ятки</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={attraction.image}
                    alt={attraction.id}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {attraction.id === 'round-square' && 'Кругла площа'}
                      {attraction.id === 'cathedral' && 'Успенський собор'}
                      {attraction.id === 'museum-history' && 'Краєзнавчий музей'}
                      {attraction.id === 'korpusny-garden' && 'Корпусний сад'}
                      {attraction.id === 'white-rotunda' && 'Біла ротонда'}
                      {attraction.id === 'shevchenko-park' && 'Парк Шевченка'}
                    </h3>
                    <span className="text-sm opacity-90">
                      {attraction.category === 'square' && 'Площа'}
                      {attraction.category === 'religious' && 'Релігійна споруда'}
                      {attraction.category === 'museum' && 'Музей'}
                      {attraction.category === 'nature' && 'Природа'}
                      {attraction.category === 'historical' && 'Історична пам\'ятка'}
                      {attraction.category === 'park' && 'Парк'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Райони міста</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district) => (
              <div key={district.id} className="text-center">
                <div className={`w-20 h-20 ${district.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {district.id === 'historic-center' && 'Історичний центр'}
                  {district.id === 'korpusny-garden-area' && 'Корпусний сад'}
                  {district.id === 'university-quarter' && 'Університетський район'}
                  {district.id === 'industrial-zone' && 'Промислова зона'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {district.id === 'historic-center' && 'Серце міста з основними пам\'ятками'}
                  {district.id === 'korpusny-garden-area' && 'Зелена зона відпочинку'}
                  {district.id === 'university-quarter' && 'Освітній та культурний центр'}
                  {district.id === 'industrial-zone' && 'Сучасна промислова частина'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Готові відкрити Полтаву?</h2>
          <p className="text-xl mb-8 text-white/90">
            Плануйте свою подорож до серця України та відкрийте для себе багату історію та культуру Полтави
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Всі міста →
            </Link>
            <Link 
              to="/explore" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Дізнатися більше →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
