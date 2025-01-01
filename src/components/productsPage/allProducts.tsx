'use client'
import Link from "next/link";
import Products from "../../../data/products.json";
import { ProductCard } from "../productCard";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
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
  }



export function AllProducts () {

    const [priceFilter, setPriceFilter] = useState<string>("")

    const filters = [
        {key: "cheap", label: "cheap"},
        {key: "expensive", label: "expensive"},
      ];

    // Lang
    const locale = useLocale()

    const [hover, setHover] = useState<Product | null>(null)
    
    const onMouseLeave = () => {
        setHover(null)
    };


    return (
        <div className="flex flex-col gap-5 p-5">

            <div>
                <Select
                    disableSelectorIconRotation
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="w-36"
                    // useLabel.ts:56 If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility
                    label=""
                    aria-label="sina"
                    labelPlacement="outside"
                    placeholder="Default"
                    selectorIcon={
                        priceFilter === "" ? <Filter /> :
                        priceFilter === "cheap" ? <ArrowDownNarrowWide /> : <ArrowDownWideNarrow />
                    }
                >
                    {filters.map((filter) => (
                        <SelectItem key={filter.key}>{filter.label}</SelectItem>
                    ))}
                </Select>
            </div>



            <div className="flex flex-wrap gap-4 items-start justify-start">

                {Products.map((item) => (
                
                    <Link key={item.id} href={'/'} className="mb-">
                        <ProductCard
                            item={item}
                            // onMouseDown={}
                            // onMouseUp={}
                            onMouseLeave={onMouseLeave}
                            // onMouseMove={}
                            setHover={setHover}
                            hover={hover}
                            locale={locale}
                        />
                    </Link>
                                    
                ))}

            </div>
        </div>
    )
}