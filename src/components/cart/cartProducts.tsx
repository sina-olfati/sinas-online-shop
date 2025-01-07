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
    <div className="flex flex-col gap-5 p-5 w-full">

      {/* Products List */}
      <div className="flex flex-col gap-4 items-start justify-start">
        {cart.cart.length > 0 ? (
          cart.cart.map((item) => (
            <div
              key={item.id}
              className="h-28 mysm:h-auto w-full bg-secondary p-2 mysm:p-3 flex mysm:flex-col items-center mysm:items-start justify-between rounded-lg"
            >
              {/* Product Link */}
              <Link
                href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="mysm:h-24 flex items-center mysm:justify-start gap-5 shrink-0"
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
              <div className="w-[35%] mysm:w-[80%] mysm:h-16 mysm:mt-5 mysm:mx-auto flex items-center pr-5 mysm:pr-0 mysm:scale-75">
                <div className="w-full">
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
