import React, { useContext } from 'react'
import { FoodItems } from './Project3-storage'
import Phase2 from './Phase2'

function Phase1() {
  const { foodItems } = useContext(FoodItems)

  return (
    <div
      className="
        w-full
        min-h-250
        flex flex-col
        bg-cover bg-center
        relative
        -mt-12
      "
      style={{ backgroundImage: "url('/images/restutant1.jpg')" }}
    >

      {/* Items Container */}
      <div className="flex flex-wrap justify-evenly gap-8 py-16">
        {foodItems.map((items) => (
          <Phase2 key={items.id} items={items} />
        ))}
      </div>

    </div>
  )
}

export default Phase1