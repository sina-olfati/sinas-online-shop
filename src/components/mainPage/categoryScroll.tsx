'use client'
import { useRef, useState } from "react";


export function CategoryScroll ({children}: any) {

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
        className={`w-[100vw] overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="w-fit flex gap-5 overflow-x-auto scroll-smooth snap-mandatory">
            {children}
        </div>
      </div>
    )
}