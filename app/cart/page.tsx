"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Trash2, Plus, Minus } from "lucide-react"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96212310"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const total = getTotalPrice()

  const handleWhatsAppCheckout = () => {
    const itemsList = cartItems.map((item) => `${item.name} x${item.quantity} - ${item.price}€`).join("\n")
    const totalPrice = total
    const message = `Bonjour, je souhaite commander:\n\n${itemsList}\n\nTotal: ${totalPrice}€\n\nPouvez-vous confirmer ma commande?`
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-12">Mon Panier</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-6">Votre panier est vide</p>
              <Link
                href="/#products"
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 px-6 rounded-lg transition"
              >
                Continuer les Achats
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-6 border-b border-border last:border-b-0 hover:bg-muted/50 transition"
                    >
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-primary font-bold mb-3">{item.price}€</p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="p-1 hover:bg-border rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-border rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold mb-4">{(item.price * item.quantity).toFixed(2)}€</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:bg-destructive/10 p-2 rounded transition"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6">Résumé</h2>
                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sous-total</span>
                      <span className="font-semibold">{total.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className="font-semibold">Gratuite</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-bold mb-6">
                    <span>Total</span>
                    <span className="text-primary">{total.toFixed(2)}€</span>
                  </div>
                  <Button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mb-3"
                  >
                    💬 Finaliser via WhatsApp
                  </Button>
                  <Button onClick={clearCart} variant="outline" className="w-full bg-transparent">
                    Vider le Panier
                  </Button>
                  <Link
                    href="/#products"
                    className="block text-center mt-4 text-primary hover:text-primary/80 transition font-semibold"
                  >
                    Continuer les Achats
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
