'use client'
import { useEffect, useState } from "react";
import { Slider } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";


interface Data { 
    sliderValue: number[] | undefined;
    setSliderValue: React.Dispatch<React.SetStateAction<number[] | undefined>>; 
}


export function PriceSlider({sliderValue, setSliderValue}: Data) {

  const lang = useLocale()

  const [priceRange, setPriceRange] = useState<number[] | undefined>(sliderValue); // Using an array of numbers
  // const [used, setUsed] = useState<boolean>(false)
  // console.log(priceRange)

  // Sync selectedOptions with the selected prop from the parent
  useEffect(() => {
    setPriceRange(sliderValue);
  }, [sliderValue]); // This ensures selectedOptions is updated whenever the selected prop changes

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value); // Update the state with the new slider range
      setSliderValue(value)
      // setUsed(true)
    }
  };


  // Next-intl
  const t = useTranslations('Products.filters');

  return (
    <Slider
      // className={`${!used ? "opacity-75" : null } transition-all`}
      // className="max-w-md"
      value={priceRange} // Controlled value of the slider
      onChange={handleSliderChange} // Update state when the slider value changes
      formatOptions={{ style: "currency", currency: lang === "en" ? "USD" : "JPY" }}
      label={t('range')}
      maxValue={200}
      minValue={0}
      step={5}
      // range // Ensures it's a range slider
    />
  );
}