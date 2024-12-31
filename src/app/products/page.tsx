import { AllProducts } from "@/src/components/productsPage/allProducts";
import { Filters } from "@/src/components/productsPage/filters";

export default function Products () {

    return(
        <div className="border border-primary mt-24 flex items-center justify-between gap-10 p-10">

            <div about="filters" className="w-[20%] h-full">
                <Filters />
            </div>

            <div about="products" className="border border-primary w-[80%] h-full">
                <AllProducts />
            </div>

        </div>
    )
}