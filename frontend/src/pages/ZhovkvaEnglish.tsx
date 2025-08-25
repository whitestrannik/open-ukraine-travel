import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function ZhovkvaEnglish() {
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
            <span className="text-[#1F5FA0] font-medium">Zhovkva - Renaissance Fortress</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-freestockpro-1174204.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Zhovkva - Medieval Pearl
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Renaissance fortress with royal heritage and unique architecture
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Zhovkva: Renaissance Fortress with Royal Heritage</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zhovkva is a unique fortress city that is one of the best examples of Renaissance architecture in Ukraine. 
              Founded in the late 16th century by Hetman Stanisław Żółkiewski, the city became the residence of Polish kings 
              and the center of cultural life in Galicia. Today, Zhovkva is a living museum of medieval architecture, 
              where every stone tells a story of grandeur and glory.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Zhovkva Castle: Royal Residence</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zhovkva Castle is the main architectural pearl of the city, built in 1594-1606 according to the design of 
              Italian architect Paweł Szczęśliwy. The castle is a unique example of Renaissance fortress architecture, 
              combining defensive functions with the elegance of a palace complex. In plan, the castle has the shape of an 
              irregular quadrangle with powerful bastions at the corners, making it practically impregnable to enemy armies.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The castle's interior impresses with its grandeur and richness of decoration. The ceremonial hall with carved 
              ceilings and walls decorated with portraits of Polish kings is particularly interesting. The castle houses a unique 
              collection of weapons, furniture, and art objects from the 16th-18th centuries. Here you can see personal belongings 
              of kings, including the throne of Jan III Sobieski, who often visited Zhovkva.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Urban Architecture: Renaissance Ideal</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Zhovkva is the only city in Ukraine that was designed as an ideal Renaissance city. The city plan has the shape 
              of a regular square with a central square and perpendicular streets. Such planning reflects the humanistic ideals 
              of the Renaissance era about harmony and order in urban planning.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The central square of the city — Market Square — is surrounded by elegant stone houses from the 16th-17th centuries, 
              each with unique architecture and history. The facades of the houses are decorated with carved portals, balconies, 
              and decorative elements in the Renaissance style. The town hall building with a tower and clock is particularly impressive, 
              which is the architectural dominant of the square.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Church of St. Lawrence: Baroque Masterpiece</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Church of St. Lawrence is one of the best examples of Baroque architecture in Ukraine. The temple was built 
              in 1606-1618 according to the design of Paweł Szczęśliwy and is the family tomb of the Żółkiewski family. 
              The church facade is decorated with elegant columns, sculptures of saints, and rich decoration.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The church's interior impresses with its grandeur and richness of decoration. Unique altars from the 17th-18th 
              centuries, carved choirs, and an organ, which is one of the oldest in Ukraine, are kept here. The frescoes and 
              paintings that decorate the walls and ceilings of the temple are particularly valuable. Representatives of the 
              Żółkiewski family, including the city's founder Stanisław Żółkiewski, are buried in the church crypt.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Synagogue: Jewish Heritage</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Zhovkva Synagogue is a unique monument of Jewish architecture from the 17th century. The building was constructed 
              in the Renaissance style with elements of defensive architecture, making it similar to a fortress. The synagogue has 
              thick walls, narrow window loopholes, and powerful buttresses, indicating that the city's Jewish community needed 
              protection from attacks.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The synagogue's interior preserves the original layout with a central bimah and places for prayers. The walls are 
              decorated with frescoes with geometric and floral ornaments, which are characteristic of Jewish art of that period. 
              Today, the Museum of Jewish Culture is located in the synagogue, where you can learn about the history of Zhovkva's 
              Jewish community.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Basilian Monastery: Spiritual Center</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Basilian Monastery is a complex of buildings from the 17th-18th centuries, which includes a church, residential 
              buildings, and utility structures. The monastery was an important spiritual center of Galicia and a center of education. 
              A school operated here, where children from noble families studied, including the future king Jan III Sobieski.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The monastery church is a beautiful example of Baroque architecture with a rich interior and iconostasis. The monastery 
              houses a library with unique manuscripts and old prints that testify to the cultural significance of this place in 
              Ukrainian history.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Museums and Cultural Heritage</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Several museums operate in Zhovkva that tell about the rich history of the city. The Zhovkva Historical and Architectural 
              Museum is located in the castle and includes exhibitions dedicated to the history of the city, architecture, and art. 
              The collection of weapons, furniture, and household items from the 16th-18th centuries is particularly interesting.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The Museum of Jewish Culture in the synagogue tells about the history of Zhovkva's Jewish community, its traditions 
              and customs. Here you can see ritual objects, documents, and photographs that testify to the multicultural past of the city.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Interesting Facts</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Zhovkva is the only city in Ukraine designed as an ideal Renaissance city.
              • The castle houses the throne of King Jan III Sobieski.
              • The city was the residence of Polish kings during the 17th-18th centuries.
              • The Zhovkva synagogue has defensive architecture with thick walls and loopholes.
              • Future King Jan III Sobieski studied at the Basilian Monastery.
              • The city plan has the shape of a regular square with a central square.
              • The castle is a unique example of Renaissance fortress architecture.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">What's Completely Unusual</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Zhovkva Castle is the only castle in Ukraine with Renaissance architecture and a royal residence.
              • The town hall has a clock that has been working since the 17th century.
              • The church houses one of the oldest organs in Ukraine.
              • The synagogue has unique defensive architecture for a religious building.
              • The Basilian Monastery was an educational center for noble families.
              • The city plan reflects the humanistic ideals of the Renaissance era.
              • The castle has underground passages that connect different parts of the city.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Tips for Visiting</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Best time to visit — May-September</li>
                <li>• Be sure to visit the castle and book a tour</li>
                <li>• Walk around the central square and pay attention to the architecture</li>
                <li>• Visit the Church of St. Lawrence and see the organ</li>
                <li>• Go to the synagogue and learn about Jewish history</li>
                <li>• Visit the Basilian Monastery and its library</li>
                <li>• Try local dishes in the city's restaurants</li>
                <li>• Take a walk along the city walls and towers</li>
                <li>• Visit the museum in the castle for a complete understanding of history</li>
                <li>• Take photos from the height of the castle bastions</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Zhovkva?</h2>
          <p className="text-xl mb-8 text-white/90">
            Plan your journey to the Renaissance fortress and discover the royal heritage of Galicia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              All Hidden Gems →
            </Link>
            <Link 
              to="/cities/lviv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Lviv City Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
