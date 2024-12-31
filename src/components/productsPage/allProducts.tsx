'use client'
import Link from "next/link";
import Products from "../../../data/products.json";
import { ProductCard } from "../productCard";
import { useLocale } from "next-intl";
import { useState } from "react";


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

    // Lang
    const locale = useLocale()

    const [hover, setHover] = useState<Product | null>(null)
    
    const onMouseLeave = () => {
        setHover(null)
    };
    

    return (
        <div className={`p-5 flex flex-wrap gap-2 items-start justify-around`}>
            {Products.map((item) => (
            
                <Link key={item.id} href={'/'} className="pb-2">
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
    )
}