import Image from "next/image.js";
import Link from "next/link";
import { TransformedCountryData } from "@/types/country-data";
export function Card({
  Flag,
  Name,
  Population,
  Region,
  Capital,
}: TransformedCountryData) {
  return (
    <div className="card max-w-sm bg-white border rounded-lg shadow-sm dark:shadow-gray-500 dark:bg-gray-800 mb-4 dark:hover:shadow-custom-light-gray">
      <Link href={`/countries/${Name}`}>
        <div className="image">
          <Image
            src={Flag}
            alt="flag-image"
            width={500}
            height={500}
            className="rounded-md image"
          />
        </div>

        <div className="p-5">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {Name}
          </h5>
          <p className="mb-2 text-gray-900 dark:text-gray-200">
            <span className="font-bold">Population: </span>
            {Population}
          </p>
          <p className="mb-2 text-gray-900 dark:text-gray-200">
            {" "}
            <span className="font-bold">Region: </span>
            {Region}
          </p>
          <p className="mb-5  text-gray-900 dark:text-gray-200">
            {" "}
            <span className="font-bold">Capital: </span> {Capital}
          </p>
        </div>
      </Link>
    </div>
  );
}
