"use client";
import { useEffect, useState } from "react";
import { getAllCountries } from "@/lib/data-extraction";
import { Card } from "@/components/ui/card";
import SearchBar from "@/components/ui/search-bar";
import { TransformedCountryData } from "@/types/country-data";
import { DropdownSearch } from "@/components/ui/dropdown-search";
import { VisibilityState } from "@tanstack/react-table";
import { HomeLoading } from "@/components/home-loading";

export default function Home() {
  const [countries, setCountries] = useState<TransformedCountryData[]>([]);
  const [filterText, setFilterText] = useState<string>("");
  const [selectedRegions, setSelectedRegions] = useState<VisibilityState>({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Initialize selectedRegions with all true values to render cards on load
    const allRegions = {
      Africa: true,
      Americas: true,
      Antarctic: true,
      Asia: true,
      Europe: true,
      Oceania: true,
    };
    setSelectedRegions(allRegions);
    // Get countries data
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  /**
   * Function for updating filter text
   * @param text
   */
  const handleFilterTextChange = (text: string): void => {
    setFilterText(text);
  };

  /**
   * Function to filter the region value
   * @param region
   * @param isVisible
   */
  const handleRegionSelectionChange = (
    region: string,
    isVisible: boolean
  ): void => {
    setSelectedRegions((current) => ({
      ...current,
      [region]: isVisible,
    }));
    // console.log(selectedRegions);
  };

  // Some testing
  // useEffect(() => {
  //   console.log("Updated selectedRegions: ", selectedRegions);
  // }, [selectedRegions]);

  /**
   * So this is backwards and a bit hacky as the default state is true but not visible
   * checked={!column.getIsVisible()} is used to get the tick to signify active / selected
   * So we're actually starting on true but when clicked its false (visible)
   */
  const filteredCountries = countries.filter((country) => {
    // Check if all regions are true
    const allRegionsTrue = Object.values(selectedRegions).every(
      (value) => value === true
    );

    // If all regions are true, bypass region check and filter only by name
    if (allRegionsTrue) {
      return country.Name.toLowerCase().includes(filterText.toLowerCase());
    } else {
      // If not all regions are true, filter by region (false) and name
      return (
        selectedRegions[country.Region] === false &&
        country.Name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  });

  // Loading state - update this!
  if (isLoading) {
    return (
      <>
        <HomeLoading />
      </>
    ); // Render loading state
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5 max-w-screen-2xl px-20 py-10 justify-center mx-auto">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />

        <DropdownSearch
          selectedRegions={selectedRegions}
          onRegionSelectionChange={handleRegionSelectionChange}
        />
      </div>

      <main className="max-w-screen-2xl grid gap-12 px-20 pb-20 sm:grid-cols-2 justify-center mx-auto md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country) => (
          <Card key={country.Name} {...country} />
        ))}
      </main>
    </>
  );
}
