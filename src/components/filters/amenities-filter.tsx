"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FilterCard } from "./filter-card";

const amenities = [
  { id: "pet-friendly", label: "Pet-friendly" },
  { id: "parking", label: "Parking" },
  { id: "private-pool", label: "Private Pool" },
  { id: "gym", label: "Gym" },
  { id: "garden", label: "Garden" },
  { id: "balcony", label: "Balcony" },
];

interface AmenitiesFilterProps {
  defaultSelected?: string[];
  onChange?: (selected: string[]) => void;
  initialVisibleCount?: number;
}

export function AmenitiesFilter({
  defaultSelected = ["private-pool"],
  onChange,
  initialVisibleCount = 4,
}: Readonly<AmenitiesFilterProps>) {
  const [selected, setSelected] = useState<string[]>(defaultSelected);
  const [showAll, setShowAll] = useState(false);

  const handleChange = (id: string, checked: boolean) => {
    const newSelected = checked
      ? [...selected, id]
      : selected.filter((item) => item !== id);
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const visibleAmenities = showAll
    ? amenities
    : amenities.slice(0, initialVisibleCount);

  return (
    <FilterCard title="Amenities">
      <div className="flex flex-col gap-4">
        {visibleAmenities.map((amenity) => (
          <label
            key={amenity.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Checkbox
              checked={selected.includes(amenity.id)}
              onCheckedChange={(checked) =>
                handleChange(amenity.id, checked as boolean)
              }
              className="w-6 h-6 rounded-md border-2 border-gray-300 data-[state=checked]:bg-[#5E2A3B] data-[state=checked]:border-[#5E2A3B]"
            />
            <span className="text-lg text-gray-900">{amenity.label}</span>
          </label>
        ))}

        {amenities.length > initialVisibleCount && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-[#5E2A3B] text-base font-medium underline text-left hover:text-[#4a2230] transition-colors"
          >
            {showAll ? "see less" : "see more"}
          </button>
        )}
      </div>
    </FilterCard>
  );
}
