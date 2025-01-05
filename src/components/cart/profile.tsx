import Image from "next/image";
import { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import Banner from "/banners/man4.jpg";
import { CircleUser, Pencil, UserRound } from "lucide-react";
import { useCartStore } from "@/src/hooks/useCartStore";
import { useLocale } from "next-intl";


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
  
  interface ImagesStickyProps {
    product: Product | null;
  }

  
  export function Profile () {
    
    const locale = useLocale()

    const { totalOriginalPrice, totalPrice } = useCartStore() 


    const prices = [
        {
            name: "Total",
            function: Math.round(totalOriginalPrice() * 100) / 100,
        },
        {
            name: "Your Cart",
            function: Math.round(totalPrice() * 100) / 100,
        },
        {
            name: "Your Profit",
            function: Math.round((totalOriginalPrice() - totalPrice()) * 100) /100,
            // discountPercent: Math.round((totalOriginalPrice() - totalPrice())/totalOriginalPrice())
            discountPercent: Math.round(((totalOriginalPrice() - totalPrice())/totalOriginalPrice()) * 1000) / 10
        },
    ]

    return (
        <div className="bg-secondary shadow-md flex flex-col gap-5 rounded-2xl w-full">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image" className=" relative flex flex-col items-start justify-center">
                    <Image 
                        src={'/profile/shinjite.jpg'} 
                        className="w-full h-24 rounded-xl rounded-b-none shadow-md object-cover object-center overflow-hidden" 
                        width={1000} 
                        height={1000} 
                        alt="profile image" 
                    />
                    <Image 
                        src={'/profile/lamp.jpg'} 
                        className="w-24 h-24 rounded-full object-cover object-center overflow-hidden border-[3.5px] border-secondary absolute top-8 ml-5" 
                        width={1000} 
                        height={1000} 
                        alt="banner image" 
                    />
                </div>

                <div about="other images" className="w-full flex flex-col items-start gap-10 p-5">

                    <div className="flex gap-2 items-center justify-center">
                        <h2 className="font-semibold text-lg">Harry Potter</h2>
                        <Pencil size={15} className="text-primary hover:rotate-45 transition-all cursor-pointer" />
                    </div>

                    <div className="flex gap-7">
                        <ul>
                            {prices.map((item) => 
                                <li key={item.name}>{item.name}:</li>
                            )}
                        </ul>
                        <ul>
                            {prices.map((item) => 
                                <li key={item.name}
                                >
                                    {/* {Math.round(item.function * 100) {locale === "en" ? '/ 100' : null} }  */}
                                    {item.function} 
                                    {item.discountPercent ? `- ${item.discountPercent}% OFF` : null} 
                                    {/* {item.discountPercent ? `- ${Math.round(item.discountPercent * 1000) /10}% OFF` : null}  */}
                                </li>
                            )}
                        </ul>

                    </div>

                    <Button>
                        Confirm and Buy
                    </Button>




                    {/* {product.images.map((image, index) => 
                        <div 
                            key={index} 
                            className="px-2 cursor-pointer"
                            onMouseOver={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(0)}
                            onTouchEndCapture={() => setHoveredImage(index)}
                            // onClick={() => {setClicked(index);}}
                            onClick={() => {setClicked(index); onOpen()}}
                        >
                            <Image 
                                src={image} 
                                className="w-16 rounded-md shadow" 
                                width={1000} 
                                height={1000} 
                                alt="product image"
                            />
                        </div>
                    )} */}
                </div>
            </div>

        </div>
    )
}