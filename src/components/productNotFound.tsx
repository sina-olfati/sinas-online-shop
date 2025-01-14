import { useTranslations } from "next-intl";
import Image from "next/image";

interface Text {
    text: string
}

export function ProductNotFound({ text }: Text) {


    const randomImage1to4 = Math.floor(Math.random() * 4) + 1;

    console.log(Math.floor(Math.random() * 5) + 1)

    // Next-intl
    const t = useTranslations('NotFound');

    return (
        <div className="w-full flex flex-col gap-5 items-center justify-center py-10">

            <Image
                // src={`/notFound/empty${randomImage1to4}.png`}
                src={`/notFound/emptyBox.png`}
                className="w-[25rem] p-5 flex"
                width={1000}
                height={1000}
                alt="Product not found"
            />

            <h2 className="font-semibold text-lg text-center">{t(text)}</h2>

        </div>
    );
}
