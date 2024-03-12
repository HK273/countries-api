interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Translation {
  official: string;
  common: string;
}

interface Demonym {
  f: string;
  m: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface LanguagesType {
  [key: string]: string;
}

type NativeNameDetails = {
  official?: string;
  common?: string;
};

export interface Currencies {
  [key: string]: Currency;
}

export type NativeNames = {
  [key: string]: NativeNameDetails;
};

export type Borders = Array<string>;

// Main object returned by API
export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: LanguagesType;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: { [key: string]: Demonym };
  flag: string;
  maps: Maps;
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
  borders: Array<string>;
}

// Only need these fields from the API
export interface TransformedCountryData {
  NativeName: NativeNames;
  SubRegion: string;
  Flag: string;
  Name: string;
  Population: number;
  Region: string;
  Capital: string;
  Currencies: Currencies;
  Languages: LanguagesType;
  BorderCountries: Borders;
}
