import Partner from "@/mycomponents/other/Partner"
// import Testimonial from "@/mycomponents/Testimonial"
import HeroHeader from "@/mycomponents/Homepage/HeroHeader"
import Services from "@/mycomponents/Homepage/Services"
import Review from "@/mycomponents/Homepage/Review"
import Quote from "@/mycomponents/Homepage/Quote"   
import Footer from "@/mycomponents/Homepage/Footer" 

export default function Homepage({ onImageLoad, onImageCount }) {
    return (
        <div>
            <HeroHeader onImageLoad={onImageLoad} onImageCount={onImageCount} />
            <Services onImageLoad={onImageLoad} onImageCount={onImageCount} />
            <Review />
            <Quote /> 
            {/* <Partner /> */}
            <Footer />
        </div>
    );
}
