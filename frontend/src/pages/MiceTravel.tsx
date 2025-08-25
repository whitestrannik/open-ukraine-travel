import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function MiceTravel() {
  const { t } = useI18n()

  const miceCities = [
    {
      id: 'kyiv',
      name: 'Kyiv',
      image: `${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg`,
      description: 'Capital of Ukraine, modern metropolis with international accessibility, top hotels, multifunctional congress halls and unique heritage venues.',
             venues: [
         'International Exhibition Center — largest in Ukraine (up to 25,000 participants)',
         'Parkovy Convention and Exhibition Center — panoramic Dnipro River views',
         'Premier Palace Hotel, Hilton, InterContinental — 5* hotels with meeting facilities',
         'Mystetskyi Arsenal — contemporary art center for creative events',
         'Ukrainian House — government conference center with modern facilities',
         'Fairmont Grand Hotel Kyiv — luxury venue with ballroom and meeting rooms'
       ],
       products: [
         'Incentive: private tours of UNESCO sites (Kyiv-Pechersk Lavra, St. Sophia)',
         'Team-building: river cruises, creative workshops, historic quests',
         'Cultural programs: traditional Ukrainian crafts and cooking masterclasses',
         'Corporate events: rooftop receptions with panoramic city views',
         'Tech events: modern co-working spaces and innovation hubs'
       ],
       logistics: [
         '200+ hotels, direct flights, central railway hub',
         'Metro and public transport system',
         'International airport with direct connections to major European cities',
         'Comprehensive visa support and documentation services',
         '24/7 concierge and emergency support services'
       ],
       support: [
         'Kyiv Tourism & Convention Bureau',
         'Local DMC partners',
         'Professional event management teams',
         'Multilingual staff and interpreters',
         'Technical support and AV equipment specialists'
       ]
    },
    {
      id: 'lviv',
      name: 'Lviv',
             image: `${import.meta.env.BASE_URL}media/lwo1.jpg`,
      description: 'European-style city with UNESCO heritage center, cultural charm and growing MICE infrastructure.',
             venues: [
         'Jam Factory Art Center — art & creative industries',
         'LEM Station — tech and innovation hub',
         'Lviv Tech City — 390 participants, modern facilities',
         'Leoland — flexible interiors for events',
         'Emily Resort — resort with conference hall & SPA',
         'Pivdennyi EXPO Center — up to 1000 participants',
         'Lviv Palace of Arts — historic venue for cultural events',
         'Opera House — prestigious venue for special occasions',
         'Rynok Square venues — authentic historic atmosphere'
       ],
       products: [
         'Incentive: coffee and chocolate masterclasses, brewery tours',
         'Team-building: quests in the Old Town, activities in Shevchenkivskyi Hai (ethno park)',
         'Eco-retreats: Roztochia Biosphere Reserve programs',
         'Cultural immersion: traditional Ukrainian folk art workshops',
         'Gastronomic experiences: local cuisine tasting and cooking classes',
         'Historical tours: UNESCO World Heritage site exploration'
       ],
       logistics: [
         '144 hotels, 4000+ rooms, 74 venues',
         'International airport, train links to EU and Kyiv',
         'Direct flights to major European cities',
         'Comprehensive ground transportation services',
         'Professional accommodation booking and management',
         'Multilingual support and local expertise'
       ],
       support: [
         'Lviv Convention Bureau',
         'Local event management specialists',
         'Cultural heritage experts and guides',
         'Technical and AV equipment providers',
         'Catering and hospitality services'
       ]
    },
    {
      id: 'odesa',
      name: 'Odesa',
             image: `${import.meta.env.BASE_URL}media/ods opera.jpg`,
      description: 'Sea resort city with multicultural flavor, Black Sea port, perfect for summer incentives, seaside events and gastro-tours.',
             venues: [
         'Odesa Opera House (special events)',
         'Hotels Bristol, Londonskaya, Black Sea chain — conference facilities',
         'Odesa Film Studio, creative spaces for events',
         'Maritime Terminal — unique venue with sea views',
         'City Garden venues — outdoor and indoor event spaces',
         'Deribasivska Street venues — central location with historic charm',
         'Beachfront resorts — summer conference and incentive venues'
       ],
       products: [
         'Incentive: wine tours in Shabo, seaside boat parties',
         'Team-building: sailing regattas, cooking classes of Odesa cuisine',
         'Cultural programs: Opera, Potemkin Stairs, catacombs',
         'Seaside activities: beach sports and water activities',
         'Gastronomic tours: local seafood and traditional cuisine',
         'Historical exploration: Jewish heritage and multicultural sites',
         'Summer festivals and cultural events integration'
       ],
       logistics: [
         'Odesa International Airport, seaport',
         '100+ hotels and resorts',
         'Direct flights to major European destinations',
         'Comprehensive sea and land transportation',
         'Seasonal accommodation and venue availability',
         'Multilingual support and local expertise',
         'Emergency and medical support services'
       ],
       support: [
         'Odesa City Council (Tourism Department)',
         'Local DMC partners',
         'Maritime and port authorities coordination',
         'Cultural heritage preservation organizations',
         'Local business and trade associations',
         'Emergency response and security services'
       ]
    },
    {
      id: 'uzhhorod',
      name: 'Uzhhorod',
             image: `${import.meta.env.BASE_URL}media/udj mist.jpeg`,
      description: 'Safe city in Western Ukraine, close to EU borders, perfect for boutique conferences and incentive programs with authentic Carpathian flavor.',
             venues: [
         'Derenivska Kupil — boutique venue',
         'Local hotels with conference facilities',
         'Creative spaces in historic buildings',
         'Uzhhorod Castle — historic venue for special events',
         'City Hall — official reception and conference facilities',
         'Botanical Garden — outdoor event spaces',
         'Wine cellars and tasting rooms — unique venue options'
       ],
       products: [
         'Incentive: Carpathian mountain tours, wine tasting',
         'Team-building: outdoor activities, cultural workshops',
         'Wellness programs: thermal springs, spa treatments',
         'Cultural immersion: traditional Carpathian crafts and music',
         'Gastronomic experiences: local wine and traditional cuisine',
         'Adventure activities: hiking, cycling, and nature exploration',
         'Cross-border experiences: Slovakia and Hungary day trips'
       ],
       logistics: [
         'Close to EU borders (Slovakia, Hungary)',
         'International airport connections',
         'Boutique hotels and guesthouses',
         'Direct rail connections to European cities',
         'Comprehensive border crossing assistance',
         'Local transportation and guide services',
         'Multilingual support (Ukrainian, Hungarian, Slovak)'
       ],
       support: [
         'Local tourism office',
         'Regional DMC partners',
         'Carpathian region tourism associations',
         'Cross-border cooperation organizations',
         'Local cultural and heritage preservation groups',
         'Emergency and medical support services'
       ]
    }
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
            <span className="text-[#1F5FA0] font-medium">MICE Travel</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-12932806.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏢</span>
            </div>
          </div>
                     <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
             MICE in Ukraine: Business Events & Conference Tourism
           </h1>
           <p className="text-lg md:text-xl mb-8 text-white/95 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
             Despite the ongoing war, Ukraine's MICE sector remains active and resilient. International NGOs, humanitarian missions, pharmaceutical companies, diplomatic institutions and business associations continue to host conferences, trainings, strategic meetings and cultural forums across the country. Our comprehensive MICE services include event planning, venue selection, accommodation booking, and unique incentive programs.
           </p>
        </div>
      </section>

             {/* Introduction Section */}
       <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-8 text-gray-900">
               Resilient MICE Industry: Professional Event Management in Ukraine
             </h2>
             <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-12">
               Despite unprecedented challenges, Ukraine's MICE sector has demonstrated remarkable resilience and adaptability. Hotels, resorts, and creative venues have successfully adapted to current realities while maintaining and enhancing their professional infrastructure and reliable services. The industry has not only survived but thrived, evolving from traditional conference hosting to innovative hybrid and virtual event solutions, while preserving the unique cultural experiences that make Ukraine an exceptional MICE destination.
             </p>
             
             <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16">
               MICE in Ukraine today represents a dynamic ecosystem of growth and innovation: from international NGO summits in Kyiv to pharmaceutical congresses in Lviv, from incentive programs in Odesa to boutique conferences in Uzhhorod, from tech startup gatherings to cultural heritage preservation forums. The industry continues to shape Ukraine's international image as a destination that combines professional excellence with authentic cultural experiences, competitive pricing, and cutting-edge technology solutions.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
               <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                 <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-white text-2xl">📊</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Event Planning</h3>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   Comprehensive event management from initial concept development through execution and post-event analysis. Our expert team specializes in creating memorable experiences that align with your business objectives and exceed participant expectations.
                 </p>
                 <ul className="text-sm text-gray-700 text-left space-y-2">
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Strategic concept development and planning</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Budget optimization and cost management</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Risk assessment and contingency planning</span>
                   </li>
                 </ul>
               </div>
               
               <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                 <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-white text-2xl">🏨</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Venue Selection</h3>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   Access to world-class conference centers, historic venues, and unique spaces that combine modern technology with authentic Ukrainian charm. From grand ballrooms to intimate meeting spaces, we ensure the perfect setting for your event.
                 </p>
                 <ul className="text-sm text-gray-700 text-left space-y-2">
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Exclusive venue partnerships and access</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>State-of-the-art technical infrastructure</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Flexible space configurations and setups</span>
                   </li>
                 </ul>
               </div>
               
               <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                 <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-white text-2xl">✈️</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Travel Logistics</h3>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   End-to-end travel coordination including international flights, local transportation, accommodation booking, and visa support. Our logistics team ensures seamless travel experiences for all participants.
                 </p>
                 <ul className="text-sm text-gray-700 text-left space-y-2">
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>International travel coordination and booking</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Visa application support and documentation</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>24/7 travel support and emergency assistance</span>
                   </li>
                 </ul>
               </div>
               
               <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                 <div className="w-16 h-16 bg-[#F5C542] rounded-full flex items-center justify-center mx-auto mb-6">
                   <span className="text-black text-2xl">🎯</span>
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Incentive Programs</h3>
                 <p className="text-gray-600 leading-relaxed mb-4">
                   Custom-designed incentive programs that combine business objectives with authentic Ukrainian cultural experiences. From traditional workshops to exclusive heritage site visits, we create memorable team-building experiences.
                 </p>
                 <ul className="text-sm text-gray-700 text-left space-y-2">
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#F5C542] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Cultural immersion and heritage experiences</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#F5C542] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Team-building activities and workshops</span>
                   </li>
                   <li className="flex items-start">
                     <span className="w-1.5 h-1.5 bg-[#F5C542] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                     <span>Exclusive access to unique venues and experiences</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           
           {/* Additional Industry Insights */}
           <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="bg-gradient-to-br from-[#1F5FA0] to-[#6A5B8C] p-8 rounded-2xl text-white">
               <h3 className="text-2xl font-bold mb-6">Industry Resilience & Innovation</h3>
               <p className="text-lg leading-relaxed mb-6">
                 Ukraine's MICE industry has demonstrated exceptional resilience through innovative adaptation strategies. Venues have implemented hybrid event capabilities, enhanced safety protocols, and developed flexible booking policies to accommodate changing circumstances.
               </p>
               <ul className="space-y-3 text-white/90">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Advanced hybrid and virtual event technology integration</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Enhanced health and safety protocols for in-person events</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Flexible cancellation and rescheduling policies</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Innovative venue utilization and space optimization</span>
                 </li>
               </ul>
             </div>
             
             <div className="bg-gradient-to-br from-[#4E7B53] to-[#F5C542] p-8 rounded-2xl text-white">
               <h3 className="text-2xl font-bold mb-6">Competitive Advantages</h3>
               <p className="text-lg leading-relaxed mb-6">
                 Ukraine offers unique competitive advantages in the global MICE market, combining cost-effectiveness with high-quality services, authentic cultural experiences, and strategic geographical location.
               </p>
               <ul className="space-y-3 text-white/90">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Cost-effective venue and service pricing compared to Western Europe</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Strategic location with easy access from major European cities</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Rich cultural heritage and authentic local experiences</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Highly skilled and multilingual event management professionals</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

      {/* MICE Cities Grid */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-7xl mx-auto px-4">
                     <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4 text-gray-900">
               MICE Destinations: Conference Centers & Event Venues in Ukraine
             </h2>
             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Discover Ukraine's premier MICE destinations with world-class facilities and unique experiences. Our expert team provides comprehensive event management services, from international conferences and corporate meetings to incentive travel programs and exhibition planning.
             </p>
           </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {miceCities.map((city) => (
              <div 
                key={city.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={city.image} 
                    alt={`${city.name} MICE destination`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {city.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {city.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Key Venues */}
                  <div className="mb-6">
                                         <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                       <span className="w-6 h-6 bg-[#1F5FA0] text-white rounded-full flex items-center justify-center text-sm mr-2">1</span>
                       Key Venues & Conference Centers
                     </h4>
                    <ul className="space-y-2">
                                             {city.venues.map((venue, index) => (
                         <li key={index} className="text-sm text-gray-700 flex items-start">
                           <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                           {venue}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* MICE Product Ideas */}
                  <div className="mb-6">
                                         <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                       <span className="w-6 h-6 bg-[#6A5B8C] text-white rounded-full flex items-center justify-center text-sm mr-2">2</span>
                       MICE Product Ideas
                     </h4>
                    <ul className="space-y-2">
                                             {city.products.map((product, index) => (
                         <li key={index} className="text-sm text-gray-700 flex items-start">
                           <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                           {product}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Logistics & Infrastructure */}
                  <div className="mb-6">
                                         <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                       <span className="w-6 h-6 bg-[#4E7B53] text-white rounded-full flex items-center justify-center text-sm mr-2">3</span>
                       Logistics & Infrastructure
                     </h4>
                    <ul className="space-y-2">
                                             {city.logistics.map((logistic, index) => (
                         <li key={index} className="text-sm text-gray-700 flex items-start">
                           <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                           {logistic}
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Support & Contact Points */}
                  <div>
                                         <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                       <span className="w-6 h-6 bg-[#F5C542] text-black rounded-full flex items-center justify-center text-sm mr-2">4</span>
                       Support & Contact Points
                     </h4>
                    <ul className="space-y-2">
                                             {city.support.map((support, index) => (
                         <li key={index} className="text-sm text-gray-700 flex items-start">
                           <span className="w-1.5 h-1.5 bg-[#F5C542] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                           {support}
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* Frontline Cities MICE Section */}
       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-6 text-gray-900">
               MICE in Frontline Cities: Resilience & Safety
             </h2>
             <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8">
               Discover Ukraine's remarkable ability to host successful MICE events in cities close to the frontline. Through comprehensive safety protocols, advanced infrastructure, and strategic planning, these cities maintain full operational capacity for business events while ensuring participant safety.
             </p>
             <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
               Remarkably, facilities in these cities often operate at full capacity during MICE events, demonstrating Ukraine's commitment to maintaining business continuity and international partnerships even during challenging times.
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
             {/* Poltava */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
               <div className="relative h-48 overflow-hidden">
                                   <img 
                    src={`${import.meta.env.BASE_URL}media/ukrainian-hata-2115708 (1).jpg`}
                    alt="Poltava MICE destination"
                    className="w-full h-full object-cover"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-4">
                   <h3 className="text-2xl font-bold text-white">Poltava</h3>
                   <p className="text-white/90 text-sm">Historic city with modern MICE infrastructure</p>
                 </div>
               </div>
               
               <div className="p-6">
                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#1F5FA0] text-white rounded-full flex items-center justify-center text-sm mr-2">🏨</span>
                     Key Hotels & Venues
                   </h4>
                                       <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Palacio Hotel — luxury 4* hotel with conference facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Optima Hotel — modern business hotel with meeting rooms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Poltava Regional Administration — official reception venues</span>
                      </li>
                    </ul>
                 </div>

                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#6A5B8C] text-white rounded-full flex items-center justify-center text-sm mr-2">🛡️</span>
                     Safety Measures
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Underground shelters in all major venues</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>24/7 security monitoring and rapid response</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Emergency evacuation protocols and drills</span>
                     </li>
                   </ul>
                 </div>

                 <div>
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#4E7B53] text-white rounded-full flex items-center justify-center text-sm mr-2">🚀</span>
                     Unique Advantages
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Full facility capacity during MICE events</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Rich cultural heritage and historical sites</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Strategic location with excellent rail connections</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>

             {/* Mykolaiv */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
               <div className="relative h-48 overflow-hidden">
                                   <img 
                    src={`${import.meta.env.BASE_URL}media/nlv port.jpg`}
                    alt="Mykolaiv MICE destination"
                    className="w-full h-full object-cover"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-4">
                   <h3 className="text-2xl font-bold text-white">Mykolaiv</h3>
                   <p className="text-white/90 text-sm">Maritime city with industrial heritage</p>
                 </div>
               </div>
               
               <div className="p-6">
                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#1F5FA0] text-white rounded-full flex items-center justify-center text-sm mr-2">🏨</span>
                     Key Hotels & Venues
                   </h4>
                                       <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Premier Ukraine Hotel — premium business hotel with conference facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Optima Hotel — modern hotel with meeting rooms and business center</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Continental Hotel — comfortable accommodation with event spaces</span>
                      </li>
                    </ul>
                 </div>

                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#6A5B8C] text-white rounded-full flex items-center justify-center text-sm mr-2">🛡️</span>
                     Safety Measures
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Reinforced shelters in all major buildings</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Advanced warning systems and communication</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Coordinated emergency response with local authorities</span>
                     </li>
                   </ul>
                 </div>

                 <div>
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#4E7B53] text-white rounded-full flex items-center justify-center text-sm mr-2">🚀</span>
                     Unique Advantages
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>100% facility utilization during events</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Maritime and shipbuilding industry expertise</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Strategic port location and logistics hub</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>

             {/* Kharkiv */}
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
               <div className="relative h-48 overflow-hidden">
                                   <img 
                    src={`${import.meta.env.BASE_URL}media/hrk 1.jpg`}
                    alt="Kharkiv MICE destination"
                    className="w-full h-full object-cover"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-4">
                   <h3 className="text-2xl font-bold text-white">Kharkiv</h3>
                   <p className="text-white/90 text-sm">Academic and industrial powerhouse</p>
                 </div>
               </div>
               
               <div className="p-6">
                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#1F5FA0] text-white rounded-full flex items-center justify-center text-sm mr-2">🏨</span>
                     Key Hotels & Venues
                   </h4>
                                       <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Nemo Hotel — luxury 5* hotel with grand ballroom and conference facilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Aurora Hotel — premium business hotel with modern meeting rooms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-[#1F5FA0] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>Kharkiv National University — academic conference center</span>
                      </li>
                    </ul>
                 </div>

                 <div className="mb-6">
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#6A5B8C] text-white rounded-full flex items-center justify-center text-sm mr-2">🛡️</span>
                     Safety Measures
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Deep underground metro system as shelters</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Comprehensive civil defense infrastructure</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#6A5B8C] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Real-time monitoring and rapid response systems</span>
                     </li>
                   </ul>
                 </div>

                 <div>
                   <h4 className="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                     <span className="w-6 h-6 bg-[#4E7B53] text-white rounded-full flex items-center justify-center text-sm mr-2">🚀</span>
                     Unique Advantages
                   </h4>
                   <ul className="space-y-2 text-sm text-gray-700">
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Full capacity operations during MICE events</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Leading academic and research institutions</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-1.5 h-1.5 bg-[#4E7B53] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                       <span>Major industrial and technology hub</span>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>

           {/* Safety Infrastructure Details */}
           <div className="bg-white rounded-2xl p-8 shadow-lg">
             <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
               Comprehensive Safety Infrastructure
             </h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="text-center">
                 <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-white text-2xl">🏗️</span>
                 </div>
                 <h4 className="text-lg font-semibold mb-3 text-gray-900">Shelter Infrastructure</h4>
                 <p className="text-sm text-gray-600">
                   All major venues equipped with reinforced underground shelters, meeting international safety standards
                 </p>
               </div>

               <div className="text-center">
                 <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-white text-2xl">📡</span>
                 </div>
                 <h4 className="text-lg font-semibold mb-3 text-gray-900">Early Warning Systems</h4>
                 <p className="text-sm text-gray-600">
                   Advanced monitoring and communication systems providing real-time alerts and evacuation coordination
                 </p>
               </div>

               <div className="text-center">
                 <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-white text-2xl">🚨</span>
                 </div>
                 <h4 className="text-lg font-semibold mb-3 text-gray-900">Emergency Response</h4>
                 <p className="text-sm text-gray-600">
                   Coordinated emergency services with rapid response capabilities and medical support
                 </p>
               </div>

               <div className="text-center">
                 <div className="w-16 h-16 bg-[#F5C542] rounded-full flex items-center justify-center mx-auto mb-4">
                   <span className="text-black text-2xl">📋</span>
                 </div>
                 <h4 className="text-lg font-semibold mb-3 text-gray-900">Safety Protocols</h4>
                 <p className="text-sm text-gray-600">
                   Comprehensive safety procedures and regular drills ensuring preparedness for all scenarios
                 </p>
               </div>
             </div>

             <div className="mt-8 p-6 bg-gradient-to-r from-[#1F5FA0] to-[#6A5B8C] rounded-xl text-white">
               <h4 className="text-xl font-bold mb-4">Remarkable Achievement: Full Capacity Operations</h4>
               <p className="text-lg leading-relaxed">
                 Despite their proximity to the frontline, these cities maintain <strong>100% facility capacity</strong> during MICE events. This extraordinary achievement demonstrates Ukraine's commitment to business continuity and international partnerships. Venues operate at full occupancy, with all meeting rooms, conference halls, and accommodation facilities fully utilized, proving that comprehensive safety measures enable normal business operations even in challenging circumstances.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Why Choose Ukraine for MICE */}
       <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
                     <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4 text-gray-900">
               Why Choose Ukraine for MICE Events & Conference Tourism?
             </h2>
             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Discover the advantages of hosting your business events in Ukraine. Our professional MICE services combine world-class infrastructure with unique cultural experiences, competitive pricing, and expert local knowledge.
             </p>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#1F5FA0] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌍</span>
              </div>
                             <h3 className="text-xl font-bold mb-4 text-gray-900">
                 International Accessibility
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 Direct flights from major European cities, modern airports, and excellent rail connections make Ukraine easily accessible for international delegates. Our MICE team provides comprehensive travel coordination and visa support services.
               </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#6A5B8C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">💼</span>
              </div>
                             <h3 className="text-xl font-bold mb-4 text-gray-900">
                 Professional Infrastructure
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 World-class conference facilities, 5-star hotels, and professional event management services ensure successful business events. Our venues offer state-of-the-art technology, flexible meeting spaces, and dedicated event coordination teams.
               </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#4E7B53] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🎯</span>
              </div>
                             <h3 className="text-xl font-bold mb-4 text-gray-900">
                 Unique Experiences
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 Combine business with cultural experiences, from UNESCO World Heritage sites to authentic local traditions and cuisine. Our incentive programs include exclusive access to historical sites, traditional workshops, and immersive cultural activities.
               </p>
            </div>
          </div>
        </div>
      </section>

             {/* MICE Services Details */}
       <section className="py-16 bg-white">
         <div className="max-w-6xl mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold mb-4 text-gray-900">
               Comprehensive MICE Services in Ukraine
             </h2>
             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               Our professional MICE team delivers exceptional event management services tailored to your specific requirements and objectives.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-gray-50 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Event Planning & Management</h3>
               <ul className="space-y-4 text-gray-700">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#1F5FA0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Strategic event concept development and planning</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#1F5FA0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Budget management and cost optimization</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#1F5FA0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Timeline coordination and project management</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#1F5FA0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Risk assessment and contingency planning</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#1F5FA0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>On-site event coordination and management</span>
                 </li>
               </ul>
             </div>

             <div className="bg-gray-50 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Venue & Accommodation</h3>
               <ul className="space-y-4 text-gray-700">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#6A5B8C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Venue sourcing and site inspections</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#6A5B8C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Hotel booking and room block management</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#6A5B8C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Technical requirements and AV equipment</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#6A5B8C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Catering and food service coordination</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#6A5B8C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Venue contract negotiation and management</span>
                 </li>
               </ul>
             </div>

             <div className="bg-gray-50 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Travel & Logistics</h3>
               <ul className="space-y-4 text-gray-700">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#4E7B53] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>International travel coordination</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#4E7B53] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Visa application support and documentation</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#4E7B53] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Airport transfers and local transportation</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#4E7B53] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Group travel management and coordination</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#4E7B53] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Emergency support and travel insurance</span>
                 </li>
               </ul>
             </div>

             <div className="bg-gray-50 p-8 rounded-2xl">
               <h3 className="text-2xl font-bold mb-6 text-gray-900">Incentive & Cultural Programs</h3>
               <ul className="space-y-4 text-gray-700">
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#F5C542] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Custom incentive program design</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#F5C542] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Cultural tours and heritage site visits</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#F5C542] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Team-building activities and workshops</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#F5C542] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Local cuisine experiences and food tours</span>
                 </li>
                 <li className="flex items-start">
                   <span className="w-2 h-2 bg-[#F5C542] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                   <span>Exclusive access to unique venues and experiences</span>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       {/* Call to Action */}
       <section className="py-16 bg-[#F6F6F8]">
                 <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-4xl font-bold mb-6 text-gray-900">
             Ready to Plan Your MICE Event in Ukraine?
           </h2>
           <p className="text-xl text-gray-600 mb-8 leading-relaxed">
             Contact our MICE specialists to start planning your conference, exhibition, or incentive program in Ukraine. We provide end-to-end event management services, from initial concept development to post-event follow-up, ensuring your business event exceeds expectations.
           </p>
          
          
        </div>
      </section>
    </div>
  )
}
