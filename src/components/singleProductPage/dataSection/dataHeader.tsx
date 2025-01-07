import { DollarSign, JapaneseYen, Package } from "lucide-react";
import { AddToCartButton } from "../../addToCartButton";
import StarRating from "./starRating";
import { useLocale, useTranslations } from "next-intl";
import { ProductType } from "@/src/types/product";

interface ProductDataProps {
    product: ProductType;
}

export function DataHeader ({product}: ProductDataProps) {

    // Next-intl
    const t = useTranslations('Product');

    const locale = useLocale()

    return (
        <div>

            <div className="flex flex-col gap-5 p-5 bg-secondary rounded-lg shadow">

                <h1 className="font-semibold text-2xl mysm:text-xl">{product.name}</h1>    

                <div>
                    <StarRating rating={product.ratings} />
                </div>

                <div className="flex items-center gap-3 mysm:gap-1 p-3 mysm:p-1 pr-5 bg-primary/10 rounded-md w-fit">
                    <Package size={40} className="relative top-[2px] mysm:top-0 mysm:scale-80" />
                    <h2 className="font-thin text-xs">{t('guarantee')}</h2>
                </div>

                <div className="mt-7 mysm:mt-5">
                    <div className="flex items-end">
                        {locale === "en" ? <DollarSign size={25} className="mysm:scale-80" /> : <JapaneseYen size={25} className="mysm:scale-80" />}
                        <div className="flex flex-row justify-end items-center gap-2 h-7 relative">
                            <p
                                className={`font-semibold text-3xl mysm:text-2xl p-0 m-0 relative ${
                                product.discounted_price !== product.original_price ? "text-primary" : ""
                                }`}
                            >
                                {locale === "en" ? product.discounted_price : Math.round(product.discounted_price * 100)}
                            </p>
                            {product.discount_percent ? (
                                <small className="p-0 m-0 text-sm mysm:text-xs text-secondary-foreground/70 line-through relative bottom-[7px]">
                                    {locale === "en" ? product.original_price : Math.round(product.original_price * 100)}
                                </small>
                            ) : null}
                        </div>
                    </div>
                </div>
                
                <div className="w-[60%] mysm:w-full mx-auto mysm:scale-80">
                    <AddToCartButton productId={product.id} />
                </div>
                
            </div>
            
        </div>
    )
}