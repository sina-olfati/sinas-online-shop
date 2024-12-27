'use client';
import { useState } from "react";
import { GrabScroll } from "./grabScroll";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader, Chip, Image } from "@nextui-org/react";
// compoents
import { SectionHeading } from "./sectionHeading";
// icons
import { DollarSign, Percent, Star } from "lucide-react";
import { JapaneseYen } from "lucide-react";
import { useLocale } from "next-intl";

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

    const router = useRouter();
    const [isDown, setIsDown] = useState<Product | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [clickThreshold] = useState(5); // Distance to determine a drag

    const handleNavigate = (path: string) => {
        // Navigate only if not dragging
        if (!isDragging) {
            router.push(path);
        }
    };

    const onMouseDown = (item: Product, e: React.MouseEvent) => {
        setIsDown(item);
        setIsDragging(false); // Reset dragging state
        setStartX(e.clientX); // Store the initial position
    };

    const onMouseUp = (item: Product) => {
        if (!isDragging && isDown === item) {
            handleNavigate('./sss'); // Navigate only if not dragging
        }
        setIsDown(null); // Reset state
    };

    const onMouseLeave = () => {
        setIsDown(null); // Reset state on mouse leave
        setIsDragging(false); // Reset dragging state
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (isDown) {
            const dx = e.clientX - startX; // Calculate distance moved
            if (Math.abs(dx) > clickThreshold) {
                setIsDragging(true); // Set dragging state if moved beyond threshold
            }
        }
    };


    // Lang
    const locale = useLocale()
    

    return (
        <div className='border border-primary w-full flex flex-col mt-5 py-3 overflow-hidden'>

            <SectionHeading name={name} icon={icon}/>

            <GrabScroll>

                {products.map((item) => (
                    
                        <Card 
                            key={item.id}
                            onMouseDown={(e) => onMouseDown(item, e)}
                            onMouseUp={() => onMouseUp(item)}
                            onMouseLeave={onMouseLeave}
                            onMouseMove={onMouseMove}
                            className={`py-4 px-2 mx-1 cursor-pointer shadow-sm bg-primary/15 border dark:border-primary/30 relative ${isDown === item ? "scale-95" : "scale-100"}`} 
                        >
                            <CardHeader className="pt-0 px-2 flex-col items-start z-2">
                                <Image
                                alt="Card background"
                                className="object-cover rounded-xl z-3"
                                src={item.images[0]}
                                width={300}
                                onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
                                />
                            </CardHeader>
                            <CardBody className="overflow-visible pt-2 pb-0">

                                <p className="text-xs uppercase font-bold truncate">{item.name}</p>

                                <div className="flex gap-2 justify-start items-center mt-2">
                                    <Star fill="#F4BB44" className="text-[#F4BB44] w-5"/>
                                    <p>{item.ratings}</p>
                                </div>

                                <div className="flex items-end mt-1">
                                    {locale === "en" ? <DollarSign className="w-5" /> : <JapaneseYen className="w-5" />}
                                    <div className=" flex flex-col justify-end items-start h-7 relative pl-1">
                                        {item.discounted_price !== item.original_price ? 
                                        <small className=" p-0 m-0 text-xs text-secondary-foreground/60 line-through absolute bottom-4">{locale === "en" ? item.original_price : Math.round(item.original_price*100)}</small> 
                                        : null}
                                        <p className={`text- uppercase font-bold p-0 m-0 ${item.discounted_price !== item.original_price ? "text-primary" : ""} `}>{locale === "en" ? item.discounted_price : Math.round(item.discounted_price*100)}</p>
                                    </div>
                                </div>

                            </CardBody>

                            {item.original_price !== item.discounted_price ? 
                                <Chip color="primary" variant="shadow" endContent={<Percent width={24} />} className="absolute top-0 right-[-10px] scale-50 px-2 py-4 font-bold text-2xl z-5">
                                    {Math.round((item.original_price-item.discounted_price)/item.original_price*100)}
                                </Chip>
                             : null}

                        </Card>

                ))}

            </GrabScroll>
        </div>
    )
}