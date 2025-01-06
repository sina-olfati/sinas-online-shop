import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { DataHeader } from "./dataHeader";
import { Comments } from "./comments";
import { ProductType } from "@/src/types/product";

interface ProductDataProps {
    product: ProductType;
}


export function ProductData ({product}: ProductDataProps) {
        
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

                    <Tab key="details" title="Details">
                        <Card shadow="none" className="shadow rounded-md">
                            <CardBody className="bg-secondary">
                                <ul>
                                    {details.map((data) => 
                                        <li key={data.name} className="flex gap-2 p-3">
                                            <h3 className="font-semibold">{data.name}:</h3>
                                            <p className="opacity-75">{data.answer}</p>
                                        </li>
                                    )}
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="comments" title="Comments">
                        <Card shadow="none" className="shadow rounded-md">
                            <CardBody className="bg-secondary p3">
                                <Comments reviews={product.reviews} />
                            </CardBody>
                        </Card>
                    </Tab>

                </Tabs>
               
            </div>

        </div>
    )
}