import { Button, Chip } from "@nextui-org/react";
import Products from "../../data/products.json";
// icons
import { Minus, Percent, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCartStore } from "../hooks/useCartStore";
import { ProductType } from "../types/product";
import { useTranslations } from "next-intl";


interface ProductDataProps {
  productId: number;
}

export function AddToCartButton({ productId }: ProductDataProps) {
  const product: ProductType | undefined = Products.find((item) => item.id === productId);

  const addItem = useCartStore((state) => state.addItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const cart = useCartStore((state) => state.cart);

  // Function to get the total quantity of a specific item in the cart
  const getItemQuantity = (itemId: number): number => {
    return cart.filter((item) => item.id === itemId).reduce((sum, item) => sum + item.quantity, 0);
  };

  if (!product) {
    return (
      <div className="relative flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const quantity = getItemQuantity(product.id);


  // Next-intl
  const t = useTranslations();

  return (
    <div className="relative flex items-center justify-center">
      {quantity === 0 ? (
        <div className="w-[100%] flex items-center my-5 justify-center relative">
          <Button
            color="primary"
            variant="shadow"
            className="transition-all w-full py-7 font-semibold flex shrink-0"
            onPress={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.discounted_price,
                originalPrice: product.original_price,
                quantity: 1,
                image: product.images[0],
              })
            }
          >
            <ShoppingCart />
            {t("AddToCartButton")}
          </Button>
          {product.discount_percent > 0 && (
            <Chip
              color="danger"
              variant="shadow"
              endContent={<Percent size={25} className="relative top-[0.5px]" />}
              className="absolute top-[-15px] right-[-25px] scale-75 px-2 py-4 font-bold text-2xl z-50"
            >
              {product.discount_percent}%
            </Chip>
          )}
        </div>
      ) : (
        <div className="transition-all w-[100%] my-5 bg-secondary-foreground/10 rounded-xl flex items-center justify-between">
          <Button
            isIconOnly
            color={quantity === 1 ? "danger" : "primary"}
            variant="solid"
            className="transition-all h-14 w-14 rounded-xl rounded-r-none"
            onPress={() => decrementItem(product.id)}
          >
            {quantity === 1 ? <Trash2 /> : <Minus />}
          </Button>
          <p className="text-2xl font-semibold mx-3">{quantity}</p>
          <Button
            isIconOnly
            color="primary"
            variant="solid"
            className="transition-all h-14 w-14 rounded-xl rounded-l-none"
            onPress={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.discounted_price,
                originalPrice: product.original_price,
                quantity: 1,
                image: product.images[0],
              })
            }
          >
            <Plus />
          </Button>
        </div>
      )}
    </div>
  );
}
