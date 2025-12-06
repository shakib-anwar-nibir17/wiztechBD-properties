"use client";

import type React from "react";

import { useCallback, useState } from "react";
import { FilterCard } from "./filter-card";

interface RentBudgetFilterProps {
  min?: number;
  max?: number;
  defaultMinValue?: number;
  defaultMaxValue?: number;
  onChange?: (values: { min: number; max: number }) => void;
}

export function RentBudgetFilter({
  min = 0,
  max = 1000000,
  defaultMinValue = 300,
  defaultMaxValue = 670000,
  onChange,
}: Readonly<RentBudgetFilterProps>) {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 100);
    setMinValue(value);
    onChange?.({ min: value, max: maxValue });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 100);
    setMaxValue(value);
    onChange?.({ min: minValue, max: value });
  };

  const minPercent = getPercent(minValue);
  const maxPercent = getPercent(maxValue);

  return (
    <FilterCard title="Rent Budget">
      <div className="pt-2 pb-6">
        {/* Slider Track */}
        <div className="relative h-2 mb-8">
          {/* Background track */}
          <div className="absolute w-full h-2 bg-[#D4B5C0] rounded-full" />
          {/* Active track */}
          <div
            className="absolute h-2 bg-[#5E2A3B] rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
          {/* Min Thumb */}
          <div
            className="absolute w-8 h-8 -mt-3 rounded-full bg-[#5E2A3B] border-4 border-[#D4B5C0] cursor-pointer shadow-md"
            style={{ left: `calc(${minPercent}% - 16px)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#D4B5C0]" />
            </div>
          </div>
          {/* Max Thumb */}
          <div
            className="absolute w-8 h-8 -mt-3 rounded-full bg-[#5E2A3B] border-4 border-[#D4B5C0] cursor-pointer shadow-md"
            style={{ left: `calc(${maxPercent}% - 16px)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#D4B5C0]" />
            </div>
          </div>
          {/* Hidden range inputs for interaction */}
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-transparent [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
          />
        </div>

        {/* Value Display */}
        <div className="flex gap-4">
          <div className="flex-1 bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-500 mb-1">Minimum</p>
            <p className="text-xl font-semibold text-gray-900">
              ${minValue.toLocaleString()}
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-500 mb-1">Maximum</p>
            <p className="text-xl font-semibold text-gray-900">
              ${maxValue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </FilterCard>
  );
}
