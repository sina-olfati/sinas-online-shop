"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/src/components/ui/button";

import { SaveLocale } from "@/src/lib/actions";
import { getLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function LangToggle() {
  const { setTheme, theme } = useTheme();

  const locale = useLocale()
  

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
    //   onClick={() => console.log(locale)}
    >
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90
          dark:scale-0"
      />
        lang
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-0
          dark:scale-100"
      />
    </Button>
  );
}
