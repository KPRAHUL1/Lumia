import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Footer-section/footer";
import BottomNav2 from "../Bottomnav2/BottomNav";
import Nav from "../nav-bor/header"
import ProductCard from "../Card/ProductCard";

export default function CategoryRoute() {
  const { categoryName } = useParams(); 
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `http://localhost:5000/api/product?category=${categoryName}`;
        console.log("API Request URL:", apiUrl);
        const response = await axios.get(apiUrl);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.response?.data?.message || "An unexpected error occurred.");
      }
    };
  
    fetchProducts();
  }, [categoryName]);
  
  

  return (
    <>
    <Nav/>
      <section className="bg-slate-300 min-h-screen">
        <nav className="px-6 py-4">
          <p>
            <Link className="text-blue-600" to="/">Home</Link> {">"} <span>{categoryName}</span>
          </p>
        </nav>

        {error ? (
          <div className="text-red-600 text-center py-4">{error}</div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:mx-40 pb-10">
            {products.map((product) => (
              // <div
              //   key={product.id}
              //   className="p-4 border rounded-lg hover:shadow-lg transition"
              // >
              //   <img
              //     src={`http://localhost:5000/${product.imageUrl}`}
              //     alt={product.name}
              //     className="w-full h-40 object-cover rounded-lg"
              //   />
              //   <h3 className="mt-2 font-bold text-lg">{product.name}</h3>
              //   <p className="text-gray-600">${product.price.toFixed(2)}</p>
              // </div>
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        )}
      </section>
      
      <Footer />
      <BottomNav2 />
    </>
  );
}
