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
  filter: string;
}

export function ProductsScroll({ name, icon, products, filter }: Data) {
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



  // Function to apply filters to the products array based on query params
  const filteredProducts = products.filter((item) => {
    // Category filter
    // if (categoriesParam.length > 0 && !categoriesParam.includes(item.category)) {
    //   return false; // Exclude products that don't match the selected categories
    // }

    // Price range filter
    // if (item.discounted_price < priceParam[0] || item.discounted_price > priceParam[1]) {
    //   return false; // Exclude products outside the selected price range
    // }

    // Discount filter
    if (filter === "discount" && !item.discount_percent) {
      return false; // Exclude products that are not discounted
    }

    // Season filter
    // if (seasonsParam.length > 0 && !seasonsParam.includes(item.season)) {
    //   return false; // Exclude products that don't match the selected season
    // }

    // Gender filter
    // if (genderParam && item.gender !== genderParam && item.gender !== "Unisex") {
    //   return false; // Exclude products that don't match the selected gender
    // }

    // Search filter
    // if (
    //   searchParam &&
    //   ![item.name, item.category, item.brand]
    //     .some((field) => field.toLowerCase().includes(searchParam))
    // ) {
    //   return false; // Exclude products that don't match the search term
    // }

    return true; // Keep product if it passes all filters
  });

  // Sorting the filtered products based on the selected filter
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (filter) {
      case "sell":
        return b.sales_count - a.sales_count; // Most Selling (highest sales_count first)
      // case "view":
      //   return b.ratings - a.ratings; // Most Views (or use any view-related metric if available)
      case "discount":
        return b.discount_percent - a.discount_percent; // Most Views (or use any view-related metric if available)
      // case "cheap":
      //   return a.discounted_price - b.discounted_price; // Cheapest (lowest discounted_price first)
      // case "expensive":
      //   return b.discounted_price - a.discounted_price; // Most Expensive (highest discounted_price first)
      default:
        return 0; // No sorting if no filter is selected
    }
  });



  // Lang
  const locale = useLocale();

  return (
    <div className="w-full flex flex-col mt-5 mysm:mt-0 mysm:mb-6 py-3 overflow-hidden">
      
      <SectionHeading name={name} icon={icon} link={filter} />

      <Edge>
        <GrabScroll>
          {sortedProducts.map((item) => (
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
