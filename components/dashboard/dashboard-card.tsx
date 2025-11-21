import Link from "next/link"

interface DashboardCardProps {
  title: string
  description: string
  href: string
  color: "indigo" | "green" | "purple"
  icon: string
}

const colorMap = {
  indigo: "bg-indigo-50 border-indigo-100",
  green: "bg-green-50 border-green-100",
  purple: "bg-purple-50 border-purple-100",
}

const buttonColorMap = {
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  green: "bg-green-600 hover:bg-green-700",
  purple: "bg-purple-600 hover:bg-purple-700",
}

export function DashboardCard({ title, description, href, color, icon }: DashboardCardProps) {
  return (
    <div className={`${colorMap[color]} p-6 rounded-lg border`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        className={`${buttonColorMap[color]} text-white font-medium py-2 px-4 rounded transition duration-300 inline-block`}
      >
        Accéder
      </Link>
    </div>
  )
}
