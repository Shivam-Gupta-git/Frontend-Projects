import React, { useEffect, useState } from 'react'
import { getSliderImageData } from './server'

function Carousel() {
  const [images, setImages] = useState([])
  const [currentSlider, setCurrentSlider] = useState(0)
  const [hovering, setHovering] = useState(false)

  const handelImageApi = async () => {
    const api = await getSliderImageData()
    setImages(api)
  }

  useEffect(() => {
    handelImageApi()
  }, [])

  useEffect(() => {
    if (hovering) {
      const timer = setInterval(() => {
        handelNext()
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [currentSlider, hovering])

  const handelPrevious = () => {
    setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
  }

  const handelNext = () => {
    setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
  }

  return (
    <div className="w-full min-h-screen bg-yellow-300 p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-4">Carousel</h1>

      <div
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="relative w-full sm:w-4/5 md:w-3/5 h-64 sm:h-80 md:h-96 rounded-2xl flex items-center justify-center overflow-hidden"
      >
        {/* Previous Button */}
        <button
          onClick={handelPrevious}
          className="absolute left-2 sm:left-4 md:left-6 text-2xl sm:text-3xl md:text-4xl cursor-pointer z-20 bg-black/30 rounded-full p-2 sm:p-3 md:p-4 hover:bg-black/50 transition"
        >
          ⬅️
        </button>

        {/* Images */}
        {images &&
          images.length &&
          images.map((imageItems, index) => (
            <img
              key={imageItems.id}
              src={imageItems.download_url}
              alt={imageItems.download_url}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                currentSlider === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}

        {/* Next Button */}
        <button
          onClick={handelNext}
          className="absolute right-2 sm:right-4 md:right-6 text-2xl sm:text-3xl md:text-4xl cursor-pointer z-20 bg-black/30 rounded-full p-2 sm:p-3 md:p-4 hover:bg-black/50 transition"
        >
          ➡️
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images &&
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlider(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                  currentSlider === index ? 'bg-blue-600' : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel