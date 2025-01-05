'use client';
import { CartProducts } from '@/src/components/cart/cartProducts';
import { Profile } from '@/src/components/cart/profile';

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
  discount_percent: number;
}

export default function Cart() {

  return (
    <div className="mt-24 flex items-start justify-center gap-10 p-10">

      <div className="sticky top-32 w-96 h-full flex shrink-0">
        <Profile />
      </div>

      <div className="w-[60%] h-full">
        <CartProducts />
      </div>
    </div>
  );
}
