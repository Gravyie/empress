import './App.css'
import Blogs from './components/Blogs'
import Categories from './components/Categories'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Hero3d from './components/Hero3d'
import NeedHelp from './components/NeedHelp'
import { PCComponents } from './components/PCComponents'
import ProductsGrid from './components/ProductGrid'
import TopBar from './components/TopBar'

function App() {
  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
      <TopBar />
      <div className='pt-16'>
        <Hero3d />
        <Categories />
        <ProductsGrid />
        <NeedHelp />
        <FAQs />
        <Blogs />
        <Footer />
      </div>
    </div>
  )
}

export default App
