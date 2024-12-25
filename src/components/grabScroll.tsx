'use client'
import { useRef, useState } from "react";


export function GrabScroll ({children}: any) {

    const scrollRef = useRef<any>(null);
    const [isDragging, setIsDragging] = useState<any>(false);
    const [startX, setStartX] = useState<any>(0);
    const [scrollLeft, setScrollLeft] = useState<any>(0);
  
    const onMouseDown = (e: any) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current?.offsetLeft);
      setScrollLeft(scrollRef.current?.scrollLeft);
    };
  
    const onMouseLeave = () => {
      setIsDragging(false);
    };
  
    const onMouseUp = () => {
      setIsDragging(false);
    };
  
    const onMouseMove = (e: any) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current?.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed here
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };
  
    return (
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`mt-28 select-none w-[100vw] overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          >
          
          {/* with before and after */}
          {/* before:absolute before:bg-red-600 before:w-10 before:h-full before */}
          {/* <div className="border border-primary w-[100vw] absolute left-0 h-full z-100
          before:absolute before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:w-10 before:h-full before"
          ></div> */}

          {/* with divs */}
          {/* <div className="w-full absolute h-full z-10">
            <div className="absolute bg-gradient-to-r from-primary to-transparent w-5 h-full left-0"></div>
          </div> */}

          <div className="w-fit flex gap-2 overflow-x-auto scroll-smooth snap-mandatory px-3 z-1">
              {children}
          </div>

        </div>
    )
}