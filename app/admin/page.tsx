"use client";

import { useState } from "react";

export default function AdminPage() {
  const [address, setAddress] = useState("");
  const [validators, setValidators] = useState<string[]>([]);

  const handleAddValidator = (event: React.FormEvent) => {
    event.preventDefault();
    if (address.trim()) {
      setValidators([...validators, address.trim()]);
      setAddress("");
    }
  };

  const handleLogout = () => {
    // Logique de déconnexion ici
    // Exemple de redirection après déconnexion
    window.location.href = "/"; // Remplacez par l'URL de la page de connexion
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      <h1 className="text-4xl font-bold mb-6">Admin Interface</h1>
      
      <div className="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800 mb-8">
        <form onSubmit={handleAddValidator} className="flex flex-col gap-4">
          <label
            htmlFor="validator-address"
            className="text-lg font-medium text-gray-900 dark:text-gray-100"
          >
            Validator Address
          </label>
          <input
            type="text"
            id="validator-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            placeholder="e.g. 0x1234567890abcdef"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Add Validator
          </button>
        </form>
      </div>

      <div className="w-full max-w-2xl p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Validators List</h2>
        <table className="min-w-full bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
            </tr>
          </thead>
          <tbody>
            {validators.map((validator, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  {validator}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fixed top-4 right-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
