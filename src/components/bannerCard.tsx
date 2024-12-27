'use client'
import Image from "next/image"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { inherits } from "util"


const data = [
    {
        id:1,
        name: "Gentlemens Wear",
        picture: "/banners/man3.png",
    },
    {
        id:2,
        name: 'Ladies essentials',
        picture: "/banners/lady4.jpg",
    }
]

export function BannerCard () {

    return (
        <div className="w-full my-20 flex gap-5 flex-row justify-between items-center">

            {data.map((card) => 
                // <div key={card.id} className="bg-['./productImages/hoody1.webp'] bg-cover bg-center">
                <div key={card.id} className="bg-muted-foreground w-full h-64 rounded-lg flex flex-col justify-between items-start px-8 py-6 relative overflow-hidden"> 
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
                    <h2 className="font-bold text-xl text-background z-10">{card.name}</h2>

                    <Link href={'./ss'}>
                        <Button variant="shadow" color="primary" className="font-bold px-6">Start Shopping</Button>
                    </Link>
                </div>
            )}

        </div>
    )
}