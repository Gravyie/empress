import Hero3d from "../components/Hero3d"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"
import NeedHelp from "../components/NeedHelp"
import FAQs from "../components/FAQs"
import Blogs from "../components/Blogs"
import DealShowcase from "../components/DealShowcase"
import PCComponents from "../components/PCComponents"
import TrustedBrands from "../components/TrustedBrands"
import WhyChooseUs from "../components/WhyChooseUs"
import FeaturedProducts from "../components/FeaturedProducts"
import { featuredProducts } from "../data/sampleData"
 
export default function LandingPage() {
    return (
        <>
            <Hero3d />
            <WhyChooseUs />
            <FeaturedProducts products={featuredProducts} />
            <Categories />
            <ProductGrid />
            <DealShowcase />
            <NeedHelp />
            <FAQs />
            <Blogs />
            <TrustedBrands />
            <PCComponents />
        </>
    );
}