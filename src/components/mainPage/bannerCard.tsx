'use client'
import Image from "next/image"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useTranslations } from "next-intl"
// import { Logo } from "./menu/logo"


const data = [
    {
        id:1,
        name: "banner1",
        picture: "/banners/man3.png",
        link: "/products?gender=Male",
    },
    {
        id:2,
        name: 'banner2',
        picture: "/banners/lady4.jpg",
        link: "/products?gender=Female",
    }
]

export function BannerCard () {

    // Next-intl
    const t = useTranslations('HomePage.staticBanners');

    return (
        <div className="w-full my-20 flex gap-5 flex-row justify-between items-center">

            {data.map((card) => 
                // <div key={card.id} className="bg-['./productImages/hoody1.webp'] bg-cover bg-center">
                <div key={card.id} className="bg-muted-foreground w-full aspect-[20/9]  rounded-lg flex flex-col justify-between items-start px-8 py-9 relative overflow-hidden"> 
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center">
                        <Image 
                            width={0}
                            height={0} 
                            sizes="100vw"
                            // layout="contain"
                            src={card.picture}
                            alt="banner card"
                            className="w-[100%] h-auto"
                        />
                    </div>
                    <h2 className="font-bold text-xl text-white z-10">{t(card.name)}</h2>

                    <Link href={card.link}>
                        <Button variant="shadow" color="primary" className="font-bold px-6">{t('button')}</Button>
                    </Link>

                    {/* <div className="absolute right-8 bottom-6">
                        <Logo />
                    </div> */}

                </div>
            )}

            

        </div>
    )
}