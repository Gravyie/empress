import Hero3d from "../components/Hero3d"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"
import NeedHelp from "../components/NeedHelp"
import Blogs from "../components/Blogs"
import DealShowcase from "../components/DealShowcase"
import PCComponents from "../components/PCComponents"
import TrustedBrands from "../components/TrustedBrands"
import FeaturedProducts from "../components/FeaturedProducts"
import { featuredProducts } from "../data/sampleData"
import LandingCarousel from "../components/LandingCarousel"
import Testimonials from "../components/Testimonials"
export default function LandingPage() {
    return (
        <>
            <Hero3d />
            <FeaturedProducts products={featuredProducts} />
            <Categories />
            <ProductGrid />
            <LandingCarousel />
            <DealShowcase />
            <NeedHelp />
            <Blogs />
            <TrustedBrands />
            <PCComponents />
            <Testimonials />
        </>
    );
}