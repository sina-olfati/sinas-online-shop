import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { Header } from "../components/mainPage/header";
import { Categories } from "../components/mainPage/categories";
// Next-intl
import {useTranslations} from 'next-intl';


export default function Home() {

  // Next-intl
  // const t = useTranslations('HomePage');

  return (
    <div className="mt-24">
      {/* {t('title')} */}
      <Menu />
      <Header />
      <Categories />
    </div>
  );
}
