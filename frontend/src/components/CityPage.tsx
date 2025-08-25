import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'
import { usePageContent } from '@/data/content'
import type { PageContent } from '@/data/content'

interface CityPageProps {
  page: 'chernihiv' | 'chernivtsi'
}

export function CityPage({ page }: CityPageProps) {
  const { lang } = useI18n()
  
  console.log('CityPage: page =', page, 'lang =', lang)
  
  try {
    const content = usePageContent(page, lang as any)
    console.log('CityPage render:', { page, lang, content })
    console.log('Content sections:', content?.content?.sections)
    
    if (!content) {
      console.error('Content is undefined for:', { page, lang })
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>
    }
    
    return (
      <div className="min-h-screen">
        {/* Breadcrumb Section */}
        <section className="bg-gray-50 py-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
              <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
                {content.breadcrumb.home}
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/explore" className="hover:text-[#1F5FA0] transition-colors">
                {content.breadcrumb.explore}
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/explore/gems" className="hover:text-[#1F5FA0] transition-colors">
                {content.breadcrumb.hiddenGems}
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#1F5FA0] font-medium">{content.breadcrumb.currentPage}</span>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2 ml-4">
                {page === 'chernihiv' ? (
                  <>
                    <Link 
                      to="/explore/gems/chernihiv" 
                      className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
                    >
                      UA
                    </Link>
                    <Link 
                      to="/chernihiv-english-new" 
                      className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
                    >
                      EN
                    </Link>
                    <Link 
                      to="/chernihiv-sp" 
                      className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
                    >
                      ES
                    </Link>
                  </>
                                 ) : (
                   <>
                     <Link 
                       to="/explore/gems/chernivtsi" 
                       className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
                     >
                       UA
                     </Link>
                     <Link 
                       to="/chernivtsi-english" 
                       className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
                     >
                       EN
                     </Link>
                   </>
                 )}
              </div>
            </nav>
          </div>
        </section>

                 {/* Hero Section */}
         <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url(${page === 'chernihiv' ? '/media/ukraine-5124718.jpg' : '/media/pexels-anastasiia-kalushka-940919279-20074400.jpg'})` }}
           ></div>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          
          <div className="relative z-20 text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
                             <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                 <div className="md:w-80 flex-shrink-0">
                   <img 
                     src={page === 'chernihiv' ? "/media/architecture-3197527.jpg" : "/media/pexels-anastasiia-kalushka-940919279-20074400.jpg"}
                     alt={page === 'chernihiv' ? "Chernihiv - ancient capital of Rus" : "Chernivtsi - Pearl of Bukovina"}
                     className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                   />
                   <p className="text-sm text-gray-600 text-center mt-2">
                     {page === 'chernihiv' ? "Chernihiv - one of the oldest cities in Ukraine" : "Chernivtsi - Pearl of Bukovina"}
                   </p>
                 </div>
                
                <div className="flex-1">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {content.content.introduction}
                  </p>
                </div>
              </div>

                             {/* Sections */}
               {Object.entries(content.content.sections).map(([key, section]) => {
                 // Определяем позицию фото для каждого конкретного блока
                 let imageOnLeft = false
                 
                                   if (page === 'chernivtsi') {
                    if (key === 'university') imageOnLeft = false // справа
                    else if (key === 'ratusha') imageOnLeft = true // слева
                    else if (key === 'kobylyanska') imageOnLeft = false // справа
                 } else {
                   if (key === 'transfiguration') imageOnLeft = true // слева
                   else if (key === 'borisGleb') imageOnLeft = false // справа
                   else if (key === 'monastery') imageOnLeft = true // слева
                 }
                 
                 return (
                   <div key={key} className="mt-12">
                     <h3 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h3>
                     
                     <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                       {section.image && imageOnLeft && (
                         <div className="md:w-80 flex-shrink-0">
                           <img 
                             src={section.image}
                             alt={section.imageAlt || section.title}
                             className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                           />
                         </div>
                       )}
                       
                       <div className="flex-1">
                         <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                           {section.content}
                         </p>
                       </div>
                       
                       {section.image && !imageOnLeft && (
                         <div className="md:w-80 flex-shrink-0">
                           <img 
                             src={section.image}
                             alt={section.imageAlt || section.title}
                             className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                           />
                         </div>
                       )}
                     </div>
                   </div>
                 )
               })}

              {/* Facts Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{content.content.facts.title}</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  {content.content.facts.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#1F5FA0] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unusual Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{content.content.unusual.title}</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  {content.content.unusual.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#1F5FA0] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips Section */}
              <div className="bg-gray-50 p-8 rounded-lg mt-12">
                <h4 className="text-xl font-bold mb-4 text-gray-900">{content.content.tips.title}</h4>
                <ul className="space-y-2 text-gray-700">
                  {content.content.tips.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#F5C542] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1F5FA0] text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">{content.cta.title}</h2>
            <p className="text-xl mb-8 text-white/90">
              {content.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/explore/gems" 
                className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {content.cta.buttons.allGems}
              </Link>
              <Link 
                to="/cities/kyiv" 
                className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                {content.cta.buttons.kyivPage}
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error('Error in CityPage:', error)
    return <div className="min-h-screen flex items-center justify-center">Error loading page content</div>
  }
}
