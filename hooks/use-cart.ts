"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartStore {
  cartItems: CartItem[]
  addToCart: (product: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            }
          }
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),
      clearCart: () => set({ cartItems: [] }),
      getTotalPrice: () => {
        const state = get()
        return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: "jewelry-cart",
    },
  ),
)
