import './App.css'
import Home from './pages/Home'
import Shoes from './Components/Shoes Landing Page/Shoes'
import Carousel from './Components/carousel/Carousel'
import { Route, Routes } from 'react-router-dom'
import FoodItem from './Components/Food Items Filter/FoodItem'
import SingleSelectionAccordion from './Components/SINGLE SELECTION ACCORDION/SingleSelectionAccordion'
import MultiSelectionAccordion from './Components/Multi Selection Accordion/MultiSelectionAccordion'
import GenerateRandomColorPannel from './Components/Generate Random Color Pannel/GenerateRandomColorPannel'
import StarRatingApp from './Components/Star Rating/StarRatingApp'
import LodingItemApp from './Components/loading items/LodingItemApp'
import QrCodeGeneratorApp from './Components/QrCode Generator/QrCodeGeneratorApp'
import ScrollIndicatorApp from './Components/Scroll Indicator/ScrollIndicatorApp'
import SideBarApp from './Components/SideBar/SideBarApp'
import CurrencyConverterApp from './Components/Currency Converter/CurrencyConverterApp'


function App() {


  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Carousel' element={<Carousel
          url={"https://picsum.photos/v2/list"}
          page={'1'}
          limit={'5'}/>}>
          </Route>
          <Route path='/shoes-landing-page' element={<Shoes/>}></Route>
          <Route path='/food-items-filter' element={<FoodItem/>}></Route>
          <Route path='/single-selection-accordion' element={<SingleSelectionAccordion/>}></Route>
          <Route path='/multi-selection-accordion' element={<MultiSelectionAccordion/>}></Route>
          <Route path='/random-color-generator' element={<GenerateRandomColorPannel/>}></Route>
          <Route path='/star-rating' element={<StarRatingApp/>}></Route>
          <Route path='/loading-more-data' element={<LodingItemApp/>}></Route>
          <Route path='/qr-code-generator' element={<QrCodeGeneratorApp/>}></Route>
          <Route path='/scrolling-indicator' element={<ScrollIndicatorApp/>}></Route>
          <Route path='/side-bar' element={<SideBarApp/>}></Route>
          <Route path='/currency-converter' element={<CurrencyConverterApp/>}></Route>

        </Routes>
    </>
  )
}

export default App
