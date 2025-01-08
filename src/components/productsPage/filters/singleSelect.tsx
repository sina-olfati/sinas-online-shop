import { Checkbox } from "@nextui-org/react";
import { ChevronDown, X } from "lucide-react";
import { useTranslations } from "next-intl";
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

  // Sync selectedOptions with the selected prop from the parent
  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]); // This ensures selectedOptions is updated whenever the selected prop changes

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


  // Next-intl
  const t = useTranslations('Products.filters.gender');

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        // className={`bg-primary text-accent ${selectedOption === undefined ? " bg-primary/75" : null } px-4 py-2 rounded w-full text-left truncate transition-all`}
        className={`bg-primary text-accent text-sm ${selectedOption === undefined ? "text-accent/70" : null } px-4 py-3 rounded w-full text-left truncate transition-all flex items-center justify-between`}
      >
        {selectedOption ? t(options.find((o) => o.key === selectedOption)?.label) : t('name')}
        <div 
          onClick={(e) => {
            e.stopPropagation(); 
            if (selectedOption) {
              setSelected(undefined); // Reset options when selectedOptions is empty
            } else {
              setIsDropdownOpen(true); // Toggle dropdown if selectedOptions is not empty
            }
          }}
        >
            {!selectedOption ? <ChevronDown size={20} /> : <X size={20} onClick={() => setIsDropdownOpen(false)} /> }
        </div>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-background border rounded shadow w-full z-10">
          {options.map((option) => (
            <div
              key={option.key}
              onClick={() => handleSelection(option.key)}
              className={`px-4 py-2 cursor-pointer hover:bg-secondary-foreground/10 ${
                selectedOption === option.key ? "bg-secondary-foreground/5" : ""
              }`}
            >
              
              <Checkbox
                isSelected={selectedOption === option.key}
                onChange={() => handleSelection(option.key)}
              >
                {t(option.label)}{}
              </Checkbox>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
