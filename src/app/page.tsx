// components
import { BannerScroller } from "../components/mainPage/bannerScroller";
import { Categories } from "../components/mainPage/categories";
import { ProductsScroll } from "../components/mainPage/productsScroll";
import { BannerCard } from "../components/mainPage/bannerCard";
import Products from "../../data/products.json";
import { Sparkles, BadgePercent } from "lucide-react";


export default function Home() {

  // Next-intl
  // const t = useTranslations('HomePage.headers');

  return (
    <div className="w-full overflow-hidden mylg:mt-24 mysm:mt-0">
        {/* {t('title')} */}

      <BannerScroller />

      <div className="px-32 mylg:px-0">

        <Categories />

        <ProductsScroll
          name="mostSelling"
          icon={<Sparkles />}
          products={Products}
          filter="sell"
        />

        <div className="relative scale-[0.9]">
          <div className="rounded-3xl overflow-hidden">
            <BannerScroller/>
          </div>
          <div className="bg-background w-full h-1 absolute bottom-[-2px]"></div>
        </div>

        <ProductsScroll
          name="discounts"
          icon={<BadgePercent />}
          products={Products}
          filter="discount"
        />

        <BannerCard />
      </div>

    </div>
  );
}
