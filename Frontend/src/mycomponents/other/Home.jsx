/* eslint-disable no-unused-vars */
import { Button } from "../../components/ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Home(){
    return <div>
        <Hero_Header></Hero_Header>

    </div>
}
function Hero_Header(){
    return <div className="border-2 border-rose-500 ">
        <div className="flex justify-around mx-14 mt-16 border-2 border-rose-500  ">
            <div className="pr-9 text-4xl ">Transform Your Space with Our Expert Cleaning Services</div>
            <div>
                <div className="text-2xl">Professional and Reliable Cleaning Solutions for Every Need.</div>
                <div className="flex justify- mt-2"> 
                    <div className=""><button  className="pr-3 py-3 text-sm hover:underline hover:text-black">Know more</button></div>
                    <div><Button>Book</Button></div>
                </div>
            </div>
        </div>
        <div className=" ml-14 mr-14 mt-3 border-2 border-rose-500 ">
        <Carousel >
            <CarouselContent>
                <CarouselItem>
                    <img src="public\Commercial and Office Cleaning Sydney.jpeg" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src="public\Commercial and Office Cleaning Sydney.jpeg" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src="public\Commercial and Office Cleaning Sydney.jpeg" alt="" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

        </div>
    </div>
}