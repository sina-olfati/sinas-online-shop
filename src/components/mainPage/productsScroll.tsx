"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
// components
import { SectionHeading } from "../sectionHeading";
import { GrabScroll } from "../grabScroll";
import { Edge } from "../mainPage/edge";
import { ProductCard } from "../productCard";
import { ProductType } from "@/src/types/product";

interface Data {
  name: string;
  icon: React.ReactNode;
  products: ProductType[];
}

export function ProductsScroll({ name, icon, products }: Data) {
  const router = useRouter();
  const [isDown, setIsDown] = useState<ProductType | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag
  const [hover, setHover] = useState<ProductType | null>(null);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>, item: ProductType) => {
    setIsDown(item);
    setIsDragging(false); // Reset dragging state
    setStartX(e.clientX); // Store the initial position
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>, item: ProductType) => {
    if (!isDragging && isDown === item) {
      handleNavigate(`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`);
    }
    setIsDown(null);
  };

  const onMouseLeave = () => {
    setIsDown(null); // Reset state on mouse leave
    setIsDragging(false); // Reset dragging state
    setHover(null);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDown) {
      const dx = e.clientX - startX; // Calculate distance moved
      if (Math.abs(dx) > clickThreshold) {
        setIsDragging(true); // Set dragging state if moved beyond threshold
      }
    }
  };

  const locale = useLocale();

  return (
    <div className="w-full flex flex-col mt-5 py-3 overflow-hidden">
      <SectionHeading name={name} icon={icon} />

      <Edge>
        <GrabScroll>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              // @ts-expect-error error
              onMouseDown={onMouseDown}
              // @ts-expect-error error
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              // @ts-expect-error error
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
