import type { CountryData } from "../types/country";

export const emojiFlag = (countryCode: string): string => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export const isWindows = (): boolean => /windows/i.test(navigator.userAgent);

export const countries: Array<CountryData> = [
  {
    "ru": "Остров Вознесения",
    "en": "Ascension Island",
    "iso2": "AC",
    "dial": "+247",
    "mask": [
      "####"
    ]
  },
  {
    "ru": "Австралия",
    "en": "Australia",
    "iso2": "AU",
    "dial": "+61",
    "mask": [
      "#-####-####"
    ]
  },
  {
    "ru": "Австрия",
    "en": "Austria",
    "iso2": "AT",
    "dial": "+43",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Азербайджан",
    "en": "Azerbaijan",
    "iso2": "AZ",
    "dial": "+994",
    "mask": [
      "##-###-##-##"
    ]
  },
  {
    "ru": "Аландские острова",
    "en": "Aland Islands",
    "iso2": "AX",
    "dial": "+358",
    "mask": [
      "(###)###-##-##"
    ]
  },
  {
    "ru": "Албания",
    "en": "Albania",
    "iso2": "AL",
    "dial": "+355",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Алжир",
    "en": "Algeria",
    "iso2": "DZ",
    "dial": "+213",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Виргинские Острова (США)",
    "en": "Virgin Islands, U.S.",
    "iso2": "VI",
    "dial": "+1340",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Американское Самоа",
    "en": "American Samoa",
    "iso2": "AS",
    "dial": "+1684",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Ангилья",
    "en": "Anguilla",
    "iso2": "AI",
    "dial": "+1264",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Ангола",
    "en": "Angola",
    "iso2": "AO",
    "dial": "+244",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Андорра",
    "en": "Andorra",
    "iso2": "AD",
    "dial": "+376",
    "mask": [
      "###-###"
    ]
  },
  {
    "ru": "Антарктида",
    "en": "Antarctica",
    "iso2": "AQ",
    "dial": "+672",
    "mask": [
      "1##-###"
    ]
  },
  {
    "ru": "Антигуа и Барбуда",
    "en": "Antigua and Barbuda",
    "iso2": "AG",
    "dial": "+1268",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Аргентина",
    "en": "Argentina",
    "iso2": "AR",
    "dial": "+54",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Армения",
    "en": "Armenia",
    "iso2": "AM",
    "dial": "+374",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Аруба",
    "en": "Aruba",
    "iso2": "AW",
    "dial": "+297",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Афганистан",
    "en": "Afghanistan",
    "iso2": "AF",
    "dial": "+93",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Багамы",
    "en": "Bahamas",
    "iso2": "BS",
    "dial": "+1242",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Бангладеш",
    "en": "Bangladesh",
    "iso2": "BD",
    "dial": "+880",
    "mask": [
      "1###-######"
    ]
  },
  {
    "ru": "Барбадос",
    "en": "Barbados",
    "iso2": "BB",
    "dial": "+1246",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Бахрейн",
    "en": "Bahrain",
    "iso2": "BH",
    "dial": "+973",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Белиз",
    "en": "Belize",
    "iso2": "BZ",
    "dial": "+501",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Белоруссия",
    "en": "Belarus",
    "iso2": "BY",
    "dial": "+375",
    "mask": [
      "(##)###-##-##"
    ]
  },
  {
    "ru": "Бельгия",
    "en": "Belgium",
    "iso2": "BE",
    "dial": "+32",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Бенин",
    "en": "Benin",
    "iso2": "BJ",
    "dial": "+229",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Бермуды",
    "en": "Bermuda",
    "iso2": "BM",
    "dial": "+1441",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Болгария",
    "en": "Bulgaria",
    "iso2": "BG",
    "dial": "+359",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Боливия",
    "en": "Bolivia",
    "iso2": "BO",
    "dial": "+591",
    "mask": [
      "#-###-####"
    ]
  },
  {
    "ru": "Бонэйр, Синт-Эстатиус и Саба",
    "en": "Bonaire, Sint Eustatius en Saba",
    "iso2": "BQ",
    "dial": "+599",
    "mask": [
      "7## ####",
      "4## ####",
      "3## ####"
    ]
  },
  {
    "ru": "Босния и Герцеговина",
    "en": "Bosnia and Herzegovina",
    "iso2": "BA",
    "dial": "+387",
    "mask": [
      "##-####",
      "##-#####"
    ]
  },
  {
    "ru": "Ботсвана",
    "en": "Botswana",
    "iso2": "BW",
    "dial": "+267",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Бразилия",
    "en": "Brazil",
    "iso2": "BR",
    "dial": "+55",
    "mask": [
      "(##)####-####",
      "(##)#####-####"
    ]
  },
  {
    "ru": "Британская территория в Индийском океане",
    "en": "British Indian Ocean Territory",
    "iso2": "IO",
    "dial": "+246",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Британские Виргинские острова",
    "en": "Virgin Islands, British",
    "iso2": "VG",
    "dial": "+1284",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Бруней",
    "en": "Brunei Darussalam",
    "iso2": "BN",
    "dial": "+673",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Буркина-Фасо",
    "en": "Burkina Faso",
    "iso2": "BF",
    "dial": "+226",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Бурунди",
    "en": "Burundi",
    "iso2": "BI",
    "dial": "+257",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Бутан",
    "en": "Bhutan",
    "iso2": "BT",
    "dial": "+975",
    "mask": [
      "17-###-###",
      "77-###-###",
      "#-###-###"
    ]
  },
  {
    "ru": "Вануату",
    "en": "Vanuatu",
    "iso2": "VU",
    "dial": "+678",
    "mask": [
      "#####",
      "##-#####"
    ]
  },
  {
    "ru": "Ватикан",
    "en": "Holy See (Vatican City State)",
    "iso2": "VA",
    "dial": "+379",
    "mask": [
      "06 698#####"
    ]
  },
  {
    "ru": "Великобритания",
    "en": "United Kingdom",
    "iso2": "GB",
    "dial": "+44",
    "mask": [
      "##-####-####"
    ]
  },
  {
    "ru": "Венгрия",
    "en": "Hungary",
    "iso2": "HU",
    "dial": "+36",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Венесуэла",
    "en": "Venezuela, Bolivarian Republic of Venezuela",
    "iso2": "VE",
    "dial": "+58",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Восточный Тимор",
    "en": "Timor-Leste",
    "iso2": "TL",
    "dial": "+670",
    "mask": [
      "###-####",
      "77#-#####",
      "78#-#####"
    ]
  },
  {
    "ru": "Вьетнам",
    "en": "Vietnam",
    "iso2": "VN",
    "dial": "+84",
    "mask": [
      "##-####-###",
      "(###)####-###"
    ]
  },
  {
    "ru": "Габон",
    "en": "Gabon",
    "iso2": "GA",
    "dial": "+241",
    "mask": [
      "#-##-##-##"
    ]
  },
  {
    "ru": "Гаити",
    "en": "Haiti",
    "iso2": "HT",
    "dial": "+509",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Гайана",
    "en": "Guyana",
    "iso2": "GY",
    "dial": "+592",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Гамбия",
    "en": "Gambia",
    "iso2": "GM",
    "dial": "+220",
    "mask": [
      "(###)##-##"
    ]
  },
  {
    "ru": "Гана",
    "en": "Ghana",
    "iso2": "GH",
    "dial": "+233",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Гваделупа",
    "en": "Guadeloupe",
    "iso2": "GP",
    "dial": "+590",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Гватемала",
    "en": "Guatemala",
    "iso2": "GT",
    "dial": "+502",
    "mask": [
      "#-###-####"
    ]
  },
  {
    "ru": "Гвиана",
    "en": "French Guiana",
    "iso2": "GF",
    "dial": "+594",
    "mask": [
      "#####-####"
    ]
  },
  {
    "ru": "Гвинея",
    "en": "Guinea",
    "iso2": "GN",
    "dial": "+224",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Гвинея-Бисау",
    "en": "Guinea-Bissau",
    "iso2": "GW",
    "dial": "+245",
    "mask": [
      "#-######"
    ]
  },
  {
    "ru": "Германия",
    "en": "Germany",
    "iso2": "DE",
    "dial": "+49",
    "mask": [
      "###-###",
      "(###) ##-##",
      "(###) ##-###",
      "(###) ##-####",
      "(###) ###-####",
      "(####) ###-####"
    ]
  },
  {
    "ru": "Гернси",
    "en": "Guernsey",
    "iso2": "GG",
    "dial": "+44",
    "mask": [
      "(####)######"
    ]
  },
  {
    "ru": "Гибралтар",
    "en": "Gibraltar",
    "iso2": "GI",
    "dial": "+350",
    "mask": [
      "###-#####"
    ]
  },
  {
    "ru": "Гондурас",
    "en": "Honduras",
    "iso2": "HN",
    "dial": "+504",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Гонконг",
    "en": "Hong Kong",
    "iso2": "HK",
    "dial": "+852",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Гренада",
    "en": "Grenada",
    "iso2": "GD",
    "dial": "+1473",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Гренландия",
    "en": "Greenland",
    "iso2": "GL",
    "dial": "+299",
    "mask": [
      "##-##-##"
    ]
  },
  {
    "ru": "Греция",
    "en": "Greece",
    "iso2": "GR",
    "dial": "+30",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Грузия",
    "en": "Georgia",
    "iso2": "GE",
    "dial": "+995",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Гуам",
    "en": "Guam",
    "iso2": "GU",
    "dial": "+1671",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Дания",
    "en": "Denmark",
    "iso2": "DK",
    "dial": "+45",
    "mask": [
      "##-##-##-##"
    ]
  },
  {
    "ru": "Джерси",
    "en": "Jersey",
    "iso2": "JE",
    "dial": "+44",
    "mask": [
      "(####)####-######"
    ]
  },
  {
    "ru": "Джибути",
    "en": "Djibouti",
    "iso2": "DJ",
    "dial": "+253",
    "mask": [
      "##-##-##-##"
    ]
  },
  {
    "ru": "Доминика",
    "en": "Dominica",
    "iso2": "DM",
    "dial": "+1767",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Доминиканская Республика",
    "en": "Dominican Republic",
    "iso2": "DO",
    "dial": "+1",
    "mask": [
      "(809)###-####",
      "(829)###-####",
      "(849)###-####"
    ]
  },
  {
    "ru": "Демократическая Республика Конго",
    "en": "Democratic Republic of the Congo",
    "iso2": "CD",
    "dial": "+243",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Египет",
    "en": "Egypt",
    "iso2": "EG",
    "dial": "+20",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Замбия",
    "en": "Zambia",
    "iso2": "ZM",
    "dial": "+260",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Зимбабве",
    "en": "Zimbabwe",
    "iso2": "ZW",
    "dial": "+263",
    "mask": [
      "#-######"
    ]
  },
  {
    "ru": "Израиль",
    "en": "Israel",
    "iso2": "IL",
    "dial": "+972",
    "mask": [
      "#-###-####",
      "5#-###-####"
    ]
  },
  {
    "ru": "Индия",
    "en": "India",
    "iso2": "IN",
    "dial": "+91",
    "mask": [
      "(####)###-###"
    ]
  },
  {
    "ru": "Индонезия",
    "en": "Indonesia",
    "iso2": "ID",
    "dial": "+62",
    "mask": [
      "##-###-##",
      "##-###-###",
      "##-###-####",
      "(8##)###-###",
      "(8##)###-##-###"
    ]
  },
  {
    "ru": "Иордания",
    "en": "Jordan",
    "iso2": "JO",
    "dial": "+962",
    "mask": [
      "#-####-####"
    ]
  },
  {
    "ru": "Ирак",
    "en": "Iraq",
    "iso2": "IQ",
    "dial": "+964",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Иран",
    "en": "Iran",
    "iso2": "IR",
    "dial": "+98",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Ирландия",
    "en": "Ireland",
    "iso2": "IE",
    "dial": "+353",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Исландия",
    "en": "Iceland",
    "iso2": "IS",
    "dial": "+354",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Испания",
    "en": "Spain",
    "iso2": "ES",
    "dial": "+34",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Италия",
    "en": "Italy",
    "iso2": "IT",
    "dial": "+39",
    "mask": [
      "(###)####-###"
    ]
  },
  {
    "ru": "Йемен",
    "en": "Yemen",
    "iso2": "YE",
    "dial": "+967",
    "mask": [
      "#-###-###",
      "##-###-###",
      "###-###-###"
    ]
  },
  {
    "ru": "Кабо-Верде",
    "en": "Cape Verde",
    "iso2": "CV",
    "dial": "+238",
    "mask": [
      "(###)##-##"
    ]
  },
  {
    "ru": "Казахстан",
    "en": "Kazakhstan",
    "iso2": "KZ",
    "dial": "+7",
    "mask": [
      "(6##)###-##-##",
      "(7##)###-##-##"
    ]
  },
  {
    "ru": "Острова Кайман",
    "en": "Cayman Islands",
    "iso2": "KY",
    "dial": "+1345",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Камбоджа",
    "en": "Cambodia",
    "iso2": "KH",
    "dial": "+855",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Камерун",
    "en": "Cameroon",
    "iso2": "CM",
    "dial": "+237",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Канада",
    "en": "Canada",
    "iso2": "CA",
    "dial": "+1",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Катар",
    "en": "Qatar",
    "iso2": "QA",
    "dial": "+974",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Кения",
    "en": "Kenya",
    "iso2": "KE",
    "dial": "+254",
    "mask": [
      "###-######"
    ]
  },
  {
    "ru": "Кипр",
    "en": "Cyprus",
    "iso2": "CY",
    "dial": "+357",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Киргизия",
    "en": "Kyrgyzstan",
    "iso2": "KG",
    "dial": "+996",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Кирибати",
    "en": "Kiribati",
    "iso2": "KI",
    "dial": "+686",
    "mask": [
      "##-###"
    ]
  },
  {
    "ru": "Китайская Республика",
    "en": "Taiwan",
    "iso2": "TW",
    "dial": "+886",
    "mask": [
      "####-####",
      "#-####-####"
    ]
  },
  {
    "ru": "КНДР",
    "en": "Korea, Democratic People's Republic of Korea",
    "iso2": "KP",
    "dial": "+850",
    "mask": [
      "###-###",
      "####-####",
      "##-###-###",
      "###-####-###",
      "191-###-####",
      "####-#############"
    ]
  },
  {
    "ru": "КНР",
    "en": "China",
    "iso2": "CN",
    "dial": "+86",
    "mask": [
      "(###)####-###",
      "(###)####-####",
      "##-#####-#####"
    ]
  },
  {
    "ru": "Кокосовые острова",
    "en": "Cocos (Keeling) Islands",
    "iso2": "CC",
    "dial": "+61",
    "mask": [
      "#-####-####"
    ]
  },
  {
    "ru": "Колумбия",
    "en": "Colombia",
    "iso2": "CO",
    "dial": "+57",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Коморы",
    "en": "Comoros",
    "iso2": "KM",
    "dial": "+269",
    "mask": [
      "##-#####"
    ]
  },
  {
    "ru": "Коста-Рика",
    "en": "Costa Rica",
    "iso2": "CR",
    "dial": "+506",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Кот-д’Ивуар",
    "en": "Ivory Coast / Cote d'Ivoire",
    "iso2": "CI",
    "dial": "+225",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Куба",
    "en": "Cuba",
    "iso2": "CU",
    "dial": "+53",
    "mask": [
      "#-###-####"
    ]
  },
  {
    "ru": "Кувейт",
    "en": "Kuwait",
    "iso2": "KW",
    "dial": "+965",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Кюрасао",
    "en": "Country of Curacao",
    "iso2": "CW",
    "dial": "+599 09",
    "mask": [
      "4## ####",
      "5## ####",
      "6## ####",
      "7## ####",
      "8## ####"
    ]
  },
  {
    "ru": "Лаос",
    "en": "Laos",
    "iso2": "LA",
    "dial": "+856",
    "mask": [
      "##-###-###",
      "(20##)###-###"
    ]
  },
  {
    "ru": "Латвия",
    "en": "Latvia",
    "iso2": "LV",
    "dial": "+371",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Лесото",
    "en": "Lesotho",
    "iso2": "LS",
    "dial": "+266",
    "mask": [
      "#-###-####"
    ]
  },
  {
    "ru": "Либерия",
    "en": "Liberia",
    "iso2": "LR",
    "dial": "+231",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Ливан",
    "en": "Lebanon",
    "iso2": "LB",
    "dial": "+961",
    "mask": [
      "#-###-###",
      "##-###-###"
    ]
  },
  {
    "ru": "Ливия",
    "en": "Libya",
    "iso2": "LY",
    "dial": "+218",
    "mask": [
      "##-###-###",
      "21-###-####"
    ]
  },
  {
    "ru": "Литва",
    "en": "Lithuania",
    "iso2": "LT",
    "dial": "+370",
    "mask": [
      "(###)##-###"
    ]
  },
  {
    "ru": "Лихтенштейн",
    "en": "Liechtenstein",
    "iso2": "LI",
    "dial": "+423",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Люксембург",
    "en": "Luxembourg",
    "iso2": "LU",
    "dial": "+352",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Маврикий",
    "en": "Mauritius",
    "iso2": "MU",
    "dial": "+230",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Мавритания",
    "en": "Mauritania",
    "iso2": "MR",
    "dial": "+222",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Мадагаскар",
    "en": "Madagascar",
    "iso2": "MG",
    "dial": "+261",
    "mask": [
      "##-##-#####"
    ]
  },
  {
    "ru": "Майотта",
    "en": "Mayotte",
    "iso2": "YT",
    "dial": "+262",
    "mask": [
      "#####-####"
    ]
  },
  {
    "ru": "Макао",
    "en": "Macau",
    "iso2": "MO",
    "dial": "+853",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Македония",
    "en": "North Macedonia",
    "iso2": "MK",
    "dial": "+389",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Малави",
    "en": "Malawi",
    "iso2": "MW",
    "dial": "+265",
    "mask": [
      "1-###-###",
      "#-####-####"
    ]
  },
  {
    "ru": "Малайзия",
    "en": "Malaysia",
    "iso2": "MY",
    "dial": "+60",
    "mask": [
      "#-###-###",
      "##-###-###",
      "(###)###-###",
      "##-###-####"
    ]
  },
  {
    "ru": "Мали",
    "en": "Mali",
    "iso2": "ML",
    "dial": "+223",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Мальдивы",
    "en": "Maldives",
    "iso2": "MV",
    "dial": "+960",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Мальта",
    "en": "Malta",
    "iso2": "MT",
    "dial": "+356",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Марокко",
    "en": "Morocco",
    "iso2": "MA",
    "dial": "+212",
    "mask": [
      "##-####-###"
    ]
  },
  {
    "ru": "Мартиника",
    "en": "Martinique",
    "iso2": "MQ",
    "dial": "+596",
    "mask": [
      "(###)##-##-##"
    ]
  },
  {
    "ru": "Маршалловы Острова",
    "en": "Marshall Islands",
    "iso2": "MH",
    "dial": "+692",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Мексика",
    "en": "Mexico",
    "iso2": "MX",
    "dial": "+52",
    "mask": [
      "##-##-####",
      "(###)###-####"
    ]
  },
  {
    "ru": "Микронезия",
    "en": "Micronesia, Federated States of Micronesia",
    "iso2": "FM",
    "dial": "+691",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Мозамбик",
    "en": "Mozambique",
    "iso2": "MZ",
    "dial": "+258",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Молдавия",
    "en": "Moldova",
    "iso2": "MD",
    "dial": "+373",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Монако",
    "en": "Monaco",
    "iso2": "MC",
    "dial": "+377",
    "mask": [
      "##-###-###",
      "(###)###-###"
    ]
  },
  {
    "ru": "Монголия",
    "en": "Mongolia",
    "iso2": "MN",
    "dial": "+976",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Монтсеррат",
    "en": "Montserrat",
    "iso2": "MS",
    "dial": "+1664",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Мьянма",
    "en": "Myanmar",
    "iso2": "MM",
    "dial": "+95",
    "mask": [
      "###-###",
      "#-###-###",
      "##-###-###"
    ]
  },
  {
    "ru": "Намибия",
    "en": "Namibia",
    "iso2": "NA",
    "dial": "+264",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Науру",
    "en": "Nauru",
    "iso2": "NR",
    "dial": "+674",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Непал",
    "en": "Nepal",
    "iso2": "NP",
    "dial": "+977",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Нигер",
    "en": "Niger",
    "iso2": "NE",
    "dial": "+227",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Нигерия",
    "en": "Nigeria",
    "iso2": "NG",
    "dial": "+234",
    "mask": [
      "##-###-##",
      "##-###-###",
      "(###)###-####"
    ]
  },
  {
    "ru": "Нидерланды",
    "en": "Netherlands",
    "iso2": "NL",
    "dial": "+31",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Нидерландские Антильские острова",
    "en": "Netherlands Antilles",
    "iso2": "AN",
    "dial": "+599",
    "mask": [
      "###-####",
      "9###-####"
    ]
  },
  {
    "ru": "Никарагуа",
    "en": "Nicaragua",
    "iso2": "NI",
    "dial": "+505",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Ниуэ",
    "en": "Niue",
    "iso2": "NU",
    "dial": "+683",
    "mask": [
      "####"
    ]
  },
  {
    "ru": "Новая Зеландия",
    "en": "New Zealand",
    "iso2": "NZ",
    "dial": "+64",
    "mask": [
      "#-###-###",
      "(###)###-###",
      "(###)###-####"
    ]
  },
  {
    "ru": "Новая Каледония",
    "en": "New Caledonia",
    "iso2": "NC",
    "dial": "+687",
    "mask": [
      "##-####"
    ]
  },
  {
    "ru": "Норвегия",
    "en": "Norway",
    "iso2": "NO",
    "dial": "+47",
    "mask": [
      "(###)##-###"
    ]
  },
  {
    "ru": "ОАЭ",
    "en": "United Arab Emirates",
    "iso2": "AE",
    "dial": "+971",
    "mask": [
      "#-###-####",
      "5#-###-####"
    ]
  },
  {
    "ru": "Оман",
    "en": "Oman",
    "iso2": "OM",
    "dial": "+968",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Остров Мэн",
    "en": "Isle of Man",
    "iso2": "IM",
    "dial": "+44",
    "mask": [
      "(####)######"
    ]
  },
  {
    "ru": "Острова Кука",
    "en": "Cook Islands",
    "iso2": "CK",
    "dial": "+682",
    "mask": [
      "##-###"
    ]
  },
  {
    "ru": "Остров Норфолк",
    "en": "Norfolk Island",
    "iso2": "NF",
    "dial": "+672",
    "mask": [
      "3##-###"
    ]
  },
  {
    "ru": "Остров Рождества",
    "en": "Christmas Island",
    "iso2": "CX",
    "dial": "+61",
    "mask": [
      "#-####-####"
    ]
  },
  {
    "ru": "Острова Питкэрн",
    "en": "Pitcairn",
    "iso2": "PN",
    "dial": "+64",
    "mask": [
      "###-###-###"
    ]
  },
  {
    "ru": "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
    "en": "Saint Helena, Ascension and Tristan Da Cunha",
    "iso2": "SH",
    "dial": "+290",
    "mask": [
      "####"
    ]
  },
  {
    "ru": "Пакистан",
    "en": "Pakistan",
    "iso2": "PK",
    "dial": "+92",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Палау",
    "en": "Palau",
    "iso2": "PW",
    "dial": "+680",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Государство Палестина",
    "en": "Palestine",
    "iso2": "PS",
    "dial": "+970",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Панама",
    "en": "Panama",
    "iso2": "PA",
    "dial": "+507",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Папуа — Новая Гвинея",
    "en": "Papua New Guinea",
    "iso2": "PG",
    "dial": "+675",
    "mask": [
      "(###)##-###"
    ]
  },
  {
    "ru": "Парагвай",
    "en": "Paraguay",
    "iso2": "PY",
    "dial": "+595",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Перу",
    "en": "Peru",
    "iso2": "PE",
    "dial": "+51",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Польша",
    "en": "Poland",
    "iso2": "PL",
    "dial": "+48",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Португалия",
    "en": "Portugal",
    "iso2": "PT",
    "dial": "+351",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Пуэрто-Рико",
    "en": "Puerto Rico",
    "iso2": "PR",
    "dial": "+1",
    "mask": [
      "(787) ### ####",
      "(939) ### ####"
    ]
  },
  {
    "ru": "Республика Конго",
    "en": "Congo",
    "iso2": "CG",
    "dial": "+242",
    "mask": [
      "##-#####"
    ]
  },
  {
    "ru": "Республика Корея",
    "en": "Korea, Republic of South Korea",
    "iso2": "KR",
    "dial": "+82",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Реюньон",
    "en": "Reunion",
    "iso2": "RE",
    "dial": "+262",
    "mask": [
      "#####-####"
    ]
  },
  {
    "ru": "Россия",
    "en": "Russia",
    "iso2": "RU",
    "dial": "+7",
    "mask": [
      "(###)###-##-##"
    ]
  },
  {
    "ru": "Руанда",
    "en": "Rwanda",
    "iso2": "RW",
    "dial": "+250",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Румыния",
    "en": "Romania",
    "iso2": "RO",
    "dial": "+40",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Сальвадор",
    "en": "El Salvador",
    "iso2": "SV",
    "dial": "+503",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Самоа",
    "en": "Samoa",
    "iso2": "WS",
    "dial": "+685",
    "mask": [
      "##-####"
    ]
  },
  {
    "ru": "Сан-Марино",
    "en": "San Marino",
    "iso2": "SM",
    "dial": "+378",
    "mask": [
      "####-######"
    ]
  },
  {
    "ru": "Сан-Томе и Принсипи",
    "en": "Sao Tome and Principe",
    "iso2": "ST",
    "dial": "+239",
    "mask": [
      "##-#####"
    ]
  },
  {
    "ru": "Саудовская Аравия",
    "en": "Saudi Arabia",
    "iso2": "SA",
    "dial": "+966",
    "mask": [
      "#-###-####",
      "5#-####-####"
    ]
  },
  {
    "ru": "Свазиленд",
    "en": "Eswatini",
    "iso2": "SZ",
    "dial": "+268",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Северные Марианские острова",
    "en": "Northern Mariana Islands",
    "iso2": "MP",
    "dial": "+1670",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Сейшельские Острова",
    "en": "Seychelles",
    "iso2": "SC",
    "dial": "+248",
    "mask": [
      "#-###-###"
    ]
  },
  {
    "ru": "Сен-Бартелеми",
    "en": "Saint Barthelemy",
    "iso2": "BL",
    "dial": "+590",
    "mask": [
      "###-##-##-##"
    ]
  },
  {
    "ru": "Сен-Мартен",
    "en": "Saint Martin",
    "iso2": "MF",
    "dial": "+590",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Сен-Пьер и Микелон",
    "en": "Saint Pierre and Miquelon",
    "iso2": "PM",
    "dial": "+508",
    "mask": [
      "##-####"
    ]
  },
  {
    "ru": "Сенегал",
    "en": "Senegal",
    "iso2": "SN",
    "dial": "+221",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Сент-Винсент и Гренадины",
    "en": "Saint Vincent and the Grenadines",
    "iso2": "VC",
    "dial": "+1784",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Сент-Китс и Невис",
    "en": "Saint Kitts and Nevis",
    "iso2": "KN",
    "dial": "+1869",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Сент-Люсия",
    "en": "Saint Lucia",
    "iso2": "LC",
    "dial": "+1758",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Сербия",
    "en": "Serbia",
    "iso2": "RS",
    "dial": "+381",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Сингапур",
    "en": "Singapore",
    "iso2": "SG",
    "dial": "+65",
    "mask": [
      "####-####"
    ]
  },
  {
    "ru": "Синт-Мартен",
    "en": "Sint Maarten",
    "iso2": "SX",
    "dial": "+1721",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Сирия",
    "en": "Syrian Arab Republic",
    "iso2": "SY",
    "dial": "+963",
    "mask": [
      "##-####-###"
    ]
  },
  {
    "ru": "Словакия",
    "en": "Slovakia",
    "iso2": "SK",
    "dial": "+421",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Словения",
    "en": "Slovenia",
    "iso2": "SI",
    "dial": "+386",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Соломоновы Острова",
    "en": "Solomon Islands",
    "iso2": "SB",
    "dial": "+677",
    "mask": [
      "#####",
      "###-####"
    ]
  },
  {
    "ru": "Сомали",
    "en": "Somalia",
    "iso2": "SO",
    "dial": "+252",
    "mask": [
      "#-###-###",
      "##-###-###"
    ]
  },
  {
    "ru": "Судан",
    "en": "Sudan",
    "iso2": "SD",
    "dial": "+249",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Суринам",
    "en": "Suriname",
    "iso2": "SR",
    "dial": "+597",
    "mask": [
      "###-###",
      "###-####"
    ]
  },
  {
    "ru": "США",
    "en": "United States",
    "iso2": "US",
    "dial": "+1",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Сьерра-Леоне",
    "en": "Sierra Leone",
    "iso2": "SL",
    "dial": "+232",
    "mask": [
      "##-######"
    ]
  },
  {
    "ru": "Таджикистан",
    "en": "Tajikistan",
    "iso2": "TJ",
    "dial": "+992",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Таиланд",
    "en": "Thailand",
    "iso2": "TH",
    "dial": "+66",
    "mask": [
      "##-###-###",
      "##-###-####"
    ]
  },
  {
    "ru": "Танзания",
    "en": "Tanzania, United Republic of Tanzania",
    "iso2": "TZ",
    "dial": "+255",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Тёркс и Кайкос",
    "en": "Turks and Caicos Islands",
    "iso2": "TC",
    "dial": "+1649",
    "mask": [
      "###-###"
    ]
  },
  {
    "ru": "Того",
    "en": "Togo",
    "iso2": "TG",
    "dial": "+228",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Токелау",
    "en": "Tokelau",
    "iso2": "TK",
    "dial": "+690",
    "mask": [
      "####"
    ]
  },
  {
    "ru": "Тонга",
    "en": "Tonga",
    "iso2": "TO",
    "dial": "+676",
    "mask": [
      "#####"
    ]
  },
  {
    "ru": "Тринидад и Тобаго",
    "en": "Trinidad and Tobago",
    "iso2": "TT",
    "dial": "+1868",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Тувалу",
    "en": "Tuvalu",
    "iso2": "TV",
    "dial": "+688",
    "mask": [
      "2####",
      "90####"
    ]
  },
  {
    "ru": "Тунис",
    "en": "Tunisia",
    "iso2": "TN",
    "dial": "+216",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Туркмения",
    "en": "Turkmenistan",
    "iso2": "TM",
    "dial": "+993",
    "mask": [
      "#-###-####"
    ]
  },
  {
    "ru": "Турция",
    "en": "Turkey",
    "iso2": "TR",
    "dial": "+90",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Уганда",
    "en": "Uganda",
    "iso2": "UG",
    "dial": "+256",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Узбекистан",
    "en": "Uzbekistan",
    "iso2": "UZ",
    "dial": "+998",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Украина",
    "en": "Ukraine",
    "iso2": "UA",
    "dial": "+380",
    "mask": [
      "(##)###-##-##"
    ]
  },
  {
    "ru": "Уоллис и Футуна",
    "en": "Wallis and Futuna",
    "iso2": "WF",
    "dial": "+681",
    "mask": [
      "##-####"
    ]
  },
  {
    "ru": "Уругвай",
    "en": "Uruguay",
    "iso2": "UY",
    "dial": "+598",
    "mask": [
      "#-###-##-##"
    ]
  },
  {
    "ru": "Фареры",
    "en": "Faroe Islands",
    "iso2": "FO",
    "dial": "+298",
    "mask": [
      "###-###"
    ]
  },
  {
    "ru": "Фиджи",
    "en": "Fiji",
    "iso2": "FJ",
    "dial": "+679",
    "mask": [
      "##-#####"
    ]
  },
  {
    "ru": "Филиппины",
    "en": "Philippines",
    "iso2": "PH",
    "dial": "+63",
    "mask": [
      "(###)###-####"
    ]
  },
  {
    "ru": "Финляндия",
    "en": "Finland",
    "iso2": "FI",
    "dial": "+358",
    "mask": [
      "(###)###-##-##"
    ]
  },
  {
    "ru": "Фолклендские острова",
    "en": "Falkland Islands (Malvinas)",
    "iso2": "FK",
    "dial": "+500",
    "mask": [
      "#####"
    ]
  },
  {
    "ru": "Франция",
    "en": "France",
    "iso2": "FR",
    "dial": "+33",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Французская Полинезия",
    "en": "French Polynesia",
    "iso2": "PF",
    "dial": "+689",
    "mask": [
      "##-##-##"
    ]
  },
  {
    "ru": "Хорватия",
    "en": "Croatia",
    "iso2": "HR",
    "dial": "+385",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "ЦАР",
    "en": "Central African Republic",
    "iso2": "CF",
    "dial": "+236",
    "mask": [
      "##-##-####"
    ]
  },
  {
    "ru": "Чад",
    "en": "Chad",
    "iso2": "TD",
    "dial": "+235",
    "mask": [
      "##-##-##-##"
    ]
  },
  {
    "ru": "Черногория",
    "en": "Montenegro",
    "iso2": "ME",
    "dial": "+382",
    "mask": [
      "##-###-###"
    ]
  },
  {
    "ru": "Чехия",
    "en": "Czech Republic",
    "iso2": "CZ",
    "dial": "+420",
    "mask": [
      "(###)###-###"
    ]
  },
  {
    "ru": "Чили",
    "en": "Chile",
    "iso2": "CL",
    "dial": "+56",
    "mask": [
      "#-####-####"
    ]
  },
  {
    "ru": "Швейцария",
    "en": "Switzerland",
    "iso2": "CH",
    "dial": "+41",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Швеция",
    "en": "Sweden",
    "iso2": "SE",
    "dial": "+46",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Шпицберген и Ян-Майен",
    "en": "Svalbard and Jan Mayen",
    "iso2": "SJ",
    "dial": "+47",
    "mask": [
      "(###)##-###"
    ]
  },
  {
    "ru": "Шри-Ланка",
    "en": "Sri Lanka",
    "iso2": "LK",
    "dial": "+94",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Эквадор",
    "en": "Ecuador",
    "iso2": "EC",
    "dial": "+593",
    "mask": [
      "#-###-####",
      "##-###-####"
    ]
  },
  {
    "ru": "Экваториальная Гвинея",
    "en": "Equatorial Guinea",
    "iso2": "GQ",
    "dial": "+240",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Эритрея",
    "en": "Eritrea",
    "iso2": "ER",
    "dial": "+291",
    "mask": [
      "#-###-###"
    ]
  },
  {
    "ru": "Эстония",
    "en": "Estonia",
    "iso2": "EE",
    "dial": "+372",
    "mask": [
      "###-####",
      "####-####"
    ]
  },
  {
    "ru": "Эфиопия",
    "en": "Ethiopia",
    "iso2": "ET",
    "dial": "+251",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "ЮАР",
    "en": "South Africa",
    "iso2": "ZA",
    "dial": "+27",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Южная Георгия и Южные Сандвичевы острова",
    "en": "South Georgia and the South Sandwich Islands",
    "iso2": "GS",
    "dial": "+500",
    "mask": [
      "#####"
    ]
  },
  {
    "ru": "Южный Судан",
    "en": "South Sudan",
    "iso2": "SS",
    "dial": "+211",
    "mask": [
      "##-###-####"
    ]
  },
  {
    "ru": "Ямайка",
    "en": "Jamaica",
    "iso2": "JM",
    "dial": "+1876",
    "mask": [
      "###-####"
    ]
  },
  {
    "ru": "Япония",
    "en": "Japan",
    "iso2": "JP",
    "dial": "+81",
    "mask": [
      "(###)###-###",
      "##-####-####"
    ]
  },
  {
    "ru": "Косово",
    "en": "Kosovo",
    "iso2": "XK",
    "dial": "+383",
    "mask": [
      "##-###-###",
      "###-###-###"
    ]
  }
];

