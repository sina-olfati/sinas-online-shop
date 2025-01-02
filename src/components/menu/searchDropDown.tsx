import Link from "next/link"
import Products from "../../../data/products.json"
import Image from "next/image"
const items = [
    1,2,3,4,5,6,7
]


export function SearchDropDown () {

    return (
        <div className="absolute w-full mt-2 shadow overflow-auto rounded-2xl max-h-52 bg-primary-foreground z-50 flex flex-col transition-all">
            {Products.map((product) => 
                <Link href={"./"}  key={product.id}  className="hover:bg-secondary-foreground/5 px-5">
                    <div className="flex flex-col">

                        <div className="py-2 flex gap-3 items-center">
                            <Image className="w-12" src={product.images[0]} width={48} height={48} alt={`product ${product.name} image`} />
                            <div className="flex flex-col gap-1 truncate">
                                <h4 className="text-sm font-semibold">{product.name}</h4>
                                <p className="text-xs opacity-80">In <i className="text-primary not-italic">{product.category}</i></p>
                            </div>
                        </div>

                        <div className="w-[95%] mx-auto border border-x-0 border-t-0 border-b-secondary-foreground/10"></div>
                    </div>
                </Link>
            )}

            {/* <div className="fixed inset-0 z-20 bg-black/50"></div> */}
        </div>
    )
}