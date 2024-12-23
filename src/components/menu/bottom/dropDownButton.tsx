'use client'
import { useState } from "react";
import { Button } from "../../ui/button";

export function DropDownButton() {

    const [isOver, setIsOver] = useState(false)

    return (
        <div>
            <div className="border border-primary relative transition-all"
            onMouseOver={() => setIsOver(true)}
            onMouseLeave={() => setIsOver(false)}
            >

                <Button
                variant="ghost"
                // size=""
                // onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
                className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
                    Name
                </Button>

                <div className={`border border-primary absolute left-0 transition-all ${isOver ? "opacity-100" : "opacity-0"}`}>
                    a lot of things
                </div>

            </div>
        </div>
    )
}