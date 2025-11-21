"use client"

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890"

export function CTASection() {
  return (
    <section id="contact" className="bg-gradient-to-r from-primary to-secondary text-card py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Besoin d'une Création Personnalisée?</h2>
        <p className="text-xl mb-8 text-card/90">
          Contactez-nous pour des bijoux sur mesure ou pour plus d'informations
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour,%20je%20m'intéresse%20à%20vos%20bijoux.%20Pouvez-vous%20me%20donner%20plus%20d'informations?`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-card text-primary hover:bg-secondary hover:text-card font-semibold py-3 px-8 rounded-lg transition duration-300 inline-block"
        >
          💬 Contacter sur WhatsApp
        </a>
      </div>
    </section>
  )
}
