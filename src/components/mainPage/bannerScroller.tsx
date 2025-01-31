"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import PageWidth from "@/src/lib/pageWidth";


const cards = [
  {
    pic: '/banners/man4.jpg',
    mobilePic: '/banners/mobileMan1.jpg',
    text: "banner1.name",
    link: "/products?gender=Male",
    buttonText: "banner1.button"
  },
  {
    pic: '/banners/lady5.jpg',
    mobilePic: '/banners/mobileLady3.jpg',
    text: "banner2.name",
    link: "/products?gender=Female",
    buttonText: "banner2.button"
  },
  {
    pic: '/banners/lady10.jpg',
    mobilePic: '/banners/mobileLady1.jpg',
    text: "banner3.name",
    link: "/products?seasons=Spring%2CSummer%2CFall%2CWinter",
    buttonText: "banner3.button"
  },
  {
    pic: '/banners/man4.jpg',
    mobilePic: '/banners/mobileMan1.jpg',
    text: "banner1.name",
    link: "/products?gender=Male",
    buttonText: "banner1.button"
  }
]

const buttons = [1, 2, 3]

export function BannerScroller() {
  
  const [turn, setTurn] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID

  const changeTurn = () => {
    setTurn((prevTurn) => (prevTurn < 4 ? prevTurn + 1 : 1));
  };

  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(changeTurn, turn < 4 ? 4000 : 200);

    // Cleanup function to clear the timeout on component unmount or before the next effect runs
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [turn]);


  // Next-intl
  const t = useTranslations('HomePage.scrollerBanners');

  return (
    <div className="w-full overflow-x-hidden relative shadow-md mysm:shadow-none">

      {/* scroller */}
      <div className="flex flex-shrink-0 aspect-[88/10] mysm:aspect-auto w-[400vw]">
        <div
          className={`${
            turn === 1
              ? "translate-x-[0vw] !transition-none"
              : turn === 2
                ? "translate-x-[-100vw]"
                : turn === 3
                  ? "translate-x-[-200vw]"
                  : "translate-x-[-300vw]"
            } w-[400vw] h-full flex flex-shrink-0 relative transition-transform`}
        >

        {/* card */}
        {cards.map((card, index) => 
          <div key={index} className="w-[100vw] h-full mysm:w-[100vw] mysm:h-[100vh] overflow-hidden flex items-center justify-center relative">
            
            {/* <Image width={0} height={0} sizes="100vw" src={PageWidth() > 639 ? card.pic : card.mobilePic} alt="banner card" className="w-[100vw] h-auto object-cover brightness-90"/> */}
            <Image src={PageWidth() > 639 ? card.pic : card.mobilePic} alt="banner card" className="object-cover brightness-90" fill />
              
            <div className="hidden mysm:flex absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background z-0"></div>
          
            <div className="absolute left-10 mysm:left-auto mysm:bottom-16 flex flex-col mysm:items-center gap-10 text-4xl p-10 mysm:scale-[0.8] mysm:!z-90">
              <div className="h-full w-1 bg-primary absolute left-0 top-0 rounded-full mysm:hidden"></div>
              <h2 className="drop-shadow-md mylg:text-3xl mysm:text-[1.5rem] mysm:font-semibold mysm:text-white">{t(card.text)}</h2>
              <Link href={card.link}>
                <Button className="w-fit text-white mysm:text-lg">{t(card.buttonText)}</Button>
              </Link>
            </div>


          </div>
        )}

        </div>
      </div>

      {/* buttons */}
      <div className="absolute bottom-0 w-full flex justify-center gap-2 mb-2 z-20">

        {buttons.map((button) => 
          <Button
            key={button}
            variant="ghost"
            onClick={() => setTurn(button)}
            className={`w-2 h-2 p-0 rounded-full transition-all bg-accent mysm:bg-secondary-foreground hover:bg-primary
              ${button === 1 
                ? (turn === 1 || turn === 4 ? "!bg-primary w-7" : "") 
                : (turn === button ? "!bg-primary w-7" : "")}
              `}
          ></Button>
        )}

      </div>
    </div>
  );
}
