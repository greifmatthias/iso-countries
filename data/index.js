const countryData = {
    'AF': { name: "Afghanistan", isoThree: "AFG" },
    'AX': { name: "Aland Islands", isoThree: "ALA" },
    'AL': { name: "Albania", isoThree: "ALB" },
    'DZ': { name: "Algeria", isoThree: "DZA" },
    'AS': { name: "American Samoa", isoThree: "ASM" },
    'AD': { name: "Andorra", isoThree: "AND" },
    'AO': { name: "Angola", isoThree: "AGO" },
    'AI': { name: "Anguilla", isoThree: "AIA" },
    'AQ': { name: "Antarctica", isoThree: "ATA" },
    'AG': { name: "Antigua And Barbuda", isoThree: "ATG" },
    'AR': { name: "Argentina", isoThree: "ARG" },
    'AM': { name: "Armenia", isoThree: "ARM" },
    'AW': { name: "Aruba", isoThree: "ABW" },
    'AU': { name: "Australia", isoThree: "AUS" },
    'AT': { name: "Austria", isoThree: "AUT" },
    'AZ': { name: "Azerbaijan", isoThree: "AZE" },
    'BS': { name: "Bahamas", isoThree: "BHS" },
    'BH': { name: "Bahrain", isoThree: "BHR" },
    'BD': { name: "Bangladesh", isoThree: "BGD" },
    'BB': { name: "Barbados", isoThree: "BRB" },
    'BY': { name: "Belarus", isoThree: "BLR" },
    'BE': { name: "Belgium", isoThree: "BEL" },
    'BZ': { name: "Belize", isoThree: "BLZ" },
    'BJ': { name: "Benin", isoThree: "BEN" },
    'BM': { name: "Bermuda", isoThree: "BMU" },
    'BT': { name: "Bhutan", isoThree: "BTN" },
    'BO': { name: "Bolivia", isoThree: "BOL" },
    'BQ': { isoThree: "BES" },
    'BA': { name: "Bosnia And Herzegovina", isoThree: "BIH" },
    'BW': { name: "Botswana", isoThree: "BWA" },
    'BV': { name: "Bouvet Island", isoThree: "BVT" },
    'BR': { name: "Brazil", isoThree: "BRA" },
    'IO': { name: "British Indian Ocean Territory", isoThree: "IOT" },
    'BN': { name: "Brunei Darussalam", isoThree: "BRN" },
    'BG': { name: "Bulgaria", isoThree: "BGR" },
    'BF': { name: "Burkina Faso", isoThree: "BFA" },
    'BI': { name: "Burundi", isoThree: "BDI" },
    'CV': { name: "Cape Verde", isoThree: "CPV" },
    'KH': { name: "Cambodia", isoThree: "KHM" },
    'CM': { name: "Cameroon", isoThree: "CMR" },
    'CA': { name: "Canada", isoThree: "CAN" },
    'KY': { name: "Cayman Islands", isoThree: "CYM" },
    'CF': { name: "Central African Republic", isoThree: "CAF" },
    'TD': { name: "Chad", isoThree: "TCD" },
    'CL': { name: "Chile", isoThree: "CHL" },
    'CN': { name: "China", isoThree: "CHN" },
    'CX': { name: "Christmas Island", isoThree: "CXR" },
    'CC': { name: "Cocos (Keeling) Islands", isoThree: "CCK" },
    'CO': { name: "Colombia", isoThree: "COL" },
    'KM': { name: "Comoros", isoThree: "COM" },
    'CG': { name: "Congo", isoThree: "COG" },
    'CD': { name: "Congo, Democratic Republic", isoThree: "COD" },
    'CK': { name: "Cook Islands", isoThree: "COK" },
    'CR': { name: "Costa Rica", isoThree: "CRI" },
    'CI': { name: "Cote D'Ivoire", isoThree: "CIV" },
    'HR': { name: "Croatia", isoThree: "HRV" },
    'CU': { name: "Cuba", isoThree: "CUB" },
    'CW': { isoThree: "CUW" },
    'CY': { name: "Cyprus", isoThree: "CYP" },
    'CZ': { name: "Czech Republic", isoThree: "CZE" },
    'DK': { name: "Denmark", isoThree: "DNK" },
    'DJ': { name: "Djibouti", isoThree: "DJI" },
    'DM': { name: "Dominica", isoThree: "DMA" },
    'DO': { name: "Dominican Republic", isoThree: "DOM" },
    'EC': { name: "Ecuador", isoThree: "ECU" },
    'EG': { name: "Egypt", isoThree: "EGY" },
    'SV': { name: "El Salvador", isoThree: "SLV" },
    'GQ': { name: "Equatorial Guinea", isoThree: "GNQ" },
    'ER': { name: "Eritrea", isoThree: "ERI" },
    'EE': { name: "Estonia", isoThree: "EST" },
    'ET': { name: "Ethiopia", isoThree: "ETH" },
    'FK': { name: "Falkland Islands (Malvinas)", isoThree: "FLK" },
    'FO': { name: "Faroe Islands", isoThree: "FRO" },
    'FJ': { name: "Fiji", isoThree: "FJI" },
    'FI': { name: "Finland", isoThree: "FIN" },
    'FR': { name: "France", isoThree: "FRA" },
    'GF': { name: "French Guiana", isoThree: "GUF" },
    'PF': { name: "French Polynesia", isoThree: "PYF" },
    'TF': { name: "French Southern Territories", isoThree: "ATF" },
    'GA': { name: "Gabon", isoThree: "GAB" },
    'GM': { name: "Gambia", isoThree: "GMB" },
    'GE': { name: "Georgia", isoThree: "GEO" },
    'DE': { name: "Germany", isoThree: "DEU" },
    'GH': { name: "Ghana", isoThree: "GHA" },
    'GI': { name: "Gibraltar", isoThree: "GIB" },
    'GR': { name: "Greece", isoThree: "GRC" },
    'GL': { name: "Greenland", isoThree: "GRL" },
    'GD': { name: "Grenada", isoThree: "GRD" },
    'GP': { name: "Guadeloupe", isoThree: "GLP" },
    'GU': { name: "Guam", isoThree: "GUM" },
    'GT': { name: "Guatemala", isoThree: "GTM" },
    'GG': { name: "Guernsey", isoThree: "GGY" },
    'GN': { name: "Guinea", isoThree: "GIN" },
    'GW': { name: "Guinea-Bissau", isoThree: "GNB" },
    'GY': { name: "Guyana", isoThree: "GUY" },
    'HT': { name: "Haiti", isoThree: "HTI" },
    'HM': { name: "Heard Island & Mcdonald Islands", isoThree: "HMD" },
    'VA': { name: "Holy See (Vatican City State)", isoThree: "VAT" },
    'HN': { name: "Honduras", isoThree: "HND" },
    'HK': { name: "Hong Kong", isoThree: "HKG" },
    'HU': { name: "Hungary", isoThree: "HUN" },
    'IS': { name: "Iceland", isoThree: "ISL" },
    'IN': { name: "India", isoThree: "IND" },
    'ID': { name: "Indonesia", isoThree: "IDN" },
    'IR': { name: "Iran, Islamic Republic Of", isoThree: "IRN" },
    'IQ': { name: "Iraq", isoThree: "IRQ" },
    'IE': { name: "Ireland", isoThree: "IRL" },
    'IM': { name: "Isle Of Man", isoThree: "IMN" },
    'IL': { name: "Israel", isoThree: "ISR" },
    'IT': { name: "Italy", isoThree: "ITA" },
    'JM': { name: "Jamaica", isoThree: "JAM" },
    'JP': { name: "Japan", isoThree: "JPN" },
    'JE': { name: "Jersey", isoThree: "JEY" },
    'JO': { name: "Jordan", isoThree: "JOR" },
    'KZ': { name: "Kazakhstan", isoThree: "KAZ" },
    'KE': { name: "Kenya", isoThree: "KEN" },
    'KI': { name: "Kiribati", isoThree: "KIR" },
    'KP': { name: "North Korea", isoThree: "PRK" },
    'KR': { name: "South Korea", isoThree: "KOR" },
    'KW': { name: "Kuwait", isoThree: "KWT" },
    'KG': { name: "Kyrgyzstan", isoThree: "KGZ" },
    'LA': { name: "Lao People's Democratic Republic", isoThree: "LAO" },
    'LV': { name: "Latvia", isoThree: "LVA" },
    'LB': { name: "Lebanon", isoThree: "LBN" },
    'LS': { name: "Lesotho", isoThree: "LSO" },
    'LR': { name: "Liberia", isoThree: "LBR" },
    'LY': { name: "Libyan Arab Jamahiriya", isoThree: "LBY" },
    'LI': { name: "Liechtenstein", isoThree: "LIE" },
    'LT': { name: "Lithuania", isoThree: "LTU" },
    'LU': { name: "Luxembourg", isoThree: "LUX" },
    'MO': { name: "Macao", isoThree: "MAC" },
    'MK': { name: "Macedonia", isoThree: "MKD" },
    'MG': { name: "Madagascar", isoThree: "MDG" },
    'MW': { name: "Malawi", isoThree: "MWI" },
    'MY': { name: "Malaysia", isoThree: "MYS" },
    'MV': { name: "Maldives", isoThree: "MDV" },
    'ML': { name: "Mali", isoThree: "MLI" },
    'MT': { name: "Malta", isoThree: "MLT" },
    'MH': { name: "Marshall Islands", isoThree: "MHL" },
    'MQ': { name: "Martinique", isoThree: "MTQ" },
    'MR': { name: "Mauritania", isoThree: "MRT" },
    'MU': { name: "Mauritius", isoThree: "MUS" },
    'YT': { name: "Mayotte", isoThree: "MYT" },
    'MX': { name: "Mexico", isoThree: "MEX" },
    'FM': { name: "Micronesia, Federated States Of", isoThree: "FSM" },
    'MD': { name: "Moldova", isoThree: "MDA" },
    'MC': { name: "Monaco", isoThree: "MCO" },
    'MN': { name: "Mongolia", isoThree: "MNG" },
    'ME': { name: "Montenegro", isoThree: "MNE" },
    'MS': { name: "Montserrat", isoThree: "MSR" },
    'MA': { name: "Morocco", isoThree: "MAR" },
    'MZ': { name: "Mozambique", isoThree: "MOZ" },
    'MM': { name: "Myanmar", isoThree: "MMR" },
    'NA': { name: "Namibia", isoThree: "NAM" },
    'NR': { name: "Nauru", isoThree: "NRU" },
    'NP': { name: "Nepal", isoThree: "NPL" },
    'NL': { name: "Netherlands", isoThree: "NLD" },
    'NC': { name: "New Caledonia", isoThree: "NCL" },
    'NZ': { name: "New Zealand", isoThree: "NZL" },
    'NI': { name: "Nicaragua", isoThree: "NIC" },
    'NE': { name: "Niger", isoThree: "NER" },
    'NG': { name: "Nigeria", isoThree: "NGA" },
    'NU': { name: "Niue", isoThree: "NIU" },
    'NF': { name: "Norfolk Island", isoThree: "NFK" },
    'MP': { name: "Northern Mariana Islands", isoThree: "MNP" },
    'NO': { name: "Norway", isoThree: "NOR" },
    'OM': { name: "Oman", isoThree: "OMN" },
    'PK': { name: "Pakistan", isoThree: "PAK" },
    'PW': { name: "Palau", isoThree: "PLW" },
    'PS': { name: "Palestinian Territory, Occupied", isoThree: "PSE" },
    'PA': { name: "Panama", isoThree: "PAN" },
    'PG': { name: "Papua New Guinea", isoThree: "PNG" },
    'PY': { name: "Paraguay", isoThree: "PRY" },
    'PE': { name: "Peru", isoThree: "PER" },
    'PH': { name: "Philippines", isoThree: "PHL" },
    'PN': { name: "Pitcairn", isoThree: "PCN" },
    'PL': { name: "Poland", isoThree: "POL" },
    'PT': { name: "Portugal", isoThree: "PRT" },
    'PR': { name: "Puerto Rico", isoThree: "PRI" },
    'QA': { name: "Qatar", isoThree: "QAT" },
    'RE': { name: "Reunion", isoThree: "REU" },
    'RO': { name: "Romania", isoThree: "ROU" },
    'RU': { name: "Russian Federation", isoThree: "RUS" },
    'RW': { name: "Rwanda", isoThree: "RWA" },
    'BL': { name: "Saint Barthelemy", isoThree: "BLM" },
    'SH': { name: "Saint Helena", isoThree: "SHN" },
    'KN': { name: "Saint Kitts And Nevis", isoThree: "KNA" },
    'LC': { name: "Saint Lucia", isoThree: "LCA" },
    'MF': { name: "Saint Martin", isoThree: "MAF" },
    'PM': { name: "Saint Pierre And Miquelon", isoThree: "SPM" },
    'VC': { name: "Saint Vincent And Grenadines", isoThree: "VCT" },
    'WS': { name: "Samoa", isoThree: "WSM" },
    'SM': { name: "San Marino", isoThree: "SMR" },
    'ST': { name: "Sao Tome And Principe", isoThree: "STP" },
    'SA': { name: "Saudi Arabia", isoThree: "SAU" },
    'SN': { name: "Senegal", isoThree: "SEN" },
    'RS': { name: "Serbia", isoThree: "SRB" },
    'SC': { name: "Seychelles", isoThree: "SYC" },
    'SL': { name: "Sierra Leone", isoThree: "SLE" },
    'SG': { name: "Singapore", isoThree: "SGP" },
    'SX': { isoThree: "SXM" },
    'SK': { name: "Slovakia", isoThree: "SVK" },
    'SI': { name: "Slovenia", isoThree: "SVN" },
    'SB': { name: "Solomon Islands", isoThree: "SLB" },
    'SO': { name: "Somalia", isoThree: "SOM" },
    'ZA': { name: "South Africa", isoThree: "ZAF" },
    'GS': { name: "South Georgia And Sandwich Isl.", isoThree: "SGS" },
    'SS': { isoThree: "SSD" },
    'ES': { name: "Spain", isoThree: "ESP" },
    'LK': { name: "Sri Lanka", isoThree: "LKA" },
    'SD': { name: "Sudan", isoThree: "SDN" },
    'SR': { name: "Suriname", isoThree: "SUR" },
    'SJ': { name: "Svalbard And Jan Mayen", isoThree: "SJM" },
    'SZ': { name: "Swaziland", isoThree: "SWZ" },
    'SE': { name: "Sweden", isoThree: "SWE" },
    'CH': { name: "Switzerland", isoThree: "CHE" },
    'SY': { name: "Syrian Arab Republic", isoThree: "SYR" },
    'TW': { name: "Taiwan", isoThree: "TWN" },
    'TJ': { name: "Tajikistan", isoThree: "TJK" },
    'TZ': { name: "Tanzania", isoThree: "TZA" },
    'TH': { name: "Thailand", isoThree: "THA" },
    'TL': { name: "Timor-Leste", isoThree: "TLS" },
    'TG': { name: "Togo", isoThree: "TGO" },
    'TK': { name: "Tokelau", isoThree: "TKL" },
    'TO': { name: "Tonga", isoThree: "TON" },
    'TT': { name: "Trinidad And Tobago", isoThree: "TTO" },
    'TN': { name: "Tunisia", isoThree: "TUN" },
    'TR': { name: "Turkey", isoThree: "TUR" },
    'TM': { name: "Turkmenistan", isoThree: "TKM" },
    'TC': { name: "Turks And Caicos Islands", isoThree: "TCA" },
    'TV': { name: "Tuvalu", isoThree: "TUV" },
    'UG': { name: "Uganda", isoThree: "UGA" },
    'UA': { name: "Ukraine", isoThree: "UKR" },
    'AE': { name: "United Arab Emirates", isoThree: "ARE" },
    'GB': { name: "United Kingdom", isoThree: "GBR" },
    'US': { name: "United States", isoThree: "USA" },
    'UM': { name: "United States Outlying Islands", isoThree: "UMI" },
    'UY': { name: "Uruguay", isoThree: "URY" },
    'UZ': { name: "Uzbekistan", isoThree: "UZB" },
    'VU': { name: "Vanuatu", isoThree: "VUT" },
    'VE': { name: "Venezuela", isoThree: "VEN" },
    'VN': { name: "Viet Nam", isoThree: "VNM" },
    'VG': { name: "Virgin Islands, British", isoThree: "VGB" },
    'VI': { name: "Virgin Islands, U.S.", isoThree: "VIR" },
    'WF': { name: "Wallis And Futuna", isoThree: "WLF" },
    'EH': { name: "Western Sahara", isoThree: "ESH" },
    'YE': { name: "Yemen", isoThree: "YEM" },
    'ZM': { name: "Zambia", isoThree: "ZMB" },
    'ZW': { name: "Zimbabwe", isoThree: "ZWE" }
};

module.exports = countryData;