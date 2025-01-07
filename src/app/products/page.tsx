'use client'
import { AllProducts } from "@/src/components/productsPage/allProducts";
import { Filters } from "@/src/components/productsPage/filters/filters";
import { ModalFilters } from "@/src/components/productsPage/filters/modalFilters";
import { Button, useDisclosure } from "@nextui-org/react";
import { SlidersHorizontal } from "lucide-react";

export default function Products() {

  // Modal
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  return (
    <div className="mt-24 mysm:mt-10 flex items-start justify-center gap-10 p-10 mymd:p-0 mymd:px-5 mysm:px-0">

      <div about="filters" className="sticky top-24 w-80 mylg:w-64 h-full flex shrink-0 mymd:hidden">
        <Filters />
      </div>

      <div about="products" className="w-full h-full mysm:mb-24">
        <AllProducts />
      </div>

      <div className="hidden mymd:flex fixed top-32 mysm:top-6 right-6">
        <Button 
          isIconOnly 
          variant="solid" 
          color="primary" 
          size="lg" 
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
  );
}
