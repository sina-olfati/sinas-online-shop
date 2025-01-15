'use client'
import React, { useState } from "react";
import { Button } from "../../ui/button";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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

    const [selected, setSelected] = useState<string>("")

    // Next-intl
    const t = useTranslations('Products.filters.categories');

    const [isOver, setIsOver] = useState(true)

    return (
        <div>
            <div className="relative transition-all"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(true)}
            >

                <Button variant="ghost" className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    {data.name}
                    <ChevronDown className={`${isOver ? "text-primary" : null} transition-all`} />
                </Button>


                <div className={`absolute left-2 top-[110%] bg-primary-foreground shadow-md rounded-md text-xs h-64 w-[500px] ${isOver ? "flex" : "hidden"} flex-col`}>
                    {data.groups.map((group, index) => 
                        <div className="flex flex-col" key={index}>
                            <h1 className={`flex text-primary font-bold mt-4 ${!group.header ? "hidden" : null}`}>{group.header}</h1>

                            <div className="flex flex-col h-64 overflow-auto w-24 border border-primary">
                                {group.items.map((item) => 
                                    <Link 
                                        href={`/products?categories=${item}`} 
                                        className={`font-semibold hover:bg-[#00000010] dark:hover:bg-[#ffffff10] transition-all text-sm w-full p-2 ${selected === item ? "text-primary" : null}`}
                                        onMouseOver={() => setSelected(item)}
                                    >
                                        {t(item)}
                                    </Link>
                                    // <Button key={item} variant={"ghost"} className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs w-fit">
                                    // </Button>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full h-2 absolute"></div>

            </div>
        </div>
    )
}