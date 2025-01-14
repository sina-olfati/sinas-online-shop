import { useTranslations } from "next-intl";
import Image from "next/image";

interface Text {
    text: string
}

export function ProductNotFound ({text}: Text) {

    // Next-intl
      const t = useTranslations('NotFound');

    return (
        <div className="border border-primary w-full flex flex-col gap-10 items-center justify-center py-10">

            <Image src={"/notFound/empty3.png"} className="w-[25rem] p-5 flex" width={1000} height={1000} alt="Product not found"/>

            <h2 className="font-semibold text-lg">{t(text)}</h2>

        </div>
    )
}