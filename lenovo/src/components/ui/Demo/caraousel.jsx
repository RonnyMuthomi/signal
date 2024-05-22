import img2 from "../Demo/ImagesDemo/img2.jpg"
import img1 from "../Demo/ImagesDemo/img1.jpg"
import img3 from "../Demo/ImagesDemo/img3.jpg"
import img4 from "../Demo/ImagesDemo/img4.jpg"
import img5 from "../Demo/ImagesDemo/img5.jpg"
import img6 from "../Demo/ImagesDemo/img6.jpg"
import img7 from "../Demo/ImagesDemo/img7.jpg"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  const Images=[
   img1,img2,img3,img4,img5,img6,img7,img2
    
  ];
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
