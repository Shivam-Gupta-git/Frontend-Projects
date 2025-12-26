import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../project/Carousel'
import ShoesPage from '../project/ShoesPage'
import FoodItemFilter from '../project/FoodItemFilter'
import SingleSelection from '../project/SingleSelection'
import MultiSelection from '../project/MultiSelection'
import GenerateRandomColor from '../project/GenerateRandomColor'
import Rating from '../project/Rating'
import LoadingItems from '../project/LoadingItems'
import QrCode from '../project/QrCode'
import ScrollIndicator from '../project/ScrollIndicator'
import Sidebar from '../project/Sidebar'
import CurrencyConverter from '../project/CurrencyConverter'


function Home() {
  const navigate = useNavigate()

  // Dynamic project data
  const projects = [
    {
      Component: Carousel,
      title: 'Carousel Project',
      description: 'A modern image slider',
      buttonText: 'View Carousel',
      path: '/carousel',  // route to navigate
      color: 'bg-orange-200',
    },
    {
      Component: ShoesPage,
      title: 'Shoes Page',
      description: 'Shoes catalog with add-to-cart functionality',
      buttonText: 'Check Shoes',
      path: '/shoes-landing-page',
      color: 'bg-green-200',
    },
    {
      Component: FoodItemFilter,
      title: 'Food Item Filter',
      description: 'Filter food items easily',
      buttonText: 'Explore Food',
      path: '/food-items-filter',
      color: 'bg-purple-200',
    },
    {
      Component: SingleSelection,
      title: 'Single Selection Accordion',
      description: 'Single Selection Accordion',
      buttonText: 'Explore',
      path: '/single-selection-accordion',
      color:'bg-yellow-200'
    },
    {
      Component: MultiSelection,
      title: "Multi Selection Accordion",
      description: 'multi Selection Accordion',
      buttonText: 'Explore',
      path: '/multi-selection-accordion',
      color: 'bg-pink-200'
    },
    {
      Component: GenerateRandomColor,
      title: 'Generate Random Color',
      description: 'Generate Random Collor Pannel',
      buttonText: 'Explore',
      path: '/random-color-generator',
      color: 'bg-red-200'
    },
    {
      Component: Rating,
      title: 'Star Rating',
      description: 'Star rating',
      buttonText: 'Explore',
      path: '/star-rating',
      color: 'bg-blue-200'
    },
    {
      Component: LoadingItems,
      title: 'Loading Data',
      description: 'Loadint More Data',
      buttonText: 'Explore',
      path: '/loading-more-data',
      color: 'bg-gray-200'
    },
    {
      Component: QrCode,
      title: 'Qr Code Generator',
      description: 'Qr Code Generator',
      buttonText: 'Explore',
      path: '/qr-code-generator',
      color: 'bg-sky-200'
    },
    {
      Component: ScrollIndicator,
      title: 'Scrolling Indicator',
      description: 'Scrolling Indicator',
      buttonText: 'Explore',
      path: '/scrolling-indicator',
      color: 'bg-[#a3b18a]'
    },
    {
      Component: Sidebar,
      title: 'Custome Sidebar',
      description: 'Custome Sidebar',
      buttonText: 'Explore',
      path: '/side-bar',
      color: 'bg-[#d4a373]'
    },
    {
      Component: CurrencyConverter,
      title: 'Currency Converter',
      description: 'Currency Converter',
      buttonText: 'Explore',
      path: '/currency-converter',
      color: 'bg-[#2a9d8f]'
    }

    // Add more projects dynamically
  ]

  return (
    <div className="w-full bg-gray-50 min-h-screen">

      {/* Header */}
      <header className="sticky top-0 z-20 w-full flex justify-center items-center p-6
                         bg-white shadow-md">
        <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-800">
          My Mini Projects
        </h1>
      </header>

      {/* Project Sections */}
      <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-12">
        {projects.map((project, index) => {
          const ProjectComponent = project.Component
          const isEven = index % 2 === 0

          return (
            <div
              key={index}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6`}
            >
              {/* Project Preview */}
              <div className={`w-full lg:w-1/2 h-64 flex items-center justify-center ${project.color} rounded-2xl shadow-lg`}>
                <ProjectComponent />
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
                <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <button
                  onClick={() => navigate(project.path)}
                  className="self-center lg:self-start bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition"
                >
                  {project.buttonText}
                </button>
              </div>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Home