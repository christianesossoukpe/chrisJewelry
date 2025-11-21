import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Product {
  id: string
  name: string
  category: "men" | "women"
  price: number
  image: string
  description: string
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Chaîne Or Classique",
    category: "men",
    price: 299,
    image: "/collier-or-homme.jpg",
    description: "Chaîne en or massif 18 carats, design intemporel",
  },
  {
    id: "2",
    name: "Bracelet Cuir et Or",
    category: "men",
    price: 189,
    image: "/bracelet-cuir-or.jpg",
    description: "Bracelet élégant combinant cuir premium et or",
  },
  {
    id: "3",
    name: "Bague Diamant",
    category: "men",
    price: 1299,
    image: "/bague-diamant-homme.jpg",
    description: "Bague avec diamant certifié, or blanc 18 carats",
  },
  {
    id: "4",
    name: "Montre Luxe",
    category: "men",
    price: 2499,
    image: "/montre-luxe-homme.jpg",
    description: "Montre suisse automatique avec bracelet or",
  },
  {
    id: "5",
    name: "Collier Perles",
    category: "women",
    price: 549,
    image: "/collier-perles-femme-luxe.jpg",
    description: "Collier en perles d'eau douce premium",
  },
  {
    id: "6",
    name: "Boucles Diamants",
    category: "women",
    price: 899,
    image: "/boucles-oreilles-diamants-femme.jpg",
    description: "Boucles d'oreilles avec diamants GVS1",
  },
  {
    id: "7",
    name: "Bracelet Tressé",
    category: "women",
    price: 399,
    image: "/bracelet-or-femme-tresse.jpg",
    description: "Bracelet tressé en or rose 18 carats",
  },
  {
    id: "8",
    name: "Bague Émeraude",
    category: "women",
    price: 1599,
    image: "/bague-emeraude-femme.jpg",
    description: "Bague cocktail avec émeraude naturelle",
  },
]

interface ProductStore {
  products: Product[]
  addProduct: (product: Omit<Product, "id">) => void
  updateProduct: (id: string, product: Partial<Product>) => void
  deleteProduct: (id: string) => void
  getProductById: (id: string) => Product | undefined
  resetProducts: () => void
}

export const useProducts = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: DEFAULT_PRODUCTS,
      addProduct: (product) =>
        set((state) => ({
          products: [
            ...state.products,
            {
              ...product,
              id: Date.now().toString(),
            },
          ],
        })),
      updateProduct: (id, updates) =>
        set((state) => ({
          products: state.products.map((p) => (p.id === id ? { ...p, ...updates } : p)),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
      getProductById: (id) => {
        const state = get()
        return state.products.find((p) => p.id === id)
      },
      resetProducts: () => set({ products: DEFAULT_PRODUCTS }),
    }),
    {
      name: "jewelry-products",
    },
  ),
)
