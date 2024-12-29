"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

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
      <div className="absolute inset-0 bg-black/15 z-10"></div>

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

          {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center"> */}
          <div className="w-[100vw] h-full overflow-hidden flex items-start justify-center">
            <Image width={0} height={0} sizes="100vw" src={'/banners/man4.jpg'} alt="banner card" className="w-[100vw] h-auto"/>
          </div>
          <div className="w-[100vw] h-full overflow-hidden flex items-start justify-center">
            <Image width={0} height={0} sizes="100vw" src={'/banners/lady5.jpg'} alt="banner card" className="w-[100vw] h-auto"/>
          </div>
          <div className="w-[100vw] h-full overflow-hidden flex items-start justify-center">
            <Image width={0} height={0} sizes="100vw" src={'/banners/lady10.jpg'} alt="banner card" className="w-[100vw] h-auto"/>
          </div>
          <div className="w-[100vw] h-full overflow-hidden flex items-start justify-center">
            <Image width={0} height={0} sizes="100vw" src={'/banners/man4.jpg'} alt="banner card" className="w-[100vw] h-auto"/>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center gap-2 mb-2 z-20">
        <Button
          variant="ghost"
          onClick={() => setTurn(1)}
          className={`w-2 h-2 p-0 rounded-full transition-all bg-accent hover:bg-primary
            ${turn === 1 || turn === 4 ? "bg-primary w-7" : ""}`}
        ></Button>
        <Button
          variant="ghost"
          onClick={() => setTurn(2)}
          className={`w-2 h-2 p-0 rounded-full transition-all bg-accent hover:bg-primary
            ${turn === 2 ? "bg-primary w-7" : ""}`}
        ></Button>
        <Button
          variant="ghost"
          onClick={() => setTurn(3)}
          className={`w-2 h-2 p-0 rounded-full transition-all bg-accent hover:bg-primary
            ${turn === 3 ? "bg-primary w-7" : ""}`}
        ></Button>
      </div>
    </div>
  );
}
