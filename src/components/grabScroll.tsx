'use client';
import { useRef, useState, useEffect } from "react";

export function GrabScroll({ children }: any) {
    const scrollRef = useRef<any>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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
        // const walk = (x - startX) * 2; // Adjust scroll speed here
        const walk = (x - startX); // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch event handlers
    const onTouchStart = (e: any) => {
        setIsDragging(true);
        const touch = e.touches[0]; // Get the first touch point
        setStartX(touch.pageX - scrollRef.current?.offsetLeft);
        setScrollLeft(scrollRef.current?.scrollLeft);
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    const onTouchMove = (e: any) => {
        if (!isDragging) return;
        e.preventDefault(); // Prevent default to avoid scrolling
        const touch = e.touches[0]; // Get the first touch point
        const x = touch.pageX - scrollRef.current?.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed here
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        // Add event listeners for mouse and touch events
        element.addEventListener('mousedown', onMouseDown);
        element.addEventListener('mouseleave', onMouseLeave);
        element.addEventListener('mouseup', onMouseUp);
        element.addEventListener('mousemove', onMouseMove);

        // Add touch event listeners with passive set to false
        element.addEventListener('touchstart', onTouchStart, { passive: false });
        element.addEventListener('touchend', onTouchEnd);
        element.addEventListener('touchmove', onTouchMove, { passive: false });

        // Cleanup function to remove event listeners
        return () => {
            element.removeEventListener('mousedown', onMouseDown);
            element.removeEventListener('mouseleave', onMouseLeave);
            element.removeEventListener('mouseup', onMouseUp);
            element.removeEventListener('mousemove', onMouseMove);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('touchmove', onTouchMove);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div
            ref={scrollRef}
            className={`relative select-none w-[100vw] overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >

            <div className="w-fit flex gap-2 scroll-smooth snap-mandatory px-3">
                {children}
            </div>

            {/* scroll shadow - failed */}
            {/* <div className="fixed w-[100vw] h-full left-0 top-0 z-10 flex justify-between items-center">
              <div className="border border-primary w-10 h-full bg-gradient-to-r from-primary to-transparent"></div>
            </div> */}

        </div>
    );
}