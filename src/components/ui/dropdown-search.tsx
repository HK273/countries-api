"use client";

import * as React from "react";
import {
  VisibilityState,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data: Array<any> = [];

type ColumnObj = {
  accessorKey: string;
};
type ColumnArray = ColumnObj[];
export const columns: ColumnArray = [
  {
    accessorKey: "Africa",
  },
  {
    accessorKey: "Americas",
  },
  {
    accessorKey: "Antarctic",
  },
  {
    accessorKey: "Asia",
  },
  {
    accessorKey: "Europe",
  },
  {
    accessorKey: "Oceania",
  },
];

// Define the type for the onRegionSelectionChange prop
type OnRegionSelectionChange = (region: string, isVisible: boolean) => void;

// Define the props type for the DropdownSearch component
interface DropdownSearchProps {
  selectedRegions: VisibilityState;
  onRegionSelectionChange: OnRegionSelectionChange;
}

export function DropdownSearch({
  selectedRegions,
  onRegionSelectionChange,
}: DropdownSearchProps) {
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // Setting dropdown visibility
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnVisibility: selectedRegions,
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto h-full w-full lg:w-auto lg:min-w-[12rem] bg-white dark:bg-gray-700 p-4"
        >
          Filter by Region <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                // !Invert the checked value to start as false as we want the tick to represent active
                checked={!column.getIsVisible()}
                onCheckedChange={(value) =>
                  onRegionSelectionChange(column.id, !value)
                }
                // onCheckedChange={(value) => column.toggleVisibility(!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
