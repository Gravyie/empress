import Hero3d from "../components/Hero3d"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"
import NeedHelp from "../components/NeedHelp"
import FAQs from "../components/FAQs"
import Blogs from "../components/Blogs"
import DealShowcase from "../components/DealShowcase"
import PCComponents from "../components/PCComponents"
 
export default function LandingPage() {
    return (
        <>
            <Hero3d />
            <Categories />
            <ProductGrid />
            <DealShowcase />
            <NeedHelp />
            <FAQs />
            <Blogs />
            <PCComponents />
        </>
    );
}