'use client'
import { Image } from "@nextui-org/react"
import { inherits } from "util"


const data = [
    {
        id:1,
        name: 'something',
        picture: null,
    },
    {
        id:2,
        name: 'something2',
        picture: null,
    }
]

export function BannerCard () {

    return (
        <div className="border border-primary w-full flex gap-5 flex-row justify-between items-center">

            {data.map((card) => 
                // <div key={card.id} className="bg-['./productImages/hoody1.webp'] bg-cover bg-center">
                <div key={card.id} className="bg-primary w-full h-64 rounded-lg flex flex-col justify-between items-start px-8 py-6"> 
                    {/* <Image 
                        width={100} 
                        src={'./productImages/hoody1.webp'} 
                        alt="banner card"
                        className="!w-full absolute inset-0"
                    /> */}
                    <h2>{card.name}</h2>
                </div>
            )}

        </div>
    )
}