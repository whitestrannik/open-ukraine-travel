import { useParams, Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'

// News data - later this will come from a database
const newsData = {
  'tourism-recovery-program': {
    title: 'Ukraine Tourism Recovery Program Launched',
    date: 'January 22, 2025',
    content: `
      <p>The Ukrainian government has officially launched a comprehensive Tourism Recovery Program aimed at revitalizing the country's tourism sector and attracting international visitors.</p>
      
      <p>This landmark initiative includes significant investments in infrastructure development, safety enhancements, and promotional campaigns to showcase Ukraine's rich cultural heritage and natural beauty.</p>
      
      <p>Key features of the program include:</p>
      <ul>
        <li>Enhanced security measures for tourist destinations</li>
        <li>Modernization of transportation networks</li>
        <li>Development of new tourist routes and attractions</li>
        <li>Comprehensive marketing campaigns targeting international markets</li>
        <li>Training programs for tourism industry professionals</li>
      </ul>
      
      <p>The program represents a major step forward in Ukraine's efforts to rebuild and strengthen its tourism industry, creating new opportunities for economic growth and cultural exchange.</p>
    `
  },
  'new-tourist-routes': {
    title: 'New Tourist Routes Open in Western Ukraine',
    date: 'January 20, 2025',
    content: `
      <p>Western Ukraine has unveiled several new tourist routes that connect historic cities and natural wonders, offering visitors unique experiences in this culturally rich region.</p>
      
      <p>The new routes include:</p>
      <ul>
        <li>Lviv to Carpathian Mountains cultural heritage trail</li>
        <li>Historic castles and fortresses circuit</li>
        <li>Traditional villages and folk art exploration</li>
        <li>Natural parks and wildlife observation routes</li>
      </ul>
      
      <p>These routes have been carefully designed to showcase the region's diverse attractions while ensuring visitor safety and comfort. Local communities are actively involved in maintaining and promoting these new destinations.</p>
    `
  },
  'safety-updates': {
    title: 'Safety Updates for Travelers',
    date: 'January 18, 2025',
    content: `
      <p>The Ministry of Tourism and local authorities have issued updated safety guidelines for travelers visiting Ukraine, reflecting the current security situation and ensuring the best possible experience for visitors.</p>
      
      <p>Key safety measures include:</p>
      <ul>
        <li>Enhanced security at major tourist destinations</li>
        <li>24/7 emergency support hotlines for tourists</li>
        <li>Regular safety assessments of tourist facilities</li>
        <li>Updated travel advisories and recommendations</li>
        <li>Coordination with international travel organizations</li>
      </ul>
      
      <p>Travelers are encouraged to register with their embassies and follow official travel advisories while planning their visits to Ukraine.</p>
    `
  },
  'cultural-events': {
    title: 'Cultural Events This Month',
    date: 'January 15, 2025',
    content: `
      <p>Ukraine's vibrant cultural scene continues to thrive with an exciting lineup of events, festivals, and exhibitions taking place across the country this month.</p>
      
      <p>Highlights include:</p>
      <ul>
        <li>Traditional folk music festivals in Lviv</li>
        <li>Contemporary art exhibitions in Kyiv</li>
        <li>Historical reenactments at medieval castles</li>
        <li>International film festivals</li>
        <li>Traditional craft workshops and demonstrations</li>
      </ul>
      
      <p>These events provide visitors with unique opportunities to experience Ukraine's rich cultural heritage and connect with local communities.</p>
    `
  }
}

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useI18n()

  const article = newsData[slug as keyof typeof newsData]

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#22242A] mb-4">Article Not Found</h1>
            <p className="text-[#B0B3BA] mb-8">The requested news article could not be found.</p>
            <Link 
              to="/" 
              className="inline-block bg-[#1F5FA0] hover:bg-[#1F5FA0]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#1F5FA0] hover:text-[#1F5FA0]/80 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="text-sm text-[#1F5FA0] font-medium mb-2">{article.date}</div>
              <h1 className="text-3xl font-bold text-[#22242A] mb-4">{article.title}</h1>
            </header>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>
      </div>
    </div>
  )
}

