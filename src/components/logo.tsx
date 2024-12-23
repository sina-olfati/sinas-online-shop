import Link from "next/link"

export function Logo() {

    return (
        <Link href={"./"}>
            <div className="h-full flex flex-col items-center content-center relative pt-1 mx-5 text-primary hover:text-accent-foreground">
                <h1 className="font-bold text-lg italic transition-all">
                    SINA'S
                </h1>

                <div className="font-bold text-[9px] text-center absolute top-6 w-full">
                    Online Shop
                </div>
            </div>
        </Link>
    );
}