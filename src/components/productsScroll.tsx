'use client';
import { useState } from "react";
import { GrabScroll } from "./grabScroll";
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

    return (
        <div className=' w-[100vw] flex flex-col mt-5 py-3 overflow-hidden'>

            <SectionHeading name={name} icon={icon}/>

            <GrabScroll>
                {products.map((item) => (
                    
                    <div 
                        key={item.id}
                        onMouseDown={(e) => onMouseDown(item, e)}
                        onMouseUp={() => onMouseUp(item)}
                        onMouseLeave={onMouseLeave}
                        onMouseMove={onMouseMove}
                        className="flex flex-col items-center justify-center gap-3 group"
                    >
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