"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-card py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Bijoux Exceptionnels pour Vous</h1>
        <p className="text-xl md:text-2xl mb-8 text-card/90 text-balance">
          Découvrez notre collection exclusive de bijoux haut de gamme pour hommes et femmes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#products"
            className="bg-card text-primary hover:bg-secondary hover:text-card font-semibold py-4 px-10 rounded-lg transition duration-300 inline-block"
          >
            Voir les Collections
          </Link>
          <button className="border-2 border-card text-card hover:bg-card hover:text-primary font-semibold py-4 px-10 rounded-lg transition duration-300">
            Découvrir Plus
          </button>
        </div>
      </div>
    </section>
  )
}
