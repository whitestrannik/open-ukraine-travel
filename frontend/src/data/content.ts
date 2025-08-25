// Централизованная система контента для страниц
export type Language = 'en' | 'uk' | 'es'

export interface PageContent {
  title: string
  subtitle: string
  breadcrumb: {
    home: string
    explore: string
    hiddenGems: string
    currentPage: string
  }
  content: {
    introduction: string
    sections: {
      [key: string]: {
        title: string
        content: string
        image?: string
        imageAlt?: string
      }
    }
    facts: {
      title: string
      items: string[]
    }
    unusual: {
      title: string
      items: string[]
    }
    tips: {
      title: string
      items: string[]
    }
  }
  cta: {
    title: string
    subtitle: string
    buttons: {
      allGems: string
      kyivPage: string
    }
  }
}

// Контент для страницы Чернигов
export const chernihivContent: Record<Language, PageContent> = {
  en: {
    title: "Chernihiv - Ancient Capital of Rus",
    subtitle: "One of the oldest cities of Kyivan Rus with magnificent cathedrals and monasteries",
    breadcrumb: {
      home: "Home",
      explore: "Explore",
      hiddenGems: "Hidden Gems",
      currentPage: "Chernihiv - Ancient Capital of Rus"
    },
    content: {
      introduction: "Chernihiv is one of the oldest cities in Ukraine, which was one of the main centers of Kyivan Rus. Founded in the 9th century, the city became the capital of the Chernihiv Principality and one of the most important political, cultural, and spiritual centers of Medieval Rus. Today, Chernihiv is a living museum of ancient Rus architecture, where unique monuments of the 11th-13th centuries are preserved.",
      sections: {
        transfiguration: {
          title: "Transfiguration Cathedral: The Oldest Cathedral in Ukraine",
          content: "The Transfiguration Cathedral is the oldest preserved temple in Ukraine, built in 1036 by Prince Mstislav Volodymyrovych. The cathedral is a unique example of ancient Rus architecture and one of the best examples of Byzantine style in Eastern Europe. The temple has a cross-domed structure with three apses and five domes, which is characteristic of ancient Rus architecture.",
          image: "/media/Spas_sobor (1).jpg",
          imageAlt: "Transfiguration Cathedral - the oldest temple in Ukraine"
        },
        borisGleb: {
          title: "Boris and Gleb Cathedral: Princely Burial Vault",
          content: "The Boris and Gleb Cathedral is a unique monument of ancient Rus architecture from the 12th century, built in 1123 by Prince David Svyatoslavych. The cathedral is the family burial vault of Chernihiv princes and one of the best examples of architecture from the period of feudal fragmentation."
        },
        monastery: {
          title: "Trinity-Illinsky Monastery: Spiritual Center",
          content: "The Trinity-Illinsky Monastery is a complex of buildings from the 17th-18th centuries, which includes a church, residential buildings, and a magnificent bell tower. The monastery was an important spiritual center of Chernihiv and a center of education.",
          image: "/media/Троїцький_монастир (1).jpg",
          imageAlt: "Trinity-Illinsky Monastery - spiritual center of Chernihiv"
        },
        railway: {
          title: "Chernihiv Railway Station: Architectural Pearl",
          content: "The Chernihiv Railway Station is a unique architectural monument from the early 20th century, built in 1900-1901 according to the design of architect Mykola Milyutin. The station building is a beautiful example of eclectic style with elements of Art Nouveau and Neo-Renaissance.",
          image: "/media/Железнодорожный_вокзал._Чернигов.jpg",
          imageAlt: "Chernihiv Railway Station - architectural pearl of the early 20th century"
        },
        museums: {
          title: "Museums: Cultural Heritage",
          content: "Several unique museums operate in Chernihiv, which tell about the rich history of the city. The Chernihiv Historical Museum named after V.V. Tarnovsky is located in the building of the former provincial zemstvo administration and includes exhibitions dedicated to the history of the city from ancient times to the present.",
          image: "/media/Чернігівський_колегіум_(Чернігів) (1).jpg",
          imageAlt: "Chernihiv Collegium - cultural heritage of the city"
        },
        princelyCity: {
          title: "Princely City: Historical Center",
          content: "The Princely City is the historical center of Chernihiv, where the most important monuments of ancient Rus architecture are concentrated. Here are located the Transfiguration and Boris and Gleb cathedrals, as well as the remains of the princely court and defensive structures."
        },
        kozelets: {
          title: "Kozelets: On the Way from Kyiv",
          content: "The city of Kozelets, located 70 kilometers from Chernihiv on the way from Kyiv, is a unique architectural monument from the 18th century. Here is located the Cathedral of the Nativity of the Blessed Virgin Mary — one of the best examples of Ukrainian Baroque.",
          image: "/media/ukraine-5124718.jpg",
          imageAlt: "Kozelets - Cathedral of the Nativity of the Virgin"
        }
      },
      facts: {
        title: "This is Interesting",
        items: [
          "Chernihiv is one of the oldest cities in Ukraine, founded in the 9th century.",
          "The Transfiguration Cathedral is the oldest preserved temple in Ukraine (1036).",
          "The city preserves original frescoes from the 11th century.",
          "Chernihiv was the capital of the Chernihiv Principality in the 11th-13th centuries.",
          "The monastery's bell tower is one of the tallest in Ukraine (58 meters).",
          "Chernihiv Railway Station is a unique architectural monument from the early 20th century.",
          "Kozelets has a unique Cathedral of the Nativity of the Virgin in Ukrainian Baroque style."
        ]
      },
      unusual: {
        title: "What is Truly Unusual",
        items: [
          "The Transfiguration Cathedral is the only temple in Ukraine from the 11th century with a fully preserved interior.",
          "The Boris and Gleb Cathedral preserves original doors from the 12th century.",
          "The monastery's bell tower has unique acoustics that allows the bell to be heard at a distance of 10 kilometers.",
          "Chernihiv Railway Station is one of the few stations in Ukraine with an original interior from the early 20th century.",
          "The Princely City is the only architectural ensemble of an ancient Rus city in Ukraine.",
          "Kozelets preserves a unique iconostasis from the 18th century with carved details.",
          "Chernihiv has the largest number of ancient Rus temples in Ukraine."
        ]
      },
      tips: {
        title: "Tips for Visiting",
        items: [
          "Best time to visit — May-September",
          "Be sure to visit the Transfiguration Cathedral — the oldest temple in Ukraine",
          "Climb the monastery's bell tower for a panoramic view",
          "Visit the Boris and Gleb Cathedral and its crypt with princely burials",
          "Walk through the Princely City and feel the atmosphere of ancient Rus",
          "Go to the railway station and pay attention to the architecture of the early 20th century",
          "Visit the city's museums for a complete understanding of history",
          "On the way from Kyiv, be sure to stop in Kozelets",
          "Try local dishes in the city's restaurants",
          "Take photos from the height of the monastery's bell tower"
        ]
      }
    },
    cta: {
      title: "Ready to Discover Chernihiv?",
      subtitle: "Plan your journey to the ancient capital of Rus and discover magnificent cathedrals and monasteries",
      buttons: {
        allGems: "All Hidden Gems →",
        kyivPage: "Kyiv Page →"
      }
    }
  },
  uk: {
    title: "Чернігів - Древня Столиця Русі",
    subtitle: "Одне з найстаріших міст Київської Русі з величними соборами та монастирями",
    breadcrumb: {
      home: "Головна",
      explore: "Дослідити",
      hiddenGems: "Приховані Перлини",
      currentPage: "Чернігів - Древня Столиця Русі"
    },
    content: {
      introduction: "Чернігів — це одне з найстаріших міст України, яке було одним з головних центрів Київської Русі. Засноване в IX столітті, місто стало столицею Чернігівського князівства та одним з найважливіших політичних, культурних та духовних центрів Середньовічної Русі.",
      sections: {
        transfiguration: {
          title: "Спасо-Преображенський Собор: Найстаріший Собор України",
          content: "Спасо-Преображенський собор — це найстаріший збережений храм України, збудований в 1036 році князем Мстиславом Володимировичем. Собор є унікальним зразком давньоруської архітектури та одним з найкращих прикладів візантійського стилю в Східній Європі.",
          image: "/media/Spas_sobor (1).jpg",
          imageAlt: "Спасо-Преображенський собор - найстаріший храм України"
        },
        borisGleb: {
          title: "Борисоглібський Собор: Княжий Склеп",
          content: "Борисоглібський собор — унікальний пам'ятник давньоруської архітектури XII століття, збудований в 1123 році князем Давидом Святославичем. Собор є родинним склепом чернігівських князів та одним з найкращих зразків архітектури періоду феодальної роздробленості."
        },
        monastery: {
          title: "Троїцько-Іллінський Монастир: Духовний Центр",
          content: "Троїцько-Іллінський монастир — це комплекс будівель XVII-XVIII століть, який включає церкву, житлові будинки та величну дзвіницю. Монастир був важливим духовним центром Чернігова та центром освіти.",
          image: "/media/Троїцький_монастир (1).jpg",
          imageAlt: "Троїцько-Іллінський монастир - духовний центр Чернігова"
        }
      },
      facts: {
        title: "Це Любопытно",
        items: [
          "Чернігів — одне з найстаріших міст України, засноване в IX столітті.",
          "Спасо-Преображенський собор — найстаріший збережений храм України (1036 рік).",
          "У місті зберігаються оригінальні фрески XI століття.",
          "Чернігів був столицею Чернігівського князівства в XI-XIII століттях."
        ]
      },
      unusual: {
        title: "Що Є Совсем Необычного",
        items: [
          "Спасо-Преображенський собор — єдиний в Україні храм XI століття з повністю збереженим інтер'єром.",
          "У Борисоглібському соборі зберігаються оригінальні двері XII століття.",
          "Дзвіниця монастиря має унікальну акустику, яка дозволяє чути дзвін на відстані 10 кілометрів."
        ]
      },
      tips: {
        title: "Поради для Відвідування",
        items: [
          "Найкращий час для відвідування — травень-вересень",
          "Обов'язково відвідайте Спасо-Преображенський собор — найстаріший храм України",
          "Підніміться на дзвіницю Троїцько-Іллінського монастиря для панорамного виду"
        ]
      }
    },
    cta: {
      title: "Готові Відкрити Чернігів?",
      subtitle: "Плануйте свою подорож до древньої столиці Русі та відкрийте для себе величні собори та монастирі",
      buttons: {
        allGems: "Всі Hidden Gems →",
        kyivPage: "Сторінка Києва →"
      }
    }
  },
  es: {
    title: "Chernihiv - Antigua Capital de Rus",
    subtitle: "Una de las ciudades más antiguas de la Rus de Kiev con magníficas catedrales y monasterios",
    breadcrumb: {
      home: "Inicio",
      explore: "Explorar",
      hiddenGems: "Joyas Ocultas",
      currentPage: "Chernihiv - Antigua Capital de Rus"
    },
    content: {
      introduction: "Chernihiv es una de las ciudades más antiguas de Ucrania, que fue uno de los principales centros de la Rus de Kiev. Fundada en el siglo IX, la ciudad se convirtió en la capital del Principado de Chernihiv y uno de los más importantes centros políticos, culturales y espirituales de la Rus medieval.",
      sections: {
        transfiguration: {
          title: "Catedral de la Transfiguración: La Catedral Más Antigua de Ucrania",
          content: "La Catedral de la Transfiguración es el templo más antiguo conservado en Ucrania, construido en 1036 por el Príncipe Mstislav Volodymyrovych. La catedral es un ejemplo único de la arquitectura antigua de Rus y uno de los mejores ejemplos del estilo bizantino en Europa del Este.",
          image: "/media/Spas_sobor (1).jpg",
          imageAlt: "Catedral de la Transfiguración - el templo más antiguo de Ucrania"
        },
        borisGleb: {
          title: "Catedral de Boris y Gleb: Cripta Principesca",
          content: "La Catedral de Boris y Gleb es un monumento único de la arquitectura antigua de Rus del siglo XII, construido en 1123 por el Príncipe David Svyatoslavych. La catedral es la cripta familiar de los príncipes de Chernihiv y uno de los mejores ejemplos de arquitectura del período de fragmentación feudal."
        },
        monastery: {
          title: "Monasterio de la Trinidad-Illinsky: Centro Espiritual",
          content: "El Monasterio de la Trinidad-Illinsky es un complejo de edificios de los siglos XVII-XVIII, que incluye una iglesia, edificios residenciales y un magnífico campanario. El monasterio fue un importante centro espiritual de Chernihiv y un centro de educación.",
          image: "/media/Троїцький_монастир (1).jpg",
          imageAlt: "Monasterio de la Trinidad-Illinsky - centro espiritual de Chernihiv"
        }
      },
      facts: {
        title: "Esto es Interesante",
        items: [
          "Chernihiv es una de las ciudades más antiguas de Ucrania, fundada en el siglo IX.",
          "La Catedral de la Transfiguración es el templo más antiguo conservado en Ucrania (1036).",
          "La ciudad conserva frescos originales del siglo XI.",
          "Chernihiv fue la capital del Principado de Chernihiv en los siglos XI-XIII."
        ]
      },
      unusual: {
        title: "Lo que es Verdaderamente Inusual",
        items: [
          "La Catedral de la Transfiguración es el único templo en Ucrania del siglo XI con un interior completamente preservado.",
          "La Catedral de Boris y Gleb conserva puertas originales del siglo XII.",
          "El campanario del monasterio tiene una acústica única que permite escuchar la campana a una distancia de 10 kilómetros."
        ]
      },
      tips: {
        title: "Consejos para Visitar",
        items: [
          "Mejor época para visitar — Mayo-Septiembre",
          "Asegúrate de visitar la Catedral de la Transfiguración — el templo más antiguo de Ucrania",
          "Sube al campanario del monasterio para una vista panorámica"
        ]
      }
    },
    cta: {
      title: "¿Listo para Descubrir Chernihiv?",
      subtitle: "Planifica tu viaje a la antigua capital de Rus y descubre magníficas catedrales y monasterios",
      buttons: {
        allGems: "Todas las Joyas Ocultas →",
        kyivPage: "Página de Kiev →"
      }
    }
  }
}

