"use client";

import { Skeleton } from "@/components/ui/skeleton";

// Defualt loading state for side-card component
// This needs to be a default export otherwise -> Internal error: Error: The default export of loading is not a React Component
export default function Loading() {
  return (
    <main className="grid px-20 py-10 gap-10 mt-20 xm:grid-cols-2 mx-auto justify-center items-center">
      {/* The length of the object just defines the number of loading card states we will show */}
      {Array.from({ length: 1 }, (_, i) => i + 1).map((id) => (
        <>
          <div className=" bg-neutral-100 p-10" key={id}>
            {/* <Skeleton className="mb-5 h-12 w-1/2 bg-gray-200"></Skeleton> */}
            <Skeleton className="relative aspect-video h-96 w-full bg-gray-400"></Skeleton>
          </div>
          <div className="">
            <Skeleton className="mx-auto mt-3 h-5 w-1/2 bg-gray-200"></Skeleton>
            <Skeleton className="mx-auto mt-5 h-5 w-1/4 bg-gray-200"></Skeleton>
          </div>
        </>
      ))}
    </main>
  );
}
