'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ImagesSticky } from '@/src/components/singleProductPage/imagesSection/imagesSticky';
import { ProductData } from '@/src/components/singleProductPage/dataSection/productData';
import Products from '../../../../data/products.json';
import { ProductType } from '@/src/types/product';
import { useLocale } from 'next-intl';
// import ProductsJp from "../../../../data/productsJp.json"
import ProductsJp from "@/data/productsJp.json"


export default function Product() {
  const pathname = usePathname(); // Get the full pathname
  const [product, setProduct] = useState<ProductType | null>(null);

  // Japanese version
  const [jpItem, setJpItem] = useState<ProductType>()
  const isEn = useLocale() === "en"

  useEffect(() => {
    if (!isEn && product) {
      const jpVersion = ProductsJp?.find((i: ProductType) => i.id === product.id); // Use find() instead of filter()
      setJpItem(jpVersion);
      console.log(ProductsJp)
    } else {
      setJpItem(undefined)
    }
  });



  useEffect(() => {
    const segments = pathname.split('/'); // Split the pathname
    const productName = segments[segments.length - 1]; // Get the last segment
    if (productName) {
      const foundProduct = Products.find(
        (p) => p.name.toLowerCase().replace(/ /g, '-') === productName
      );
      setProduct(foundProduct || null); // Set null if no product is found
    }
  }, [pathname]);

  if (!product) {
    // Handle product not found or loading state
    return <div>Loading or Product not found...</div>;
  }

  return (
    <div className="mt-24 mysm:mt-0 flex mymd:flex-col items-start mymd:items-center justify-center gap-10 mylg:gap-5 p-10 mysm:px-5">
      {/* <div about="filters" className="sticky top-24 w-[30%] h-full flex shring-0"> */}
      <div about="filters" className="sticky mymd:relative top-28 mymd:top-0 w-96 mylg:w-60 mymd:w-fit h-full flex shrink-0">
        <ImagesSticky product={product} />
      </div>

      <div about="products" className="w-[60%] mymd:w-full h-full">
        <ProductData product={jpItem ? jpItem : product} />
      </div>
    </div>
  );
}
