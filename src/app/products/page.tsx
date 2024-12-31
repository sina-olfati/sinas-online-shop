import { AllProducts } from "@/src/components/productsPage/allProducts";
import { Filters } from "@/src/components/productsPage/filters/filters";

export default function Products() {
  return (
    <div className="mt-24 flex items-start justify-center gap-10 p-10">
      <div about="filters" className="w-80 h-full flex shrink-0">
        <Filters />
      </div>

      <div about="products" className="w-full h-full">
        <AllProducts />
      </div>
    </div>
  );
}
