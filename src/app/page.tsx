import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { BannerScroller } from "../components/mainPage/bannerScroller";
import { Categories } from "../components/mainPage/categories";
import { ProductsScroll } from "../components/mainPage/productsScroll";
import { BannerCard } from "../components/mainPage/bannerCard";
import { Footer } from "../components/footer";
// products (for ProductScroll) | icon
import Products from "../../data/products.json";
import { Sparkles, BadgePercent } from "lucide-react";
// Next-intl
// import { useTranslations } from "next-intl";

export default function Home() {
  // Next-intl
  // const t = useTranslations('HomePage');

  return (
    <div className="w-full overflow-hidden">
        {/* {t('title')} */}

      <Menu />
      <BannerScroller />

      <div className="px-32">

        <Categories />

        <ProductsScroll
          name="Most Selling"
          icon={<Sparkles />}
          products={Products}
          />

        <div className="rounded-3xl overflow-hidden shadow-md scale-[0.9]">
          <BannerScroller/>
        </div>

        <ProductsScroll
          name="Discounts"
          icon={<BadgePercent />}
          products={Products}
        />

        <BannerCard />
      </div>

        <Footer />
    </div>
  );
}
