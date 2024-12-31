"use client";
import { SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "../../sectionHeading";
import { useState } from "react";
import MultiSelect from "./multiSelect";
import SingleSelect from "./singleSelect";
import { PriceSlider } from "./priceSlider";

const multiOptions = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];

const singleOptions = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];

export function Filters() {
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [singleSelected, setSingleSelected] = useState<string>();
  const [sliderValue, setSliderValue] = useState<number[] | undefined>();
  console.log(sliderValue);

  return (
    <div className="bg-accent shadow-md p-5 pt-0 flex flex-col gap-3 rounded-2xl">
      <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

      <MultiSelect
        options={multiOptions}
        selected={multiSelected}
        setSelected={setMultiSelected}
      />

      <SingleSelect
        options={singleOptions}
        selected={singleSelected}
        setSelected={setSingleSelected}
      />

      <PriceSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />

    </div>
  );
}
