"use client"

export function FeaturesSection() {
  const features = [
    {
      title: "Qualité Premium",
      description: "Tous nos bijoux sont certifiés et garantis authentiques",
      icon: "✓",
    },
    {
      title: "Livraison Sécurisée",
      description: "Livraison express avec assurance pour vos précieux",
      icon: "📦",
    },
    {
      title: "Service Client 24/7",
      description: "Notre équipe est disponible pour répondre à vos questions",
      icon: "💬",
    },
    {
      title: "Garantie à Vie",
      description: "Tous nos bijoux sont garantis à titre gratuit à vie",
      icon: "⭐",
    },
  ]

  return (
    <section id="features" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Pourquoi Nous Choisir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-border hover:border-primary transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
