import React from 'react'

function PizzaBooking() {
  return (
    <div className=' w-full 
    sm:w-[80%] 
    md:w-[60%] 
    lg:w-[40%]
    bg-white/60
    rounded-2xl
    shadow-lg
    shadow-yellow-700
    p-4
    transition-transform duration-300
    hover:scale-[1.02]'>
     <div className='w-full text-center border-b-2 border-yellow-600 pb-2 mb-4'>
     <h2 className="text-xl sm:text-2xl font-bold">
         Pizza Booking Website
       </h2>
     </div>
         {/* Image */}
         <div
       className="w-full aspect-video overflow-hidden rounded-xl cursor-pointer"
       onClick={() => {
         window.location.href = "https://pizza-booking-web.vercel.app/Home.html";
       }}
     >
       <img
         src="/images/pizza.png"
         alt="Carousel Project"
         className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
       />
     </div>
    </div>
  )
}

export default PizzaBooking