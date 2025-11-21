"use client"

import type React from "react"

import { useState } from "react"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface ProductFormProps {
  product?: Product
  onSubmit: (data: Omit<Product, "id">) => void
  onCancel: () => void
}

export function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Omit<Product, "id">>({
    name: product?.name || "",
    category: product?.category || "women",
    price: product?.price || 0,
    image: product?.image || "",
    description: product?.description || "",
  })

  const [imagePreview, setImagePreview] = useState<string>(product?.image || "")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Vérifier que c'est une image
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image valide")
      return
    }

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("L'image doit faire moins de 5MB")
      return
    }

    // Convertir en base64
    const reader = new FileReader()
    reader.onload = (event) => {
      const base64String = event.target?.result as string
      setFormData({ ...formData, image: base64String })
      setImagePreview(base64String)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: "" })
    setImagePreview("")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.image || formData.price === 0) {
      alert("Veuillez remplir tous les champs")
      return
    }
    onSubmit(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product ? "Modifier le produit" : "Ajouter un nouveau produit"}</CardTitle>
        <CardDescription>
          {product ? "Mettez à jour les informations du produit" : "Remplissez les détails du nouveau produit"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom du produit</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="ex: Chaîne Or Classique"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Catégorie</Label>
              <Select
                value={formData.category}
                onValueChange={(value: any) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="men">Hommes</SelectItem>
                  <SelectItem value="women">Femmes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Prix (€)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
                placeholder="299"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image du produit</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition-colors">
              <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <label htmlFor="image" className="cursor-pointer block">
                {imagePreview ? (
                  <div className="space-y-3">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Aperçu"
                      className="w-32 h-32 object-cover mx-auto rounded"
                    />
                    <p className="text-sm text-gray-600">Cliquez pour changer l'image</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-2xl">📸</div>
                    <p className="text-sm font-medium">Cliquez pour télécharger une image</p>
                    <p className="text-xs text-gray-500">ou glissez-déposez (max 5MB)</p>
                  </div>
                )}
              </label>
            </div>
            {imagePreview && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRemoveImage}
                className="w-full text-red-600 hover:bg-red-50 bg-transparent"
              >
                <X className="w-4 h-4 mr-2" />
                Supprimer l'image
              </Button>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Décrivez le produit en détail..."
              rows={4}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              {product ? "Mettre à jour" : "Ajouter le produit"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="flex-1 bg-transparent">
              Annuler
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
