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
      {/* <Menu /> */}
      {/* <Header /> */}
      <CategoryScroll>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
        <div className="w-56 h-16 rounded-full bg-primary flex justify-center items-center snap-center">Item 1</div>
      </CategoryScroll>
    </div>
  );
}
