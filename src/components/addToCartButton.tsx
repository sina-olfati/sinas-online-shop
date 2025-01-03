import { Button } from "@nextui-org/react"
// import { Button } from "./ui/button"
// icons
import { ArrowDownToDot, Minus, Plus, ShoppingCart, Trash, Trash2 } from "lucide-react"
import { useState } from "react"

export function AddToCartButton () {

    const [buy, setBuy] = useState(0)

    return (
        <div className="relative flex items-center justify-center">

            {!buy ?
                <Button 
                color="primary" 
                variant="shadow" 
                className="transition-all w-[60%] py-7 my-5 font-semibold"
                onPress={() => setBuy(1)}
                >
                    {buy ? buy : <ShoppingCart /> }
                    Add To Cart
                </Button>
            : 
                <div className="transition-all w-[60%] my-5 bg-secondary-foreground/10 rounded-xl flex items-center justify-between">

                    <Button 
                        isIconOnly
                        color={buy === 1 ? "danger" : "primary"} 
                        variant="solid" 
                        className="transition-all h-14 w-14 rounded-xl rounded-r-none"
                        onPress={() => setBuy(buy-1)}
                    >
                        {buy === 1 ? <Trash2 /> : <Minus /> }
                    </Button>

                    <p>{buy}</p>

                    <Button 
                        isIconOnly
                        color="primary" 
                        variant="solid" 
                        className="transition-all h-14 w-14 rounded-xl rounded-l-none"
                        onPress={() => setBuy(buy+1)}
                    >
                        <Plus />
                    </Button>

                </div>
            }
            
        </div>
    )
}