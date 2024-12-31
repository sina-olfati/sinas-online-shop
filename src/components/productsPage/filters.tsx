import { SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "../sectionHeading";

export function Filters () {

    return (
        <div className="bg-accent shadow-md p-5 pt-0">
            <SectionHeading name="Filters" icon={<SlidersHorizontal />} />

            
        </div>
    )
}