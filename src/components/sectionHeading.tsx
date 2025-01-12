import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface HeadingData {
    name: string;
    icon: React.ReactNode; // Typing icon as React.ReactNode
    link?: string;
  }
  
  export function SectionHeading({ name, icon, link }: HeadingData) {

    // Next-intl
    const t = useTranslations('HomePage.headers');

    const theLink = link === "sell" ? "/products" :
    link === "discount" ? "/products?discount=true" : "/"

    return (
      <div className="w-full p-7 pb-2 flex items-center justify-between text-primary">

        <div className="font-bold text-lg flex items-center gap-2">
          {icon}
          <h1 className="text-secondary-foreground">{t(name)}</h1>
        </div>

        <Link href={theLink} className={`${link ? null : "hidden"} flex items-center gap-1 group transition-all p-2 pr-0 text-secondary-foreground`}>
          <p>See More</p>
          <ArrowRight size={25} className="relative left-0 group-hover:left-1 group-hover:text-primary transition-all" />
        </Link>

      </div>
    );
  }
  