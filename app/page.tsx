import Image from "next/image";
import LandingImage from "@/public/landing-image.png";
import LandingInfo from "@/public/fill.webp";
import Card1 from "@/components/card-1";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const MenuItems = [
    {
      img: 'https://www.bluecase.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/m/bm24ffd4gc_0004.jpg',
      title: 'Monitores',
    },
    {
      img: 'https://www.bluecase.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/0/00_3.png',
      title: 'Gabinetes',
    },
    {
      img: 'https://www.bluecase.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/m/bmb78-d2h_indisponivel.jpg',
      title: 'Placas Mãe',
    },
    {
      img: 'https://www.bluecase.com.br/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/g/bghpkm-01_000semcaixa.jpg',
      title: 'Periféricos',
    },
  ]
  return (
    <div className="flex-col items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="relative flex items-center justify-center w-full bg-accent">
        <Image className="max-h-96 w-full object-cover" alt="landing-image" src={LandingImage} width={1000} height={1000} />
        <Image className="absolute max-h-80 object-contain" alt="landing-info" src={LandingInfo} />
      </div>
      <section className="flex w-full flex-col items-center justify-center gap-4">
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-7xl mx-10 px-15"
        >
          <CarouselPrevious className="flex w-10 h-13 bg-primary justify-center outline-none border-none items-center left-2 text-accent hover:bg-primary/70 hover:text-white"/>
          <CarouselContent className="my-5 gap-5 pl-5">
            {MenuItems.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card1 img={item.img} title={item.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="flex w-10 h-13 bg-primary justify-center outline-none border-none items-center right-2 text-accent hover:bg-primary/70 hover:text-white">
            <FaArrowRight />
          </CarouselNext>
        </Carousel>
      </section>
    </div>
  );
}
