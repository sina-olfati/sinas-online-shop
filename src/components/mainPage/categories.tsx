'use client';
import { useState } from "react";
import { GrabScroll } from "../grabScroll";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
// compoents
import { SectionHeading } from "../sectionHeading";
// icon
import { ScanLine } from "lucide-react";

const category = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

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
        <div className="w-full overflow-hidden">

            <SectionHeading name='Categories' icon={<ScanLine />}/>

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

// OLD ONE
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

