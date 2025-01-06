import { useTranslations } from "next-intl";

interface HeadingData {
    name: string;
    icon: React.ReactNode; // Typing icon as React.ReactNode
  }
  
  export function SectionHeading({ name, icon }: HeadingData) {

    // Next-intl
    const t = useTranslations('HomePage.headers');

    return (
      <div className="w-full p-7 pb-2 font-bold text-lg flex gap-2 text-primary">
        {icon}
        <h1 className="text-secondary-foreground">{t(name)}</h1>
      </div>
    );
  }
  