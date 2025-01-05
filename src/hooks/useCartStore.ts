import { create } from 'zustand';
// @ts-ignore
import Cookies from 'js-cookie'; // Fix import (use the default export, not `{ cookies }`)

// Define CartItem type
export type CartItem = {
  id: number;
  name: string;
  price: number; // Discounted price
  originalPrice: number; // New field for the original price
  quantity: number;
  image: string;
};

// Define CartState type
type CartState = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number; // Total discounted price
  totalOriginalPrice: () => number; // Total original price
  getItemQuantity: (id: number) => number;
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

  // Decrement the quantity of an item in the cart by 1
  decrementItem: (id: number) => {
    const existingCart = get().cart;
    const itemIndex = existingCart.findIndex((cartItem) => cartItem.id === id);

    if (itemIndex !== -1) {
      const updatedCart = [...existingCart];
      const item = updatedCart[itemIndex];

      // Reduce quantity or remove item if quantity is 1
      if (item.quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }

      // Save updated cart to cookies and state
      Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7, secure: true });
      set({ cart: updatedCart });
    }
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

  // Calculate total discounted price of items in the cart
  totalPrice: (): number =>
    get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  // Calculate total original price of items in the cart
  totalOriginalPrice: (): number =>
    get().cart.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0),

  // Get the quantity of a specific item in the cart
  getItemQuantity: (id: number): number => {
    const item = get().cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  },
}));
