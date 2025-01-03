import { Button, Chip } from "@nextui-org/react";
// icons
import { Minus, Percent, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

interface Discount {
    discount_percent: number; // Corrected spelling and structure
}

export function AddToCartButton({ discount_percent }: Discount) {
    const [buy, setBuy] = useState(0);

    return (
        <div className="relative flex items-center justify-center">
            {!buy ? (
                <div className="w-[60%] flex items-center my-5 justify-center relative">
                    <Button
                        color="primary"
                        variant="shadow"
                        className="transition-all w-full py-7 font-semibold flex shrink-0"
                        onPress={() => setBuy(1)}
                    >
                        {buy ? buy : <ShoppingCart />}
                        Add To Cart
                    </Button>
                    {discount_percent > 0 && (
                        <Chip
                            color="danger"
                            variant="shadow"
                            endContent={<Percent size={25} className="relative top-[0.5px]" />}
                            className="absolute top-[-15px] right-[-25px] scale-75 px-2 py-4 font-bold text-2xl z-50"
                        >
                            {discount_percent}
                        </Chip>
                    )}
                </div>
            ) : (
                <div className="transition-all w-[60%] my-5 bg-secondary-foreground/10 rounded-xl flex items-center justify-between">
                    <Button
                        isIconOnly
                        color={buy === 1 ? "danger" : "primary"}
                        variant="solid"
                        className="transition-all h-14 w-14 rounded-xl rounded-r-none"
                        onPress={() => setBuy(buy - 1)}
                    >
                        {buy === 1 ? <Trash2 /> : <Minus />}
                    </Button>
                    <p className="text-2xl font-semibold">{buy}</p>
                    <Button
                        isIconOnly
                        color="primary"
                        variant="solid"
                        className="transition-all h-14 w-14 rounded-xl rounded-l-none"
                        onPress={() => setBuy(buy + 1)}
                    >
                        <Plus />
                    </Button>
                </div>
            )}
        </div>
    );
}
