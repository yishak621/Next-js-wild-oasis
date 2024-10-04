"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter) => {
    //web query to put search params
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className=" border border-primary-800 flex">
      <FilterButton
        filter={"all"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All cabins
      </FilterButton>

      <FilterButton
        filter={"small"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </FilterButton>

      <FilterButton
        filter={"medium"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </FilterButton>

      <FilterButton
        filter={"large"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}

function FilterButton({ filter, children, activeFilter, handleFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter && "bg-slate-50 text-[#000]"
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
