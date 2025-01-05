"use client";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Badge } from "@nextui-org/react";
import { useCartStore } from "@/src/hooks/useCartStore";

export function ShoppingCartButton() {

  const { totalItems } = useCartStore()
  let t

  return (
    <Link href={"../../cart"}>
      <Badge color="primary" content={totalItems()} variant="shadow" size="sm" isInvisible={totalItems() ? false : true } showOutline={false}>
        <Button
          variant="ghost"
          size="icon"
        //   onClick={() => null}
        className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all"
        >
          <ShoppingCart
            className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
          />
        </Button>
      </Badge>
    </Link>
  );
}