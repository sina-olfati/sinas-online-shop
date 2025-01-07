'use client'
import { AllProducts } from "@/src/components/productsPage/allProducts";
import { Filters } from "@/src/components/productsPage/filters/filters";
import { Button } from "@nextui-org/react";
import { SlidersHorizontal } from "lucide-react";

export default function Products() {
  return (
    <div className="mt-24 mysm:mt-10 flex items-start justify-center gap-10 p-10 mymd:p-0 mymd:px-5 mysm:px-0">

      <div about="filters" className="sticky top-24 w-80 mylg:w-64 h-full flex shrink-0 mymd:hidden">
        <Filters />
      </div>

      <div about="products" className="w-full h-full mysm:mb-24">
        <AllProducts />
      </div>

      <div className="hidden mymd:flex fixed top-10 right-5">
        <Button variant="solid" color="primary" isIconOnly size="lg" className="">
          <SlidersHorizontal />
        </Button>

        
      </div>

    </div>
  );
}
