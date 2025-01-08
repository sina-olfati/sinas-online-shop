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
import { useLocale } from "next-intl";
import Image from "next/image";


const category = [
  {
    name: "Jackets",
    japaneseName: "ジャケット",
    image: "jacket"
  },
  {
    name: "Pants",
    japaneseName: "パンツ",
    image: "pants"
  },
  {
    name: "Shirts",
    japaneseName: "シャツ",
    image: "shirt"
  },
  {
    name: "Sweaters",
    japaneseName: "セーター",
    image: "sweater"
  },
  {
    name: "Hoodies",
    japaneseName: "フーディ",
    image: "hoodie"
  },
  {
    name: "T-Shirts",
    japaneseName: "Tシャツ",
    image: "tshirt"
  },
  {
    name: "Footwear",
    japaneseName: "靴",
    image: "footwear"
  },
  {
    name: "Shorts",
    japaneseName: "ショーツ",
    image: "shorts"
  },
  {
    name: "Jumpsuits",
    japaneseName: "ジャンプスーツ",
    image: "jumpsuit"
  },
  {
    name: "Dresses",
    japaneseName: "ドレス",
    image: "dress"
  },
  {
    name: "Accessories",
    japaneseName: "アクセサリー",
    image: "accessory"
  },
  {
    name: "Outerwear",
    japaneseName: "アウターウェア",
    image: "outerwear"
  }
];


interface ClothingItem {
  name: string;
  japaneseName: string;
  image: string;
};

export function Categories() {
  const router = useRouter();
  const [isDown, setIsDown] = useState<ClothingItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag

  const isEn = useLocale() === "en"

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
      handleNavigate("./sss"); // Navigate only if not dragging
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
                mt-3 transition-all`}
              >
                {/* {isEn ? item.name : item.japaneseName} */}
                <Image src={`/categories/${item.image}.png`} width={1000} height={1000} alt="category image"/>
              </Button>
              <p className="font-semibold text-sm group-hover:text-primary transition-all">
                {isEn ? item.name : item.japaneseName}
              </p>
            </div>
          ))}
        </GrabScroll>
      </Edge>
    </div>
  );
}
