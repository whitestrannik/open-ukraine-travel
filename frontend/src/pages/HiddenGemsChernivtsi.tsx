import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

export default function HiddenGemsChernivtsi() {
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
            <span className="text-[#1F5FA0] font-medium">Чернівці - Маленька Відень</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}media/pexels-kostiantyn-13200378.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Чернівці - Маленька Відень
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Австро-угорська архітектура, єврейська спадщина та мультикультурний шарм Буковини
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Старий Австрійський Єврейський Румунський Місто</h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Чернівці — це місто, де час зупинився в епоху Австро-Угорської імперії. Тут кожна вулиця, 
              кожен будинок розповідає історію багатокультурного міста, де мирно співіснували українці, 
              євреї, румуни, німці та поляки. Місто, яке зберігло неповторний дух штетла — єврейського 
              містечка, де традиції та культура переплелися в унікальний симбіоз.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Красива Збережена Архітектура та Дух Штетла</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Архітектура Черновців — це справжній музей під відкритим небом. Місто зберегло свою 
              історичну забудову майже недоторканою, що робить його унікальним в Україні. Центральна 
              частина міста — це справжній архітектурний заповідник, де можна побачити будівлі в стилях 
              сецесії, неоготики, неоренесансу та класицизму. Особливо вражає Театральна площа з 
              її елегантними фасадами та вишуканими деталями.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Дух штетла найкраще відчувається в старій єврейській частині міста, де вузькі вулички 
              та невеликі будинки створюють особливу атмосферу. Тут можна уявити, як колись жили 
              єврейські родини, як діти гралися на вулицях, а дорослі вели свої справи в численних 
              крамницях та майстернях. Ця частина міста зберегла автентичний характер, незважаючи 
              на всі історичні потрясіння.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Синагоги та Храми: Релігійна Мозаїка</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Чернівці — це місто, де можна побачити храми всіх основних релігій. Велика синагога 
              (Темпль) — одна з найкрасивіших в Європі, збудована в 1873-1877 роках в мавританському 
              стилі. Її куполи та арки нагадують про іспанську архітектуру, а інтер'єр вражає своєю 
              величчю та вишуканістю. Хоча синагога зараз не діє, вона залишається символом єврейської 
              спадщини міста.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Кафедральний собор Святої Трійці — головний православний храм міста, збудований в 
              1844-1864 роках. Собор вражає своєю архітектурою, яка поєднує візантійські та 
              романські елементи. Особливо красивий інтер'єр з багатими фресками та іконостасом. 
              У місті також є католицький костел, вірменська церква та інші релігійні споруди, 
              що свідчать про релігійну толерантність міста.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Університет як Хогвардс: Резиденція Митрополитів</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Чернівецький національний університет імені Юрія Федьковича — це справжній архітектурний 
              шедевр, який часто порівнюють з Хогвардсом з романів про Гаррі Поттера. Будівля колишньої 
              Резиденції буковинських та далматинських митрополитів, збудована в 1864-1882 роках, 
              є об'єктом Всесвітньої спадщини ЮНЕСКО.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Архітектурний ансамбль включає головну будівлю з елегантними фасадами, Маріїнську 
              церкву з золотими куполами, семінарію та ботанічний сад. Особливо вражає Синій зал 
              з його унікальним стелею, яка зображує небесне склепіння з зірками. Університетський 
              сад — це справжній оазис спокою з екзотичними деревами та квітами, де студенти 
              люблять проводити час між заняттями.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Яка Їжа: Кулінарна Спадщина Буковини</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Чернівецька кухня — це унікальна суміш австро-угорських, єврейських, румунських та 
              українських традицій. Місто славиться своїми кав'ярнями, де можна спробувати 
              автентичний венський штрудель з яблуками та корицею, або традиційні буковинські 
              вареники з картоплею та сиром.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Особливо популярні єврейські страви: гефілте фіш (фарширована риба), чолнт (традиційна 
              субботня страва), маца брей (смажена маца з яйцями). У місті є кілька ресторанів, 
              де можна спробувати автентичні страви різних культур, включаючи румунські сармале 
              (голубці), австрійський шніцель та український борщ.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Погуляти по Вулиці Кобилянської</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Вулиця Ольги Кобилянської — це серце старого міста, пішохідна зона з численними 
              кав'ярнями, ресторанами та магазинами. Тут можна провести цілий день, гуляючи 
              між історичними будівлями та насолоджуючись атмосферою міста. Особливо красива 
              вулиця ввечері, коли включається ілюмінація та фасади будівель освітлюються 
              теплим світлом.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              На вулиці Кобилянської знаходиться багато історичних будівель, включаючи будинок 
              письменниці Ольги Кобилянської, який тепер є музеєм. Тут також є численні кав'ярні, 
              де можна випити каву по-венськи та спробувати традиційні десерти. Улітку вулиця 
              перетворюється на яскравий ярмарок, де місцеві ремісники продають свої вироби.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Недалеко від Міста: Садгора та Біла Криниця</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              За 6 кілометрів від Черновців знаходиться селище Садгора — колишнє єврейське містечко, 
              яке зберегло свій автентичний характер. Тут можна побачити стару єврейську синагогу, 
              кладовище з унікальними надгробками та традиційну забудову. Садгора була центром 
              хасидського руху, і сюди щороку приїжджають паломники з усього світу.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Біла Криниця — село за 40 кілометрів від Черновців, відоме своїм собором старообрядців. 
              Це унікальна релігійна споруда, збудована в 1908 році в неоросійському стилі. 
              Собор вражає своєю архітектурою з численними куполами та багатим оздобленням. 
              Старообрядці зберегли свої традиції та звичаї, і відвідування Білої Криниці 
              дає можливість познайомитися з цією унікальною культурою.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Це Любопытно</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Чернівці — єдине місто в Україні, де збереглося стільки австро-угорської архітектури.
              • У місті було понад 50 синагог до Другої світової війни.
              • Чернівецький університет — один з найстаріших в Україні, заснований у 1875 році.
              • Місто було столицею герцогства Буковина в складі Австро-Угорської імперії.
              • У Чернівцях народився відомий письменник Пауль Целан.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Що Є Совсем Необычного</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Музей народної архітектури та побуту — унікальний комплекс під відкритим небом 
              з традиційними буковинськими хатами та церквами.
              • Чернівецький обласний художній музей — колекція картин буковинських художників 
              та європейського мистецтва.
              • Музей історії та культури євреїв Буковини — єдиний в Україні музей, присвячений 
              єврейській спадщині регіону.
              • Підземні ходи під містом — загадкова система тунелів, які, за легендами, 
              з'єднують різні частини міста та використовувалися для контрабанди.
              • Чернівецький зоопарк — один з найкращих в Україні, де можна побачити рідкісних 
              тварин та відвідати терраріум.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Поради для Відвідування</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Найкращий час для відвідування — травень-жовтень</li>
                <li>• Обов'язково відвідайте університетський сад на світанку</li>
                <li>• Пройдіться по вулиці Кобилянської ввечері</li>
                <li>• Спробуйте венську каву в кав'ярні "Центральна"</li>
                <li>• Замовте екскурсію по єврейській частині міста</li>
                <li>• Відвідайте Садгору та Білу Криницю для повного враження</li>
                <li>• Не пропустіть фестиваль "Чернівці — місто поетів" у червні</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Готові Відкрити Чернівці?</h2>
          <p className="text-xl mb-8 text-white/90">
            Плануйте свою подорож до Маленької Відні та відкрийте для себе багатокультурну спадщину Буковини
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Всі Hidden Gems →
            </Link>
            <Link 
              to="/cities/chernivtsi" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Сторінка Міста →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
