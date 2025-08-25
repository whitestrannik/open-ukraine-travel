import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function PoltavaEnglish() {
  const { t } = useI18n()

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
            <Link to="/explore/gems" className="hover:text-[#1F5FA0] transition-colors">
              {t('gems.nav.title')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">Poltava - Classical Ukraine</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/poltava KS.png')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Poltava - Heart of Classical Ukraine
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            City of Gogol, Cossack Glory, and Imperial Grandeur
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Classical Ukraine: City of Gogol and Cossack Glory</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Poltava is not just a city, it's a living museum of Ukrainian history, where every stone tells a story. 
              Here, in the heart of Eastern Europe, the destinies of Cossacks, imperial nobles, and brilliant writers 
              are intertwined. A city that has become a symbol of Ukrainian resilience and cultural grandeur.
            </p>



            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Imperial Past and Gogol's Legacy</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Poltava is closely associated with the name of Nikolai Gogol — one of the most outstanding Ukrainian writers. 
              Although Gogol himself was born in the neighboring village of Velyki Sorochyntsi, his work is permeated with 
              the spirit of Poltava region. In the city, you can visit the Literary and Memorial Museum of Gogol, where 
              the writer's personal belongings, manuscripts, and first editions of his works are kept. The writer's study, 
              recreated with maximum accuracy, is particularly interesting — here you can feel the atmosphere in which 
              "Evenings on a Farm Near Dikanka" and "Taras Bulba" were created.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Poltava's imperial past is best reflected in the city's architecture. The Round Square — the heart of Poltava — 
              is a unique architectural ensemble created according to the design of architect Andrian Zakharov. 
              This is one of the few examples of classicism in Ukraine, where buildings are arranged in a circle, creating 
              a harmonious space. In the center of the square rises the Monument of Glory — a column with a gilded eagle, 
              erected in honor of the victory in the Battle of Poltava in 1709.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Corps Garden: Green Pearl of the City</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Corps Garden is a true pearl of Poltava, created in 1847 on the site of the former parade ground 
              of the Poltava Cadet Corps. The garden is laid out in a landscape style with numerous alleys, 
              flower beds, and decorative elements. Here you can find a unique collection of trees, including 
              century-old oaks and exotic species. The garden is especially beautiful in spring when tulips and 
              magnolias bloom, and in autumn when the foliage takes on golden hues.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              In the center of the garden is the White Rotunda — an elegant colonnade built in 1909 to commemorate 
              the 200th anniversary of the Battle of Poltava. From the rotunda, there is a wonderful view of the city 
              and surroundings. This is a favorite place for walks of local residents and tourists, where you can 
              relax in the shade of trees and enjoy the tranquility.
            </p>

            {/* Corps Garden image */}
            <div className="my-8">
              <img 
                src={`${import.meta.env.BASE_URL}media/poltava KS.png`}
                alt="Corps Garden in Poltava"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Poltava Battlefield: Site of Historic Victory</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eight kilometers from the center of Poltava is the historic field where on June 27, 1709, 
              the decisive battle of the Northern War took place between the Russian army of Peter I and the Swedish 
              army of Charles XII. This place has special significance for Ukrainian and European history. 
              Today, the State Historical and Cultural Reserve "Poltava Battlefield" has been created here.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The reserve's territory houses a museum where archaeological finds, weapons, clothing, and other 
              artifacts from that time are presented. The battle diorama is particularly impressive, allowing 
              you to feel the scale and drama of events. Around the museum are reconstructed redoubts, 
              mass graves, and monuments. Every June, battle reenactments are held here, attracting thousands of tourists.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Aviation Museum and Other Museums</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Poltava Aviation Museum is a unique collection of aircraft, helicopters, and aviation equipment. 
              The museum is located on the territory of the former military airfield and includes over 30 exhibits. 
              Here you can see legendary MiG-15, MiG-21, Su-27, as well as civilian aircraft An-2, Yak-40. 
              The Tu-16 strategic bomber is particularly interesting — you can inspect it from the inside.
            </p>

            <h4 className="text-xl font-bold mb-4 text-gray-900 mt-8">Local History Museum in the Zemstvo Building</h4>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Poltava Local History Museum is one of the oldest museums in Ukraine, founded in 1891. 
              The museum is located in the impressive building of the former provincial zemstvo, which itself 
              is an architectural monument. The building was constructed in 1903-1908 according to the design of 
              architect Vasyl Krychevsky in the Ukrainian Art Nouveau style with elements of folk architecture.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The building's facade is decorated with unique ornaments that combine traditional Ukrainian 
              motifs with modern architectural solutions. The central portal with rich decoration and sculptural 
              compositions is particularly impressive. The interior halls preserve the original decoration with 
              carved ceilings and stained glass windows.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The museum's collection numbers over 300,000 exhibits, including archaeological finds, 
              ethnographic materials, documents, and photographs. The collection of Cossack antiquities 
              and household items from the 18th-19th centuries is particularly valuable. The museum presents 
              unique exhibits related to the history of the Battle of Poltava, personal belongings of famous 
              Poltava residents, and a collection of traditional Ukrainian clothing.
            </p>

            <h4 className="text-xl font-bold mb-4 text-gray-900 mt-8">Round Square: Unique Architectural Ensemble</h4>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Round Square is the heart of Poltava and its main architectural pearl. This is the only example 
              of a round square in Ukraine, similar to the one in St. Petersburg. The square was created according 
              to the design of architect Andrian Zakharov in 1804-1811 and is a beautiful example of classicism.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The square's architectural ensemble consists of eight identical buildings arranged in a circle, 
              creating a harmonious and symmetrical space. In the center of the square rises the Monument of Glory — 
              a 20-meter column with a gilded eagle, erected in 1811 to commemorate the victory in the Battle of Poltava in 1709.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Each building on the square has a unique history. Administrative buildings, museums, and cultural 
              institutions are located here. The building of the Poltava Regional Council is particularly impressive, 
              which is the architectural dominant of the square. The square is a favorite place for walks of local 
              residents and tourists, especially in the evening when the illumination is turned on.
            </p>

            <h4 className="text-xl font-bold mb-4 text-gray-900 mt-8">Kondratyuk Museum: Cosmic Heritage of Poltava</h4>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Yuri Kondratyuk Museum is a unique museum dedicated to the life and work of the outstanding 
              Ukrainian self-taught scientist who long before the space age developed the theory of space flights. 
              Yuri Kondratyuk (real name Oleksandr Shargei) was born in Poltava in 1897 and made a revolutionary 
              contribution to astronautics.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The museum presents a unique collection of documents, manuscripts, and models that demonstrate 
              Kondratyuk's brilliant ideas. His manuscript "The Conquest of Interplanetary Space," written in 1916-1919, 
              is particularly interesting, where he described in detail the scheme of flight to the Moon, which was 
              later used by NASA in the Apollo program.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The museum is located in the house where Kondratyuk lived and preserves the authentic atmosphere 
              of the early 20th century. Here you can see his study, personal belongings, photographs, and documents. 
              The model of a spaceship created according to his designs and interactive exhibitions that demonstrate 
              the principles of space flights are particularly impressive.
            </p>

            <h4 className="text-xl font-bold mb-4 text-gray-900 mt-8">Birch Square: Romantic Corner of Poltava</h4>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Birch Square is one of the most romantic corners of Poltava, located in the historic center of the city. 
              The square was created in the 1950s on the site of a former wasteland and quickly became a favorite 
              place for walks of local residents and tourists.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The square is decorated with numerous birch trees, which give it special charm and create a cozy atmosphere. 
              In the center of the square is an elegant fountain with sculptural compositions, which is a popular 
              place for photography. The square's alleys are decorated with benches where you can rest and enjoy the tranquility.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Birch Square is especially beautiful in spring when birches are covered with fresh foliage, and in autumn 
              when the foliage takes on golden hues. In the evening, the square is illuminated by decorative lanterns, 
              creating a romantic atmosphere. This is a favorite place for dates and evening walks of Poltava residents.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Galushki and Varenyky: Culinary Heritage</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Poltava cuisine is a true treasury of Ukrainian culinary traditions. The city is famous for its 
              galushki — small dumplings made of potato dough, served with sour cream and cracklings. The recipe 
              for Poltava galushki is passed down from generation to generation and is a subject of special pride 
              for local cooks.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Cherry varenyky are another calling card of Poltava. Thin dough, juicy filling, and traditional 
              serving with sour cream make this dish unique. There are several restaurants in the city where 
              you can try authentic Poltava dishes, including borscht with pampushky, deruny, and Poltava sausages.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Monastery with Bell Tower: Spiritual Center</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Holy Dormition Cathedral is the main Orthodox shrine of Poltava, built in 1774-1801 in the classicism style. 
              The cathedral towers over the city with its 50-meter bell tower, which is the architectural dominant of the city. 
              From the height of the bell tower, there is a panoramic view of all of Poltava and surroundings — this is one 
              of the best ways to see the city from a bird's eye view.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The cathedral's interior impresses with its grandeur and richness of decoration. Valuable icons from the 18th-19th 
              centuries, carved iconostasis, and other sacred objects are kept here. The icon of the Mother of God "Poltava" 
              is particularly valuable, which is considered miraculous.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Surroundings: Myrhorod, Opishnya, and Sorochyntsi</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              One hundred kilometers from Poltava is the city of Myrhorod — a famous resort with mineral waters. 
              Here you can not only relax in sanatoriums but also visit the Myrhorod Ceramics Museum, where unique 
              works of local masters are presented. Myrhorod ceramics are famous for their bright colors and traditional ornaments.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The village of Opishnya is the world capital of Ukrainian ceramics. The National Museum of Ukrainian Pottery 
              operates here, where the largest collection of traditional ceramics in Ukraine is kept. In the village, 
              you can see how masters create their works and purchase unique souvenirs.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Velyki Sorochyntsi is the birthplace of Nikolai Gogol. Here is the writer's museum-estate, where you can 
              see the house where Gogol was born and the church where he was baptized. Every August, the Sorochyntsi Fair 
              is held here — a bright festival of Ukrainian culture and traditions.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Interesting Facts</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Poltava is the only city in Ukraine with a Round Square, similar to the one in St. Petersburg.
              • The oldest oak in Ukraine, over 800 years old, is preserved in the city.
              • Poltava galushki are included in the list of Ukraine's intangible heritage.
              • The city has a unique museum-estate of Ivan Kotlyarevsky, author of "Eneida."
              • The local history museum building (zemstvo) is one of the best examples of Ukrainian Art Nouveau.
              • Yuri Kondratyuk is a brilliant self-taught scientist who developed the theory of space flights.
              • The Round Square has eight identical buildings arranged in a circle.
              • Birch Square is a romantic corner of the city with an elegant fountain.
            </p>

            {/* Traditional Ukrainian architecture image */}
            <div className="my-8 flex justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}media/ukrainian-hata-2115708 (1).jpg`}
                alt="Traditional Ukrainian architecture in Poltava"
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">What's Completely Unusual</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Panas Myrny Museum-Estate — a unique complex where the atmosphere of the 19th century is preserved 
              with complete interior and personal belongings of the writer.
              • Poltava Zoo is one of the best in Ukraine, where you can see rare animals and visit the terrarium.
              • Radiation Museum — the only museum in Ukraine dedicated to the Chernobyl disaster and its consequences.
              • Underground passages under the city — a mysterious system of tunnels that, according to legends, 
              connect different parts of the city.
              • The zemstvo building is a unique example of Ukrainian Art Nouveau with original ornaments and carved ceilings.
              • Kondratyuk Museum is the only space museum in Ukraine dedicated to the brilliant scientist.
              • Round Square is a unique architectural ensemble with the Monument of Glory in the center.
              • Birch Square is a romantic oasis with decorative lanterns and a fountain.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Tips for Visiting</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Best time to visit — May-September</li>
                <li>• Be sure to visit the Corps Garden at dawn or sunset</li>
                <li>• Book a tour of the Poltava Battlefield</li>
                <li>• Try Poltava galushki at the "Poltava Khata" restaurant</li>
                <li>• Climb the bell tower of the Dormition Cathedral for a panoramic view</li>
                <li>• Visit the Sorochyntsi Fair if you come in August</li>
                <li>• Be sure to visit the local history museum in the zemstvo building</li>
                <li>• Walk around the Round Square in the evening when the illumination is turned on</li>
                <li>• Visit the Kondratyuk Museum — a unique space museum</li>
                <li>• Take a walk in Birch Square in the evening for a romantic atmosphere</li>
                <li>• Pay attention to the architectural details of the zemstvo building</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Poltava?</h2>
          <p className="text-xl mb-8 text-white/90">
            Plan your journey to the heart of classical Ukraine and discover the rich history and culture of Poltava
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              All Hidden Gems →
            </Link>
            <Link 
              to="/cities/poltava" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              City Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
