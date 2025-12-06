"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FilterCard } from "./filter-card";

const suburbs = [
  { id: "eshelby-cranbrook", label: "Eshelby Drive, Cranbrook" },
  { id: "eshelby-cannonvale", label: "2- 6 Eshelby Dr, Cannonvale" },
  { id: "eshelby-59-cannonvale", label: "59/3 Eshelby Drive Cannonvale" },
];

interface SuburbFilterProps {
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
}

export function SuburbFilter({
  defaultSelected = ["eshelby-59-cannonvale"],
  onChange,
}: Readonly<SuburbFilterProps>) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const handleChange = (id: string, checked: boolean) => {
    const newSelected = checked
      ? [...selected, id]
      : selected.filter((item) => item !== id);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  return (
    <FilterCard title="Suburb">
      <div className="flex flex-col gap-4">
        {suburbs.map((suburb) => (
          <label
            key={suburb.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Checkbox
              checked={selected.includes(suburb.id)}
              onCheckedChange={(checked) =>
                handleChange(suburb.id, checked as boolean)
              }
              className="w-6 h-6 rounded-md border-2 border-gray-300 data-[state=checked]:bg-[#5E2A3B] data-[state=checked]:border-[#5E2A3B]"
            />
            <span className="text-lg text-gray-900">{suburb.label}</span>
          </label>
        ))}
      </div>
    </FilterCard>
  );
}
