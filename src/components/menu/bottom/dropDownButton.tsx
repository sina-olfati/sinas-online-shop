'use client'
import { useState } from "react";
import { Button } from "../../ui/button";

export function DropDownButton() {

    const [isOver, setIsOver] = useState(true)

    return (
        <div>
            <div className="border border-primary relative transition-all"
            // onMouseOver={() => setIsOver(true)}
            // onMouseLeave={() => setIsOver(false)}
            >

                <Button
                variant="ghost"
                // size=""
                // onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
                className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    Name
                </Button>



                <div className={`border border-primary absolute left-0 bg-primary-foreground shadow-md rounded-md py-2 px-4 text-xs max-h-48 max-w-96 ${isOver ? "flex" : "hidden"} flex-col`}>

                    <h1>Data</h1>
                    <p className="flex flex-shrink-0">a lot of things</p>
                    
                </div>

            </div>
        </div>
    )
}