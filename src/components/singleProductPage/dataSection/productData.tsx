import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { DataHeader } from "./dataHeader";
import { useState } from "react";
import { Comments } from "./comments";

interface Product {
    id: number;
    name: string;
    images: string[];
    category: string;
    original_price: number;
    discounted_price: number;
    ratings: number;
    reviews: any;
    sales_count: number;
    brand: string;
    fabric_type: string;
    color: string;
    season: string; // New field for season
    gender: string; // New field for gender
    discount_percent: number
}
  
interface ProductDataProps {
    product: Product;
}





export function ProductData ({product}: ProductDataProps) {
    
    const [show, setShow] = useState("details")
    
    const details = [
        {
            name: "Category",
            answer: product.category
        },
        {
            name: "Brand",
            answer: product.brand
        },
        {
            name: "Fabric Type", // Changed for clarity
            answer: product.fabric_type
        },
        {
            name: "Season", // Ensure consistent capitalization
            answer: product.season // Updated to match lowercase convention
        },
        {
            name: "Target Audience", // More descriptive than "Gender"
            answer: product.gender
        }
    ]


    return (
        <div className="flex flex-col">
            <DataHeader product={product} />

            <div className="flex w-full flex-col my-10">

                <Tabs aria-label="Options">

                    <Tab key="comments" title="Comments">
                        <Card shadow="none" className="shadow rounded-md">
                            <CardBody className="bg-secondary p3">
                                <Comments reviews={product.reviews} />
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="details" title="Details">
                        <Card shadow="none" className="shadow rounded-md">
                            <CardBody className="bg-secondary">
                                <ul>
                                    {details.map((data) => 
                                        <li key={data.name} className="flex gap-2 p-3">
                                            <h3 className="font-semibold">{data.name}:</h3>
                                            <p>{data.answer}</p>
                                        </li>
                                    )}
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>


                </Tabs>
               
            </div>

        </div>
    )
}