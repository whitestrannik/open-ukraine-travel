import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function EssentialInfo() {
  const { t } = useI18n()

  const essentialSections = [
    {
      id: 'entry-requirements',
      icon: '🛂',
      color: 'bg-[#1F5FA0]'
    },
    {
      id: 'currency-payments',
      icon: '💳',
      color: 'bg-[#4E7B53]'
    },
    {
      id: 'health-safety',
      icon: '🏥',
      color: 'bg-[#6A5B8C]'
    },
    {
      id: 'transportation',
      icon: '🚊',
      color: 'bg-[#D89B5A]'
    },
    {
      id: 'communication',
      icon: '📱',
      color: 'bg-[#1F5FA0]'
    },
    {
      id: 'cultural-tips',
      icon: '🤝',
      color: 'bg-[#4E7B53]'
    }
  ]

  const quickFacts = [
    { id: 'language', icon: '🗣️', color: 'bg-[#1F5FA0]' },
    { id: 'currency', icon: '💰', color: 'bg-[#4E7B53]' },
    { id: 'timezone', icon: '🕐', color: 'bg-[#6A5B8C]' },
    { id: 'emergency', icon: '🚨', color: 'bg-[#D89B5A]' }
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
            <span className="text-[#1F5FA0] font-medium">{t('essential.nav.title')}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/pexels-freestockpro-1227513.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            {t('essential.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            {t('essential.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/entry" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t('essential.hero.cta.entry')} →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              {t('essential.hero.cta.insurance')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('essential.facts.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('essential.facts.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickFacts.map((fact) => (
              <div key={fact.id} className="text-center group">
                <div className={`w-16 h-16 ${fact.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{fact.icon}</span>
                </div>
                <div className="text-lg font-bold text-[#22242A] mb-2">
                  {t(`essential.facts.${fact.id}.value`)}
                </div>
                <div className="text-[#B0B3BA] font-medium">
                  {t(`essential.facts.${fact.id}.label`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Information Sections */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('essential.sections.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('essential.sections.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialSections.map((section) => (
              <div 
                key={section.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${section.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{section.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#22242A] mb-4">
                    {t(`essential.sections.${section.id}.title`)}
                  </h3>
                  <p className="text-[#B0B3BA] mb-6 line-clamp-3">
                    {t(`essential.sections.${section.id}.description`)}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {t(`essential.sections.${section.id}.points`).split('|').map((point: string, index: number) => (
                      <div key={index} className="flex items-center text-sm text-[#22242A]">
                        <div className="w-1.5 h-1.5 bg-[#F5C542] rounded-full mr-2 flex-shrink-0"></div>
                        {point.trim()}
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-semibold transition-colors flex items-center">
                    {t('essential.sections.learn')} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Checklist */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#22242A]">
              {t('essential.checklist.title')}
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              {t('essential.checklist.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before Travel */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1F5FA0] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">✈️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#22242A]">
                  {t('essential.checklist.before.title')}
                </h3>
              </div>
              
              <div className="space-y-3">
                {t('essential.checklist.before.items').split('|').map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 border-2 border-[#F5C542] rounded mr-3 mt-0.5 flex-shrink-0"></div>
                    <span className="text-[#22242A]">{item.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upon Arrival */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4E7B53] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🏁</span>
                </div>
                <h3 className="text-2xl font-bold text-[#22242A]">
                  {t('essential.checklist.arrival.title')}
                </h3>
              </div>
              
              <div className="space-y-3">
                {t('essential.checklist.arrival.items').split('|').map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 border-2 border-[#F5C542] rounded mr-3 mt-0.5 flex-shrink-0"></div>
                    <span className="text-[#22242A]">{item.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-gradient-to-r from-[#D89B5A] to-[#D89B5A]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚨</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              {t('essential.emergency.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {t('essential.emergency.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-2xl mb-2">🚔</div>
              <div className="text-lg font-semibold mb-1">{t('essential.emergency.police.label')}</div>
              <div className="text-2xl font-bold">{t('essential.emergency.police.number')}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-2xl mb-2">🚑</div>
              <div className="text-lg font-semibold mb-1">{t('essential.emergency.medical.label')}</div>
              <div className="text-2xl font-bold">{t('essential.emergency.medical.number')}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-2xl mb-2">🚒</div>
              <div className="text-lg font-semibold mb-1">{t('essential.emergency.fire.label')}</div>
              <div className="text-2xl font-bold">{t('essential.emergency.fire.number')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#22242A]">
            {t('essential.cta.title')}
          </h2>
          <p className="text-xl text-[#B0B3BA] mb-8">
            {t('essential.cta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('essential.cta.insurance')} →
            </Link>
            <Link 
              to="/hotels" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('essential.cta.hotels')} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
