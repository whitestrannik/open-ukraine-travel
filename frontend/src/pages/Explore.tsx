import { useI18n } from '@/state/i18n'

export default function Explore() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-6xl p-6">
      <h1 className="text-4xl font-bold text-blue-600 border-l-4 border-blue-600 pl-4 mb-4">{t('explore.title')}</h1>
      <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
        <p className="text-blue-800 font-medium">
          🧪 TAILWIND TEST: If you see this blue box with borders and padding, Tailwind v4 is working!
        </p>
      </div>
      <p className="mt-4 text-gray-600">
        Placeholder content. We'll add tiles for Essential Info, Destinations, Gems, UNESCO, Regions, Jewish Ukraine.
      </p>
    </section>
  )
}



