"use client"

export function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-indigo-700">MusicBot Dashboard</h1>
          <form action="/api/logout" method="POST" className="inline">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}
