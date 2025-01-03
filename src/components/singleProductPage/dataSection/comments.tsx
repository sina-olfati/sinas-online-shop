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
        <div className="p-2 flex flex-col gap-10">
            {reviews.map((review) => 
                <div key={review.summary}>

                    <div about="profile" className="flex items-center gap-3 bg-background w-fit p-2 rounded-xl mb-5">
                        <User />
                        <p>User_4212405</p>
                    </div>


                    <div className="ml-5 pl-5 relative">
                        <h2>{review.summary}</h2>
                        <div className="mt-3">
                            <ul className="pl-3 mb-3">
                                {review.pros.map((pro) => 
                                    <li key={pro} className="flex gap-1 py-1 text-sm font-thin"><Plus size={20} color="green" /> {pro}</li>
                                )}
                            </ul>
                            <ul className="pl-3">
                                {review.cons.map((con) => 
                                    <li key={con} className="flex gap-1 py-1 text-sm font-thin"><Minus size={20} color="red"/> {con}</li>
                                )}
                            </ul>
                        </div>

                        <div className="w-1 h-full absolute top-0 left-0 bg-primary/100 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    )
}