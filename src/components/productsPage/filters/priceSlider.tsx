import { useState } from "react";
import { Slider } from "@nextui-org/react";


interface Data { 
    sliderValue: number[] | undefined;
    setSliderValue: React.Dispatch<React.SetStateAction<number[] | undefined>>; 
}


export function PriceSlider({sliderValue, setSliderValue}: Data) {
  const [priceRange, setPriceRange] = useState<number[]>([100, 500]); // Using an array of numbers

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value); // Update the state with the new slider range
      setSliderValue(value)
    }
  };

  return (
    <Slider
      className="max-w-md"
      value={priceRange} // Controlled value of the slider
      onChange={handleSliderChange} // Update state when the slider value changes
      formatOptions={{ style: "currency", currency: "USD" }}
      label="Price Range"
      maxValue={1000}
      minValue={0}
      step={50}
    //   range // Ensures it's a range slider
    />
  );
}