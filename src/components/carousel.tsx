"use client";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const CarouselComponent = () => {
    const [emblaRef] = useEmblaCarousel()
    return (

<div className="col-span-6 row-span-3 rounded-lg overflow-hidden 
      max-[576px]:aspect-[508/171]
      min-[576px]:h-[171px] 
      min-[768px]:h-[229px] 
      min-[992px]:h-[308px] 
      min-[1200px]:h-[256px] 
      min-[1400px]:h-[297px]">
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
                    <div className="w-[100%] max-[576px]:aspect-[508/171]
      min-[576px]:h-[171px] 
      min-[768px]:h-[229px] 
      min-[992px]:h-[308px] 
      min-[1200px]:h-[256px] 
      min-[1400px]:h-[297px] relative">
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
