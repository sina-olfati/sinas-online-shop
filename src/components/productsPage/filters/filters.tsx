'use client';
import { SlidersHorizontal, BadgePercent, Ban } from "lucide-react";
import { SectionHeading } from "../../sectionHeading";
import { useEffect, useState } from "react";
import MultiSelect from "./multiSelect";
import SingleSelect from "./singleSelect";
import { PriceSlider } from "./priceSlider";
import { Button, Divider, Switch } from "@nextui-org/react";
import { FilterButton } from "./filterButton";
// icons
// import { BadgePercent } from "lucide-react";

const categoryOptions = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];

const seasonOptions = [
  { key: "spring", label: "Spring" },
  { key: "summer", label: "Summer" },
  { key: "fall", label: "Fall" },
  { key: "winter", label: "Winter" },
];

const singleOptions = [
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
];

export function Filters() {
  const [categorySelected, setCategorySelected] = useState<string[]>([]);
  const [seasonSelected, setSeasonSelected] = useState<string[]>([]);
  const [singleSelected, setSingleSelected] = useState<string>();
  const [sliderValue, setSliderValue] = useState<number[] | undefined>();
  const [discount, setDiscount] = useState<boolean>(false);
  // console.log(discount);

  const [anythingNew, setAnythingNew] = useState<boolean>(false); // Use state for anythingNew

  useEffect(() => {
    const isNew = categorySelected.length > 0 || seasonSelected.length > 0 || singleSelected || sliderValue || discount ? true : false;
    setAnythingNew(isNew); // Update state
  }, [categorySelected, seasonSelected, singleSelected, sliderValue, discount]);

  // console.log(anythingNew); // Logs updated state value

  return (
    <div className="bg-secondary shadow-md p-5 pt-0 mt-5 flex flex-col gap-5 rounded-2xl w-full">
      <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

      <MultiSelect
        options={categoryOptions}
        selected={categorySelected}
        setSelected={setCategorySelected}
        name="Categories"
      />

      <MultiSelect
        options={seasonOptions}
        selected={seasonSelected}
        setSelected={setSeasonSelected}
        name="Seasons"
      />

      <SingleSelect
        options={singleOptions}
        selected={singleSelected}
        setSelected={setSingleSelected}
      />

      <PriceSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />

      <Divider />

      <div className="flex items-center gap-3">
        <p>Only Discounted</p>
        <Switch
          defaultSelected
          isSelected={discount} // Controlled value of the switch
          onChange={(e) => setDiscount(e.target.checked)} // Handle state change
          color="primary"
          endContent={<Ban />}
          size="sm"
          startContent={<BadgePercent />}
        ></Switch>
      </div>

      <Divider />

      <FilterButton
        filters={{
          categories: categorySelected,
          seasons: seasonSelected,
          gender: singleSelected,
          price: sliderValue,
          discount: discount,
        }}
      />

    </div>
  );
}
