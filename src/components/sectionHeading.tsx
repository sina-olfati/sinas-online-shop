import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HeadingData {
    name: string;
    icon: React.ReactNode; // Typing icon as React.ReactNode
  }
  
  export function SectionHeading({ name, icon }: HeadingData) {

    // Next-intl
    const t = useTranslations('HomePage.headers');

    return (
      <div className="w-full p-7 pb-2 flex items-center justify-between text-primary">

        <div className="font-bold text-lg flex items-center gap-2">
          {icon}
          <h1 className="text-secondary-foreground">{t(name)}</h1>
        </div>

        <Link href={"./"} className={`flex items-center gap-1 group transition-all p-2 text-secondary-foreground`}>
          <p>See More</p>
          <ArrowRight className="relative left-0 group-hover:left-1 group-hover:text-primary transition-all" />
        </Link>

      </div>
    );
  }
  