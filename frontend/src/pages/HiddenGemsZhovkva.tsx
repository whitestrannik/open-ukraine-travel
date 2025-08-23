import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function HiddenGemsZhovkva() {
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
            <span className="text-[#1F5FA0] font-medium">Жовква - Ренесансна Фортеця</span>
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
            Жовква - Середньовічна Перлина
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Ренесансна фортеця з королівською спадщиною та унікальною архітектурою
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Жовква: Ренесансна Фортеця з Королівською Спадщиною</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Жовква — це унікальне місто-фортеця, яке є одним з найкращих зразків ренесансної архітектури в Україні. 
              Засноване в кінці XVI століття гетьманом Станіславом Жолкевським, місто стало резиденцією польських королів 
              та центром культурного життя Галичини. Сьогодні Жовква — це живий музей середньовічної архітектури, 
              де кожен камінь розповідає історію величі та слави.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Жовківський Замок: Королівська Резиденція</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Жовківський замок — це головна архітектурна перлина міста, збудована в 1594-1606 роках за проектом 
              італійського архітектора Павла Счастливого. Замок є унікальним зразком ренесансної фортечної архітектури, 
              що поєднує оборонні функції з елегантністю палацового комплексу. У плані замок має форму неправильного 
              чотирикутника з потужними бастіонами по кутах, що робило його практично неприступним для ворожих армій.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Інтер'єр замку вражає своєю величчю та багатством оздоблення. Особливо цікавий парадний зал з різьбленими 
              стелями та стінами, прикрашеними портретами польських королів. У замку зберігається унікальна колекція 
              зброї, меблів та предметів мистецтва XVI-XVIII століть. Тут можна побачити особисті речі королів, 
              включаючи трон Яна III Собеського, який часто гостював у Жовкві.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Міська Архітектура: Ренесансний Ідеал</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Жовква — це єдине в Україні місто, яке було спроектоване як ідеальне ренесансне місто. План міста 
              має форму правильного квадрата з центральною площею та перпендикулярними вулицями. Така планування 
              відображає гуманістичні ідеали епохи Відродження про гармонію та порядок у містобудуванні.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Центральна площа міста — Ринок — оточена елегантними кам'яницями XVI-XVII століть, кожна з яких 
              має унікальну архітектуру та історію. Фасади будинків прикрашені різьбленими порталами, балконами 
              та декоративними елементами в стилі ренесансу. Особливо вражає будинок ратуші з вежею та годинником, 
              який є архітектурною домінантою площі.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Костел Святого Лаврентія: Шедевр Бароко</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Костел Святого Лаврентія — це один з найкращих зразків барокової архітектури в Україні. Храм збудований 
              в 1606-1618 роках за проектом Павла Счастливого та є родинною усипальницею роду Жолкевських. 
              Фасад костелу прикрашений елегантними колонами, скульптурами святих та багатим декором.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Інтер'єр костелу вражає своєю величчю та багатством оздоблення. Тут зберігаються унікальні вівтарі 
              XVII-XVIII століть, різьблені хори та орган, який є одним з найстаріших в Україні. Особливо цінні 
              фрески та картини, які прикрашають стіни та стелі храму. У крипті костелу поховані представники 
              роду Жолкевських, включаючи засновника міста Станіслава Жолкевського.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Синагога: Єврейська Спадщина</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Жовківська синагога — це унікальна пам'ятка єврейської архітектури XVII століття. Будівля збудована 
              в стилі ренесансу з елементами оборонної архітектури, що робить її схожою на фортецю. Синагога має 
              товсті стіни, вузькі вікна-бойниці та потужні контрфорси, що свідчить про те, що єврейська громада 
              міста потребувала захисту від нападів.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Інтер'єр синагоги зберігає оригінальне планування з центральним бімою та місцями для молитов. 
              Стіни прикрашені фресками з геометричними та рослинними орнаментами, які є характерними для 
              єврейського мистецтва того періоду. Сьогодні в синагозі розташований музей єврейської культури, 
              де можна дізнатися про історію єврейської громади Жовкви.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Монастир Василіан: Духовний Центр</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Монастир Василіан — це комплекс будівель XVII-XVIII століть, який включає церкву, житлові корпуси 
              та господарські будівлі. Монастир був важливим духовним центром Галичини та центром освіти. 
              Тут працювала школа, де навчалися діти з знатних родин, включаючи майбутнього короля Яна III Собеського.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Церква монастиря є прекрасним зразком барокової архітектури з багатим інтер'єром та іконостасом. 
              У монастирі зберігається бібліотека з унікальними рукописами та стародруками, які свідчать про 
              культурне значення цього місця в історії України.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Музеї та Культурна Спадщина</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              У Жовкві працює кілька музеїв, які розповідають про багату історію міста. Жовківський історико-архітектурний 
              музей розташований у замку та включає експозиції, присвячені історії міста, архітектурі та мистецтву. 
              Особливо цікава колекція зброї, меблів та предметів побуту XVI-XVIII століть.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Музей єврейської культури в синагозі розповідає про історію єврейської громади Жовкви, її традиції 
              та звичаї. Тут можна побачити ритуальні предмети, документи та фотографії, які свідчать про 
              багатокультурне минуле міста.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Це Любопытно</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Жовква — єдине в Україні місто, спроектоване як ідеальне ренесансне місто.
              • У замку зберігається трон короля Яна III Собеського.
              • Місто було резиденцією польських королів протягом XVII-XVIII століть.
              • Жовківська синагога має оборонну архітектуру з товстими стінами та бойницями.
              • У монастирі Василіан навчався майбутній король Ян III Собеський.
              • План міста має форму правильного квадрата з центральною площею.
              • Замок є унікальним зразком ренесансної фортечної архітектури.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Що Є Совсем Необычного</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Жовківський замок — єдиний в Україні замок з ренесансною архітектурою та королівською резиденцією.
              • Міська ратуша має годинник, який працює з XVII століття.
              • У костелі зберігається один з найстаріших органів в Україні.
              • Синагога має унікальну оборонну архітектуру для релігійної споруди.
              • Монастир Василіан був центром освіти для знатних родин.
              • План міста відображає гуманістичні ідеали епохи Відродження.
              • Замок має підземні ходи, які з'єднують різні частини міста.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Поради для Відвідування</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Найкращий час для відвідування — травень-вересень</li>
                <li>• Обов'язково відвідайте замок та замовте екскурсію</li>
                <li>• Пройдіться по центральній площі та зверніть увагу на архітектуру</li>
                <li>• Відвідайте костел Святого Лаврентія та подивіться на орган</li>
                <li>• Зайдіть до синагоги та дізнайтеся про єврейську історію</li>
                <li>• Відвідайте монастир Василіан та його бібліотеку</li>
                <li>• Спробуйте місцеві страви в ресторанах міста</li>
                <li>• Прогуляйтеся по міських стінах та баштах</li>
                <li>• Відвідайте музей в замку для повного розуміння історії</li>
                <li>• Зробіть фотографії з висоти замкових бастіонів</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Готові Відкрити Жовкву?</h2>
          <p className="text-xl mb-8 text-white/90">
            Плануйте свою подорож до ренесансної фортеці та відкрийте для себе королівську спадщину Галичини
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Всі Hidden Gems →
            </Link>
            <Link 
              to="/cities/lviv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Сторінка Львова →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
