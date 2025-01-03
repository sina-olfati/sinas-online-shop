import Image from "next/image";


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

    return (
        <div className="bg-secondary shadow-md p-5 flex flex-col gap-5 rounded-2xl w-full">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image">
                    <Image 
                        src={product.images[0]} 
                        className="w-full rounded-xl" 
                        width={1000} 
                        height={1000} 
                        alt="product image" 
                    />
                </div>

                <div about="other images" className="border border-primary w-full flex items-center justify-center flex-wrap">
                    {product.images.map((image, index) => 
                        <div 
                            key={index} 
                            className="px-2"
                            
                        >
                            <Image 
                                src={image} 
                                className="w-16 rounded-md" 
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