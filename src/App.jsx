import './App.css'
import ProductCategories from './components/Categories'
import Footer from './components/Footer'
import Hero3d from './components/Hero3d'
import { PCComponents } from './components/PCComponents'
import ProductsGrid from './components/ProductGrid'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className='min-h-screen bg-[#F8F8F8] overflow-x-hidden'>
      <TopBar />
      <div className='pt-20'>
        <Hero3d />
        <ProductsGrid />
        <PCComponents />
        <ProductCategories />
        <Footer />
      </div>
    </div>
  )
}

export default App
