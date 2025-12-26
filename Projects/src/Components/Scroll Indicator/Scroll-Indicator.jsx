import React, { useEffect, useState } from 'react'
import { getScrollTrigger } from './fetchingApi'

function ScrollIndicator() {
  const[data, setData] = useState([])
  const[scrollPercentage, setScrollPercentage] = useState(0)

  const fetchingData = async ()=>{
    try {
      const items = await getScrollTrigger()
      if(items && items.products && items.products.length > 0 ){
        setData(items.products)
      }
    } catch (error) {
      console.log('error while fetching API', error)
    }
  }
  useEffect(()=>{
    fetchingData()
  }, [])

  const handelScrollPercentage = ()=>{
  //  console.log(
  //   document.body.scrollTop, 
  //   document.documentElement.scrollTop, 
  //   document.documentElement.scrollHeight, 
  //   document.documentElement.clientHeight
  //   )

    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercentage((scrolled / height) * 100)
  }
  useEffect(()=>{
   window.addEventListener('scroll', handelScrollPercentage)

   return ()=>{
    window.removeEventListener('scroll', ()=>  {})
   }
  }, [])
  // console.log(data, scrollPercentage)

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-amber-50 to-white">

    {/* HEADER */}
    <div className="sticky top-0 z-50 backdrop-blur-md bg-amber-600/90 shadow-lg">
      
      {/* Title */}
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
          Custom Scroll Items
        </h1>
      </div>
  
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-amber-300">
        <div
          className="h-full bg-blue-600 transition-all duration-200 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
    </div>
  
    {/* CONTENT */}
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {data && data.length > 0 ? (
        data.map((dataItems) => (
          <div
            key={dataItems.id}
            className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800 leading-relaxed">
              {dataItems.title}
            </h2>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  </div>
  )
}

export default ScrollIndicator