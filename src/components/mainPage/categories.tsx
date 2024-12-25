// 'use client'
// import { useState } from "react"
// import { GrabScroll } from "../grabScroll"
// import { Button } from "../ui/button"
// import { useRouter } from "next/navigation"

// const category = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

// export function Categories () {

//     const router = useRouter();
//     const [isDown, setIsDown] = useState<any>(false)

//     const handleNavigate = (path: string) => {
//         if (isDown) {
//             router.push(path);
//         }
//     };

//     return (
//         <div className="">
//             <GrabScroll>

//                 {category.map((item) => 
//                         <div 
//                         key={item}
//                         onClick={() => handleNavigate('./sss')}
//                         onMouseDown={() => setIsDown(item)}
//                         onMouseUp={() => setIsDown(false)}
//                         onMouseLeave={() => setIsDown(false)}
//                         className="flex flex-col items-center justify-center gap-3 group">

//                             <Button variant={"default"} className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md mt-3 transition-all`}>
//                                 {item}
//                             </Button>

//                             <p className="font-bold group-hover:text-primary">{item}</p>

//                         </div>
//                 )}

//             </GrabScroll>
//         </div>
//     )
// }






// 🍁
'use client';
import { useState } from "react";
import { GrabScroll } from "../grabScroll";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const category = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

export function Categories() {
    const router = useRouter();
    const [isDown, setIsDown] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [clickThreshold] = useState(5); // Distance to determine a drag

    const handleNavigate = (path: string) => {
        // Navigate only if not dragging
        if (!isDragging) {
            router.push(path);
        }
    };

    const onMouseDown = (item: string, e: React.MouseEvent) => {
        setIsDown(item);
        setIsDragging(false); // Reset dragging state
        setStartX(e.clientX); // Store the initial position
    };

    const onMouseUp = (item: string) => {
        if (!isDragging && isDown === item) {
            handleNavigate('./sss'); // Navigate only if not dragging
        }
        setIsDown(null); // Reset state
    };

    const onMouseLeave = () => {
        setIsDown(null); // Reset state on mouse leave
        setIsDragging(false); // Reset dragging state
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (isDown) {
            const dx = e.clientX - startX; // Calculate distance moved
            if (Math.abs(dx) > clickThreshold) {
                setIsDragging(true); // Set dragging state if moved beyond threshold
            }
        }
    };

    return (
        <div className="">
            <GrabScroll>
                {category.map((item) => (
                    <div 
                        key={item}
                        onMouseDown={(e) => onMouseDown(item, e)}
                        onMouseUp={() => onMouseUp(item)}
                        onMouseLeave={onMouseLeave}
                        onMouseMove={onMouseMove}
                        className="flex flex-col items-center justify-center gap-3 group"
                    >
                        <Button 
                            variant={"default"} 
                            className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md mt-3 transition-all`}
                        >
                            {item}
                        </Button>
                        <p className="font-bold group-hover:text-primary">{item}</p>
                    </div>
                ))}
            </GrabScroll>
        </div>
    );
}






// 🍁
// 'use client';
// import { useState, useRef } from "react";
// import { GrabScroll } from "../grabScroll";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";

// const category = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

// export function Categories() {
//     const router = useRouter();
//     const [isDown, setIsDown] = useState<string | null>(null);
//     const [isDragging, setIsDragging] = useState(false);
//     const startMousePosition = useRef<{ x: number; y: number } | null>(null);
//     const clickThreshold = 5; // Adjust this value as needed

//     const handleNavigate = (path: string) => {
//         // Navigate only if not dragging
//         if (!isDragging) {
//             router.push(path);
//         }
//     };

//     const onMouseDown = (e: React.MouseEvent, item: string) => {
//         setIsDown(item);
//         startMousePosition.current = { x: e.clientX, y: e.clientY };
//         setIsDragging(false); // Reset dragging state
//     };

//     const onTouchStart = (e: React.TouchEvent, item: string) => {
//         e.preventDefault(); // Prevent default to avoid scrolling
//         setIsDown(item);
//         const touch = e.touches[0]; // Get the first touch point
//         startMousePosition.current = { x: touch.clientX, y: touch.clientY };
//         setIsDragging(false); // Reset dragging state
//     };

//     const onMouseUp = (e: React.MouseEvent) => {
//         if (isDown) {
//             // Only navigate if not dragging
//             handleNavigate('./sss');
//             setIsDown(null); // Reset state
//         }
//     };

//     const onTouchEnd = (e: React.TouchEvent) => {
//         if (isDown) {
//             // Only navigate if not dragging
//             handleNavigate('./sss');
//             setIsDown(null); // Reset state
//         }
//     };

//     const onMouseLeave = () => {
//         setIsDown(null); // Reset state on mouse leave
//         setIsDragging(false); // Reset dragging state
//     };

//     const onMouseMove = (e: React.MouseEvent) => {
//         if (isDown && startMousePosition.current) {
//             const dx = e.clientX - startMousePosition.current.x;
//             const dy = e.clientY - startMousePosition.current.y;

//             // Check if the mouse has moved beyond the threshold
//             if (Math.sqrt(dx * dx + dy * dy) > clickThreshold) {
//                 setIsDragging(true); // Set dragging state
//                 setIsDown(null); // Reset the item state
//             }
//         }
//     };

//     const onTouchMove = (e: React.TouchEvent) => {
//         if (isDown && startMousePosition.current) {
//             const touch = e.touches[0]; // Get the first touch point
//             const dx = touch.clientX - startMousePosition.current.x;
//             const dy = touch.clientY - startMousePosition.current.y;

//             // Check if the touch has moved beyond the threshold
//             if (Math.sqrt(dx * dx + dy * dy) > clickThreshold) {
//                 setIsDragging(true); // Set dragging state
//                 setIsDown(null); // Reset the item state
//             }
//         }
//     };

//     return (
//         <div className="">
//             <GrabScroll>
//                 {category.map((item) => (
//                     <div 
//                         key={item}
//                         onMouseDown={(e) => onMouseDown(e, item)}
//                         onMouseUp={onMouseUp}
//                         onMouseLeave={onMouseLeave}
//                         onMouseMove={onMouseMove}
//                         onTouchStart={(e) => onTouchStart(e, item)} // Handle touch start
//                         onTouchEnd={onTouchEnd} // Handle touch end
//                         onTouchMove={onTouchMove} // Handle touch move
//                         className="flex flex-col items-center justify-center gap-3 group"
//                     >
//                         <Button 
//                             variant={"default"} 
//                             className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md mt-3 transition-all`}
//                         >
//                             {item}
//                         </Button>
//                         <p className="font-bold group-hover:text-primary transition-all">{item}</p>
//                     </div>
//                 ))}
//             </GrabScroll>
//         </div>
//     );
// }