import { Country } from "@/types/country-data";
import { TransformedCountryData } from "@/types/country-data";

/**
 * Fetches country data from a given URL and transforms it into a specified format.
 * @param {string} url - The URL to fetch country data from.
 * @returns {Promise<TransformedCountryData[]>} A promise that resolves to an array of transformed country data.
 */
export async function fetchAndTransformCountryData(
  url: string
): Promise<TransformedCountryData[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const rawData: Country[] = await response.json();
  const transformedData: TransformedCountryData[] = rawData.map((country) => ({
    NativeName: country.name.nativeName,
    SubRegion: country.subregion,
    Flag: country.flags.png,
    Name: country.name.common,
    Population: country.population,
    Region: country.region,
    Capital: country.capital ? country.capital[0] : "N/A",
    Languages: country.languages,
    Currencies: country.currencies,
    BorderCountries: country.borders,
  }));
  return transformedData;
}

/**
 * Queries the restcountries API to return all countries.
 * @returns {Promise<TransformedCountryData[]>} A promise that resolves to an array containing the specified country data in a transformed format.
 */
export async function getAllCountries(): Promise<TransformedCountryData[]> {
  const url = "https://restcountries.com/v3.1/all";
  return fetchAndTransformCountryData(url);
}

/**
 * Queries the restcountries API to return data for a specified country.
 * @param {string} countryName - The common name of the country to fetch data for.
 * @returns {Promise<TransformedCountryData[]>} A promise that resolves to an array containing the specified country's data in a transformed format.
 */
export async function getCountry(
  countryName: string
): Promise<TransformedCountryData[]> {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  return fetchAndTransformCountryData(url);
}
