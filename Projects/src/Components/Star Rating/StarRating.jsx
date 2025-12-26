import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0)
  const [hovering, setHovering] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center bg-amber-100 p-6 min-h-100">
      
      <h1 className="bg-green-200 py-2 px-10 rounded-lg text-2xl font-bold shadow">
        Star Rating
      </h1>

      <div className="flex items-center justify-center mt-6 gap-1">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              size={40}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHovering(index)}
              onMouseLeave={() => setHovering(rating)}
              className={`cursor-pointer transition-all duration-300
                ${
                  index <= (hovering || rating)
                    ? "text-yellow-400 scale-110"
                    : "text-black"
                }
              `}
            />
          )
        })}
      </div>

    </div>
  )
}

export default StarRating;