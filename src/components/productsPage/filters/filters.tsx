'use client';
import { SlidersHorizontal, BadgePercent, Ban } from "lucide-react";
import { SectionHeading } from "../../sectionHeading";
import { useEffect, useState } from "react";
import MultiSelect from "./multiSelect";
import SingleSelect from "./singleSelect";
import { PriceSlider } from "./priceSlider";
import { Button, Divider, Switch } from "@nextui-org/react";
// icons
// import { BadgePercent } from "lucide-react";

const multiOptions = [
  { key: "electronics", label: "Electronics" },
  { key: "clothing", label: "Clothing" },
  { key: "appliances", label: "Home Appliances" },
  { key: "books", label: "Books" },
];

const singleOptions = [
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
];

export function Filters() {
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [singleSelected, setSingleSelected] = useState<string>();
  const [sliderValue, setSliderValue] = useState<number[] | undefined>();
  const [discount, setDiscount] = useState<boolean>(false);
  // console.log(discount);

  const [anythingNew, setAnythingNew] = useState<boolean>(false); // Use state for anythingNew

  useEffect(() => {
    const isNew = multiSelected.length > 0 || singleSelected || sliderValue || discount ? true : false;
    setAnythingNew(isNew); // Update state
  }, [multiSelected, singleSelected, sliderValue, discount]);

  // console.log(anythingNew); // Logs updated state value

  return (
    <div className="bg-secondary shadow-md p-5 pt-0 mt-5 flex flex-col gap-5 rounded-2xl w-full">
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

      <Button
        variant="shadow"
        color="primary"
        isDisabled={!anythingNew}
      >
        Apply
      </Button>

    </div>
  );
}
