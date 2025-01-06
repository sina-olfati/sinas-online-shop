import { ReactNode } from "react";

export function Edge({ children }: { children: ReactNode }) {
    return (
        <div className="border border-secondary-foreground/20 border-t-0 border-b-0">
            {children}
        </div>
    );
}
