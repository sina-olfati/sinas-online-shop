import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { DataHeader } from "./dataHeader";
import { Comments } from "./comments";
import { ProductType } from "@/src/types/product";
import { useTranslations } from "next-intl";

interface ProductDataProps {
    product: ProductType;
}


export function ProductData ({product}: ProductDataProps) {
        
    const details = [
        {
            name: "details.category",
            answer: product.category
        },
        {
            name: "details.brand",
            answer: product.brand
        },
        {
            name: "details.fabric", // Changed for clarity
            answer: product.fabric_type
        },
        {
            name: "details.season", // Ensure consistent capitalization
            answer: product.season // Updated to match lowercase convention
        },
        {
            name: "details.audience", // More descriptive than "Gender"
            answer: product.gender
        }
    ]


    // Next-intl
    const t = useTranslations('Product');


    return (
        <div className="flex flex-col">
            <DataHeader product={product} />

            <div className="flex w-full flex-col my-10">

                <Tabs aria-label="Options">

                    <Tab key="details" title={t('buttons.details')}>
                        <Card shadow="none" className="shadow rounded-md">
                            <CardBody className="bg-secondary">
                                <ul>
                                    {details.map((data) => 
                                        <li key={data.name} className="flex gap-2 p-3 mysm:text-sm">
                                            <h3 className="font-semibold">{t(data.name)}:</h3>
                                            <p className="opacity-75">{data.answer}</p>
                                        </li>
                                    )}
                                </ul>
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab key="comments" title={t('buttons.comments')}>
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