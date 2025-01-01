'use client'
import Link from "next/link";
import Products from "../../../data/products.json";
import { ProductCard } from "../productCard";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useSearchParams } from "next/navigation"; // to get query params
// icons
import { Filter, ArrowDownNarrowWide, ArrowDownWideNarrow } from "lucide-react";


interface Product {
  id: number;
  name: string;
  images: string[];
  category: string;
  original_price: number;
  discounted_price: number;
  ratings: number;
  reviews: any;
  sales_count: number;
  brand: string;
  fabric_type: string;
  color: string;
  season: string; // New field for season
  gender: string; // New field for gender
}

export function AllProducts () {
    const [priceFilter, setPriceFilter] = useState<string>("")

    // Lang
    const locale = useLocale()

    // const [hover, setHover] = useState<Product | null>(null)
    const [hover, setHover] = useState<Product | null>(null);
    const onMouseLeave = () => {
        setHover(null)
    };

    // Get query parameters from the URL
    const searchParams = useSearchParams();

    const categoriesParam = searchParams.get("categories")?.split(",") || [];
    const priceParam = searchParams.get("price")?.split(",").map(Number) || [0, 1000]; // default range 0 to 1000
    const discountParam = searchParams.get("discount") === "true" || false;
    const seasonsParam = searchParams.get("seasons")?.split(",") || []; // Extract season from query
    const genderParam = searchParams.get("gender") || ""; // Extract gender from query

    // Function to apply filters to the products array based on query params
    const filteredProducts = Products.filter((item) => {
        // Category filter
        if (categoriesParam.length > 0 && !categoriesParam.includes(item.category)) {
            return false; // Exclude products that don't match the selected categories
        }

        // Price range filter
        if (item.discounted_price < priceParam[0] || item.discounted_price > priceParam[1]) {
            return false; // Exclude products outside the selected price range
        }

        // Discount filter
        if (discountParam && item.discounted_price === item.original_price) {
            return false; // Exclude products that are not discounted
        }

        // Season filter
        if (seasonsParam.length > 0 && !seasonsParam.includes(item.season)) {
            return false; // Exclude products that don't match the selected season
        }

        // Gender filter
        if (genderParam && item.gender !== genderParam && item.gender !== "Unisex") {
            return false; // Exclude products that don't match the selected gender
        }

        return true; // Keep product if it passes all filters
    });

    return (
        <div className="flex flex-col gap-5 p-5">
            {/* Price Filter */}
            <div>
                <Select
                    disableSelectorIconRotation
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-36"
                    label=""
                    aria-label="price filter"
                    labelPlacement="outside"
                    placeholder="Default"
                    selectorIcon={
                        priceFilter === "" ? <Filter /> :
                        priceFilter === "cheap" ? <ArrowDownNarrowWide /> : <ArrowDownWideNarrow />
                    }
                >
                    {[
                        { key: "cheap", label: "Cheap" },
                        { key: "expensive", label: "Expensive" },
                    ].map((filter) => (
                        <SelectItem key={filter.key} value={filter.key}>
                            {filter.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>

            {/* Products List */}
            <div className="flex flex-wrap gap-4 items-start justify-start">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Link key={item.id} href={'/'} className="mb-">
                            <ProductCard
                                item={item}
                                onMouseLeave={onMouseLeave}
                                setHover={setHover}
                                hover={hover}
                                locale={locale}
                            />
                        </Link>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    )
}





// 'use client'
// import Link from "next/link";
// import Products from "../../../data/products.json";
// import { ProductCard } from "../productCard";
// import { useLocale } from "next-intl";
// import { useState } from "react";
// import { Select, SelectItem } from "@nextui-org/react";
// // icons
// import { Filter, ArrowDownNarrowWide, ArrowDownWideNarrow } from "lucide-react";


// interface Product {
//     id: number;
//     name: string;
//     images: string[];
//     category: string;
//     original_price: number;
//     discounted_price: number;
//     ratings: number;
//     reviews: any;
//     sales_count: number;
//     brand: string;
//     fabric_type: string;
//     color: string;
//   }



// export function AllProducts () {

//     const [priceFilter, setPriceFilter] = useState<string>("")

//     const filters = [
//         {key: "cheap", label: "cheap"},
//         {key: "expensive", label: "expensive"},
//       ];

//     // Lang
//     const locale = useLocale()

//     const [hover, setHover] = useState<Product | null>(null)
    
//     const onMouseLeave = () => {
//         setHover(null)
//     };


//     return (
//         <div className="flex flex-col gap-5 p-5">

//             <div>
//                 <Select
//                     disableSelectorIconRotation
//                     value={priceFilter}
//                     onChange={(e) => setPriceFilter(e.target.value)}
//                     className="w-36"
//                     // useLabel.ts:56 If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility
//                     label=""
//                     aria-label="sina"
//                     labelPlacement="outside"
//                     placeholder="Default"
//                     selectorIcon={
//                         priceFilter === "" ? <Filter /> :
//                         priceFilter === "cheap" ? <ArrowDownNarrowWide /> : <ArrowDownWideNarrow />
//                     }
//                 >
//                     {filters.map((filter) => (
//                         <SelectItem key={filter.key}>{filter.label}</SelectItem>
//                     ))}
//                 </Select>
//             </div>



//             <div className="flex flex-wrap gap-4 items-start justify-start">

//                 {Products.map((item) => (
                
//                     <Link key={item.id} href={'/'} className="mb-">
//                         <ProductCard
//                             item={item}
//                             // onMouseDown={}
//                             // onMouseUp={}
//                             onMouseLeave={onMouseLeave}
//                             // onMouseMove={}
//                             setHover={setHover}
//                             hover={hover}
//                             locale={locale}
//                         />
//                     </Link>
                                    
//                 ))}

//             </div>
//         </div>
//     )
// }