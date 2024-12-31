'use client'
import { SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "../sectionHeading";
import { useState } from "react";
import MultiSelect from "./multiSelect";

const options = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];



export function Filters () {

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  console.log(selectedOptions)
  

    return (
        <div className="bg-accent shadow-md p-5 pt-0">
            <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

            <MultiSelect options={options} selected={selectedOptions} setSelected={setSelectedOptions} />
        </div>

    )
}