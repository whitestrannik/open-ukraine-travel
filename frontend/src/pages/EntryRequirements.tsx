import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'
import { useState, useRef, useEffect } from 'react'
// import { useCountries } from '@/hooks/useCountries'

export default function EntryRequirements() {
  const { t } = useI18n()
  const [selectedCountry, setSelectedCountry] = useState('')
  const [searchText, setSearchText] = useState('')
  const selectRef = useRef<HTMLSelectElement>(null)
  // const { 
  //   countries: jsonCountries, 
  //   loading, 
  //   error,
  //   getCountryByCode,
  //   getCountryName,
  //   getVisaNotes,
  //   getDocuments,
  //   getMaxStayText,
  //   getProcessingTime,
  //   getVisaFee,
  //   getEvisaInfo,
  //   getStickerVisaInfo
  // } = useCountries()

  const countries = [
    { code: 'AF', name: 'Afghanistan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'AL', name: 'Albania', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'DZ', name: 'Algeria', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'AD', name: 'Andorra', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AE', name: 'United Arab Emirates', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'AO', name: 'Angola', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'AG', name: 'Antigua and Barbuda', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AR', name: 'Argentina', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AM', name: 'Armenia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AU', name: 'Australia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AT', name: 'Austria', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'AZ', name: 'Azerbaijan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BS', name: 'Bahamas', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BH', name: 'Bahrain', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BD', name: 'Bangladesh', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BB', name: 'Barbados', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BY', name: 'Belarus', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BE', name: 'Belgium', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BZ', name: 'Belize', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BJ', name: 'Benin', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BT', name: 'Bhutan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BO', name: 'Bolivia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BA', name: 'Bosnia and Herzegovina', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BW', name: 'Botswana', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BR', name: 'Brazil', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BN', name: 'Brunei', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BG', name: 'Bulgaria', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'BF', name: 'Burkina Faso', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'BI', name: 'Burundi', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KH', name: 'Cambodia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CM', name: 'Cameroon', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CA', name: 'Canada', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CV', name: 'Cape Verde', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CF', name: 'Central African Republic', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TD', name: 'Chad', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CL', name: 'Chile', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CN', name: 'China', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CO', name: 'Colombia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'KM', name: 'Comoros', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CG', name: 'Congo', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CR', name: 'Costa Rica', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'HR', name: 'Croatia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CU', name: 'Cuba', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'CY', name: 'Cyprus', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CZ', name: 'Czech Republic', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CD', name: 'Democratic Republic of the Congo', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'DK', name: 'Denmark', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'DJ', name: 'Djibouti', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'DM', name: 'Dominica', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'DO', name: 'Dominican Republic', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'EC', name: 'Ecuador', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'EG', name: 'Egypt', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SV', name: 'El Salvador', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GQ', name: 'Equatorial Guinea', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ER', name: 'Eritrea', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'EE', name: 'Estonia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'ET', name: 'Ethiopia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'FJ', name: 'Fiji', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'FI', name: 'Finland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'FR', name: 'France', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GA', name: 'Gabon', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GM', name: 'Gambia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GE', name: 'Georgia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'DE', name: 'Germany', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GH', name: 'Ghana', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GR', name: 'Greece', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GD', name: 'Grenada', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GT', name: 'Guatemala', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'GN', name: 'Guinea', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GW', name: 'Guinea-Bissau', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GY', name: 'Guyana', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'HT', name: 'Haiti', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'HN', name: 'Honduras', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'HU', name: 'Hungary', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IS', name: 'Iceland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IN', name: 'India', visaRequired: true, maxStay: '90 days within any 180-day period', notes: 'Citizens of India holding ordinary passports must obtain a visa before traveling to Ukraine. This can be done by applying for an electronic visa (e-Visa) through the official MFA portal or by submitting documents in person at a Ukrainian visa center or embassy.' },
    { code: 'ID', name: 'Indonesia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IR', name: 'Iran', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IQ', name: 'Iraq', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IE', name: 'Ireland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IL', name: 'Israel', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IT', name: 'Italy', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'JM', name: 'Jamaica', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'JP', name: 'Japan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'JO', name: 'Jordan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KZ', name: 'Kazakhstan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'KW', name: 'Kuwait', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KE', name: 'Kenya', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KG', name: 'Kyrgyzstan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LA', name: 'Laos', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LV', name: 'Latvia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LB', name: 'Lebanon', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LS', name: 'Lesotho', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LR', name: 'Liberia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LY', name: 'Libya', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LT', name: 'Lithuania', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LU', name: 'Luxembourg', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MG', name: 'Madagascar', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MW', name: 'Malawi', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MY', name: 'Malaysia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MV', name: 'Maldives', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ML', name: 'Mali', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MT', name: 'Malta', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MH', name: 'Marshall Islands', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MR', name: 'Mauritania', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MU', name: 'Mauritius', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MX', name: 'Mexico', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MD', name: 'Moldova', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MC', name: 'Monaco', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MN', name: 'Mongolia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ME', name: 'Montenegro', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MA', name: 'Morocco', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MZ', name: 'Mozambique', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MM', name: 'Myanmar', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NA', name: 'Namibia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NP', name: 'Nepal', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NL', name: 'Netherlands', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NZ', name: 'New Zealand', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NI', name: 'Nicaragua', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NE', name: 'Niger', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NG', name: 'Nigeria', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NO', name: 'Norway', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'OM', name: 'Oman', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PK', name: 'Pakistan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PW', name: 'Palau', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'PA', name: 'Panama', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'PG', name: 'Papua New Guinea', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PY', name: 'Paraguay', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'PE', name: 'Peru', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'PH', name: 'Philippines', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PL', name: 'Poland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'PT', name: 'Portugal', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'QA', name: 'Qatar', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'RO', name: 'Romania', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'RU', name: 'Russia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'RW', name: 'Rwanda', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SA', name: 'Saudi Arabia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SN', name: 'Senegal', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'RS', name: 'Serbia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SC', name: 'Seychelles', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SL', name: 'Sierra Leone', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SG', name: 'Singapore', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SK', name: 'Slovakia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SI', name: 'Slovenia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SO', name: 'Somalia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZA', name: 'South Africa', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'KR', name: 'South Korea', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'ES', name: 'Spain', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LK', name: 'Sri Lanka', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SD', name: 'Sudan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SR', name: 'Suriname', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SZ', name: 'Swaziland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SE', name: 'Sweden', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CH', name: 'Switzerland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SY', name: 'Syria', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TW', name: 'Taiwan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TJ', name: 'Tajikistan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TZ', name: 'Tanzania', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TH', name: 'Thailand', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TL', name: 'Timor-Leste', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TG', name: 'Togo', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TO', name: 'Tonga', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TT', name: 'Trinidad and Tobago', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TN', name: 'Tunisia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TR', name: 'Turkey', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TM', name: 'Turkmenistan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'UG', name: 'Uganda', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GB', name: 'United Kingdom', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'US', name: 'United States', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'UY', name: 'Uruguay', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'UZ', name: 'Uzbekistan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VE', name: 'Venezuela', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VN', name: 'Vietnam', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'YE', name: 'Yemen', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZM', name: 'Zambia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZW', name: 'Zimbabwe', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' }
  ]

  const generalRequirements = [
    {
      title: 'Passport Requirements',
      items: [
        'Valid passport with at least 6 months validity beyond your planned stay',
        'Passport must have at least 2 blank pages for entry/exit stamps',
        'Passport should be in good condition (not damaged or torn)'
      ]
    },
    {
      title: 'General Documents',
      items: [
        'Travel insurance covering your entire stay',
        'Proof of accommodation (hotel booking or invitation letter)',
        'Proof of financial means (bank statements, cash)',
        'Return ticket or onward travel documentation',
        'Purpose of visit documentation (if applicable)'
      ]
    },
    {
      title: 'Border Crossing',
      items: [
        'Present passport and entry card (if required)',
        'Answer questions about purpose of visit and accommodation',
        'May be asked to show proof of financial means',
        'Customs declaration for items over €10,000 or equivalent',
        'Keep entry stamp safe - required for exit'
      ]
    },
    {
      title: 'COVID-19 Requirements',
      items: [
        'Currently no COVID-19 restrictions for entry',
        'No vaccination certificates required',
        'No PCR tests required',
        'No quarantine requirements',
        'Check for updates before travel as requirements may change'
      ]
    }
  ]

  const selectedCountryInfo = countries.find(country => country.code === selectedCountry)

  // Function to handle keyboard search
  const handleKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
      const newSearchText = searchText + e.key.toLowerCase()
      setSearchText(newSearchText)
      
      console.log('Searching for:', newSearchText) // Debug log
      
      // Find the first country that starts with the accumulated search text
      const matchingCountry = countries.find(country => {
        const countryName = t(`country.${country.code.toLowerCase()}`).toLowerCase()
        const startsWith = countryName.startsWith(newSearchText)
        console.log(`Checking ${countryName} against "${newSearchText}": ${startsWith}`) // Debug log
        return startsWith
      })
      
      if (matchingCountry && selectRef.current) {
        console.log('Found match:', matchingCountry.name) // Debug log
        const countryIndex = countries.findIndex(country => country.code === matchingCountry.code)
        selectRef.current.selectedIndex = countryIndex + 1 // +1 because of the "Select your country..." option
        setSelectedCountry(matchingCountry.code)
      } else {
        console.log('No match found for:', newSearchText) // Debug log
      }
      
      // Clear search text after 2 seconds (increased from 1 second)
      setTimeout(() => setSearchText(''), 2000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Section */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-[#B0B3BA]">
            <Link to="/" className="hover:text-[#1F5FA0] transition-colors">
              {t('nav.home')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/explore/essential" className="hover:text-[#1F5FA0] transition-colors">
              {t('nav.explore')}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F5FA0] font-medium">Entry Requirements</span>
          </nav>
        </div>
      </section>

      {/* Main Content with Country Selector - Combined */}
      <section className="py-12 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Title and Introductory Text */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-[#1F5FA0] rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl text-white">🛂</span>
                </div>
                <h1 className="text-4xl font-bold text-[#22242A]">
                  {t('entry.title')}
                </h1>
              </div>
              <div className="text-lg text-[#22242A] max-w-4xl mx-auto space-y-3">
                <p>{t('entry.intro.1')}</p>
                <p>{t('entry.intro.2')}</p>
                <p>{t('entry.intro.3')}</p>
              </div>
            </div>

            {/* Country Selector */}
            <div className="mb-4">
              <label htmlFor="country-select" className="block text-lg font-semibold text-[#22242A] mb-3">
                {t('entry.nationality.question')}
                {selectedCountryInfo && (
                  <span className="text-sm text-green-600 ml-2 font-normal">
                    ✓ {t(`country.${selectedCountryInfo.code.toLowerCase()}`)}
                  </span>
                )}
                {searchText && !selectedCountryInfo && (
                  <span className="text-sm text-blue-600 ml-2 font-normal">
                    🔍 "{searchText}" → {t('entry.no.match')}
                  </span>
                )}
              </label>
              <select
                ref={selectRef}
                id="country-select"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                onKeyDown={handleKeyDown}
                size={5}
                className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
              >
                <option value="">{t('entry.select.country')}</option>
                {/* Add other countries from old array */}
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {t(`country.${country.code.toLowerCase()}`)}
                  </option>
                ))}
              </select>
              <p className="text-sm text-gray-500 mt-2">
                {t('entry.tip')}
              </p>
            </div>

            {/* Country Information */}
            {selectedCountryInfo && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-4">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${selectedCountryInfo.visaRequired ? 'bg-orange-500' : 'bg-green-500'}`}>
                    <span className="text-white text-sm font-bold">
                      {selectedCountryInfo.visaRequired ? t('entry.visa.required') : t('entry.visa.free')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#22242A]">
                    Entry Requirements for {t(`country.${selectedCountryInfo.code.toLowerCase()}`)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#22242A] mb-2">{t('entry.visa.status')}</h4>
                    <p className={`text-lg font-bold ${selectedCountryInfo.visaRequired ? 'text-orange-600' : 'text-green-600'}`}>
                      {selectedCountryInfo.visaRequired ? t('entry.visa.required.text') : t('entry.visa.free.text')}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#22242A] mb-2">{t('entry.max.stay')}</h4>
                    <p className="text-lg text-[#22242A]">{selectedCountryInfo.maxStay}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-[#22242A] mb-2">{t('entry.notes')}</h4>
                  <p className="text-[#22242A]">{selectedCountryInfo.notes}</p>
                </div>

                {/* Special detailed information for India */}
                {selectedCountryInfo.code === 'IN' && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-blue-800 mb-4">{t('entry.india.title')}</h4>
                      <p className="text-blue-700 mb-4">
                        {t('entry.india.intro')}
                      </p>
                    </div>

                    {/* e-Visa Information */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-blue-800 mb-4">{t('entry.india.evisa.title')}</h4>
                      <div className="space-y-3 text-blue-700">
                        <div><strong>{t('entry.india.evisa.purpose')}</strong></div>
                        <div><strong>{t('entry.india.evisa.stay')}</strong></div>
                        <div><strong>{t('entry.india.evisa.fees')}</strong></div>
                        <div><strong>{t('entry.india.evisa.procedure.title')}</strong></div>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>{t('entry.india.evisa.procedure.1')}</li>
                          <li>{t('entry.india.evisa.procedure.2')}</li>
                          <li>{t('entry.india.evisa.procedure.3')}</li>
                          <li>{t('entry.india.evisa.procedure.4')}</li>
                        </ul>
                        <div><strong>{t('entry.india.evisa.processing')}</strong></div>
                      </div>
                    </div>

                    {/* Sticker Visa Information */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-green-800 mb-4">{t('entry.india.sticker.title')}</h4>
                      <div className="space-y-3 text-green-700">
                        <div><strong>{t('entry.india.sticker.type')}</strong></div>
                        <div><strong>{t('entry.india.sticker.duration')}</strong></div>
                        <div><strong>{t('entry.india.sticker.fee')}</strong></div>
                        <div><strong>{t('entry.india.sticker.procedure.title')}</strong></div>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>{t('entry.india.sticker.procedure.1')}</li>
                          <li>{t('entry.india.sticker.procedure.2')}</li>
                          <li>{t('entry.india.sticker.procedure.3')}</li>
                          <li>{t('entry.india.sticker.procedure.4')}</li>
                        </ul>
                        <div><strong>{t('entry.india.sticker.processing')}</strong></div>
                      </div>
                    </div>

                    {/* Summary Table */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{t('entry.india.summary.title')}</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="px-4 py-2 text-left font-semibold">Visa Type</th>
                              <th className="px-4 py-2 text-left font-semibold">Fee (USD)</th>
                              <th className="px-4 py-2 text-left font-semibold">Processing Time</th>
                              <th className="px-4 py-2 text-left font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.evisa.single')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.fee.single')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.time.single')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.notes.single')}</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.evisa.double')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.fee.double')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.time.double')}</td>
                              <td className="px-4 py-2 border-b">{t('entry.india.summary.notes.double')}</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">{t('entry.india.summary.sticker')}</td>
                              <td className="px-4 py-2">{t('entry.india.summary.fee.sticker')}</td>
                              <td className="px-4 py-2">{t('entry.india.summary.time.sticker')}</td>
                              <td className="px-4 py-2">{t('entry.india.summary.notes.sticker')}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Official Sources */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-yellow-800 mb-4">{t('entry.india.sources.title')}</h4>
                      <ul className="space-y-2 text-yellow-700">
                        <li>• <a href="https://evisa.mfa.gov.ua/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('entry.india.sources.mfa')}</a></li>
                        <li>• <a href="https://india.mfa.gov.ua/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('entry.india.sources.embassy')}</a></li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Special detailed information for USA */}
                {selectedCountryInfo.code === 'US' && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-green-800 mb-4">{t('entry.usa.title')}</h4>
                      <p className="text-green-700 mb-4">
                        {t('entry.usa.intro')}
                      </p>
                    </div>

                    {/* Visa-Free Entry Information */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-green-800 mb-4">{t('entry.usa.details.title')}</h4>
                      <div className="space-y-3 text-green-700">
                        <div><strong>{t('entry.usa.details.stay')}</strong></div>
                        <div><strong>{t('entry.usa.details.visits')}</strong></div>
                        <div><strong>{t('entry.usa.details.purpose')}</strong></div>
                      </div>
                    </div>

                    {/* Entry Requirements */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-blue-800 mb-4">{t('entry.usa.requirements.title')}</h4>
                      <div className="space-y-3 text-blue-700">
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>{t('entry.usa.requirements.passport')}</strong></li>
                          <li><strong>{t('entry.usa.requirements.funds')}</strong></li>
                          <li><strong>{t('entry.usa.requirements.insurance')}</strong></li>
                          <li><strong>{t('entry.usa.requirements.ticket')}</strong></li>
                        </ul>
                      </div>
                    </div>

                    {/* Important Notice */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-yellow-800 mb-4">{t('entry.usa.important.title')}</h4>
                      <div className="text-yellow-700">
                        <p><strong>{t('entry.usa.important.text')}</strong></p>
                      </div>
                    </div>

                    {/* Official Sources */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">{t('entry.usa.sources.title')}</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <a href="https://mfa.gov.ua/en/visa-free-regime" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('entry.usa.sources.mfa')}</a></li>
                        <li>• <a href="https://dpsu.gov.ua/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('entry.usa.sources.border')}</a></li>
                      </ul>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </section>

      {/* General Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#22242A]">
              General Information
            </h2>
            <p className="text-xl text-[#B0B3BA] max-w-3xl mx-auto">
              Citizens of most countries need a valid passport to enter Ukraine. Some nationalities require a visa, while others can enter visa-free for up to 90 days.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {generalRequirements.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1F5FA0] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#22242A]">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-[#F5C542] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-[#22242A]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-r from-[#D89B5A] to-[#D89B5A]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Important Notice
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Entry requirements may change without notice. Always verify current requirements with the Ukrainian embassy or consulate in your country before travel.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-lg mb-6">
              For specific questions about your nationality or situation, contact the nearest Ukrainian embassy or consulate.
            </p>
            <Link 
              to="/explore/essential" 
              className="inline-flex items-center bg-white text-[#D89B5A] px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Essential Information →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
