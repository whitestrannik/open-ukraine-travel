import { Link } from 'react-router-dom'
import { useI18n } from '@/state/i18n'
import { useState, useRef, useEffect } from 'react'
// import { useCountries } from '@/hooks/useCountries'

export default function EntryRequirements() {
  const { t } = useI18n()
  const [selectedCountry, setSelectedCountry] = useState('')
  const [searchText, setSearchText] = useState('')
  const [activeSection, setActiveSection] = useState('entry-rules')
  const [showDropdown, setShowDropdown] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
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
    { code: 'IN', name: 'India', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ID', name: 'Indonesia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IR', name: 'Iran', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IQ', name: 'Iraq', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'IE', name: 'Ireland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IL', name: 'Israel', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'IT', name: 'Italy', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CI', name: 'Ivory Coast', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'JM', name: 'Jamaica', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'JP', name: 'Japan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'JO', name: 'Jordan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KZ', name: 'Kazakhstan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'KE', name: 'Kenya', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KI', name: 'Kiribati', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KW', name: 'Kuwait', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KG', name: 'Kyrgyzstan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LA', name: 'Laos', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LV', name: 'Latvia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LB', name: 'Lebanon', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LS', name: 'Lesotho', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LR', name: 'Liberia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LY', name: 'Libya', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'LI', name: 'Liechtenstein', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LT', name: 'Lithuania', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LU', name: 'Luxembourg', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MK', name: 'North Macedonia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MG', name: 'Madagascar', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MW', name: 'Malawi', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MY', name: 'Malaysia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MV', name: 'Maldives', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ML', name: 'Mali', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MT', name: 'Malta', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MH', name: 'Marshall Islands', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MR', name: 'Mauritania', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MU', name: 'Mauritius', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MX', name: 'Mexico', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'FM', name: 'Micronesia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MD', name: 'Moldova', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MC', name: 'Monaco', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MN', name: 'Mongolia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'ME', name: 'Montenegro', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'MA', name: 'Morocco', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MZ', name: 'Mozambique', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'MM', name: 'Myanmar', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NA', name: 'Namibia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NR', name: 'Nauru', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NP', name: 'Nepal', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NL', name: 'Netherlands', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NZ', name: 'New Zealand', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NI', name: 'Nicaragua', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'NE', name: 'Niger', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NG', name: 'Nigeria', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'KP', name: 'North Korea', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'NO', name: 'Norway', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'OM', name: 'Oman', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PK', name: 'Pakistan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PW', name: 'Palau', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'PS', name: 'Palestine', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
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
    { code: 'KN', name: 'Saint Kitts and Nevis', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LC', name: 'Saint Lucia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'WS', name: 'Samoa', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SM', name: 'San Marino', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'ST', name: 'Sao Tome and Principe', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SA', name: 'Saudi Arabia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SN', name: 'Senegal', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'RS', name: 'Serbia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SC', name: 'Seychelles', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SL', name: 'Sierra Leone', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SG', name: 'Singapore', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SK', name: 'Slovakia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SI', name: 'Slovenia', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SB', name: 'Solomon Islands', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SO', name: 'Somalia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZA', name: 'South Africa', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'KR', name: 'South Korea', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SS', name: 'South Sudan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ES', name: 'Spain', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'LK', name: 'Sri Lanka', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SD', name: 'Sudan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'SR', name: 'Suriname', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SZ', name: 'Eswatini', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SE', name: 'Sweden', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'CH', name: 'Switzerland', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'SY', name: 'Syria', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TW', name: 'Taiwan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TJ', name: 'Tajikistan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TZ', name: 'Tanzania', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TH', name: 'Thailand', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TL', name: 'East Timor', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TG', name: 'Togo', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TO', name: 'Tonga', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TT', name: 'Trinidad and Tobago', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TN', name: 'Tunisia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TR', name: 'Turkey', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'TM', name: 'Turkmenistan', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'TV', name: 'Tuvalu', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'UG', name: 'Uganda', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'GB', name: 'United Kingdom', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'US', name: 'United States', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'UY', name: 'Uruguay', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'UZ', name: 'Uzbekistan', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VU', name: 'Vanuatu', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VA', name: 'Vatican City', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VE', name: 'Venezuela', visaRequired: false, maxStay: '90 days', notes: 'Visa-free entry for tourism and business' },
    { code: 'VN', name: 'Vietnam', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'YE', name: 'Yemen', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZM', name: 'Zambia', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' },
    { code: 'ZW', name: 'Zimbabwe', visaRequired: true, maxStay: '30 days', notes: 'Visa required. Apply at Ukrainian embassy. Processing time: 5-15 days' }
  ]

  const filteredCountries = searchText.length > 0 
    ? countries.filter(country => {
        const countryName = t(`country.${country.code.toLowerCase()}`) !== `country.${country.code.toLowerCase()}` 
          ? t(`country.${country.code.toLowerCase()}`) 
          : country.name
        return countryName.toLowerCase().startsWith(searchText.toLowerCase())
      }).slice(0, 5)
    : countries.slice(0, 5) // Показываем первые 5 стран при пустом поиске

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode)
    const selectedCountryData = countries.find(c => c.code === countryCode)
    if (selectedCountryData) {
      const countryName = t(`country.${countryCode.toLowerCase()}`) !== `country.${countryCode.toLowerCase()}` 
        ? t(`country.${countryCode.toLowerCase()}`) 
        : selectedCountryData.name
      setSearchText(countryName)
    }
    setShowDropdown(false)
  }

  const selectedCountryInfo = selectedCountry ? countries.find(c => c.code === selectedCountry) : null
  const selectedCountryName = selectedCountry ? countries.find(c => c.code === selectedCountry)?.name : ''

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  const generalRequirements = [
    {
      title: 'Passport Requirements',
      items: [
        'Valid passport with at least 6 months validity beyond your planned stay',
        'Passport must be in good condition with no damage',
        'For some nationalities, passport must have at least 2 blank pages'
      ]
    },
    {
      title: 'Visa Requirements',
      items: [
        'Check if your nationality requires a visa before travel',
        'Apply for visa well in advance of your trip',
        'Some nationalities can enter visa-free for up to 90 days',
        'Business visas may have different requirements'
      ]
    },
    {
      title: 'Entry Points',
      items: [
        'Major international airports: Kyiv Boryspil, Kyiv Zhuliany, Lviv, Odesa',
        'Land border crossings from Poland, Slovakia, Hungary, Romania',
        'Sea ports in Odesa and other coastal cities',
        'Check current border crossing availability'
      ]
    },
    {
      title: 'Customs Regulations',
      items: [
        'Personal belongings and gifts up to €1000 value are duty-free',
        'Currency over €10,000 must be declared',
        'Restricted items include weapons, drugs, and certain foods',
        'Check specific regulations for your items before travel'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#F6F6F8]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-700 font-medium">{t('entry.title')}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-bold text-[#22242A] mb-6">Entry Requirements</h3>
                <nav className="space-y-3">
                  <button
                    onClick={() => {
                      setActiveSection('entry-rules')
                      scrollToSection('entry-rules-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'entry-rules'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    Entry Rules & Requirements
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('general')
                      scrollToSection('general-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'general'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    General Information
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('epidemiological')
                      scrollToSection('epidemiological-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'epidemiological'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    {t('entry.subsections.epidemiological.title')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('curfews')
                      scrollToSection('curfews-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'curfews'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    {t('entry.subsections.curfews.title')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('pets')
                      scrollToSection('pets-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'pets'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    {t('entry.subsections.pets.title')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('car')
                      scrollToSection('car-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'car'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    {t('entry.subsections.car.title')}
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection('transit')
                      scrollToSection('transit-section')
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === 'transit'
                        ? 'bg-[#1F5FA0] text-white'
                        : 'text-[#22242A] hover:bg-gray-100'
                    }`}
                  >
                    {t('entry.subsections.transit.title')}
                  </button>
                </nav>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              {/* Entry Rules & Requirements Section */}
              {activeSection === 'entry-rules' && (
                <div id="entry-rules-section">
                <div className="w-full mb-12">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      Entry Rules & Requirements
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      Welcome to Ukraine! This page provides comprehensive information about entry requirements for visitors from different countries.
                    </p>
                    <p className="text-lg text-[#22242A] mb-8">
                      Select your nationality below to see specific visa requirements, maximum stay duration, and important notes for your country.
                    </p>
                    <p className="text-lg text-[#22242A] mb-8">
                      Please note that entry requirements may change, so always verify current information with official sources before travel.
                    </p>
                    
                    <div className="space-y-8">
                      {/* Country Selector */}
                      <div>
                        <label className="block text-lg font-semibold text-[#22242A] mb-4">
                          {t('entry.nationality.question')}
                        </label>
                        
                        <div className="relative" ref={selectRef}>
                          <input
                            type="text"
                            placeholder={t('entry.select.country')}
                            value={searchText}
                            onChange={(e) => {
                              setSearchText(e.target.value)
                              setShowDropdown(true)
                            }}
                            onFocus={() => {
                              setShowDropdown(true)
                            }}
                            onBlur={() => {
                              setTimeout(() => {
                                setShowDropdown(false)
                              }, 200)
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F5FA0] focus:border-transparent"
                          />
                          
                          {showDropdown && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => {
                                  const countryName = t(`country.${country.code.toLowerCase()}`) !== `country.${country.code.toLowerCase()}` 
                                    ? t(`country.${country.code.toLowerCase()}`) 
                                    : country.name
                                  return (
                                    <button
                                      key={country.code}
                                      onClick={() => handleCountrySelect(country.code)}
                                      className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                                    >
                                      {countryName}
                                    </button>
                                  )
                                })
                              ) : (
                                <div className="px-4 py-3 text-gray-500">
                                  {t('entry.no.match')}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* India - Special Display */}
                      {selectedCountryInfo && selectedCountryInfo.code === 'IN' && (
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                            {t('entry.visa.status')} - {selectedCountryName}
                          </h3>

                          <div className="bg-white rounded-lg p-6 border border-gray-200">
                              <h4 className="text-lg font-semibold text-[#22242A] mb-4">
                                Entry Rules – Citizens of India (Ordinary Passports)
                              </h4>
                              <p className="text-[#22242A] mb-6">
                                Citizens of India holding ordinary passports must obtain a visa before traveling to Ukraine. This can be done by applying for an electronic visa (e-Visa) through the official MFA portal or by submitting documents in person at a Ukrainian visa center or embassy.
                              </p>

                              <div className="space-y-6">
                                <div>
                                  <h5 className="text-lg font-semibold text-[#22242A] mb-3">1. Electronic Visa (e-Visa)</h5>
                                  <div className="space-y-3">
                                    <p className="text-[#22242A]"><strong>Purpose:</strong> Tourism, business, cultural events, conferences, medical treatment, educational programs, private visits</p>
                                    <p className="text-[#22242A]"><strong>Stay:</strong> Up to 90 days within any 180-day period</p>
                                    <div>
                                                                              <p className="text-[#22242A] font-semibold">Fees:</p>
                                        <p className="text-[#22242A]">Single-entry: 20 USD (normal) / 40 USD (urgent)</p>
                                        <p className="text-[#22242A]">Double-entry: 30 USD (normal) / 60 USD (urgent)</p>
                                    </div>
                                    <div>
                                      <p className="text-[#22242A] font-semibold">Application procedure:</p>
                                      <ul className="list-disc list-inside space-y-1 text-[#22242A]">
                                        <li>Register on the MFA e-Visa portal</li>
                                        <li>Upload scanned documents (passport, photo, insurance, proof of funds, trip purpose)</li>
                                        <li>Pay the fee online</li>
                                        <li>Receive the e-Visa by email</li>
                                      </ul>
                                    </div>
                                    <p className="text-[#22242A]"><strong>Processing time:</strong> ~3 business days (normal), 1 business day (urgent)</p>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-lg font-semibold text-[#22242A] mb-3">2. Sticker Visa (Embassy/Consulate)</h5>
                                  <div className="space-y-3">
                                    <p className="text-[#22242A]"><strong>Type:</strong> C-type short-term visa for tourism, business, private or cultural visits</p>
                                    <p className="text-[#22242A]"><strong>Duration:</strong> Up to 90 days within any 180-day period</p>
                                    <p className="text-[#22242A]"><strong>Fee:</strong> Standard consular fee (varies by embassy, usually ~65–85 USD)</p>
                                                                          <div>
                                        <p className="text-[#22242A] font-semibold">Application procedure:</p>
                                        <ul className="list-disc list-inside space-y-1 text-[#22242A]">
                                          <li>Complete the visa application online</li>
                                          <li>Print and sign it</li>
                                          <li>Submit in person to the Embassy/Consulate of Ukraine with:</li>
                                          <li className="ml-4">Valid passport</li>
                                          <li className="ml-4">Recent photo</li>
                                          <li className="ml-4">Travel insurance</li>
                                          <li className="ml-4">Proof of sufficient funds</li>
                                          <li className="ml-4">Trip details (hotel booking, invitation, etc.)</li>
                                          <li>Pay the consular fee</li>
                                        </ul>
                                      </div>
                                                                          <p className="text-[#22242A]"><strong>Processing time:</strong> Normally up to 10 business days; urgent options available at extra cost</p>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-lg font-semibold text-[#22242A] mb-3">Summary Table</h5>
                                  <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                      <thead>
                                        <tr className="bg-gray-50">
                                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-[#22242A]">Visa Type</th>
                                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-[#22242A]">Fee (USD)</th>
                                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-[#22242A]">Processing Time</th>
                                          <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-[#22242A]">Notes</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">e-Visa Single</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">20 (normal) / 40 (urgent)</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">3 days / 1 day urgent</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">Apply online</td>
                                        </tr>
                                        <tr>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">e-Visa Double</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">30 (normal) / 60 (urgent)</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">3 days / 1 day urgent</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">Apply online</td>
                                        </tr>
                                        <tr>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">Sticker Visa</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">~65–85 (consular fee)</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">~10 business days</td>
                                          <td className="border border-gray-300 px-4 py-2 text-[#22242A]">Apply via embassy/consulate or visa center</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-lg font-semibold text-[#22242A] mb-3">Official sources:</h5>
                                  <ul className="list-disc list-inside space-y-1 text-[#22242A]">
                                    <li>
                                      <a 
                                        href="https://evisa.mfa.gov.ua/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                      >
                                        Ministry of Foreign Affairs of Ukraine – e-Visa Information
                                      </a>
                                    </li>
                                    <li>
                                      <a 
                                        href="https://india.mfa.gov.ua/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                      >
                                        Embassy of Ukraine in India – Consular Services
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                        </div>
                      )}

                      {/* USA - Special Display */}
                      {selectedCountryInfo && selectedCountryInfo.code === 'US' && (
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                            {t('entry.visa.status')} - {selectedCountryName}
                          </h3>
                          
                          <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <h4 className="text-lg font-semibold text-[#22242A] mb-4">
                              Entry Rules – Citizens of United States (Ordinary Passports)
                            </h4>
                            <p className="text-[#22242A] mb-6">
                              Citizens of United States holding ordinary passports do not require a visa to enter Ukraine for tourism, business, private visits, or other short-term purposes.
                            </p>

                            <div className="space-y-6">
                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Allowed stay:</h5>
                                <p className="text-[#22242A]">Up to 90 days within any 180-day period.</p>
                              </div>

                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Visa-free entry:</h5>
                                <p className="text-[#22242A]">Visa-free entry applies to multiple short visits as long as the total stay does not exceed the 90/180 rule.</p>
                              </div>

                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Purpose of visit:</h5>
                                <p className="text-[#22242A]">Tourism, business meetings, cultural events, conferences, private visits, and other non-remunerated activities.</p>
                              </div>

                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Entry requirements:</h5>
                                <ul className="list-disc list-inside space-y-2 text-[#22242A]">
                                  <li>Valid passport (should be valid for at least 3 months beyond the intended departure date)</li>
                                  <li>Proof of sufficient funds – Ukrainian border officers may request confirmation during entry checks. According to official regulations, travelers should have at least 20 times the subsistence minimum per person per month of stay in Ukraine (update with current year figures; for 2025, approx. UAH 5,260 per month, or ~USD 140). This can be shown as cash, bank statements, credit card limits, or a letter of financial guarantee.</li>
                                  <li>Travel insurance covering the entire period in Ukraine</li>
                                  <li>Return or onward ticket may be requested at border control</li>
                                </ul>
                              </div>

                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Important:</h5>
                                <p className="text-[#22242A]">Stays longer than 90 days require a D-type long-term visa and subsequent residence permit.</p>
                              </div>

                              <div>
                                <h5 className="text-lg font-semibold text-[#22242A] mb-3">Official sources:</h5>
                                <ul className="list-disc list-inside space-y-1 text-[#22242A]">
                                  <li>
                                    <a 
                                      href="https://mfa.gov.ua/en/visa-free-regime" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      Ministry of Foreign Affairs of Ukraine – Visa-Free Regime Information
                                    </a>
                                  </li>
                                  <li>
                                    <a 
                                      href="https://dpsu.gov.ua/en/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      State Border Guard Service of Ukraine – Proof of Funds Requirements
                                    </a>
                                  </li>
                                  <li>
                                    <a 
                                      href="https://usa.mfa.gov.ua/" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 underline"
                                    >
                                      Embassy of Ukraine in United States – Entry Requirements
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Other Countries Information */}
                      {selectedCountryInfo && selectedCountryInfo.code !== 'IN' && selectedCountryInfo.code !== 'US' && (
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                          <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                            {t('entry.visa.status')} - {selectedCountryName}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white rounded-lg p-6 border border-gray-200">
                              <h4 className="text-lg font-semibold text-[#22242A] mb-3">
                                {selectedCountryInfo.visaRequired ? t('entry.visa.required') : t('entry.visa.free')}
                              </h4>
                              <p className="text-[#22242A]">
                                {selectedCountryInfo.visaRequired ? t('entry.visa.required.text') : t('entry.visa.free.text')}
                              </p>
                            </div>
                            
                            <div className="bg-white rounded-lg p-6 border border-gray-200">
                              <h4 className="text-lg font-semibold text-[#22242A] mb-3">
                                {t('entry.max.stay')}
                              </h4>
                              <p className="text-[#22242A]">{selectedCountryInfo.maxStay}</p>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg p-6 border border-gray-200">
                            <h4 className="text-lg font-semibold text-[#22242A] mb-3">
                              {t('entry.notes')}
                            </h4>
                            <p className="text-[#22242A]">{selectedCountryInfo.notes}</p>
                          </div>
                        </div>
                      )}

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-800 text-sm">
                          <strong>{t('entry.tip')}</strong> {t('entry.intro.3')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              )}

              {/* All Sub-topic Blocks - Always visible */}
              <div className="space-y-12">
                {/* General Information Section */}
                <div id="general-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      General Information
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      Citizens of most countries need a valid passport to enter Ukraine. Some nationalities require a visa, while others can enter visa-free for up to 90 days.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {generalRequirements.map((section, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
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
                </div>

                {/* Epidemiological Restrictions Section */}
                <div id="epidemiological-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      {t('entry.subsections.epidemiological.title')}
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      {t('entry.subsections.epidemiological.description')}
                    </p>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-blue-800 mb-6">Current Health Requirements</h4>
                      <div className="space-y-4 text-blue-700">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Currently no COVID-19 restrictions for entry to Ukraine</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>No vaccination certificates required</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>No PCR tests required</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>No quarantine requirements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Curfews and Safety Limitations Section */}
                <div id="curfews-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      {t('entry.subsections.curfews.title')}
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      {t('entry.subsections.curfews.description')}
                    </p>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-yellow-800 mb-6">Current Safety Situation</h4>
                      <div className="space-y-4 text-yellow-700">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Check current travel advisories before planning your trip</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Some regions may have specific restrictions</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Follow local authorities' instructions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Entry with Pets Section */}
                <div id="pets-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      {t('entry.subsections.pets.title')}
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      {t('entry.subsections.pets.description')}
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-green-800 mb-6">Pet Entry Requirements</h4>
                      <div className="space-y-4 text-green-700">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Valid pet passport or health certificate</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Up-to-date vaccinations (especially rabies)</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Microchip identification</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Check specific requirements for your pet type</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Entry with Car Section */}
                <div id="car-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      {t('entry.subsections.car.title')}
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      {t('entry.subsections.car.description')}
                    </p>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-purple-800 mb-6">Vehicle Entry Requirements</h4>
                      <div className="space-y-4 text-purple-700">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Valid vehicle registration documents</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>International driving permit (if required)</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Vehicle insurance valid in Ukraine</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Customs declaration for temporary import</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transit Rules Section */}
                <div id="transit-section" className="w-full">
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-[#22242A] mb-6">
                      {t('entry.subsections.transit.title')}
                    </h3>
                    <p className="text-lg text-[#22242A] mb-8">
                      {t('entry.subsections.transit.description')}
                    </p>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
                      <h4 className="text-xl font-bold text-orange-800 mb-6">Transit Requirements</h4>
                      <div className="space-y-4 text-orange-700">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Valid passport and transit visa (if required)</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Proof of onward travel</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Maximum transit time limits apply</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span>Stay within designated transit areas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-r from-[#D89B5A] to-[#D89B5A]/90">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Important Notice</h2>
          <p className="text-lg mb-8">
            Entry requirements and travel conditions may change rapidly. Always verify current information with official sources before planning your trip to Ukraine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mfa.gov.ua/en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#D89B5A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ministry of Foreign Affairs
            </a>
            <a
              href="https://dmsu.gov.ua/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#D89B5A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              State Migration Service
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
