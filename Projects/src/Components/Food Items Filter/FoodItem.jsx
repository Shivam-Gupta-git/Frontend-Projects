import React from 'react'
import FoodItemsProvider from './Project3-storage'
import Header from './Header'
import Home from './Home'

function FoodItem() {
  return (
   <FoodItemsProvider>
    <Header/>
    <Home/>
   </FoodItemsProvider>
  )
}

export default FoodItem