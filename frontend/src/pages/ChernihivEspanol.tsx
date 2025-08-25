import React from 'react'
import { Link } from 'react-router-dom'

export default function ChernihivEspanol() {
  React.useEffect(() => {
    document.title = "Chernihiv - Antigua Capital de Rus (ES)";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
            <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
              Inicio
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore" className="hover:text-[#1F5FA0] transition-colors">
              Explorar
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore/gems" className="hover:text-[#1F5FA0] transition-colors">
              Joyas Ocultas
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">Chernihiv - Antigua Capital de Rus</span>
            <div className="flex items-center space-x-2 ml-4">
              <Link 
                to="/explore/gems/chernihiv" 
                className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
              >
                UA
              </Link>
              <Link 
                to="/chernihiv-ingles" 
                className="text-sm bg-[#1F5FA0] text-white px-3 py-1 rounded hover:bg-[#1F5FA0]/80 transition-colors"
              >
                EN
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
            Chernihiv - Antigua Capital de Rus
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/95 max-w-2xl mx-auto drop-shadow-lg">
            Una de las ciudades más antiguas de la Rus de Kiev con magníficas catedrales y monasterios
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Chernihiv: Antigua Capital de Rus con Magníficas Catedrales</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/architecture-3197527.jpg"
                  alt="Chernihiv - antigua capital de Rus"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Chernihiv - una de las ciudades más antiguas de Ucrania
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Chernihiv es una de las ciudades más antiguas de Ucrania, que fue uno de los principales centros de la Rus de Kiev. 
                  Fundada en el siglo IX, la ciudad se convirtió en la capital del Principado de Chernihiv y uno de los más importantes 
                  centros políticos, culturales y espirituales de la Rus medieval. Hoy, Chernihiv es un museo viviente 
                  de la arquitectura antigua de Rus, donde se conservan monumentos únicos de los siglos XI-XIII.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Catedral de la Transfiguración: La Catedral Más Antigua de Ucrania</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  La Catedral de la Transfiguración es el templo más antiguo conservado en Ucrania, construido en 1036 
                  por el Príncipe Mstislav Volodymyrovych. La catedral es un ejemplo único de la arquitectura antigua de Rus y 
                  uno de los mejores ejemplos del estilo bizantino en Europa del Este. El templo tiene una estructura 
                  de cruz con cúpula con tres ábsides y está decorado con hermosos frescos y mosaicos. La catedral 
                  sobrevivió numerosas guerras e invasiones, preservando su apariencia original durante casi mil años.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  El interior de la catedral asombra con su grandeza y autenticidad. Aquí se conservan frescos originales 
                  del siglo XI, que se encuentran entre los más antiguos de Ucrania. Especialmente valiosos son los frescos en el ábside central, 
                  que representan escenas de la vida de Cristo y la Virgen María. La catedral también conserva detalles 
                  arquitectónicos únicos, incluyendo puertas y ventanas originales del siglo XI.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/Spas_sobor (1).jpg"
                  alt="Catedral de la Transfiguración - el templo más antiguo de Ucrania"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Catedral de la Transfiguración (1036)
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Catedral de Boris y Gleb: Obra Maestra Arquitectónica</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La Catedral de Boris y Gleb, construida en el siglo XII, es otra joya arquitectónica de Chernihiv. 
              Este templo es famoso por su arquitectura única de "torre", que es rara para los edificios de la antigua Rus. 
              La catedral tiene una cúpula central alta y cuatro cúpulas más pequeñas en las esquinas, creando una 
              silueta distintiva. En el interior, puedes ver fragmentos conservados de frescos antiguos y sentir la 
              atmósfera de la Rus medieval.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Monasterio de Yeletsky: Centro Espiritual con Campanario</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/monastery-1.jpg"
                  alt="Monasterio de Yeletsky"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Monasterio de Yeletsky con su famoso campanario
                </p>
              </div>
              
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  El Monasterio de Yeletsky, fundado en el siglo XI, es uno de los monasterios más antiguos de Ucrania. 
                  El complejo del monasterio incluye la Catedral de la Asunción, construida en el siglo XII, y un magnífico 
                  campanario del siglo XVIII. Desde la parte superior del campanario, puedes disfrutar de una vista panorámica 
                  de toda la ciudad y ver todos los principales hitos arquitectónicos de Chernihiv. El monasterio 
                  sigue activo y preserva tradiciones antiguas y prácticas espirituales.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Estación de Tren: Puerta de Entrada a la Ciudad Antigua</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La Estación de Tren de Chernihiv, construida a principios del siglo XX, no es solo un centro de transporte sino también 
              un monumento arquitectónico. El edificio de la estación combina elementos del Art Nouveau y la arquitectura clásica, 
              creando una hermosa entrada a la ciudad antigua. La estación sirve como un punto de partida conveniente para explorar 
              Chernihiv, ya que está ubicada cerca del centro histórico principal.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Museos: Tesoros de Historia y Cultura</h3>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chernihiv tiene varios museos interesantes que cuentan la historia de la ciudad y la región. El Museo Histórico 
              de Chernihiv alberga hallazgos arqueológicos únicos de los tiempos de la Rus de Kiev, incluyendo 
              armas antiguas, joyas y artículos domésticos. El Museo de Historia Militar muestra exhibiciones 
              de diferentes períodos del pasado militar de la ciudad. El Museo de Arte presenta obras de artistas locales 
              y exposiciones temporales.
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Kozelets: En el Camino de Kiev a Chernihiv</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  En el camino de Kiev a Chernihiv, vale la pena detenerse en la pequeña ciudad de Kozelets, 
                  que es famosa por su hermosa Catedral de la Natividad. Construida en el siglo XVIII en el 
                  estilo barroco ucraniano, la catedral está decorada con magníficas tallas y pinturas. 
                  La ciudad misma ha preservado su apariencia histórica y ofrece una mirada a la vida 
                  de una típica ciudad provincial ucraniana del pasado.
                </p>
              </div>
              
              <div className="md:w-80 flex-shrink-0">
                <img 
                  src="/media/cathedral-1.jpg"
                  alt="Catedral de Kozelets"
                  className="w-full h-64 object-contain rounded-lg shadow-lg bg-gray-100"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  Catedral de la Natividad en Kozelets
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Esto es Interesante</h3>
            
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
              <li>Chernihiv fue mencionada en la famosa "Crónica de los Años Pasados" como una de las ciudades más importantes de la Rus de Kiev</li>
              <li>El nombre de la ciudad proviene de la antigua palabra eslava "chern" que significa "negro" y "hiv" que significa "bosque"</li>
              <li>Durante los tiempos de la Rus de Kiev, Chernihiv era la tercera ciudad más importante después de Kiev y Novgorod</li>
              <li>La Catedral de la Transfiguración es más antigua que la famosa Catedral de Santa Sofía en Kiev</li>
              <li>En el siglo XII, Chernihiv tenía su propia escuela de arquitectura, que influyó en el desarrollo de la construcción de iglesias en toda la Rus</li>
              <li>El escudo de armas de la ciudad presenta un águila negra, simbolizando el antiguo poder principesco</li>
            </ul>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Lo que es Verdaderamente Inusual</h3>
            
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-2">
              <li>La "Tumba Negra" - un antiguo túmulo funerario del siglo X, donde, según la leyenda, está enterrado el fundador de Chernihiv</li>
              <li>Pasajes subterráneos bajo el centro de la ciudad, que se usaban para defensa y movimientos secretos</li>
              <li>La arquitectura única de "torre" de la Catedral de Boris y Gleb, que no tiene análogos en otras ciudades de la antigua Rus</li>
              <li>Grafitis antiguos en las paredes de las catedrales, dejados por visitantes medievales</li>
              <li>El hecho de que Chernihiv ha preservado más monumentos de la antigua Rus que cualquier otra ciudad en Ucrania</li>
              <li>Leyendas locales sobre tesoros ocultos de antiguos príncipes, que aún son buscados por cazadores de tesoros</li>
            </ul>

            <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-12">Consejos para Visitar</h3>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li><strong>Mejor época para visitar:</strong> Primavera y otoño, cuando el clima es agradable y hay menos turistas</li>
                <li><strong>Cómo llegar:</strong> En tren desde Kiev (2 horas) o en autobús (1.5 horas)</li>
                <li><strong>Dónde alojarse:</strong> Hay varios hoteles en el centro de la ciudad, así como casas de huéspedes</li>
                <li><strong>Qué probar:</strong> Miel local, platos tradicionales ucranianos en restaurantes locales</li>
                <li><strong>Imperdible:</strong> Las tres catedrales principales, el monasterio con campanario y el centro histórico</li>
                <li><strong>Duración:</strong> Planifica al menos 2-3 días para explorar completamente la ciudad y sus alrededores</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1F5FA0] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Descubrir Chernihiv?</h2>
          <p className="text-xl mb-8 text-white/90">
            Planifica tu viaje a la antigua capital de Rus y descubre magníficas catedrales y monasterios
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/explore/gems" 
              className="inline-flex items-center bg-[#F5C542] hover:bg-[#F5C542]/90 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Todas las Joyas Ocultas →
            </Link>
            <Link 
              to="/cities/kyiv" 
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Página de Kiev →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

