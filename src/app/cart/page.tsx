'use client';
import { CartProducts } from '@/src/components/cart/cartProducts';
import { Profile } from '@/src/components/cart/profile';

export default function Cart() {

  return (
    <div className="mt-24 mysm:mt-0 mysm:mb-20 flex mylg:flex-col-reverse items-start mylg:items-center justify-center gap-10 p-10 mymd:p-5">

      <div className="sticky mylg:relative top-32 mylg:top-0 w-96 mysm:w-full h-full flex shrink-0">
        <Profile />
      </div>

      <div className="w-[60%] mylg:w-full h-full">
        <CartProducts />
      </div>
    </div>
  );
}
