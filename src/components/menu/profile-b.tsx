// "use client";
import { UserRound } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function ProfileButton() {

  return (
    <Button
      variant="outline"
      size="icon"
    //   onClick={() => null}
    >
      <UserRound
        className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"
      />
    </Button>
  );
}
