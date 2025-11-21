"use client"

import { useState } from "react"
import { type Product, useProducts } from "@/lib/products"
import { ProductForm } from "@/components/admin/product-form"
import { ProductsList } from "@/components/admin/products-list"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const { addProduct, updateProduct } = useProducts()
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (data: Omit<Product, "id">) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data)
      setEditingProduct(null)
    } else {
      addProduct(data)
    }
    setShowForm(false)
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleCancel = () => {
    setEditingProduct(null)
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Gestion des Produits</h1>
            <p className="text-muted-foreground mt-2">Administrez votre catalogue de bijoux</p>
          </div>
          <Link href="/">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Retour à la boutique
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductsList onEdit={handleEdit} />
          </div>

          <div>
            {showForm ? (
              <ProductForm product={editingProduct || undefined} onSubmit={handleSubmit} onCancel={handleCancel} />
            ) : (
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Button onClick={() => setShowForm(true)} size="lg" className="w-full">
                  Ajouter un nouveau produit
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
