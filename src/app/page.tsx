import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { Header } from "../components/mainPage/header";
// Next-intl
import {useTranslations} from 'next-intl';


export default function Home() {

  // Next-intl
  // const t = useTranslations('HomePage');

  return (
    <div className="">
      {/* {t('title')} */}
      <Menu />
      <Header />
    </div>
  );
}
