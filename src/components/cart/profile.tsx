import Image from "next/image";
import { Button } from "@nextui-org/react";
import { DollarSignIcon, JapaneseYen, Pencil } from "lucide-react";
import { useCartStore } from "@/src/hooks/useCartStore";
import { useLocale, useTranslations } from "next-intl";


  
  export function Profile () {
    
    // Next-intl
    const t = useTranslations('Cart');

    const locale = useLocale()

    const { totalOriginalPrice, totalPrice } = useCartStore() 


    const prices = [
        {
            name: "prices.total",
            function: Math.round(totalOriginalPrice() * 100) / 100,
            // function: totalOriginalPrice(),
        },
        {
            name: "prices.cart",
            function: Math.round(totalPrice() * 100) / 100,
        },
        {
            name: "prices.profit",
            function: Math.round((totalOriginalPrice() - totalPrice()) * 100) /100,
            // discountPercent: Math.round((totalOriginalPrice() - totalPrice())/totalOriginalPrice())
            discountPercent: Math.round(((totalOriginalPrice() - totalPrice())/totalOriginalPrice()) * 1000) / 10
        },
    ]

    return (
        <div className="bg-secondary shadow-md flex flex-col gap-5 rounded-2xl w-full mysm:mb-16">

            <div about="images" className="flex flex-col gap-5">

                <div about="main image" className=" relative flex flex-col items-start justify-center">
                    <Image 
                        src={'/profile/shinjite.jpg'} 
                        className="w-full h-24 rounded-xl rounded-b-none shadow-md object-cover object-center overflow-hidden" 
                        width={1000} 
                        height={1000} 
                        alt="profile image" 
                    />
                    <Image 
                        src={'/profile/lamp.jpg'} 
                        className="w-24 h-24 rounded-full object-cover object-center overflow-hidden border-[3.5px] border-secondary absolute top-8 ml-5" 
                        width={1000} 
                        height={1000} 
                        alt="banner image" 
                    />
                </div>

                <div about="other images" className="w-full flex flex-col items-start gap-10 p-5">

                    <div className="flex gap-2 items-center justify-center">
                        <h2 className="font-semibold text-lg">{t('name')}</h2>
                        <Pencil size={15} className="hover:text-primary transition-all cursor-pointer" />
                    </div>

                    <div className="flex gap-7 mb-5">
                        <ul className="flex flex-col gap-2">
                            {prices.map((item, index) => 
                                <li key={item.name} className={`${index === 2 ? "text-primary" : null}`}>{t(item.name)}:</li>
                                // <li key={item.name} className={index === 2 ? "text-primary" : null}>{item.name}:</li>
                            )}
                        </ul>
                        <ul className="flex flex-col gap-2">
                            {prices.map((item, index) => 
                                <li key={item.name}
                                    className={`font-semibold ${index === 2 ? "text-primary" : null} flex items-center  gap-1`}
                                >
                                    {locale === "en" ? <DollarSignIcon size={15} /> : <JapaneseYen size={15} /> }
                                    {locale === "en" ? item.function : Math.round(item.function*100)}
                                    {item.discountPercent ? ` (${item.discountPercent}%)` : null} 
                                </li>
                            )}
                        </ul>

                    </div>

                    <Button color="primary" variant="shadow" fullWidth isDisabled={totalPrice() ? false : true} className="font-semibold py-6">
                        {t('button')}
                    </Button>

                </div>
            </div>

        </div>
    )
}