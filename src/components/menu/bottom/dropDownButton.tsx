'use client'
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";

import { ChevronDown, ChevronRight, Telescope } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Products from "@/data/products.json";
import ProductsJp from "@/data/productsJp.json";

interface DataType {
    name: string;
    groups: {
        header: string | undefined,
        items: string[]
    }[]
}

interface Data {
    data: DataType
}

export function DropDownButton({ data }: Data) {

    const [isOver, setIsOver] = useState(true)
    const [selected, setSelected] = useState<string>("")

    // Next-intl
    const t = useTranslations('Products.filters.categories');

    const isEn = useLocale() === "en"

    useEffect(() => {
        setSelected("")
    }, [isOver])

    const filteredProducts = Products.filter((item) => {
        // Category filter
        if (selected && selected !== item.category) {
          return false; // Exclude products that don't match the selected categories
        }

        return true
    })

    return (
        <div>
            <div className="relative transition-all"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            >

                <Button variant="ghost" className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    {data.name}
                    <ChevronDown className={`${isOver ? "text-primary" : null} transition-all`} />
                </Button>


                {/* <div className={`absolute left-2 top-[110%] bg-primary-foreground shadow-md rounded-md text-xs h-64 w-[550px] ${isOver ? "flex" : "hidden"} `}> */}
                <div className={`absolute left-2 top-[110%] bg-primary-foreground shadow-md rounded-md text-xs h-[310px] w-[650px] ${isOver ? "flex" : "hidden"} `}>

                    {data.groups.map((group, index) => 
                        <div className="flex flex-col" key={index}>
                            {/* <h1 className={`flex text-primary font-bold mt-4 ${!group.header ? "hidden" : null}`}>{group.header}</h1> */}

                            <div className="flex flex-col shrink-0 h-full overflow-auto w-24 border border-y-0 border-l-0 border-r-secondary-foreground/30">
                                {group.items.map((item) => 
                                    <Link 
                                        key={item}
                                        href={`/products?categories=${item}`} 
                                        className={`font-semibold hover:bg-[#00000010] dark:hover:bg-[#ffffff10] transition-all text-sm w-full p-2 flex items-center relative ${selected === item ? "text-" : null}`}
                                        onMouseOver={() => setSelected(item)}
                                    >
                                        <ChevronRight size={20} className={`absolute left-[-20px] transition-all text- ${selected === item ? "left-[0px]" : null}`} />
                                        <p className={`truncate transition-all ${selected === item ? "pl-3 text-primary" : null }`}>
                                            {t(item)}
                                        </p>
                                    </Link>
                                )}
                            </div>        
                        </div>
                    )}

                    {selected && filteredProducts.length > 0 ? (
                        <div className="w-full h-full p-2 flex flex-col flex-wrap">
                            {/* Render filtered products */}
                            {filteredProducts.map((product) => { 
                                
                                // Find the corresponding jpItem for this product
                                const jpProduct = ProductsJp?.find((jp) => jp.id === product.id);

                                return (
                                    <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} key={product.id}>
                                        <Button variant={"ghost"} className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs w-fit">
                                            {isEn ? product.name : jpProduct?.name}
                                        </Button>
                                    </Link>
                            )})}
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
                            {/* Render fallback content */}
                            <Telescope size={60} />
                            <p className="font-semibold">{t("hover")}</p>
                        </div>
                    )}

                </div>

                <div className="w-full h-2 absolute"></div>

            </div>
        </div>
    )
}