import { create } from 'zustand';
import Cookies from 'js-cookie'; // Fix import (use the default export, not `{ cookies }`)

// Define CartItem type
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Define CartState type
type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

// Create Zustand store
export const useCartStore = create<CartState>((set, get) => ({
  // Initialize cart from cookies or set to an empty array
  cart: Cookies.get('cart') ? (JSON.parse(Cookies.get('cart')!) as CartItem[]) : [],

  // Add an item to the cart
  addItem: (item: CartItem) => {
    const existingCart = get().cart;
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === item.id);

    // Update quantity if item already exists, otherwise add new item
    let updatedCart: CartItem[];
    if (itemIndex !== -1) {
      updatedCart = [...existingCart];
      updatedCart[itemIndex].quantity += item.quantity;
    } else {
      updatedCart = [...existingCart, item];
    }

    // Save updated cart to cookies and state
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7, secure: true });
    set({ cart: updatedCart });
  },

  // Remove an item from the cart
  removeItem: (id: number) => {
    const updatedCart = get().cart.filter((item) => item.id !== id);

    // Save updated cart to cookies and state
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7, secure: true });
    set({ cart: updatedCart });
  },

  // Clear the cart
  clearCart: () => {
    Cookies.remove('cart');
    set({ cart: [] });
  },

  // Calculate total number of items in the cart
  totalItems: (): number =>
    get().cart.reduce((sum, item) => sum + item.quantity, 0),

  // Calculate total price of items in the cart
  totalPrice: (): number =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));
