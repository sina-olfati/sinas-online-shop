"use client";
import { Button } from "../../ui/button";
import { DropDownButton } from "./dropDownButton";

const normalButtons = ["Questions", "Articles", "About Us"];

export function BottomSection() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-shrink-0 h-full w-full">

        <div>
            <DropDownButton />
        </div>

        <div className="flex items-center justify-center gap-2 h-full w-full">
          {normalButtons.map((name) => (
            <Button
              key={name}
              variant="ghost"
              // size=""
              // onClick={() => SaveLocale(locale === "en" ? "jp" : "en")}
              className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all text-xs">
              {name}
            </Button>
          ))}
        </div>

      </div>
    </div>
  );
}
