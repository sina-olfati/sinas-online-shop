'use client';
import { useRef, useState, useEffect } from "react";

// Define types for the component props
interface GrabScrollProps {
    children: React.ReactNode;
}

export function GrabScroll({ children }: GrabScrollProps) {
    // Ref to the scroll container (HTMLDivElement)
    const scrollRef = useRef<HTMLDivElement | null>(null);

    // State to track dragging status and positions
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    // Mouse event handlers
    const onMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = x - startX;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    // Touch event handlers
    const onTouchStart = (e: TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0]; // Get the first touch point
        setStartX(touch.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0]; // Get the first touch point
        const x = touch.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 1.5; // Adjust scroll speed here
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
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
            className={`relative bg-transparent select-none w-full overflow-hidden whitespace-nowrap ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
            <div className="w-fit bg-transparent flex gap-2 scroll-smooth snap-mandatory py-3 px-8">
                {children}
            </div>
        </div>
    );
}
