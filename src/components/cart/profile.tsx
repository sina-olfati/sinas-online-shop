import Image from "next/image";
import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import Banner from "/banners/man4.jpg";
import { CircleUser, UserRound } from "lucide-react";


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


export function Profile ({product}: ImagesStickyProps) {

    const [hoveredImage, setHoveredImage] = useState(0)
    const [clicked, setClicked] = useState<number | undefined>(1)
    // Modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="bg-secondary shadow-md flex flex-col gap-5 rounded-2xl w-full">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image" className="flex flex-col items-start justify-center">
                    <Image 
                        src={'/banners/shinjite.jpg'} 
                        className="w-full h-24 rounded-xl rounded-b-none shadow-sm object-cover object-center overflow-hidden" 
                        width={1000} 
                        height={1000} 
                        alt="product image" 
                        onClick={() => {setClicked(0); onOpen()}}
                    />
                    <div className="rounded-full bg-background flex items-center justify-center border border-secondary relative bottom-5 ml-5">
                        <CircleUser size={70}/>
                    </div>
                </div>

                <div about="other images" className="w-full flex items-center justify-center flex-wrap">
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