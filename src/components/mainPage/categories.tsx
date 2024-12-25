'use client'
import { useState } from "react"
import { GrabScroll } from "../grabScroll"
import { Button } from "../ui/button"

const category = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

export function Categories () {

    const [isDown, setIsDown] = useState<any>(false)

    return (
        <div>
            <GrabScroll>

                {category.map((item) => 
                    <div key={item} id="item">
                        <Button 
                            variant={"default"} 
                            onMouseDown={() => setIsDown(item)}
                            onMouseUp={() => setIsDown(false)}
                            onMouseLeave={() => setIsDown(false)}
                            className={`${isDown === item ? "scale-90" : "scale-100"} w-16 h-16 rounded-full shadow-md my-3 transition-all`}
                        >
                            {/* {item} */}
                        </Button>
                    </div>
                )}

            </GrabScroll>
        </div>
    )
}