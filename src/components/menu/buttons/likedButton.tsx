// "use client";
import { Heart } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function LikedButton() {

  return (
    <Button
      variant="outline"
      size="icon"
    //   onClick={() => null}
    >
      <Heart
        className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
      />
    </Button>
  );
}