import { useI18n } from '@/state/i18n'

export default function Explore() {
  const { t } = useI18n()
  return (
    <section className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">{t('explore.title')}</h1>
      <p className="mt-2 text-muted-foreground">
        Placeholder content. We’ll add tiles for Essential Info, Destinations, Gems, UNESCO, Regions, Jewish Ukraine.
      </p>
    </section>
  )
}



