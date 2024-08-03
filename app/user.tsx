"use client";

import { useState } from "react";

export default function UserPage() {
  const [serialNumber, setSerialNumber] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumber(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Vérification de produit</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          className="w-full p-2 mb-4 border rounded"
          placeholder="Entrez le numéro de série"
          value={serialNumber}
          onChange={handleInputChange}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Vérifier le produit
        </button>
      </div>
    </main>
  );
}
