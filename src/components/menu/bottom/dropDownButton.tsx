'use client'
import { useState } from "react";
import { Button } from "../../ui/button";

import { ChevronDown } from "lucide-react";

interface data {
    name: string,
    headers: string[],
    items: string[][]
    // name: "Seasons",
    // headers: ["Spring", "Summer", "Fall", "Winter"],
    // items: [
    //     ["Shorts", "Swim suits", "T-shirts", "Light jackets"], // Spring items
    //     ["Hats", "Sunglasses", "Flip flops", "Beach towels"], // Summer items
    //     ["Sweaters", "Scarves", "Boots", "Pumpkin spice lattes"], // Fall items
    //     ["Coats", "Gloves", "Beanies", "Hot chocolate"] // Winter items
    // ]
}

export function DropDownButton(data: data) {

    const {name, headers, items} = data

    const [isOver, setIsOver] = useState(false)

    return (
        <div>
            <div className="relative transition-all"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            >

                <Button variant="ghost" className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    {name}
                    <ChevronDown />
                </Button>


                <div className={`absolute left-2 top-[110%] bg-primary-foreground shadow-md rounded-md py-2 px-4 text-xs min-h-64 min-x-52 ${isOver ? "flex" : "hidden"} flex-col`}>
                    {headers?.map((header) => 
                        <div className="flex flex-col" key={header}>
                            <h1 className="text-primary font-bold mt-4">{header}</h1>

                            <div className="flex flex-">
                                {items[headers.indexOf(header)]?.map((item) => 
                                    <Button variant={"ghost"} className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">{item}</Button>
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