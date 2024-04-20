import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md w-80 text-center">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-800">${product.price}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
}
