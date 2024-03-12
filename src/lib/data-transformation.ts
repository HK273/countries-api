import {
  NativeNames,
  Borders,
  Currencies,
  LanguagesType,
} from "@/types/country-data";

/**
 * Converts an array or the values of an object into a comma-separated list string.
 * Optionally, a transformation function can be applied to each item.
 *
 * @param {any} data - The input data to be transformed. Can be an array or an object.
 * @param {(item: any) string} [transformFn] - An optional function to transform each item in the data.
 * If provided, this function is applied to each item before joining them into a string.
 *
 * @returns {string} A string representing the comma-separated list of the input data.
 * Returns "No data available" if the input is falsy (null, undefined, etc.).
 * Returns "Invalid data" if the input is neither an array nor an object.
 */

export function toCommaSeparatedList(
  data: Currencies | Borders | LanguagesType,
  transformFn?: (item: any) => string
): string {
  if (!data) {
    return "No data available";
  }

  // arrays / lists
  if (Array.isArray(data)) {
    return data.join(", ");
  }
  // objects / dict
  if (typeof data === "object") {
    const values = Object.values(data);
    // Nested objects
    if (transformFn) {
      return values.map(transformFn).join(", ");
    }
    return values.join(", ");
  }

  return "Invalid data";
}

/**
 * Extracts the first official name from the given data structure.
 *
 * @param {Object} data - The data object containing language codes as keys, each mapping to an object with 'official' and 'common' names.
 * @returns {string} The first official name found, or a message indicating that it's not available if the data doesn't conform to the expected structure.
 */
export function getFirstOfficialNativeName(data: NativeNames): string {
  // Check if data is an object and has at least one entry
  if (data && typeof data === "object" && Object.keys(data).length > 0) {
    // Get the first entry's value (an object with 'official' and 'common')
    const firstEntry = Object.values(data)[0];

    // Check if the first entry has an 'official' name and return it
    if (firstEntry && firstEntry.official) {
      return firstEntry.official;
    }
  }
  return "No official name available";
}
