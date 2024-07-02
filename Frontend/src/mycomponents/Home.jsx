import { Button } from "../components/ui/button"

export default function Home(){
    return <div>
        <Hero_Header></Hero_Header>

    </div>
}
function Hero_Header(){
    return <div>
        <div className="flex justify-around mx-14 mt-16  ">
            <div className="pr-9 text-4xl ">Transform Your Space with Our Expert Cleaning Services</div>
            <div>
                <div className="text-2xl">Professional and Reliable Cleaning Solutions for Every Need.</div>
                <div className="flex justify- mt-2"> 
                    <div className=""><button  className="pr-3 py-3 text-sm hover:underline hover:text-black">Know more</button></div>
                    <div><Button>Book</Button></div>
                </div>
            </div>
        </div>
        <div className="flex justify-center m-60">slideshow</div>
    </div>
}