'use client'
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import { useCartStore } from "@/src/hooks/useCartStore";
import Image from "next/image";
import { AddToCartButton } from "../addToCartButton";

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

export function CartProducts() {

  const locale = useLocale();

  const cart = useCartStore();

  return (
    <div className="flex flex-col gap-5 p-5">
      {/* Price Filter */}
      <div>
      </div>

      {/* Products List */}
      <div className="flex flex-col gap-4 items-start justify-start">
        {cart.cart.length > 0 ? (
          cart.cart.map((item) => (
            <div
              key={item.id}
              className="h-28 w-full bg-secondary p-2 flex items-center justify-between rounded-lg"
            >
              {/* Product Link */}
              <Link
                href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-5 shrink-0"
              >
                <Image src={item.image} className="w-24 rounded-lg" width={1000} height={1000} alt="product image" />

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-primary">{item.price * item.quantity}</p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="w-[30%] scale-100 flex items-center justify-end">
                <div className="w-full scale-100">
                    <AddToCartButton productId={item.id} />
                </div>
              </div>

            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
