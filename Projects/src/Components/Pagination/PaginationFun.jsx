import React, { useEffect, useState } from "react";

function PaginationFun() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=500"
      );
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.log("Failed to fetch Product Data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10 font-semibold">
        Loading products...
      </h1>
    );
  }

  if (!products.length) {
    return (
      <h1 className="text-center text-2xl mt-10 text-red-500">
        Products are not available
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />

            <h2 className="text-lg font-semibold truncate">
              {item.title}
            </h2>

            <p className="text-sm text-gray-500 mb-2">
              Brand: {item.brand}
            </p>

            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-green-600">
                ₹{item.price}
              </span>

              <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                ⭐ {item.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaginationFun;