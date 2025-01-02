"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
// compoents
import { SectionHeading } from "../sectionHeading";
import { GrabScroll } from "../grabScroll";
import { Edge } from "../mainPage/edge";
import { ProductCard } from "../productCard";

// Define the structure of the reviews
interface Review {
  summary: string;
  pros: string[];
  cons: string[];
}

// Define the structure of a product
interface Product {
  id: number;
  name: string;
  images: string[];
  category: string;
  original_price: number;
  discounted_price: number;
  ratings: number;
  reviews: any;
  sales_count: number;
  brand: string;
  fabric_type: string;
  color: string;
  season: string; // New field for season
  gender: string; // New field for gender
}

// Update the Data interface to match the structure of the products
interface Data {
  name: string;
  icon: any;
  products: Product[]; // Change here to use the Product type
}

export function ProductsScroll({ name, icon, products }: Data) {
  const router = useRouter();
  const [isDown, setIsDown] = useState<Product | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [clickThreshold] = useState(5); // Distance to determine a drag
  const [hover, setHover] = useState<Product | null>(null);

  const handleNavigate = (path: string) => {
    // Navigate only if not dragging
    if (!isDragging) {
      router.push(path);
    }
  };

  const onMouseDown = (item: Product, e: React.MouseEvent) => {
    setIsDown(item);
    setIsDragging(false); // Reset dragging state
    setStartX(e.clientX); // Store the initial position
  };

  const onMouseUp = (item: Product) => {
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

  // images - preloading?
  // useEffect(() => {
  //     products.forEach((product) => {
  //         product.images.forEach((url) => {
  //             const img = new window.Image();
  //             img.src = url;
  //         });
  //     });
  // }, [products]);

  return (
    <div className="w-full flex flex-col mt-5 py-3 overflow-hidden">
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

// <Card
//     key={item.id}
//     onMouseDown={(e) => onMouseDown(item, e)}
//     onMouseUp={() => onMouseUp(item)}
//     onMouseLeave={onMouseLeave}
//     onMouseMove={onMouseMove}
//     className={`py-4 px-2 mx-1 cursor-pointer shadow-sm bg-secondary-foreground/10 dark:bg-secondary-foreground/20 relative transition-all ${isDown === item ? "scale-95" : "scale-100"}`}
//     onMouseOver={() => setHover(item)}
//     // className={`py-4 px-2 mx-1 cursor-pointer shadow-sm bg-secondary-foreground/20 relative transition-all ${isDown === item ? "scale-95" : "scale-100"}`}
// >
//     <CardHeader className="pt-0 px-2 flex-col items-start z-2">
//         {/* <Image
//             alt="Card background"
//             className="object-cover rounded-xl z-3 transition-all"
//             src={hover === item ? item.images[1] : item.images[0]}
//             width={300}
//             onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
//             onError={() => {}}
//         /> */}
//         <Image
//             alt="Card background"
//             className="object-cover rounded-xl z-3"
//             src={hover === item ? item.images[1] : item.images[0]}
//             width={300}
//             height={300}
//             onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
//         />
//     </CardHeader>
//     <CardBody className="overflow-visible pt-0 pb-0">

//         <h3 className="text-xs font-bold truncate">{item.name}</h3>

//         <div className="flex gap-1 justify-start items-center mt-0 mb-2 text-xs">
//             <Star fill="#F4BB44" className="text-[#F4BB44] w-3"/>
//             <p>{item.ratings}</p>
//         </div>

//         <div className="flex items-end mt-0">
//             {locale === "en" ? <DollarSign className="w-4" /> : <JapaneseYen className="w-4" />}
//             <div className="flex flex-row justify-center items-end gap-2 h-7 relative">
//                 <p className={`font-bold text-lg p-0 m-0 relative top-[1px] ${item.discounted_price !== item.original_price ? "text-primary" : ""} `}>{locale === "en" ? item.discounted_price : Math.round(item.discounted_price*100)}</p>
//                 {item.discounted_price !== item.original_price ?
//                     <small className=" p-0 m-0 text-xs text-secondary-foreground/50 line-through relative bottom-[3px]">{locale === "en" ? item.original_price : Math.round(item.original_price*100)}</small>
//                     // <small className=" p-0 m-0 text-xs text-secondary-foreground/60 line-through relative bottom-1 right-[-80%]">{locale === "en" ? item.original_price : Math.round(item.original_price*100)}</small>
//                 : null}
//             </div>
//         </div>

//     </CardBody>

//     {item.original_price !== item.discounted_price ?
//         <Chip color="primary" variant="shadow" endContent={<Percent width={24} />} className="absolute top-0 right-[-10px] scale-50 px-2 py-4 font-bold text-2xl z-5">
//             {Math.round((item.original_price-item.discounted_price)/item.original_price*100)}
//         </Chip>
//     : null}

// </Card>
