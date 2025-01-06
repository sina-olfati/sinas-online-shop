'use client';
import { CartProducts } from '@/src/components/cart/cartProducts';
import { Profile } from '@/src/components/cart/profile';

export default function Cart() {

  return (
    <div className="mt-24 flex items-start justify-center gap-10 p-10">

      <div className="sticky top-32 w-96 h-full flex shrink-0">
        <Profile />
      </div>

      <div className="w-[60%] h-full">
        <CartProducts />
      </div>
    </div>
  );
}
