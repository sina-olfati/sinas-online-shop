"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
// compoents
import { SectionHeading } from "../sectionHeading";
import { GrabScroll } from "../grabScroll";
import { Edge } from "../mainPage/edge";
import { ProductCard } from "../productCard";
import { ProductType } from "@/src/types/product";


// Update the Data interface to match the structure of the products
interface Data {
  name: string;
  icon: ReactNode;
  products: ProductType[]; // Change here to use the Product type
}

export function ProductsScroll({ name, icon, products }: Data) {
  const router = useRouter();
  const [isDown, setIsDown] = useState<ProductType | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag
  const [hover, setHover] = useState<ProductType | null>(null);

  const handleNavigate = (path: string) => {
    // Navigate only if not dragging
    if (!isDragging) {
      router.push(path);
    }
  };

  const onMouseDown = (item: ProductType, e: React.MouseEvent) => {
    setIsDown(item);
    setIsDragging(false); // Reset dragging state
    setStartX(e.clientX); // Store the initial position
  };

  const onMouseUp = (item: ProductType) => {
    if (!isDragging && isDown === item) {
      handleNavigate(
        `/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`,
      ); // Navigate only if not dragging
    }
    setIsDown(null); // Reset state
  };

  const onMouseLeave = () => {
    setIsDown(null); // Reset state on mouse leave
    setIsDragging(false); // Reset dragging state
    setHover(null);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDown) {
      const dx = e.clientX - startX; // Calculate distance moved
      if (Math.abs(dx) > clickThreshold) {
        setIsDragging(true); // Set dragging state if moved beyond threshold
      }
    }
  };

  // Lang
  const locale = useLocale();

  return (
    <div className="w-full flex flex-col mt-5 mysm:mt-0 mysm:mb-6 py-3 overflow-hidden">
      
      <SectionHeading name={name} icon={icon} />

      <Edge>
        <GrabScroll>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onMouseMove={onMouseMove}
              setHover={setHover}
              hover={hover}
              locale={locale}
            />
          ))}
        </GrabScroll>
      </Edge>
    </div>
  );
}
