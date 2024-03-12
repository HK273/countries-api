import { Country } from "@/types/country-data";
import { TransformedCountryData } from "@/types/country-data";
import { writeFileSync } from "node:fs";

/**
 * Fetches country data from a given URL and transforms it into a specified format.
 * @param {string} url - The URL to fetch country data from.
 * @returns {Promise<TransformedCountryData[]>} A promise that resolves to an array of transformed country data.
 */
async function fetchAndTransformCountryData(
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
  // For testing purposes
  const jsonData = JSON.stringify(transformedData, null, 2);
  writeFileSync("transformed-country.json", jsonData, "utf-8");
  return transformedData;
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

/**
 * Queries the restcountries API to return data for a specified country. Writes the response to a file
 *  @param {string} countryName - The common name of the country to fetch data for.
 */
export async function getCountryWrite(countryName: string) {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const rawData: Country[] = await response.json();
  const formattedJson = JSON.stringify(rawData, null, 2);
  writeFileSync("country.json", formattedJson, "utf-8");
}

// getCountryWrite("Belgium");
// getCountry("Belgium");

// There seems to be a bug in the API where this returns both Sudan and South Sudan
// getCountryWrite("Sudan");

// Notes
// const url = "https://restcountries.com/v3.1/all";
// https://restcountries.com/v3.1/name/cyprus
// Flag:"flags": {"png:", "svg:"} -- data[0]["flags"]
// Country: "name":{"common":} -- data[0]["name"]["common"]
// Population: "population": -- data[0]["population"]
// Region: "region" -- data[0]["region"]
// Capital: "capital" -- data[0]["capital"][0]
