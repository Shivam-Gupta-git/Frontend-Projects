import React, { useEffect, useState } from 'react'

function LoadMoreData() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const LIMIT = 10

  const fetchProducts = async () => {
    setLoading(true)

    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${page * LIMIT}`
      )
      const data = await response.json()

      setProducts(prev => [...prev, ...data.products])

      if (prevLengthReached(prevLength => prevLength + data.products.length >= 100)) {
        setDisableButton(true)
      }
    } catch (error) {
      console.error('API Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const prevLengthReached = (fn) => {
    setProducts(prev => {
      fn(prev.length)
      return prev
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-gray-800 px-6 py-12">

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Products */}
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h2 className="text-white font-semibold text-lg truncate">
                {item.title}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Premium product quality
              </p>
            </div>
          </div>
        ))}

        {/* 🔥 Skeleton Loaders (only while loading) */}
        {loading &&
          Array.from({ length: LIMIT }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg animate-pulse"
            >
              <div className="h-52 bg-gray-700"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          ))}
      </div>

      {/* Load More */}
      <div className="flex flex-col items-center mt-14">
        <button
          disabled={disableButton || loading}
          onClick={() => setPage(prev => prev + 1)}
          className={`px-8 py-3 rounded-full text-lg font-semibold transition
            ${
              disableButton
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 hover:scale-105'
            }
            text-white shadow-lg`}
        >
          {loading ? 'Loading...' : disableButton ? 'No More Items' : 'Load More'}
        </button>

        {disableButton && (
          <p className="text-gray-400 mt-4 text-sm">
            🎉 You’ve reached the end
          </p>
        )}
      </div>
    </div>
  )
}

export default LoadMoreData