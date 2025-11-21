export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">Heures de Pratique</h3>
            <p className="text-3xl font-bold text-purple-600">24.5h</p>
            <p className="text-sm text-gray-600 mt-2">Cette semaine</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
            <h3 className="text-lg font-semibold text-indigo-800 mb-2">Sessions</h3>
            <p className="text-3xl font-bold text-indigo-600">12</p>
            <p className="text-sm text-gray-600 mt-2">Cette semaine</p>
          </div>
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-100">
            <h3 className="text-lg font-semibold text-cyan-800 mb-2">Progression</h3>
            <p className="text-3xl font-bold text-cyan-600">+15%</p>
            <p className="text-sm text-gray-600 mt-2">Vs la semaine précédente</p>
          </div>
        </div>
      </div>
    </div>
  )
}
