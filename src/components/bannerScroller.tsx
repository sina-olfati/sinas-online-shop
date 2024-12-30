"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";


const cards = [
  {
    pic: '/banners/man4.jpg',
    text: "Unleash Your Inner Warrior",
    buttonText: "Shop Gentlemen's Wear"
  },
  {
    pic: '/banners/lady5.jpg',
    text: "Elegance Meets Strength",
    buttonText: "Shop Ladies' Wear"
  },
  {
    pic: '/banners/lady10.jpg',
    text: "Stay Stylish Every Season",
    buttonText: "Explore Seasonal Collections"
  },
  {
    pic: '/banners/man4.jpg',
    text: "Unleash Your Inner Warrior",
    buttonText: "Shop Gentlemen's Wear"
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

  return (
    <div className="w-full overflow-x-hidden relative shadow-md">

      {/* darkener */}
      {/* <div className="absolute inset-0 bg-black/15 !z-[1]"></div> */}

      {/* scroller */}
      <div className="flex flex-shrink-0 aspect-[88/10] w-[400vw]">
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
            <div key={index} className="w-[100vw] h-full overflow-hidden flex items-center justify-center relative">
              <Image width={0} height={0} sizes="100vw" src={card.pic} alt="banner card" className="w-[100vw] h-auto brightness-90"/>

              <div className="absolute left-10 flex flex-col gap-3 !z-30">
                <h2>{card.text}</h2>
                <Button className="!z-40">{card.buttonText}</Button>
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
            className={`w-2 h-2 p-0 rounded-full transition-all bg-accent hover:bg-primary
              ${button === 1 
                ? (turn === 1 || turn === 4 ? "bg-primary w-7" : "") 
                : (turn === button ? "bg-primary w-7" : "")}
              `}
          ></Button>
        )}

      </div>
    </div>
  );
}
