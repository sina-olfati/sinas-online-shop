import Menu from "../components/menu/menu";
import Link from "next/link";

// Next-intl
import {useTranslations} from 'next-intl';


export default function Home() {

  // Next-intl
  const t = useTranslations('HomePage');

  return (
    <div className="">
      {/* {t('title')} */}
      <Menu />
      {/* <Link href={"/pages/secondPage"} className="text-primary">Link to pages/secondPage</Link> */}
    </div>
  );
}
