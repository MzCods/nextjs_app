"use client";

import { useState } from "react";

export default function ValidatorPage() {
  const [productsToValidate, setProductsToValidate] = useState([
    {
      id: 1,
      name: "Product 1",
      serialNumber: "1234567890",
      description: "Description of Product 1",
      image: "https://via.placeholder.com/150?text=Product+1"
    },
    {
      id: 2,
      name: "Product 2",
      serialNumber: "9876543210",
      description: "Description of Product 2",
      image: "https://via.placeholder.com/150?text=Product+2"
    },
    {
      id: 3,
      name: "Product 3",
      serialNumber: "1122334455",
      description: "Description of Product 3",
      image: "https://via.placeholder.com/150?text=Product+3"
    }
  ]);

  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      serialNumber: "1234567890",
      description: "Description of Product 1",
      status: "Pending",
      image: "https://via.placeholder.com/150?text=Product+1"
    },
    {
      id: 2,
      name: "Product 2",
      serialNumber: "9876543210",
      description: "Description of Product 2",
      status: "Approved",
      image: "https://via.placeholder.com/150?text=Product+2"
    },
    {
      id: 3,
      name: "Product 3",
      serialNumber: "1122334455",
      description: "Description of Product 3",
      status: "Rejected",
      image: "https://via.placeholder.com/150?text=Product+3"
    }
  ]);

  const handleValidate = (id: number) => {
    // Logique de validation ici
    setProductsToValidate(productsToValidate.filter(product => product.id !== id));
  };

  const handleReject = (id: number) => {
    // Logique de rejet ici
    setProductsToValidate(productsToValidate.filter(product => product.id !== id));
  };

  const handleLogout = () => {
    window.location.href = "/"; // Remplacez par l'URL de la page d'accueil
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      {/* Logout Button */}
      <div className="absolute top-8 right-8">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
        >
          Logout
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Validator Interface</h1>

      {/* Products to Validate */}
      <section className="w-full max-w-5xl mb-12">
        <h2 className="text-3xl font-semibold mb-6">Products to Validate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsToValidate.map(product => (
            <div key={product.id} className="p-4 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="mb-2">Serial Number: {product.serialNumber}</p>
              <p className="mb-4">{product.description}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleValidate(product.id)}
                  className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700"
                >
                  Validate
                </button>
                <button
                  onClick={() => handleReject(product.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Products Table */}
      <section className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">All Products</h2>
        <table className="w-full border-collapse bg-gray-100 dark:bg-gray-800 rounded-lg">
          <thead>
            <tr>
              <th className="p-2 border-b">Image</th>
              <th className="p-2 border-b">Product Name</th>
              <th className="p-2 border-b">Serial Number</th>
              <th className="p-2 border-b">Description</th>
              <th className="p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map(product => (
              <tr key={product.id}>
                <td className="p-2 border-b">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-2 border-b">{product.name}</td>
                <td className="p-2 border-b">{product.serialNumber}</td>
                <td className="p-2 border-b">{product.description}</td>
                <td className="p-2 border-b">{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
