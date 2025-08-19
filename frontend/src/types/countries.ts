export interface CountryName {
  en: string;
  uk: string;
  es: string;
}

export interface EvisaInfo {
  title: string;
  purpose: string;
  stay: string;
  fees: {
    single: string;
    double: string;
  };
  procedure: string[];
}

export interface StickerVisaInfo {
  title: string;
  type: string;
  duration: string;
  fee: string;
  procedure: string[];
  processingTime: string;
}

export interface VisaRequirements {
  visaRequired: boolean;
  maxStay: string;
  maxStayText: CountryName;
  notes: CountryName;
  documents: {
    en: string[];
    uk: string[];
    es: string[];
  };
  processingTime?: CountryName;
  visaFee?: CountryName;
  evisaInfo?: {
    en: EvisaInfo;
    uk: EvisaInfo;
    es: EvisaInfo;
  };
  stickerVisaInfo?: {
    en: StickerVisaInfo;
    uk: StickerVisaInfo;
    es: StickerVisaInfo;
  };
}

export interface Country {
  code: string;
  name: CountryName;
  visaRequirements: VisaRequirements;
}

export interface CountriesData {
  countries: Country[];
}
