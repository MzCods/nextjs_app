"use client";

import { useState } from "react";

export default function UserPage() {
  const [serialNumber, setSerialNumber] = useState("");
  const [verifications, setVerifications] = useState<any[]>([]); // Utiliser le type approprié pour vos données

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Ajouter le produit à la liste des vérifications (simulé ici)
    setVerifications([
      ...verifications,
      { serialNumber, status: "Verified", flagged: false }
    ]);
    setSerialNumber("");
  };

  const handleFlag = (index: number) => {
    const updatedVerifications = verifications.map((item, i) =>
      i === index ? { ...item, flagged: true } : item
    );
    setVerifications(updatedVerifications);
  };

  const handleLogout = () => {
    // Logique de déconnexion ici
    // Exemple de redirection après déconnexion
    window.location.href = "/"; // Remplacez par l'URL de la page de connexion
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      {/* Bouton de déconnexion */}
      <div className="absolute top-6 right-6">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
        >
          Logout
        </button>
      </div>

      {/* Titre au-dessus du formulaire */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Vérification de produit
      </h1>
      
      {/* Conteneur pour le formulaire */}
      <div className="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 mb-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label
            htmlFor="serial-number"
            className="text-lg font-medium text-gray-900 dark:text-gray-100"
          >
            Enter Product Serial Number
          </label>
          <input
            type="text"
            id="serial-number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="e.g. 1234567890"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Verify Product
          </button>
        </form>
      </div>

      {/* Historique des vérifications */}
      <div className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4">Historique des vérifications</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Serial Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Flagged
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {verifications.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {item.serialNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {item.flagged ? "Yes" : "No"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {!item.flagged && (
                    <button
                      onClick={() => handleFlag(index)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Flag
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
