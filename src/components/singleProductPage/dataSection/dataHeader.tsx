import { Star } from "lucide-react";
import { AddToCartButton } from "../../addToCartButton";
import StarRating from "./starRating";

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
  
interface ProductDataProps {
    product: Product;
}

export function DataHeader ({product}: ProductDataProps) {

    const stars = product.ratings.toString

    return (
        <div>

            <div className="flex flex-col gap-5 p-5 bg-secondary rounded-lg shadow">
                <h1 className="font-semibold text-2xl">{product.name}</h1>    
                <StarRating rating={2.5} />
                <div about="addToCartButton">
                    <AddToCartButton />
                </div>
            </div>
            
        </div>
    )
}