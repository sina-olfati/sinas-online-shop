'use client';

import { SlidersHorizontal, BadgePercent, Ban } from "lucide-react";
import { SectionHeading } from "../../sectionHeading";
import { useEffect, useState } from "react";
import MultiSelect from "./multiSelect";
import SingleSelect from "./singleSelect";
import { PriceSlider } from "./priceSlider";
import { Divider, Switch } from "@nextui-org/react";
import { useSearchParams } from "next/navigation"; // Access the query parameters
import { FilterButton } from "./filterButton";

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
  const searchParams = useSearchParams(); // Access the query parameters

  const [categorySelected, setCategorySelected] = useState<string[]>([]);
  const [seasonSelected, setSeasonSelected] = useState<string[]>([]);
  const [singleSelected, setSingleSelected] = useState<string | undefined>();
  const [priceSliderValue, setPriceSliderValue] = useState<number[] | undefined>([0, 1000]);
  const [discount, setDiscount] = useState<boolean>(false);

  // Set initial states based on query parameters
  useEffect(() => {
    const categoriesParam = searchParams.get("categories")?.split(",") || [];
    const seasonsParam = searchParams.get("seasons")?.split(",") || [];
    const genderParam = searchParams.get("gender") || undefined;
    const priceParam = searchParams.get("price") ? searchParams.get("price")!.split(",").map(Number) : [0, 1000];
    const discountParam = searchParams.get("discount") === "true";
    // Set state after reading query params
    setCategorySelected(categoriesParam);
    setSeasonSelected(seasonsParam);
    setSingleSelected(genderParam);
    setPriceSliderValue(priceParam);
    setDiscount(discountParam);
  }, [searchParams]); // Dependency on searchParams ensures this runs on refresh and initial load


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

      <PriceSlider sliderValue={priceSliderValue} setSliderValue={setPriceSliderValue} />

      <Divider />

      <div className="flex items-center gap-3">
        <p>Only Discounted</p>
        <Switch
          isSelected={discount}
          onChange={(e) => setDiscount(e.target.checked)}
          color="primary"
          endContent={<Ban />}
          size="sm"
          startContent={<BadgePercent />}
        />
      </div>

      <Divider />

      <FilterButton
        filters={{
          categories: categorySelected,
          seasons: seasonSelected,
          gender: singleSelected,
          price: priceSliderValue,
          discount: discount,
        }}
      />
    </div>
  );
}







// 'use client';
// import { SlidersHorizontal, BadgePercent, Ban } from "lucide-react";
// import { SectionHeading } from "../../sectionHeading";
// import { useEffect, useState } from "react";
// import MultiSelect from "./multiSelect";
// import SingleSelect from "./singleSelect";
// import { PriceSlider } from "./priceSlider";
// import { Button, Divider, Switch } from "@nextui-org/react";
// import { FilterButton } from "./filterButton";
// // icons
// // import { BadgePercent } from "lucide-react";

// const categoryOptions = [
//   { key: "electronics", label: "Electronics" },
//   { key: "clothing", label: "Clothing" },
//   { key: "appliances", label: "Home Appliances" },
//   { key: "books", label: "Books" },
// ];

// const seasonOptions = [
//   { key: "spring", label: "Spring" },
//   { key: "summer", label: "Summer" },
//   { key: "fall", label: "Fall" },
//   { key: "winter", label: "Winter" },
// ];

// const singleOptions = [
//   { key: "men", label: "Men" },
//   { key: "women", label: "Women" },
// ];

// export function Filters() {
//   const [categorySelected, setCategorySelected] = useState<string[]>([]);
//   const [seasonSelected, setSeasonSelected] = useState<string[]>([]);
//   const [singleSelected, setSingleSelected] = useState<string>();
//   const [priceSliderValue, setPriceSliderValue] = useState<number[] | undefined>([0, 1000]);
//   const [discount, setDiscount] = useState<boolean>(false);
//   // console.log(discount);

//   const [anythingNew, setAnythingNew] = useState<boolean>(false); // Use state for anythingNew


//   return (
//     <div className="bg-secondary shadow-md p-5 pt-0 mt-5 flex flex-col gap-5 rounded-2xl w-full">
//       <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

//       <MultiSelect
//         options={categoryOptions}
//         selected={categorySelected}
//         setSelected={setCategorySelected}
//         name="Categories"
//       />

//       <MultiSelect
//         options={seasonOptions}
//         selected={seasonSelected}
//         setSelected={setSeasonSelected}
//         name="Seasons"
//       />

//       <SingleSelect
//         options={singleOptions}
//         selected={singleSelected}
//         setSelected={setSingleSelected}
//       />

//       <PriceSlider sliderValue={priceSliderValue} setSliderValue={setPriceSliderValue} />

//       <Divider />

//       <div className="flex items-center gap-3">
//         <p>Only Discounted</p>
//         <Switch
//           defaultSelected
//           isSelected={discount} // Controlled value of the switch
//           onChange={(e) => setDiscount(e.target.checked)} // Handle state change
//           color="primary"
//           endContent={<Ban />}
//           size="sm"
//           startContent={<BadgePercent />}
//         ></Switch>
//       </div>

//       <Divider />

//       <FilterButton
//         filters={{
//           categories: categorySelected,
//           seasons: seasonSelected,
//           gender: singleSelected,
//           price: priceSliderValue,
//           discount: discount,
//         }}
//       />

//     </div>
//   );
// }
