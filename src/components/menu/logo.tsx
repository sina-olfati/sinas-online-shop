'use client'
import Link from "next/link"
import { useTranslations } from "next-intl";

export function Logo() {

    // Next-intl
    const t = useTranslations('Menu');

    return (
        <Link href={"/"}>
            <div className="h-full flex flex-col items-center justify-center relative pt-1 mx-5 text-primary hover:text-accent-foreground">
                <h1 className="font-bold text-lg italic relative bottom-2 transition-all">
                    SINA&apos;S
                </h1>

                <div className="font-bold text-[9px] text-center absolute top-6 w-full">
                    {t("logo")}
                </div>
            </div>
        </Link>
    );
}