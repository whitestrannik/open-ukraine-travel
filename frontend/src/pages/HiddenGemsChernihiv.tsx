import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useI18n } from '@/state/i18n'

export default function HiddenGemsChernihiv() {
  const { lang } = useI18n()
  const [showEnglish, setShowEnglish] = useState(false)

  if (showEnglish) {
    return (
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            ENGLISH VERSION WORKS!
          </h1>
          <p className="text-xl text-blue-600 mb-4">
            This is the English version of Chernihiv page
          </p>
          <button 
            onClick={() => setShowEnglish(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Ukrainian
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
            <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
              Головна
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore" className="hover:text-[#1F5FA0] transition-colors">
              Дослідити
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore/gems" className="hover:text-[#1F5FA0] transition-colors">
              Приховані Перлини
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">Чернігів - Древня Столиця Русі</span>
            <div className="flex items-center space-x-2 ml-4">
              <Link 
                to={lang === 'en' ? '/chernihiv-english-new' : '/chernihiv-english-new'}
                className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
              >
                EN
              </Link>
              <Link 
                to={lang === 'es' ? '/chernihiv-sp' : '/chernihiv-sp'}
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
            Чернігів - Древня Столиця Русі
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Одне з найстаріших міст Київської Русі з величними соборами та монастирями
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Чернігів: Древня Столиця Русі з Величними Соборами</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                             <div className="md:w-80 flex-shrink-0">
                 <img 
                   src="/media/architecture-3197527.jpg"
                   alt="Чернігів - древня столиця Русі"
                   className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                 />
                 <p className="text-sm text-gray-600 text-center mt-2">
                   Чернігів - одне з найстаріших міст України
                 </p>
               </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Чернігів — це одне з найстаріших міст України, яке було одним з головних центрів Київської Русі. 
                  Засноване в IX столітті, місто стало столицею Чернігівського князівства та одним з найважливіших 
                  політичних, культурних та духовних центрів Середньовічної Русі. Сьогодні Чернігів — це живий музей 
                  давньоруської архітектури, де зберігаються унікальні пам'ятки XI-XIII століть.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Спасо-Преображенський Собор: Найстаріший Собор України</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Спасо-Преображенський собор — це найстаріший збережений храм України, збудований в 1036 році 
                  князем Мстиславом Володимировичем. Собор є унікальним зразком давньоруської архітектури та 
                  одним з найкращих прикладів візантійського стилю в Східній Європі. Храм має хрестово-купольну 
                  структуру з трьома апсидами та п'ятьма куполами, що є характерним для давньоруської архітектури.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Інтер'єр собору вражає своєю величчю та автентичністю. Тут зберігаються оригінальні фрески 
                  XI століття, які є одними з найстаріших в Україні. Особливо цінні фрески в центральній апсиді, 
                  які зображують сцени з життя Христа та Богородиці. У соборі також зберігаються унікальні 
                  архітектурні деталі, включаючи оригінальні двері та вікна XI століття.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Spas_sobor (1).jpg"
                  alt="Спасо-Преображенський собор - найстаріший храм України"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Спасо-Преображенський собор (1036 рік)
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Борисоглібський Собор: Княжа Усипальниця</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Борисоглібський собор — це унікальна пам'ятка давньоруської архітектури XII століття, 
              збудована в 1123 році князем Давидом Святославичем. Собор є родинною усипальницею 
              чернігівських князів та одним з найкращих зразків архітектури доби феодальної роздробленості. 
              Храм має компактну структуру з одним куполом та трьома апсидами, що робить його особливо 
              гармонійним та пропорційним.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              У соборі зберігаються унікальні архітектурні деталі XII століття, включаючи оригінальні 
              портали, вікна та декоративні елементи. Особливо цікавий південний портал з різьбленими 
              капітелями та архівольтами. У крипті собору поховані чернігівські князі, включаючи 
              засновника храму Давида Святославича.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Троїцько-Іллінський Монастир: Духовний Центр</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Троїцький_монастир (1).jpg"
                  alt="Троїцько-Іллінський монастир - духовний центр Чернігова"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Троїцько-Іллінський монастир (XVII-XVIII ст.)
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Троїцько-Іллінський монастир — це комплекс будівель XVII-XVIII століть, який включає 
                  церкву, житлові корпуси та величну дзвіницю. Монастир був важливим духовним центром 
                  Чернігова та центром освіти. Дзвіниця монастиря, збудована в 1775 році, є однією з 
                  найвищих в Україні (58 метрів) та архітектурною домінантою міста.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  З висоти дзвіниці відкривається панорамний вид на весь Чернігів та околиці. Це один 
                  з найкращих способів побачити місто з висоти пташиного польоту та зрозуміти його 
                  історичну структуру. У монастирі зберігається бібліотека з унікальними рукописами 
                  та стародруками, які свідчать про культурне значення цього місця.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Чернігівський Вокзал: Архітектурна Перлина</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Чернігівський вокзал — це унікальна пам'ятка архітектури початку XX століття, 
                  збудована в 1900-1901 роках за проектом архітектора Миколи Милютина. Будівля вокзалу 
                  є прекрасним зразком еклектичного стилю з елементами модерну та неоренесансу. 
                  Фасад вокзалу прикрашений елегантними колонами, арками та декоративними елементами.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Інтер'єр вокзалу вражає своєю величчю та функціональністю. Тут зберігається оригінальне 
                  планування з великими залами очікування, касовими залами та рестораном. Особливо цікавий 
                  парадний зал з високими стелями, великими вікнами та оригінальним оздобленням. 
                  Вокзал є не тільки транспортним вузлом, але й архітектурною перлиною міста.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Железнодорожный_вокзал._Чернигов.jpg"
                  alt="Чернігівський вокзал - архітектурна перлина початку XX століття"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Чернігівський вокзал (1900-1901 рр.)
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Музеї Чернігова: Культурна Спадщина</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Чернігівський_колегіум_(Чернігів) (1).jpg"
                  alt="Чернігівський колегіум - культурна спадщина міста"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Чернігівський колегіум - культурний центр
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  У Чернігові працює кілька унікальних музеїв, які розповідають про багату історію міста. 
                  Чернігівський історичний музей імені В.В. Тарновського розташований у будівлі колишньої 
                  губернської земської управи та включає експозиції, присвячені історії міста від давніх 
                  часів до сьогодення. Особливо цікава колекція археологічних знахідок, включаючи унікальні 
                  предмети з княжих курганів.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Музей архітектури та побуту Чернігівщини розташований у комплексі будівель XVII-XVIII 
                  століть та розповідає про традиційну архітектуру та побут мешканців регіону. Тут можна 
                  побачити реконструкції традиційних хат, господарських будівель та ремісничих майстерень. 
                  Особливо цікава колекція традиційного одягу, меблів та предметів побуту.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Княжий Місто: Історичний Центр</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Княжий місто — це історичний центр Чернігова, де зосереджені найважливіші пам'ятки 
              давньоруської архітектури. Тут знаходяться Спасо-Преображенський та Борисоглібський 
              собори, а також залишки княжого двору та оборонних споруд. Княжий місто є унікальним 
              архітектурним ансамблем, який дозволяє відчути атмосферу давньоруського міста.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              У Княжому місті зберігаються залишки оборонних валів та ровів, які свідчать про 
              фортифікаційну систему давнього Чернігова. Тут також знаходяться археологічні 
              пам'ятки, включаючи залишки княжих палат та господарських будівель. Княжий місто 
              є місцем, де можна доторкнутися до історії та відчути дух давньої Русі.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Козелець: По Дорозі з Києва</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Місто Козелець, розташоване за 70 кілометрів від Чернігова по дорозі з Києва, 
                  є унікальною пам'яткою архітектури XVIII століття. Тут знаходиться Собор Різдва 
                  Пресвятої Богородиці — один з найкращих зразків українського бароко, збудований 
                  в 1752-1763 роках за проектом архітектора Андрія Квасова. Собор є унікальним 
                  зразком хрестово-купольної архітектури з елементами бароко.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Інтер'єр собору вражає своєю величчю та багатством оздоблення. Тут зберігається 
                  унікальний іконостас XVIII століття з різьбленими деталями та позолотою. 
                  Особливо цінні ікони та фрески, які прикрашають стіни та стелі храму. 
                  Козелець є обов'язковим пунктом для відвідування при подорожі з Києва до Чернігова.
                </p>
              </div>
              
                             <div className="md:w-80 flex-shrink-0">
                 <img 
                   src="/media/ukraine-5124718.jpg"
                   alt="Козелець - собор Різдва Богородиці"
                   className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                 />
                 <p className="text-sm text-gray-600 text-center mt-2">
                   Козелець - унікальна пам'ятка українського бароко
                 </p>
               </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Це Любопытно</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Чернігів — одне з найстаріших міст України, засноване в IX столітті.
              • Спасо-Преображенський собор — найстаріший збережений храм України (1036 рік).
              • У місті зберігаються оригінальні фрески XI століття.
              • Чернігів був столицею Чернігівського князівства в XI-XIII століттях.
              • Дзвіниця Троїцько-Іллінського монастиря — одна з найвищих в Україні (58 метрів).
              • Вокзал Чернігова — унікальна пам'ятка архітектури початку XX століття.
              • Козелець має унікальний собор Різдва Богородиці в стилі українського бароко.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Що Є Совсем Необычного</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              • Спасо-Преображенський собор — єдиний в Україні храм XI століття з повністю збереженим інтер'єром.
              • У Борисоглібському соборі зберігаються оригінальні двері XII століття.
              • Дзвіниця монастиря має унікальну акустику, яка дозволяє чути дзвін на відстані 10 кілометрів.
              • Вокзал Чернігова — один з небагатьох вокзалів України з оригінальним інтер'єром початку XX століття.
              • Княжий місто — єдиний в Україні архітектурний ансамбль давньоруського міста.
              • У Козельці зберігається унікальний іконостас XVIII століття з різьбленими деталями.
              • Чернігів має найбільшу кількість давньоруських храмів в Україні.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Поради для Відвідування</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Найкращий час для відвідування — травень-вересень</li>
                <li>• Обов'язково відвідайте Спасо-Преображенський собор — найстаріший храм України</li>
                <li>• Підніміться на дзвіницю Троїцько-Іллінського монастиря для панорамного виду</li>
                <li>• Відвідайте Борисоглібський собор та його крипту з княжими похованнями</li>
                <li>• Пройдіться по Княжому місті та відчуйте атмосферу давньої Русі</li>
                <li>• Зайдіть до вокзалу та зверніть увагу на архітектуру початку XX століття</li>
                <li>• Відвідайте музеї міста для повного розуміння історії</li>
                <li>• По дорозі з Києва обов'язково зупиніться в Козельці</li>
                <li>• Спробуйте місцеві страви в ресторанах міста</li>
                <li>• Зробіть фотографії з висоти дзвіниці монастиря</li>
              </ul>
            </div>

            
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Готові Відкрити Чернігів?</h2>
          <p className="text-xl mb-8 text-white/90">
            Плануйте свою подорож до древньої столиці Русі та відкрийте для себе величні собори та монастирі
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Всі Hidden Gems →
            </Link>
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Сторінка Києва →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
