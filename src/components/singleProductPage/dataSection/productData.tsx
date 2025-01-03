import { DataHeader } from "./dataHeader";

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

export function ProductData ({product}: ProductDataProps) {

    return (
        <div className="">
            <DataHeader product={product} />
        </div>
    )
}