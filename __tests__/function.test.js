import "@testing-library/jest-dom";
import { fetchAndTransformCountryData } from "@/lib/data-extraction";
import {
  countryObject,
  transformedCountryObject,
} from "../src/lib/test-country-objects";

// Ensure all fetch calls use the mock
global.fetch = jest.fn();

// Ensures that each test runs with a fresh mock
beforeEach(() => {
  global.fetch.mockClear();
});

// Helper function to set up the mock implementation
const setUpMock = (response) => {
  global.fetch.mockImplementationOnce(() => Promise.resolve(response));
};

test("successfully returns TransformedCountryData", async () => {
  setUpMock({ ok: true, json: () => Promise.resolve(countryObject) });
  const data = await fetchAndTransformCountryData("https://restcountries.com");
  expect(data).toEqual(transformedCountryObject);
});

test("throws an error with our set message when the fetch call fails", async () => {
  setUpMock({ ok: false });
  await expect(
    fetchAndTransformCountryData("https://restcountries.com")
  ).rejects.toThrow("something went wrong");
});

test("returns an empty array when no country data is available", async () => {
  setUpMock({ ok: true, json: () => Promise.resolve([]) });
  const data = await fetchAndTransformCountryData("https://restcountries.com");
  expect(data).toEqual([]);
});
