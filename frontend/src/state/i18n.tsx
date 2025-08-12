import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Language = 'en' | 'uk'

type I18nContextValue = {
  lang: Language
  setLang: (l: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const dictionaries: Record<Language, Record<string, string>> = {
  en: {
    'nav.explore': 'Explore',
    'nav.entry': 'Entry',
    'nav.insurance': 'Insurance',
    'nav.hotels': 'Hotels',
    'nav.transportation': 'Transportation',
    'nav.mice': 'MICE',
    'explore.title': 'Explore Ukraine',
  },
  uk: {
    'nav.explore': 'Досліджуй',
    'nav.entry': 'В’їзд',
    'nav.insurance': 'Страхування',
    'nav.hotels': 'Готелі',
    'nav.transportation': 'Транспорт',
    'nav.mice': 'MICE',
    'explore.title': 'Відкрий Україну',
  },
}

function detectInitialLang(): Language {
  const url = new URL(window.location.href)
  const query = url.searchParams.get('lang')
  if (query === 'uk') return 'uk'
  const stored = localStorage.getItem('lang') as Language | null
  if (stored === 'uk') return 'uk'
  const browser = navigator.language?.toLowerCase()
  if (browser?.startsWith('uk')) return 'uk'
  return 'en'
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLang())

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Language) => {
    localStorage.setItem('lang', l)
    setLangState(l)
  }

  const t = useMemo(() => {
    return (key: string, params?: Record<string, string | number>) => {
      const dict = { ...dictionaries.en, ...dictionaries[lang] }
      let text = dict[key] ?? `⟦${key}⟧`
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          text = text.replace(new RegExp(`{${k}}`, 'g'), String(v))
        }
      }
      return text
    }
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}



