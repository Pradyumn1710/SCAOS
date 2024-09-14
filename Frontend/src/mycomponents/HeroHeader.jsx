import { Button } from "../components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
    return (
        <div>
            <Hero_Header />
        </div>
    );
}

function Hero_Header() {
    return (
        <div className="flex justify-end items-center max-w-screen-xl mx-auto">
            <div className="md:w-1/2 p-2">
                <h1 className="text-5xl mb-4">Transform Your Space with Our Expert Cleaning Services</h1>
                <h2 className="text-xl mb-4">Professional and Reliable Cleaning Solutions for Every Need.</h2>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Book</button>
                    <Button>Know more</Button>
                </div>
            </div>
            <div className="md:w-1/2 p-2">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <img src="cleaning service-amico.svg" alt="Cleaning Service" className="w-full h-auto rounded" />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
