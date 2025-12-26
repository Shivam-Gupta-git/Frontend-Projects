import { useContext } from 'react';
import { FoodItems } from './Project3-storage';

export default function Header() {
  const Buttons = ['All','Non-vegetarian', 'Fast-Food', 'South Indian']
  const { searchItem, filterFoodItems } = useContext(FoodItems)

  const handelFilterButton = (btn) => {
    filterFoodItems(btn)
  }

  const handelSearchValue = (event) => {
    event.preventDefault(); 
    const searchValue = event.target.value
    searchItem(searchValue)
  }

  return (
    <div className="w-full sticky top-0 left-0 bg-transparent flex flex-col z-20">

      {/* Navbar */}
      <div className="w-full h-17.5 flex flex-row justify-around items-center py-2 px-4 bg-amber-700">
        {/* Logo */}
        <div className="w-20 h-10 border border-gray-600 rounded-md flex items-center justify-center">
          <h1>Logo</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#" className="text-gray-300 font-semibold text-lg hover:text-white">HOME</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 font-semibold text-lg hover:text-white">ABOUT US</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 font-semibold text-lg hover:text-white">CONTACT US</a>
          </li>
          <li>
            <a href="#" className="text-gray-300 font-semibold text-lg hover:text-white">FEEDBACK</a>
          </li>
        </ul>

        {/* Search Box */}
        <div className="w-1/5">
          <input
            type="text"
            onChange={handelSearchValue}
            placeholder="Search Food..."
            className="w-full p-2 rounded-md border border-gray-800 bg-yellow-600 text-white outline-none"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 px-6 py-2 bg-transparent">
        {Buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handelFilterButton(btn)}
            className="bg-red-700 hover:bg-red-800 text-white font-medium text-base px-4 py-1 rounded-md shadow-md shadow-red-400/50 transition"
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  )
}