"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Tableau de Bord", icon: "📊" },
    { href: "/dashboard/chatbot", label: "Chatbot", icon: "💬" },
    { href: "/dashboard/profile", label: "Profil", icon: "👤" },
    { href: "/dashboard/analytics", label: "Analytics", icon: "📈" },
  ]

  return (
    <nav className="bg-white shadow-md w-64 min-h-screen">
      <div className="p-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition duration-300 mb-2 ${
              pathname === item.href ? "bg-indigo-100 text-indigo-600" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
