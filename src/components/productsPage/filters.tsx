'use client'
import { SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "../sectionHeading";
import MultiSelect, { multiSelect } from "./multiSelect";
// aaaaaaaaaaaaaaaaaaaaaaaaaaa

import { useState, useRef } from "react";

const options = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaa



export function Filters () {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle selection
  const handleSelection = (key: string) => {
    setSelectedOptions((prev) =>
      prev.includes(key)
        ? prev.filter((option) => option !== key) // Remove if already selected
        : [...prev, key] // Add if not selected
    );
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };


    return (
        <div className="bg-accent shadow-md p-5 pt-0">
            <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

            <MultiSelect />


    </div>

    )
}