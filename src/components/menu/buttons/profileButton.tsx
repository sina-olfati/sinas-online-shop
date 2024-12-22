// "use client";
import { UserRound } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ProfileButton() {

  return (
    <Button
      variant="ghost"
      size="icon"
    //   onClick={() => null}
    className="hover:bg-[#00000010] dark:hover:bg-[#ffffff10] hover:shadow-sm transition-all"
    >
      <UserRound
        className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
      />
    </Button>
  );
}
