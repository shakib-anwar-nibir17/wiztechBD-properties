"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FilterCard } from "./filter-card";

const propertyTypes = [
  { id: "house", label: "House" },
  { id: "land", label: "Land" },
  { id: "appartment", label: "Appartment" },
  { id: "town-house", label: "Town House" },
  { id: "vila", label: "Vila" },
  { id: "acreage", label: "Acreage" },
];

interface PropertyTypeFilterProps {
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
}

export function PropertyTypeFilter({
  defaultSelected = ["town-house", "vila", "acreage"],
  onChange,
}: Readonly<PropertyTypeFilterProps>) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const handleChange = (id: string, checked: boolean) => {
    const newSelected = checked
      ? [...selected, id]
      : selected.filter((item) => item !== id);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <FilterCard title="Property Type">
      <div className="flex flex-col gap-4">
        {propertyTypes.map((type) => (
          <label
            key={type.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Checkbox
              checked={selected.includes(type.id)}
              onCheckedChange={(checked) =>
                handleChange(type.id, checked as boolean)
              }
              className="w-6 h-6 rounded-md border-2 border-gray-300 data-[state=checked]:bg-[#5E2A3B] data-[state=checked]:border-[#5E2A3B]"
            />
            <span className="text-lg text-gray-900">{type.label}</span>
          </label>
        ))}
      </div>
    </FilterCard>
  );
}
