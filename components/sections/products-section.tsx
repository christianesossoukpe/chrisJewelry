"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/hooks/use-cart"
import { useProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
  const [filter, setFilter] = useState<"all" | "men" | "women">("all")
  const { addToCart } = useCart()
  const { products } = useProducts()

  const filteredProducts = products.filter((p) => filter === "all" || p.category === filter)

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Notre Collection</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Des bijoux d'exception pour chaque moment de votre vie
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <Button onClick={() => setFilter("all")} variant={filter === "all" ? "default" : "outline"}>
            Tous
          </Button>
          <Button onClick={() => setFilter("men")} variant={filter === "men" ? "default" : "outline"}>
            Hommes
          </Button>
          <Button onClick={() => setFilter("women")} variant={filter === "women" ? "default" : "outline"}>
            Femmes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price}€</span>
                  <Button
                    onClick={() => addToCart(product)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Ajouter
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
