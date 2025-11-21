# Luxe Bijoux - E-Commerce de Bijoux Premium

Une application e-commerce moderne pour la vente de bijoux haut de gamme pour hommes et femmes, avec système de panier et intégration WhatsApp pour les achats.

## Caractéristiques

- 🛍️ Catalogue de bijoux pour hommes et femmes
- 🛒 Système de panier persistant
- 💬 Intégration WhatsApp pour finaliser les achats
- 📱 Design responsive et moderne
- 🎨 Thème luxe minimaliste avec couleurs premium
- ⚡ Performant et optimisé pour Vercel

## Installation

### Prérequis

- Node.js 18+ 
- npm ou pnpm

### Étapes d'installation locale

1. Clonez le repository
\`\`\`bash
git clone <votre-repo>
cd jewelry-store
\`\`\`

2. Installez les dépendances
\`\`\`bash
npm install
# ou
pnpm install
\`\`\`

3. Configurez les variables d'environnement
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Modifiez `.env.local` et ajoutez votre numéro WhatsApp
\`\`\`
NEXT_PUBLIC_WHATSAPP_NUMBER=33612345678
\`\`\`

5. Lancez le serveur de développement
\`\`\`bash
npm run dev
# ou
pnpm dev
\`\`\`

6. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Configuration WhatsApp

1. Obtenez votre numéro WhatsApp Business ou personnel
2. Modifiez le fichier `.env.local`:
   \`\`\`
   NEXT_PUBLIC_WHATSAPP_NUMBER=33612345678
   \`\`\`
3. Remplacez `33612345678` par votre numéro (format international sans +)

## Déploiement sur Vercel

### Option 1: Via GitHub

1. Poussez votre code sur GitHub
\`\`\`bash
git push origin main
\`\`\`

2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project"
4. Sélectionnez votre repository GitHub
5. Ajoutez les variables d'environnement:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Votre numéro WhatsApp
6. Cliquez sur "Deploy"

### Option 2: CLI Vercel

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## Structure du Projet

\`\`\`
.
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── cart/
│   │   └── page.tsx      # Page du panier
│   ├── layout.tsx        # Layout principal
│   └── globals.css       # Styles globaux
├── components/
│   ├── navbar.tsx        # Barre de navigation
│   ├── footer.tsx        # Pied de page
│   └── sections/         # Sections de la page
├── hooks/
│   └── use-cart.ts       # Hook pour gérer le panier
├── public/               # Images et assets
└── package.json
\`\`\`

## Personnalisation

### Ajouter des produits

Modifiez le tableau `PRODUCTS` dans `components/sections/products-section.tsx`:

\`\`\`tsx
const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Nom du Bijou",
    category: "men" | "women",
    price: 299,
    image: "/image.jpg",
    description: "Description du bijou"
  },
  // ...
]
\`\`\`

### Modifier les couleurs

Les couleurs sont définies dans `app/globals.css` en tant que variables CSS. Modifiez les valeurs oklch:

\`\`\`css
:root {
  --primary: oklch(0.2 0.08 40);      /* Couleur primaire */
  --secondary: oklch(0.75 0.15 60);   /* Couleur secondaire */
  --accent: oklch(0.70 0.20 60);      /* Couleur d'accent */
  /* ... autres couleurs */
}
\`\`\`

## Support

Pour toute question ou problème, consultez la documentation:
- [Next.js](https://nextjs.org/docs)
- [Vercel](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Licence

MIT

---

Créé avec ❤️ pour les bijouteries modernes
