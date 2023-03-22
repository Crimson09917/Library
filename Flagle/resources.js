
$(document).ready(function() {
    $('2select').select2();
});

const flagDictionary = {
    "afghanistan.svg":{
        ratio:"0.667",
        fullName:"Islamic Republic of Afghanistan"
        },
    "albania.svg":{
        ratio:"0.7143",
        fullName:"Republic of Albania"
        },
    "algeria.svg":{
        ratio:"0.667",
        fullName:"People's Democratic Republic of Algeria"
        },
    "andorra.svg":{
        ratio:"0.7",
        fullName:"Principality of Andorra"
        },
    "angola.svg":{
        ratio:"0.667",
        fullName:"Republic of Angola"
        },
    "antigua_and_barbuda.svg":{
        ratio:"0.667",
        fullName:"Antigua and Barbuda"
        },
    "argentina.svg":{
        ratio:"1.6",
        fullName:"Argentine Republic (Argentina)"
        },
    "armenia.svg":{
        ratio:"0.5",
        fullName:"Republic of Armenia"
        },
    "australia.svg":{
        ratio:"0.5",
        fullName:"Commonwealth of Australia"
        },
    "austria.svg":{
        ratio:"0.667",
        fullName:"Republic of Austria"
        },
    "azerbaijan.svg":{
        ratio:"0.5",
        fullName:"Republic of Azerbaijan"
        },
    "bahamas.svg":{
        ratio:"0.5",
        fullName:"Commonwealth of The Bahamas"
        },
    "bahrain.svg":{
        ratio:"0.6",
        fullName:"Kingdom of Bahrain"
        },
    "bangladesh.svg":{
        ratio:"0.6",
        fullName:"People's Republic of Bangladesh"
        },
    "barbados.svg":{
        ratio:"0.667",
        fullName:"Barbados"
        },
    "belarus.svg":{
        ratio:"0.5",
        fullName:"Republic of Belarus"
        },
    "belgium.svg":{
        ratio:"0.867",
        fullName:"Kingdom of Belgium"
        },
    "belize.svg":{
        ratio:"0.667",
        fullName:"Belize"
        },
    "benin.svg":{
        ratio:"0.667",
        fullName:"Republic of Benin"
        },
    "bhutan.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Bhutan"
        },
    "bolivia.svg":{
        ratio:"0.682",
        fullName:"Plurinational State of Bolivia"
        },
    "bosnia_and_herzegovina.svg":{
        ratio:"0.5",
        fullName:"Bosnia and Herzegovina"
        },
    "botswana.svg":{
        ratio:"0.667",
        fullName:"Republic of Botswana"
        },
    "brazil.svg":{
        ratio:"0.7",
        fullName:"Federative Republic of Brazil"
        },
    "brunei.svg":{
        ratio:"0.5",
        fullName:"Nation of Brunei, the Abode of Peace"
        },
    "bulgaria.svg":{
        ratio:"0.6",
        fullName:"Republic of Bulgaria"
        },
    "burkina_faso.svg":{
        ratio:"0.667",
        fullName:"Burkina Faso"
        },
    "burundi.svg":{
        ratio:"0.6",
        fullName:"Republic of Burundi"
        },
    "cambodia.svg":{
        ratio:"0.64",
        fullName:"Kingdom of Cambodia"
        },
    "cameroon.svg":{
        ratio:"0.667",
        fullName:"Republic of Cameroon"
        },
    "canada.svg":{
        ratio:"0.5",
        fullName:"Canada"
        },
    "cape_verde.svg":{
        ratio:"0.5883",
        fullName:"Republic of Cabo Verde (Cape Verde)"
        },
    "central_african_republic.svg":{
        ratio:"0.667",
        fullName:"Central African Republic"
        },
    "chad.svg":{
        ratio:"0.667",
        fullName:"Republic of Chad"
        },
    "chile.svg":{
        ratio:"0.667",
        fullName:"Republic of Chile"
        },
    "china.svg":{
        ratio:"0.667",
        fullName:"People's Republic of China"
        },
    "colombia.svg":{
        ratio:"0.667",
        fullName:"Republic of Colombia"
        },
    "comoros.svg":{
        ratio:"0.6",
        fullName:"Union of the Comoros"
        },
    "congo_democratic_republic.svg":{
        ratio:"0.667",
        fullName:"Democratic Republic of the Congo"
        },
    "congo_republic.svg":{
        ratio:"0.667",
        fullName:"Republic of the Congo"
        },
    "costa_rica.svg":{
        ratio:"0.6",
        fullName:"Republic of Costa Rica"
        },
    "cote_divoire.svg":{
        ratio:"0.667",
        fullName:"Republic of Côte d'Ivoire (Ivory Coast)"
        },
    "croatia.svg":{
        ratio:"0.5",
        fullName:"Republic of Croatia"
        },
    "cuba.svg":{
        ratio:"0.5",
        fullName:"Republic of Cuba"
        },
    "cyprus.svg":{
        ratio:"0.6",
        fullName:"Republic of Cyprus"
        },
    "czech_republic.svg":{
        ratio:"0.667",
        fullName:"Czech Republic (Czechia)"
        },
    "denmark.svg":{
        ratio:"0.757",
        fullName:"Kingdom of Denmark"
        },
    "djibouti.svg":{
        ratio:"0.667",
        fullName:"Republic of Djibouti"
        },
    "dominica.svg":{
        ratio:"0.5",
        fullName:"Commonwealth of Dominica"
        },
    "dominican_republic.svg":{
        ratio:"0.667",
        fullName:"Dominican Republic"
        },
    "east_timor.svg":{
        ratio:"0.5",
        fullName:"Democratic Republic of Timor-Leste (East Timor)"
        },
    "ecuador.svg":{
        ratio:"0.667",
        fullName:"Republic of Ecuador"
        },
    "egypt.svg":{
        ratio:"0.667",
        fullName:"Arab Republic of Egypt"
        },
    "el_salvador.svg":{
        ratio:"0.5642",
        fullName:"Republic of El Salvador"
        },
    "equatorial_guinea.svg":{
        ratio:"0.667",
        fullName:"Republic of Equatorial Guinea"
        },
    "eritrea.svg":{
        ratio:"0.5",
        fullName:"State of Eritrea"
        },
    "estonia.svg":{
        ratio:"0.66771",
        fullName:"Republic of Estonia"
        },
    "eswatini.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Eswatini (Swaziland)"
        },
    "ethiopia.svg":{
        ratio:"0.5",
        fullName:"Federal Democratic Republic of Ethiopia"
        },
    "fiji.svg":{
        ratio:"0.5",
        fullName:"Republic of Fiji"
        },
    "finland.svg":{
        ratio:"0.6112",
        fullName:"Republic of Finland"
        },
    "france.svg":{
        ratio:"0.667",
        fullName:"French Republic (France)"
        },
    "gabon.svg":{
        ratio:"0.75",
        fullName:"Gabonese Republic (Gabon)"
        },
    "gambia.svg":{
        ratio:"0.5",
        fullName:"Republic of The Gambia"
        },
    "georgia.svg":{
        ratio:"0.667",
        fullName:"Georgia"
        },
    "germany.svg":{
        ratio:"0.6",
        fullName:"Federal Republic of Germany"
        },
    "ghana.svg":{
        ratio:"0.667",
        fullName:"Republic of Ghana"
        },
    "greece.svg":{
        ratio:"0.667",
        fullName:"Hellenic Republic (Greece)"
        },
    "grenada.svg":{
        ratio:"0.6",
        fullName:"Grenada"
        },
    "guatemala.svg":{
        ratio:"0.625",
        fullName:"Republic of Guatemala"
        },
    "guinea.svg":{
        ratio:"0.667",
        fullName:"Republic of Guinea"
        },
    "guinea-bissau.svg":{
        ratio:"0.5",
        fullName:"Republic of Guinea-Bissau"
        },
    "guyana.svg":{
        ratio:"0.6",
        fullName:"Co-operative Republic of Guyana"
        },
    "haiti.svg":{
        ratio:"0.6",
        fullName:"Republic of Haiti"
        },
    "honduras.svg":{
        ratio:"0.5",
        fullName:"Republic of Honduras"
        },
    "hungary.svg":{
        ratio:"0.5",
        fullName:"Hungary"
        },
    "iceland.svg":{
        ratio:"0.72",
        fullName:"Republic of Iceland"
        },
    "india.svg":{
        ratio:"0.667",
        fullName:"Republic of India"
        },
    "indonesia.svg":{
        ratio:"0.667",
        fullName:"Republic of Indonesia"
        },
    "iran.svg":{
        ratio:"0.572",
        fullName:"Islamic Republic of Iran"
        },
    "iraq.svg":{
        ratio:"0.667",
        fullName:"Republic of Iraq"
        },
    "ireland.svg":{
        ratio:"0.5",
        fullName:"Ireland"
        },
    "israel.svg":{
        ratio:"0.7273",
        fullName:"State of Israel"
        },
    "italy.svg":{
        ratio:"0.667",
        fullName:"Italian Republic (Italy)"
        },
    "jamaica.svg":{
        ratio:"0.5",
        fullName:"Jamaica"
        },
    "japan.svg":{
        ratio:"0.667",
        fullName:"Japan"
        },
    "jordan.svg":{
        ratio:"0.5",
        fullName:"Hashemite Kingdom of Jordan"
        },
    "kazakhstan.svg":{
        ratio:"0.5",
        fullName:"Republic of Kazakhstan"
        },
    "kenya.svg":{
        ratio:"0.667",
        fullName:"Republic of Kenya"
        },
    "kiribati.svg":{
        ratio:"0.5",
        fullName:"Republic of Kiribati"
        },
    "kosovo.svg":{
        ratio:"0.7143",
        fullName:"Republic of Kosovo"
        },
    "kuwait.svg":{
        ratio:"0.5",
        fullName:"State of Kuwait"
        },
    "kyrgyzstan.svg":{
        ratio:"0.6",
        fullName:"Kyrgyz Republic (Kyrgyzstan)"
        },
    "laos.svg":{
        ratio:"0.667",
        fullName:"Lao People's Democratic Republic (Laos)"
        },
    "latvia.svg":{
        ratio:"0.5",
        fullName:"Republic of Latvia"
    },
    "lebanon.svg":{
        ratio:"0.667",
        fullName:"Lebanese Republic (Lebanon)"
    },
    "lesotho":{
        ratio:"0.667",
        fullName:"Kingdom of Lesotho"
    },
    "liberia.svg":{
        ratio:"0.5264",
        fullName:"Republic of Liberia"
    },
    "libya.svg":{
        ratio:"0.5",
        fullName:"State of Libya"
    },
    "liechtenstein.svg":{
        ratio:"0.6",
        fullName:"Principality of Liechtenstein"
    },
    "lithuania.svg":{
        ratio:"0.6",
        fullName:"Republic of Lithuania"
    },
    "luxembourg.svg":{
        ratio:"0.6",
        fullName:"Grand Duchy of Luxembourg"
    },
    "madagascar.svg":{
        ratio:"0.667",
        fullName:"Republic of Madagascar"
    },
    "malawi.svg":{
        ratio:"0.667",
        fullName:"Republic of Malawi"
    },
    "malaysia.svg":{
        ratio:"0.5",
        fullName:"Malaysia"
    },
    "maldives.svg":{
        ratio:"0.667",
        fullName:"Republic of Maldives"
    },
    "mali.svg":{
        ratio:"0.667",
        fullName:"Republic of Mali"
    },
    "malta.svg":{
        ratio:"0.667",
        fullName:"Republic of Malta"
    },
    "marshall_islands.svg":{
        ratio:"0.5264",
        fullName:"Republic of the Marshall Islands"
    },
    "mauritania.svg":{
        ratio:"0.667",
        fullName:"Islamic Republic of Mauritania"
    },
    "mauritius.svg":{
        ratio:"0.667",
        fullName:"Republic of Mauritius"
    },
    "mexico.svg":{
        ratio:"0.5715",
        fullName:"United Mexican States (Mexico)"
    },
    "micronesia.svg":{
        ratio:"0.527",
        fullName:"Federated States of Micronesia"
    },
    "moldova.svg":{
        ratio:"0.5",
        fullName:"Republic of Moldova"
    },
    "monaco.svg":{
        ratio:"0.8",
        fullName:"Principality of Monaco"
    },
    "mongolia.svg":{
        ratio:"0.5",
        fullName:"Mongolia"
    },
    "montenegro.svg":{
        ratio:"0.5",
        fullName:"Montenegro"
    },
    "morocco.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Morocco"
    },
    "mozambique.svg":{
        ratio:"0.667",
        fullName:"Republic of Mozambique"
    },
    "myanmar.svg":{
        ratio:"0.667",
        fullName:"Republic of the Union of Myanmar (Burma)"
    },
    "namibia.svg":{
        ratio:"0.667",
        fullName:"Republic of Namibia"
    },
    "nauru.svg":{
        ratio:"0.5",
        fullName:"Republic of Nauru"
    },
    "nepal.svg":{
        ratio:"1.22",
        fullName:"Federated Democratic Republic of Nepal"
    },
    "netherlands.svg":{
        ratio:"0.667",
        fullName:"Kingdom of the Netherlands"
    },
    "new_zealand.svg":{
        ratio:"0.5",
        fullName:"New Zealand"
    },
    "nicaragua.svg":{
        ratio:"0.6",
        fullName:"Republic of Nicaragua"
    },
    "niger.svg":{
        ratio:"0.8572",
        fullName:"Republic of the Niger"
    },
    "nigeria.svg":{
        ratio:"0.5",
        fullName:"Federal Republic of Nigeria"
    },
    "north_macedonia.svg":{
        ratio:"0.5",
        fullName:"Republic of North Macedonia"
    },
    "north_korea.svg":{
        ratio:"0.5",
        fullName:"Democratic People's Republic of Korea (North Korea)"
    },
    "norway.svg":{
        ratio:"0.7273",
        fullName:"Kingdom of Norway"
    },
    "oman.svg":{
        ratio:"0.5",
        fullName:"Sultanate of Oman"
    },
    "pakistan.svg":{
        ratio:"0.667",
        fullName:"Islamic Republic of Pakistan"
    },
    "palau.svg":{
        ratio:"0.625",
        fullName:"Republic of Palau"
    },
    "palestine.svg":{
        ratio:"0.5",
        fullName:"State of Palestine"
    },
    "panama.svg":{
        ratio:"0.667",
        fullName:"Republic of Panama"
    },
    "papua_new_guinea.svg":{
        ratio:"0.75",
        fullName:"Independent State of Papua New Guinea"
    },
    "paraguay.svg":{
        ratio:"0.55",
        fullName:"Republic of Paraguay"
    },
    "peru.svg":{
        ratio:"0.667",
        fullName:"Republic of Peru"
    },
    "philippines.svg":{
        ratio:"0.5",
        fullName:"Republic of the Philippines"
    },
    "poland.svg":{
        ratio:"0.625",
        fullName:"Republic of Poland"
    },
    "portugal.svg":{
        ratio:"0.667",
        fullName:"Portuguese Republic (Portugal)"
    },
    "qatar.svg":{
        ratio:"0.3930",
        fullName:"State of Qatar"
    },
    "romania.svg":{
        ratio:"0.667",
        fullName:"Romania"
    },
    "russia.svg":{
        ratio:"0.667",
        fullName:"Russian Federation (Russia)"
    },
    "rwanda.svg":{
        ratio:"0.667",
        fullName:"Republic of Rwanda"
    },
    "st_kitts.svg":{
        ratio:"0.667",
        fullName:"Federation of Saint Christopher and Nevis (St. Kitts and Nevis)"
    },
    "st_lucia.svg":{
        ratio:"0.5",
        fullName:"Saint Lucia"
    },
    "st_vincent.svg":{
        ratio:"0.667",
        fullName:"Saint Vincent and the Grenadines"
    },
    "samoa.svg":{
        ratio:"0.5",
        fullName:"Independent State of Samoa"
    },
    "san_marino.svg":{
        ratio:"0.75",
        fullName:"Republic of San Marino"
    },
    "sao_tome.svg":{
        ratio:"0.5",
        fullName:"Democratic Republic of São Tomé and Príncipe (Sao Tome)"
    },
    "saudi_arabia.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Saudi Arabia"
    },
    "senegal.svg":{
        ratio:"0.667",
        fullName:"Republic of Senegal"
    },
    "serbia.svg":{
        ratio:"0.667",
        fullName:"Republic of Serbia"
    },
    "seychelles.svg":{
        ratio:"0.5",
        fullName:"Republic of Seychelles"
    },
    "sierra_leone.svg":{
        ratio:"0.667",
        fullName:"Republic of Sierra Leone"
    },
    "singapore.svg":{
        ratio:"0.667",
        fullName:"Republic of Singapore"
    },
    "slovakia.svg":{
        ratio:"0.667",
        fullName:"Slovak Republic (Slovakia)"
    },
    "slovenia.svg":{
        ratio:"0.5",
        fullName:"Republic of Slovenia"
    },
    "solomon_islands.svg":{
        ratio:"0.5",
        fullName:"Solomon Islands"
    },
    "somalia.svg":{
        ratio:"0.667",
        fullName:"Federal Republic of Somalia"
    },
    "south_africa.svg":{
        ratio:"0.667",
        fullName:"Republic of South Africa"
    },
    "south_korea.svg":{
        ratio:"0.667",
        fullName:"Republic of Korea (South Korea)"
    },
    "south_sudan.svg":{
        ratio:"0.5",
        fullName:"Republic of South Sudan"
    },
    "spain.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Spain"
    },
    "sri_lanka.svg":{
        ratio:"0.5",
        fullName:"Democratic Socialist Republic of Sri Lanka"
    },
    "sudan.svg":{
        ratio:"0.5",
        fullName:"Republic of the Sudan"
    },
    "suriname.svg":{
        ratio:"0.667",
        fullName:"Republic of Suriname"
    },
    "sweden.svg":{
        ratio:"0.625",
        fullName:"Kingdom of Sweden"
    },
    "switzerland.svg":{
        ratio:"1",
        fullName:"Swiss Confederation (Switzerland)"
    },
    "syria.svg":{
        ratio:"0.667",
        fullName:"Syrian Arab Republic (Syria)"
    },
    "taiwan.svg":{
        ratio:"0.667",
        fullName:"Republic of China (Taiwan)"
    },
    "tajikistan.svg":{
        ratio:"0.5",
        fullName:"Republic of Tajikistan"
    },
    "tanzania.svg":{
        ratio:"0.667",
        fullName:"United Republic of Tanzania"
    },
    "thailand.svg":{
        ratio:"0.667",
        fullName:"Kingdom of Thailand"
    },
    "togo.svg":{
        ratio:"0.6181",
        fullName:"Togolese Republic (Togo)"
    },
    "tonga.svg":{
        ratio:"0.5",
        fullName:"Kingdom of Tonga"
    },
    "trinidad_and_tobago.svg":{
        ratio:"0.6",
        fullName:"Republic of Trinidad and Tobago"
    },
    "tunisia.svg":{
        ratio:"0.667",
        fullName:"Republic of Tunisia"
    },
    "turkey.svg":{
        ratio:"0.667",
        fullName:"Republic of Türkiye (Turkey)"
    },
    "turkmenistan.svg":{
        ratio:"0.667",
        fullName:"Turkmenistan"
    },
    "tuvalu.svg":{
        ratio:"0.5",
        fullName:"Tuvalu"
    },
    "uganda.svg":{
        ratio:"0.667",
        fullName:"Republic of Uganda"
    },
    "ukraine.svg":{
        ratio:"0.667",
        fullName:"Ukraine"
    },
    "united_arab_emirates.svg":{
        ratio:"0.5",
        fullName:"United Arab Emirates"
    },
    "united_kingdom.svg":{
        ratio:"0.5",
        fullName:"United Kingdom of Great Britain and Northern Ireland (UK)"
    },
    "united_states.svg":{
        ratio:"0.527",
        fullName:"United States of America (USA)"
    },
    "uruguay.svg":{
        ratio:"0.667",
        fullName:"Oriental Republic of Uruguay"
    },
    "uzbekistan.svg":{
        ratio:"0.5",
        fullName:"Republic of Uzbekistan"
    },
    "vanuatu.svg":{
        ratio:"0.667",
        fullName:"Republic of Vanuatu"
    },
    "vatican_city.svg":{
        ratio:"1",
        fullName:"Vatican City State"
    },
    "venezuela.svg":{
        ratio:"0.667",
        fullName:"Bolivarian Republic of Venezuela (Bolivia)"
    },
    "vietnam.svg":{
        ratio:"0.667",
        fullName:"Socialist Republic of Vietnam"
    },
    "yemen.svg":{
        ratio:"0.667",
        fullName:"Republic of Yemen"
    },
    "zambia.svg":{
        ratio:"0.667",
        fullName:"Republic of Zambia"
    },
    "zimbabwe.svg":{
        ratio:"0.5",
        fullName:"Republic of Zimbabwe"
    }
}
