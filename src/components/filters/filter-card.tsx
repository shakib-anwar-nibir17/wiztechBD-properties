"use client";

import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

interface FilterCardProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export function FilterCard({
  title,
  children,
  defaultExpanded = true,
}: Readonly<FilterCardProps>) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-white rounded-[12px] p-6 border border-neutral-200 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? (
            <Minus className="w-6 h-6 text-gray-900" strokeWidth={3} />
          ) : (
            <Plus className="w-6 h-6 text-gray-900" strokeWidth={3} />
          )}
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="border-t border-neutral-200 mb-4" />
          {children}
        </>
      )}
    </div>
  );
}
