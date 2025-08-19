import { useState, useEffect } from 'react';
import { useI18n } from '@/state/i18n';
import { Country, CountriesData } from '@/types/countries';
import countriesData from '@/data/countries.json';

export function useCountries() {
  const { lang } = useI18n();
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      setCountries(countriesData.countries);
    } catch (err) {
      setError('Failed to load countries data');
      console.error('Error loading countries:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getCountryByCode = (code: string): Country | undefined => {
    return countries.find(country => country.code === code);
  };

  const getCountryName = (country: Country): string => {
    return country.name[lang as keyof typeof country.name] || country.name.en;
  };

  const getVisaNotes = (country: Country): string => {
    return country.visaRequirements.notes[lang as keyof typeof country.visaRequirements.notes] || 
           country.visaRequirements.notes.en;
  };

  const getDocuments = (country: Country): string[] => {
    return country.visaRequirements.documents[lang as keyof typeof country.visaRequirements.documents] || 
           country.visaRequirements.documents.en;
  };

  const getMaxStayText = (country: Country): string => {
    return country.visaRequirements.maxStayText[lang as keyof typeof country.visaRequirements.maxStayText] || 
           country.visaRequirements.maxStayText.en;
  };

  const getProcessingTime = (country: Country): string | undefined => {
    return country.visaRequirements.processingTime?.[lang as keyof typeof country.visaRequirements.processingTime] || 
           country.visaRequirements.processingTime?.en;
  };

  const getVisaFee = (country: Country): string | undefined => {
    return country.visaRequirements.visaFee?.[lang as keyof typeof country.visaRequirements.visaFee] || 
           country.visaRequirements.visaFee?.en;
  };

  const getEvisaInfo = (country: Country) => {
    return country.visaRequirements.evisaInfo?.[lang as keyof typeof country.visaRequirements.evisaInfo] || 
           country.visaRequirements.evisaInfo?.en;
  };

  const getStickerVisaInfo = (country: Country) => {
    return country.visaRequirements.stickerVisaInfo?.[lang as keyof typeof country.visaRequirements.stickerVisaInfo] || 
           country.visaRequirements.stickerVisaInfo?.en;
  };

  return {
    countries,
    loading,
    error,
    getCountryByCode,
    getCountryName,
    getVisaNotes,
    getDocuments,
    getMaxStayText,
    getProcessingTime,
    getVisaFee,
    getEvisaInfo,
    getStickerVisaInfo
  };
}
