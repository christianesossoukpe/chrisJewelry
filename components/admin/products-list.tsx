"use client"

import { useState } from "react"
import { type Product, useProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Trash2, Edit2 } from "lucide-react"

interface ProductsListProps {
  onEdit: (product: Product) => void
}

export function ProductsList({ onEdit }: ProductsListProps) {
  const { products, deleteProduct } = useProducts()
  const [filter, setFilter] = useState<"all" | "men" | "women">("all")

  const filteredProducts = products.filter((p) => filter === "all" || p.category === filter)

  const handleDelete = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
      deleteProduct(id)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Liste des produits</CardTitle>
        <CardDescription>Gérez vos bijoux en stock</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-6">
          <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
            Tous ({products.length})
          </Button>
          <Button variant={filter === "men" ? "default" : "outline"} onClick={() => setFilter("men")}>
            Hommes ({products.filter((p) => p.category === "men").length})
          </Button>
          <Button variant={filter === "women" ? "default" : "outline"} onClick={() => setFilter("women")}>
            Femmes ({products.filter((p) => p.category === "women").length})
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-2 px-4 font-semibold">Image</th>
                <th className="text-left py-2 px-4 font-semibold">Nom</th>
                <th className="text-left py-2 px-4 font-semibold">Catégorie</th>
                <th className="text-left py-2 px-4 font-semibold">Prix</th>
                <th className="text-left py-2 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-muted/50">
                  <td className="py-2 px-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{product.category === "men" ? "Hommes" : "Femmes"}</td>
                  <td className="py-2 px-4 font-semibold">{product.price} Fcfa</td>
                  <td className="py-2 px-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => onEdit(product)} className="gap-1">
                        <Edit2 className="w-4 h-4" />
                        Éditer
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(product.id)}
                        className="gap-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Supprimer
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
