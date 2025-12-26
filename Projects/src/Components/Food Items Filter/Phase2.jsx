import React from 'react'

function Phase2({ items }) {
  return (
    <div
      className="
        w-full sm:w-87.5 md:w-100
        bg-gray-500/20 
        rounded-xl 
        border border-gray-400
        transition-all duration-300
        hover:shadow-lg hover:shadow-gray-400/50
        flex flex-col
      "
    >
      {/* Info Section */}
      <div className="flex flex-col sm:flex-row p-4 gap-4">
        {/* Image */}
        <div className="w-full sm:w-36 h-36 sm:h-36 rounded-full overflow-hidden mx-auto sm:mx-0">
          <img
            src={items.image}
            alt={items.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between w-full sm:w-1/2 px-1 mt-2 sm:mt-0">
          <h1 className="text-white text-base sm:text-lg font-semibold truncate">{items.name}</h1>
          <p className="text-white text-[10px] sm:text-sm line-clamp-3">{items.text}</p>

          {/* Price Box */}
          <div className="flex flex-col justify-evenly mt-2 space-y-1">
            <div className="text-white text-xs sm:text-sm">
              Original Price: {items.Price.orginal_Price}
            </div>
            <div className="text-white text-xs sm:text-sm">
              Discount: {items.Price.discount}%
            </div>
            <div className="text-white text-xs sm:text-sm">
              Current Price: {items.Price.current_Price}
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end p-2">
        <button className="
          bg-red-700 border border-brown-600 text-white px-3 py-1 rounded-md
          shadow-md shadow-gray-400/60 
          hover:bg-brown-700 hover:shadow-inner
          transition-all duration-200
          text-sm sm:text-base
        ">
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Phase2