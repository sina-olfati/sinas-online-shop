"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useThemeContext } from "@/src/context/theme-data-provider";
import { useTheme } from "next-themes";
import { cn } from "@/src/lib/utils";

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
        <div className="flex item-center space-x-3">
          <div
            className={cn(
              "rounded-full",
              "w-[20px]",
              "h-[20px]",
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
      <SelectTrigger className="w-[180px] ring-offset-transparent focus:ring-transparent">
        <SelectValue placeholder="select Color" />
        <SelectContent className="border-muted">
          {createSelectItems()}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}
