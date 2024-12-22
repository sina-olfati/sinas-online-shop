// "use client";
import { Heart } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function LikedButton() {

  return (
    <Button
      variant="ghost"
      size="icon"
    //   onClick={() => null}
    className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all"

    >
      <Heart
        className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
      />
    </Button>
  );
}