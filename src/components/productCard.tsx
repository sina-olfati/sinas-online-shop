'use client'
import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import { DollarSign, Percent, Star } from "lucide-react";
import { JapaneseYen } from "lucide-react";
import { useState } from "react";
import { ProductType } from "../types/product";


interface ProductCardProps {
  item: ProductType;
  onMouseDown?: (item: ProductType, e: React.MouseEvent) => void;
  onMouseUp?: (item: ProductType) => void;
  onMouseLeave?: () => void;
  onMouseMove?: (e: React.MouseEvent) => void;
  setHover?: (item: ProductType | null) => void;
  hover?: ProductType | null;
  locale?: string;
}

export function ProductCard({ item, onMouseDown, onMouseUp, onMouseLeave, onMouseMove, setHover, hover, locale }: ProductCardProps) {
  const [isDown, setIsDown] = useState<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDown(true);
    if (onMouseDown) {
      onMouseDown(item, e); // Call only if onMouseDown is defined
    }
  };
  
  const handleMouseUp = () => {
    setIsDown(false);
    if (onMouseUp) {
      onMouseUp(item); // Call only if onMouseUp is defined
    }
  };
  
  const handleMouseLeave = () => {
    setIsDown(false);
    if (onMouseLeave) {
      onMouseLeave(); // Call only if onMouseLeave is defined
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (onMouseMove) {
      onMouseMove(e); // Call only if onMouseMove is defined
    }
  };

  return (
    <Card
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseOver={() => setHover ? setHover(item) : null}
        className={`w-40 py-4 px-2 cursor-pointer shadow-sm bg-secondary brightness-[0.98] relative transition-all ${
        // className={`w-40 py-4 px-2 mx-1 cursor-pointer shadow-sm bg-secondary-foreground/10 dark:bg-secondary-foreground/20 relative transition-all ${
          isDown ? "scale-95" : "scale-100"
        }`}
      >
        <CardHeader className="pt-0 px-2 flex-col items-start z-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl z-3"
          //   src={item.images[0]}
            src={hover === item ? item.images[1] : item.images[0]}
            width={300}
            height={300}
            onDragStart={(e) => e.preventDefault()}
            priority
          />
        </CardHeader>

        <CardBody className="overflow-visible pt-0 pb-0">
          <h3 className="text-xs font-bold truncate">{item.name}</h3>
          <div className="flex gap-1 justify-start items-center mt-0 mb-2 text-xs">
            <Star fill="#F4BB44" className="text-[#F4BB44] w-3" />
            <p>{item.ratings}</p>
          </div>
          <div className="flex items-end mt-0">
            {locale === "en" ? <DollarSign className="w-4" /> : <JapaneseYen className="w-4" />}
            <div className="flex flex-row justify-center items-end gap-2 h-7 relative">
              <p
                className={`font-bold text-lg p-0 m-0 relative top-[1px] ${
                  item.discounted_price !== item.original_price ? "text-primary" : ""
                }`}
              >
                {locale === "en" ? item.discounted_price : Math.round(item.discounted_price * 100)}
              </p>
              {item.discounted_price !== item.original_price && (
                <small className="p-0 m-0 text-xs text-secondary-foreground/50 line-through relative bottom-[3px]">
                  {locale === "en" ? item.original_price : Math.round(item.original_price * 100)}
                </small>
              )}
            </div>
          </div>
        </CardBody>

        {item.original_price !== item.discounted_price && (
          <Chip
            color="primary"
            variant="shadow"
            endContent={<Percent width={24} />}
            className="absolute top-0 right-[-10px] scale-50 px-2 py-4 font-bold text-2xl z-5"
          >
            {Math.round(((item.original_price - item.discounted_price) / item.original_price) * 100)}
          </Chip>
        )}
    </Card>
  );
}






{/* <Card
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseOver={() => setHover ? setHover(item) : null}
        className={`w-40 py-4 px-2 cursor-pointer shadow-sm bg-secondary brightness-[0.98] relative transition-all ${
        // className={`w-40 py-4 px-2 mx-1 cursor-pointer shadow-sm bg-secondary-foreground/10 dark:bg-secondary-foreground/20 relative transition-all ${
          isDown ? "scale-95" : "scale-100"
        }`}
      >
        <CardHeader className="pt-0 px-2 flex-col items-start z-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl z-3"
          //   src={item.images[0]}
            src={hover === item ? item.images[1] : item.images[0]}
            width={300}
            height={300}
            onDragStart={(e) => e.preventDefault()}
            priority
          />
        </CardHeader>

        <CardBody className="overflow-visible pt-0 pb-0">
          <h3 className="text-xs font-bold truncate">{item.name}</h3>
          <div className="flex gap-1 justify-start items-center mt-0 mb-2 text-xs">
            <Star fill="#F4BB44" className="text-[#F4BB44] w-3" />
            <p>{item.ratings}</p>
          </div>
          <div className="flex items-end mt-0">
            {locale === "en" ? <DollarSign className="w-4" /> : <JapaneseYen className="w-4" />}
            <div className="flex flex-row justify-center items-end gap-2 h-7 relative">
              <p
                className={`font-bold text-lg p-0 m-0 relative top-[1px] ${
                  item.discounted_price !== item.original_price ? "text-primary" : ""
                }`}
              >
                {locale === "en" ? item.discounted_price : Math.round(item.discounted_price * 100)}
              </p>
              {item.discounted_price !== item.original_price && (
                <small className="p-0 m-0 text-xs text-secondary-foreground/50 line-through relative bottom-[3px]">
                  {locale === "en" ? item.original_price : Math.round(item.original_price * 100)}
                </small>
              )}
            </div>
          </div>
        </CardBody>

        {item.original_price !== item.discounted_price && (
          <Chip
            color="primary"
            variant="shadow"
            endContent={<Percent width={24} />}
            className="absolute top-0 right-[-10px] scale-50 px-2 py-4 font-bold text-2xl z-5"
          >
            {Math.round(((item.original_price - item.discounted_price) / item.original_price) * 100)}
          </Chip>
        )}
      </Card> */}