'use client'
import Link from "next/link"
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export function Logo() {

    const navigate = useRouter()

    const t = useTranslations('Menu');

    return (
        <Link href={"/"}>
        {/* <Button className="bg-transparent" onPress={() => navigate.push("/")}> */}
            <div className="h-full flex flex-col items-center justify-center relative pt-1 mx-5 text-primary hover:text-accent-foreground">
                <h1 className="font-bold text-lg italic relative bottom-2 transition-all">
                    SINA'S
                </h1>

                <div className="font-bold text-[9px] text-center absolute top-6 w-full">
                    {t("logo")}
                </div>
            </div>
        {/* </Button> */}
        </Link>
    );
}