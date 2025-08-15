import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function JewishUkraine() {
  const { t } = useI18n()

  const historicalPeriods = [
    { id: 'golden-age', icon: '✨', color: 'bg-[#F5C542]', period: '16th-18th C' },
    { id: 'hasidism', icon: '📿', color: 'bg-[#6A5B8C]', period: '18th-19th C' },
    { id: 'pogroms', icon: '🕯️', color: 'bg-[#D89B5A]', period: '19th-20th C' },
    { id: 'holocaust', icon: '🌹', color: 'bg-[#1F5FA0]', period: '1941-1944' }
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
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg')` }}
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

      {/* Historical Timeline */}
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              {t('jewish.content.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Khazars Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.khazars.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.khazars.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A]">
              {t('jewish.content.khazars.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Ashkenazim Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.ashkenazim.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.ashkenazim.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A]">
              {t('jewish.content.ashkenazim.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Hasidism Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.hasidism.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.hasidism.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              {t('jewish.content.hasidism.text2')}
            </p>
          </div>

          {/* Hasidic Dynasties Infographic */}
          <div className="bg-white rounded-3xl p-8 my-8 text-[#22242A]">
            <h3 className="text-2xl font-bold mb-8 text-center text-[#22242A]">{t('jewish.content.dynasties.title')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#F5C542] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📿</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Breslov</h4>
                <p className="text-[#22242A]/90 text-sm mb-2">Uman</p>
                <p className="text-[#22242A]/80 text-xs">{t('jewish.content.dynasties.breslov')}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🕯️</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Chabad</h4>
                <p className="text-[#22242A]/90 text-sm mb-2">Liubavychi</p>
                <p className="text-[#22242A]/80 text-xs">{t('jewish.content.dynasties.chabad')}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#D89B5A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⭐</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Belz</h4>
                <p className="text-[#22242A]/90 text-sm mb-2">Belz</p>
                <p className="text-[#22242A]/80 text-xs">{t('jewish.content.dynasties.belz')}</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📚</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Sadagora</h4>
                <p className="text-[#22242A]/90 text-sm mb-2">Sadhora</p>
                <p className="text-[#22242A]/80 text-xs">{t('jewish.content.dynasties.sadagora')}</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-[#22242A]/90 text-sm italic">
                {t('jewish.content.dynasties.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shtetls Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.shtetls.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.shtetls.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A]">
              {t('jewish.content.shtetls.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Tragedy Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.tragedy.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.tragedy.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A]">
              {t('jewish.content.tragedy.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1F5FA0]">{t('jewish.content.places.title')}</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#F5C542] pl-6">
                  <h4 className="font-bold text-lg mb-2 text-[#22242A]">1. {t('jewish.content.places.uman.title')}</h4>
                  <p className="text-[#B0B3BA] leading-relaxed">{t('jewish.content.places.uman.description')}</p>
                </div>
                <div className="border-l-4 border-[#6A5B8C] pl-6">
                  <h4 className="font-bold text-lg mb-2 text-[#22242A]">2. {t('jewish.content.places.lviv.title')}</h4>
                  <p className="text-[#B0B3BA] leading-relaxed">{t('jewish.content.places.lviv.description')}</p>
                </div>
                <div className="border-l-4 border-[#D89B5A] pl-6">
                  <h4 className="font-bold text-lg mb-2 text-[#22242A]">3. {t('jewish.content.places.kyiv.title')}</h4>
                  <p className="text-[#B0B3BA] leading-relaxed">{t('jewish.content.places.kyiv.description')}</p>
                </div>
                <div className="border-l-4 border-[#4E7B53] pl-6">
                  <h4 className="font-bold text-lg mb-2 text-[#22242A]">4. {t('jewish.content.places.odesa.title')}</h4>
                  <p className="text-[#B0B3BA] leading-relaxed">{t('jewish.content.places.odesa.description')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <figure className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-18-58.jpg`}
                  alt={t('jewish.content.image.uman')}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <figcaption className="text-center text-[#B0B3BA] mt-4 italic">
                  {t('jewish.content.image.uman')}
                </figcaption>
              </figure>
              
              <figure className="relative">
                <img 
                  src={`${import.meta.env.BASE_URL}media/jewish-heritage/Synahoha-SHarhorod.webp`}
                  alt={t('jewish.content.image.sharhorod')}
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <figcaption className="text-center text-[#B0B3BA] mt-4 italic">
                  {t('jewish.content.image.sharhorod')}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#22242A]">{t('jewish.content.visit.title')}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.visit.text1')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.visit.text2')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A] mb-4">
              {t('jewish.content.visit.text3')}
            </p>
            <p className="text-lg leading-relaxed text-[#22242A]">
              {t('jewish.content.visit.text4')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <figure className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-13.jpg`}
                alt={t('jewish.content.image.heritage1')}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <figcaption className="text-center text-[#B0B3BA] mt-2 italic text-sm">
                {t('jewish.content.image.heritage1')}
              </figcaption>
            </figure>
            <figure className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-25.jpg`}
                alt={t('jewish.content.image.heritage2')}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <figcaption className="text-center text-[#B0B3BA] mt-2 italic text-sm">
                {t('jewish.content.image.heritage2')}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Final Image and CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <figure className="mb-8">
            <img 
              src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-31.jpg`}
              alt={t('jewish.content.image.preservation')}
              className="w-full h-64 object-cover rounded-2xl shadow-lg mx-auto"
            />
            <figcaption className="text-center text-[#B0B3BA] mt-4 italic">
              {t('jewish.content.image.preservation')}
            </figcaption>
          </figure>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('jewish.content.cta.journey')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('jewish.content.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}