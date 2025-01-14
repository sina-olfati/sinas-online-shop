'use client'
import Link from "next/link";
import Products from "../../../data/products.json";
import { ProductCard } from "../productCard";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Button, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { useSearchParams } from "next/navigation"; // to get query params
// icons
import { Filter, ArrowDownNarrowWide, ArrowDownWideNarrow, Eye, ChartNoAxesCombined, BadgePercent, SlidersHorizontal } from "lucide-react";
import { ProductType } from "@/src/types/product";
import { ModalFilters } from "./filters/modalFilters";
import { ProductNotFound } from "../productNotFound";


export function AllProducts() {

  const [reorderFilter, setReorderFilter] = useState<string>("");

  // Lang
  const locale = useLocale();

  const [hover, setHover] = useState<ProductType | null>(null);
  const onMouseLeave = () => {
    setHover(null);
  };

  // Modal
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  // Get query parameters from the URL
  const searchParams = useSearchParams();

  const categoriesParam = searchParams.get("categories")?.split(",") || [];
  const priceParam = searchParams.get("price")?.split(",").map(Number) || [0, 1000]; // default range 0 to 1000
  const discountParam = searchParams.get("discount") === "true" || false;
  const seasonsParam = searchParams.get("seasons")?.split(",") || []; // Extract season from query
  const genderParam = searchParams.get("gender") || ""; // Extract gender from query
  const searchParam = searchParams.get("search")?.toLocaleLowerCase() || ""; // Extract searched items from query

  // Function to apply filters to the products array based on query params
  const filteredProducts = Products.filter((item) => {
    // Category filter
    if (categoriesParam.length > 0 && !categoriesParam.includes(item.category)) {
      return false; // Exclude products that don't match the selected categories
    }

    // Price range filter
    if (item.discounted_price < priceParam[0] || item.discounted_price > priceParam[1]) {
      return false; // Exclude products outside the selected price range
    }

    // Discount filter
    if (discountParam && item.discounted_price === item.original_price) {
      return false; // Exclude products that are not discounted
    }

    // Season filter
    if (seasonsParam.length > 0 && !seasonsParam.includes(item.season)) {
      return false; // Exclude products that don't match the selected season
    }

    // Gender filter
    if (genderParam && item.gender !== genderParam && item.gender !== "Unisex") {
      return false; // Exclude products that don't match the selected gender
    }

    // Search filter
    if (
      searchParam &&
      ![item.name, item.category, item.brand]
        .some((field) => field.toLowerCase().includes(searchParam))
    ) {
      return false; // Exclude products that don't match the search term
    }

    return true; // Keep product if it passes all filters
  });

  // Sorting the filtered products based on the selected filter
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (reorderFilter) {
      case "sell":
        return b.sales_count - a.sales_count; // Most Selling (highest sales_count first)
      case "view":
        return b.ratings - a.ratings; // Most Views (or use any view-related metric if available)
      case "discount":
        return b.discount_percent - a.discount_percent; // Most Views (or use any view-related metric if available)
      case "cheap":
        return a.discounted_price - b.discounted_price; // Cheapest (lowest discounted_price first)
      case "expensive":
        return b.discounted_price - a.discounted_price; // Most Expensive (highest discounted_price first)
      default:
        return 0; // No sorting if no filter is selected
    }
  });


  // Next-intl
  const t = useTranslations('Products.reorder');

  return (
    <div className="flex flex-col gap-5 p-5 mysm:p-0 mysm:mt-12">


      {/* Price Filter */}
      <div className="mysm:fixed top-0 mysm:w-full mysm:bg-primary flex justify-between mysm:p-1.5 mysm:px-5 z-50 mysm:shadow-md">

        <div>
          <Select
            disableSelectorIconRotation
            value={reorderFilter}
            onChange={(e) => setReorderFilter(e.target.value)}
            className="w-36 text-primary"
            label=""
            aria-label="price filter"
            labelPlacement="outside"
            placeholder={t('default')}
            selectorIcon={
              reorderFilter === "" ? <Filter /> :
              reorderFilter === "sell" ? <ChartNoAxesCombined /> :
              reorderFilter === "view" ? <Eye /> :
              reorderFilter === "discount" ? <BadgePercent /> :
              reorderFilter === "cheap" ? <ArrowDownNarrowWide /> : <ArrowDownWideNarrow />
            }
          >
            {[
              { key: "sell", label: "sale" },
              { key: "view", label: "view" },
              { key: "discount", label: "discount" },
              { key: "cheap", label: "cheap" },
              { key: "expensive", label: "expensive" },
            ].map((filter) => (
              <SelectItem key={filter.key} value={filter.key}>
                {t(filter.label)}
              </SelectItem>
            ))}
          </Select>
        </div>
        
        <div className="hidden mymd:flex fixed top-30 right-10 mysm:relative mysm:top-0 mysm:right-0">
          <Button 
            isIconOnly 
            variant="solid" 
            color="secondary" 
            size="md" 
            onPress={onOpen}
          >
            <SlidersHorizontal />
          </Button>

          <ModalFilters 
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          />
        </div>

      </div>




      {/* Products List */}
      <div className="flex flex-wrap gap-4 mysm:gap-2 items-start justify-start mymd:justify-center">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item) => (
            <Link key={item.id} href={`/products/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="mb-">
              <ProductCard
                item={item}
                onMouseLeave={onMouseLeave}
                setHover={setHover}
                hover={hover}
                locale={locale}
              />
            </Link>
          ))
        ) : (
          <ProductNotFound text="noProducts" />
        )}
      </div>
    </div>
  );
}
