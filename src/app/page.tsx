import Link from "next/link";
// components
import Menu from "../components/menu/menu";
import { BannerScroller } from "../components/bannerScroller";
import { Categories } from "../components/mainPage/categories";
import { ProductsScroll } from "../components/productsScroll";
import { BannerCard } from "../components/bannerCard";
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
    <div className="mt- w-full overflow-hidden">

      <Menu />
      {/* <BannerScroller /> */}

      <div className="px-20">
        {/* {t('title')} */}

        {/* <Categories /> */}

        <ProductsScroll
          name="Most Selling"
          icon={<Sparkles />}
          products={Products}
          />
        <ProductsScroll
          name="Discounts"
          icon={<BadgePercent />}
          products={Products}
        />

        <BannerScroller/>
        <BannerCard />
      </div>

        <Footer />
    </div>
  );
}
