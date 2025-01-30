import Partner from "@/mycomponents/other/Partner"
// import Testimonial from "@/mycomponents/Testimonial"
import HeroHeader from "@/mycomponents/Homepage/HeroHeader"
import Services from "@/mycomponents/other/Services"
import Review from "@/mycomponents/Homepage/Review"
import Quote from "@/mycomponents/Homepage/Quote"   
import Footer from "@/mycomponents/Homepage/Footer" 

export default function Homepage(){
    return <div>
        <HeroHeader></HeroHeader>
        <Services></Services>
         <Review></Review>
        <Quote></Quote> 
        {/* <Partner></Partner> */}
        <Footer></Footer>
    </div>
}
