import { Button } from "@nextui-org/react"
// import { Button } from "./ui/button"
// icons
import { ShoppingCart } from "lucide-react"

export function AddToCartButton () {



    return (
        <div className="border border-primary">
            <Button 
            isIconOnly 
            color="primary" 
            variant="flat" 
            className="text-secondary-foreground"
            >
                <ShoppingCart />
            </Button>
        </div>
    )
}