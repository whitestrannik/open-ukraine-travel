import React from 'react'
import { Link } from 'react-router-dom'

export default function ChernihivEn() {
  React.useEffect(() => {
    document.title = "Chernihiv - Ancient Capital of Rus (EN)";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
            <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore" className="hover:text-[#1F5FA0] transition-colors">
              Explore
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore/gems" className="hover:text-[#1F5FA0] transition-colors">
              Hidden Gems
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">Chernihiv - Ancient Capital of Rus</span>
            <div className="flex items-center space-x-2 ml-4">
              <Link 
                to="/explore/gems/chernihiv" 
                className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
              >
                UA
              </Link>
              <Link 
                to="/chernihiv-sp" 
                className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
              >
                ES
              </Link>
            </div>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/media/ukraine-5124718.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Chernihiv - Ancient Capital of Rus
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            One of the oldest cities of Kyivan Rus with magnificent cathedrals and monasteries
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Chernihiv: Ancient Capital of Rus with Magnificent Cathedrals</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/architecture-3197527.jpg"
                  alt="Chernihiv - ancient capital of Rus"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Chernihiv - one of the oldest cities in Ukraine
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Chernihiv is one of the oldest cities in Ukraine, which was one of the main centers of Kyivan Rus. 
                  Founded in the 9th century, the city became the capital of the Chernihiv Principality and one of the most important 
                  political, cultural, and spiritual centers of Medieval Rus. Today, Chernihiv is a living museum 
                  of ancient Rus architecture, where unique monuments of the 11th-13th centuries are preserved.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Transfiguration Cathedral: The Oldest Cathedral in Ukraine</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Transfiguration Cathedral is the oldest preserved temple in Ukraine, built in 1036 
                  by Prince Mstislav Volodymyrovych. The cathedral is a unique example of ancient Rus architecture and 
                  one of the best examples of Byzantine style in Eastern Europe. The temple has a cross-domed 
                  structure with three apses and five domes, which is characteristic of ancient Rus architecture.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The cathedral's interior amazes with its grandeur and authenticity. Here are preserved original frescoes 
                  from the 11th century, which are among the oldest in Ukraine. Particularly valuable are the frescoes in the central apse, 
                  which depict scenes from the life of Christ and the Virgin Mary. The cathedral also preserves unique 
                  architectural details, including original doors and windows from the 11th century.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Spas_sobor (1).jpg"
                  alt="Transfiguration Cathedral - the oldest temple in Ukraine"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Transfiguration Cathedral (1036)
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Boris and Gleb Cathedral: Princely Burial Vault</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Boris and Gleb Cathedral is a unique monument of ancient Rus architecture from the 12th century, 
              built in 1123 by Prince David Svyatoslavych. The cathedral is the family burial vault of 
              Chernihiv princes and one of the best examples of architecture from the period of feudal fragmentation. 
              The temple has a compact structure with one dome and three apses, making it particularly 
              harmonious and proportional.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The cathedral preserves unique architectural details from the 12th century, including original 
              portals, windows, and decorative elements. Particularly interesting is the southern portal with carved 
              capitals and archivolts. In the cathedral's crypt are buried Chernihiv princes, including 
              the temple's founder David Svyatoslavych.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Trinity-Illinsky Monastery: Spiritual Center</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Троїцький_монастир (1).jpg"
                  alt="Trinity-Illinsky Monastery - spiritual center of Chernihiv"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Trinity-Illinsky Monastery (17th-18th centuries)
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Trinity-Illinsky Monastery is a complex of buildings from the 17th-18th centuries, which includes 
                  a church, residential buildings, and a magnificent bell tower. The monastery was an important spiritual center 
                  of Chernihiv and a center of education. The monastery's bell tower, built in 1775, is one of the 
                  tallest in Ukraine (58 meters) and an architectural dominant of the city.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  From the height of the bell tower opens a panoramic view of all of Chernihiv and its surroundings. This is one 
                  of the best ways to see the city from a bird's eye view and understand its 
                  historical structure. The monastery preserves a library with unique manuscripts 
                  and old prints, which testify to the cultural significance of this place.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Chernihiv Railway Station: Architectural Pearl</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Chernihiv Railway Station is a unique architectural monument from the early 20th century, 
                  built in 1900-1901 according to the design of architect Mykola Milyutin. The station building 
                  is a beautiful example of eclectic style with elements of Art Nouveau and Neo-Renaissance. 
                  The station facade is decorated with elegant columns, arches, and decorative elements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The station's interior amazes with its grandeur and functionality. Here is preserved the original 
                  layout with large waiting halls, ticket offices, and a restaurant. Particularly interesting is 
                  the ceremonial hall with high ceilings, large windows, and original decoration. 
                  The station is not only a transport hub but also an architectural pearl of the city.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Железнодорожный_вокзал._Чернигов.jpg"
                  alt="Chernihiv Railway Station - architectural pearl of the early 20th century"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Chernihiv Railway Station (1900-1901)
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Museums: Cultural Heritage</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Чернігівський_колегіум_(Чернігів) (1).jpg"
                  alt="Chernihiv Collegium - cultural heritage of the city"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Chernihiv Collegium - cultural center
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Several unique museums operate in Chernihiv, which tell about the rich history of the city. 
                  The Chernihiv Historical Museum named after V.V. Tarnovsky is located in the building of the former 
                  provincial zemstvo administration and includes exhibitions dedicated to the history of the city from ancient 
                  times to the present. Particularly interesting is the collection of archaeological finds, including unique 
                  items from princely mounds.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The Museum of Architecture and Life of Chernihiv Region is located in a complex of buildings from the 17th-18th 
                  centuries and tells about traditional architecture and life of the region's inhabitants. Here you can 
                  see reconstructions of traditional houses, outbuildings, and craft workshops. 
                  Particularly interesting is the collection of traditional clothing, furniture, and household items.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Princely City: Historical Center</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Princely City is the historical center of Chernihiv, where the most important monuments 
              of ancient Rus architecture are concentrated. Here are located the Transfiguration and Boris and Gleb 
              cathedrals, as well as the remains of the princely court and defensive structures. The Princely City is a unique 
              architectural ensemble that allows you to feel the atmosphere of an ancient Rus city.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In the Princely City are preserved the remains of defensive ramparts and moats, which testify to 
              the fortification system of ancient Chernihiv. Here are also located archaeological 
              monuments, including the remains of princely palaces and outbuildings. The Princely City 
              is a place where you can touch history and feel the spirit of ancient Rus.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Kozelets: On the Way from Kyiv</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The city of Kozelets, located 70 kilometers from Chernihiv on the way from Kyiv, 
                  is a unique architectural monument from the 18th century. Here is located the Cathedral of the Nativity 
                  of the Blessed Virgin Mary — one of the best examples of Ukrainian Baroque, built 
                  in 1752-1763 according to the design of architect Andriy Kvasov. The cathedral is a unique 
                  example of cross-domed architecture with Baroque elements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The cathedral's interior amazes with its grandeur and richness of decoration. Here is preserved 
                  a unique iconostasis from the 18th century with carved details and gilding. 
                  Particularly valuable are the icons and frescoes that decorate the walls and ceilings of the temple. 
                  Kozelets is a must-visit point when traveling from Kyiv to Chernihiv.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/ukraine-5124718.jpg"
                  alt="Kozelets - Cathedral of the Nativity of the Virgin"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Kozelets - unique monument of Ukrainian Baroque
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">This is Interesting</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Chernihiv is one of the oldest cities in Ukraine, founded in the 9th century.
              • The Transfiguration Cathedral is the oldest preserved temple in Ukraine (1036).
              • The city preserves original frescoes from the 11th century.
              • Chernihiv was the capital of the Chernihiv Principality in the 11th-13th centuries.
              • The monastery's bell tower is one of the tallest in Ukraine (58 meters).
              • Chernihiv Railway Station is a unique architectural monument from the early 20th century.
              • Kozelets has a unique Cathedral of the Nativity of the Virgin in Ukrainian Baroque style.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">What is Truly Unusual</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • The Transfiguration Cathedral is the only temple in Ukraine from the 11th century with a fully preserved interior.
              • The Boris and Gleb Cathedral preserves original doors from the 12th century.
              • The monastery's bell tower has unique acoustics that allows the bell to be heard at a distance of 10 kilometers.
              • Chernihiv Railway Station is one of the few stations in Ukraine with an original interior from the early 20th century.
              • The Princely City is the only architectural ensemble of an ancient Rus city in Ukraine.
              • Kozelets preserves a unique iconostasis from the 18th century with carved details.
              • Chernihiv has the largest number of ancient Rus temples in Ukraine.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Tips for Visiting</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Best time to visit — May-September</li>
                <li>• Be sure to visit the Transfiguration Cathedral — the oldest temple in Ukraine</li>
                <li>• Climb the monastery's bell tower for a panoramic view</li>
                <li>• Visit the Boris and Gleb Cathedral and its crypt with princely burials</li>
                <li>• Walk through the Princely City and feel the atmosphere of ancient Rus</li>
                <li>• Go to the railway station and pay attention to the architecture of the early 20th century</li>
                <li>• Visit the city's museums for a complete understanding of history</li>
                <li>• On the way from Kyiv, be sure to stop in Kozelets</li>
                <li>• Try local dishes in the city's restaurants</li>
                <li>• Take photos from the height of the monastery's bell tower</li>
              </ul>
            </div>

            
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Chernihiv?</h2>
          <p className="text-xl mb-8 text-white/90">
            Plan your journey to the ancient capital of Rus and discover magnificent cathedrals and monasteries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              All Hidden Gems →
            </Link>
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Kyiv Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

