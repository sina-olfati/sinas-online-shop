'use client';
import Products from '../../data/products.json'
import { useState } from "react";
import { GrabScroll } from "./grabScroll";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
// compoents
import { SectionHeading } from "./sectionHeading";

// Define the structure of the reviews
interface Review {
    summary: string;
    pros: string[];
    cons: string[];
}

// Define the structure of a product
interface Product {
    id: number;
    name: string;
    images: string[];
    category: string;
    original_price: number;
    discounted_price: number;
    ratings: number;
    reviews: Review;
    sales_count: number;
    brand: string;
    fabric_type: string;
    color: string;
}

// Update the Data interface to match the structure of the products
interface Data {
    name: string;
    icon: any;
    products: Product[]; // Change here to use the Product type
}


export function ProductsScroll ({name, icon, products}: Data) {

    return (
        <div className='border border-primary w-full flex flex-col mt-5 py-3'>

            <SectionHeading name={name} icon={icon}/>

            <GrabScroll>
                {products.map((item) => (
                    
                    <div>
                        {item.images}
                    </div>

                    // <div 
                    //     key={item}
                    //     onMouseDown={(e) => onMouseDown(item, e)}
                    //     onMouseUp={() => onMouseUp(item)}
                    //     onMouseLeave={onMouseLeave}
                    //     onMouseMove={onMouseMove}
                    //     className="flex flex-col items-center justify-center gap-3 group"
                    // >
                    //     <Button 
                    //         variant={"default"} 
                    //         className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md mt-3 transition-all`}
                    //     >
                    //         {item}
                    //     </Button>
                    //     <p className="font-bold group-hover:text-primary">{item}</p>
                    // </div>
                ))}
            </GrabScroll>
        </div>
    )
}