"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function HomeLoading() {
  return (
    <main className="max-w-screen-2xl grid gap-12 px-20 pb-24 pt-20 sm:grid-cols-2 justify-center mx-auto md:grid-cols-3 lg:grid-cols-4">
      {/* The length of the object just defines the number of loading card states we will show */}
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <div className=" bg-neutral-100" key={id}>
          <Skeleton className="relative aspect-video h-96 w-full bg-gray-400"></Skeleton>
          <Skeleton className="mx-auto mt-3 h-5 w-1/2 bg-gray-200 text-center"></Skeleton>
          <Skeleton className="mx-auto mt-5 h-5 w-1/4 bg-gray-200 text-center"></Skeleton>
        </div>
      ))}
    </main>
  );
}
