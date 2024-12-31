import Products from "../../../data/products.json";
import { ProductCard } from "../productCard";

export function AllProducts () {

    return (
        <div className={`p-5 flex flex-wrap gap-2 items-start justify-around`}>
            {Products.map((item) => (
            
                <div key={item.id} className="pb-2">
                    <ProductCard
                        item={item}
                        // onMouseDown={}
                        // onMouseUp={}
                        // onMouseLeave={}
                        // onMouseMove={}
                        // setHover={}
                        // hover={}
                        // locale={}
                    />
                </div>
                                    
            ))}
        </div>
    )
}