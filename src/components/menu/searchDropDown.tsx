'use client';
import Link from "next/link";
import Products from "../../../data/products.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProductType } from "@/src/types/product";
import { useLocale } from "next-intl";
import ProductsJp from "@/data/productsJp.json"


interface SearchDropDownProps {
  searched: string;
}

export function SearchDropDown({ searched }: SearchDropDownProps) {

  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const isEn = useLocale() === "en";

  useEffect(() => {
    const lowerCaseSearch = searched.toLowerCase();
    const filtered = Products.filter((item) =>
      [item.name, item.category, item.brand].some((field) =>
        field.toLowerCase().includes(lowerCaseSearch)
      )
    );
    setFilteredProducts(filtered);
  }, [searched]);


  return (
    <div className="absolute w-full mt-2 shadow overflow-auto rounded-2xl max-h-56 bg-primary-foreground z-50 flex flex-col">
      {filteredProducts.map((product) => {
        
        const jpItem = ProductsJp?.find((jp) => jp.id === product.id);

        return (
          <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} key={product.id} className="hover:bg-secondary-foreground/5 px-5">
            <div className="flex flex-col">
              <div className="py-2 flex gap-3 items-center">
                <Image className="w-12 rounded-sm" src={product.images[0]} width={48} height={48} alt={`product ${product.name} image`} />
                <div className="flex flex-col gap-1 truncate">
                  <h4 className="text-sm font-semibold">{!isEn ? jpItem?.name : product.name}</h4>
                  <p className="text-xs opacity-80">{isEn ? "In" : null} <i className="text-primary not-italic">{!isEn ? jpItem?.category : product.category}</i> {isEn ? null : "類"} </p>
                </div>
              </div>
              <div className="w-[95%] mx-auto border border-x-0 border-t-0 border-b-secondary-foreground/10"></div>
            </div>
          </Link>
      )})}
    </div>
  );
}
