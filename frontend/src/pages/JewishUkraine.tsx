import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function JewishUkraine() {
  const { t } = useI18n()

  const topDestinations = [
    {
      id: 'uman',
      title: 'Uman (Cherkasy region)',
      description: 'The main center of Jewish pilgrimage in Eastern Europe. The tomb of Rabbi Nachman, leader of the Breslov Hasidim, attracts tens of thousands of worshippers for Rosh Hashanah.',
      color: 'border-[#F5C542]'
    },
    {
      id: 'sharhorod',
      title: 'Sharhorod (Vinnytsia region)',
      description: 'A synagogue from 1589, one of the oldest still functioning in Europe. Stone walls, arched windows, interiors with carvings and fragments of old inscriptions.',
      color: 'border-[#6A5B8C]'
    },
    {
      id: 'sataniv',
      title: 'Sataniv (Khmelnytskyi region)',
      description: 'A fortified synagogue from the 16th century with embrasures and massive walls. Nearby are houses with stone cellars and a cemetery with unique gravestones.',
      color: 'border-[#D89B5A]'
    },
    {
      id: 'zhovkva',
      title: 'Zhovkva (Lviv region)',
      description: 'A Renaissance synagogue from the 17th century, once one of the largest in Eastern Europe; surrounded by the old city quarters.',
      color: 'border-[#4E7B53]'
    },
    {
      id: 'belz',
      title: 'Belz (Lviv region)',
      description: 'The historic center of the Belz Hasidic dynasty; cobblestone streets and single-story houses.',
      color: 'border-[#F5C542]'
    },
    {
      id: 'medzhybizh',
      title: 'Medzhybizh (Khmelnytskyi region)',
      description: 'The tomb of the Baal Shem Tov; nearby, historic buildings and views of the castle over the Bug River.',
      color: 'border-[#6A5B8C]'
    },
    {
      id: 'berdychiv',
      title: 'Berdychiv (Zhytomyr region)',
      description: 'The mausoleum of Rabbi Levi Yitzchak, an old cemetery, and merchants\' and artisans\' houses.',
      color: 'border-[#D89B5A]'
    },
    {
      id: 'kamianets',
      title: 'Kamianets-Podilskyi (Khmelnytskyi region)',
      description: 'The Jewish quarter next to the legendary fortress.',
      color: 'border-[#4E7B53]'
    },
    {
      id: 'sadgora',
      title: 'Sadgora (Chernivtsi)',
      description: 'The residence of the Sadigura Hasidic dynasty; old synagogues and cemetery.',
      color: 'border-[#F5C542]'
    },
    {
      id: 'hadyach',
      title: 'Hadyach (Poltava region)',
      description: 'The tomb of Rabbi Shneur Zalman of Liadi (the Alter Rebbe) on a scenic hill.',
      color: 'border-[#6A5B8C]'
    }
  ]

  const hasidicDynasties = [
    { name: 'Breslov', location: 'Uman', icon: '📿', color: 'bg-[#F5C542]' },
    { name: 'Sadigura', location: 'Sadgora, Chernivtsi', icon: '🕯️', color: 'bg-[#6A5B8C]' },
    { name: 'Belz', location: 'Belz', icon: '⭐', color: 'bg-[#D89B5A]' },
    { name: 'Chabad', location: 'Hadyach', icon: '📚', color: 'bg-[#4E7B53]' }
  ]

  const outstandingFigures = [
    { name: 'Sholem Aleichem', birthplace: 'Pereiaslav', category: 'Writer' },
    { name: 'Golda Meir', birthplace: 'Kyiv, Bessarabka', category: 'Political Leader' },
    { name: 'Yitzhak Ben-Zvi', birthplace: 'Poltava', category: 'Israeli President' },
    { name: 'Zalman Shazar', birthplace: 'Kremenets', category: 'Israeli President' },
    { name: 'Moshe Sharett', birthplace: 'Kherson', category: 'Israeli President' },
    { name: 'Isaac Babel', birthplace: 'Odesa', category: 'Writer' },
    { name: 'Bruno Schulz', birthplace: 'Drohobych', category: 'Writer' },
    { name: 'Ilya Ehrenburg', birthplace: 'Kyiv', category: 'Writer' }
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
            Jews in Ukraine: From the Khazars to Hollywood
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-lg">
            A Thousand Years of Life, Faith, and Inspiration
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#heritage-sites" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Heritage Sites →
            </Link>
            <Link 
              to="#history" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Discover History →
            </Link>
          </div>
        </div>
      </section>

      {/* Ancient Roots Section */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Ancient Roots</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              The history of Jews in Ukraine spans more than a thousand years. The earliest written mentions of Kyiv appear in Jewish texts of the 10th century, preserved from the era of the Khazar Khaganate. The Khazars, whose ruling elite had adopted Judaism, controlled strategic trade routes between East and West. Their cities were home to Jewish merchants, craftsmen, and scholars. Even then, on the hills of Kyiv and in the Black Sea port towns, the first communities emerged, blending the traditions of Eastern Jews with local culture.
            </p>
          </div>
        </div>
      </section>

      {/* Ashkenazim Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Ashkenazim and the Formation of Communities</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              From the 12th–13th centuries, fleeing pogroms and restrictions in Central Europe, Ashkenazi Jews found refuge in the lands of the Grand Duchy of Lithuania, the Polish–Lithuanian Commonwealth, and later the Russian Empire — much of which today lies within modern Ukraine.
            </p>
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              By the 18th–19th centuries, many Ukrainian towns were essentially Jewish: in Berdychiv, Belz, Ostroh, Zhovkva, Sharhorod, and dozens of other shtetls, the share of Jewish residents reached 50–70%, and sometimes even more. The shtetl was a self-contained yet vibrant world: the synagogue, the marketplace, artisans' workshops, and Jewish schools — cheders. Trade and cultural exchange with Ukrainian neighbors were constant, enriching both cultures.
            </p>
          </div>
        </div>
      </section>

                                                       {/* Combined Cultural Interweaving and Hasidism Sections with Image */}
      <section className="py-16 bg-white">
           <div className="max-w-6xl mx-auto px-4">
             <div className="relative">
                               <figure className="lg:float-right lg:ml-8 lg:mb-4 lg:w-[45%] lg:-mt-10">
                 <img 
                   src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-13.jpg`}
                   alt="Jewish cultural heritage"
                   className="w-full rounded-2xl shadow-lg"
                   style={{
                     shapeOutside: 'margin-box',
                     shapeMargin: '2rem'
                   }}
                 />
                 <figcaption className="text-center text-[#B0B3BA] mt-4 italic">
                   Jewish cultural heritage in Ukraine
                 </figcaption>
               </figure>
               
          <div className="prose prose-lg max-w-none">
                 {/* Cultural Interweaving Section */}
                 <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Cultural Interweaving</h2>
                 <p className="text-lg leading-relaxed text-[#22242A] mb-8">
                   Centuries of coexistence left a deep imprint on language, cuisine, and music. Ukrainian adopted dozens of words from Yiddish — knysh, shmon, khalépa, and more. Yiddish absorbed Ukrainian vocabulary and intonation. On festive tables one could find borshch, tsimes, varenyky, and gefilte fish. Music, too, intertwined: kobzar ballads and klezmer melodies became the soundtrack of entire regions.
                 </p>
                 
                 {/* Hasidism Section */}
                 <h2 className="text-4xl font-bold mb-8 text-[#22242A]">The Birth of Hasidism</h2>
                 <p className="text-lg leading-relaxed text-[#22242A] mb-8">
                   In the 18th century, in Medzhybizh, Podillia, the Hasidic movement was born. The Baal Shem Tov (Israel ben Eliezer) preached the joy of prayer, spiritual closeness to God, and the importance of good deeds. His disciples founded influential dynasties: Breslov (Uman), Sadigura (Sadgora, Chernivtsi), Belz (Belz), and Chabad (Hadyach). These centers remain major destinations for pilgrimage to this day.
                 </p>
               </div>
          </div>
        </div>
      </section>

         {/* Hasidic Dynasties Infographic - Separate Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
             <div className="bg-white rounded-3xl p-8 text-[#22242A]">
               <h3 className="text-2xl font-bold mb-8 text-center text-[#22242A]">Major Hasidic Dynasties</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {hasidicDynasties.map((dynasty, index) => (
                   <div key={index} className="text-center group">
                     <div className={`w-20 h-20 ${dynasty.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                       <span className="text-3xl">{dynasty.icon}</span>
                </div>
                     <h4 className="font-bold text-lg mb-2">{dynasty.name}</h4>
                     <p className="text-[#22242A]/90 text-sm">{dynasty.location}</p>
              </div>
                 ))}
                </div>
              </div>
                </div>
         </section>

      {/* Heritage Sites Section */}
      <section id="heritage-sites" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A] text-center">
            Ukraine — A Rare Country Where So Many Physical Traces of Jewish Life Survive
          </h2>
          <p className="text-lg text-[#B0B3BA] text-center mb-12 max-w-4xl mx-auto">
            Here you can see both individual buildings and entire neighborhoods where the street layout — and even the atmosphere — have hardly changed. Here are 10 places that best convey the scope and depth of Jewish heritage:
          </p>

          <div className="relative">
            <figure className="lg:float-left lg:mr-8 lg:mb-4 lg:w-1/2">
              <img 
                src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-31.jpg`}
                alt="Jewish heritage preservation"
                className="w-full rounded-2xl shadow-lg"
                style={{
                  shapeOutside: 'margin-box',
                  shapeMargin: '2rem'
                }}
              />
              <figcaption className="text-center text-[#B0B3BA] mt-4 italic">
                Preserving Jewish heritage in Ukraine
              </figcaption>
            </figure>
            
                         <figure className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[50%]">
               <img 
                 src={`${import.meta.env.BASE_URL}media/jewish-heritage/Synahoha-SHarhorod.webp`}
                 alt="Sharhorod Synagogue"
                 className="w-full rounded-2xl shadow-lg"
                 style={{
                   shapeOutside: 'margin-box',
                   shapeMargin: '2rem'
                 }}
               />
               <figcaption className="text-center text-[#B0B3BA] mt-4 italic text-sm">
                 Sharhorod Synagogue
               </figcaption>
             </figure>
             
                         <div className="space-y-6">
               {topDestinations.map((destination, index) => (
                 <div key={destination.id} className={`border-l-4 ${destination.color} pl-6 ${index >= 6 ? 'lg:pr-[55%]' : ''}`}>
                   <h3 className="font-bold text-xl mb-3 text-[#22242A]">
                     {index + 1}. {destination.title}
                   </h3>
                   <p className="text-[#B0B3BA] leading-relaxed">
                     {destination.description}
                   </p>
              </div>
               ))}
              </div>
            </div>
          
          <div className="mt-8">
            <p className="text-lg text-[#22242A] font-semibold leading-relaxed">
              And beyond these — <span className="text-[#1F5FA0]">hundreds of unusual and fascinating places</span> across Ukraine: historical, cultural, religious, philosophical, and even mystical.
              </p>
            </div>
        </div>
      </section>

      {/* Outstanding Figures Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A] text-center">Outstanding Figures</h2>
          <p className="text-lg text-[#B0B3BA] text-center mb-12 max-w-4xl mx-auto">
            Ukraine is the birthplace of many prominent Jews: Sholem Aleichem (Pereiaslav), Golda Meir (Kyiv, Bessarabka), Israeli presidents Yitzhak Ben-Zvi (Poltava), Zalman Shazar (Kremenets), Moshe Sharett (Kherson); writers Isaac Babel (Odesa), Bruno Schulz (Drohobych), and Ilya Ehrenburg (Kyiv).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {outstandingFigures.map((figure, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-sm mb-1 text-[#22242A]">{figure.name}</h4>
                <p className="text-xs text-[#B0B3BA] mb-1">{figure.birthplace}</p>
                <p className="text-xs text-[#1F5FA0] font-medium">{figure.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbolic Cities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Symbolic Cities</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              Odesa — a center of Jewish literature, humor, and Zionist thought; Berdychiv — the commercial heart of Volhynia in the 19th century; Dnipro — home to "Menorah," the largest Jewish center in Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Emigration and Modern Times Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Emigration and Modern Times</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              From the late 19th century, hundreds of thousands of Jews from Ukraine emigrated to Palestine, and after the creation of Israel — to their new homeland. In the 1990s, more than half a million Jews and their families from Ukraine moved to Israel, making it one of the largest migrations in the country's modern history.
            </p>
          </div>
        </div>
      </section>

      {/* From Ukraine to Hollywood Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">From Ukraine to Hollywood</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-[#22242A] mb-6">
              Dozens — perhaps hundreds — of filmmakers have roots in Ukraine: Dustin Hoffman, Kirk Douglas, Steven Spielberg, the Mayer dynasty (MGM), and many others.
            </p>
          </div>
        </div>
      </section>

      {/* Why You Should Visit Section */}
      <section className="py-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-[#22242A]">Why You Should Visit</h2>
                     <div className="relative">
             <div className="prose prose-lg max-w-none lg:pr-[35%]">
               <p className="text-lg leading-relaxed text-[#22242A] mb-6">
                 A journey through Jewish sites in Ukraine is a rare chance to combine spiritual pilgrimage, cultural discovery, and culinary pleasure.
               </p>
               <p className="text-lg leading-relaxed text-[#22242A] mb-6">
                 Here you will find the streets of shtetls, historic synagogues, the birthplace of Hasidism (Medzhybizh, Uman, Belz, Hadyach), and places of tragedy (Babyn Yar, Yaniv concentration camp).
               </p>
               <p className="text-lg leading-relaxed text-[#22242A] mb-6">
                 The Jewish humor of Odesa, the cuisine — gefilte fish, tsimes, cholent, knysh, bagels, matzah, strudels, forshmak.
               </p>
               <p className="text-lg leading-relaxed text-[#22242A] mb-6">
                 And — the opportunity, following tradition, to quietly ask for a blessing at the tombs of spiritual leaders — for the health of loved ones, success in business, or peace in the heart.
            </p>
          </div>
          
             <figure className="lg:absolute lg:right-0 lg:top-0 lg:w-[30%]">
              <img 
                src={`${import.meta.env.BASE_URL}media/jewish-heritage/photo_2025-08-15_16-42-25.jpg`}
                 alt="Jewish heritage site"
                 className="w-full rounded-2xl shadow-lg"
              />
               <figcaption className="text-center text-[#B0B3BA] mt-4 italic text-sm">
                 Historic synagogue
              </figcaption>
            </figure>
          </div>
          
          
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/destinations" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey →
            </Link>
            <Link 
              to="/insurance" 
              className="inline-flex items-center bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Travel Insurance →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}