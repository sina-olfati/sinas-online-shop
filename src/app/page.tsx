import Link from "next/link";
import { ThemeModeToggle } from "./components/theme-mode-toggle";
import { ThemeColorToggle } from "./components/theme-color-toggle";
import { LangToggle } from "./components/lang-toggle";

// Next-intl
import {useTranslations} from 'next-intl';


export default function Home() {

  // Next-intl
  const t = useTranslations('HomePage');

  return (
    <div className="">
      {t('title')}
      <ThemeModeToggle />
      <ThemeColorToggle />
      <LangToggle />
      <br />
      <Link href={"/pages/secondPage"} className="text-primary">Link to pages/secondPage</Link>
    </div>
  );
}
