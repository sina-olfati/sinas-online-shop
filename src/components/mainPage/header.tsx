'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {

    const [turn, setTurn] = useState(1)

    const changeTurn = () => {
        turn < 4 ? setTurn((turn) => turn+1) : setTurn(1);
        console.log(turn)
    }

    useEffect(() => {
        setTimeout(changeTurn, turn < 4 ? 2000 : 200)
    }, [turn])
    // const interval = setInterval(changeTurn, 1000)

    return (
        // <div className="border border-primary w-full overflow-hidden">
        <div className="border border-primary w-full">
            <div className="flex flex-shrink-0 h-52 w-[400vw]">

                <div className={`${turn === 1 ? "translate-x-[0vw] !transition-none" :
                    turn === 2 ? "translate-x-[-100vw]" : 
                    turn === 3 ? "translate-x-[-200vw]" : "translate-x-[-300vw]"
                } w-[400vw] h-full flex flex-shrink-0 relative transition-all`}>
                    <div className="bg-sky-500 w-[100vw] h-full"></div>
                    <div className="bg-red-500 w-[100vw] h-full"></div>
                    <div className="bg-green-500 w-[100vw] h-full"></div>
                    <div className="bg-sky-500 w-[100vw] h-full"></div>
                    {/* <Image fill={true} src={"../../../public/globe.svg"} className="bg-sky-500" alt="Shop Product Image" />
                    <Image fill={true} src={"../../../public/globe.svg"} className="bg-green-500" alt="Shop Product Image" />
                    <Image fill={true} src={"../../../public/globe.svg"} className="bg-blue-500" alt="Shop Product Image" /> */}
                </div>

                <div></div>

            </div>
        </div>
    )
}