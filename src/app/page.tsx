import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { Header } from "../components/mainPage/header";
import { Categories } from "../components/mainPage/categories";
import { ProductsScroll } from "../components/productsScroll";
// products (for ProductScroll) | icon
import Products from "../../data/products.json"
import { Sparkles } from "lucide-react";
// Next-intl
import {useTranslations} from 'next-intl';
import Image from "next/image";


export default function Home() {

  // Next-intl
  // const t = useTranslations('HomePage');

  return (
    <div className="mt-24">
      {/* {t('title')} */}
      <Menu />
      {/* <Header /> */}
      <Categories />
      <ProductsScroll name="Most Selling" icon={<Sparkles />} products={Products} />
      {/* <Image src={"/productImages/hoody1.webp"} width={100} height={100} alt="comeon" /> */}
    </div>
  );
}
