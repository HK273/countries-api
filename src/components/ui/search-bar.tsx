import { SearchBarProps } from "@/types/search-props";
export default function SearchBar({
  filterText,
  onFilterTextChange,
}: SearchBarProps) {
  return (
    <div>
      <form className="mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={filterText}
            placeholder="Search for a country..."
            onChange={(e) => onFilterTextChange(e.target.value)}
            className="focus:border focus:border-gray-500 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none  dark:focus:border-gray-500"
          />
        </div>
      </form>
    </div>
  );
}
