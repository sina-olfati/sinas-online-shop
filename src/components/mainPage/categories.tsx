"use client";
import { useState } from "react";
import { GrabScroll } from "../grabScroll";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
// compoents
import { SectionHeading } from "../sectionHeading";
// icon
import { ScanLine } from "lucide-react";
import { Edge } from "./edge";
import { useTranslations } from "next-intl";
import Image from "next/image";


const category = [
  {
    key: "Jackets",
    down: true,
  },
  {
    key: "Pants",
  },
  {
    key: "Shirts",
    big: true,
  },
  {
    key: "Sweaters",
    big: true,
  },
  {
    key: "Hoodies",
  },
  {
    key: "T-Shirts",
  },
  {
    key: "Footwear",
    big: true,
  },
  {
    key: "Shorts",
  },
  {
    key: "Jumpsuits",
    big: true,
    // down: true,
  },
  {
    key: "Dresses",
    big: true,
  },
  {
    key: "Accessories",
    big: true,
    // down: true,
  },
  {
    key: "Outerwear",
    small: true
  }
];


interface ClothingItem {
  key: string;
};

export function Categories() {
  const router = useRouter();
  const [isDown, setIsDown] = useState<ClothingItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag


  // Next-intl
  const t = useTranslations('Products.filters.categories');


  const handleNavigate = (path: string) => {
    // Navigate only if not dragging
    if (!isDragging) {
      router.push(path);
    }
  };

  const onMouseDown = (item: ClothingItem, e: React.MouseEvent) => {
    setIsDown(item);
    setIsDragging(false); // Reset dragging state
    setStartX(e.clientX); // Store the initial position
  };

  const onMouseUp = (item: ClothingItem) => {
    if (!isDragging && isDown === item) {
      handleNavigate(`/products?categories=${item.key}`); // Navigate only if not dragging
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
    <div className="w-full overflow-hidden relative mysm:mt-10">

      <SectionHeading name="categories" icon={<ScanLine />} />

      {/* <div className="w-1 bg-gradient-to-r from-background h-full absolute z-10"></div> 
            <div className="w-1 bg-gradient-to-l from-background h-full absolute z-10 right-0"></div>  */}

      <Edge>
        <GrabScroll>
          {category.map((item) => (
            <div
              key={item.key}
              onMouseDown={(e) => onMouseDown(item, e)}
              onMouseUp={() => onMouseUp(item)}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              className="lg:mx-[1%] lg:last:pr-8 flex flex-col items-center justify-center gap-3 group"
            >
              <Button
                variant={"default"}
                className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md
                mt-3 transition-all relative`}
              >
                {/* {isEn ? item.name : item.japaneseName} */}
                <Image 
                  className={`absolute bottom-2 dark:brightness-90 pointer-events-none group-hover:bottom-3.5 grayscale group-hover:grayscale-0 transition-all
                    ${item.down ? "bottom-[-5px] group-hover:bottom-0.5" : null} 
                    ${item.big ? "scale-[1.15]" : null}
                    ${item.small ? "scale-90" : null}
                  `} 
                  src={`/categories/${item.key}.png`} 
                  width={1000} height={1000} alt="category image"
                />
              </Button>
              <p className="font-semibold text-sm group-hover:text-primary transition-all">
                {/* {t(isEn ? item.name : item.japaneseName)} */}
                {t(item.key)}
              </p>
            </div>
          ))}
        </GrabScroll>
      </Edge>
    </div>
  );
}
