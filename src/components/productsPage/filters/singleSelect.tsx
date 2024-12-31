import { useState, useEffect, useRef } from "react";

interface Option {
  key: string;
  label: string;
}

interface SingleSelectProps {
  options: Option[];
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>; // Type of setSelected for single select
}




export default function SingleSelect({ options, selected, setSelected }: SingleSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(selected); // Initialize with the selected prop
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Handle selection
  const handleSelection = (key: string) => {
    setSelectedOption(key); // Set the selected option
    setSelected(key); // Update the parent component state
    setIsDropdownOpen(false); // Close the dropdown after selection
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

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full text-left"
      >
        {selectedOption ? options.find((o) => o.key === selectedOption)?.label : "Select Category"}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow w-full z-10">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => handleSelection(option.key)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedOption === option.key ? "bg-gray-100" : ""
              }`}
            >
              <input
                type="radio" // Radio button for single select
                checked={selectedOption === option.key}
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
