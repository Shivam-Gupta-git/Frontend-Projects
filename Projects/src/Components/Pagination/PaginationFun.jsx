import React, { useEffect, useState } from "react";

function PaginationFun() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const limit = 10;
  const totalPage = Math.ceil(100 / limit);
  console.log(totalPage);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
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
  }, [page]);

  const handelPrev = () => {
    if (page > 0) setPage(page - 1);
  };
  const handelNext = () => {
    setPage(page + 1);
  };
  const handelPageClick = (pageNumber) => {
    setPage(pageNumber);
  };

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
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>

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

            <h2 className="text-lg font-semibold truncate">{item.title}</h2>

            <p className="text-sm text-gray-500 mb-2">Brand: {item.brand}</p>

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
      <div className="w-full flex flex-row items-center justify-center gap-3 mt-5">
        <button
          onClick={handelPrev}
          disabled={page === 0}
          className={`bg-gray-300 px-3 py-1 rounded-xl disabled:opacity-50`}  
        >
          Prev
        </button>
        {[...Array(totalPage/2)].map((_, index) => (
          <button
            key={index}
            onClick={() => handelPageClick(index)}
            className={`px-3 py-1 rounded-xl
        ${
          page === index
            ? "bg-gray-800 text-white"
            : "bg-gray-300 hover:bg-gray-400 hover:text-white cursor-pointer"
        }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handelNext}
          disabled={page === totalPage - 1}
          className="bg-gray-300 px-3 py-1 rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationFun;
