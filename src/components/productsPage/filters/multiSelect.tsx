import { Checkbox } from "@nextui-org/react";
import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// const options = [
//   { key: "electronics", label: "Electronics" },
//   { key: "clothing", label: "Clothing" },
//   { key: "appliances", label: "Home Appliances" },
//   { key: "books", label: "Books" },
// ];

interface Data {
    options: { key: string; label: string; }[],
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>; // Type of setSelectedOptions
}





export default function MultiSelect({options, selected, setSelected}: Data) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(selected);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(selectedOptions)
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

  // Add event listener for outside click using useEffect
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Set in the main Filters component on selection change  
  useEffect(() => {
    setSelected(selectedOptions);
  }, [selectedOptions, setSelected]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        // className={`bg-primary text-accent ${selectedOptions.length === 0 ? " bg-primary/75" : null } px-4 py-2 rounded w-full text-left truncate transition-all`}
        className={`bg-primary text-accent text-sm ${selectedOptions.length === 0 ? "text-accent/70" : null } px-4 py-3 rounded w-full text-left transition-all flex items-center justify-between`}
      >
        <div className="w-full truncate">
          {selectedOptions.length > 0
            ? selectedOptions
                .map((key) => options.find((o) => o.key === key)?.label)
                .join(", ")
            : "Select Categories"}
        </div>

        {selectedOptions.length > 0 && (
          <div 
            onClick={(e) => { e.stopPropagation(); setSelectedOptions([]); }}
          >
            <X className="" size={20} />
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-background border rounded shadow w-full z-10">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={(e) => {e.stopPropagation(); handleSelection(option.key); }}
              className={`px-4 py-2 cursor-pointer hover:bg-secondary-foreground/10 ${
                selectedOptions.includes(option.key) ? "bg-secondary-foreground/5" : ""
              }`}
              // className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
              //   selectedOptions.includes(option.key) ? "bg-gray-100" : ""
              // }`}
            >
              <Checkbox
                isSelected={selectedOptions.includes(option.key)}
                onChange={() => handleSelection(option.key)}
              >
                {option.label}
              </Checkbox>
            </div>
            //   <input
            //     type="checkbox"
            //     checked={selectedOptions.includes(option.key)}
            //     onChange={() => handleSelection(option.key)}
            //     className="mr-2"
            //   />
            //   {option.label}
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}
