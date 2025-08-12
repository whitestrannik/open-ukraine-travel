import { useI18n } from '@/state/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useI18n()
  return (
    <div className="inline-flex items-center gap-2">
      <button
        className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded ${lang === 'uk' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
        onClick={() => setLang('uk')}
        aria-pressed={lang === 'uk'}
      >
        УК
      </button>
    </div>
  )
}



