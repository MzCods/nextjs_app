"use client";

import Link from "next/link";

export default function ManufacturerPage() {
  const handleLogout = () => {
    // Logique de déconnexion ici
    // Exemple de redirection après déconnexion
    window.location.href = "/"; // Remplacez par l'URL de la page de connexion
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      <h1 className="text-4xl font-bold mb-8">Manufacturer Interface</h1>
      <div className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
        {/* Bouton de déconnexion */}
      <div className="absolute top-6 right-6">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
        >
          Logout
        </button>
      </div>

        {/* Create Product Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Create New Product</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              required
            />
            <input
              type="text"
              placeholder="Serial Number"
              className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              required
            />
            <textarea
              placeholder="Product Description"
              className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              rows={4}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Add Product
            </button>
          </form>
        </section>

        {/* Manage Products Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto bg-white dark:bg-gray-900 rounded-lg shadow">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="p-3 text-left">Product Name</th>
                  <th className="p-3 text-left">Serial Number</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Example row, replace with dynamic data */}
                <tr className="border-b dark:border-gray-700">
                  <td className="p-3">Sample Product</td>
                  <td className="p-3">1234567890</td>
                  <td className="p-3">This is a sample product.</td>
                  <td className="p-3">
                    <Link href={`/manufacturer/edit?serial=1234567890`}>
                      <button className="px-4 py-1 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700">
                        Edit
                      </button>
                    </Link>
                    <button className="px-4 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* More rows here */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
