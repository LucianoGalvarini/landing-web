"use client";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([] as any[]);

  async function fetchProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    if (querySnapshot.docs.length > 0) {
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <ProductList products={products} />
      <AddProductForm fetchProducts={fetchProducts} />
    </main>
  );
}
