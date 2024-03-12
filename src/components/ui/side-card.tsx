import Image from "next/image.js";
import Link from "next/link";
import { Button } from "./button";
import { TransformedCountryData } from "@/types/country-data";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import {
  toCommaSeparatedList,
  getFirstOfficialNativeName,
} from "@/lib/data-transformation";

export function SideCard({
  NativeName,
  SubRegion,
  BorderCountries,
  Currencies,
  Languages,
  Flag,
  Name,
  Population,
  Region,
  Capital,
}: TransformedCountryData) {
  // Extracted & transformed values from data
  const languagesList = toCommaSeparatedList(Languages);
  const currenciesList = toCommaSeparatedList(
    Currencies,
    (currency) => `${currency.name} (${currency.symbol})`
  );
  const borderCountriesList = toCommaSeparatedList(BorderCountries);
  const nativeName = getFirstOfficialNativeName(NativeName);
  // ===============================================================
  return (
    <main className="max-w-screen-2xl px-20 py-10 justify-center mx-auto">
        <Link href="/">
          <Button
            variant="outline"
            className=" bg-white dark:bg-gray-700 p-6 w-[8rem]"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Back
          </Button>
        </Link>
      <div className="grid gap-10 mt-20 xm:grid-cols-2 mx-auto justify-center">
        <div>
          {/* image quality is a bit janky */}
          <Image
            src={Flag}
            alt="flag-image"
            width={600}
            height={600}
            className="rounded-sm aspect-video shadow-lg dark:shadow-sm dark:shadow-gray-500"
          />
        </div>
        <div className="flex gap-20 mt-10">
          <div>
            <h5 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Native Name:</span>
              {nativeName}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Population:</span>
              {Population}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Region:</span>
              {Region}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Sub Region:</span>
              {SubRegion}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Capital:</span>
              {Capital}
            </p>
          </div>
          <div className="mt-[4.5rem]">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Languages:</span>
              {languagesList}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Currencies:</span>
              {currenciesList}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="mr-1 font-bold">Borders:</span>
              {borderCountriesList}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
