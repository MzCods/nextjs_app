"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function EditProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serial = searchParams.get("serial");

  const [product, setProduct] = useState({
    name: "",
    serialNumber: "",
    description: "",
  });

  useEffect(() => {
    if (serial) {
      // Ici, récupérer les détails du produit en fonction du numéro de série
      // Utilise une méthode de fetch pour obtenir les données du produit
      // Exemple de données simulées
      setProduct({
        name: "Sample Product",
        serialNumber: "1234567890",
        description: "This is a sample product.",
      });
    }
  }, [serial]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Traitement du formulaire à ajouter ici
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-white via-white dark:from-black dark:via-black">
      {/* Main Content */}
      <div className="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-4xl font-bold mb-8">Edit Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            required
          />
          <input
            type="text"
            placeholder="Serial Number"
            value={product.serialNumber}
            onChange={(e) => setProduct({ ...product, serialNumber: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            required
          />
          <textarea
            placeholder="Product Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            rows={4}
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Button Back to Products */}
      <div className="fixed bottom-8 left-8">
        <Link href="/manufacturer">
          <button className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800">
            Back to Products
          </button>
        </Link>
      </div>
    </main>
  );
}
