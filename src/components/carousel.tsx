"use client";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const CarouselComponent = () => {
    const [emblaRef] = useEmblaCarousel()
    return (

<div className="col-span-6 row-span-3 rounded-lg overflow-hidden h-[16rem]">
    <Carousel ref={emblaRef} opts={{
        align: "start",
        loop: true,
    }}
              plugins={[
                  Autoplay({
                      delay: 2000,
                  }),
              ]}>
        <CarouselContent>
            {[1,2].map((_, index) => (
                <CarouselItem key={index}>
                    <div className="w-[100%] h-[16rem] relative">
                        <Image
                            className="hover:scale-110 transition-all duration-300 ease-in-out"
                            alt='Mountains'
                            src={`/${_}.jpg`}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

</div>
)}
export default CarouselComponent;
