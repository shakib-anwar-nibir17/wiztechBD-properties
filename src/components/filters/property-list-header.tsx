"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertyListHeaderProps {
  resultCount?: number;
  sortBy?: string;
  onSortChange?: (value: string) => void;
}

export function PropertyListHeader({
  resultCount,
  sortBy,
  onSortChange,
}: Readonly<PropertyListHeaderProps>) {
  return (
    <div className="flex items-center justify-between h-[74px] px-4 rounded-[12px] border border-neutral-200">
      {/* Left side - Title and result count */}
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-gray-900">Property</h2>
        <span className="text-gray-400">---</span>
        <span className="text-gray-500">Showing result- ({resultCount})</span>
      </div>

      {/* Right side - Sort dropdown */}
      <div className="flex flex-col items-end">
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[160px] bg-gray-100 border-0 rounded-lg">
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Sort By</span>
              <SelectValue placeholder="Select order" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-to-high">Low to High</SelectItem>
            <SelectItem value="high-to-low">High to Low</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
