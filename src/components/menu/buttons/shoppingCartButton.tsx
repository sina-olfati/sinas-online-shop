// "use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ShoppingCartButton() {

  return (
    <Button
      variant="outline"
      size="icon"
    //   onClick={() => null}
    >
      <ShoppingCart
        className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
      />
    </Button>
  );
}