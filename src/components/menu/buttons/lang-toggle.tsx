"use client";
import { Languages } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/src/components/ui/button";

import { SaveLocale } from "@/src/lib/actions";
import { useLocale } from "next-intl";

export function LangToggle() {

  const locale = useLocale()
  

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
      className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all"
    >
      {/* <div className="relative h-[1.2rem] w-[1.2rem] transition-all">
        <div className={`absolute ${locale === "en" ? "text-lg bottom-[2px] right-[2px]" : "text-xs top-3 left-3"} transition-all`}>
          EN
        </div>
        <div className={`absolute ${locale === "jp" ? "text-lg bottom-[2px] right-[3px]" : "text-xs top-3 left-3"} transition-all`}>
          JP
        </div>
      </div> */}
      <Languages
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
      />
    </Button>
  );
}
