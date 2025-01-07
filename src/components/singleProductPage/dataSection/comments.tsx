import { Minus, Plus, User } from "lucide-react";

interface Review {
    summary: string;
    pros: string[];
    cons: string[];
}

interface ProductWithReviews {
    reviews: Review[];
}


export function Comments ({reviews}: ProductWithReviews) {


    return (
        <div className="p-2 flex flex-col gap-10 mysm:gap-7">
            {reviews.map((review) => 
                <div key={review.summary}>

                    <div about="profile" className="flex items-center gap-3 mysm:gap-1 bg-background/90 w-fit p-2 px-3 mysm:p-2 rounded-xl mb-5 mysm:mb-3">
                        <User className="mysm:scale-80" />
                        <p className="mysm:text-sm">User_4212405</p>
                    </div>


                    <div className="ml-5 pl-5 relative">
                        <h2 className="mysm:text-sm">{review.summary}</h2>
                        <div className="mt-3">
                            <ul className="pl-3 mb-3">
                                {review.pros.map((pro) => 
                                    <li key={pro} className="flex gap-1 py-1 text-sm mysm:text-xs font-thin"><Plus size={20} color="green" className="mysm:scale-90 relative mysm:bottom-[2px]" />{pro}</li>
                                )}
                            </ul>
                            <ul className="pl-3">
                                {review.cons.map((con) => 
                                    <li key={con} className="flex gap-1 py-1 text-sm mysm:text-xs font-thin"><Minus size={20} color="red" className="mysm:scale-90 relative mysm:bottom-[2px]" />{con}</li>
                                )}
                            </ul>
                        </div>

                        <div className="w-1 h-full absolute top-0 left-0 bg-primary/70 rounded-full"></div>
                    </div>
                </div>
            )}

            {reviews.length === 0 ?
                <div className="font-semibold text-lg w-full text-center p-10">No comments found for this product!</div>
            : null}
        </div>
    )
}