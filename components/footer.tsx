"use client"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Luxe Bijoux</h3>
            <p className="text-primary-foreground/80">Votre boutique de bijoux haut de gamme en ligne</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/#products" className="hover:text-primary-foreground transition">
                  Tous les Bijoux
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-primary-foreground transition">
                  Bijoux Hommes
                </a>
              </li>
              <li>
                <a href="/#products" className="hover:text-primary-foreground transition">
                  Bijoux Femmes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">À propos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Nos Valeurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Certifications
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Luxe Bijoux. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
