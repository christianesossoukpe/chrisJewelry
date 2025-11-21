export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Votre Profil</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Informations Personnelles</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Nom</label>
                <p className="text-gray-900">Utilisateur</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-900">user@example.com</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Préférences Musicales</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Instrument</label>
                <p className="text-gray-900">Guitare</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Niveau</label>
                <p className="text-gray-900">Intermédiaire</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
