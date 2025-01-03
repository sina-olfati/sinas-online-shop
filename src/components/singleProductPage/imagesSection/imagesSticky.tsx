import Image from "next/image";
import { useState } from "react";
import { ImagesFixed } from "./ImagesModal";
import { useDisclosure } from "@nextui-org/react";


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
    product: Product;
  }


export function ImagesSticky ({product}: ImagesStickyProps) {

    const [hoveredImage, setHoveredImage] = useState(0)
    const [clicked, setClicked] = useState<number | undefined>(1)
    // Modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="bg-secondary shadow-md p-5 flex flex-col gap-5 rounded-2xl w-full">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image">
                    <Image 
                        src={product.images[hoveredImage]} 
                        className="w-full cursor-pointer rounded-xl shadow-sm" 
                        width={1000} 
                        height={1000} 
                        alt="product image" 
                        onClick={() => setClicked(0)}
                    />
                </div>

                <div about="other images" className="w-full flex items-center justify-center flex-wrap">
                    {product.images.map((image, index) => 
                        <div 
                            key={index} 
                            className="px-2 cursor-pointer"
                            onMouseOver={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(0)}
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
                    )}
                </div>
            </div>

            {clicked !== undefined ?
                <ImagesFixed 
                    images={product.images} 
                    clickedIndex={clicked} 
                    close={setClicked} 
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
            /> 
            : null
            }

        </div>
    )
}