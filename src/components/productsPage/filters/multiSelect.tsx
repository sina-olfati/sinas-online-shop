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
        className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left"
      >
        {selectedOptions.length > 0
          ? selectedOptions
              .map((key) => options.find((o) => o.key === key)?.label)
              .join(", ")
          : "Select Categories"}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow w-full z-10">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => handleSelection(option.key)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedOptions.includes(option.key) ? "bg-gray-100" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.key)}
                onChange={() => handleSelection(option.key)}
                className="mr-2"
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
