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
          />

        <div className="rounded-3xl overflow-hidden shadow-md scale-[0.9]">
          <BannerScroller/>
        </div>

        <ProductsScroll
          name="discounts"
          icon={<BadgePercent />}
          products={Products}
        />

        <BannerCard />
      </div>

    </div>
  );
}
