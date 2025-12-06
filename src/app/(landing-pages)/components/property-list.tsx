"use client";
import { useState } from "react";
import {
  Button,
  PropertyTypeFilter,
  RentBudgetFilter,
  ResetIcon,
  SuburbFilter,
} from "../../../components";
import { AmenitiesFilter } from "../../../components/filters/amenities-filter";

export const PropertyList = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleResetFilters = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="mt-12 px-[100px]">
      <div className="min-h-screen  w-full flex">
        {/* filters */}
        <div className="max-w-[340px]">
          {/* Header */}
          <div className="flex items-center justify-between p-2 rounded-[12px] border border-neutral-200">
            <h1 className="font-medium !text-[#434953] px-4">
              Property Preference
            </h1>
            <Button
              onClick={handleResetFilters}
              className="flex items-center gap-2 rounded-[8px] border-gray-300 !text-[#434953] text-sm hover:bg-neutral-200 bg-neutral-100 h-[54px] w-[124px]"
            >
              Reset Filter
              <ResetIcon />
            </Button>
          </div>

          {/* Filter Components */}
          <div key={resetKey} className="flex flex-col gap-4">
            <RentBudgetFilter />
            <SuburbFilter />
            <PropertyTypeFilter />
            <AmenitiesFilter />
          </div>
        </div>
        {/* properties */}
        <div></div>
      </div>
    </div>
  );
};
