import Image from "next/image";
import { useState } from "react";


interface ImagesProps {
    images: string[];
    clickedIndex: number;
    close: React.Dispatch<React.SetStateAction<number | undefined>>
}


export function ImagesFixed ({images, clickedIndex, close}: ImagesProps) {

    const [hoveredImage, setHoveredImage] = useState(0)

    return (
        <div className="bg-secondary shadow-md p-5 flex flex-col gap-5 rounded-2xl w-full">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image">
                    <Image 
                        src={images[hoveredImage]} 
                        className="w-full rounded-xl shadow-sm" 
                        width={1000} 
                        height={1000} 
                        alt="product image" 
                    />
                </div>

                <div about="other images" className="w-full flex items-center justify-center flex-wrap">
                    {images.map((image, index) => 
                        <div 
                            key={index} 
                            className="px-2"
                            onMouseOver={() => setHoveredImage(index)}
                            onMouseLeave={() => setHoveredImage(0)}
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

        </div>
    )
}