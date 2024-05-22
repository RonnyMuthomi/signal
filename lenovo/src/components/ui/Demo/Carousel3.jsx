

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import img1 from "../Demo/Section5Images/img7.jpg"
import img2 from "../Demo/Section5Images/img1.jpg"
import img3 from "../Demo/Section5Images/img2.jpg"
import img4 from "../Demo/Section5Images/img3.jpg"
import img5 from "../Demo/Section5Images/img4.jpg"

export function CarouselDemo() {
  const Images=[img1,img5,img4,img3,img2]
  return (
    <Carousel className="w-full mt-5 ">
    <CarouselContent className="m-2.5 ">
      {Images.map((Images, index) => (
        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square w-full p-1">
                <img src={Images} alt={`Image ${index+1}`} />
                
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}
