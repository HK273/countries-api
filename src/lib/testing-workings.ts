import {
  toCommaSeparatedList,
  getFirstOfficialNativeName,
} from "./data-transformation";

// Currencies
const currenciesTest = {
  EUR: { name: "Euro", symbol: "€" },
  USD: { name: "United States Dollar", symbol: "$" },
};

const currenciesList = toCommaSeparatedList(
  currenciesTest,
  (currency) => `${currency.name} (${currency.symbol})`
);
console.log(currenciesList);

// Borders
const bordersTest = [
  "AGO",
  "BDI",
  "CAF",
  "COG",
  "RWA",
  "SSD",
  "TZA",
  "UGA",
  "ZMB",
];

const bordersTransformed = toCommaSeparatedList(bordersTest);
console.log(bordersTransformed);

// Languages
const langaugeTest = { ara: "Arabic", eng: "English", tir: "Tigrinya" };

// Some testing for getFirstOfficialNativeName

// NativeNames
const namesTest = {
  eng: { official: "Bailiwick of Jersey", common: "Jersey" },
  fra: { official: "Bailliage de Jersey", common: "Jersey" },
  nrf: { official: "Bailliage dé Jèrri", common: "Jèrri" },
};

const namesTransformed = getFirstOfficialNativeName(namesTest);
console.log(namesTransformed);

// ===== inital test extract extra details from data=====
// Original hard coded method for each var
//   const languagesList = Languages
//     ? Object.values(Languages).join(", ")
//     : "No languages available";

//   const currenciesList = Currencies
//     ? Object.values(Currencies)
//         .map((currency) => `${currency.name} (${currency.symbol})`)
//         .join(", ")
//     : "No currencies available";

//   const borderCountriesList = BorderCountries
//     ? BorderCountries.join(", ")
//     : "No border countries";
// ====================================================================//