// Контент для страницы Черновцов
export const chernivtsiContent: Record<Language, PageContent> = {
  en: {
    title: "Chernivtsi - Pearl of Bukovina",
    subtitle: "A city of unique architecture, multicultural heritage and vibrant student life",
    breadcrumb: {
      home: "Home",
      explore: "Explore",
      hiddenGems: "Hidden Gems",
      currentPage: "Chernivtsi - Pearl of Bukovina"
    },
    content: {
      introduction: "Chernivtsi is one of the most beautiful cities in Ukraine, located in the heart of Bukovina. This city is famous for its unique architecture, which combines elements of different styles and cultures. Founded in the 12th century, Chernivtsi has preserved its historical charm and today is a major cultural and educational center of Western Ukraine.",
      sections: {
        university: {
          title: "Chernivtsi National University: Architectural Masterpiece",
          content: "The Chernivtsi National University, built in 1875-1882, is a UNESCO World Heritage Site and one of the most beautiful university buildings in Europe. The complex was designed by Czech architect Josef Hlávka in the eclectic style with elements of Byzantine, Gothic, and Moorish architecture. The university building resembles a fairy-tale castle with its towers, arches, and rich decorative elements.",
          image: "/media/chernivtsi-5080209.jpg",
          imageAlt: "Chernivtsi National University - UNESCO World Heritage Site"
        },
        ratusha: {
          title: "City Hall: Heart of the City with Musical Tradition",
          content: "The Chernivtsi City Hall, built in 1847, is the architectural dominant of the central square. Every day at a certain time, a trumpeter appears on the tower and plays a melody, continuing the medieval tradition of city trumpeters. This unique tradition attracts tourists and creates a special atmosphere in the city center.",
          image: "/media/chernivtsi-2455048 (1).jpg",
          imageAlt: "Chernivtsi City Hall with trumpeter tradition"
        },
        multicultural: {
          title: "Multicultural Heritage: City of Many Nations",
          content: "Chernivtsi has always been a multicultural city where Ukrainians, Romanians, Jews, Poles, and representatives of other nations lived together. This diversity is reflected in the city's architecture, cuisine, and cultural traditions. The city preserves unique monuments of different religious denominations - Orthodox, Catholic, and Jewish temples."
        },
        kobylyanska: {
          title: "Kobylyanska Street: Pedestrian Paradise",
          content: "Kobylyanska Street is the main pedestrian street of Chernivtsi, named after the famous Ukrainian writer Olha Kobylyanska. This street is lined with beautiful buildings from the 19th-20th centuries, cafes, restaurants, and shops. Walking along Kobylyanska Street, you can feel the atmosphere of old Europe and enjoy the architectural diversity of the city.",
          image: "/media/city-1644926.jpg",
          imageAlt: "Kobylyanska Street - main pedestrian street of Chernivtsi"
        }
      },
      facts: {
        title: "This is Interesting",
        items: [
          "Chernivtsi was founded in the 12th century and was part of the Principality of Galicia-Volhynia.",
          "The city was under Austrian rule from 1775 to 1918, which influenced its architecture.",
          "Chernivtsi National University is included in the UNESCO World Heritage List.",
          "The city has a unique tradition of a trumpeter playing from the City Hall tower.",
          "Chernivtsi is often called 'Little Vienna' due to its architectural similarity to the Austrian capital.",
          "The city has preserved more than 600 historical buildings.",
          "Chernivtsi is a major student city with more than 20,000 students."
        ]
      },
      unusual: {
        title: "What is Truly Unusual",
        items: [
          "The trumpeter tradition at the City Hall is unique in Ukraine and continues the medieval European tradition.",
          "The university building combines elements of Byzantine, Gothic, and Moorish architecture in one complex.",
          "Chernivtsi has preserved the largest number of historical buildings in Western Ukraine.",
          "The city's architecture reflects the influence of five different empires and states.",
          "The university library contains unique manuscripts and old prints from the 16th-18th centuries.",
          "Chernivtsi has the only functioning synagogue in the region.",
          "The city's central square has preserved its historical layout since the 19th century."
        ]
      },
      tips: {
        title: "Tips for Visiting",
        items: [
          "Best time to visit — May-October, when the weather is pleasant for walking.",
          "Be sure to visit the university complex — the main architectural attraction.",
          "Listen to the trumpeter at the City Hall (check the schedule in advance).",
          "Walk along Kobylyanska Street and enjoy the atmosphere of old Europe.",
          "Visit the city's museums to learn about its multicultural history.",
          "Try local Bukovinian cuisine in city restaurants.",
          "Take a guided tour to learn about the city's architectural features.",
          "Visit the city during student festivals for a vibrant atmosphere.",
          "Don't miss the opportunity to see the city from the university tower.",
          "Take photos of the unique architectural details and facades."
        ]
      }
    },
    cta: {
      title: "Ready to Discover Chernivtsi?",
      subtitle: "Plan your journey to the Pearl of Bukovina and discover unique architecture and multicultural heritage",
      buttons: {
        allGems: "All Hidden Gems →",
        kyivPage: "Kyiv Page →"
      }
    }
  },
  uk: {
    title: "Чернівці - Перлина Буковини",
    subtitle: "Місто унікальної архітектури, багатокультурної спадщини та яскравого студентського життя",
    breadcrumb: {
      home: "Головна",
      explore: "Дослідити",
      hiddenGems: "Приховані Перлини",
      currentPage: "Чернівці - Перлина Буковини"
    },
    content: {
      introduction: "Чернівці — одне з найкрасивіших міст України, розташоване в серці Буковини. Це місто славиться своєю унікальною архітектурою, яка поєднує елементи різних стилів та культур. Засноване в XII столітті, Чернівці зберегли свій історичний шарм і сьогодні є важливим культурним та освітнім центром Західної України.",
      sections: {
        university: {
          title: "Чернівецький національний університет: Архітектурний шедевр",
          content: "Чернівецький національний університет, збудований в 1875-1882 роках, є об'єктом Світової спадщини ЮНЕСКО та однією з найкрасивіших університетських будівель Європи. Комплекс був спроектований чеським архітектором Йозефом Главакою в еклектичному стилі з елементами візантійської, готичної та мавританської архітектури. Будівля університету нагадує казковий замок зі своїми вежами, арками та багатими декоративними елементами.",
          image: "/media/chernivtsi-5080209.jpg",
          imageAlt: "Чернівецький національний університет - об'єкт Світової спадщини ЮНЕСКО"
        },
        ratusha: {
          title: "Ратуша: Серце міста з музичною традицією",
          content: "Чернівецька ратуша, збудована в 1847 році, є архітектурною домінантою центральної площі. Щодня в певний час на вежі з'являється трубач і грає мелодію, продовжуючи середньовічну традицію міських трубачів. Ця унікальна традиція приваблює туристів і створює особливу атмосферу в центрі міста.",
          image: "/media/chernivtsi-2455048 (1).jpg",
          imageAlt: "Чернівецька ратуша з традицією трубача"
        },
        multicultural: {
          title: "Багатокультурна спадщина: Місто багатьох націй",
          content: "Чернівці завжди були багатокультурним містом, де разом жили українці, румуни, євреї, поляки та представники інших націй. Це різноманіття відображається в архітектурі міста, кухні та культурних традиціях. Місто зберігає унікальні пам'ятки різних конфесій — православні, католицькі та єврейські храми."
        },
        kobylyanska: {
          title: "Вулиця Кобилянської: Пішохідний рай",
          content: "Вулиця Кобилянської — головна пішохідна вулиця Чернівців, названа на честь відомої української письменниці Ольги Кобилянської. Ця вулиця застроєна красивими будинками XIX-XX століть, кафе, ресторанами та магазинами. Прогулюючись вулицею Кобилянської, можна відчути атмосферу старої Європи та насолодитися архітектурним різноманіттям міста.",
          image: "/media/city-1644926.jpg",
          imageAlt: "Вулиця Кобилянської - головна пішохідна вулиця Чернівців"
        }
      },
      facts: {
        title: "Це Любопытно",
        items: [
          "Чернівці були засновані в XII столітті і входили до складу Галицько-Волинського князівства.",
          "Місто перебувало під австрійським правлінням з 1775 по 1918 рік, що вплинуло на його архітектуру.",
          "Чернівецький національний університет включений до списку Світової спадщини ЮНЕСКО.",
          "У місті є унікальна традиція трубача, який грає з вежі ратуші.",
          "Чернівці часто називають 'Малою Віднем' через архітектурну схожість з австрійською столицею.",
          "Місто зберегло понад 600 історичних будівель.",
          "Чернівці — велике студентське місто з понад 20 000 студентів."
        ]
      },
      unusual: {
        title: "Що Є Совсем Необычного",
        items: [
          "Традиція трубача на ратуші унікальна в Україні і продовжує середньовічну європейську традицію.",
          "Будівля університету поєднує елементи візантійської, готичної та мавританської архітектури в одному комплексі.",
          "Чернівці зберегли найбільшу кількість історичних будівель у Західній Україні.",
          "Архітектура міста відображає вплив п'яти різних імперій та держав.",
          "Університетська бібліотека містить унікальні рукописи та стародруки XVI-XVIII століть.",
          "У Чернівцях є єдина діюча синагога в регіоні.",
          "Центральна площа міста зберегла свій історичний план з XIX століття."
        ]
      },
      tips: {
        title: "Поради для Відвідування",
        items: [
          "Найкращий час для відвідування — травень-жовтень, коли погода приємна для прогулянок.",
          "Обов'язково відвідайте університетський комплекс — головну архітектурну пам'ятку.",
          "Послухайте трубача на ратуші (уточніть розклад заздалегідь).",
          "Прогуляйтеся вулицею Кобилянської і насолодіться атмосферою старої Європи.",
          "Відвідайте міські музеї, щоб дізнатися про багатокультурну історію.",
          "Спробуйте місцеву буковинську кухню в міських ресторанах.",
          "Замовте екскурсію, щоб дізнатися про архітектурні особливості міста.",
          "Відвідайте місто під час студентських фестивалів для яскравої атмосфери.",
          "Не пропустіть можливість побачити місто з університетської вежі.",
          "Зробіть фото унікальних архітектурних деталей та фасадів."
        ]
      }
    },
    cta: {
      title: "Готові Відкрити Чернівці?",
      subtitle: "Плануйте свою подорож до Перлини Буковини та відкрийте унікальну архітектуру та багатокультурну спадщину",
      buttons: {
        allGems: "Всі Hidden Gems →",
        kyivPage: "Сторінка Києва →"
      }
    }
  },
  es: {
    title: "Chernivtsi - Perla de Bucovina",
    subtitle: "Una ciudad de arquitectura única, patrimonio multicultural y vibrante vida estudiantil",
    breadcrumb: {
      home: "Inicio",
      explore: "Explorar",
      hiddenGems: "Joyas Ocultas",
      currentPage: "Chernivtsi - Perla de Bucovina"
    },
    content: {
      introduction: "Chernivtsi es una de las ciudades más hermosas de Ucrania, ubicada en el corazón de Bucovina. Esta ciudad es famosa por su arquitectura única, que combina elementos de diferentes estilos y culturas. Fundada en el siglo XII, Chernivtsi ha preservado su encanto histórico y hoy es un importante centro cultural y educativo del oeste de Ucrania.",
      sections: {
        university: {
          title: "Universidad Nacional de Chernivtsi: Obra Maestra Arquitectónica",
          content: "La Universidad Nacional de Chernivtsi, construida en 1875-1882, es un sitio del Patrimonio Mundial de la UNESCO y uno de los edificios universitarios más hermosos de Europa. El complejo fue diseñado por el arquitecto checo Josef Hlávka en estilo ecléctico con elementos de arquitectura bizantina, gótica y morisca.",
          image: "/media/chernivtsi-5080209.jpg",
          imageAlt: "Universidad Nacional de Chernivtsi - Patrimonio Mundial de la UNESCO"
        },
        ratusha: {
          title: "Ayuntamiento: Corazón de la Ciudad con Tradición Musical",
          content: "El Ayuntamiento de Chernivtsi, construido en 1847, es la dominante arquitectónica de la plaza central. Todos los días a cierta hora, aparece un trompetista en la torre y toca una melodía, continuando la tradición medieval de los trompetistas de la ciudad. Esta tradición única atrae a turistas y crea una atmósfera especial en el centro de la ciudad.",
          image: "/media/chernivtsi-2455048 (1).jpg",
          imageAlt: "Ayuntamiento de Chernivtsi con tradición del trompetista"
        },
        multicultural: {
          title: "Patrimonio Multicultural: Ciudad de Muchas Naciones",
          content: "Chernivtsi siempre ha sido una ciudad multicultural donde ucranianos, rumanos, judíos, polacos y representantes de otras naciones vivían juntos. Esta diversidad se refleja en la arquitectura de la ciudad, la cocina y las tradiciones culturales. La ciudad preserva monumentos únicos de diferentes denominaciones religiosas - templos ortodoxos, católicos y judíos."
        },
        kobylyanska: {
          title: "Calle Kobylyanska: Paraíso Peatonal",
          content: "La calle Kobylyanska es la principal calle peatonal de Chernivtsi, nombrada en honor a la famosa escritora ucraniana Olha Kobylyanska. Esta calle está bordeada de hermosos edificios de los siglos XIX-XX, cafés, restaurantes y tiendas. Caminando por la calle Kobylyanska, puedes sentir la atmósfera de la vieja Europa y disfrutar de la diversidad arquitectónica de la ciudad.",
          image: "/media/city-1644926.jpg",
          imageAlt: "Calle Kobylyanska - calle peatonal principal de Chernivtsi"
        }
      },
      facts: {
        title: "Esto es Interesante",
        items: [
          "Chernivtsi fue fundada en el siglo XII y formó parte del Principado de Galicia-Volhynia.",
          "La ciudad estuvo bajo dominio austriaco de 1775 a 1918, lo que influyó en su arquitectura.",
          "La Universidad Nacional de Chernivtsi está incluida en la Lista del Patrimonio Mundial de la UNESCO."
        ]
      },
      unusual: {
        title: "Lo que es Verdaderamente Inusual",
        items: [
          "La tradición del trompetista en el Ayuntamiento es única en Ucrania y continúa la tradición medieval europea.",
          "El edificio universitario combina elementos de arquitectura bizantina, gótica y morisca en un complejo."
        ]
      },
      tips: {
        title: "Consejos para Visitar",
        items: [
          "Mejor época para visitar — Mayo-Octubre, cuando el clima es agradable para caminar.",
          "Asegúrate de visitar el complejo universitario — la principal atracción arquitectónica.",
          "Escucha al trompetista en el Ayuntamiento (verifica el horario con anticipación)."
        ]
      }
    },
    cta: {
      title: "¿Listo para Descubrir Chernivtsi?",
      subtitle: "Planifica tu viaje a la Perla de Bucovina y descubre arquitectura única y patrimonio multicultural",
      buttons: {
        allGems: "Todas las Joyas Ocultas →",
        kyivPage: "Página de Kiev →"
      }
    }
  }
}

// Хук для получения контента страницы
export function usePageContent(page: 'chernihiv' | 'chernivtsi', language: Language = 'en'): PageContent {
  const contentMap = {
    chernihiv: chernihivContent,
    chernivtsi: chernivtsiContent
  }
  
  return contentMap[page][language]
}
