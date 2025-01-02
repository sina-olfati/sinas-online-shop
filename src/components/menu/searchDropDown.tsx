'use client'
import Link from "next/link"
import Products from "../../../data/products.json"
import Image from "next/image"
import { useEffect, useState } from "react"
// import { useSearchParams } from "next/navigation";

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


export function SearchDropDown ({searched}: any) {

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        const lowerCaseSearch = searched.toLowerCase();
        const filtered = Products.filter((item) =>
            [item.name, item.category, item.brand].some((field) =>
                field.toLowerCase().includes(lowerCaseSearch)
            )
        );
        setFilteredProducts(filtered);
    }, [searched]);
    
    useEffect (() => {
        console.log(filteredProducts)

    }, [searched])

    return (
        <div className="absolute w-full mt-2 shadow overflow-auto rounded-2xl max-h-56 bg-primary-foreground z-50 flex flex-col">
            {filteredProducts.map((product) => 
                <Link href={"./"}  key={product.id}  className="hover:bg-secondary-foreground/5 px-5">
                    <div className="flex flex-col">

                        <div className="py-2 flex gap-3 items-center">
                            <Image className="w-12" src={product.images[0]} width={48} height={48} alt={`product ${product.name} image`} />
                            <div className="flex flex-col gap-1 truncate">
                                <h4 className="text-sm font-semibold">{product.name}</h4>
                                <p className="text-xs opacity-80">In <i className="text-primary not-italic">{product.category}</i></p>
                            </div>
                        </div>

                        <div className="w-[95%] mx-auto border border-x-0 border-t-0 border-b-secondary-foreground/10"></div>
                    </div>
                </Link>
            )}

            {/* <div className="fixed inset-0 z-20 bg-black/50"></div> */}
        </div>
    )
}