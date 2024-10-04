import React from "react";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";

import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  //This function can be used to declaratively opt out of static rendering and indicate a particular component should not be cached.
  noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  console.log(displayedCabins.length, filter);
  return (
    <div>
      {" "}
      {displayedCabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CabinList;
