"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/src/components/ui/button";

import { SaveLocale } from "@/src/lib/actions";
import { useLocale } from "next-intl";

export function LangToggle() {

  const locale = useLocale()
  

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
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
