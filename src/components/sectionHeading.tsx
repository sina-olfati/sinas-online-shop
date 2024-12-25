import { ScanLine } from "lucide-react"

export function SectionHeading () {

    return (
        <div className="w-full p-7 pb-2 font-bold text-lg flex gap-2">
            <ScanLine className="text-primary" />
            <h1>categories</h1>
        </div>
    )
}