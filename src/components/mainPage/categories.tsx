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
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";


const category = [
  {
    name: "Jackets",
    japaneseName: "ジャケット",
    key: "jacket",
    down: true,
  },
  {
    name: "Pants",
    japaneseName: "パンツ",
    key: "pants"
  },
  {
    name: "Shirts",
    japaneseName: "シャツ",
    key: "shirt",
    big: true,
  },
  {
    name: "Sweaters",
    japaneseName: "セーター",
    key: "sweater",
    big: true,
  },
  {
    name: "Hoodies",
    japaneseName: "フーディ",
    key: "hoodie"
  },
  {
    name: "T-Shirts",
    japaneseName: "Tシャツ",
    key: "t-shirt"
  },
  {
    name: "Footwear",
    japaneseName: "靴",
    key: "footwear",
    big: true,
  },
  {
    name: "Shorts",
    japaneseName: "ショーツ",
    key: "shorts"
  },
  {
    name: "Jumpsuits",
    japaneseName: "ジャンプスーツ",
    key: "jumpsuit",
    big: true,
    // down: true,
  },
  {
    name: "Dresses",
    japaneseName: "ドレス",
    key: "dress",
    big: true,
  },
  {
    name: "Accessories",
    japaneseName: "アクセサリー",
    key: "accessory",
    big: true,
    // down: true,
  },
  {
    name: "Outerwear",
    japaneseName: "アウターウェア",
    key: "outerwear",
    small: true
  }
];


interface ClothingItem {
  name: string;
  japaneseName: string;
  key: string;
};

export function Categories() {
  const router = useRouter();
  const [isDown, setIsDown] = useState<ClothingItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag

  const isEn = useLocale() === "en"

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
              key={item.name}
              onMouseDown={(e) => onMouseDown(item, e)}
              onMouseUp={() => onMouseUp(item)}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              className="flex flex-col items-center justify-center gap-3 group"
            >
              <Button
                variant={"default"}
                className={`${isDown === item ? "scale-90" : "scale-100"} w-20 h-20 rounded-full shadow-md
                mt-3 transition-all relative`}
              >
                {/* {isEn ? item.name : item.japaneseName} */}
                <Image 
                  className={`absolute bottom-2 dark:brightness-90 pointer-events-none
                    ${item.down ? "bottom-[-5px]" : null} 
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
