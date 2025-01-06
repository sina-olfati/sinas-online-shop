"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useThemeContext } from "@/src/context/theme-data-provider";
import { useTheme } from "next-themes";
import { cn } from "@/src/lib/utils";
import { ThemeColors } from "@/src/types/theme-types";

const availableThemeColors = [
  { name: "Zinc", light: "bg-zinc-900", dark: "bg-zinc-700" },
  { name: "Rose", light: "bg-rose-900", dark: "bg-rose-700" },
  { name: "Blue", light: "bg-blue-900", dark: "bg-blue-700" },
  { name: "Green", light: "bg-green-900", dark: "bg-green-700" },
  { name: "Orange", light: "bg-orange-900", dark: "bg-orange-700" },
];

export function ThemeColorToggle() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="flex flex-shrink-0 item-center space-x-3">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
              "flex flex-shrink-0",
              theme === "light" ? light : dark,
            )}
          ></div>
          <div className="text-sm">{name}</div>
        </div>
      </SelectItem>
    ));
  };

  return (
    <Select
      onValueChange={(value) => setThemeColor(value as ThemeColors)}
      defaultValue={themeColor}
    >
      <SelectTrigger className="w-[60px] hover:w-[125px] mysm:hover:w-[60px] open:w-[125px] hover:bg-[#00000010] dark:hover:bg-[#ffffff10] ring-offset-transparent focus:ring-transparent focus:outline-0 border-0 transition-all">
        <SelectValue placeholder="select Color" />
        <SelectContent className="border-muted">
          {createSelectItems()}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}
