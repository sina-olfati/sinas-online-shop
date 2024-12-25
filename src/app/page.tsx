import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { Header } from "../components/mainPage/header";
import { CategoryScroll } from "../components/mainPage/categoryScroll";
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
      {/* <CategoryScroll>
        <div style={{ width: '300px', height: '100%', background: 'lightblue' }}>Item 1</div>
        <div style={{ width: '300px', height: '100%', background: 'lightcoral' }}>Item 2</div>
        <div style={{ width: '300px', height: '100%', background: 'lightgreen' }}>Item 3</div>
        <div style={{ width: '300px', height: '100%', background: 'lightyellow' }}>Item 4</div>
        <div style={{ width: '300px', height: '100%', background: 'lightpink' }}>Item 5</div>
      </CategoryScroll> */}
    </div>
  );
}
