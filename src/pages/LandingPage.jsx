import Hero3d from "../components/Hero3d"
import Categories from "../components/Categories"
import ProductGrid from "../components/ProductGrid"
import NeedHelp from "../components/NeedHelp"
import FAQs from "../components/FAQs"
import Blogs from "../components/Blogs"

export default function LandingPage() {
    return (
        <>
            <Hero3d />
            <Categories />
            <ProductGrid />
            <NeedHelp />
            <FAQs />
            <Blogs />
        </>
    );
}