import { Button } from "@nextui-org/react"
// import { Button } from "./ui/button"
// icons
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

export function AddToCartButton () {

    const [buy, setBuy] = useState(0)

    return (
        <div className="border border-primary relative">

            <Button 
            isIconOnly 
            color="primary" 
            variant="flat" 
            className="text-secondary-foreground h-5 transition-all"
            onPress={() => setBuy(1)}
            >
                {buy ? buy : <ShoppingCart /> }
            </Button>
            
        </div>
    )
}