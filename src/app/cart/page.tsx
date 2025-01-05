'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ImagesSticky } from '@/src/components/singleProductPage/imagesSection/imagesSticky';
import { ProductData } from '@/src/components/singleProductPage/dataSection/productData';
import Products from '../../../data/products.json';
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
  const pathname = usePathname(); // Get the full pathname
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const segments = pathname.split('/'); // Split the pathname
    const productName = segments[segments.length - 1]; // Get the last segment
    if (productName) {
      const foundProduct = Products.find(
        (p) => p.name.toLowerCase().replace(/ /g, '-') === productName
      );
      setProduct(foundProduct || null); // Set null if no product is found
    }
  }, [pathname]);

//   if (!product) {
//     // Handle product not found or loading state
//     return <div>Loading or Product not found...</div>;
//   }

  return (
    <div className="mt-24 flex items-start justify-center gap-10 p-10">
      {/* <div about="filters" className="sticky top-24 w-[30%] h-full flex shring-0"> */}
      <div about="filters" className="sticky top-28 w-96 h-full flex shrink-0">
        <Profile />
      </div>

      <div about="products" className="w-[60%] h-full">
        {/* <ProductData product={product} /> */}
      </div>
    </div>
  );
}
