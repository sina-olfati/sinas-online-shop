import { DollarSign, JapaneseYen, Package, Percent, Star } from "lucide-react";
import { AddToCartButton } from "../../addToCartButton";
import StarRating from "./starRating";
import { useLocale } from "next-intl";
import { Chip } from "@nextui-org/react";

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
    discount_percent: number
}
  
interface ProductDataProps {
    product: Product;
}

export function DataHeader ({product}: ProductDataProps) {

    const locale = useLocale()

    return (
        <div>

            <div className="flex flex-col gap-5 p-5 bg-secondary rounded-lg shadow">

                <h1 className="font-semibold text-2xl">{product.name}</h1>    

                <StarRating rating={product.ratings} />

                <div className="flex items-center gap-3 p-3 pr-5 bg-primary/10 rounded-md w-fit">
                    <Package size={40} className="relative top-[2px]" />
                    <h2 className="font-thin text-xs">Provider of this product <br/> guaranties the quality</h2>
                </div>

                <div className="mt-7">
                    <div className="flex items-end mt-0">
                        {locale === "en" ? <DollarSign size={25} /> : <JapaneseYen size={25} />}
                        <div className="flex flex-row justify-end items-center gap-2 h-7 relative">
                            <p
                                className={`font-semibold text-3xl p-0 m-0 relative ${
                                product.discounted_price !== product.original_price ? "text-primary" : ""
                                }`}
                            >
                                {locale === "en" ? product.discounted_price : Math.round(product.discounted_price * 100)}
                            </p>
                            {product.discount_percent ? (
                                <small className="p-0 m-0 text-sm text-secondary-foreground/70 line-through relative bottom-[7px]">
                                    {locale === "en" ? product.original_price : Math.round(product.original_price * 100)}
                                </small>
                            ) : null}
                        </div>
                    </div>
                </div>

                <AddToCartButton product={product} />
                
            </div>
            
        </div>
    )
}