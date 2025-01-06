'use client'
import Link from "next/link";
import { useLocale } from "next-intl";
import { useCartStore } from "@/src/hooks/useCartStore";
import Image from "next/image";
import { AddToCartButton } from "../addToCartButton";
import { DollarSign, JapaneseYen } from "lucide-react";

export function CartProducts() {

  const isEn = useLocale() === "en"

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

                  <p className="font-semibold flex items-center">
                    {isEn ? <DollarSign size={15} /> : <JapaneseYen size={15} />}
                    {isEn ? Math.round(item.price*item.quantity*100)/100 : Math.round(item.price*item.quantity*100)}

                    {item.originalPrice !== item.price ?
                        <i className="flex items-center text-primary text-xs ml-2 relative top-[1px]">
                            {isEn ? <DollarSign size={12} /> : <JapaneseYen size={12} />}
                            {isEn ? Math.round((item.originalPrice - item.price)*item.quantity*100)/100 : Math.round((item.originalPrice - item.price)*item.quantity*100)} OFF!
                        </i>   : null 
                    }
                  </p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="w-[35%] scale-100 flex items-center justify-end pr-5">
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
