import AboutStats from "../components/AboutStats"
import CoreValues from "../components/CoreValues"
import Gallery from "../components/Gallery"
import InsightBlocks from "../components/InsightBlocks"
import OurStory from "../components/OurStory"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"

export default function About() {

    return (
        <div>
            <OurStory />
            <AboutStats />
            <InsightBlocks />
            <CoreValues />
            <Gallery />
            <Testimonials />
            <Team />
        </div>
    )
}