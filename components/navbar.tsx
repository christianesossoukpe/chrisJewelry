"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const cartCount = cartItems.length

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Luxe Bijoux
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/#products" className="text-foreground hover:text-primary transition">
              Collections
            </Link>
            <Link href="/#features" className="text-foreground hover:text-primary transition">
              À propos
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative flex items-center text-foreground hover:text-primary transition">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border space-y-2">
            <Link href="/#products" className="block px-4 py-2 text-foreground hover:text-primary transition">
              Collections
            </Link>
            <Link href="/#features" className="block px-4 py-2 text-foreground hover:text-primary transition">
              À propos
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
