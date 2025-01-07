import Image from "next/image";
import { useState } from "react";
import { ImagesModal } from "./ImagesModal";
import { useDisclosure } from "@nextui-org/react";
import { ProductType } from "@/src/types/product";
  
  interface ImagesStickyProps {
    product: ProductType;
  }


export function ImagesSticky ({product}: ImagesStickyProps) {

    const [hoveredImage, setHoveredImage] = useState(0)
    const [clicked, setClicked] = useState<number | undefined>(1)
    // Modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <div className="bg-secondary shadow-md mymd:shadow p-5 mylg:p-3 flex rounded-2xl w-full">

            <div about="images" className="flex flex-col mymd:flex-row mysm:flex-col gap-5">

                <div about="main image" className="mymd:w-[50%] mysm:w-full">
                    <Image 
                        src={product.images[hoveredImage]} 
                        className="w-full cursor-pointer rounded-xl shadow-sm" 
                        width={1000} 
                        height={1000} 
                        alt="product image" 
                        onClick={() => {setClicked(0); onOpen()}}
                    />
                </div>

                <div about="other images" className="w-full mymd:w-[50%] mysm:w-full flex items-center justify-center mymd:justify-around mysm:justify-center flex-wrap">
                    {product.images.map((image, index) => 
                        <div 
                            key={index} 
                            className="px-2 mymd:p-0 mysm:p-1 cursor-pointer mymd:w-[45%] mysm:w-auto aspect-[1/1]"
                            onMouseOver={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(0)}
                            onTouchEndCapture={() => setHoveredImage(index)}
                            // onClick={() => {setClicked(index);}}
                            onClick={() => {setClicked(index); onOpen()}}
                        >
                            <Image 
                                src={image} 
                                className="w-16 mymd:w-full mysm:w-16 rounded-md shadow" 
                                width={1000} 
                                height={1000} 
                                alt="product image"
                            />
                        </div>
                    )}
                </div>
            </div>

            {clicked !== undefined ?
                <ImagesModal
                    images={product.images} 
                    clickedIndex={clicked} 
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                /> 
            : null
            }

        </div>
    )
}