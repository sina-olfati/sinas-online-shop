'use client'
import { Button, Image } from "@nextui-org/react"
import Link from "next/link"
import { inherits } from "util"


const data = [
    {
        id:1,
        name: 'Every gentleman should have these',
        picture: null,
    },
    {
        id:2,
        name: 'Ladies essentials',
        picture: null,
    }
]

export function BannerCard () {

    return (
        <div className="border border-primary w-full flex gap-5 flex-row justify-between items-center">

            {data.map((card) => 
                // <div key={card.id} className="bg-['./productImages/hoody1.webp'] bg-cover bg-center">
                <div key={card.id} className="bg-muted-foreground w-full h-64 rounded-lg flex flex-col justify-between items-start px-8 py-6"> 
                    <Image 
                        width={100} 
                        src={'./banners/lady1.jpg'} 
                        alt="banner card"
                        className="!w-full absolute inset-0"
                    />
                    <h2 className="font-bold text-xl text-background">{card.name}</h2>

                    <Link href={'./ss'}>
                        <Button variant="shadow" color="primary" className="font-bold">Start Shopping</Button>
                    </Link>
                </div>
            )}

        </div>
    )
}