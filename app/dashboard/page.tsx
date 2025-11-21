import { DashboardCard } from "@/components/dashboard/dashboard-card"
import { TipsCard } from "@/components/dashboard/tips-card"

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-600 mb-8">
          Gérez votre expérience musicale et interagissez avec notre assistant intelligent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <DashboardCard
            title="Chatbot Musical"
            description="Discutez avec notre assistant pour améliorer votre pratique musicale."
            href="/dashboard/chatbot"
            color="indigo"
            icon="💬"
          />
          <DashboardCard
            title="Votre Profil"
            description="Consultez et modifiez vos informations personnelles et musicales."
            href="/dashboard/profile"
            color="green"
            icon="👤"
          />
          <DashboardCard
            title="Analytics"
            description="Analysez vos progrès et obtenez des insights sur votre pratique musicale."
            href="/dashboard/analytics"
            color="purple"
            icon="📊"
          />
        </div>

        <TipsCard />
      </div>
    </div>
  )
}
